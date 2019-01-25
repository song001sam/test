package com.unissoft.test.mapper.mysql;

import com.unissoft.test.entity.TGt;
import com.unissoft.test.entity.TsGthl;
import org.apache.ibatis.annotations.Mapper;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

@Mapper
public interface TGtMapper {

    List<TGt> selectList(String type);

    Map<String, BigDecimal> listhxcf(String type);
}