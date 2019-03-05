define(['echarts',
    'require'
], function (ec, require) {
    var app = require('../app');
    //var angular = require('angular');
    app.controller('LUCIController', function ($scope, $http, $uibModal) {
        $scope.HHOption = [
            {value: "bof_lance_height", name: '转炉-氧枪高度'},
            {value: "bof_bof_angle", name: '转炉-转炉角度'},
            {value: "bof_o2_flow", name: '转炉-顶吹氧气流量'},
            {value: "lf_lf1ar1flow", name: 'LF-1#钢包1#底吹AR流速'},
            {value: "lf_lf1ar2flow", name: 'LF-1#钢包2#底吹AR流速'},
            {value: "lf_lfpritotengy", name: 'LF-有功电度'},
            {value: "lf_lfsectotengy", name: 'LF-无功电度'},
            {value: "ccm_tundish_weight", name: '连铸-中间罐净重t'},
            {value: "ccm_superheat", name: '连铸-过热度'}
        ];
        var echarts = ec.init(document.getElementById('echarts'));


        $scope.queryByHeatId = function () {
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
            if ($scope.luci == '') {
                alert("请输入炉次号");
            } else if ($scope.luhao == '' || $scope.luhao == null) {
                alert("请选择查询条件");
            } else {
                var i = layer.load();
                $http({
                    method: "post",
                    url: "QCM/getEchartsByHeatId",
                    data: {
                        heatId: $scope.luci,
                        arg: $scope.luhao.value
                    }
                }).then(function (response) {
                    if (!response.data.error) {
                        echars_option.title.text = $scope.luhao.name;
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
                        alert('没有相关炉号的信息');
                    }

                }, function (response) {
                    layer.close(i);
                });
            }
        }


    })
})