package com.unissoft.test.mapper.inceptor2;

import com.unissoft.test.entity.*;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface GYBZMapper {
    /*LG_BQA_TECHCAST_HB	连铸工艺参数主表	*/
    List<Gybz_LianZhu> selectLianZhuList(Gybz_LianZhu model);

    /*LG_BQA_TECHCAST_S1_HB	连铸工艺参数子表1*/
    List<Gybz_LianZhu_sub1> selectLianZhuSub1List(Gybz_LianZhu_sub1 model);

    /*LG_BQA_TECHCAST_S2_HB	连铸工艺参数子表2*/
    List<Gybz_LianZhu_sub2> selectLianZhuSub2List(Gybz_LianZhu_sub2 model);

    /*LG_BQA_TECHCON_M_HB	转炉工艺参数主表	*/
    List<Gybz_ZhuanLu> selectZhuanLuList(Gybz_ZhuanLu model);

    /*LG_BQA_TECHCON_S_HB	转炉工艺参数子表*/
    List<Gybz_ZhuanLu_sub> selectZhuanLuSubList(Gybz_ZhuanLu_sub model);

    /*LG_BQA_TECHREFIND_HB	精炼工艺参数表	*/
    List<Gybz_JingLian> selectJingLianList(Gybz_JingLian model);

    /*LG_BQA_AGRCHEM_LG_HB	放行成分标准	*/
    List<Gybz_FangXing> selectFangXingList(Gybz_FangXing model);

    /*LG_BQA_STDCHEM_LG_HB	内控成分标准	*/
    List<Gybz_NeiKong> selectNeiKongList(Gybz_NeiKong model);

    /*ZG_BQA_STDMAT_HB	性能标准表*/
    List<Gybz_XingNeng> selectXingNengList(Gybz_XingNeng model);

    /*ZG_BKA_CPKSTD_1_HB	加热炉工艺标准	*/
    List<Gybz_JiaReLu> selectJiaReLuList(Gybz_JiaReLu model);

    /*	ZG_BKA_CPKSTD_2_HB	轧制工艺标准表	*/
    List<Gybz_ZhaZhi> selectZhaZhiList(Gybz_ZhaZhi model);

}
