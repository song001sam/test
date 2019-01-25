package com.unissoft.test.service.impl;

import com.unissoft.test.entity.SysUser;
import com.unissoft.test.mapper.mysql.TSysUserMapper;
import com.unissoft.test.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private TSysUserMapper mapper;

    @Cacheable(cacheNames = "authority", key = "#username")
    @Override
    public SysUser getUserByName(String username) {
        return mapper.selectUserRolePermissionByName(username);
    }
}