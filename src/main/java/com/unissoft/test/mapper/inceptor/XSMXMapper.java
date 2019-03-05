package com.unissoft.test.mapper.inceptor;

import com.unissoft.test.entity.Xsmx_box;
import org.apache.ibatis.annotations.Mapper;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

@Mapper
public interface XSMXMapper {

    List<Map<String, Object>> selectList(Map<String, Object> map);

    List<Map<String, Object>> selectListWhere(Map<String, Object> map);

    List<Xsmx_box> selectListGroupBy(Map<String, Object> map);

    List<String> selectListDistinct(Map<String, Object> map);

    //    Map<String, Object> selectListMax(Map<String, Object> map);
    String selectCount(Map<String, Object> map);
    List<Map<String, String>> selectColName(String tableName);

    List<String> GZList();
}
