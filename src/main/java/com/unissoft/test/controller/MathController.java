package com.unissoft.test.controller;

import com.unissoft.test.service.MathService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MathController {
    @Autowired
    MathService service;

    @RequestMapping(value = "/Restful/Deviation", method = RequestMethod.GET)
    public Double StandardDeviation() {
        double[] values = new double[]{0.33, 1.33, 0.27333, 0.3, 0.501, 0.444, 0.44, 0.34496, 0.33, 0.3, 0.292, 0.667};
        return service.getStandardDeviation(values);

    }

    @RequestMapping(value = "/Restful/Variance", method = RequestMethod.GET)
    public Double Variance() {
        double[] values = new double[]{0.33, 1.33, 0.27333, 0.3, 0.501, 0.444, 0.44, 0.34496, 0.33, 0.3, 0.292, 0.667};
        return service.getVariance(values);

    }

    @RequestMapping(value = "/Restful/PearsonsCorrelation", method = RequestMethod.GET)
    public double[][] PearsonsCorrelation() {
        double[] values1 = new double[]{0.12, 0.87, 0.64};
        double[] values2 = new double[]{0.94, 0.31, 0.13};
        double[] values3 = new double[]{0.15, 0.31, 0.87};
        double[][] v = new double[][]{values1, values2, values3};
        return service.getPearsonsCorrelation(v);

    }
}
