package com.unissoft.test.entity;

import java.util.List;
import java.util.Map;

/**
 * 分类统计对比分析
 */
public class ZLTJFX_fltj {
    private String key;
    private String value;
    private String min;
    private String max;
    private String type;
    private String text;
    private String avgSubVal;//均值差-绝对值
    private List<String> avgs;//均值集合
    private String retValue;
    private String sqlStr;
    private Map<String, String> dataType;
    private String lsdata;
    private List<String> rowList;
    private Map<String, String> colsValue;

    public String getAvgSubVal() {
        return avgSubVal;
    }

    public void setAvgSubVal(String avgSubVal) {
        this.avgSubVal = avgSubVal;
    }

    public List<String> getAvgs() {
        return avgs;
    }

    public void setAvgs(List<String> avgs) {
        this.avgs = avgs;
    }

    public Map<String, String> getDataType() {
        return dataType;
    }

    public void setDataType(Map<String, String> dataType) {
        this.dataType = dataType;
    }

    public String getLsdata() {
        return lsdata;
    }

    public void setLsdata(String lsdata) {
        this.lsdata = lsdata;
    }

    public List<String> getRowList() {
        return rowList;
    }

    public void setRowList(List<String> rowList) {
        this.rowList = rowList;
    }

    public Map<String, String> getColsValue() {
        return colsValue;
    }

    public void setColsValue(Map<String, String> colsValue) {
        this.colsValue = colsValue;
    }

    public String getSqlStr() {
        return sqlStr;
    }

    public void setSqlStr(String sqlStr) {
        this.sqlStr = sqlStr;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getRetValue() {
        return retValue;
    }

    public void setRetValue(String retValue) {
        this.retValue = retValue;
    }

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public String getMin() {
        return min;
    }

    public void setMin(String min) {
        this.min = min;
    }

    public String getMax() {
        return max;
    }

    public void setMax(String max) {
        this.max = max;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}