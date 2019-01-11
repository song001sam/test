package com.unissoft.test.entity;

import lombok.Data;

import java.util.List;

@Data
public class SysUser extends TSysUser {
    private List<SysRole> roleList;
}
