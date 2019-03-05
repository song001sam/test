package com.unissoft.test.service;

import com.github.pagehelper.PageInfo;
import com.unissoft.test.entity.*;

import java.util.List;

public interface UserService {
    SysUser getUserByName(String username);

    PageInfo<SysUser> selectPageListUser(int currentPage, int pageSize);

    PageInfo<SysRole> selectPageListRole(int currentPage, int pageSize);

    PageInfo<TSysPermission> selectPageListPermission(int currentPage, int pageSize);

    List<SysUser> selectListUser();

    List<SysRole> selectListRole();

    List<TSysPermission> selectListPermission();

    void addUser(TSysUser user);

    void updateUser(TSysUser user);

    void deleteUser(int ID);

    void addRole(TSysRole role);

    void updateRole(TSysRole role);

    void deleteRole(int ID);

    void addPermission(TSysPermission permission);

    void updatePermission(TSysPermission permission);

    void deletePermission(int ID);

    void addU2R(int uid, int... rid);

    void addR2P(int rid, int... pid);

    void delU2R(int uid);

    void delR2P(int rid);
}
