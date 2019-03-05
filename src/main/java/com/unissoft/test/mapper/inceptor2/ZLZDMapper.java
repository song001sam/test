package com.unissoft.test.mapper.inceptor2;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface ZLZDMapper {
    /**
     * 根据炉号获得质量诊断的信息
     *
     * @param map
     * @return
     */
    List<Map<String, Object>> queryInfoByLuHao(Map<String, String> map);

    /**
     * 获得所有质量诊断的信息
     *
     * @param
     * @return
     */
    List<Map<String, Object>> queryAllInfoByLuHao();
}
