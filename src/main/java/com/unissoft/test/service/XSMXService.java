package com.unissoft.test.service;

import java.util.List;
import java.util.Map;

public interface XSMXService {
    Map<String, Object> jisuan(Map<String, Object> map);

    Map<String, double[][]> XGXFX(Map<String, Object> map, int inCount, int outCount);

    List<String> selectColName(String tableName);

    Map<String, String> selectColNameAndComment(String tableName);

    List<Map<String, Object>> selectList(List<String> colName, String tableName);

    List<String> GZList();

    Map<String, Double> FCFX(Map<String, Object> map);

    Map<String, Double> PXGFX(Map<String, Object> map, int size, int i);
}
