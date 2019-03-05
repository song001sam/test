package com.unissoft.test.service.impl;

import com.unissoft.test.mapper.inceptor2.SSJKMapper;
import com.unissoft.test.service.SSJKService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class SSJKServiceImpl implements SSJKService {

    @Autowired
    private SSJKMapper mapper;

    @Override
    public Map<String, Object> queryCCMHeaderInfo(String lzNum) {

        return mapper.queryCCMHeaderInfo(lzNum);
    }

    @Override
    public Map<String, Object> queryBOFHeaderInfo(String lzNum) {
        return mapper.queryBOFHeaderInfo(lzNum);
    }

    @Override
    public Map<String, Object> queryLFHeaderInfo(Map<String, String> map) {
        return mapper.queryLFHeaderInfo(map);
    }

    @Override
    public Map<String, Object> queryRHHeaderInfo(Map<String, String> map) {
        return mapper.queryRHHeaderInfo(map);
    }
}
