package com.unissoft.test.mapper;

import org.apache.ibatis.annotations.Mapper;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

@Mapper
public interface XSMXMapper {

    List<Map<String, Object>> selectList(Map<String, Object> map);

    List<Map<String, String>> selectColName(String tableName);
}
