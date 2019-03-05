package com.unissoft.test;

import Jama.Matrix;
import com.unissoft.test.service.XSMXService;
import com.unissoft.test.service.impl.XSMXServiceImpl;
import com.unissoft.test.utils.PCAUtils;
import one.util.streamex.DoubleStreamEx;
import org.apache.commons.math3.linear.Array2DRowRealMatrix;
import org.apache.commons.math3.linear.RealMatrix;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.DoubleStream;

//@RunWith(SpringRunner.class)
//@SpringBootTest
public class test {


    public void mm() {
        PCAUtils pca = new PCAUtils();
        //获得样本集
//        double[][] primaryArray = {{0.1, 0.2, 0.13, 0.34}, {0.13, 0.15, 0.17, 0.12}, {0.25, 0.1, 0.2, 0.42}, {0.41, 0.094, 0.115, 0.316}, {0.61, 0.394, 0.715, 0.316}, {0.61, 0.794, 0.715, 0.16}, {0.11, 0.594, 0.315, 0.916}};
        double[][] primaryArray = {{0.1, 0.2, 0.13, 0.34}, {0.13, 0.15, 0.17, 0.12}, {0.25, 0.1, 0.2, 0.42}, {0.41, 0.094, 0.115, 0.316}};
//        double[][] primaryArray = {{0.1, 0.2, 0.34}, {0.13, 0.15, 0.12},  {0.41, 0.094, 0.316}};
        System.out.println("--------------------------------------------");
        System.out.println("源数据");
        RealMatrix n = new Array2DRowRealMatrix(primaryArray);
        n = n.getSubMatrix(2, 3, 1, 3);
        System.out.println(n);
        Matrix mm = new Matrix(primaryArray);

        mm.print(7, 4);

        System.out.println("--------------------------------------------");
        double[][] averageArray = pca.changeAverageToZero(primaryArray);
        System.out.println("--------------------------------------------");
        System.out.println("均值0化后的数据: ");
        System.out.println(averageArray.length + "行，"
                + averageArray[0].length + "列");
        mm = new Matrix(averageArray);
        mm.print(7, 4);
        System.out.println("---------------------------------------------");
        System.out.println("协方差矩阵: ");
        double[][] varMatrix = pca.getVarianceMatrix(averageArray);
        mm = new Matrix(varMatrix);
        mm.print(7, 4);
        System.out.println("--------------------------------------------");
        System.out.println("特征值矩阵: ");
        double[][] eigenvalueMatrix = pca.getEigenvalueMatrix(varMatrix);
        mm = new Matrix(eigenvalueMatrix);
        mm.print(7, 4);
        System.out.println("--------------------------------------------");
        System.out.println("特征向量矩阵: ");
        double[][] eigenVectorMatrix = pca.getEigenVectorMatrix(varMatrix);
        mm = new Matrix(eigenVectorMatrix);
        mm.print(7, 4);
        System.out.println("--------------------------------------------");
        Matrix principalMatrix = pca.getPrincipalComponent(primaryArray, eigenvalueMatrix, eigenVectorMatrix);
        System.out.println("主成分矩阵: ");
        principalMatrix.print(7, 4);

        System.out.println("--------------------------------------------");
        System.out.println("降维后的矩阵: ");
        Matrix resultMatrix = pca.getResult(primaryArray, principalMatrix);
        resultMatrix.print(7, 4);
        int c = resultMatrix.getColumnDimension(); //列数
        int r = resultMatrix.getRowDimension();//行数
        System.out.println(resultMatrix.getRowDimension() + "行," + resultMatrix.getColumnDimension() + "列");
    }

    @Test
    public void test() {
        DoubleStreamEx d = DoubleStreamEx.of(new Double[]{1D, 2D, 3D, 4D, 5D});
        d.pairMap((x, y) -> x + y).forEach(x -> System.out.println(x));
    }

}

