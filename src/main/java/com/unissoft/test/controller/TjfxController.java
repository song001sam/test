package com.unissoft.test.controller;

import com.github.pagehelper.PageInfo;
import com.unissoft.test.entity.TGt;
import com.unissoft.test.entity.TsGthl;
import com.unissoft.test.service.GthlService;
import com.unissoft.test.service.TGtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

@RestController
public class TjfxController {
    @Autowired
    GthlService gthlService;
    @Autowired
    TGtService tghService;

    @RequestMapping(value = "/Tjfx/list/{Gt}", method = RequestMethod.GET)
    public List<TGt> list(@PathVariable String Gt) {
        return tghService.selectList(Gt);
    }

    @RequestMapping(value = "/Tjfx/listPage/{Gt}/{currentPage}/{pageSize}", method = RequestMethod.GET)
    public PageInfo<TGt> selectListByPage(@PathVariable String Gt, @PathVariable int currentPage, @PathVariable int pageSize) {
        return tghService.selectListByPage(Gt, currentPage, pageSize);
    }

    @RequestMapping(value = "/Tjfx/listGthl", method = RequestMethod.GET)
    public List<TsGthl> list() {
        return gthlService.getFdByCode();
    }

    @RequestMapping(value = "/Tjfx/listhxcf/{Gt}", method = RequestMethod.GET)
    public Map<String, BigDecimal> listhxcf(@PathVariable String Gt) {
        return tghService.listhxcf(Gt);
    }
}
