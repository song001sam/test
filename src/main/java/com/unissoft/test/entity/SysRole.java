package com.unissoft.test.entity;

import lombok.Data;

import java.util.List;

@Data
public class SysRole extends TSysRole {
    private List<TSysPermission> permissionList;
}
