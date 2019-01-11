package com.unissoft.test.service;

import com.unissoft.test.entity.SysUser;

public interface UserService {
    SysUser getUserByName(String username);
}
