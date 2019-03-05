package com.unissoft.test.controller;

import com.github.pagehelper.PageInfo;
import com.unissoft.test.entity.SysUser;
import com.unissoft.test.entity.TSysPermission;
import com.unissoft.test.entity.TSysUser;
import com.unissoft.test.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class systemController {

    @Autowired
    UserService userService;

    @PostMapping("/system/user/getUser")
    @ResponseBody
    public UserDetails getUser() {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext()
                .getAuthentication()
                .getPrincipal();
        return userDetails;
    }

    @GetMapping("/system/user/list/{currentPage}/{pageSize}")
    public PageInfo<SysUser> list(@PathVariable int currentPage, @PathVariable int pageSize) {
        return userService.selectPageListUser(currentPage, pageSize);
    }

    @PostMapping("/system/user/add")
    public String addUser(@RequestBody Map<String, String> map) {
        TSysUser user = new TSysUser();
        user.setUsercode(map.get("usercode"));
        user.setUsername(map.get("username"));
        user.setPassword(new BCryptPasswordEncoder().encode(map.get("password")));
        userService.addUser(user);
        return "ok";
    }

    @PostMapping("/system/user/update")
    public String updateUser(@RequestBody Map<String, String> map) {
        TSysUser user = new TSysUser();
        user.setId(Integer.valueOf(map.get("id")));
        user.setUsercode(map.get("usercode"));
        user.setUsername(map.get("username"));
        user.setPassword(new BCryptPasswordEncoder().encode(map.get("password")));
        userService.updateUser(user);
        return "ok";
    }

    @PostMapping("/system/user/delete/{id}")
    public String deleteUser(@PathVariable int id) {
        userService.deleteUser(id);
        return "ok";
    }

    @PostMapping("/system/role/add")
    public String addRole(@RequestBody Map<String, String> map) {
        TSysUser user = new TSysUser();
        user.setUsercode(map.get("usercode"));
        user.setUsername(map.get("username"));
        user.setPassword(new BCryptPasswordEncoder().encode(map.get("password")));
        userService.addUser(user);
        return "ok";
    }

    @PostMapping("/system/role/update")
    public String updateRole(@RequestBody Map<String, String> map) {
        TSysUser user = new TSysUser();
        user.setId(Integer.valueOf(map.get("id")));
        user.setUsercode(map.get("usercode"));
        user.setUsername(map.get("username"));
        user.setPassword(new BCryptPasswordEncoder().encode(map.get("password")));
        userService.updateUser(user);
        return "ok";
    }

    @PostMapping("/system/role/delete/{id}")
    public String deleteRole(@PathVariable int id) {
        userService.deleteUser(id);
        return "ok";
    }

    @PostMapping("/system/Permission/add")
    public String addPermission(@RequestBody Map<String, String> map) {
        TSysUser user = new TSysUser();
        user.setUsercode(map.get("usercode"));
        user.setUsername(map.get("username"));
        user.setPassword(new BCryptPasswordEncoder().encode(map.get("password")));
        userService.addUser(user);
        return "ok";
    }

    @PostMapping("/system/Permission/update")
    public String updatePermission(@RequestBody Map<String, String> map) {
        TSysUser user = new TSysUser();
        user.setId(Integer.valueOf(map.get("id")));
        user.setUsercode(map.get("usercode"));
        user.setUsername(map.get("username"));
        user.setPassword(new BCryptPasswordEncoder().encode(map.get("password")));
        userService.updateUser(user);
        return "ok";
    }

    @PostMapping("/system/permission/delete/{id}")
    public String deletePermission(@PathVariable int id) {
        userService.deleteUser(id);
        userService.delU2R(id);
        return "ok";
    }
}
