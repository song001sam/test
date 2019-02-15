package com.unissoft.test.controller;

import com.github.pagehelper.PageInfo;
import com.unissoft.test.entity.TGt;
import com.unissoft.test.entity.TsGthl;
import com.unissoft.test.service.GthlService;
import com.unissoft.test.service.MathService;
import com.unissoft.test.service.TGtService;
import com.unissoft.test.service.XSMXService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.DoubleStream;

@RestController
public class TxfxController {

    @Autowired
    XSMXService service;

    //    @Autowired
//    MathService mathService;
    @RequestMapping(value = "/Txfx/bar/colNameAndComment/{tableName}", method = RequestMethod.GET)
    public Map<String, String> colName(@PathVariable String tableName) {

        System.out.println(tableName);
        return service.selectColNameAndComment(tableName);
    }

    @RequestMapping(value = "/Txfx/bar/echartsshow/", method = RequestMethod.POST)
    public List<Map<String, String>> echartsshow(@RequestBody Map<String, Object> map) {
        DecimalFormat df = new DecimalFormat("#.00");
        int stepCount = Integer.valueOf(map.getOrDefault("stepCount", 8).toString());
        List<Map<String, String>> targetCols = (List<Map<String, String>>) map.get("targetCols");
        List<String> colName = targetCols.stream().map(x -> x.get("key")).collect(Collectors.toList());
        List<Map<String, Object>> result = service.selectList(colName, map.get("tableName").toString());
        double[] doubleArray = result.stream().map(x -> Double.valueOf(x.get(colName.get(0)).toString())).mapToDouble(Double::doubleValue).toArray();

        final double max = Arrays.stream(doubleArray).max().getAsDouble();//mathService.getMax(doubleArray);
        final double min = Arrays.stream(doubleArray).min().getAsDouble();//mathService.getMin(doubleArray);
        final double step = (max - min) / stepCount;
        List<Map<String, String>> resultList = new ArrayList<>();
        for (int i = 0; i < stepCount; i++) {
            final int c = i;
            Map<String, String> resultMap = new HashMap<>();
            resultMap.put("xAxis", df.format(min + (c * step)) + "~" + df.format(min + ((c + 1) * step)));
            resultMap.put("yAxis", String.valueOf(Arrays.stream(doubleArray).filter(x -> x >= min + (c * step) && x < min + ((c + 1) * step)).count()));
            resultList.add(resultMap);
        }

        return resultList;
    }
}
