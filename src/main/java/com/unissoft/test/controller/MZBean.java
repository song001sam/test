package com.unissoft.test.controller;

import com.unissoft.test.mapper.inceptor2.CPKMZMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class MZBean {
    public Map<String, Object> posMaps = new HashMap<>();

    public Map<String, Object> gzMaps = new HashMap<>();

    public Map<String, Object> bbMaps = new HashMap<>();

    public Map<String, Object> cpkMaps = new HashMap<>();

    @Autowired
    private CPKMZMapper mapper;


    @PostConstruct
    public void init() {
//        List<Map<String, String>> posLists = mapper.selectPosALL();
//        List<Map<String, String>> gzLists = mapper.selectGZALL();
//        List<Map<String, String>> bbLists = mapper.selectBBALL();
//        List<Map<String, String>> cpkLists = mapper.selectCPKItemALL();
//
//        for (Map<String,String> map: posLists) {
//            if(map != null){
//                posMaps.put(map.get("posname"),map.get("posvalue"));
//            }
//        }
//        for (Map<String,String> map: gzLists) {
//            if(map != null){
//                gzMaps.put(map.get("gzname"),map.get("gzvalue"));
//            }
//        }
//        for (Map<String,String> map: bbLists) {
//            if(map != null){
//                bbMaps.put(map.get("bbname"),map.get("bbvalue"));
//            }
//        }
//        for (Map<String,String> map: cpkLists) {
//            if(map != null){
//                cpkMaps.put(map.get("cpkname"),map.get("cpkvalue"));
//            }
//        }
    }

}
