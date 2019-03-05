package com.unissoft.test.controller;

import com.github.pagehelper.PageInfo;
import com.unissoft.test.entity.*;
import com.unissoft.test.service.MathService;
import com.unissoft.test.service.XSMXService;
import com.unissoft.test.utils.MathUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.DecimalFormat;
import java.util.*;
import java.util.stream.Collectors;

@RestController
public class ZltjfxController {

    @Autowired
    XSMXService service;
    @Autowired
    MathService math;

    @RequestMapping(value = "/Zltjfx/getSelectData/", method = RequestMethod.POST)
    public List<String> getSelectData(@RequestBody Map<String, Object> map) {
        List<String> result = service.selectListDistinct(map.get("colKey").toString(), map.get("tableName").toString());
        return result;
    }

    @RequestMapping(value = "/Zltjfx/getColDataMax/", method = RequestMethod.POST)
    public Map<String, String> echartsDataForBox(@RequestBody Map<String, Object> map) {
        Map<String, String> retmap = new HashMap<>();
        //Map<String, String> result = service.selectListMax(map.get("colKey").toString(), map.get("tableName").toString());
        List<Map<String, Object>> result = service.selectList(new ArrayList<String>(Arrays.asList(map.get("colKey").toString().split(","))), map.get("tableName").toString(), map.get("GZ") != null ? map.get("GZ").toString() : null);
        double[] arr = result.stream().mapToDouble(x -> Double.valueOf(x.get(map.get("colKey").toString()).toString())).toArray();
        retmap.put("max", math.getMax(arr) + "");
        retmap.put("min", math.getMin(arr) + "");
        return retmap;
    }

    /*
       获取矩阵数据-不查询数据库,单纯的拼
        */
    @RequestMapping(value = "/Zltjfx/getMatrixDataNoSelect/{tableName}", method = RequestMethod.POST)
    public List<List<ZLTJFX_fltj>> getMatrixDataNoSelect(@RequestBody List<ZLTJFX_fltj> list, @PathVariable String tableName) {
        //循环List,将 分类变量 和统计变量 拆分,分组
        Map<String, List<ZLTJFX_fltj>> map = new HashMap<>();//将分类变量按字段分组
        List<ZLTJFX_fltj> listTongJi = new ArrayList<>();//统计变量分组
        List<ZLTJFX_fltj> paramList = new ArrayList<>();
        //拼矩阵工具方法
        getMatrixDataNoSelect(list, map, listTongJi, paramList);
        List<List<ZLTJFX_fltj>> retList = getList(map, listTongJi);
        //根据分组的条件查询数据库
        //List<ZLTJFX_fltj> data = getData(tableName, retList, listTongJi);
        return retList;
    }

    private void getMatrixDataNoSelect(List<ZLTJFX_fltj> list,
                                       Map<String, List<ZLTJFX_fltj>> map,
                                       List<ZLTJFX_fltj> listTongJi,
                                       List<ZLTJFX_fltj> paramList) {
        for (ZLTJFX_fltj fltj : list) {//将离散型字段拆分
            if ("1".equals(fltj.getDataType().get("code"))) {//离散
                String strdatas = fltj.getLsdata();
                String[] split = strdatas.split(",");
                for (String str : split) {
                    ZLTJFX_fltj new_fltj = new ZLTJFX_fltj();
                    new_fltj.setType(fltj.getType());

                    if (StringUtils.isNumeric(str)) {//如果是数字
                        new_fltj.setSqlStr(" and " + fltj.getKey() + "='" + str.trim() + "'");
                    } else {//如果不是数字
                        new_fltj.setSqlStr(" and " + fltj.getKey() + "=" + str.trim() + "");
                    }
                    new_fltj.setText(fltj.getValue() + "=" + str.trim() + "");
                    paramList.add(new_fltj);
                }
            } else {//连续性
                //格式化字段
                fltj.setText(fltj.getMin() + "<=" + fltj.getValue() + "<=" + fltj.getMax());
                fltj.setSqlStr(" and " + fltj.getMin() + "<=" + fltj.getKey() + " and " + fltj.getKey() + "<=" + fltj.getMax());
                paramList.add(fltj);
            }
        }
        //按字段分组
        for (ZLTJFX_fltj fltj : paramList) {
            if ("fenlei".equals(fltj.getType())) {
                List<ZLTJFX_fltj> listFL = map.get(fltj.getKey());
                if (listFL != null && listFL.size() > 0) {
                    listFL.add(fltj);
                } else {
                    listFL = new ArrayList<>();
                    listFL.add(fltj);
                    map.put(fltj.getKey(), listFL);
                }
            } else {
                listTongJi.add(fltj);
            }
        }
    }

    /*
       获取对比分析数据
        */
    @RequestMapping(value = "/Zltjfx/getDBXFData/{tableName}/{GZ}", method = RequestMethod.POST)
    public Map<String, Object> getDBXFData(@RequestBody ZLTJFX_dbfx dbfx, @PathVariable String tableName, @PathVariable String GZ) {
        Map<String, Object> retMap = new HashMap<>();
        //从参数中获取
        List<ZLTJFX_fltj> duibiList = dbfx.getDuibiList();
        List<List<ZLTJFX_fltj>> colThree2Lists = dbfx.getColThree2Lists();
        //根据分组的条件查询数据库
        if (StringUtils.isBlank(GZ) || "undefined".equals(GZ)) {
            GZ = null;
        }
        getAvgData(tableName, GZ, colThree2Lists, duibiList);
        //拼成前端需要的数据格式
        List<List<String>> retList = new ArrayList<>();
        List<String> retList2x = new ArrayList<>();
        List<String> retList2y = new ArrayList<>();
        List<String> ret0 = new ArrayList<>();
        ret0.add("product");
        ret0.add("类别1");
        ret0.add("类别2");
        for (ZLTJFX_fltj entity : duibiList) {
            retList2x.add(entity.getValue());
        }
        retList.add(ret0);
        for (ZLTJFX_fltj entity : duibiList) {
            List<String> ret = new ArrayList<>();
            ret.add(entity.getValue());
            ret.add(entity.getAvgs().get(0));
            ret.add(entity.getAvgs().get(1));
            retList.add(ret);
            retList2y.add(entity.getAvgSubVal());
        }
        retMap.put("avgBar", retList);
        retMap.put("echartList2x", retList2x);
        retMap.put("echartList2y", retList2y);
        return retMap;
    }

    /*
       获取矩阵数据
        */
    @RequestMapping(value = "/Zltjfx/getMatrixData/{tableName}/{GZ}", method = RequestMethod.POST)
    public List<ZLTJFX_fltj> getMatrixData(@RequestBody List<ZLTJFX_fltj> list, @PathVariable String tableName, @PathVariable String GZ) {
        //循环List,将 分类变量 和统计变量 拆分,分组
        Map<String, List<ZLTJFX_fltj>> map = new HashMap<>();//将分类变量按字段分组
        List<ZLTJFX_fltj> listTongJi = new ArrayList<>();//统计变量分组
        List<ZLTJFX_fltj> paramList = new ArrayList<>();
        //拼矩阵工具方法
        getMatrixDataNoSelect(list, map, listTongJi, paramList);
        List<List<ZLTJFX_fltj>> retList = getList(map, listTongJi);
        //根据分组的条件查询数据库
        if (StringUtils.isBlank(GZ) || "undefined".equals(GZ)) {
            GZ = null;
        }
        List<ZLTJFX_fltj> data = getData(tableName, retList, listTongJi, GZ);
        return data;
    }

    private List<ZLTJFX_fltj> getAvgData(String tableName, String GZ, List<List<ZLTJFX_fltj>> paramList, List<ZLTJFX_fltj> duibiList) {
        List<ZLTJFX_fltj> retList = new ArrayList<>();
        for (List<ZLTJFX_fltj> list : paramList) {
            ZLTJFX_fltj fltj = new ZLTJFX_fltj();
            String whereSql = "";
            List<String> rowList = new ArrayList<>();
            for (ZLTJFX_fltj row : list) {
                whereSql = whereSql + row.getSqlStr();
                rowList.add(row.getText());
            }
            List<String> colNames = new ArrayList<>();
            for (ZLTJFX_fltj duibi : duibiList) {
                colNames.add(duibi.getKey());
            }
            List<Map<String, Object>> dataResult = service.selectListWhere(colNames, tableName, whereSql, GZ);
            //结果取平均值
            for (ZLTJFX_fltj duibi : duibiList) {
                double[] arr = dataResult.stream().mapToDouble(x -> Double.valueOf(x.get(duibi.getKey()).toString())).toArray();
                List<String> avgs = duibi.getAvgs();
                if (avgs == null || avgs.size() == 0) {
                    avgs = new ArrayList<>();
                }
                avgs.add(MathUtils.round(math.getAverage(arr)) + "");// 平均值
                duibi.setAvgs(avgs);
            }
            fltj.setRowList(rowList);
            retList.add(fltj);
        }
        //求对比字段的均值差-绝对值
        for (ZLTJFX_fltj duibi : duibiList) {
            duibi.setAvgSubVal("" + MathUtils.round(Math.abs(Double.valueOf(duibi.getAvgs().get(0)) - Double.valueOf(duibi.getAvgs().get(1)))));
        }
        return retList;
    }

    private List<ZLTJFX_fltj> getData(String tableName, List<List<ZLTJFX_fltj>> paramList, List<ZLTJFX_fltj> listTongJi, String GZ) {
        List<ZLTJFX_fltj> retList = new ArrayList<>();
        for (List<ZLTJFX_fltj> list : paramList) {
            ZLTJFX_fltj fltj = new ZLTJFX_fltj();
            String whereSql = "";
            List<String> rowList = new ArrayList<>();
            for (ZLTJFX_fltj row : list) {
                whereSql = whereSql + row.getSqlStr();
                rowList.add(row.getText());
            }
            Map<String, String> map = new HashMap<>();
            for (ZLTJFX_fltj tongji : listTongJi) {
                String sql = whereSql + tongji.getSqlStr();
                String count = service.selectCount(tableName, sql, GZ);
                map.put(tongji.getText(), count);
            }
            fltj.setRowList(rowList);
            fltj.setColsValue(map);
            retList.add(fltj);
        }
        return retList;
    }

    private List<List<ZLTJFX_fltj>> getList(Map<String, List<ZLTJFX_fltj>> map, List<ZLTJFX_fltj> listTongJi) {
        int count = 1;
        List<List<ZLTJFX_fltj>> retList = new ArrayList();
        List<List<ZLTJFX_fltj>> listValue = new ArrayList();
        for (String key : map.keySet()) {
            List<ZLTJFX_fltj> zltjfx_fltjs = map.get(key);
            count = count * zltjfx_fltjs.size();
            listValue.add(zltjfx_fltjs);
        }
        for (int i = 0; i < count; i++) {
            retList.add(new ArrayList<>());
        }
        for (List<ZLTJFX_fltj> list : listValue) {
            zbc(list, count, retList);
        }
        return retList;
    }

    private void zbc(List<ZLTJFX_fltj> listValue, int count, List<List<ZLTJFX_fltj>> retList) {
        for (int i = 0; i < count; i++) {
            ZLTJFX_fltj value = null;
            if (i < listValue.size()) {
                value = listValue.get(i);
            } else {
                value = listValue.get(i % listValue.size());
            }
            List<ZLTJFX_fltj> values = retList.get(i);
            if (values != null && values.size() > 0) {
                values.add(value);
            } else {
                values = new ArrayList<>();
                values.add(value);
                retList.set(i, values);
            }
        }
    }

    @SuppressWarnings("all")
    @RequestMapping(value = "/Zltjfx/jbtj/getDataCount", method = RequestMethod.POST)
    public List<Map<String, Object>> getDataCount(@RequestBody Map<String, Object> map) {

        String GZ = map.get("GZ").toString();
        List<Map<String, String>> targetCols = (List<Map<String, String>>) map.get("targetCols");
        List<String> colNames = targetCols.stream().map(x -> x.get("key")).collect(Collectors.toList());

        List<Map<String, Object>> dataResult = service.selectList(colNames, map.get("tableName").toString(), GZ);

        // Map<String, String> result = service.selectListMax(map.get("colKey").toString(), map.get("tableName").toString());
        List<Map<String, Object>> result = new ArrayList<Map<String, Object>>();
        for (String col : colNames) {

            Map<String, Object> dataMap = new HashMap<String, Object>();
            dataMap.put("name", col);
            double[] arr = dataResult.stream().mapToDouble(x -> Double.valueOf(x.get(col).toString())).toArray();
            dataMap.put("count", arr.length);// 总数
            dataMap.put("avg", math.getAverage(arr));// 平均值
            dataMap.put("max", math.getMax(arr));// 最大值
            dataMap.put("min", math.getMin(arr));// 最小值
            dataMap.put("sum", math.getSum(arr));// 总和
            dataMap.put("median", math.getMedian(arr));// 中位数（中值）
            dataMap.put("variance", math.getVariance(arr));// 方差
            dataMap.put("standard", math.getStandardDeviation(arr));// 标准差
            dataMap.put("range", math.getMax(arr) - math.getMin(arr));// 全距
            dataMap.put("kurtosis", math.getKurtosis(arr));// 峰度
            dataMap.put("skewness", math.getSkewness(arr));// 偏度
            dataMap.put("variable", math.getStandardDeviation(arr) / math.getAverage(arr));// 变异系数

            result.add(dataMap);
        }

        return result;
    }

    @RequestMapping(value = "/Zltjfx/jbtj/getMap1", method = RequestMethod.POST)
    public List<Map<String, Object>> getMap1(@RequestBody Map<String, Object> map) {

        String colName = map.get("colName").toString();
        String GZ = map.get("GZ").toString();
        // String type = map.get("type").toString();
        List<Map<String, String>> scope = (List<Map<String, String>>) map.get("scope");

        List<String> colNames = new ArrayList<String>();
        colNames.add(colName);

        List<Map<String, Object>> dataResult = service.selectList(colNames, map.get("tableName").toString(), GZ);
        double[] arr = dataResult.stream().mapToDouble(x -> Double.valueOf(x.get(colName).toString())).toArray();

        List<Map<String, Object>> result = new ArrayList<Map<String, Object>>();

        for (Map<String, String> map2 : scope) {
            Map<String, Object> dataMap = new HashMap<String, Object>();
            double i = 0.0;
            double j = 0.0;
            Double zmin = Double.valueOf(String.valueOf(map2.get("zmin")));
            Double zmax = Double.valueOf(String.valueOf(map2.get("zmax")));
            Double qmin = Double.valueOf(String.valueOf(map2.get("qmin")));
            Double qmax = Double.valueOf(String.valueOf(map2.get("qmax")));

            for (double d : arr) {

                if (d >= zmin && d <= zmax) {
                    i++;
                }
                if (d >= qmin && d <= qmax) {
                    j++;
                }

            }
            dataMap.put("name", map2.get("name").toString());
            dataMap.put("xAxis", zmin + "~" + zmax);
            if (j == 0) {
                dataMap.put("yAxis", 0);
            } else {
                double r = i / j * 100.0;
                DecimalFormat dFormat = new DecimalFormat("#.00");
                Double temp = Double.valueOf(dFormat.format(r));
                dataMap.put("yAxis", temp);
            }
            result.add(dataMap);
        }

        return result;
    }

    @RequestMapping(value = "/Zltjfx/jbtj/getMap2", method = RequestMethod.POST)
    public List<Map<String, Object>> getMap2(@RequestBody Map<String, Object> map) {

        String colName = map.get("colName").toString();
        String GZ = map.get("GZ").toString();
        List<Map<String, String>> scope = (List<Map<String, String>>) map.get("scope");

        List<String> colNames = new ArrayList<String>();
        colNames.add(colName);

        List<Map<String, Object>> dataResult = service.selectList(colNames, map.get("tableName").toString(), GZ);
        double[] arr = dataResult.stream().mapToDouble(x -> Double.valueOf(x.get(colName).toString())).toArray();

        List<Map<String, Object>> result = new ArrayList<Map<String, Object>>();

        // Collections.frequency(arg0, arg1)

        for (Map<String, String> map2 : scope) {
            Map<String, Object> dataMap = new HashMap<String, Object>();
            double i = 0.0;
            double j = 0.0;
            String[] zscope = map2.get("zscope").toString().split(",");
            String[] qscope = map2.get("qscope").toString().split(",");

            for (double d : arr) {
                for (String z : zscope) {
                    if (d == Double.valueOf(z)) {
                        i++;
                    }
                }
                for (String q : qscope) {
                    if (d == Double.valueOf(q)) {
                        j++;
                    }
                }
            }
            dataMap.put("name", map2.get("name").toString());
            dataMap.put("xAxis", map2.get("name").toString());
            if (j == 0) {
                dataMap.put("yAxis", 0);
            } else {
                double r = i / j * 100.0;
                DecimalFormat dFormat = new DecimalFormat("#.00");
                Double temp = Double.valueOf(dFormat.format(r));
                dataMap.put("yAxis", temp);
            }
            result.add(dataMap);
        }

        return result;
    }

    /*@RequestMapping(value = "/Zltjfx/jbtj/exportDataCountForExcel", method = RequestMethod.POST)
    public void exportDataCountForExcel(HttpServletResponse response, @RequestBody Map<String, Object> map) {

        // 获取数据
        List<Map<String, Object>> list = getDataCount(map);

        // excel标题
        String[] title = { "变量", "总记录数", "均值", "最大值", "最小值", "总和", "中值", "方差", "标准差", "全距", "峰度", "偏度", "变异系数" };

        // excel文件名
        String fileName = "基本生产数据统计信息" + System.currentTimeMillis() + ".xls";

        // sheet名
        String sheetName = "统计信息表";

        String[][] content = new String[list.size()][title.length];
        for (int i = 0; i < list.size(); i++) {
            Map<String, Object> obj = list.get(i);
            content[i][0] = obj.get("name").toString();
            content[i][1] = obj.get("count").toString();
            content[i][2] = obj.get("avg").toString();
            content[i][3] = obj.get("max").toString();
            content[i][4] = obj.get("min").toString();
            content[i][5] = obj.get("sum").toString();
            content[i][6] = obj.get("median").toString();
            content[i][7] = obj.get("variance").toString();
            content[i][8] = obj.get("standard").toString();
            content[i][9] = obj.get("range").toString();
            content[i][10] = obj.get("kurtosis").toString();
            content[i][11] = obj.get("skewness").toString();
            content[i][12] = obj.get("variable").toString();
        }

        ExcelUtil.getHSSFWorkbook(response, fileName, sheetName, title, content, null);
    }*/
}
