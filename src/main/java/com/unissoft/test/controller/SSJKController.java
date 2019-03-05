package com.unissoft.test.controller;


import com.unissoft.test.service.SSJKService;
import org.apache.commons.collections.map.HashedMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.DateFormat;
import java.text.ParsePosition;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RestController
public class SSJKController {

    @Autowired
    private SSJKService service;

    /**
     * 查询实时监控头信息CCM
     *
     * @param map
     * @return
     */
    @RequestMapping(value = "/SSJK/queryCCMHeaderInfo", method = RequestMethod.POST)
    public Map<String, Object> queryCCMHeaderInfo(@RequestBody Map<String, String> map) {
        //System.out.println(map.get("plateId"));
        Map<String, Object> retMap = service.queryCCMHeaderInfo(map.get("lzNum"));
        //System.out.println(retMap);
        System.out.println(retMap);
        if (retMap == null) {
            //如果该时段没有目标拉速，给后台一个-1的标识
            retMap.put("gangzhong", "");
            retMap.put("luhao", "");
            retMap.put("duanmian", "");
            retMap.put("target", "-1");
        }

        return retMap;
    }

    //工位1的信息
    @RequestMapping(value = "/SSJK/queryBOFHeaderInfo", method = RequestMethod.POST)
    public Map<String, Object> queryBOFHeaderInfo(@RequestBody Map<String, String> map) {
        //System.out.println(map.get("plateId"));
        Map<String, Object> retMap = service.queryBOFHeaderInfo(map.get("lzNum"));
        //System.out.println(retMap);
        System.out.println(retMap);


        if (retMap == null) {
            //如果该时段没有目标拉速，给后台一个-1的标识
            retMap.put("gangzhong", "");
            retMap.put("luhao", "");
            retMap.put("lucikaishishijian", "");
        } else {
            DateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            String time = df.format(retMap.get("lucikaishishijian"));
            System.out.println(time);
            retMap.put("lucikaishishijian", time);
        }
        return retMap;
    }

    /**
     * 查询实时监控头信息LF
     *
     * @param map
     * @return
     */
    @RequestMapping(value = "/SSJK/queryLFHeaderInfo", method = RequestMethod.POST)
    public Map<String, Object> queryLFHeaderInfo(@RequestBody Map<String, String> map) {
        Map<String, Object> retMap = service.queryLFHeaderInfo(map);
        System.out.println(retMap);
        //Map<String,Object> retMap = new HashedMap();
        if (retMap == null) {
            retMap = new HashMap<>();
//            retMap.put("gangzhong","");
//            retMap.put("luhao","");
//            retMap.put("gangshuizhongliang","");
        } else {
            DateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            String time = df.format(retMap.get("lucikaishishijian"));
            System.out.println(time);
            retMap.put("lucikaishishijian", time);

        }
        return retMap;
    }

    /**
     * 查询实时监控头信息RF
     *
     * @param map
     * @return
     */
    @RequestMapping(value = "/SSJK/queryRHHeaderInfo", method = RequestMethod.POST)
    public Map<String, Object> queryRHHeaderInfo(@RequestBody Map<String, String> map) {
        Map<String, Object> retMap = service.queryRHHeaderInfo(map);
        System.out.println(retMap);
        //Map<String,Object> retMap = new HashedMap();
        if (retMap == null) {
            System.out.println();
            retMap = new HashMap<>();
        } else {
            DateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            String time = df.format(retMap.get("lucikaishishijian"));
            System.out.println(time);
            retMap.put("lucikaishishijian", time);

        }
        return retMap;
    }


}
