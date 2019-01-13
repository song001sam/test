package com.unissoft.test.service;

public interface MathService {
    public double getAverage(double[] arr);

    public double getStandardDeviation(double[] arr);

    public double getVariance(double[] arr);

    public double[][] getPearsonsCorrelation(double[][] arr);
}
