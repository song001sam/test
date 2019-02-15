define(['echarts',
    'require',
    'bootstrap-slider'
], function (ec, require, bs) {
    var app = require('../app');

    app.controller('barController', function ($scope, $http, $uibModal) {
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
            $scope.targetCols = []
            $scope.KZX = 0;
        }
        $scope.initCols = function () {
            $http({
                url: "Txfx/bar/colNameAndComment/" + $scope.GW.code,
                method: "GET"

            }).then(function (res) {
                $scope.cols = []
                angular.forEach(res.data, function (value, key) {

                    $scope.cols.push({"key": key, "value": value});
                })


            }, function () {

            });
        }
        $scope.removeByValue = function (arr, val) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] === val) {
                    arr.splice(i, 1);
                    break;
                }
            }
        };
        $scope.dbl = function (col) {
            $scope.removeByValue($scope.cols, col);
            $scope.targetCols.push(col);
            $scope.targetCols.sort((x, y) = > x.sort - y.sort
        )
            ;
        }
        $scope.dbltarget = function (col) {
            $scope.removeByValue($scope.targetCols, col);
            $scope.cols.push(col);
            $scope.cols.sort((x, y) = > x.sort - y.sort
        )
            ;
        }
        $scope.echartsshow = function () {
            if ($scope.targetCols.length != 1) {
                $uibModal.open({
                    animation: true,
                    size: "sm",
                    template: "<div class=\"modal-dialog\">请选择唯一一个变量</div>"
                });
                return;
            }
            $http({
                url: "Txfx/bar/echartsshow/",
                method: "POST",
                data: {targetCols: $scope.targetCols, tableName: $scope.GW.code, stepCount: $scope.stepCount}
            }).then(function (res) {
                $scope.data = res.data;
                $scope.xAxisList = [];
                $scope.yAxisList = [];
                angular.forEach($scope.data, function (item, n) {
                    $scope.xAxisList.push(item.xAxis);
                    $scope.yAxisList.push(item.yAxis);
                });
                console.info($scope.echarts1);
                if (!$scope.echarts1) {
                    $scope.echarts1 = ec.init(document.getElementById('echarts1'));
                }
                var option = {

                    color: ['#3398DB'],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: $scope.xAxisList,
                            axisLabel: {
                                interval: 0,
                                rotate: 40
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: $scope.targetCols[0].value,
                            type: 'bar',
                            barWidth: '60%',
                            data: $scope.yAxisList,


                        }
                    ]

                };
                if ($scope.KZX != 0) {
                    option.series[0].markLine = {
                        symbol: "none",               //去掉警戒线最后面的箭头
                        label: {
                            position: "start"          //将警示值放在哪个位置，三个值“start”,"middle","end"  开始  中点 结束
                        },
                        data: [{
                            silent: false,             //鼠标悬停事件  true没有，false有
                            lineStyle: {               //警戒线的样式  ，虚实  颜色
                                type: "dashed",
                                color: "#FA3934"
                            },
                            yAxis: $scope.KZX           // 警戒线的标注值，可以有多个yAxis,多条警示线   或者采用   {type : 'average', name: '平均值'}，type值有  max  min  average，分为最大，最小，平均值
                        }]
                    }
                } else {

                }
                $scope.echarts1.setOption(option, true);

            }, function () {

            });
        }
    });

});
//