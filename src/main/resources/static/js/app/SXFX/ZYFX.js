define([
    'require',
    '../header/header',
    '../app',
    'angular'
], function (require, header, app, angular) {
    // var app = require('../app');
    // var angular = require('angular');
    app.controller('ZYFXController', function ($scope, $http, $uibModal) {
        $scope.init = function () {

            $scope.cols = [];
            $scope.inCols = [];
            $scope.outCols = [];
            $scope.data = {};
        }
        $scope.$on('GXChange', function (e, m) {
            $scope.GX = m;
            $http({
                url: "XSMX/colNameAndComment/" + m,
                method: "GET"

            }).then(function (res) {
                $scope.cols = [];
                let i = 0;
                angular.forEach(res.data, function (value, key) {
                    i++;
                    $scope.cols.push({"key": key, "value": value, "sort": i});
                })
            }, function () {

            });


        });
        $scope.$on('GZChange', function (e, m) {
            $scope.GZ = m;
        });
        //数组移除元素方法
        $scope.removeByValue = function (arr, val) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === val) {
                    arr.splice(i, 1);
                    break;
                }
            }
        };
        //选种方法，临时变量保存，前台自动增加类
        $scope.selectCol = function (col) {
            $scope.selectedCol = col;
        }
        //右侧输入选中，同上
        $scope.selectColRightIn = function (col) {
            $scope.selectedColRightIn = col;
        }
        //右侧输出选中，同上
        $scope.selectColRightOut = function (col) {
            $scope.selectedColRightOut = col;
        }
        //判断选中列方法
        $scope.chcekColSelected = function (col) {
            return col == $scope.selectedCol || col == $scope.selectedColRightIn || col == $scope.selectedColRightOut;
        }
        //增加输入字段方法
        $scope.addIn = function () {
            $scope.removeByValue($scope.cols, $scope.selectedCol);
            $scope.inCols.push($scope.selectedCol);
            $scope.inCols.sort((x, y) => x.sort - y.sort)
            $scope.selectedCol = undefined;
        }
        $scope.delIn = function () {
            $scope.removeByValue($scope.inCols, $scope.selectedColRightIn);
            $scope.cols.push($scope.selectedColRightIn);
            $scope.cols.sort((x, y) => x.sort - y.sort)
            $scope.selectedColRightIn = undefined;
        }
        $scope.show = function (flag) {
            $http({
                url: "XSMX/ZYFX",
                method: "post",
                data: {
                    tableName: $scope.GX,
                    colIn: $scope.inCols,
                    colOut: $scope.outCols,
                    BZH: flag,
                    GZ: $scope.GZ
                }
            }).then(function (res) {
                $scope.data = res.data;
                $scope.showTable = true;
            }, function (err) {
                //错误代码
            });
        }
    }).filter('numFormat', function () { //可以注入依赖
        return function (num, digits) {
            return num.toFixed(digits);
        }
    });
});
//