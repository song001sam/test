package com.unissoft.test.service;

import com.unissoft.test.entity.Xsmx_box;

import java.util.List;
import java.util.Map;

public interface XSMXService {
    Map<String, Object> jisuan(Map<String, Object> map);

    Map<String, double[][]> XGXFX(Map<String, Object> map, int int1, int int2);

    Map<String, double[][]> ZYFX(Map<String, Object> map, int size);

    List<String> selectColName(String tableName);

    Map<String, String> selectColNameAndComment(String tableName);

    List<Map<String, Object>> selectList(List<String> colName, String tableName, String GZ);

    List<Map<String, Object>> selectListWhere(List<String> colName, String tableName, String sqlStr, String GZ);
    List<String> GZList();

    List<Xsmx_box> selectListGroupBy(String colName, String tableName, String groupColName);
//    Map<String, String> selectListMax(String colName, String tableName) ;

    Map<String, Double> FCFX(Map<String, Object> map);

    Double[][] PXGFX(Map<String, Object> map, int size, int i);

    List<String> selectListDistinct(String colName, String tableName);

    String selectCount(String tableName, String whereSql, String GZ);

}
