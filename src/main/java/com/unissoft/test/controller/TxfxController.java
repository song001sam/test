package com.unissoft.test.controller;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.unissoft.test.entity.Xsmx_box;
import com.unissoft.test.service.MathService;
import com.unissoft.test.service.XSMXService;

@RestController
public class TxfxController {

	@Autowired
	XSMXService service;

	@Autowired
	MathService math;

	@RequestMapping(value = "/Txfx/bar/colNameAndComment/{tableName}", method = RequestMethod.GET)
	public Map<String, String> colName(@PathVariable String tableName) {

		System.out.println(tableName);
		return service.selectColNameAndComment(tableName);
	}

	@RequestMapping(value = "/Txfx/bar/echartsshow/", method = RequestMethod.POST)
	public List<Map<String, String>> echartsshow(@RequestBody Map<String, Object> map) {

		int stepCount = Integer.valueOf(map.getOrDefault("stepCount", 8).toString());
		String GZ = map.get("GZ") != null ? map.get("GZ").toString() : null;
		List<Map<String, String>> targetCols = (List<Map<String, String>>) map.get("targetCols");
		List<String> colName = targetCols.stream().map(x -> x.get("key")).collect(Collectors.toList());
		List<Map<String, Object>> result = service.selectList(colName, map.get("tableName").toString(), GZ);
		double[] doubleArray = result.stream().map(x -> Double.valueOf(x.get(colName.get(0)).toString())).mapToDouble(Double::doubleValue).toArray();

		int maxDigits = Arrays.stream(doubleArray).mapToInt(x -> getNumberDecimalDigits(x)).max().getAsInt();
		DecimalFormat df = new DecimalFormat("#.00");
		String pattern = "#.";
		for (int i = 0; i < maxDigits + 1; i++) {
			pattern += "#";
		}
		df.applyPattern(pattern);
		final double max = Arrays.stream(doubleArray).max().getAsDouble();// mathService.getMax(doubleArray);
		final double min = Arrays.stream(doubleArray).min().getAsDouble();// mathService.getMin(doubleArray);
		double step = (max - min) / stepCount;
		step = Double.valueOf(df.format(step));
		List<Map<String, String>> resultList = new ArrayList<>();
		for (int i = 0; i < stepCount; i++) {
			final int c = i;
			final double stepDouble = step;
			Map<String, String> resultMap = new HashMap<>();
			String stepMin = df.format(min + (c * step));
			String stepMax = df.format(min + ((c + 1) * step));
			resultMap.put("xAxis", stepMin + "~" + stepMax);
			resultMap.put("yAxis",
					String.valueOf(Arrays.stream(doubleArray).filter(x -> x >= min + (c * stepDouble) && x < min + ((c + 1) * stepDouble)).count()));
			resultList.add(resultMap);
		}

		return resultList;
	}

	@RequestMapping(value = "/Txfx/bar/dataCount/", method = RequestMethod.POST)
	public Map<String, Object> dataCount(@RequestBody Map<String, Object> map) {

		int stepCount = Integer.valueOf(map.getOrDefault("stepCount", 8).toString());
		String GZ = map.get("GZ") != null ? map.get("GZ").toString() : null;
		List<Map<String, String>> targetCols = (List<Map<String, String>>) map.get("targetCols");
		List<String> colName = targetCols.stream().map(x -> x.get("key")).collect(Collectors.toList());
		List<Map<String, Object>> result = service.selectList(colName, map.get("tableName").toString(), GZ);
		double[] arr = result.stream().map(x -> Double.valueOf(x.get(colName.get(0)).toString())).mapToDouble(Double::doubleValue).toArray();


		Map<String, Object> dataMap = new HashMap<String, Object>();
		dataMap.put("count", arr.length);// 总数
		dataMap.put("avg", math.getAverage(arr));// 平均值
		dataMap.put("max", math.getMax(arr));// 最大值
		dataMap.put("min", math.getMin(arr));// 最小值
		dataMap.put("sum", math.getSum(arr));// 总和
		dataMap.put("median", math.getMedian(arr));// 中位数（中值）
		dataMap.put("variance", math.getVariance(arr));// 方差
		dataMap.put("standard", math.getStandardDeviation(arr));// 标准差
		dataMap.put("range", math.getMax(arr) - math.getMin(arr));// 全距
		dataMap.put("kurtosis", math.getKurtosis(arr));// 峰度
		dataMap.put("skewness", math.getSkewness(arr));// 偏度
		dataMap.put("variable", math.getStandardDeviation(arr) / math.getAverage(arr));// 变异系数

		return dataMap;
	}

	@RequestMapping(value = "/Txfx/boxplot/echartsData/", method = RequestMethod.POST)
	public Map<String, Object> echartsDataForBox(@RequestBody Map<String, Object> map) {
		Map<String, Object> retMap = new HashMap<>();
		List<double[]> yAxis = new ArrayList<>();
		List<String> xAxis = new ArrayList<>();
		int stepCount = Integer.valueOf(map.getOrDefault("stepCount", 8).toString());
		String GZ = map.get("GZ") != null ? map.get("GZ").toString() : null;
		List<Map<String, String>> upCols = (List<Map<String, String>>) map.get("upCols");
		List<String> colName = upCols.stream().map(x -> x.get("key")).collect(Collectors.toList());
		if (map.get("downCols") != null && ((List<Map<String, String>>) map.get("downCols")).size() > 0) {
			List<Map<String, String>> downCols = (List<Map<String, String>>) map.get("downCols");
			List<String> groupColName = downCols.stream().map(x -> x.get("key")).collect(Collectors.toList());
			List<Xsmx_box> result = service.selectListGroupBy(colName.get(0), map.get("tableName").toString(), groupColName.get(0));
			// double[] doubleArray = result.stream().map(x ->
			// Double.valueOf(x.get(colName.get(0)).toString())).mapToDouble(Double::doubleValue).toArray();
			for (Xsmx_box mapV : result) {
				String res = mapV.getA().replace("[", "");
				res = res.replace("]", "");
				String[] splitStr = res.split(",");
				List<Double> doubList = new ArrayList<>();
				for (String str : splitStr) {
					if (StringUtils.isNotBlank(str)) {
						doubList.add(Double.valueOf(str.replace("\"", "").trim()));
					}
					;
				}
				int length = doubList.size();
				double[] doubleArray = new double[length];
				for (int i = 0; i < length; i++) {
					doubleArray[i] = (Double) doubList.get(i);
				}
				xAxis.add(mapV.getB().trim());
				yAxis.add(doubleArray);
			}
			// yAxis.add(doubleArray);
			// xAxis.add("xxx");
		} else {
			List<Map<String, Object>> result = service.selectList(colName, map.get("tableName").toString(), GZ);
			double[] doubleArray = result.stream().map(x -> Double.valueOf(x.get(colName.get(0)).toString())).mapToDouble(Double::doubleValue)
					.toArray();
			yAxis.add(doubleArray);
			xAxis.add("xxx");
		}
		retMap.put("xAxis", xAxis);
		retMap.put("yAxis", yAxis);
		return retMap;
	}

	public int getNumberDecimalDigits(double number) {
		if (number == (long) number) {
			return 0;
		}
		int i = 0;
		while (true) {
			i++;
			if (number * Math.pow(10, i) % 1 == 0) {
				return i;
			}
		}
	}

	@RequestMapping(value = "/Txfx/scatter/echartsshow/", method = RequestMethod.POST)
	public Map<String, Object> scatterShow(@RequestBody Map<String, Object> map) {

		List<Map<String, String>> XCol = (List<Map<String, String>>) map.get("XCol");
		List<Map<String, String>> YCols = (List<Map<String, String>>) map.get("YCols");
		String GZ = map.get("GZ") != null ? map.get("GZ").toString() : null;

		List<String> XcolName = XCol.stream().map(x -> x.get("key")).collect(Collectors.toList());
		List<String> YcolNames = YCols.stream().map(x -> x.get("key")).collect(Collectors.toList());
		List<String> colNames = new ArrayList<String>();
		colNames.addAll(XcolName);
		colNames.addAll(YcolNames);

		List<Map<String, Object>> result = service.selectList(colNames, map.get("tableName").toString(), GZ);

		Map<String, Object> data = new HashMap<String, Object>();

		for (String Ycol : YcolNames) {

			List<Object> dataList = new ArrayList<Object>();

			for (Map<String, Object> map2 : result) {
				List<Double> dList = new ArrayList<Double>();
				dList.add(Double.valueOf(map2.get(XcolName.get(0)).toString()));
				dList.add(Double.valueOf(Double.valueOf(map2.get(Ycol).toString())));
				dataList.add(dList);
			}

			data.put(Ycol, dataList);
		}

		return data;
	}

	@RequestMapping(value = "/Txfx/line/echartsshow/", method = RequestMethod.POST)
	public Map<String, Object> lineShow(@RequestBody Map<String, Object> map) {

		List<Map<String, String>> XCol = (List<Map<String, String>>) map.get("XCol");
		List<Map<String, String>> YCols = (List<Map<String, String>>) map.get("YCols");
		String GZ = map.get("GZ") != null ? map.get("GZ").toString() : null;

		List<String> XcolName = XCol.stream().map(x -> x.get("key")).collect(Collectors.toList());
		List<String> YcolNames = YCols.stream().map(x -> x.get("key")).collect(Collectors.toList());

		List<Map<String, Object>> xResult = service.selectList(XcolName, map.get("tableName").toString(), GZ);
		List<Map<String, Object>> yResult = service.selectList(YcolNames, map.get("tableName").toString(), GZ);

		Map<String, Object> result = new HashMap<String, Object>();
		result.put("xData", xResult.stream().map(x -> Double.valueOf(x.get(XcolName.get(0)).toString())).mapToDouble(Double::doubleValue).toArray());

		for (String Ycol : YcolNames) {
			result.put(Ycol, yResult.stream().map(x -> Double.valueOf(x.get(Ycol).toString())).mapToDouble(Double::doubleValue).toArray());
		}

		return result;
	}

}
