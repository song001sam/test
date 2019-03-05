package com.unissoft.test.controller;

import com.unissoft.test.service.QCMService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@Controller
public class QCMController {
    @Autowired
    private QCMService service;

    @RequestMapping(value = "/QCM/queryInfoByPlateId", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> queryInfoByPlateId(@RequestBody Map<String, String> map) {
        //System.out.println(map.get("plateId"));
        Map<String, Object> retMap = service.queryInfoByPlateId(map.get("plateId"));
        //System.out.println(retMap);
        return retMap;
    }

    @RequestMapping(value = "/QCM/getEchartsByHeatId", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> getEchartsByHeatId(@RequestBody Map<String, String> map) {

        Map<String, Object> retMap = service.getEchartsByHeatId(map);
        System.out.println(retMap);
        if (retMap == null) {
            retMap = new HashMap<>();
            retMap.put("error", true);
        }
        return retMap;
    }

    @RequestMapping(value = "/QCM/getEchartsBySlabId", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> getEchartsBySlabId(@RequestBody Map<String, String> map) {

        Map<String, Object> retMap = service.getEchartsBySlabId(map);
        System.out.println(retMap);
        if (retMap == null) {
            retMap = new HashMap<>();
            retMap.put("error", true);
        }
        return retMap;
    }

    @RequestMapping(value = "/QCM/getStreamBySlabId", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> getStreamBySlabId(@RequestBody Map<String, Object> map) {

        Map<String, Object> retMap = service.getStreamBySlabId(map);
        System.out.println(retMap);
        return retMap;
    }

    @RequestMapping(value = "/QCM/getEchartsBySlabIdNoStream", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> getEchartsBySlabIdNoStream(@RequestBody Map<String, String> map) {

        Map<String, Object> retMap = service.getEchartsBySlabIdNoStream(map);
        System.out.println(retMap);
        if (retMap == null) {
            retMap = new HashMap<>();
            retMap.put("error", true);
        }
        return retMap;
    }

    @RequestMapping(value = "/QCM/queryEchartsByPos", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> queryEchartsByPos(@RequestBody Map<String, String> map) {

        Map<String, Object> retMap = service.queryEchartsByPos(map);
//        System.out.println(retMap);
        if (retMap == null) {
            retMap = new HashMap<>();
            retMap.put("error", true);
        }
        return retMap;
    }
}
