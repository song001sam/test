package com.unissoft.test.controller;

import com.unissoft.test.service.XSMXService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class XSMXController {

    @Autowired
    XSMXService service;


    @RequestMapping(value = "/XSMX/jisuan", method = RequestMethod.POST)
    public Map<String, Object> jisuan(@RequestBody Map<String, Object> map) {
        return service.jisuan(map);
    }

    @RequestMapping(value = "/XSMX/colName/{tableName}", method = RequestMethod.GET)
    public List<String> colName(@PathVariable String tableName) {
        return service.selectColName(tableName);
    }
}
