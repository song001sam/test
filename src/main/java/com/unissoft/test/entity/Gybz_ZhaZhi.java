package com.unissoft.test.entity;

/**
 * ZG_BKA_CPKSTD_2_HB	轧制工艺标准表
 */
public class Gybz_ZhaZhi {
    private String rowkey;//'行键',
    private String stl_grd_cd;//'钢种',
    private String plate_d_min;//'产品规格下限',
    private String plate_d_max;//'产品规格上限',
    private String cpk_item;//'CPK项目',
    private String time_std;//'标准值',
    private String ins_time;//'插入时间',
    private String ins_empid;//'插入人员',
    private String mod_time;//'修改时间',
    private String mod_empid;//'修改人员',
    private String line;//'产线',
    private String std_min;//'标准下限',
    private String std_max;//'标准上限',
    private String f_month;//'月份',
    private String f_zt;//'是否棒卷直条',
    private String f_pj;//'是否棒卷盘卷'

    public String getRowkey() {
        return rowkey;
    }

    public void setRowkey(String rowkey) {
        this.rowkey = rowkey;
    }

    public String getStl_grd_cd() {
        return stl_grd_cd;
    }

    public void setStl_grd_cd(String stl_grd_cd) {
        this.stl_grd_cd = stl_grd_cd;
    }

    public String getPlate_d_min() {
        return plate_d_min;
    }

    public void setPlate_d_min(String plate_d_min) {
        this.plate_d_min = plate_d_min;
    }

    public String getPlate_d_max() {
        return plate_d_max;
    }

    public void setPlate_d_max(String plate_d_max) {
        this.plate_d_max = plate_d_max;
    }

    public String getCpk_item() {
        return cpk_item;
    }

    public void setCpk_item(String cpk_item) {
        this.cpk_item = cpk_item;
    }

    public String getTime_std() {
        return time_std;
    }

    public void setTime_std(String time_std) {
        this.time_std = time_std;
    }

    public String getIns_time() {
        return ins_time;
    }

    public void setIns_time(String ins_time) {
        this.ins_time = ins_time;
    }

    public String getIns_empid() {
        return ins_empid;
    }

    public void setIns_empid(String ins_empid) {
        this.ins_empid = ins_empid;
    }

    public String getMod_time() {
        return mod_time;
    }

    public void setMod_time(String mod_time) {
        this.mod_time = mod_time;
    }

    public String getMod_empid() {
        return mod_empid;
    }

    public void setMod_empid(String mod_empid) {
        this.mod_empid = mod_empid;
    }

    public String getLine() {
        return line;
    }

    public void setLine(String line) {
        this.line = line;
    }

    public String getStd_min() {
        return std_min;
    }

    public void setStd_min(String std_min) {
        this.std_min = std_min;
    }

    public String getStd_max() {
        return std_max;
    }

    public void setStd_max(String std_max) {
        this.std_max = std_max;
    }

    public String getF_month() {
        return f_month;
    }

    public void setF_month(String f_month) {
        this.f_month = f_month;
    }

    public String getF_zt() {
        return f_zt;
    }

    public void setF_zt(String f_zt) {
        this.f_zt = f_zt;
    }

    public String getF_pj() {
        return f_pj;
    }

    public void setF_pj(String f_pj) {
        this.f_pj = f_pj;
    }
}