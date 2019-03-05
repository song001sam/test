package com.unissoft.test.mapper.inceptor2;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

/**
 * cpk码值
 */
@Mapper
public interface CPKMZMapper {


    /**
     * 获取工序
     *
     * @param pos
     * @return
     */
    String selectPos(String pos);

    /**
     * 获取钢种
     *
     * @param gz
     * @return
     */
    String selectGZ(String gz);


    /**
     * 获取班别
     *
     * @param bb
     * @return
     */
    String selectBB(String bb);


    /**
     * 获取cpk项目
     *
     * @param cpkItem
     * @return
     */
    String selectCPKItem(String cpkItem);

    /**
     * 获取所有工序
     *
     * @param
     * @return
     */
    List<Map<String, String>> selectPosALL();

    /**
     * 获取所有钢种
     *
     * @param
     * @return
     */
    List<Map<String, String>> selectGZALL();


    /**
     * 获取所有班别
     *
     * @param
     * @return
     */
    List<Map<String, String>> selectBBALL();


    /**
     * 获取所有cpk项目
     *
     * @param
     * @return
     */
    List<Map<String, String>> selectCPKItemALL();
}
