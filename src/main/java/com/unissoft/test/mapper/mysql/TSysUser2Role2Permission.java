package com.unissoft.test.mapper.mysql;

import com.unissoft.test.entity.SysUser;
import com.unissoft.test.entity.TSysUser;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface TSysUser2Role2Permission {
    void insertU2R(int uid, int... rid);

    void insertR2P(int rid, int... pid);

    void deleteU2R(int uid);

    void deleteR2P(int rid);

}