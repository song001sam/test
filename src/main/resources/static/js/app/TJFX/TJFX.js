define(['echarts',
    'require'
], function (ec, require) {
    var app = require('../app');
    var angular = require('angular');
    app.controller('TJFXController', function ($scope, $http) {
        $scope.totalItems = 64;
        $scope.currentPage = 1;
        $scope.isshow = false;
        // $scope.isshowcharts = false;
        $scope.isshowbutton = false;
        $scope.mx;
        $scope.dt1 = new Date();
        $scope.dt2 = new Date();
        $scope.tableHead = "屈服强度";
        $scope.echarts4 = ec.init(document.getElementById('echarts4'))
        // $scope.select1 = "C";
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
            $scope.isshowbutton = true;
            $http({
                method: "GET",
                url: "Tjfx/listPage/" + $scope.selectGT + "/" + $scope.currentPage + "/5"
            }).then(function (response) {
                $scope.totalItems = response.data.total;
                $scope.list = response.data.list;

            }, function (response) {
            });

            $scope.isshow = true;
            $scope.isshowcharts = false;
        };
        $scope.clickChange = function () {
            $scope.isshow = !$scope.isshow
            $scope.isshowcharts = !$scope.isshowcharts
            console.info($scope.echarts4.getOption());
            if ($scope.echarts4.getOption() == undefined || $scope.echarts4.getOption().series.length == 0) {

                console.info("setOption");
                $scope.echarts4.setOption({
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    toolbox: {
                        feature: {
                            dataView: {},
                            restore: {},
                            magicType: {
                                type: ['line', 'bar']
                            }
                        }
                    },
                    legend: {},
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        show: false,
                        type: 'category',
                        data: function () {
                            var list = [];
                            for (var i = 1; i <= $scope.gtmx.length; i++) {
                                list.push(i)
                            }
                            return list;
                        }()
                    },
                    yAxis: [{
                        type: 'value',
                        name: '强度',
                        axisLabel: {
                            formatter: '{value} MPa'
                        }
                    }],
                    series: [

                        {
                            name: function () {
                                switch ($scope.mx) {
                                    case 'l_Rel':
                                        return '屈服强度'
                                    case 'nl_Rel':
                                        return '屈服强度'
                                    case 'l_Rm':
                                        return '抗拉强度'
                                    case 'nl_Rm':
                                        return '抗拉强度'
                                }
                            }(),
                            type: 'line',
                            yAxisIndex: 0,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'insideRight'
                                }
                            },
                            data: function () {
                                var list = [];
                                for (var i = 0; i < $scope.gtmx.length; i++) {
                                    switch ($scope.mx) {
                                        case 'l_Rel':
                                            list.push($scope.gtmx[i].rel)
                                            break;
                                        case 'nl_Rel':
                                            list.push($scope.gtmx[i].rel)
                                            break;
                                        case 'l_Rm':
                                            list.push($scope.gtmx[i].rm)
                                            break;
                                        case 'nl_Rm':
                                            list.push($scope.gtmx[i].rm)
                                            break;
                                    }
                                }
                                console.info(list)
                                return list;
                            }()
                        }
                        ,
                        {
                            name: function () {
                                switch ($scope.mx) {
                                    case 'l_Rel':
                                        return '模型屈服强度'
                                    case 'nl_Rel':
                                        return '模型屈服强度'
                                    case 'l_Rm':
                                        return '模型抗拉强度'
                                    case 'nl_Rm':
                                        return '模型抗拉强度'
                                }
                            }(),
                            type: 'line',
                            yAxisIndex: 0,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'insideRight'
                                }
                            },
                            data: function () {
                                var list = [];
                                for (var i = 0; i < $scope.gtmx.length; i++) {
                                    switch ($scope.mx) {
                                        case 'l_Rel':
                                            list.push($scope.gtmx[i].l_Rel)
                                            break;
                                        case 'nl_Rel':
                                            list.push($scope.gtmx[i].nl_Rel)
                                            break;
                                        case 'l_Rm':
                                            list.push($scope.gtmx[i].l_Rm)
                                            break;
                                        case 'nl_Rm':
                                            list.push($scope.gtmx[i].nl_Rm)
                                            break;
                                    }
                                }
                                console.info(list);
                                return list;
                            }(),
                        }
                    ]
                    ,
                    dataZoom: [
                        {
                            type: 'slider',
                            show: true,
                            start: 0,
                            end: 10,
                            handleSize: 10
                        },
                        {
                            type: 'inside',
                            start: 0,
                            end: 10
                        }
                    ]
                });
            } else {
                console.info("cleanOption");
                $scope.echarts4.clear();
            }
        };
        // var data = [];
        // for (var i = 1; i <= 30; i++) {
        //     data.push(Math.ceil(Math.random()*300)+1);
        // }

        var echarts2 = ec.init(document.getElementById('echarts2'));
        $scope.gt;
        $scope.gtmx;
        $scope.sel = function () {
            $http({
                method: "GET",
                url: "Tjfx/listGthl/"
            }).then(function (resq) {
                $scope.gt = resq.data;

                // $scope.select1 = $scope.gt[0].code
                // console.info($scope.select1 )
                $http({
                    method: "GET",
                    url: "Tjfx/list/" + $scope.selectGT
                }).then(function (response) {

                    $scope.gtmx = response.data;
                    $scope.selectChange();
                    $scope.echarts2Data = {
                        max: 0,
                        mm: 0,
                        min: 0
                    };
                    angular.forEach($scope.gt, function (item, index) {//找到选中的元素的分割线
                        // console.info($scope.select1)
                        if (item.code == $scope.select1.code) {
                            $scope.gtmin = item.value1;
                            $scope.gtmax = item.value2;

                        }
                    });
                    $http({
                        method: "GET",
                        url: "Tjfx/listhxcf/" + $scope.selectGT
                    }).then(function (response1) {
                        $scope.hxcf = response1.data

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
                                    [$scope.hxcf.minc,
                                        ($scope.hxcf.minc + $scope.hxcf.c) / 2,
                                        $scope.hxcf.c,
                                        ($scope.hxcf.maxc + $scope.hxcf.c) / 2,
                                        $scope.hxcf.maxc,

                                    ],
                                    [$scope.hxcf.minSi,
                                        ($scope.hxcf.minSi + $scope.hxcf.Si) / 2,
                                        $scope.hxcf.Si,
                                        ($scope.hxcf.maxSi + $scope.hxcf.Si) / 2,
                                        $scope.hxcf.maxSi,

                                    ]
                                    , [$scope.hxcf.minMn,
                                        ($scope.hxcf.minMn + $scope.hxcf.Mn) / 2,
                                        $scope.hxcf.Mn,
                                        ($scope.hxcf.maxMn + $scope.hxcf.Mn) / 2,
                                        $scope.hxcf.maxMn,

                                    ]
                                    , [$scope.hxcf.minP,
                                        ($scope.hxcf.minP + $scope.hxcf.P) / 2,
                                        $scope.hxcf.P,
                                        ($scope.hxcf.maxP + $scope.hxcf.P) / 2,
                                        $scope.hxcf.maxP,

                                    ]

                                    , [$scope.hxcf.minS,
                                        ($scope.hxcf.minS + $scope.hxcf.S) / 2,
                                        $scope.hxcf.S,
                                        ($scope.hxcf.maxS + $scope.hxcf.S) / 2,
                                        $scope.hxcf.maxS,

                                    ]
                                    , [$scope.hxcf.minCr,
                                        ($scope.hxcf.minCr + $scope.hxcf.Cr) / 2,
                                        $scope.hxcf.Cr,
                                        ($scope.hxcf.maxCr + $scope.hxcf.Cr) / 2,
                                        $scope.hxcf.maxCr,

                                    ]
                                    , [$scope.hxcf.minNi,
                                        ($scope.hxcf.minNi + $scope.hxcf.Ni) / 2,
                                        $scope.hxcf.Ni,
                                        ($scope.hxcf.maxNi + $scope.hxcf.Ni) / 2,
                                        $scope.hxcf.maxNi,

                                    ]
                                    , [$scope.hxcf.minCu,
                                        ($scope.hxcf.minCu + $scope.hxcf.Cu) / 2,
                                        $scope.hxcf.Cu,
                                        ($scope.hxcf.maxCu + $scope.hxcf.Cu) / 2,
                                        $scope.hxcf.maxCu,

                                    ]

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

                    }, function () {

                    });

                    //////////////////
                }, function (response) {

                });
            }, function () {

            });
            // ec.init(document.getElementById('echarts1')).setOption({
            //
            //     yAxis: {
            //         type: 'value',
            //     },
            //     xAxis: {
            //         type: 'category',
            //         data: function () {
            //             var list = [];
            //             for (var i = 1; i <= 30; i++) {
            //                 list.push('11月' + i + '日');
            //             }
            //             return list;
            //         }()
            //     },
            //     series: {
            //         type: 'bar',
            //         data: function () {
            //             var list = [];
            //             for (var i = 1; i <= 30; i++) {
            //                 list.push(Math.ceil(Math.random() * 300) + 1);
            //             }
            //             return list;
            //         }(),
            //         itemStyle: {
            //             normal: {
            //                 //颜色渐变
            //                 color: new ec.graphic.LinearGradient(0, 0, 0, 1, [{
            //                     offset: 0,
            //                     color: '#5A91E1'
            //                 }, {
            //                     offset: 1,
            //                     color: '#5DB6F3'
            //                 }])
            //             }
            //         }
            //     }
            //
            // });

            // var echarts2 = ec.init(document.getElementById('echarts2'));

        };
        $scope.selectChange = function () {
            if (!$scope.select1)
                $scope.select1 = $scope.gt[0];
            $scope.echarts2Data = {
                max: 0,
                mm: 0,
                min: 0
            };

            angular.forEach($scope.gt, function (item, index) {//找到选中的元素的分割线
                // console.info(item.code,$scope.select1.code)
                if (item.code == $scope.select1.code) {
                    $scope.gtmin = item.value1;
                    $scope.gtmax = item.value2;

                }
            });
            angular.forEach($scope.gtmx, function (item, index) {
                var ang = angular;
                var count = 0;
                ang.forEach(item, function (value, key) {
                    if ($scope.select1.code.toLowerCase() == key.toLowerCase()) {//避免麻烦直接全小写
                        if (value < $scope.gtmin) {
                            $scope.echarts2Data.min += 1;
                        } else if (value > $scope.gtmax) {
                            $scope.echarts2Data.max += 1;
                        } else {
                            $scope.echarts2Data.mm += 1;
                        }
                    }

                })
            });
            if (!echarts2) {
                return;
            }

            var option = {
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
            }
            option.series[0].data = [{
                value: $scope.echarts2Data.min,
                name: '<' + $scope.gtmin
            }, {
                value: $scope.echarts2Data.mm,
                name: $scope.gtmin + '~' + $scope.gtmax
            }, {
                value: $scope.echarts2Data.max,
                name: '>' + $scope.gtmax
            }];
            option.series[1].data = [{
                value: $scope.echarts2Data.min,
                name: '<' + $scope.gtmin
            }, {
                value: $scope.echarts2Data.mm,
                name: $scope.gtmin + '~' + $scope.gtmax
            }, {
                value: $scope.echarts2Data.max,
                name: '>' + $scope.gtmax
            }];
            option.legend = {
                orient: 'horizontal',
                bottom: '0%',
                data: ['<' + $scope.gtmin, $scope.gtmin + '~' + $scope.gtmax, '>' + $scope.gtmax]
            }
            echarts2.setOption(option);
        };

        $scope.page = function () {
            $http({
                method: "GET",
                url: "Tjfx/listPage/" + $scope.selectGT + "/" + $scope.currentPage + "/5"
            }).then(function (response) {
                $scope.totalItems = response.data.total;
                $scope.list = response.data.list;
            }, function (response) {
            });
        }
        $scope.mxChange = function () {
            $scope.currentPage = 1;
            $scope.isshowbutton = false;
            $scope.isshowcharts = false;
            $scope.echarts4.clear();
            $scope.tableHead = "屈服强度";
            if ($scope.mx) {
                if ($scope.mx.indexOf('Rel') != -1) {
                    $scope.tableHead = "屈服强度";
                } else {
                    $scope.tableHead = "抗拉强度";
                }
            }
        }
    });

});
//