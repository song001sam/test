define(['echarts',
    'require',
    './header',
    '../app',
    'angular'
], function (ec, require, header, app, angular) {
    // var app = require('../app');
    // var angular = require('angular');
    app.controller('XGXFXController', function ($scope, $http, $uibModal) {
        $scope.init = function () {

            $scope.cols = [];
            $scope.inCols = [];
            $scope.outCols = [];
            $scope.data = {};
        }
        $scope.$on('initCols', function (e, m) {
            let i = 0;
            angular.forEach(m, function (value, key) {
                $scope.cols.push({"key": key, "value": value});
            })
            $scope.cols.sort((x, y) => x.key.localeCompare(y.key));
            angular.forEach($scope.cols, function (n, o) {
                i++;
                n.sort = i;
            })
        })
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
            return col == $scope.selectedCol;
        }
        //增加输入字段方法
        $scope.addIn = function () {
            $scope.removeByValue($scope.cols, $scope.selectedCol);
            $scope.inCols.push($scope.selectedCol);
            $scope.inCols.sort((x, y) => x.sort - y.sort)
            $scope.selectedCol = undefined;
        }
        $scope.addOut = function () {
            $scope.removeByValue($scope.cols, $scope.selectedCol);
            $scope.outCols.push($scope.selectedCol);
            $scope.outCols.sort((x, y) => x.sort - y.sort)
            $scope.selectedCol = undefined;
        }
        $scope.delIn = function () {
            $scope.removeByValue($scope.inCols, $scope.selectedColRightIn);
            $scope.cols.push($scope.selectedColRightIn);
            $scope.cols.sort((x, y) => x.sort - y.sort)
            $scope.selectedColRightIn = undefined;
        }
        $scope.delOut = function () {
            $scope.removeByValue($scope.outCols, $scope.selectedColRightOut);
            $scope.cols.push($scope.selectedColRightOut);
            $scope.cols.sort((x, y) => x.sort - y.sort)
            $scope.selectedColRightOut = undefined;
        }
        $scope.show = function () {
            $http({
                url: "XSMX/XGXFX",
                method: "post",
                data: {
                    tableName: $scope.GX.code,
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