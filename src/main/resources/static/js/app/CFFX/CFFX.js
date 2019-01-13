define(['echarts',
    'require',
    'bootstrap-slider'
], function (ec, require, bs) {
    var app = require('../app');
    app.controller('CFFXController', function ($scope, $http) {
        $scope.input1 = 0.42;
        $scope.input2 = 0.17;
        $scope.input3 = 0.50;
        $scope.input4 = 0;
        $scope.input5 = 0;
        $scope.input6 = 0;
        $scope.input7 = 0;
        $scope.input8 = 0;
        $scope.show = false;
        $scope.selectGT = '0';
        $scope.hxcf = {};
        $http({
            method: "GET",
            url: "/Tjfx/listhxcf/" + $scope.selectGT
        }).then(function (response) {

            $scope.hxcf = response.data
        }, function () {

        })
        $scope.GTchange = function () {
            $http({
                method: "GET",
                url: "/Tjfx/listhxcf/" + $scope.selectGT
            }).then(function (response) {

                $scope.hxcf = response.data
                $scope.refreshEcharts();
            }, function () {

            })

        }
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
                        value: jisuan2($scope.input1, $scope.input2, $scope.input3, $scope.input4, $scope.input5, $scope.input6, $scope.input7, $scope.input8),
                        name: '屈服强度'
                    }],
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: [[0.6, '#ff4500'], [0.8, 'lime'], [1, '#ff4500']],
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

        function jisuan(input, index) {
            var mx = [[[0.4038144, 0.22518992, 0.68758357, 0.01312906, 0.00483424, 0.8776861, 0.01528146, 0.01698678], [0.07510561, 0.09380182, 0.10098872, 0.00373614, 0.00249277, 0.17345668, 0.00424978, 0.00562997]], [[0.45180315, 0.21777868, 0.62937975, 0.01446031, 0.00450095, 0.059242, 0.01167109, 0.01652362], [0.03845034, 0.01417598, 0.0871949, 0.00335783, 0.00185701, 0.11619155, 0.0031222, 0.00804077]]]
            return (input - mx[$scope.selectGT][0][index]) / mx[$scope.selectGT][1][index];
        }

        function jisuan2(i1, i2, i3, i4, i5, i6, i7, i8) {
            var mx = [[-0.5172862,
                0.30368942,
                0.24983351,
                0.26868463,
                -0.29276145,
                0.3753877,
                -1.0505466,
                0.16243546], [-0.16399814,
                -1.8827899,
                -1.2866651,
                2.176001,
                -1.0158986,
                3.5141826,
                5.749451,
                -0.4056845]];
            var mx1 = [410.3224, 935.1709];
            var result = jisuan(i1, 0) * mx[$scope.selectGT][0] + jisuan(i2, 1) * mx[$scope.selectGT][1] + jisuan(i3, 2) * mx[$scope.selectGT][2] + jisuan(i4, 3) * mx[$scope.selectGT][3] + jisuan(i5, 4) * mx[$scope.selectGT][4] + jisuan(i6, 5) * mx[$scope.selectGT][5] + jisuan(i7, 6) * mx[$scope.selectGT][6] + jisuan(i8, 7) * mx[$scope.selectGT][7] + mx1[$scope.selectGT];
            // console.info( mx1[$scope.selectGT]);
            // console.info(result);
            return result

        }

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
            option.series[8].data[0].value = jisuan2($scope.input1, $scope.input2, $scope.input3, $scope.input4, $scope.input5, $scope.input6, $scope.input7, $scope.input8);
            echarts1.setOption(option);
        }
        $scope.open1 = function () {
            $scope.show = true;
        }
    });

});
//