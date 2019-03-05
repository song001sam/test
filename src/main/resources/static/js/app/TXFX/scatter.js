define(['echarts',
    'require',
    'bootstrap-slider',
    '../header/header'
], function (ec, require, bs) {
    var app = require('../app');

    app.controller('scatterController', function ($scope, $http, $uibModal) {
        var angular = require('angular');
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
                {code: "AI_LG_RH_ORC", value: "RH"},
                {code: "LG_BQC_CHEM_ALL_20190221", value: "123"},
                {code: "LG_BQC_CHEM_ALL_20190221_45", value: "456"},
                {code: "lg_bqc_chem_all_20190221_40cr", value: "qwe"}
            ]
            $scope.cols = []
            $scope.upCols = []
            $scope.downCols = []
            $scope.optData = []
            $scope.optTitle = []
        }
        $scope.$on('GXChange', function (e, m) {
            console.info(e)
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
            $scope.GZ = m
        });
        $scope.chkTr = function (col) {
            $scope.focus = col;
        }
        $scope.chkCol = function (col) {
            return col == $scope.focus;
        }
        $scope.removeByArr = function (arr, targetArr) {
            for (var i = 0; i < arr.length; i++) {
                targetArr.push(arr[i]);
            }
            targetArr.sort((x, y) => x.sort - y.sort);
        };
        $scope.removeByValue = function (arr, val) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] === val) {
                    arr.splice(i, 1);
                    break;
                }
            }
        };
        $scope.addByValue = function (arr, val) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] === val) {
                    return;
                }
            }
            arr.push(val);
        };
        $scope.addUp = function () {
            if ($scope.focus == undefined) {
                return;
            }
            //先要将之前选择的覆盖掉
            //$scope.removeByArr($scope.upCols,$scope.cols);
            //$scope.upCols=[];
            //添加
            $scope.removeByValue($scope.cols, $scope.focus);
            $scope.upCols.push($scope.focus);
            $scope.upCols.sort((x, y) => x.sort - y.sort);
            $scope.focus = undefined;
        }
        $scope.delUp = function () {
            if ($scope.focus == undefined) {
                return;
            }
            $scope.removeByValue($scope.upCols, $scope.focus);
            $scope.addByValue($scope.cols, $scope.focus);
            $scope.cols.sort((x, y) => x.sort - y.sort);
            $scope.focus = undefined;
        }
        $scope.addDown = function () {
            if ($scope.focus == undefined) {
                return;
            }
            //先要将之前选择的覆盖掉
            $scope.removeByArr($scope.downCols, $scope.cols);
            $scope.downCols = [];
            //添加
            $scope.removeByValue($scope.cols, $scope.focus);
            $scope.addByValue($scope.downCols, $scope.focus);
            //$scope.downCols.push($scope.focus);
            $scope.downCols.sort((x, y) => x.sort - y.sort);
            $scope.focus = undefined;
        }
        $scope.delDown = function () {
            if ($scope.focus == undefined) {
                return;
            }
            $scope.removeByValue($scope.downCols, $scope.focus);
            $scope.addByValue($scope.cols, $scope.focus);
            $scope.cols.sort((x, y) => x.sort - y.sort);
            $scope.focus = undefined;
        }
        $scope.echartsshow = function () {
            if ($scope.downCols.length != 1) {
                $uibModal.open({
                    animation: true,
                    size: "sm",
                    template: "<div class=\"modal-dialog\">X轴请选择唯一一个变量</div>"
                });
                return;
            }
            if ($scope.upCols.length < 1) {
                $uibModal.open({
                    animation: true,
                    size: "sm",
                    template: "<div class=\"modal-dialog\">Y轴请选择个变量</div>"
                });
                return;
            }
            $http({
                url: "Txfx/scatter/echartsshow/",
                method: "POST",
                data: {tableName: $scope.GX, XCol: $scope.downCols, YCols: $scope.upCols, GZ: $scope.GZ}
            }).then(function (res) {
                $scope.data = res.data;
                $scope.optData = [];
                $scope.optTitle = [];
                angular.forEach($scope.upCols, function (item, n) {
                    $scope.optTitle.push(item.value);
                    $scope.optData.push({name: item.value, type: 'scatter', data: $scope.data[item.key]});
                });

                console.info($scope.optData);

                if (!$scope.echarts1) {
                    $scope.echarts1 = ec.init(document.getElementById('echarts1'));
                }
                var option = {

                    grid: {
                        left: '3%',
                        right: '7%',
                        bottom: '3%',
                        containLabel: true
                    },
                    tooltip: {
                        showDelay: 0,
                        formatter: function (params) {
                            if (params.value.length > 1) {
                                return params.seriesName + ' :<br/>'
                                    + params.value[0] + '<br/>'
                                    + params.value[1];
                            } else {
                                return params.seriesName + ' :<br/>'
                                    + params.name + '<br/>'
                                    + params.value;
                            }
                        },
                        axisPointer: {
                            show: true,
                            type: 'cross',
                            lineStyle: {
                                type: 'dashed',
                                width: 1
                            }
                        }
                    },
                    toolbox: {
                        feature: {
                            dataView: {readOnly: false},
                            restore: {},
                            saveAsImage: {}
                        }
                    },
                    legend: {
                        data: $scope.optTitle,
                        left: 'center'
                    },
                    xAxis: [
                        {
                            type: 'value',
                            scale: true,
                            axisLabel: {
                                formatter: '{value}'
                            },
                            splitLine: {
                                show: false
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            scale: true,
                            axisLabel: {
                                formatter: '{value}'
                            },
                            splitLine: {
                                show: false
                            }
                        }
                    ],
                    series: $scope.optData

                };

                $scope.echarts1.setOption(option, true);

            }, function () {

            });
        }
    });

});
//