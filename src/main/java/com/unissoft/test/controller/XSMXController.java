package com.unissoft.test.controller;

import com.unissoft.test.service.XSMXService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;
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
        List<String> colName = new ArrayList<>();
        List<String> colInName = ((List<Map<String, String>>) map.get("colIn")).stream().map(x -> x.get("key")).collect(Collectors.toList());
        List<String> colIOutName = ((List<Map<String, String>>) map.get("colOut")).stream().map(x -> x.get("key")).collect(Collectors.toList());
        colInName.forEach(x -> colName.add(x));
        colIOutName.forEach(x -> colName.add(x));
        map.put("colNames", colName);
        // 查询结果
//        System.out.println(map);
        Map<String, double[][]> result = service.XGXFX(map, colInName.size(), colIOutName.size());

        return result;
    }

    @RequestMapping(value = "/XSMX/FCFX", method = RequestMethod.POST)
    public Map<String, Double> FCFX(@RequestBody Map<String, Object> map) {
        //获取输入输出列名
        List<String> colInName = ((List<Map<String, String>>) map.get("colIn")).stream().map(x -> x.get("key")).collect(Collectors.toList());
        map.put("colNames", colInName);
        // 查询结果
        return service.FCFX(map);
    }

    @RequestMapping(value = "/XSMX/ZYFX", method = RequestMethod.POST)
    public Map<String, double[][]> ZYFX(@RequestBody Map<String, Object> map) {
        //获取输入输出列名

        List<String> colInName = ((List<Map<String, String>>) map.get("colIn")).stream().map(x -> x.get("key")).collect(Collectors.toList());
        map.put("colNames", colInName);
        // 查询结果
        return service.ZYFX(map, colInName.size());
    }
    @RequestMapping(value = "/XSMX/PXGFX", method = RequestMethod.POST)
    public Map<String, Double[][]> PXGFX(@RequestBody Map<String, Object> map) {
        //获取输入输出列名
        List<String> colName = new ArrayList<>();
        List<String> colInName = ((List<Map<String, String>>) map.get("colIn")).stream().map(x -> x.get("key")).collect(Collectors.toList());
        List<String> colIOutName = ((List<Map<String, String>>) map.get("colOut")).stream().map(x -> x.get("key")).collect(Collectors.toList());
        colInName.forEach(x -> colName.add(x));
        colIOutName.forEach(x -> colName.add(x));
        map.put("colNames", colName);
        Map<String, Double[][]> returnMap = new HashMap<>();
        returnMap.put("PXGFX", service.PXGFX(map, colInName.size(), colIOutName.size()));
        // 查询结果
        return returnMap;
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

//    private void input (Map<String, Object> map){
//        List<String> colName = new ArrayList<>();
//        List<String> colInName = ((List<Map<String, String>>) map.get("colIn")).stream().map(x -> x.get("key")).collect(Collectors.toList());
//        List<String> colIOutName = ((List<Map<String, String>>) map.get("colOut")).stream().map(x -> x.get("key")).collect(Collectors.toList());
//        colInName.forEach(x -> colName.add(x));
//        colIOutName.forEach(x -> colName.add(x));
//        map.put("colNames", colName);
//    }
}
