package com.unissoft.test.mapper.mysql;

import com.unissoft.test.entity.SysUser;
import com.unissoft.test.entity.TSysUser;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface TSysUserMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_Sys_User
     *
     * @mbg.generated
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_Sys_User
     *
     * @mbg.generated
     */
    int insert(TSysUser record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_Sys_User
     *
     * @mbg.generated
     */
    int insertSelective(TSysUser record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_Sys_User
     *
     * @mbg.generated
     */
    TSysUser selectByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_Sys_User
     *
     * @mbg.generated
     */
    int updateByPrimaryKeySelective(TSysUser record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_Sys_User
     *
     * @mbg.generated
     */
    int updateByPrimaryKey(TSysUser record);

    SysUser selectUserRolePermissionByName(String userName);

    List<SysUser> selectList();
}