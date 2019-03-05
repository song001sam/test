package com.unissoft.test.controller;

import com.github.pagehelper.PageInfo;
import com.unissoft.test.entity.*;
import com.unissoft.test.service.GybzService;
import com.unissoft.test.service.MxglService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
public class GybzController {
    @Autowired
    GybzService service;

    @RequestMapping(value = "/Gybz/lianzhuList/{currentPage}/{pageSize}", method = RequestMethod.POST)
    public PageInfo<Gybz_LianZhu> lianzhuList(@PathVariable int currentPage, @PathVariable int pageSize, @RequestBody Gybz_LianZhu model) {
        return service.gybzLinzhuList(currentPage, pageSize, model);
    }

    @RequestMapping(value = "/Gybz/lianzhuSub1List/{currentPage}/{pageSize}", method = RequestMethod.POST)
    public PageInfo<Gybz_LianZhu_sub1> lianzhuSub1List(@PathVariable int currentPage, @PathVariable int pageSize, @RequestBody Gybz_LianZhu_sub1 model) {
        return service.gybzLinzhuSub1List(currentPage, pageSize, model);
    }

    @RequestMapping(value = "/Gybz/lianzhuSub2List/{currentPage}/{pageSize}", method = RequestMethod.POST)
    public PageInfo<Gybz_LianZhu_sub2> lianzhuSub2List(@PathVariable int currentPage, @PathVariable int pageSize, @RequestBody Gybz_LianZhu_sub2 model) {
        return service.gybzLinzhuSub2List(currentPage, pageSize, model);
    }

    /*LG_BQA_TECHCON_M_HB	转炉工艺参数主表*/
    @RequestMapping(value = "/Gybz/zhuanluList/{currentPage}/{pageSize}", method = RequestMethod.POST)
    public PageInfo<Gybz_ZhuanLu> zhuanluList(@PathVariable int currentPage, @PathVariable int pageSize, @RequestBody Gybz_ZhuanLu model) {
        return service.gybzZhuanLuList(currentPage, pageSize, model);
    }

    /*LG_BQA_TECHCON_S_HB	转炉工艺参数子表*/
    @RequestMapping(value = "/Gybz/zhuanluSubList/{currentPage}/{pageSize}", method = RequestMethod.POST)
    public PageInfo<Gybz_ZhuanLu_sub> zhuanluSubList(@PathVariable int currentPage, @PathVariable int pageSize, @RequestBody Gybz_ZhuanLu_sub model) {
        return service.gybzZhuanLuSubList(currentPage, pageSize, model);
    }

    /*LG_BQA_TECHREFIND_HB	精炼工艺参数表*/
    @RequestMapping(value = "/Gybz/jinglianList/{currentPage}/{pageSize}", method = RequestMethod.POST)
    public PageInfo<Gybz_JingLian> jinglianList(@PathVariable int currentPage, @PathVariable int pageSize, @RequestBody Gybz_JingLian model) {
        return service.gybzJingLianList(currentPage, pageSize, model);
    }

    /*LG_BQA_AGRCHEM_LG_HB	放行成分标准	*/
    @RequestMapping(value = "/Gybz/fangxingList/{currentPage}/{pageSize}", method = RequestMethod.POST)
    public PageInfo<Gybz_FangXing> fangxingList(@PathVariable int currentPage, @PathVariable int pageSize, @RequestBody Gybz_FangXing model) {
        return service.gybzFangXingList(currentPage, pageSize, model);
    }

    /*LG_BQA_STDCHEM_LG_HB	内控成分标准	*/
    @RequestMapping(value = "/Gybz/neikongList/{currentPage}/{pageSize}", method = RequestMethod.POST)
    public PageInfo<Gybz_NeiKong> neikongList(@PathVariable int currentPage, @PathVariable int pageSize, @RequestBody Gybz_NeiKong model) {
        return service.gybzNeiKongList(currentPage, pageSize, model);
    }

    /*ZG_BQA_STDMAT_HB	性能标准表*/
    @RequestMapping(value = "/Gybz/xingnengList/{currentPage}/{pageSize}", method = RequestMethod.POST)
    public PageInfo<Gybz_XingNeng> xingnengList(@PathVariable int currentPage, @PathVariable int pageSize, @RequestBody Gybz_XingNeng model) {
        return service.gybzXingNengList(currentPage, pageSize, model);
    }

    /*ZG_BKA_CPKSTD_1_HB	加热炉工艺标准		*/
    @RequestMapping(value = "/Gybz/jiareluList/{currentPage}/{pageSize}", method = RequestMethod.POST)
    public PageInfo<Gybz_JiaReLu> jiareluList(@PathVariable int currentPage, @PathVariable int pageSize, @RequestBody Gybz_JiaReLu model) {
        return service.gybzJiaReLuList(currentPage, pageSize, model);
    }

    /*	ZG_BKA_CPKSTD_2_HB	轧制工艺标准表	*/
    @RequestMapping(value = "/Gybz/zhazhiList/{currentPage}/{pageSize}", method = RequestMethod.POST)
    public PageInfo<Gybz_ZhaZhi> zhazhiList(@PathVariable int currentPage, @PathVariable int pageSize, @RequestBody Gybz_ZhaZhi model) {
        return service.gybzZhaZhiList(currentPage, pageSize, model);
    }

    /*================demo ↓=========================*/
    @RequestMapping(value = "/Gybz/list/{currentPage}/{pageSize}", method = RequestMethod.GET)
    public PageInfo<Lz_Demo> list(@PathVariable int currentPage, @PathVariable int pageSize) {
        return service.list(currentPage, pageSize);
    }

    @RequestMapping(value = "/Gybz/lz_add", method = RequestMethod.POST)
    public Map<String, Object> add(@RequestBody Lz_Demo model) {
        Map<String, Object> map = new HashMap<>();
        service.save(model);
        PageInfo<Lz_Demo> list = service.list(1, 5);
        map.put("isok", "T");
        map.put("list", list);
        return map;
    }

    @RequestMapping(value = "/Gybz/lz_get/{id}", method = RequestMethod.POST)
    public Map<String, Object> get(@PathVariable int id, @RequestBody Lz_Demo model) {
        model = new Lz_Demo();
        model.setId(id);
        Lz_Demo lz_demo = service.get(model);
        Map<String, Object> map = new HashMap<>();
        map.put("isok", "T");
        map.put("model", lz_demo);
        return map;
    }

    @RequestMapping(value = "/Gybz/lz_update", method = RequestMethod.POST)
    public Map<String, Object> update(@RequestBody Lz_Demo model) {
        Map<String, Object> map = new HashMap<>();
        service.update(model);
        PageInfo<Lz_Demo> list = service.list(1, 5);
        map.put("isok", "T");
        map.put("list", list);
        return map;
    }

    @RequestMapping(value = "/Gybz/lz_delete/{id}", method = RequestMethod.POST)
    public Map<String, Object> delete(@PathVariable int id) {
        Map<String, Object> map = new HashMap<>();
        service.delete(id);
        PageInfo<Lz_Demo> list = service.list(1, 5);
        map.put("isok", "T");
        map.put("list", list);
        return map;
    }
}
