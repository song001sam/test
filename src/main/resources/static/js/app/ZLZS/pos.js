define(['echarts',
    'require'
], function (ec, require) {
    var app = require('../app');
    //var angular = require('angular');
    app.controller('POSController', function ($scope, $http, $uibModal) {
        var echarts = ec.init(document.getElementById('echarts'));
        Date.prototype.format = function (format) {
            var o = {
                "M+": this.getMonth() + 1, //month
                "d+": this.getDate(),    //day
                "h+": this.getHours(),   //hour
                "m+": this.getMinutes(), //minute
                "s+": this.getSeconds(), //second
                "q+": Math.floor((this.getMonth() + 3) / 3),  //quarter
                "S": this.getMilliseconds() //millisecond
            }
            if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
                (this.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o) if (new RegExp("(" + k + ")").test(format))
                format = format.replace(RegExp.$1,
                    RegExp.$1.length == 1 ? o[k] :
                        ("00" + o[k]).substr(("" + o[k]).length));
            return format;
        };
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
        // $scope.dateOptions = {
        //     minMode: ''
        // }
        // $scope.dt1 = new Date(new Date().setDate(1));
        // $scope.dt2 = new Date();

        $scope.showST = false;


        // console.info($scope.dt1.format("yyyy-MM-dd hh:mm:ss"));
        // console.info($scope.dt2.format("yyyy-MM-dd hh:mm:ss"));
        $scope.POSOption = [
            {
                value: "ccm1",
                code: "连铸1"
            },
            {
                value: "ccm2",
                code: "连铸2"
            },
            {
                value: "bof1",
                code: "转炉1"
            },
            {
                value: "bof2",
                code: "转炉2"
            },
            {
                value: "lf1",
                code: "LF1"
            },
            {
                value: "lf2",
                code: "LF2"
            },
            {
                value: "lf5",
                code: "LF5"
            },
            // {
            //     value: "rh1",
            //     code: "RH1"
            // }
        ];
        $scope.posChange = function () {
            if ($scope.pos == null) {
                console.info("kong");
                $scope.AOption = [];
                $scope.showST = false;
            } else if ($scope.pos.value == 'ccm1' || $scope.pos.value == 'ccm2') {
                console.info("ccm");
                $scope.AOption = [
                    {
                        value: 'STRAND_SPEED',
                        code: '拉速'
                    },
                    {
                        value: 'T_EMSF_ACT',
                        code: '结晶器电磁搅拌运行频率'
                    },
                    {
                        value: 'T_EMSA_ACT',
                        code: '结晶器电磁搅拌运行电流'
                    },
                    // {
                    //     value:'',
                    //     code:'振频'
                    // },
                    // {
                    //     value:'',
                    //     code:'振幅'
                    // },
                    {
                        value: 'STRAND_LENGTH',
                        code: '累计铸流长度'
                    },
                    // {
                    //     value:'',
                    //     code:'结晶器水量'
                    // }
                ]
                if ($scope.pos.value == 'ccm1') {
                    $scope.STOption = [
                        {
                            value: '1',
                            code: '1流'
                        },
                        {
                            value: '2',
                            code: '2流'
                        },
                        {
                            value: '3',
                            code: '3流'
                        },
                        {
                            value: '4',
                            code: '4流'
                        },
                        {
                            value: '5',
                            code: '5流'
                        },
                        {
                            value: '6',
                            code: '6流'
                        },
                        {
                            value: '7',
                            code: '7流'
                        }
                    ]
                } else {
                    $scope.STOption = [
                        {
                            value: '1',
                            code: '1流'
                        },
                        {
                            value: '2',
                            code: '2流'
                        },
                        {
                            value: '3',
                            code: '3流'
                        },
                        {
                            value: '4',
                            code: '4流'
                        },
                        {
                            value: '5',
                            code: '5流'
                        },
                        {
                            value: '6',
                            code: '6流'
                        },
                        {
                            value: '7',
                            code: '7流'
                        },
                        {
                            value: '8',
                            code: '8流'
                        }
                    ]
                }
                $scope.showST = true;
            } else if ($scope.pos.value == 'bof1' || $scope.pos.value == 'bof2') {
                console.info("bof");
                $scope.AOption = [
                    {
                        value: 'lance_height',
                        code: '氧枪高度'
                    },
                    {
                        value: 'bof_angle',
                        code: '转炉角度'
                    },
                    {
                        value: 'o2_flow',
                        code: '顶吹氧气流量'
                    }
                ];
                $scope.showST = false;
            } else if ($scope.pos.value == 'lf1' || $scope.pos.value == 'lf2' || $scope.pos.value == 'lf5') {
                console.info("lf");
                $scope.AOption = [
                    {
                        value: 'lf1ar1flow',
                        code: '1#钢包1#底吹AR流速'
                    },
                    {
                        value: 'lf1ar2flow',
                        code: '1#钢包2#底吹AR流速'
                    },
                    {
                        value: 'lfpritotengy',
                        code: '有功电度'
                    },
                    {
                        value: 'lfsectotengy',
                        code: '无功电度'
                    }
                ];
                $scope.showST = false;
            } else if ($scope.pos.value == 'rh1') {
                console.info("rh");
                $scope.AOption = [
                    {
                        value: '',
                        code: '真空罐压力'
                    },
                    {
                        value: '',
                        code: '真空环流'
                    },
                    {
                        value: '',
                        code: '钢水温度'
                    },
                    {
                        value: '',
                        code: '底搅拌气体消耗'
                    }
                ];
                $scope.showST = false;
            }
        }
        $scope.query = function () {
            if ($scope.pos == null) {
                alert("请选择工位");
            } else {
                if ($scope.pos.value == 'ccm1' || $scope.pos.value == 'ccm2') {
                    if ($scope.stream == null) {
                        alert("请选择流号");
                    } else if ($scope.a == null) {
                        alert("请选择项目");
                    } else if ($scope.dt1 == null || $scope.dt2 == null) {
                        if ($scope.dt1 == null) {
                            alert("请选择开始时间");
                        } else {
                            alert("请选择结束时间");
                        }
                    } else if ($scope.dt1 > $scope.dt2) {
                        alert("开始时间应小于结束时间");
                    } else {

                        $scope.data = {
                            pos: $scope.pos.value,
                            a: $scope.a.value,
                            stream: $scope.stream.value,
                            dt1: $scope.dt1,
                            dt2: $scope.dt2
                        }
                        $scope.search();
                    }
                } else {
                    if ($scope.a == null) {
                        alert("请选择项目");
                    } else if ($scope.dt1 == null || $scope.dt2 == null) {
                        if ($scope.dt1 == null) {
                            alert("请选择开始时间");
                        } else {
                            alert("请选择结束时间");
                        }
                    } else if ($scope.dt1 > $scope.dt2) {
                        alert("开始时间应小于结束时间");
                    } else {
                        // alert('success');
                        $scope.data = {
                            pos: $scope.pos.value,
                            a: $scope.a.value,
                            dt1: $scope.dt1,
                            dt2: $scope.dt2
                        }
                        $scope.search();

                    }

                }
            }
        }

        $scope.search = function () {
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
                        //interval: 50,
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
            var i = layer.load();
            $http({
                method: "post",
                url: "QCM/queryEchartsByPos",
                data: $scope.data

            }).then(function (response) {
                // console.info(response.data.wu);
                if (!response.data.wu) {
                    $scope.x = response.data.instime.split(",");
                    $scope.y = response.data.newarg.split(",");
                    $scope.xx = echars_option.xAxis[0].data;
                    $scope.yy = echars_option.series[0].data;
                    angular.forEach($scope.x, function (i, j) {
                        $scope.xx.push(i);

                    });
                    angular.forEach($scope.y, function (i, j) {
                        $scope.yy.push(i);

                    });
                    echarts.setOption(echars_option, true);
                    layer.close(i);
                } else {
                    layer.close(i);
                    alert("暂无信息");
                }

            }, function (response) {
                layer.close(i);
            });

        }
    })
})