package com.unissoft.test.service.impl;

import com.unissoft.test.mapper.inceptor.XSMXMapper;
import com.unissoft.test.service.MathService;
import com.unissoft.test.service.XSMXService;
import com.unissoft.test.utils.MathUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class XSMXServiceImpl implements XSMXService {
    @Autowired
    XSMXMapper xsmxMapper;
    @Autowired
    MathService mathService;

    @Override
    public Map<String, Object> jisuan(Map<String, Object> map) {
        List<String> colList = (List<String>) map.get("colNames");
        List<Map<String, Object>> list = xsmxMapper.selectList(map);
        Map<String, List<Double>> doubleMap = new HashMap<>();
        Map<String, Object> resultMap = new HashMap<>();
        colList.forEach(
                colName -> {
                    list.forEach(
                            mapTemp -> {
                                List l = doubleMap
                                        .getOrDefault(colName, new ArrayList<>());

                                l.add(Double.valueOf(String.valueOf(mapTemp.getOrDefault(colName, "0"))));
                                doubleMap.put(colName, l);

                            });
                });
        Map<String, String> colToComment = this.selectColNameAndComment(map.get("tableName").toString().toLowerCase());
        doubleMap.forEach((key, value) -> {
            resultMap.put(colToComment.get(key) + "-Deviation", mathService.getStandardDeviation(MathUtils.toPrimitive(value.toArray())));
            resultMap.put(colToComment.get(key) + "-Variance", mathService.getVariance(MathUtils.toPrimitive(value.toArray())));

        });
        double[][] result = new double[list.size()][colList.size()];
        List<List<Double>> listlist = list.stream().map(m -> m.values().stream().map(mm -> Double.valueOf(mm.toString())).collect(Collectors.toList())).collect(Collectors.toList());
        listlist.stream().map(x -> x.stream().mapToDouble(Double::doubleValue).toArray()).collect(Collectors.toList()).toArray(result);
        resultMap.put("Correlation", mathService.getPearsonsCorrelation(result));
        resultMap.put("PValue", mathService.getPearsonsCorrelationPValue(result));
//    System.out.println(mathService.getPearsonsCorrelationPValue(result)[0][1]);
        return resultMap;
    }

    @Override
    public Map<String, double[][]> XGXFX(Map<String, Object> map) {
        List<String> colList = (List<String>) map.get("colNames");
        List<Map<String, Object>> list = xsmxMapper.selectList(map);
        Map<String, List<Double>> doubleMap = new HashMap<>();
        Map<String, double[][]> resultMap = new HashMap<>();
        colList.forEach(
                colName -> {
                    list.forEach(
                            mapTemp -> {
                                List l = doubleMap
                                        .getOrDefault(colName, new ArrayList<>());

                                l.add(Double.valueOf(String.valueOf(mapTemp.getOrDefault(colName, "0"))));
                                doubleMap.put(colName, l);

                            });
                });
        double[][] result = new double[list.size()][colList.size()];
        List<List<Double>> listlist = list.stream().map(m -> m.values().stream().map(mm -> Double.valueOf(mm.toString())).collect(Collectors.toList())).collect(Collectors.toList());
        listlist.stream().map(x -> x.stream().mapToDouble(Double::doubleValue).toArray()).collect(Collectors.toList()).toArray(result);
        resultMap.put("Correlation", mathService.getPearsonsCorrelation(result));
        resultMap.put("PValue", mathService.getPearsonsCorrelationPValue(result));
        return resultMap;
    }

    @Override
    public List<Map<String, Object>> selectList(List<String> colName, String tableName) {
        Map map = new HashMap();
        map.put("colNames", colName);
        map.put("tableName", tableName);
        return xsmxMapper.selectList(map);
    }

    @Override
    @Cacheable
    public List<String> GZList() {
        return xsmxMapper.GZList();
    }

    @Cacheable(cacheNames = "selectColName", key = "#tableName")
    @Override
    public List<String> selectColName(String tableName) {
        return xsmxMapper.selectColName(tableName).stream().map(x -> x.get("column_name")).collect(Collectors.toList());
    }

    @Cacheable(cacheNames = "selectColNameAndComment", key = "#tableName")
    @Override
    public Map<String, String> selectColNameAndComment(String tableName) {
        final Map<String, String> result = new HashMap<>();
//        xsmxMapper.selectColName(tableName).stream().forEach(x -> {
//            result.put(x.get("COLUMN_NAME"), x.get("COLUMN_COMMENT"));
//        });
        xsmxMapper.selectColName(tableName.toLowerCase()).stream().forEach(x -> {
            result.put(x.get("column_name"), x.get("commentstring"));
        });
        return result;
    }
}