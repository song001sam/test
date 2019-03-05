package com.unissoft.test.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.unissoft.test.entity.*;
import com.unissoft.test.mapper.inceptor2.GYBZMapper;
import com.unissoft.test.mapper.mysql.LzDemoMapper;
import com.unissoft.test.service.GybzService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GybzServiceImpl implements GybzService {
    @Autowired
    GYBZMapper gybzMapper;
    @Autowired
    LzDemoMapper mapper;

    @Override
    public PageInfo<Gybz_LianZhu> gybzLinzhuList(int currentPage, int pageSize, Gybz_LianZhu lz) {
        PageHelper.startPage(currentPage, pageSize);

        List<Gybz_LianZhu> list = gybzMapper.selectLianZhuList(lz);
        PageInfo<Gybz_LianZhu> info = new PageInfo<Gybz_LianZhu>(list);
        return info;
    }

    @Override
    public PageInfo<Gybz_LianZhu_sub1> gybzLinzhuSub1List(int currentPage, int pageSize, Gybz_LianZhu_sub1 lz) {
        PageHelper.startPage(currentPage, pageSize);

        List<Gybz_LianZhu_sub1> list = gybzMapper.selectLianZhuSub1List(lz);
        PageInfo<Gybz_LianZhu_sub1> info = new PageInfo<Gybz_LianZhu_sub1>(list);
        return info;
    }

    @Override
    public PageInfo<Gybz_LianZhu_sub2> gybzLinzhuSub2List(int currentPage, int pageSize, Gybz_LianZhu_sub2 lz) {
        PageHelper.startPage(currentPage, pageSize);
        List<Gybz_LianZhu_sub2> list = gybzMapper.selectLianZhuSub2List(lz);
        PageInfo<Gybz_LianZhu_sub2> info = new PageInfo<Gybz_LianZhu_sub2>(list);
        return info;
    }

    /*LG_BQA_TECHCON_M_HB	转炉工艺参数主表*/
    @Override
    public PageInfo<Gybz_ZhuanLu> gybzZhuanLuList(int currentPage, int pageSize, Gybz_ZhuanLu model) {
        PageHelper.startPage(currentPage, pageSize);
        List<Gybz_ZhuanLu> list = gybzMapper.selectZhuanLuList(model);
        PageInfo<Gybz_ZhuanLu> info = new PageInfo<Gybz_ZhuanLu>(list);
        return info;
    }

    /*LG_BQA_TECHCON_S_HB	转炉工艺参数子*/
    @Override
    public PageInfo<Gybz_ZhuanLu_sub> gybzZhuanLuSubList(int currentPage, int pageSize, Gybz_ZhuanLu_sub model) {
        PageHelper.startPage(currentPage, pageSize);
        List<Gybz_ZhuanLu_sub> list = gybzMapper.selectZhuanLuSubList(model);
        PageInfo<Gybz_ZhuanLu_sub> info = new PageInfo<Gybz_ZhuanLu_sub>(list);
        return info;
    }

    /*LG_BQA_TECHREFIND_HB	精炼工艺参数表	*/
    @Override
    public PageInfo<Gybz_JingLian> gybzJingLianList(int currentPage, int pageSize, Gybz_JingLian model) {
        PageHelper.startPage(currentPage, pageSize);
        List<Gybz_JingLian> list = gybzMapper.selectJingLianList(model);
        PageInfo<Gybz_JingLian> info = new PageInfo<Gybz_JingLian>(list);
        return info;
    }

    /*LG_BQA_AGRCHEM_LG_HB	放行成分标准	*/
    @Override
    public PageInfo<Gybz_FangXing> gybzFangXingList(int currentPage, int pageSize, Gybz_FangXing model) {
        PageHelper.startPage(currentPage, pageSize);
        List<Gybz_FangXing> list = gybzMapper.selectFangXingList(model);
        PageInfo<Gybz_FangXing> info = new PageInfo<Gybz_FangXing>(list);
        return info;
    }

    /*LG_BQA_STDCHEM_LG_HB	内控成分标准	*/
    @Override
    public PageInfo<Gybz_NeiKong> gybzNeiKongList(int currentPage, int pageSize, Gybz_NeiKong model) {
        PageHelper.startPage(currentPage, pageSize);
        List<Gybz_NeiKong> list = gybzMapper.selectNeiKongList(model);
        PageInfo<Gybz_NeiKong> info = new PageInfo<Gybz_NeiKong>(list);
        return info;
    }

    /*ZG_BQA_STDMAT_HB	性能标准表*/
    @Override
    public PageInfo<Gybz_XingNeng> gybzXingNengList(int currentPage, int pageSize, Gybz_XingNeng model) {
        PageHelper.startPage(currentPage, pageSize);
        List<Gybz_XingNeng> list = gybzMapper.selectXingNengList(model);
        PageInfo<Gybz_XingNeng> info = new PageInfo<Gybz_XingNeng>(list);
        return info;
    }

    /*ZG_BKA_CPKSTD_1_HB	加热炉工艺标准	*/
    @Override
    public PageInfo<Gybz_JiaReLu> gybzJiaReLuList(int currentPage, int pageSize, Gybz_JiaReLu model) {
        PageHelper.startPage(currentPage, pageSize);
        List<Gybz_JiaReLu> list = gybzMapper.selectJiaReLuList(model);
        PageInfo<Gybz_JiaReLu> info = new PageInfo<Gybz_JiaReLu>(list);
        return info;
    }

    /*	ZG_BKA_CPKSTD_2_HB	轧制工艺标准表	*/
    @Override
    public PageInfo<Gybz_ZhaZhi> gybzZhaZhiList(int currentPage, int pageSize, Gybz_ZhaZhi model) {
        PageHelper.startPage(currentPage, pageSize);
        List<Gybz_ZhaZhi> list = gybzMapper.selectZhaZhiList(model);
        PageInfo<Gybz_ZhaZhi> info = new PageInfo<Gybz_ZhaZhi>(list);
        return info;
    }

    /*==========================*/
    @Override
    public PageInfo<Lz_Demo> list(int currentPage, int pageSize) {
        PageHelper.startPage(currentPage, pageSize);

        List<Lz_Demo> list = mapper.selectList();
        PageInfo<Lz_Demo> info = new PageInfo<Lz_Demo>(list);
        return info;
    }

    @Override
    public Lz_Demo get(Lz_Demo demo) {
        Lz_Demo demoRet = mapper.selectOne(demo);
        return demoRet;
    }

    @Override
    public Integer save(Lz_Demo demo) {
        return mapper.save(demo);
    }

    @Override
    public Integer update(Lz_Demo demo) {
        return mapper.update(demo);
    }

    @Override
    public void delete(int id) {
        mapper.delete(id);
    }
}
