package com.unissoft.test.mapper.mysql;

import com.unissoft.test.entity.CPKModel;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;


@Mapper
public interface CPKMapper {


    /**
     * 根据条件查cpk
     *
     * @param map
     * @return
     */
    List<CPKModel> selectList(CPKModel model);


    /**
     * 根据时间获取cpkecharts的第一个图
     *
     * @return
     */
    List<Map<String, Object>> showEchartsOneByTime(CPKModel model);

    /**
     * 根据时间获取cpkecharts的第二个图
     *
     * @param model
     * @return
     */
    List<Map<String, Object>> showEchartsTwoByTime(CPKModel model);

    /**
     * 根据时间获取cpkecharts的第三个图
     *
     * @param model
     * @return
     */
    List<Map<String, Object>> showEchartsThreeByTime(CPKModel model);

    /**
     * 根据工位获取cpkecharts的第一个图
     *
     * @param model
     * @return
     */
    List<Map<String, Object>> showEchartsOneByPos(CPKModel model);

    /**
     * 根据工位获取cpkecharts的第二个图
     *
     * @param model
     * @return
     */
    List<Map<String, Object>> showEchartsTwoByPos(CPKModel model);

    /**
     * 根据工位获取cpkecharts的第三个图
     *
     * @param model
     * @return
     */
    List<Map<String, Object>> showEchartsThreeByPos(CPKModel model);

    /**
     * 班组对比
     *
     * @param model
     * @return
     */
    List<Map<String, Object>> showEchartsBZByPos(CPKModel model);

    List<Map<String, Object>> searchGroupByItem_cd(CPKModel model);

}
