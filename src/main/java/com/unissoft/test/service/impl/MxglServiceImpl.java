package com.unissoft.test.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.unissoft.test.entity.TMxglModel;
import com.unissoft.test.mapper.mysql.TMxglModelMapper;
import com.unissoft.test.service.MxglService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MxglServiceImpl implements MxglService {

    @Autowired
    TMxglModelMapper mapper;

    @Override
    public PageInfo<TMxglModel> list(int currentPage, int pageSize) {
        PageHelper.startPage(currentPage, pageSize);
        List<TMxglModel> list = mapper.selectList();
        PageInfo<TMxglModel> info = new PageInfo<>(list);
        return info;
    }
}
