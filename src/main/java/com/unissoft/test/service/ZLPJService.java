package com.unissoft.test.service;

import com.github.pagehelper.PageInfo;

import java.util.Map;

public interface ZLPJService {


    /**
     * 根据炉号查质量评价的信息
     *
     * @param map
     * @return
     */
    PageInfo<Map<String, Object>> queryInfoByLuHao(int currentPage, int pageSize, Map<String, String> map);

    /**
     * 查全部质量评价的信息
     *
     * @param
     * @return
     */
    PageInfo<Map<String, Object>> queryAllInfoByLuHao(int currentPage, int pageSize);
}
