package com.unissoft.test.service.impl;

import com.unissoft.test.service.MathService;
import org.apache.commons.math3.linear.Array2DRowRealMatrix;
import org.apache.commons.math3.linear.RealMatrix;
import org.apache.commons.math3.stat.descriptive.DescriptiveStatistics;
import org.apache.commons.math3.stat.descriptive.moment.*;
import org.apache.commons.math3.stat.descriptive.rank.Max;
import org.apache.commons.math3.stat.descriptive.rank.Min;
import org.springframework.stereotype.Service;
import org.apache.commons.math3.stat.correlation.PearsonsCorrelation;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.stream.Collectors;

//import org.apache.commons.math3.stat.
@Service
public class MathServiceImpl implements MathService {
    double[] values = new double[]{0.33, 1.33, 0.27333, 0.3, 0.501, 0.444, 0.44, 0.34496, 0.33, 0.3, 0.292, 0.667};

    @Override
    public double getAverage(double[] arr) {
        DescriptiveStatistics stats = new DescriptiveStatistics();
        for (double d : arr) {
            stats.addValue(d);
        }
        return stats.getSum() / arr.length;
    }

    @Override
    public double getStandardDeviation(double[] arr) {
        DescriptiveStatistics stats = new DescriptiveStatistics();

        for (double d : arr) {
            stats.addValue(d);
        }
        return stats.getStandardDeviation();
    }

    @Override
    public double getVariance(double[] arr) {
        DescriptiveStatistics stats = new DescriptiveStatistics();
        for (double d : arr) {
            stats.addValue(d);
        }
        return stats.getVariance();
    }

    @Override
    public double[][] getPearsonsCorrelation(double[][] arr) {
        PearsonsCorrelation pc = new PearsonsCorrelation(arr);
//        System.out.println(pc.getCorrelationPValues());
        return pc.getCorrelationMatrix().getData();
    }

    @Override
    public double[][] getPearsonsCorrelationPValue(double[][] arr) {
        PearsonsCorrelation pc = new PearsonsCorrelation(arr);
//        System.out.println(pc.getCorrelationPValues());

        return pc.getCorrelationPValues().getData();
    }

    @Override
    public double getMax(double[] arr) {
        Max max = new Max();
        return max.evaluate(arr);
    }

    @Override
    public double getMin(double[] arr) {
        Min min = new Min();
        return min.evaluate(arr);
    }

}
