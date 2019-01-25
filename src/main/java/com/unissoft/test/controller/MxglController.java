package com.unissoft.test.controller;

import com.github.pagehelper.PageInfo;
import com.unissoft.test.entity.TMxglModel;
import com.unissoft.test.service.MxglService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController

public class MxglController {
    @Autowired
    MxglService service;

    @RequestMapping(value = "/Mxgl/list/{currentPage}/{pageSize}", method = RequestMethod.GET)
    public PageInfo<TMxglModel> list(@PathVariable int currentPage, @PathVariable int pageSize) {
        return service.list(currentPage, pageSize);
    }

    @RequestMapping(value = "/Mxgl/add", method = RequestMethod.POST)
    public String add(
            @RequestBody TMxglModel model) {
        //    System.out.println(mxglmxlb + mxglmxmc + mxglsyfw + mxglmxsm);
        System.out.println(model.getMxglmxlb() + model.getMxglmxmc() + model.getMxglsyfw() + model.getMxglmxsm());
        return "ok";
    }
}
