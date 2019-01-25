package com.unissoft.test.service.impl;

import com.unissoft.test.entity.TsGthl;
import com.unissoft.test.mapper.mysql.TsGthlMapper;
import com.unissoft.test.service.TsGthlService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class TsGthlServiceImpl implements TsGthlService {
    @Autowired
    TsGthlMapper mapper;

    @Override
    public List<TsGthl> selectList() {
        return mapper.selectList();
    }
}
