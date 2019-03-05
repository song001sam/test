package com.unissoft.test.controller;

import com.github.pagehelper.PageInfo;
import com.unissoft.test.service.ZLPJService;
import com.unissoft.test.service.ZLZDService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
public class ZLPJController {

    @Autowired
    private ZLPJService service;

    //    @RequestMapping(value ="/ZLZD/queryInfoByLuHao",method = RequestMethod.POST)
//    public List<Map<String,Object>> queryInfoByLuHao(@RequestBody Map<String,String> map){
//        List<Map<String, Object>> retList = service.queryInfoByLuHao(map);
//        System.out.println(retList);
//        if(retList != null){
//            for (Map<String, Object> retMap:retList) {
//                DateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//                String time = df.format(retMap.get("rcv_time"));
//                System.out.println(time);
//                retMap.put("rcv_time",time);
//            }
//        }
//        return retList;
//
//    }
    @RequestMapping(value = "/ZLPJ/queryInfoByLuHao/{currentPage}/{pageSize}", method = RequestMethod.POST)
    public PageInfo<Map<String, Object>> queryInfoByLuHao(@PathVariable int currentPage, @PathVariable int pageSize, @RequestBody Map<String, String> map) {
        return service.queryInfoByLuHao(currentPage, pageSize, map);

//        if(retList != null){
//            for (Map<String, Object> retMap:retList) {
//                DateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//                String time = df.format(retMap.get("rcv_time"));
//                System.out.println(time);
//                retMap.put("rcv_time",time);
//            }
//        }


    }

    @RequestMapping(value = "/ZLPJ/queryAllInfoByLuHao/{currentPage}/{pageSize}", method = RequestMethod.POST)
    public PageInfo<Map<String, Object>> queryAllInfoByLuHao(@PathVariable int currentPage, @PathVariable int pageSize) {
        return service.queryAllInfoByLuHao(currentPage, pageSize);

//        if(retList != null){
//            for (Map<String, Object> retMap:retList) {
//                DateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//                String time = df.format(retMap.get("rcv_time"));
//                System.out.println(time);
//                retMap.put("rcv_time",time);
//            }
//        }


    }

}
