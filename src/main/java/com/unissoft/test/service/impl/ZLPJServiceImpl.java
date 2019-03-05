package com.unissoft.test.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.unissoft.test.mapper.inceptor2.ZLPJMapper;
import com.unissoft.test.mapper.inceptor2.ZLZDMapper;
import com.unissoft.test.service.ZLPJService;
import com.unissoft.test.service.ZLZDService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Map;

@Service
public class ZLPJServiceImpl implements ZLPJService {

    @Autowired
    private ZLPJMapper mapper;

    @Override
    public PageInfo<Map<String, Object>> queryInfoByLuHao(int currentPage, int pageSize, Map<String, String> map) {
        PageHelper.startPage(currentPage, pageSize);
        List<Map<String, Object>> list = mapper.queryInfoByLuHao(map);
        if (list != null) {
            for (Map<String, Object> retMap : list) {
                DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
                String time = df.format(retMap.get("rcv_time"));
                System.out.println(time);
                retMap.put("rcv_time", time);
            }
        }
        PageInfo<Map<String, Object>> info = new PageInfo<>(list, 5);
        return info;
    }

    @Override
    public PageInfo<Map<String, Object>> queryAllInfoByLuHao(int currentPage, int pageSize) {
        PageHelper.startPage(currentPage, pageSize);
        List<Map<String, Object>> list = mapper.queryAllInfoByLuHao();
        if (list != null) {
            for (Map<String, Object> retMap : list) {
                DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
                String time = df.format(retMap.get("rcv_time"));
                System.out.println(time);
                retMap.put("rcv_time", time);
            }
        }
        PageInfo<Map<String, Object>> info = new PageInfo<>(list, 5);
        return info;
    }
}
