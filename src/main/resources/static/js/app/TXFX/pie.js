define(['echarts',
    'require',
    'bootstrap-slider',
    '../header/header'
], function (ec, require, bs) {
    var app = require('../app');

    app.controller('pieController', function ($scope, $http, $uibModal) {
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
            $scope.removeByArr($scope.targetCols, $scope.cols);
            $scope.targetCols = [];
            //添加
            $scope.removeByValue($scope.cols, $scope.focus);
            $scope.targetCols.push($scope.focus);
            $scope.targetCols.sort((x, y) => x.sort - y.sort);
            $scope.focus = undefined;
        }
        $scope.delUp = function () {
            if ($scope.focus == undefined) {
                return;
            }
            $scope.removeByValue($scope.targetCols, $scope.focus);
            $scope.addByValue($scope.cols, $scope.focus);
            $scope.cols.sort((x, y) => x.sort - y.sort);
            $scope.focus = undefined;
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
                data: {targetCols: $scope.targetCols, tableName: $scope.GX, stepCount: $scope.stepCount, GZ: $scope.GZ}
            }).then(function (res) {
                $scope.data = res.data;
                $scope.xAxisList = [];
                $scope.yAxisList = [];
                angular.forEach($scope.data, function (item, n) {
                    $scope.xAxisList.push(item.xAxis);
//                    $scope.yAxisList.push(item.yAxis);
                    $scope.yAxisList.push({value: item.yAxis, name: item.xAxis});
                });
                console.info($scope.echarts1);
                console.info($scope.yAxisList);
                if (!$scope.echarts1) {
                    $scope.echarts1 = ec.init(document.getElementById('echarts1'));
                }
                var option = {

                    /*title : {
                        text: '某站点用户访问来源',
                        subtext: '纯属虚构',
                        x:'center'
                    },*/
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    toolbox: {
                        feature: {
                            dataView: {readOnly: false},
                            restore: {},
                            saveAsImage: {}
                        }
                    },
                    legend: {
                        data: $scope.xAxisList
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '60%'],
                            data: $scope.yAxisList,
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]

                };
//                if ($scope.KZX != 0) {
//                    option.series[0].markLine = {
//                        symbol: "none",               //去掉警戒线最后面的箭头
//                        label: {
//                            position: "start"          //将警示值放在哪个位置，三个值“start”,"middle","end"  开始  中点 结束
//                        },
//                        data: [{
//                            silent: false,             //鼠标悬停事件  true没有，false有
//                            lineStyle: {               //警戒线的样式  ，虚实  颜色
//                                type: "dashed",
//                                color: "#FA3934"
//                            },
//                            yAxis: $scope.KZX           // 警戒线的标注值，可以有多个yAxis,多条警示线   或者采用   {type : 'average', name: '平均值'}，type值有  max  min  average，分为最大，最小，平均值
//                        }]
//                    }
//                } else {
//
//                }
                $scope.echarts1.setOption(option, true);

            }, function () {

            });
        }
    });

});
//