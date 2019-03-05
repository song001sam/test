package com.unissoft.test.mapper.inceptor2;

import org.apache.ibatis.annotations.Mapper;

import java.util.Map;

@Mapper
public interface SSJKMapper {

    /**
     * 查询实时监控的头数据CCM
     *
     * @param lzNum
     * @return
     */
    Map<String, Object> queryCCMHeaderInfo(String lzNum);

    /**
     * 查询实时监控的头数据CCM
     *
     * @param lzNum
     * @return
     */
    Map<String, Object> queryBOFHeaderInfo(String lzNum);

    /**
     * 查询实时监控的头数据LF
     *
     * @param map
     * @return
     */
    Map<String, Object> queryLFHeaderInfo(Map<String, String> map);

    /**
     * 查询实时监控的头数据RF
     *
     * @param map
     * @return
     */
    Map<String, Object> queryRHHeaderInfo(Map<String, String> map);
}
