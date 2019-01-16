package com.unissoft.test.utils;

import org.springframework.stereotype.Component;

import javax.annotation.Resources;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Component
public class MathUtils {

    public static double[] toPrimitive(Object[] array) {
        if (array == null) {
            return null;
        } else if (array.length == 0) {
            return null;
        }
        final double[] result = new double[array.length];
        for (int i = 0; i < array.length; i++) {
            result[i] = Double.valueOf(array[i].toString()).doubleValue();

        }
        return result;
    }

    public static double[][] toPrimitive(Map<String, List<Double>> map) {
        if (map == null || map.size() == 0) {
            return null;
        }
        final double[][] result = new double[map.size()][];
//        List<Double[]> a = new ArrayList<>();
//
//        final int c = 0;
//        map.forEach((key,value)->{
//            value.stream().mapToDouble(Double::doubleValue).toArray();
//        });
        map.values().stream().map(x -> x.stream().mapToDouble(Double::doubleValue).toArray()).collect(Collectors.toList()).toArray(result);
        return result;
    }
}
