package com.unissoft.test.service;

import com.github.pagehelper.PageInfo;
import com.unissoft.test.entity.TGt;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

public interface TGtService {
    List<TGt> selectList(String type);

    Map<String, BigDecimal> listhxcf(String type);

    PageInfo<TGt> selectListByPage(String gt, int currentPage, int pageSize);

}
