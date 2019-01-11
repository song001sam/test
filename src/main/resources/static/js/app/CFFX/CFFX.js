define(['echarts',
    'require',
    'bootstrap-slider'
], function (ec, require, bs) {
    var app = require('../app');
    app.controller('CFFXController', function ($scope, $http) {
        $scope.input1 = 0.5;
        $scope.input2 = 0.37;
        $scope.input3 = 0.8;
        $scope.input4 = 0.035;
        $scope.input5 = 0.035;
        $scope.input6 = 0.25;
        $scope.input7 = 0.3;
        $scope.input8 = 0.2;
        var echarts1 = ec.init(document.getElementById('echartsMain'))
        echarts1.setOption({
            backgroundColor: '#1b1b1b',
            tooltip: {
                formatter: "{a} <br/>{b} : {c}"
            },

            series: [
                {
                    name: 'C含量',
                    type: 'gauge',
                    center: ['10%', '30%'],
                    radius: '30%',
                    min: 0,
                    max: 1,
                    splitNumber: 10,
                    data: [{value: $scope.input1, name: 'C'}],
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: [[0.42, '#ff4500'], [0.50, 'lime'], [1, '#ff4500']],
                            width: 3,
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisLabel: {// 坐标轴小标记
                        distance: -33,
                        textStyle: {       // 属性lineStyle控制线条样式
                            fontWeight: 'normal',
                            color: 'auto',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        length: 7,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        },
                        splitNumber: 10
                    },
                    splitLine: {           // 分隔线
                        length: 15,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            width: 3,
                            color: 'auto',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    pointer: {
                        length: '70%',
                        width: '4',          // 分隔线
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 5
                    },
                    detail: {
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: '5',
                            color: 'auto',
                            fontSize: '12'
                        }
                    },
                    title: {
                        offsetCenter: [0, '100%'],
                        textStyle: {
                            color: '#fff',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    }
                },
                {
                    name: 'Si含量',
                    type: 'gauge',
                    min: 0,
                    max: 1,
                    center: ['25%', '30%'],
                    radius: '30%',
                    splitNumber: 10,
                    data: [{value: $scope.input2, name: 'Si'}],
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: [[0.17, '#ff4500'], [0.37, 'lime'], [1, '#ff4500']],
                            width: 3,
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisLabel: {// 坐标轴小标记
                        distance: -33,
                        textStyle: {       // 属性lineStyle控制线条样式
                            fontWeight: 'normal',
                            color: 'auto',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        length: 7,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        },
                        splitNumber: 10
                    },
                    splitLine: {           // 分隔线
                        length: 15,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            width: 3,
                            color: 'auto',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    pointer: {
                        length: '70%',
                        width: '4',          // 分隔线
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 5
                    },
                    detail: {
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: '5',
                            color: 'auto',
                            fontSize: '12'
                        }
                    }, title: {
                        offsetCenter: [0, '100%'],
                        textStyle: {
                            color: '#fff',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    }
                },
                {
                    name: 'Mn含量',
                    type: 'gauge',
                    min: 0,
                    max: 1,
                    center: ['40%', '30%'],
                    radius: '30%',
                    splitNumber: 10,
                    data: [{value: $scope.input3, name: 'Mn'}],
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: [[0.5, '#ff4500'], [0.8, 'lime'], [1, '#ff4500']],
                            width: 3,
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisLabel: {// 坐标轴小标记
                        distance: -33,
                        textStyle: {       // 属性lineStyle控制线条样式
                            fontWeight: 'normal',
                            color: 'auto',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        length: 7,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        },
                        splitNumber: 10
                    },
                    splitLine: {           // 分隔线
                        length: 15,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            width: 3,
                            color: 'auto',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    pointer: {
                        length: '70%',
                        width: '4',          // 分隔线
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 5
                    },
                    detail: {
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: '5',
                            color: 'auto',
                            fontSize: '12'
                        }
                    }, title: {
                        offsetCenter: [0, '100%'],
                        textStyle: {
                            color: '#fff',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    }
                },
                {
                    name: 'P含量',
                    type: 'gauge',
                    min: 0,
                    max: 1,
                    center: ['55%', '30%'],
                    radius: '30%',
                    splitNumber: 10,
                    data: [{value: $scope.input4, name: 'P'}],
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: [[0.035, 'lime'], [1, '#ff4500']],
                            width: 3,
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisLabel: {// 坐标轴小标记
                        distance: -33,
                        textStyle: {       // 属性lineStyle控制线条样式
                            fontWeight: 'normal',
                            color: 'auto',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        length: 7,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        },
                        splitNumber: 10
                    },
                    splitLine: {           // 分隔线
                        length: 15,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            width: 3,
                            color: 'auto',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    pointer: {
                        length: '70%',
                        width: '4',          // 分隔线
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 5
                    },
                    detail: {
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: '5',
                            color: 'auto',
                            fontSize: '12'
                        }
                    },
                    title: {
                        offsetCenter: [0, '100%'],
                        textStyle: {
                            color: '#fff',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    }
                },
                {
                    name: 'S含量',
                    type: 'gauge',
                    min: 0,
                    max: 1,
                    center: ['10%', '80%'],
                    radius: '30%',
                    splitNumber: 10,
                    data: [{value: $scope.input5, name: 'S'}],
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: [[0.035, 'lime'], [1, '#ff4500']],
                            width: 3,
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisLabel: {// 坐标轴小标记
                        distance: -33,
                        textStyle: {       // 属性lineStyle控制线条样式
                            fontWeight: 'normal',
                            color: 'auto',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        length: 7,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        },
                        splitNumber: 10
                    },
                    splitLine: {           // 分隔线
                        length: 15,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            width: 3,
                            color: 'auto',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    pointer: {
                        length: '70%',
                        width: '4',          // 分隔线
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 5
                    },
                    detail: {
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: '5',
                            color: 'auto',
                            fontSize: '12'
                        }
                    },
                    title: {
                        offsetCenter: [0, '100%'],
                        textStyle: {
                            color: '#fff',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    }
                },
                {
                    name: 'Cr含量',
                    type: 'gauge',
                    min: 0,
                    max: 1,
                    center: ['25%', '80%'],
                    radius: '30%',
                    splitNumber: 10,
                    data: [{value: $scope.input6, name: 'P'}],
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: [[0.25, 'lime'], [1, '#ff4500']],
                            width: 3,
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisLabel: {// 坐标轴小标记
                        distance: -33,
                        textStyle: {       // 属性lineStyle控制线条样式
                            fontWeight: 'normal',
                            color: 'auto',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        length: 7,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        },
                        splitNumber: 10
                    },
                    splitLine: {           // 分隔线
                        length: 15,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            width: 3,
                            color: 'auto',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    pointer: {
                        length: '70%',
                        width: '4',          // 分隔线
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 5
                    },
                    detail: {
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: '5',
                            color: 'auto',
                            fontSize: '12'
                        }
                    },
                    title: {
                        offsetCenter: [0, '100%'],
                        textStyle: {
                            color: '#fff',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    }
                },
                {
                    name: 'Ni含量',
                    type: 'gauge',
                    min: 0,
                    max: 1,
                    center: ['40%', '80%'],
                    radius: '30%',
                    splitNumber: 10,
                    data: [{value: $scope.input7, name: 'Ni'}],
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: [[0.3, 'lime'], [1, '#ff4500']],
                            width: 3,
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisLabel: {// 坐标轴小标记
                        distance: -33,
                        textStyle: {       // 属性lineStyle控制线条样式
                            fontWeight: 'normal',
                            color: 'auto',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        length: 7,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        },
                        splitNumber: 10
                    },
                    splitLine: {           // 分隔线
                        length: 15,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            width: 3,
                            color: 'auto',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    pointer: {
                        length: '70%',
                        width: '4',          // 分隔线
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 5
                    },
                    detail: {
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: '5',
                            color: 'auto',
                            fontSize: '12'
                        }
                    },
                    title: {
                        offsetCenter: [0, '100%'],
                        textStyle: {
                            color: '#fff',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    }
                },
                {
                    name: 'Cu含量',
                    type: 'gauge',
                    min: 0,
                    max: 1,
                    center: ['55%', '80%'],
                    radius: '30%',
                    splitNumber: 10,
                    data: [{value: $scope.input8, name: 'Cu'}],
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: [[0.2, 'lime'], [1, '#ff4500']],
                            width: 3,
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisLabel: {// 坐标轴小标记
                        distance: -33,
                        textStyle: {       // 属性lineStyle控制线条样式
                            fontWeight: 'normal',
                            color: 'auto',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        length: 7,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        },
                        splitNumber: 10
                    },
                    splitLine: {           // 分隔线
                        length: 15,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            width: 3,
                            color: 'auto',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    pointer: {
                        length: '70%',
                        width: '4',          // 分隔线
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 5
                    },
                    detail: {
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: '5',
                            color: 'auto',
                            fontSize: '12'
                        }
                    },
                    title: {
                        offsetCenter: [0, '100%'],
                        textStyle: {
                            color: '#fff',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    }
                },
                {
                    name: '屈服强度',
                    type: 'gauge',
                    min: 0,
                    max: 500,
                    center: ['80%', '55%'],
                    radius: '80%',
                    splitNumber: 10,
                    data: [{
                        value: $scope.input1 * 500 + $scope.input2 * 250 + $scope.input3 * 30 + $scope.input4 * 800 + $scope.input5 * 700 + $scope.input6 * 100 + $scope.input7 * 120 + $scope.input8 * 50,
                        name: '屈服强度'
                    }],
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: [[0.699, '#ff4500'], [1, 'lime']],
                            width: 3,
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisLabel: {// 坐标轴小标记
                        distance: -33,
                        textStyle: {       // 属性lineStyle控制线条样式
                            fontWeight: 'normal',
                            color: 'auto',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        length: 7,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        },
                        splitNumber: 20
                    },
                    splitLine: {           // 分隔线
                        length: 15,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            width: 3,
                            color: 'auto',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    pointer: {
                        length: '70%',
                        width: '4',          // 分隔线
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 5
                    },
                    detail: {
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: '5',
                            color: 'auto',
                            fontSize: '12'
                        },
                        formatter: function (value) {
                            return value + "MPa";
                        }

                    },
                    title: {
                        offsetCenter: [0, '100%'],
                        textStyle: {
                            color: '#fff',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    }
                }

            ],


        });
        $scope.refreshEcharts = function () {
            if (!echarts1) {
                return
            }
            var option = echarts1.getOption();
            option.series[0].data[0].value = $scope.input1;
            option.series[1].data[0].value = $scope.input2;
            option.series[2].data[0].value = $scope.input3;
            option.series[3].data[0].value = $scope.input4;
            option.series[4].data[0].value = $scope.input5;
            option.series[5].data[0].value = $scope.input6;
            option.series[6].data[0].value = $scope.input7;
            option.series[7].data[0].value = $scope.input8;
            option.series[8].data[0].value = $scope.input1 * 400 + $scope.input2 * 250 + $scope.input3 * 30 + $scope.input4 * 800 + $scope.input5 * 700 + $scope.input6 * 100 + $scope.input7 * 120 + $scope.input8 * 50;
            echarts1.setOption(option);
        }

    });

});
//