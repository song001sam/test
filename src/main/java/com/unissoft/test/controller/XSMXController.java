package com.unissoft.test.controller;

import com.unissoft.test.service.XSMXService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
public class XSMXController {

    @Autowired
    XSMXService service;


    @RequestMapping(value = "/XSMX/jisuan", method = RequestMethod.POST)
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

    @RequestMapping(value = "/XSMX/colName/{tableName}", method = RequestMethod.GET)
    public List<String> colName(@PathVariable String tableName) {
        return service.selectColName(tableName);
    }
}
