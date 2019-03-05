package com.unissoft.test.service;


import java.util.Map;

public interface QCMService {

    /**
     * 根据捆号获得过程质量追溯的信息
     *
     * @param plateId
     * @return
     */
    Map<String, Object> queryInfoByPlateId(String plateId);

    /**
     * 根据炉号获得echarts图
     *
     * @param map
     * @return
     */
    Map<String, Object> getEchartsByHeatId(Map<String, String> map);

    /**
     * 根据板坯号获得echarts图
     *
     * @param map
     * @return
     */
    Map<String, Object> getEchartsBySlabId(Map<String, String> map);

    /**
     * 根据板坯号获得流号
     *
     * @param map
     * @return
     */
    Map<String, Object> getStreamBySlabId(Map<String, Object> map);

    /**
     * 根据板坯号获取echarts（无流号传入）
     *
     * @param map
     * @return
     */
    Map<String, Object> getEchartsBySlabIdNoStream(Map<String, String> map);

    /**
     * 过程质量追溯 工位追溯
     *
     * @param map
     * @return
     */
    Map<String, Object> queryEchartsByPos(Map<String, String> map);
}
