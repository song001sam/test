package com.unissoft.test.service;

import java.util.Collection;

public interface MathService {
    double getAverage(double[] arr);

    double getStandardDeviation(double[] arr);

    double getVariance(double[] arr);

    double[][] getPearsonsCorrelation(double[][] arr);

    double[][] getPearsonsCorrelationPValue(double[][] arr);

    double getMax(double[] arr);

    double getMin(double[] arr);

    double getOneWayAnova(Collection<double[]> doubles);
}
