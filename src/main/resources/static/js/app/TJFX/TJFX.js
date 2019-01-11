define(['echarts',
    'require'
], function (ec, require) {
    var app = require('../app');
    app.controller('TJFXController', function ($scope, $http) {
        $scope.totalItems = 64;
        $scope.currentPage = 1;
        $scope.isshow = false;
        $scope.isshowcharts = false
        $scope.select1 = "C";
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

        $scope.status = {
            isopen: false
        };
        $scope.loadData = function () {
            $scope.isshow = true;
            $scope.isshowcharts = false;
        };
        $scope.clickChange = function () {
            $scope.isshow = !$scope.isshow
            $scope.isshowcharts = !$scope.isshowcharts
        };
        // var data = [];
        // for (var i = 1; i <= 30; i++) {
        //     data.push(Math.ceil(Math.random()*300)+1);
        // }
        $scope.selectChange = function () {
            if (!echarts2) {
                return;
            }
            var option = echarts2.getOption();
            option.series[0].data = [{
                value: 661,
                name: '<0.17'
            }, {
                value: 10150,
                name: '0.17~0.37'
            }, {
                value: 3138,
                name: '>0.37'
            }];
            option.series[1].data = [{
                value: 661,
                name: '<0.17'
            }, {
                value: 10150,
                name: '0.17~0.37'
            }, {
                value: 3138,
                name: '>0.37'
            }]
            option.legend = {
                orient: 'horizontal',
                bottom: '0%',
                data: ['<0.17', '0.17~0.37', '>0.37']
            }
            echarts2.setOption(option);
        }
        ec.init(document.getElementById('echarts1')).setOption({

            yAxis: {
                type: 'value',
            },
            xAxis: {
                type: 'category',
                data: function () {
                    var list = [];
                    for (var i = 1; i <= 30; i++) {
                        list.push('11月' + i + '日');
                    }
                    return list;
                }()
            },
            series: {
                type: 'bar',
                data: function () {
                    var list = [];
                    for (var i = 1; i <= 30; i++) {
                        list.push(Math.ceil(Math.random() * 300) + 1);
                    }
                    return list;
                }(),
                itemStyle: {
                    normal: {
                        //颜色渐变
                        color: new ec.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#5A91E1'
                        }, {
                            offset: 1,
                            color: '#5DB6F3'
                        }])
                    }
                }
            }

        });
        var echarts2 = ec.init(document.getElementById('echarts2'));
        echarts2.setOption({
            backgroundColor: '#fff',

            tooltip: {
                show: true,
                trigger: 'item',
                formatter: "{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'horizontal',
                bottom: '0%',
                data: ['<0.42', '0.42~0.5', '>0.5']
            },
            series: [{
                type: 'pie',
                selectedMode: 'single',
                radius: ['25%', '58%'],
                color: ['#86D560', '#AF89D6', '#59ADF3'],

                label: {
                    normal: {
                        position: 'inner',
                        formatter: '{d}%',

                        textStyle: {
                            color: '#fff',
                            fontWeight: 'bold',
                            fontSize: 10
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [{
                    value: 1661,
                    name: '<0.42'
                }, {
                    value: 9913,
                    name: '0.42~0.5'
                }, {
                    value: 1138,
                    name: '>0.5'
                }]
            }, {
                type: 'pie',
                radius: ['58%', '83%'],
                itemStyle: {
                    normal: {
                        color: '#F2F2F2'
                    },
                    emphasis: {
                        color: '#ADADAD'
                    }
                },
                label: {
                    normal: {
                        position: 'inner',
                        formatter: '{c}',
                        textStyle: {
                            color: '#777777',
                            fontWeight: 'bold',
                            fontSize: 10
                        }
                    }
                },
                data: [{
                    value: 1661,
                    name: '<0.42'
                }, {
                    value: 9913,
                    name: '0.42~0.5'
                }, {
                    value: 1138,
                    name: '>0.5'
                }]
            }]
        });

        ec.init(document.getElementById('echarts3')).setOption({


            tooltip: {
                trigger: 'item',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '20%',
                right: '15%'
            },
            xAxis: {
                type: 'category',
                data: ['C', 'Si', 'Mn', 'P', 'S', 'Cr', 'Ni', 'Cu'],

                nameTextStyle: {
                    color: '#3259B8',
                    fontSize: 8,

                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    lineStyle: {
                        color: '#3259B8',
                    }
                },
                splitLine: {
                    show: false
                }
            },

            yAxis: {
                type: 'value',

                nameTextStyle: {
                    color: '#3259B8',
                    fontSize: 10,
                },
                axisLabel: {
                    formatter: '{value}'
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    lineStyle: {
                        color: '#3259B8',
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#A7BAFA',
                    },
                },
                max: 1,
                min: 0
            },
            series: [{
                name: 'boxplot',
                type: 'boxplot',
                data: [
                    [0.42,
                        0.435,
                        0.461,
                        0.481,
                        0.5],
                    [0.17,
                        0.21,
                        0.25,
                        0.34,
                        0.37],
                    [0.5,
                        0.53,
                        0.69,
                        0.78,
                        0.8],
                    [0,
                        0.003,
                        0.012,
                        0.015,
                        0.035,],
                    [0,
                        0.003,
                        0.012,
                        0.015,
                        0.035,],
                    [0,
                        0.03,
                        0.12,
                        0.15,
                        0.25,],
                    [0,
                        0.03,
                        0.18,
                        0.24,
                        0.3,],
                    [0,
                        0.04,
                        0.1,
                        0.14,
                        0.2,]

                ],
                itemStyle: {
                    normal: {
                        borderColor: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#F02FC2' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#3EACE5' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        },
                        borderWidth: 2,
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(240,47,194,0.7)'  // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'rgba(62,172,299,0.7)' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        },
                    }
                }
            },

            ]
        });
        ec.init(document.getElementById('echarts4')).setOption({
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['C', 'Si', 'Mn', 'P', 'S', 'Cr', 'Ni', 'Cu', '屈服强度']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: function () {
                    var list = [];
                    for (var i = 1; i < 1300; i++) {
                        list.push(i);
                    }
                    return list;
                }()
            },
            yAxis: [{
                type: 'value',
                name: '百分比',
                // min:'0'
                // max:
                axisLabel: {
                    formatter: '{value} %'
                }

            }, {
                type: 'value',
                name: '强度',
                axisLabel: {
                    formatter: '{value} MPa'
                }
            }],
            series: [
                {
                    name: 'C',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: false,
                            position: 'insideRight'
                        }
                    },
                    data: function () {
                        var list = [];
                        for (var i = 1; i < 1300; i++) {
                            list.push(Math.random() * 0.4);
                        }
                        return list;
                    }()
                },
                {
                    name: 'Si',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: false,
                            position: 'insideRight'
                        }
                    },
                    data: function () {
                        var list = [];
                        for (var i = 1; i < 1300; i++) {
                            list.push(Math.random() * 0.4);
                        }
                        return list;
                    }()
                },
                {
                    name: 'Mn',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: false,
                            position: 'insideRight'
                        }
                    },
                    data: function () {
                        var list = [];
                        for (var i = 1; i < 1300; i++) {
                            list.push(Math.random() * 0.4);
                        }
                        return list;
                    }()
                },
                {
                    name: 'P',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: false,
                            position: 'insideRight'
                        }
                    },
                    data: function () {
                        var list = [];
                        for (var i = 1; i < 1300; i++) {
                            list.push(Math.random() * 0.4);
                        }
                        return list;
                    }()
                },
                {
                    name: 'S',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: false,
                            position: 'insideRight'
                        }
                    },
                    data: function () {
                        var list = [];
                        for (var i = 1; i < 1300; i++) {
                            list.push(Math.random() * 0.4);
                        }
                        return list;
                    }()
                },
                {
                    name: 'Cr',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: false,
                            position: 'insideRight'
                        }
                    },
                    data: function () {
                        var list = [];
                        for (var i = 1; i < 1300; i++) {
                            list.push(Math.random() * 0.4);
                        }
                        return list;
                    }()
                }
                ,
                {
                    name: 'Ni',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: false,
                            position: 'insideRight'
                        }
                    },
                    data: function () {
                        var list = [];
                        for (var i = 1; i < 1300; i++) {
                            list.push(Math.random() * 0.4);
                        }
                        return list;
                    }()
                }
                ,
                {
                    name: 'Cu',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: false,
                            position: 'insideRight'
                        }
                    },
                    data: function () {
                        var list = [];
                        for (var i = 1; i < 1300; i++) {
                            list.push(Math.random() * 0.4);
                        }
                        return list;
                    }()
                },
                {
                    name: '屈服强度',
                    type: 'line',
                    yAxisIndex: 1,
                    label: {
                        normal: {
                            show: false,
                            position: 'insideRight'
                        }
                    },
                    data: function () {
                        var list = [];
                        for (var i = 1; i < 1300; i++) {
                            list.push(Math.ceil(Math.random() * 50) + 350);
                        }
                        return list;
                    }()
                }
            ],
            dataZoom: [
                {
                    type: 'slider',
                    show: true,
                    start: 94,
                    end: 100,
                    handleSize: 8,
                    maxValueSpan: 200
                },
                {
                    type: 'inside',
                    start: 94,
                    end: 100
                }
            ]
        });
    });

});
//