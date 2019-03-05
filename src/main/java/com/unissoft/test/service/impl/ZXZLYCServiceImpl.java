package com.unissoft.test.service.impl;

import com.unissoft.test.mapper.inceptor.ZXZLYCMapper;
import com.unissoft.test.service.ZXZLYCService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class ZXZLYCServiceImpl implements ZXZLYCService {
    @Autowired
    ZXZLYCMapper mapper;

    @Override
    public String showLH(Map<String, Object> map) {
//        Map<String,String> map = new HashMap<>();
//        map.put("num",num);
        return mapper.selectLH(map);

    }
}
