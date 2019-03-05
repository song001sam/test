package com.unissoft.test.service;

import com.github.pagehelper.PageInfo;

import java.util.List;
import java.util.Map;

public interface ZLZDService {


    /**
     * 根据炉号查质量诊断的信息
     *
     * @param map
     * @return
     */
    PageInfo<Map<String, Object>> queryInfoByLuHao(int currentPage, int pageSize, Map<String, String> map);

    /**
     * 查所有质量诊断的信息
     *
     * @param map
     * @return
     */
    PageInfo<Map<String, Object>> queryAllInfoByLuHao(int currentPage, int pageSize);
}
