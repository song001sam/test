package com.unissoft.test.entity;

/*LG_BQA_TECHCON_S_HB	转炉工艺参数子表*/
public class Gybz_ZhuanLu_sub {
    private String rowkey;//'行键',
    private String fmatcode;//'材质代码',
    private String stl_grd;//'牌号',
    private String deoxidize_cdoe;//'脱氧剂/合金代码',
    private String deoxidize_name;//'脱氧剂/合金名称',
    private String deoxidize_sum;//'脱氧剂/合金加入量',
    private String remarks;//''

    public String getRowkey() {
        return rowkey;
    }

    public void setRowkey(String rowkey) {
        this.rowkey = rowkey;
    }

    public String getFmatcode() {
        return fmatcode;
    }

    public void setFmatcode(String fmatcode) {
        this.fmatcode = fmatcode;
    }

    public String getStl_grd() {
        return stl_grd;
    }

    public void setStl_grd(String stl_grd) {
        this.stl_grd = stl_grd;
    }

    public String getDeoxidize_cdoe() {
        return deoxidize_cdoe;
    }

    public void setDeoxidize_cdoe(String deoxidize_cdoe) {
        this.deoxidize_cdoe = deoxidize_cdoe;
    }

    public String getDeoxidize_name() {
        return deoxidize_name;
    }

    public void setDeoxidize_name(String deoxidize_name) {
        this.deoxidize_name = deoxidize_name;
    }

    public String getDeoxidize_sum() {
        return deoxidize_sum;
    }

    public void setDeoxidize_sum(String deoxidize_sum) {
        this.deoxidize_sum = deoxidize_sum;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}