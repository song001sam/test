package com.unissoft.test.service.impl;

import com.unissoft.test.entity.TsGthl;
import com.unissoft.test.mapper.TsGthlMapper;
import com.unissoft.test.service.GthlService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GthlServiceImpl implements GthlService {
    @Autowired
    TsGthlMapper mapper;

    @Override
    public List<TsGthl> getFdByCode() {
        return mapper.selectList();
    }
}
