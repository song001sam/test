package com.unissoft.test.mapper.inceptor2;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface QCMMapper {
    /**
     * 根据捆号获得过程质量追溯的信息
     *
     * @param plateId
     * @return
     */
    Map<String, Object> queryInfoByPlateId(String plateId);

    /**
     * 根据map中的信息获取echarts图信息
     *
     * @param map
     * @return
     */
    Map<String, Object> getEchartsByHeatId(Map<String, String> map);

    /**
     * 根据板坯号查流号
     *
     * @param slabId
     * @return
     */
    String queryStreamNumBySlabId(String slabId);

    /**
     * 根据map中的信息获取echarts图的信息
     *
     * @param map
     * @return
     */
    Map<String, Object> getEchartsBySlabId(Map<String, String> map);

    /**
     * 过程质量追溯 工位追溯CCM
     *
     * @param map
     * @return
     */
    List<Map<String, Object>> queryInfoByCCM(Map<String, String> map);

    /**
     * 过程质量追溯 工位追溯BOF
     *
     * @param map
     * @return
     */
    List<Map<String, Object>> queryInfoByBOF(Map<String, String> map);

    /**
     * 过程质量追溯 工位追溯LF
     *
     * @param map
     * @return
     */
    List<Map<String, Object>> queryInfoByLF(Map<String, String> map);
}
