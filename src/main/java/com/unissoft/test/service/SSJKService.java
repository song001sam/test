package com.unissoft.test.service;


import java.util.Map;

public interface SSJKService {


    /**
     * 查询实时监控头信息CCM
     *
     * @param lzNum
     * @return
     */
    Map<String, Object> queryCCMHeaderInfo(String lzNum);

    /**
     * 查询实时监控头信息BOF
     *
     * @param lzNum
     * @return
     */
    Map<String, Object> queryBOFHeaderInfo(String lzNum);

    /**
     * 查询实时监控头信息LF
     *
     * @param map
     * @return
     */
    Map<String, Object> queryLFHeaderInfo(Map<String, String> map);

    /**
     * 查询实时监控头信息RF
     *
     * @param map
     * @return
     */
    Map<String, Object> queryRHHeaderInfo(Map<String, String> map);
}
