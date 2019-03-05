package com.unissoft.test.service;

import com.github.pagehelper.PageInfo;
import com.unissoft.test.entity.*;

public interface GybzService {
    public PageInfo<Gybz_LianZhu> gybzLinzhuList(int currentPage, int pageSize, Gybz_LianZhu model);

    public PageInfo<Gybz_LianZhu_sub1> gybzLinzhuSub1List(int currentPage, int pageSize, Gybz_LianZhu_sub1 model);

    public PageInfo<Gybz_LianZhu_sub2> gybzLinzhuSub2List(int currentPage, int pageSize, Gybz_LianZhu_sub2 model);

    /*LG_BQA_TECHCON_M_HB	转炉工艺参数主表*/
    public PageInfo<Gybz_ZhuanLu> gybzZhuanLuList(int currentPage, int pageSize, Gybz_ZhuanLu model);

    /*LG_BQA_TECHCON_S_HB	转炉工艺参数子表	*/
    public PageInfo<Gybz_ZhuanLu_sub> gybzZhuanLuSubList(int currentPage, int pageSize, Gybz_ZhuanLu_sub model);

    /*LG_BQA_TECHREFIND_HB	精炼工艺参数表	*/
    public PageInfo<Gybz_JingLian> gybzJingLianList(int currentPage, int pageSize, Gybz_JingLian model);

    /*LG_BQA_AGRCHEM_LG_HB	放行成分标准	*/
    public PageInfo<Gybz_FangXing> gybzFangXingList(int currentPage, int pageSize, Gybz_FangXing model);

    /*LG_BQA_STDCHEM_LG_HB	内控成分标准		*/
    public PageInfo<Gybz_NeiKong> gybzNeiKongList(int currentPage, int pageSize, Gybz_NeiKong model);

    /*ZG_BQA_STDMAT_HB	性能标准表*/
    public PageInfo<Gybz_XingNeng> gybzXingNengList(int currentPage, int pageSize, Gybz_XingNeng model);

    /*ZG_BKA_CPKSTD_1_HB	加热炉工艺标准	*/
    public PageInfo<Gybz_JiaReLu> gybzJiaReLuList(int currentPage, int pageSize, Gybz_JiaReLu model);

    /*	ZG_BKA_CPKSTD_2_HB	轧制工艺标准表	*/
    public PageInfo<Gybz_ZhaZhi> gybzZhaZhiList(int currentPage, int pageSize, Gybz_ZhaZhi model);

    /*=================================================*/
    public PageInfo<Lz_Demo> list(int currentPage, int pageSize);

    public Lz_Demo get(Lz_Demo demo);

    public Integer save(Lz_Demo demo);

    public Integer update(Lz_Demo demo);

    public void delete(int id);
}
