package com.unissoft.test.controller;

import com.github.pagehelper.PageInfo;
import com.unissoft.test.entity.CPKModel;
import com.unissoft.test.service.CPKService;
import com.unissoft.test.utils.PropertiesUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class CPKController {
    @Autowired
    private CPKService service;

    /**
     * 展示cpk的表格
     *
     * @param currentPage
     * @param pageSize
     * @param model
     * @return
     */
    @RequestMapping(value = "/CPK/list/{currentPage}/{pageSize}", method = RequestMethod.POST)
    public PageInfo<CPKModel> list(@PathVariable int currentPage, @PathVariable int pageSize, @RequestBody CPKModel model) {
        return service.list(currentPage, pageSize, model);
    }

    @RequestMapping(value = "/CPK/showEchartsOneByTime", method = RequestMethod.POST)
    public List<Map<String, Object>> showEchartsOneByTime(@RequestBody CPKModel model) {
        return service.showEchartsOneByTime(model);
    }

    @RequestMapping(value = "/CPK/showEchartsTwoByTime", method = RequestMethod.POST)
    public List<Map<String, Object>> showEchartsTwoByTime(@RequestBody CPKModel model) {
        return service.showEchartsTwoByTime(model);
    }

    @RequestMapping(value = "/CPK/showEchartsThreeByTime", method = RequestMethod.POST)
    public List<Map<String, Object>> showEchartsThreeByTime(@RequestBody CPKModel model) {
        return service.showEchartsThreeByTime(model);
    }

    @RequestMapping(value = "/CPK/showEchartsOneByPos", method = RequestMethod.POST)
    public List<Map<String, Object>> showEchartsOneByPos(@RequestBody CPKModel model) {
        return service.showEchartsOneByPos(model);
    }

    @RequestMapping(value = "/CPK/showEchartsTwoByPos", method = RequestMethod.POST)
    public List<Map<String, Object>> showEchartsTwoByPos(@RequestBody CPKModel model) {
        return service.showEchartsTwoByPos(model);
    }

    @RequestMapping(value = "/CPK/showEchartsThreeByPos", method = RequestMethod.POST)
    public List<Map<String, Object>> showEchartsThreeByPos(@RequestBody CPKModel model) {
        return service.showEchartsThreeByPos(model);
    }

    @RequestMapping(value = "CPK/showEchartsBZByPos", method = RequestMethod.POST)
    public List<Map<String, Object>> showEchartsBZByPos(@RequestBody CPKModel model) {
        System.out.println(model);
        List<Map<String, Object>> bzList = service.showEchartsBZByPos(model);
        formatCpk(bzList);
        return bzList;
    }

    @RequestMapping(value = "CPK/searchGroupByItem_cd/{currentPage}/{pageSize}", method = RequestMethod.POST)
    public PageInfo<Map<String, Object>> searchGroupByItem_cd(@PathVariable int currentPage, @PathVariable int pageSize, @RequestBody CPKModel model) {
        System.out.println(model);
        PageInfo<Map<String, Object>> dataList = service.searchGroupByItem_cd(currentPage, pageSize, model);
        formatCpk(dataList.getList());
        return dataList;
    }

    private void formatCpk(List<Map<String, Object>> list) {
        for (Map<String, Object> map : list) {
            if (map.get("stl_grd_name") != null) {
                map.put("stl_grd_name_name", PropertiesUtil.getValue(map.get("stl_grd_name") + ""));
            }
            if (map.get("item_cd") != null) {
                map.put("item_cd_name", PropertiesUtil.getValue(map.get("item_cd") + ""));
            }
            if (map.get("shift_id") != null) {
                map.put("shift_id_name", PropertiesUtil.getValue(map.get("shift_id") + ""));
            }
            if (map.get("pos") != null) {
                map.put("pos_name", PropertiesUtil.getValue(map.get("pos") + ""));
            }
        }
    }
}
