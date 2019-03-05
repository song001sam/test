define(['echarts',
    'dataTool',
    'require',
    'bootstrap-slider',
    '../header/header'
], function (ec, dt, require, bs) {
    var app = require('../app');

    app.controller('boxplotController', function ($scope, $http, $uibModal) {
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
            $scope.removeByArr($scope.upCols, $scope.cols);
            $scope.upCols = [];
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
            if ($scope.upCols.length < 1) {
                $uibModal.open({
                    animation: true,
                    size: "sm",
                    template: "<div class=\"modal-dialog\">请选择唯一一个变量</div>"
                });
                return;
            }
            $http({
                url: "Txfx/boxplot/echartsData/",
                method: "POST",
                data: {upCols: $scope.upCols, downCols: $scope.downCols, tableName: $scope.GX, GZ: $scope.GZ}
            }).then(function (res) {
                $scope.data = res.data;
                $scope.xAxisList = [];
                $scope.yAxisList = [];
                /*angular.forEach($scope.data, function (item, n) {
                    $scope.xAxisList.push(item.xAxis);
                    $scope.yAxisList.push(dt.prepareBoxplotData(item.yAxis));
                });*/
                $scope.xAxisList = $scope.data.xAxis;
                $scope.yAxisList = dt.prepareBoxplotData($scope.data.yAxis);
                //console.info($scope.yAxisList.axisData);
                //console.info($scope.xAxisList);
                /*console.info($scope.echarts1);*/
                if (!$scope.echarts1) {
                    $scope.echarts1 = ec.init(document.getElementById('echarts1'));
                }
                var
                    option = {
                        title: [
                            {
                                text: ' ',
                                left: 'center',
                            },
                            {
                                text: '上边缘: 上四分位数 + 1.5 * IQR \n下边缘: 下四分位数 - 1.5 * IQR',
                                borderColor: '#999',
                                borderWidth: 1,
                                textStyle: {
                                    fontSize: 14
                                },
                                left: '10%',
                                top: '90%'
                            }
                        ],
                        tooltip: {
                            trigger: 'item',
                            axisPointer: {
                                type: 'shadow'
                            }
                        },
                        toolbox: {
                            feature: {
                                dataView: {readOnly: false},
                                restore: {},
                                saveAsImage: {}
                            }
                        },
                        grid: {
                            left: '10%',
                            right: '10%',
                            bottom: '15%'
                        },
                        xAxis: {
                            type: 'category',
                            data: $scope.xAxisList,
                            boundaryGap: true,
                            nameGap: 30,
                            splitArea: {
                                show: true
                            },
                            axisLabel: {
                                formatter: $scope.downCols[0].value + '-{value}'
                            },
                            splitLine: {
                                show: false
                            }
                        },
                        yAxis: {
                            type: 'value',
                            //name: 'km/s minus 299,000',
                            splitArea: {
                                show: true
                            }
                        },
                        series: [
                            {
                                name: 'boxplot',
                                type: 'boxplot',
                                data: $scope.yAxisList.boxData,
                                tooltip: {
                                    formatter: function (param) {
                                        return [
                                            $scope.downCols[0].value + '- ' + param.name + ': ',
                                            '上边缘: ' + param.data[5].toFixed(2),
                                            '上四分位数: ' + param.data[4].toFixed(2),
                                            '中位数: ' + param.data[3].toFixed(2),
                                            '下四分位数: ' + param.data[2].toFixed(2),
                                            '下边缘: ' + param.data[1].toFixed(2)
                                        ].join('<br/>');
                                    }
                                }
                            },
                            {
                                name: '异常值',
                                type: 'scatter',
                                data: $scope.yAxisList.outliers
                            }
                        ]
                    };
                $scope.echarts1.setOption(option, true);

            }, function () {

            });
        }
    });

});
//