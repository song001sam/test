package com.unissoft.test.controller;

import com.github.pagehelper.PageInfo;
import com.unissoft.test.entity.TGt;
import com.unissoft.test.entity.TMxglModel;
import com.unissoft.test.entity.TsGthl;
import com.unissoft.test.service.GthlService;
import com.unissoft.test.service.MxglService;
import com.unissoft.test.service.TGtService;
import com.unissoft.test.service.ZXZLYCService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

@RestController

public class ZXZLYCController {
    @Autowired
    MxglService service;
    @Autowired
    GthlService gthlService;
    @Autowired
    TGtService tghService;
    @Autowired
    ZXZLYCService zxzlycService;

    @RequestMapping(value = "/ZXZLYC/Mxgl/list/{currentPage}/{pageSize}", method = RequestMethod.GET)
    public PageInfo<TMxglModel> list(@PathVariable int currentPage, @PathVariable int pageSize) {
        return service.list(currentPage, pageSize);
    }

    @RequestMapping(value = "/ZXZLYC/Mxgl/add", method = RequestMethod.POST)
    public String add(
            @RequestBody TMxglModel model) {
        //    System.out.println(mxglmxlb + mxglmxmc + mxglsyfw + mxglmxsm);
        System.out.println(model.getMxglmxlb() + model.getMxglmxmc() + model.getMxglsyfw() + model.getMxglmxsm());
        return "ok";
    }

    @RequestMapping(value = "/ZXZLYC/Tjfx/list/{Gt}", method = RequestMethod.GET)
    public List<TGt> list(@PathVariable String Gt) {
        return tghService.selectList(Gt);
    }

    @RequestMapping(value = "/ZXZLYC/Tjfx/listPage/{Gt}/{currentPage}/{pageSize}", method = RequestMethod.GET)
    public PageInfo<TGt> selectListByPage(@PathVariable String Gt, @PathVariable int currentPage, @PathVariable int pageSize) {
        return tghService.selectListByPage(Gt, currentPage, pageSize);
    }

    @RequestMapping(value = "/ZXZLYC/Tjfx/listGthl", method = RequestMethod.GET)
    public List<TsGthl> list() {
        return gthlService.getFdByCode();
    }

    @RequestMapping(value = "/ZXZLYC/Tjfx/listhxcf/{Gt}", method = RequestMethod.GET)
    public Map<String, BigDecimal> listhxcf(@PathVariable String Gt) {
        return tghService.listhxcf(Gt);
    }

    @RequestMapping(value = "/ZXZLYC/ZLYC/showLH", method = RequestMethod.POST)
    public String showLH(@RequestBody Map<String, Object> map) {
        return zxzlycService.showLH(map);
    }

}
