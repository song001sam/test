package com.unissoft.test.entity;

/**
 * LG_BQA_AGRCHEM_LG_HB	放行成分标准
 */
public class Gybz_FangXing {
    private String rowkey;//'行键',
    private String std_spec;//'材质代码',
    private String stl_grd_cd;//'牌号代码',
    private String comp_code_min;//'下限比较符',
    private String chem_comp_min;//'化学成分最小值',
    private String comp_code_max;//'上限比较符',
    private String chem_comp_cd;//'化学成分代码',
    private String chem_comp_max;//'化学成分最大值',
    private String ins_time;//'录入时间',
    private String ins_emp_id;//'录入人员代码',
    private String upd_time;//'修改时间',
    private String upd_emp_id;//'修改人员代码',
    private String chem_comp_name;//''

    public String getRowkey() {
        return rowkey;
    }

    public void setRowkey(String rowkey) {
        this.rowkey = rowkey;
    }

    public String getStd_spec() {
        return std_spec;
    }

    public void setStd_spec(String std_spec) {
        this.std_spec = std_spec;
    }

    public String getStl_grd_cd() {
        return stl_grd_cd;
    }

    public void setStl_grd_cd(String stl_grd_cd) {
        this.stl_grd_cd = stl_grd_cd;
    }

    public String getComp_code_min() {
        return comp_code_min;
    }

    public void setComp_code_min(String comp_code_min) {
        this.comp_code_min = comp_code_min;
    }

    public String getChem_comp_min() {
        return chem_comp_min;
    }

    public void setChem_comp_min(String chem_comp_min) {
        this.chem_comp_min = chem_comp_min;
    }

    public String getComp_code_max() {
        return comp_code_max;
    }

    public void setComp_code_max(String comp_code_max) {
        this.comp_code_max = comp_code_max;
    }

    public String getChem_comp_cd() {
        return chem_comp_cd;
    }

    public void setChem_comp_cd(String chem_comp_cd) {
        this.chem_comp_cd = chem_comp_cd;
    }

    public String getChem_comp_max() {
        return chem_comp_max;
    }

    public void setChem_comp_max(String chem_comp_max) {
        this.chem_comp_max = chem_comp_max;
    }

    public String getIns_time() {
        return ins_time;
    }

    public void setIns_time(String ins_time) {
        this.ins_time = ins_time;
    }

    public String getIns_emp_id() {
        return ins_emp_id;
    }

    public void setIns_emp_id(String ins_emp_id) {
        this.ins_emp_id = ins_emp_id;
    }

    public String getUpd_time() {
        return upd_time;
    }

    public void setUpd_time(String upd_time) {
        this.upd_time = upd_time;
    }

    public String getUpd_emp_id() {
        return upd_emp_id;
    }

    public void setUpd_emp_id(String upd_emp_id) {
        this.upd_emp_id = upd_emp_id;
    }

    public String getChem_comp_name() {
        return chem_comp_name;
    }

    public void setChem_comp_name(String chem_comp_name) {
        this.chem_comp_name = chem_comp_name;
    }
}