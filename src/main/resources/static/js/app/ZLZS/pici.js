define(['echarts',
    'require'
], function (ec, require) {
    var app = require('../app');
    //var angular = require('angular');
    app.controller('PICIController', function ($scope, $http, $uibModal) {
        $scope.BPOption = [
            {
                value: "strand_speed",
                code: "连铸-拉速"
            },
            {
                value: "mold_rate1_act",
                code: "连铸-结晶器振频1"
            },
            {
                value: "mold_rate2_act",
                code: "连铸-结晶器振频2"
            },
            {
                value: "mold_level_act",
                code: "连铸-结晶器液位"
            }
        ];

        var echarts = ec.init(document.getElementById('echarts'));


        // $scope.query = function(){
        //     if($scope.pici == ''){
        //         alert("请输入坯次信息");
        //     }else{
        //         $http({
        //             method: "post",
        //             url: "QCM/getStreamBySlabId",
        //             data: {
        //                 slabId:$scope.pici
        //             }
        //         }).then(function (response) {
        //             alert("success");
        //             $scope.liuhao = response.data.liuhao;
        //             $scope.BPOption = [
        //                 {
        //                     value: "strand_speed",
        //                     code: "连铸-" + response.data.liuhao + "流拉速"
        //                 },
        //                 {
        //                     value: "mold_rate1_act",
        //                     code: "连铸-" + response.data.liuhao + "流结晶器振频1"
        //                 },
        //                 {
        //                     value: "mold_rate2_act",
        //                     code: "连铸-" + response.data.liuhao + "流结晶器振频2"
        //                 },
        //                 {
        //                     value: "mold_level_act",
        //                     code: "连铸-" + response.data.liuhao + "流结晶器液位"
        //                 }
        //             ];
        //
        //         }, function (response) {
        //         });
        //     }
        // }

        $scope.queryBySlabId = function () {
            var echars_option = {
                title: {
                    text: '',
                    textStyle: {
                        fontSize: 14
                    },
                    left: 'center'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['']
                },
                grid: {
                    left: '10%',
                    bottom: '35%'
                },
                toolbox: {
                    show: true,
                    feature: {
                        dataZoom: {
                            yAxisIndex: 'none'
                        },
                        dataView: {readOnly: false},
                        magicType: {type: ['line', 'bar']},
                        restore: {},
                        saveAsImage: {}
                    }
                },
                xAxis: [{
                    type: 'category',
                    boundaryGap: false,
                    data: (function () {
                        var res = [];
                        return res;
                    })(),
                    axisLabel: {
                        // interval: 50,
                        rotate: 45,
                        margin: 4,
                    }

                }],
                yAxis: {
                    type: 'value',
                    /* min:min,
                    max:max, */
                    axisLabel: {
                        //formatter: '{value} °C'
                    }
                },
                dataZoom: [{
                    //startValue: '09:01:02'
                }, {
                    type: 'inside'
                }],

                series: [
                    {
                        name: '',
                        type: 'line',
                        data: (function () {
                            var res = [];
                            return res;
                        })(),

                        markPoint: {
                            data: [
                                {type: 'max', name: '最大值'},
                                {type: 'min', name: '最小值'}
                            ]
                        },
                        markLine: {
                            symbol: 'none',
                            data: [
                                {type: 'average', name: '平均值'}
                            ]
                        },
                        color: '#3333ff'
                    }
                ]
            };
            if ($scope.pici == '') {
                alert("请输入炉次号");
            } else if ($scope.banpi == '' || $scope.banpi == null) {
                alert("请选择查询条件");
            } else {
                var i = layer.load();
                $http({
                    method: "post",
                    url: "QCM/getEchartsBySlabIdNoStream",
                    data: {
                        slabId: $scope.pici,
                        banpi: $scope.banpi.value
                    }

                }).then(function (response) {
                    if (!response.data.error) {
                        echars_option.title.text = $scope.banpi.code;
                        $scope.x = response.data.instime.split(",");
                        $scope.y = response.data.secarg.split(",");
                        $scope.xx = echars_option.xAxis[0].data;
                        $scope.yy = echars_option.series[0].data;
                        angular.forEach($scope.x, function (i, j) {
                            $scope.xx.push(i);
                        });
                        angular.forEach($scope.y, function (i, j) {
                            $scope.yy.push(i);
                        });
                        layer.close(i);
                        echarts.setOption(echars_option);
                    } else {
                        layer.close(i);
                        alert("没有相关坯次号的信息")
                    }
                }, function (response) {
                    layer.close(i);
                });
            }
        }


    })
})