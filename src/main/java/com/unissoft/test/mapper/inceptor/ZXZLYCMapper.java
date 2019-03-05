package com.unissoft.test.mapper.inceptor;

import com.unissoft.test.entity.Xsmx_box;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface ZXZLYCMapper {

    String selectLH(Map<String, Object> paraMap);
}
