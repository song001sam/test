package com.unissoft.test.entity;

public class CPKModel {

    /**
     * id
     */
    private Integer id;
    /**
     * 工序
     */
    private String pos;
    /**
     * 钢种
     */
    private String stlGrdName;
    /**
     * 最小值
     */
    private String stdMin;
    /**
     * 最大值
     */
    private String stdMax;
    /**
     *
     */
    private String heatId;
    /**
     * 班别
     */
    private String shiftId;
    /**
     * 材质代码
     */
    private String fmatCode;
    /**
     * 检验代码（cpk项目）
     */
    private String itemCd;
    /**
     * 生产日期
     */
    private String insTime;
    /**
     * cpk值
     */
    private String cpk;
    /**
     * 开始时间
     */
    private String beginTime;
    /**
     * 结束时间
     */
    private String endTime;
    /**
     * x属性
     */
    private String x;

    /**
     * y属性
     */
    private String y;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPos() {
        return pos;
    }

    public void setPos(String pos) {
        this.pos = pos;
    }

    public String getStlGrdName() {
        return stlGrdName;
    }

    public void setStlGrdName(String stlGrdName) {
        this.stlGrdName = stlGrdName;
    }

    public String getStdMin() {
        return stdMin;
    }

    public void setStdMin(String stdMin) {
        this.stdMin = stdMin;
    }

    public String getStdMax() {
        return stdMax;
    }

    public void setStdMax(String stdMax) {
        this.stdMax = stdMax;
    }

    public String getHeatId() {
        return heatId;
    }

    public void setHeatId(String heatId) {
        this.heatId = heatId;
    }

    public String getShiftId() {
        return shiftId;
    }

    public void setShiftId(String shiftId) {
        this.shiftId = shiftId;
    }

    public String getFmatCode() {
        return fmatCode;
    }

    public void setFmatCode(String fmatCode) {
        this.fmatCode = fmatCode;
    }

    public String getItemCd() {
        return itemCd;
    }

    public void setItemCd(String itemCd) {
        this.itemCd = itemCd;
    }

    public String getInsTime() {
        return insTime;
    }

    public void setInsTime(String insTime) {
        this.insTime = insTime;
    }

    public String getCpk() {
        return cpk;
    }

    public void setCpk(String cpk) {
        this.cpk = cpk;
    }

    public String getBeginTime() {
        return beginTime;
    }

    public void setBeginTime(String beginTime) {
        this.beginTime = beginTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    public String getX() {
        return x;
    }

    public void setX(String x) {
        this.x = x;
    }

    public String getY() {
        return y;
    }

    public void setY(String y) {
        this.y = y;
    }

    @Override
    public String toString() {
        return "CPKModel{" +
                "id=" + id +
                ", pos='" + pos + '\'' +
                ", stlGrdName='" + stlGrdName + '\'' +
                ", stdMin='" + stdMin + '\'' +
                ", stdMax='" + stdMax + '\'' +
                ", heatId='" + heatId + '\'' +
                ", shiftId='" + shiftId + '\'' +
                ", fmatCode='" + fmatCode + '\'' +
                ", itemCd='" + itemCd + '\'' +
                ", insTime='" + insTime + '\'' +
                ", cpk='" + cpk + '\'' +
                ", beginTime='" + beginTime + '\'' +
                ", endTime='" + endTime + '\'' +
                ", x='" + x + '\'' +
                ", y='" + y + '\'' +
                '}';
    }
}
