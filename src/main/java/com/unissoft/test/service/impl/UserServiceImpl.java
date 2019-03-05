package com.unissoft.test.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.unissoft.test.entity.*;
import com.unissoft.test.mapper.mysql.TSysPermissionMapper;
import com.unissoft.test.mapper.mysql.TSysRoleMapper;
import com.unissoft.test.mapper.mysql.TSysUser2Role2Permission;
import com.unissoft.test.mapper.mysql.TSysUserMapper;
import com.unissoft.test.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private TSysUserMapper userMapper;
    @Autowired
    private TSysRoleMapper roleMapper;
    @Autowired
    private TSysPermissionMapper permissionMapper;
    @Autowired
    private TSysUser2Role2Permission U2R2Pmapper;
    @Cacheable(cacheNames = "authority", key = "#username")
    @Override
    public SysUser getUserByName(String username) {
        return userMapper.selectUserRolePermissionByName(username);
    }

    @Override
    public PageInfo<SysUser> selectPageListUser(int currentPage, int pageSize) {
        PageHelper.startPage(currentPage, pageSize);
        List<SysUser> list = userMapper.selectList();
        PageInfo<SysUser> info = new PageInfo<>(list);
        return info;
    }

    @Override
    public PageInfo<SysRole> selectPageListRole(int currentPage, int pageSize) {
        PageHelper.startPage(currentPage, pageSize);
        List<SysRole> list = roleMapper.selectList();
        PageInfo<SysRole> info = new PageInfo<>(list);
        return info;
    }

    @Override
    public PageInfo<TSysPermission> selectPageListPermission(int currentPage, int pageSize) {
        PageHelper.startPage(currentPage, pageSize);
        List<TSysPermission> list = permissionMapper.selectList();
        PageInfo<TSysPermission> info = new PageInfo<>(list);
        return info;
    }

    @Override
    public List<SysUser> selectListUser() {
        return userMapper.selectList();
    }

    @Override
    public List<SysRole> selectListRole() {
        return roleMapper.selectList();
    }

    @Override
    public List<TSysPermission> selectListPermission() {
        return permissionMapper.selectList();
    }

    @Override
    public void addUser(TSysUser user) {
        userMapper.insertSelective(user);

    }

    @Override
    public void updateUser(TSysUser user) {
        userMapper.updateByPrimaryKey(user);
    }

    @Override
    public void deleteUser(int ID) {
        userMapper.deleteByPrimaryKey(ID);
    }

    @Override
    public void addRole(TSysRole role) {
        roleMapper.insertSelective(role);
    }

    @Override
    public void updateRole(TSysRole role) {
        roleMapper.updateByPrimaryKey(role);
    }

    @Override
    public void deleteRole(int ID) {
        roleMapper.deleteByPrimaryKey(ID);
    }

    @Override
    public void addPermission(TSysPermission permission) {
        permissionMapper.insertSelective(permission);
    }

    @Override
    public void updatePermission(TSysPermission permission) {
        permissionMapper.updateByPrimaryKey(permission);
    }

    @Override
    public void deletePermission(int ID) {
        permissionMapper.deleteByPrimaryKey(ID);
    }


    @Override
    public void addU2R(int uid, int... rid) {
        U2R2Pmapper.deleteU2R(uid);
        U2R2Pmapper.insertU2R(uid, rid);
    }

    @Override
    public void addR2P(int rid, int... pid) {
        U2R2Pmapper.deleteR2P(rid);
        U2R2Pmapper.insertR2P(rid, pid);
    }

    @Override
    public void delU2R(int uid) {
        U2R2Pmapper.deleteU2R(uid);
    }

    @Override
    public void delR2P(int rid) {
        U2R2Pmapper.deleteR2P(rid);
    }


}