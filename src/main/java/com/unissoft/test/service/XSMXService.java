package com.unissoft.test.service;

import java.util.List;
import java.util.Map;

public interface XSMXService {
    Map<String, Object> jisuan(Map<String, Object> map);

    List<String> selectColName(String tableName);

    Map<String, String> selectColNameAndComment(String tableName);
}
