package com.unissoft.test.service;

import com.github.pagehelper.PageInfo;
import com.unissoft.test.entity.CPKModel;

import java.util.List;
import java.util.Map;

public interface CPKService {

    PageInfo<CPKModel> list(int currentPage, int pageSize, CPKModel model);

    /**
     * 根据时间查询echarts one
     *
     * @param model
     * @return
     */
    List<Map<String, Object>> showEchartsOneByTime(CPKModel model);

    /**
     * 根据时间查询echarts two
     *
     * @param model
     * @return
     */
    List<Map<String, Object>> showEchartsTwoByTime(CPKModel model);

    /**
     * 根据时间查询echarts three
     *
     * @param model
     * @return
     */
    List<Map<String, Object>> showEchartsThreeByTime(CPKModel model);

    /**
     * 根据工位查询echarts one
     *
     * @param model
     * @return
     */
    List<Map<String, Object>> showEchartsOneByPos(CPKModel model);

    /**
     * 根据工位查询echarts two
     *
     * @param model
     * @return
     */
    List<Map<String, Object>> showEchartsTwoByPos(CPKModel model);

    /**
     * 根据工位查询echarts three
     *
     * @param model
     * @return
     */
    List<Map<String, Object>> showEchartsThreeByPos(CPKModel model);

    /**
     * 班组对比echarts bz
     *
     * @param model
     * @return
     */
    List<Map<String, Object>> showEchartsBZByPos(CPKModel model);

    PageInfo<Map<String, Object>> searchGroupByItem_cd(int currentPage, int pageSize, CPKModel model);

}
