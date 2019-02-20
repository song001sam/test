package com.unissoft.test.controller;

import com.unissoft.test.service.XSMXService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
public class XSMXController {

    @Autowired
    XSMXService service;


    @RequestMapping(value = "/XSMX/jisuan", method = RequestMethod.POST)
    @Deprecated
    public Map<String, Object> jisuan(@RequestBody Map<String, Object> map) {
        List<String> colName = service.selectColName(map.get("tableName").toString().toLowerCase());
        colName = colName.stream().filter(x -> x.startsWith("in_") || x.startsWith("out_") || x.startsWith("pro_")).collect(Collectors.toList());
        System.out.println(colName);
        map.put("colNames", colName);
        Map result = service.jisuan(map);
        result.put("colNames", colName);
        result.put("colNameToComment", service.selectColNameAndComment(map.get("tableName").toString().toLowerCase()));
        return result;
    }

    @RequestMapping(value = "/XSMX/XGXFX", method = RequestMethod.POST)
    public Map<String, double[][]> XGXFX(@RequestBody Map<String, Object> map) {
        //获取输入输出列名
        List<String> colInName = ((List<Map<String, String>>) map.get("colIn")).stream().map(x -> x.get("key")).collect(Collectors.toList());
        List<String> colIOutName = ((List<Map<String, String>>) map.get("colOut")).stream().map(x -> x.get("key")).collect(Collectors.toList());
//        String GZ = (String) map.getOrDefault("GZ","");
        List<String> colName = new ArrayList<>();
        colName.addAll(colInName);
        colName.addAll(colIOutName);
        map.put("colNames", colName);
        //查询结果
        Map<String, double[][]> result = service.XGXFX(map);
        int inCount = colInName.size();
        int outCount = colIOutName.size();
        //结果处理，去掉不需要的数据
        double[][] correlation = result.get("Correlation");
        double[][] correlationNew = new double[inCount][outCount];
        Arrays.stream(correlation)
                .limit(inCount)
                .map(x -> Arrays.stream(x).skip(inCount).toArray())
                .collect(Collectors.toList()).toArray(correlationNew);
        result.put("Correlation", correlationNew);
        double[][] pValue = result.get("PValue");
        double[][] pValueNew = new double[inCount][outCount];
        Arrays.stream(pValue)
                .limit(inCount)
                .map(x -> Arrays.stream(x).skip(inCount).toArray())
                .collect(Collectors.toList())
                .toArray(pValueNew);
        result.put("PValue", pValueNew);

        return result;
    }

    @RequestMapping(value = "/XSMX/colNameAndComment/{tableName}", method = RequestMethod.GET)
    public Map<String, String> colNameAndComment(@PathVariable String tableName) {
        return service.selectColNameAndComment(tableName);
    }

    //暂时未实现
    @RequestMapping(value = "/XSMX/colNameNANCheck/{tableName}", method = RequestMethod.GET)
    public Map<String, String> colNameNANCheck(@PathVariable String tableName) {
        return service.selectColNameAndComment(tableName);
    }
    @RequestMapping(value = "/XSMX/colName/{tableName}", method = RequestMethod.GET)
    public List<String> colName(@PathVariable String tableName) {
        return service.selectColName(tableName);
    }

    @RequestMapping(value = "/XSMX/GZList", method = RequestMethod.GET)
    public List<String> colName() {
        return service.GZList();
    }
}
