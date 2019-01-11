package com.unissoft.test;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;

public class test {

    /*
     * 采用自底向上的填 表的动态规划方法求解TSP问题
     * distance是距离矩阵，optimalvalue存放阶段最短路径
     * optimalchoice存放阶段最优策略，方便回溯找到最短路径
     */

    double s = 0;//总距离
    int path[];//存放路径，方便计算距离
    private int citynumbers;//城市数目
    private double[][] distance;
    private double[][] optimalvalue;//阶段最短路径值矩阵
    private int[][] optimalchoice;//阶段最优策略矩阵

    public test(int citynumbers) {
        this.citynumbers = citynumbers;
    }

    //给定一个十进制数，输出一个指定位数的二进制形式字符串
    public static String binary(int decNum, int digit) {
        String binStr = "";
        for (int i = digit - 1; i >= 0; i--) {
            binStr += (decNum >> i) & 1;
        }
        return binStr;
    }

    public static void main(String[] args) throws IOException {

        long a = System.currentTimeMillis();
        test tsp = new test(4);//建立对象，根据需要初始化10,25或100
        tsp.readData("/Users/songshaochen/workspace/python/temp");//读取数据
        tsp.solve();
        long b = System.currentTimeMillis();
        long c = b - a;
        System.out.println("运行时间为:" + c);//输出运行时间
    }

    public void readData(String filename) throws IOException {
        int[] x = new int[citynumbers];//存放x坐标的数组
        int[] y = new int[citynumbers];//存放y坐标的数组
        distance = new double[citynumbers][citynumbers];//距离矩阵
        String a;
        BufferedReader in = new BufferedReader(new InputStreamReader(
                new FileInputStream(filename)));
        for (int i = 0; i < citynumbers; i++) {
            a = in.readLine();//读入一行数据
            String[] b = a.split(" ");//分隔出每个值
            x[i] = Integer.valueOf(b[1]);//x坐标数组
            y[i] = Integer.valueOf(b[2]);//y坐标数组
        }
        in.close();
        //计算距离矩阵
        for (int i = 0; i < citynumbers; i++) {
            for (int j = 0; j < citynumbers; j++) {
                distance[i][j] = Math.sqrt((x[i] - x[j]) * (x[i] - x[j]) + (y[i] - y[j]) * (y[i] - y[j]));//计算欧式距离
                System.out.print(distance[i][j] + "\t");
            }
            System.out.println();
        }
        int h = (int) Math.pow(2, citynumbers - 1);
        optimalvalue = new double[citynumbers][h];
        optimalchoice = new int[citynumbers][h];
    }

    public void solve() {
        double min = Double.MAX_VALUE;//确保会更新
        int mink = 0;
        //计算第一列地值
        for (int i = 0; i < citynumbers; i++) {
            optimalvalue[i][0] = distance[i][0];
            System.out.println(optimalvalue[i][0]);
        }
        for (int i = 1; i < (Math.pow(2, citynumbers - 1)); i++) {
            for (int j = 1; j < citynumbers; j++) {
                int k = 0;
                if (judge(i, j) == 0) { //确定j不包含在i代表的集合中
                    String a = test.binary(i, citynumbers - 1);
                    for (int w = a.length(); w > 0; w--) {
                        k = a.charAt(a.length() - w) - 48;//k为0或者1
                        if (k == 1) {
                            k = k * w;//此时的k为选择的集合中的某个值
                            double y = (distance[j][k] + optimalvalue[k][(int) (i - Math.pow(2, k - 1))]);
                            if (y < min) {
                                min = (distance[j][k] + optimalvalue[k][(int) (i - Math.pow(2, k - 1))]);
                                mink = k;
                            }
                        }
                    }
                    if (min < Double.MAX_VALUE) {//确定min是否变化，有变化再写入矩阵
                        System.out.println(i + "--" + j + "--" + optimalvalue[j][i] + "" + min);
                        optimalvalue[j][i] = min;
                        optimalchoice[j][i] = mink;
                        min = Double.MAX_VALUE;
                    }
                }
            }


        }
        min = Double.MAX_VALUE;//更新min
        int i = (int) (Math.pow(2, citynumbers - 1) - 1);//更新最后一列
        for (int k = citynumbers - 1; k > 0; k--) {
            double x = (distance[0][k] + optimalvalue[k][(int) (i - Math.pow(2, k - 1))]);
            if (x < min) {
                min = x;
                mink = k;
            }
        }
        optimalvalue[0][i] = min;
        optimalchoice[0][i] = mink;
        path = new int[citynumbers + 1];
        path[0] = 1;
        int c = 1;
        for (int j = 0; i > 0; ) {
            j = optimalchoice[j][i];
            i = (int) (i - Math.pow(2, j - 1));
            path[c++] = j + 1;
        }
        path[c++] = 1;
        for (i = 0; i < citynumbers; i++) {
            System.out.print(path[i] + " ");
            s = s + distance[path[i] - 1][path[i + 1] - 1];
        }
        System.out.println(1 + " ");
        System.out.println(s);
    }

    //判断j是否在i表示的集合中
    public int judge(int i, int j) {
        String a = test.binary(i, citynumbers - 1);
        int b = a.charAt(a.length() - j) - 48;
        return b;
    }
}

