define(['echarts',
    'require'
], function (ec, require, bs) {
    var app = require('../app');
    var angular = require('angular');
    app.controller('FCFXController', function ($scope, $http, $uibModal) {
        $scope.init = function () {
            $scope.open2 = function () {
                $scope.popup2.opened = true;
            };
            $scope.open1 = function () {
                $scope.popup1.opened = true;
            };
            $scope.popup1 = {
                opened: false
            };

            $scope.popup2 = {
                opened: false
            };
            $scope.GWList = [
                {code: "AI_LG_LD_ORC", value: "转炉"},
                {code: "AI_LG_LF_ORC", value: "LF"},
                {code: "AI_LG_RH_ORC", value: "RH"}
            ]
            $scope.cols = [];
            $scope.inCols = [];
            $scope.data = {};
            $scope.pValue = 0.05;
        }
        $scope.format = function (num) {
            return num.toFixed(4);
        }
        //初始化下拉框
        $scope.initCols = function () {
            $http({
                url: "XSMX/colNameAndComment/" + $scope.GW.code,
                method: "GET"

            }).then(function (res) {
                $scope.cols = []
                let i = 0;
                angular.forEach(res.data, function (value, key) {
                    i++;//增加排序字段
                    $scope.cols.push({"key": key, "value": value, sort: i});
                })


            }, function () {

            });
        }
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
        //判断选中列方法
        $scope.chcekColSelected = function (col) {
            return col == $scope.selectedCol;
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

        $scope.show = function () {
            $http({
                url: "XSMX/XGXFX",
                method: "post",
                data: {
                    tableName: $scope.GW.code,
                    colIn: $scope.inCols,
                    colOut: $scope.outCols
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