package com.unissoft.test.service.impl;

import Jama.Matrix;
import com.unissoft.test.entity.Xsmx_box;
import com.unissoft.test.mapper.inceptor.XSMXMapper;
import com.unissoft.test.service.MathService;
import com.unissoft.test.service.XSMXService;
import com.unissoft.test.utils.MathUtils;
import com.unissoft.test.utils.PCAUtils;
import org.apache.commons.math3.linear.Array2DRowRealMatrix;
import org.apache.commons.math3.linear.LUDecomposition;
import org.apache.commons.math3.linear.RealMatrix;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class XSMXServiceImpl implements XSMXService {
    @Autowired
    XSMXMapper xsmxMapper;
    @Autowired
    MathService mathService;

    @Override
    public Map<String, Object> jisuan(Map<String, Object> map) {
        List<String> colList = (List<String>) map.get("colNames");
        String GZ = map.get("GZ").toString();
        List<Map<String, Object>> list = xsmxMapper.selectList(map);
        Map<String, List<Double>> doubleMap = new HashMap<>();
        Map<String, Object> resultMap = new HashMap<>();
        colList.forEach(
                colName -> {
                    list.forEach(
                            mapTemp -> {
                                List l = doubleMap.getOrDefault(colName, new ArrayList<>());

                                l.add(Double.valueOf(String.valueOf(mapTemp.getOrDefault(colName, "0"))));
                                doubleMap.put(colName, l);
                            });
                });
        Map<String, String> colToComment =
                this.selectColNameAndComment(map.get("tableName").toString().toLowerCase());
        doubleMap.forEach(
                (key, value) -> {
                    resultMap.put(
                            colToComment.get(key) + "-Deviation",
                            mathService.getStandardDeviation(MathUtils.toPrimitive(value.toArray())));
                    resultMap.put(
                            colToComment.get(key) + "-Variance",
                            mathService.getVariance(MathUtils.toPrimitive(value.toArray())));
        });
        double[][] result = new double[list.size()][colList.size()];
        List<List<Double>> listlist =
                list.stream()
                        .map(
                                m ->
                                        m.values().stream()
                                                .map(mm -> Double.valueOf(mm.toString()))
                                                .collect(Collectors.toList()))
                        .collect(Collectors.toList());
        listlist.stream()
                .map(x -> x.stream().mapToDouble(Double::doubleValue).toArray())
                .collect(Collectors.toList())
                .toArray(result);
        resultMap.put("Correlation", mathService.getPearsonsCorrelation(result));
        resultMap.put("PValue", mathService.getPearsonsCorrelationPValue(result));
        //    System.out.println(mathService.getPearsonsCorrelationPValue(result)[0][1]);
        return resultMap;
    }

    @Override
    public Map<String, double[][]> XGXFX(Map<String, Object> map, int inCount, int outCount) {
        // 结果处理，去掉不需要的数据
        double[][] result = getData(map);
        Map<String, double[][]> resultMap = new HashMap<>();
        double[][] correlation = mathService.getPearsonsCorrelation(result);
        double[][] correlationNew = new double[inCount][outCount];
        Arrays.stream(correlation)
                .limit(inCount)
                .map(x -> Arrays.stream(x).skip(inCount).toArray())
                .collect(Collectors.toList())
                .toArray(correlationNew);
        resultMap.put("Correlation", correlationNew);
        double[][] pValue = mathService.getPearsonsCorrelationPValue(result);
        double[][] pValueNew = new double[inCount][outCount];
        Arrays.stream(pValue)
                .limit(inCount)
                .map(x -> Arrays.stream(x).skip(inCount).toArray())
                .collect(Collectors.toList())
                .toArray(pValueNew);
        resultMap.put("PValue", pValueNew);
        return resultMap;
    }

    @Override
    public Map<String, double[][]> ZYFX(Map<String, Object> map, int size) {
        boolean BZH = (int) map.get("BZH") == 0 ? true : false;
        PCAUtils pca = new PCAUtils();
        Map<String, double[][]> resultMap = new HashMap<>();
        double[][] result = getData(map);
        double[][] averageArray;
        if (BZH) {
            averageArray = pca.changeAverageToZero(result); // 均值0后矩阵
        } else {
            averageArray = result;
        }
        double[][] varMatrix = pca.getVarianceMatrix(averageArray); // 协方差矩阵
        double[][] eigenvalueMatrix = pca.getEigenvalueMatrix(varMatrix); // 特征值矩阵
        double[] eigenvalueArray = pca.getEigenvalueArray(varMatrix);
        final double[] sortedEigenvalueArray = // 排序后特征值
                Arrays.stream(eigenvalueArray)
                        .boxed()
                        .sorted(Comparator.reverseOrder())
                        .mapToDouble(x -> x.doubleValue())
                        .toArray();
        // 生成排序数组
        int[] sortArray =
                Arrays.stream(eigenvalueArray)
                        .mapToInt(
                                x ->
                                        Arrays.stream(sortedEigenvalueArray)
                                                .boxed()
                                                .collect(Collectors.toList())
                                                .indexOf(x))
                        .toArray();
        resultMap.put("sortedEigenvalueArray", new double[][]{sortedEigenvalueArray});
        double[] sortedGXpercent = // 排序后贡献率
                Arrays.stream(sortedEigenvalueArray)
                        .map(
                                x -> {
                                    double sum = Arrays.stream(sortedEigenvalueArray).sum();
                                    return x / sum;
                                })
                        .toArray();
        resultMap.put("sortedGXpercent", new double[][]{sortedGXpercent});
        List<Double> plusSortedEigenvalueList = new ArrayList<>();
        for (int i = 0; i < size; i++) {
            double x = 0;
            for (int j = 0; j < (i + 1); j++) {
                x += sortedGXpercent[j];
            }
            plusSortedEigenvalueList.add(x);
        }
        //    double[] plusSortedEigenvalueArray = // 累积贡献率
        //        DoubleStreamEx.of(sortedGXpercent).pairMap((x, y) -> x +
        // y).prepend(sortedGXpercent[0]).toArray();
        double[] plusSortedEigenvalueArray =
                plusSortedEigenvalueList.stream().mapToDouble(x -> x.doubleValue()).toArray();
        resultMap.put("plusSortedEigenvalueArray", new double[][]{plusSortedEigenvalueArray});
        long count = Arrays.stream(plusSortedEigenvalueArray).filter(x -> x < 0.85).count() + 1;
        double[][] eigenVectorMatrix = pca.getEigenVectorMatrix(varMatrix); // 特征向量矩阵
        double[][] eigenVectorMatrixTemp = pca.getEigenVectorMatrix(varMatrix);
        for (int i = 0; i < eigenVectorMatrix.length; i++) {
            for (int j = 0; j < eigenVectorMatrix[i].length; j++) {
                //        int temp = sortArray[0];
                eigenVectorMatrix[i][j] = eigenVectorMatrixTemp[i][sortArray[j]];
            }
        }

        Matrix principalMatrix =
                pca.getPrincipalComponent(averageArray, eigenvalueMatrix, eigenVectorMatrix); // 主成分矩阵
        resultMap.put("principalMatrix", principalMatrix.getArray());
        Arrays.stream(eigenvalueMatrix)
                .map(x -> Arrays.stream(x).map(y -> Math.sqrt(y)).toArray())
                .collect(Collectors.toList())
                .toArray(eigenvalueMatrix);
        Matrix eigenvalueMatrixTemp = new Matrix(eigenvalueMatrix);
        Matrix eigenVectorMatrixTemp1 = new Matrix(eigenVectorMatrix);
        double[][] ZCFZH = eigenvalueMatrixTemp.times(eigenVectorMatrixTemp1).getArray();
        Arrays.stream(ZCFZH)
                .map(x -> Arrays.stream(x).limit(count).toArray())
                .collect(Collectors.toList())
                .toArray(ZCFZH);
        resultMap.put("ZCFZH", ZCFZH);
        Matrix resultMatrix = pca.getResult(averageArray, principalMatrix); // 降维后矩阵
        resultMap.put("resultMatrix", resultMatrix.getArray());
        return resultMap;
    }

    @Override
    public List<Map<String, Object>> selectList(List<String> colName, String tableName, String GZ) {
        Map map = new HashMap();
        map.put("colNames", colName);
        map.put("tableName", tableName);
        map.put("GZ", GZ);
        return xsmxMapper.selectList(map);
    }

    @Override
    public List<Map<String, Object>> selectListWhere(
            List<String> colName, String tableName, String sqlStr, String GZ) {
        Map map = new HashMap();
        map.put("colNames", colName);
        map.put("tableName", tableName);
        map.put("sqlStr", sqlStr);
        map.put("GZ", GZ);
        return xsmxMapper.selectListWhere(map);
    }

    @Override
    @Cacheable
    public List<String> GZList() {
        return xsmxMapper.GZList();
    }

    @Override
    public List<Xsmx_box> selectListGroupBy(String colName, String tableName, String groupColName) {
        Map map = new HashMap();
        map.put("colName", colName);
        map.put("tableName", tableName);
        map.put("groupColName", groupColName);
        return xsmxMapper.selectListGroupBy(map);
    }

    //
    //    @Override
    //    public Map<String, String> selectListMax(String colName, String tableName) {
    //        Map map = new HashMap();
    //        map.put("colName", colName);
    //        map.put("tableName", tableName);
    //        return xsmxMapper.selectListMax(map);
    //    }
    @Override
    public Map<String, Double> FCFX(Map<String, Object> map) {
        List<String> colList = (List<String>) map.get("colNames");
        double[][] result = getData(map);
        Map<String, Double> resultMap = new HashMap<>();
        List<double[]> resultList = Arrays.stream(result).collect(Collectors.toList());
        resultMap.put("PValue", mathService.getOneWayAnovaPValue(resultList));
        resultMap.put("FValue", mathService.getOneWayAnovaFValue(resultList));
        return resultMap;
    }

    /*
    计算偏相关
     */
    @Override
    public Double[][] PXGFX(Map<String, Object> map, int colInCount, int colOutCount) {
        double[][] result = getData(map);
        double[][] xg = mathService.getPearsonsCorrelation(result);
        Arrays.stream(xg)
                .forEach(
                        x -> {
                            Arrays.stream(x).forEach(y -> System.out.print(y + "  "));
                            System.out.println();
                        });
        Double[][] resultArray = new Double[colInCount][colInCount];
        //        Arrays.stream(resultArray).forEach(x-> Arrays.stream(x).forEach(y->y=0D));
        for (int i = 0; i < colInCount; i++) {
            for (int j = 0; (j < colInCount); j++) {
                List<List<Double>> xgList =
                        Arrays.stream(xg)
                                .map(x -> Arrays.stream(x).boxed().collect(Collectors.toList()))
                                .collect(Collectors.toList());
                if (i == j) { // 对角线
                    resultArray[i][j] = 1D;
                } else if (i > j) { // 左下角
                    resultArray[i][j] = resultArray[j][i];
                } else { // 正常求值
                    int xNew = 0;
                    int size = xgList.size(); // 由于xgList会变，先保存下
                    for (int x = 0; x < xgList.size(); x++) { // 拼接矩阵
                        List<Double> doubleList = xgList.get(x);
                        int yNew = 0;
                        for (int y = 0; y < doubleList.size() - colOutCount; y++) {
                            // 防止y--导致下标问题
                            if (yNew != i && yNew != j) {
                                doubleList.remove(y);
                                y--;
                            }
                            yNew++;
                        }
                        if (xNew != i && xNew != j && xNew < (size - colOutCount)) {
                            xgList.remove(x);
                            x--;
                        }
                        xNew++;
                    }
                    double[][] xgTemp = new double[colOutCount + 2][colOutCount + 2];
                    xgList.stream()
                            .map(x -> x.stream().mapToDouble(y -> y.doubleValue()).toArray())
                            .collect(Collectors.toList())
                            .toArray(xgTemp);
                    RealMatrix matrix1 = new Array2DRowRealMatrix(xgTemp);
                    RealMatrix matrix2 = new LUDecomposition(matrix1).getSolver().getInverse();
                    xgTemp = matrix2.getData();

                    resultArray[i][j] =
                            (xgTemp[0][1] * -1) / (Math.sqrt(xgTemp[0][0]) * Math.sqrt(xgTemp[1][1])); // 按公式计算
                }
            }
        }

        return resultArray;
    }

    @Cacheable(cacheNames = "selectColName", key = "#tableName")
    @Override
    public List<String> selectColName(String tableName) {
        return xsmxMapper.selectColName(tableName).stream()
                .map(x -> x.get("column_name"))
                .collect(Collectors.toList());
    }

    @Cacheable(cacheNames = "selectColNameAndComment", key = "#tableName")
    @Override
    public Map<String, String> selectColNameAndComment(String tableName) {
        final Map<String, String> result = new HashMap<>();
        //        xsmxMapper.selectColName(tableName).stream().forEach(x -> {
        //            result.put(x.get("COLUMN_NAME"), x.get("COLUMN_COMMENT"));
        //        });
        xsmxMapper.selectColName(tableName.toLowerCase()).stream()
                .forEach(
                        x -> {
                            result.put(x.get("column_name"), x.get("commentstring"));
                        });
        return result;
    }

    private double[][] getData(Map<String, Object> map) {
        List<String> colList = (List<String>) map.get("colNames");
        String GZ = map.getOrDefault("GZ", "").toString();
        List<Map<String, Object>> list = xsmxMapper.selectList(map);
        Map<String, List<Double>> doubleMap = new HashMap<>();
        Map<String, double[][]> resultMap = new HashMap<>();
        colList.forEach(
                colName -> {
                    list.forEach(
                            mapTemp -> {
                                List l = doubleMap.getOrDefault(colName, new ArrayList<>());

                                l.add(Double.valueOf(String.valueOf(mapTemp.getOrDefault(colName, "0"))));
                                doubleMap.put(colName, l);
                            });
                });
        double[][] result = new double[list.size()][colList.size()];
        List<List<Double>> listlist =
                list.stream()
                        .map(
                                m ->
                                        m.values().stream()
                                                .map(mm -> Double.valueOf(mm.toString()))
                                                .collect(Collectors.toList()))
                        .collect(Collectors.toList());
        listlist.stream()
                .map(x -> x.stream().mapToDouble(Double::doubleValue).toArray())
                .collect(Collectors.toList())
                .toArray(result);
        return result;
    }

    @Override
    public List<String> selectListDistinct(String colName, String tableName) {
        Map map = new HashMap();
        map.put("colName", colName);
        map.put("tableName", tableName);
        return xsmxMapper.selectListDistinct(map);
    }

    @Override
    public String selectCount(String tableName, String whereSql, String GZ) {
        Map map = new HashMap();
        map.put("tableName", tableName);
        map.put("whereSql", whereSql);
        map.put("GZ", GZ);
        return xsmxMapper.selectCount(map);
    }

    ;
}
