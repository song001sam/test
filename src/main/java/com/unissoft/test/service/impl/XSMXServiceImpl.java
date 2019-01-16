package com.unissoft.test.service.impl;

import com.unissoft.test.mapper.XSMXMapper;
import com.unissoft.test.service.MathService;
import com.unissoft.test.service.XSMXService;
import com.unissoft.test.utils.MathUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
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
        List<Map<String, Object>> list = xsmxMapper.selectList(map);
        Map<String, List<Double>> doubleMap = new HashMap<>();
        Map<String, Object> resultMap = new HashMap<>();
        colList.forEach(
                colName -> {
                    list.forEach(
                            mapTemp -> {
                                List l = doubleMap
                                        .getOrDefault(colName, new ArrayList<>());

                                l.add(Double.valueOf(String.valueOf(mapTemp.get(colName))));
                                doubleMap.put(colName, l);

                            });
                });

        doubleMap.forEach((key, value) -> {
            resultMap.put(key + "-Deviation", mathService.getStandardDeviation(MathUtils.toPrimitive(value.toArray())));
            resultMap.put(key + "-Variance", mathService.getVariance(MathUtils.toPrimitive(value.toArray())));

        });
        double[][] result = new double[list.size()][colList.size()];
        List<List<Double>> listlist = list.stream().map(m -> m.values().stream().map(mm -> Double.valueOf(mm.toString())).collect(Collectors.toList())).collect(Collectors.toList());
        listlist.stream().map(x -> x.stream().mapToDouble(Double::doubleValue).toArray()).collect(Collectors.toList()).toArray(result);
        resultMap.put("Correlation", mathService.getPearsonsCorrelation(result));
        resultMap.put("PValue", mathService.getPearsonsCorrelationPValue(result));
//    System.out.println(mathService.getPearsonsCorrelationPValue(result)[0][1]);
        return resultMap;
    }

    @Cacheable(cacheNames = "selectColName", key = "#tableName")
    @Override
    public List<String> selectColName(String tableName) {
        return xsmxMapper.selectColName(tableName).stream().map(x -> x.get("COLUMN_NAME")).collect(Collectors.toList());
    }

}