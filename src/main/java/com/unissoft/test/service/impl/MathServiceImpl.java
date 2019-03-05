package com.unissoft.test.service.impl;

import com.unissoft.test.service.MathService;
import org.apache.commons.math3.linear.Array2DRowRealMatrix;
import org.apache.commons.math3.linear.RealMatrix;
import org.apache.commons.math3.stat.descriptive.DescriptiveStatistics;
import org.apache.commons.math3.stat.descriptive.moment.*;
import org.apache.commons.math3.stat.descriptive.rank.Max;
import org.apache.commons.math3.stat.descriptive.rank.Median;
import org.apache.commons.math3.stat.descriptive.rank.Min;
import org.apache.commons.math3.stat.descriptive.summary.Sum;
import org.apache.commons.math3.stat.inference.OneWayAnova;
import org.springframework.stereotype.Service;
import org.apache.commons.math3.stat.correlation.PearsonsCorrelation;

import java.util.*;

//import org.apache.commons.math3.stat.
@Service
public class MathServiceImpl implements MathService {
    double[] values = new double[]{0.33, 1.33, 0.27333, 0.3, 0.501, 0.444, 0.44, 0.34496, 0.33, 0.3, 0.292, 0.667};
    private static final double threshold = 0.95;// 特征值阈值
    @Override
    public double getAverage(double[] arr) {
        DescriptiveStatistics stats = new DescriptiveStatistics();
        for (double d : arr) {
            stats.addValue(d);
        }
        return stats.getSum() / arr.length;
    }

    /* (non-Javadoc)
     * @see com.unissoft.test.service.MathService#getStandardDeviation(double[])
     * 标准差
     */
    @Override
    public double getStandardDeviation(double[] arr) {
        DescriptiveStatistics stats = new DescriptiveStatistics();

        for (double d : arr) {
            stats.addValue(d);
        }
        return stats.getStandardDeviation();
    }

    /* (non-Javadoc)
     * @see com.unissoft.test.service.MathService#getVariance(double[])
     * 方差
     */
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

    /* (non-Javadoc)
     * @see com.unissoft.test.service.MathService#getMax(double[])
     * 最大值
     */
    @Override
    public double getMax(double[] arr) {
        Max max = new Max();
        return max.evaluate(arr);
    }

    /* (non-Javadoc)
     * @see com.unissoft.test.service.MathService#getMin(double[])
     * 最小值
     */
    @Override
    public double getMin(double[] arr) {
        Min min = new Min();
        return min.evaluate(arr);
    }

    /* (non-Javadoc)
     * @see com.unissoft.test.service.MathService#getSum(double[])
     * 总和
     */
    @Override
    public double getSum(double[] arr) {
        Sum sum = new Sum();
        return sum.evaluate(arr);
    }

    /* (non-Javadoc)
     * @see com.unissoft.test.service.MathService#getMedian(double[])
     * 中位数（中值）
     */
    @Override
    public double getMedian(double[] arr) {
        Median median = new Median();
        return median.evaluate(arr);
    }

    /* (non-Javadoc)
     * @see com.unissoft.test.service.MathService#getSkewness(double[])
     * 偏度
     */
    @Override
    public double getSkewness(double[] arr) {
        Skewness skewness = new Skewness();
        return skewness.evaluate(arr);
    }

    /* (non-Javadoc)
     * @see com.unissoft.test.service.MathService#getKurtosis(double[])
     * 峰度
     */
    @Override
    public double getKurtosis(double[] arr) {
        Kurtosis kurtosis = new Kurtosis();
        return kurtosis.evaluate(arr);
    }

    @Override
    public double getOneWayAnovaFValue(Collection<double[]> doubles) {
        OneWayAnova owa = new OneWayAnova();
        return owa.anovaFValue(doubles);
    }

    @Override
    public double getOneWayAnovaPValue(Collection<double[]> doubles) {
        OneWayAnova owa = new OneWayAnova();
        return owa.anovaPValue(doubles);
    }

    @Override
    public double[][] getPXG(double[][] doubles) {
        return doubles;
    }
}
