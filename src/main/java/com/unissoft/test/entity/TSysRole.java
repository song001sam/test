package com.unissoft.test.entity;

import lombok.Data;

import java.util.List;

@Data
public class TSysRole {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_Sys_Role.id
     *
     * @mbg.generated
     */
    private Integer id;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_Sys_Role.roleCode
     *
     * @mbg.generated
     */
    private String rolecode;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_Sys_Role.roleName
     *
     * @mbg.generated
     */
    private String rolename;
}