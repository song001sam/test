package com.unissoft.test.mapper.mysql;

import com.unissoft.test.entity.AiLgLdOrc;
import com.unissoft.test.entity.Lz_Demo;
import com.unissoft.test.entity.TMxglModel;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface LzDemoMapper {


    List<Lz_Demo> selectList();

    Lz_Demo selectOne(Lz_Demo demo);

    Integer save(Lz_Demo demo);

    Integer update(Lz_Demo demo);

    void delete(int id);
}