define(['echarts',
    'require',
    'bootstrap-slider',
    '../header/header'
], function (ec, require, bs) {
    var app = require('../app');

    app.controller('lineController', function ($scope, $http, $uibModal) {
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
                {code: "AI_LG_RH_ORC", value: "RH"}
            ]
            $scope.cols = []
            $scope.upCols = []
            $scope.downCols = []
            $scope.YData = []
            $scope.XData = []
            $scope.optTitle = []
            $scope.KZX1 = 0;
            $scope.KZX2 = 0;
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
                url: "Txfx/line/echartsshow/",
                method: "POST",
                data: {tableName: $scope.GX, XCol: $scope.downCols, YCols: $scope.upCols, GZ: $scope.GZ}
            }).then(function (res) {
                $scope.data = res.data;
                $scope.YData = [];
                $scope.optTitle = [];
                angular.forEach($scope.upCols, function (item, n) {
                    $scope.optTitle.push(item.value);
                    $scope.YData.push({name: item.value, type: 'line', smooth: true, data: $scope.data[item.key]});
                });
                $scope.XData = $scope.data.xData;

                if (!$scope.echarts1) {
                    $scope.echarts1 = ec.init(document.getElementById('echarts1'));
                }
                var option = {

                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: $scope.optTitle
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {
                            dataView: {readOnly: false},
                            restore: {},
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: $scope.XData
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: $scope.YData
                };

                if ($scope.KZX1 != 0) {
                    option.series[0].markLine = {
                        symbol: "none",               //去掉警戒线最后面的箭头
                        label: {
                            position: "start"          //将警示值放在哪个位置，三个值“start”,"middle","end"  开始  中点 结束
                        },
                        data: [
                            {
                                silent: false,             //鼠标悬停事件  true没有，false有
                                lineStyle: {               //警戒线的样式  ，虚实  颜色
                                    type: "dashed",
                                    color: "#FA3934"
                                },
                                yAxis: $scope.KZX1           // 警戒线的标注值，可以有多个yAxis,多条警示线   或者采用   {type : 'average', name: '平均值'}，type值有  max  min  average，分为最大，最小，平均值
                            },
                            {
                                silent: false,             //鼠标悬停事件  true没有，false有
                                lineStyle: {               //警戒线的样式  ，虚实  颜色
                                    type: "dashed",
                                    color: "#FA3934"
                                },
                                yAxis: $scope.KZX2           // 警戒线的标注值，可以有多个yAxis,多条警示线   或者采用   {type : 'average', name: '平均值'}，type值有  max  min  average，分为最大，最小，平均值
                            }
                        ]
                    }
                }

                $scope.echarts1.setOption(option, true);

            }, function () {

            });
        }
    });

});
//