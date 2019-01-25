package com.unissoft.test.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.unissoft.test.entity.TGt;
import com.unissoft.test.mapper.mysql.TGtMapper;
import com.unissoft.test.service.TGtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

@Service
public class TGtServiceImpl implements TGtService {
    @Autowired
    TGtMapper mapper;

    @Override
    public List<TGt> selectList(String type) {
        return mapper.selectList("t_gt_" + type);
    }

    @Override
    public Map<String, BigDecimal> listhxcf(String type) {
        return mapper.listhxcf("t_gt_" + type);
    }

    @Override
    public PageInfo<TGt> selectListByPage(String gt, int currentPage, int pageSize) {
        PageHelper.startPage(currentPage, pageSize);
        List<TGt> list = mapper.selectList("t_gt_" + gt);
        PageInfo<TGt> info = new PageInfo<>(list);
        return info;
    }


}
