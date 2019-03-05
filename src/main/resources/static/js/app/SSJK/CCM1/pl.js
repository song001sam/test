define(['echarts', 'require'], function (ec, require) {
    var app = require('../../app');
    app.controller('plController1', function ($scope, $location) {
        // $scope.list = [];
        // $scope.totalItems = 0;
        // $scope.currentPage = 1;
        // var $ctrl = this;
        // $scope.page = function() {
        // $http({
        // method : "GET",
        // url : "Ssjk/list/" + $scope.currentPage + "/5"
        // }).then(function(response) {
        // $scope.totalItems = response.data.total;
        // $scope.list = response.data.list;
        // }, function(response) {
        // });
        // }
        $scope.option1 = {
            title: {
                text: '1流结晶器电磁搅拌运行频率',
                textStyle: {
                    color: 'black',
                    fontSize: 12
                },
                left: 'center'

            },
            tooltip: {
                trigger: 'axis'
            },
            // legend : {
            // 	textStyle : {
            // 		color : 'black',
            // 		fontSize : 10
            // 	},
            // 	data : [ '1流频率' ],
            // 	top : '10%'
            // },
            xAxis: [{
                type: 'category',
                data: (function () {
                    var res = [];
                    return res;
                })(),
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        color: 'black',
                        fontSize: 7
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'black'
                    }
                },
                boundaryGap: false
            }],
            yAxis: [{
                type: 'value',
                name: 'Hz',
                nameTextStyle: {
                    fontSize: 9,
                    color: 'black'
                },
                axisLabel: {
                    textStyle: {
                        color: 'black',
                        fontSize: 9,
                        fontFamily: 'Arial',
                    }
                },
                splitLine: {
                    show: false
                    // 不显示网格线
                },
                scale: true

            }],
            grid: {
                left: 35
            },
            series: [{
                name: '1流频率',
                type: 'line',
                data: (function () {
                    var res = [];
                    return res;
                })(),
                itemStyle: {
                    normal: {
                        color: 'blue',
                        label: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: 'black',
                                fontSize: 9
                            }
                        }
                    }
                }
            }]
        }
        $scope.option2 = {
            title: {
                text: '2流结晶器电磁搅拌运行频率',
                textStyle: {
                    color: 'black',
                    fontSize: 12
                },
                left: 'center'
            },
            tooltip: {
                trigger: 'axis'
            },
            // legend : {
            // 	textStyle : {
            // 		color : 'black',
            // 		fontSize : 10
            // 	},
            // 	data : [ '2流频率' ],
            // 	top : '10%'
            // },
            xAxis: [{
                type: 'category',
                data: (function () {
                    var res = [];
                    return res;
                })(),
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        color: 'black',
                        fontSize: 7
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'black'
                    }
                },
                boundaryGap: false
            }],
            yAxis: [{
                type: 'value',
                name: 'Hz',
                nameTextStyle: {
                    fontSize: 9,
                    color: 'black'
                },
                axisLabel: {
                    textStyle: {
                        color: 'black',
                        fontSize: 9,
                        fontFamily: 'Arial',
                    }
                },
                splitLine: {
                    show: false
                    // 不显示网格线
                },
                scale: true

            }],
            grid: {
                left: 35
            },
            series: [{
                name: '2流频率',
                type: 'line',
                data: (function () {
                    var res = [];
                    return res;
                })(),
                itemStyle: {
                    normal: {
                        color: 'blue',
                        label: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: 'black',
                                fontSize: 9
                            }
                        }
                    }
                }
            }]
        }
        $scope.option3 = {
            title: {
                text: '3流结晶器电磁搅拌运行频率',
                textStyle: {
                    color: 'black',
                    fontSize: 12
                },
                left: 'center'
            },
            tooltip: {
                trigger: 'axis'
            },
            // legend : {
            // 	textStyle : {
            // 		color : 'black',
            // 		fontSize : 10
            // 	},
            // 	data : [ '3流频率' ],
            // 	top : '10%'
            // },
            xAxis: [{
                type: 'category',
                data: (function () {
                    var res = [];
                    return res;
                })(),
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        color: 'black',
                        fontSize: 7
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'black'
                    }
                },
                boundaryGap: false
            }],
            yAxis: [{
                type: 'value',
                name: 'Hz',
                nameTextStyle: {
                    fontSize: 9,
                    color: 'black'
                },
                axisLabel: {
                    textStyle: {
                        color: 'black',
                        fontSize: 9,
                        fontFamily: 'Arial',
                    }
                },
                splitLine: {
                    show: false
                    // 不显示网格线
                },
                scale: true

            }],
            grid: {
                left: 35
            },
            series: [{
                name: '3流频率',
                type: 'line',
                data: (function () {
                    var res = [];
                    return res;
                })(),
                itemStyle: {
                    normal: {
                        color: 'blue',
                        label: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: 'black',
                                fontSize: 9
                            }
                        }
                    }
                }
            }]
        }
        $scope.option4 = {
            title: {
                text: '4流结晶器电磁搅拌运行频率',
                textStyle: {
                    color: 'black',
                    fontSize: 12
                },
                left: 'center'
            },
            tooltip: {
                trigger: 'axis'
            },
            // legend : {
            // 	textStyle : {
            // 		color : 'black',
            // 		fontSize : 10
            // 	},
            // 	data : [ '4流频率' ],
            // 	top : '10%'
            // },
            xAxis: [{
                type: 'category',
                data: (function () {
                    var res = [];
                    return res;
                })(),
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        color: 'black',
                        fontSize: 7
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'black'
                    }
                },
                boundaryGap: false
            }],
            yAxis: [{
                type: 'value',
                name: 'Hz',
                nameTextStyle: {
                    fontSize: 9,
                    color: 'black'
                },
                axisLabel: {
                    textStyle: {
                        color: 'black',
                        fontSize: 9,
                        fontFamily: 'Arial',
                    }
                },
                splitLine: {
                    show: false
                    // 不显示网格线
                },
                scale: true

            }],
            grid: {
                left: 35
            },
            series: [{
                name: '4流频率',
                type: 'line',
                data: (function () {
                    var res = [];
                    return res;
                })(),
                itemStyle: {
                    normal: {
                        color: 'blue',
                        label: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: 'black',
                                fontSize: 9
                            }
                        }
                    }
                }
            }]
        }
        $scope.option5 = {
            title: {
                text: '5流结晶器电磁搅拌运行频率',
                textStyle: {
                    color: 'black',
                    fontSize: 12
                },
                left: 'center'
            },
            tooltip: {
                trigger: 'axis'
            },
            // legend : {
            // 	textStyle : {
            // 		color : 'black',
            // 		fontSize : 10
            // 	},
            // 	data : [ '5流频率' ],
            // 	top : '10%'
            // },
            xAxis: [{
                type: 'category',
                data: (function () {
                    var res = [];
                    return res;
                })(),
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        color: 'black',
                        fontSize: 7
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'black'
                    }
                },
                boundaryGap: false
            }],
            yAxis: [{
                type: 'value',
                name: 'Hz',
                nameTextStyle: {
                    fontSize: 9,
                    color: 'black'
                },
                axisLabel: {
                    textStyle: {
                        color: 'black',
                        fontSize: 9,
                        fontFamily: 'Arial',
                    }
                },
                splitLine: {
                    show: false
                    // 不显示网格线
                },
                scale: true

            }],
            grid: {
                left: 35
            },
            series: [{
                name: '5流频率',
                type: 'line',
                data: (function () {
                    var res = [];
                    return res;
                })(),
                itemStyle: {
                    normal: {
                        color: 'blue',
                        label: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: 'black',
                                fontSize: 9
                            }
                        }
                    }
                }
            }]
        }
        $scope.option6 = {
            title: {
                text: '6流结晶器电磁搅拌运行频率',
                textStyle: {
                    color: 'black',
                    fontSize: 12
                },
                left: 'center'
            },
            tooltip: {
                trigger: 'axis'
            },
            // legend : {
            // 	textStyle : {
            // 		color : 'black',
            // 		fontSize : 10
            // 	},
            // 	data : [ '6流频率' ],
            // 	top : '10%'
            // },
            xAxis: [{
                type: 'category',
                data: (function () {
                    var res = [];
                    return res;
                })(),
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        color: 'black',
                        fontSize: 7
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'black'
                    }
                },
                boundaryGap: false
            }],
            yAxis: [{
                type: 'value',
                name: 'Hz',
                nameTextStyle: {
                    fontSize: 9,
                    color: 'black'
                },
                axisLabel: {
                    textStyle: {
                        color: 'black',
                        fontSize: 9,
                        fontFamily: 'Arial',
                    }
                },
                splitLine: {
                    show: false
                    // 不显示网格线
                },
                scale: true

            }],
            grid: {
                left: 35
            },
            series: [{
                name: '6流频率',
                type: 'line',
                data: (function () {
                    var res = [];
                    return res;
                })(),
                itemStyle: {
                    normal: {
                        color: 'blue',
                        label: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: 'black',
                                fontSize: 9
                            }
                        }
                    }
                }
            }]
        }
        $scope.option7 = {
            title: {
                text: '7流结晶器电磁搅拌运行频率',
                textStyle: {
                    color: 'black',
                    fontSize: 12
                },
                left: 'center'
            },
            tooltip: {
                trigger: 'axis'
            },
            // legend : {
            // 	textStyle : {
            // 		color : 'black',
            // 		fontSize : 10
            // 	},
            // 	data : [ '7流频率' ],
            // 	top : '10%'
            // },
            xAxis: [{
                type: 'category',
                data: (function () {
                    var res = [];
                    return res;
                })(),
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        color: 'black',
                        fontSize: 7
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'black'
                    }
                },
                boundaryGap: false
            }],
            yAxis: [{
                type: 'value',
                name: 'Hz',
                nameTextStyle: {
                    fontSize: 9,
                    color: 'black'
                },
                axisLabel: {
                    textStyle: {
                        color: 'black',
                        fontSize: 9,
                        fontFamily: 'Arial',
                    }
                },
                splitLine: {
                    show: false
                    // 不显示网格线
                },
                scale: true

            }],
            grid: {
                left: 35
            },
            series: [{
                name: '7流频率',
                type: 'line',
                data: (function () {
                    var res = [];
                    return res;
                })(),
                itemStyle: {
                    normal: {
                        color: 'blue',
                        label: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: 'black',
                                fontSize: 9
                            }
                        }
                    }
                }
            }]
        }

        var echarts1 = ec.init(document.getElementById('option1'));
        var echarts2 = ec.init(document.getElementById('option2'));
        var echarts3 = ec.init(document.getElementById('option3'));
        var echarts4 = ec.init(document.getElementById('option4'));
        var echarts5 = ec.init(document.getElementById('option5'));
        var echarts6 = ec.init(document.getElementById('option6'));
        var echarts7 = ec.init(document.getElementById('option7'));
        echarts1.setOption($scope.option1, true);
        echarts2.setOption($scope.option2, true);
        echarts3.setOption($scope.option3, true);
        echarts4.setOption($scope.option4, true);
        echarts5.setOption($scope.option5, true);
        echarts6.setOption($scope.option6, true);
        echarts7.setOption($scope.option7, true);

        var host = $location.host();
        var port = $location.port();
        var ws = "ws://" + host + ":" + port + "/BDIA/ws/ccm1_1";

        var socket;
        if (typeof (WebSocket) == "undefined") {
            console.log("您的浏览器不支持WebSocket");
        } else {
            console.log("您的浏览器支持WebSocket");
            //socket = new WebSocket("ws://localhost:8080/BDIA/ws/ccm1_1");
            socket = new WebSocket(ws);
            //打开事件
            socket.onopen = function () {
                console.log("Socket 已打开");
                //socket.send("这是来自客户端的消息" + location.href + new Date());
            };
            //获得消息事件
            socket.onmessage = function (msg) {

                var str = msg.data.split(",");
                var time = new Date(str[0].replace(/-/g, "/"));
                var tim = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
                //str 数组1-7是拉速 拉速为负数时，设置为0
                //str 数组8-14是结晶器电磁搅拌运行频率
                var pl_1 = parseFloat(str[8]);
                var pl_2 = parseFloat(str[9]);
                var pl_3 = parseFloat(str[10]);
                var pl_4 = parseFloat(str[11]);
                var pl_5 = parseFloat(str[12]);
                var pl_6 = parseFloat(str[13]);
                var pl_7 = parseFloat(str[14]);


                var data_pl_0 = $scope.option1.series[0].data;
                var data_pl_1 = $scope.option2.series[0].data;
                var data_pl_2 = $scope.option3.series[0].data;
                var data_pl_3 = $scope.option4.series[0].data;
                var data_pl_4 = $scope.option5.series[0].data;
                var data_pl_5 = $scope.option6.series[0].data;
                var data_pl_6 = $scope.option7.series[0].data;

                if (data_pl_0.length < 4) {//图标展示60个点
                    //option.xAxis[0].data.push(axisData); //在数组后添加一项（x轴）
                    //data0.push(num);//在数组最后加入数据 （y轴）
                    $scope.option1.xAxis[0].data.push(tim); //在数组后添加一项（x轴）
                    $scope.option2.xAxis[0].data.push(tim); //在数组后添加一项（x轴）
                    $scope.option3.xAxis[0].data.push(tim); //在数组后添加一项（x轴）
                    $scope.option4.xAxis[0].data.push(tim); //在数组后添加一项（x轴）
                    $scope.option5.xAxis[0].data.push(tim); //在数组后添加一项（x轴）
                    $scope.option6.xAxis[0].data.push(tim); //在数组后添加一项（x轴）
                    $scope.option7.xAxis[0].data.push(tim); //在数组后添加一项（x轴）
                    data_pl_0.push(pl_1);//在数组最后加入数据 （y轴）
                    data_pl_1.push(pl_2);
                    data_pl_2.push(pl_3);
                    data_pl_3.push(pl_4);
                    data_pl_4.push(pl_5);
                    data_pl_5.push(pl_6);
                    data_pl_6.push(pl_7);
                } else {
                    //data0.shift();//移除数组的第一项 （y轴）
                    //data0.push(num);//在数组最后加入数据 （y轴）
                    //option.xAxis[0].data.shift(); //移除数组的第一项 （x轴）
                    //option.xAxis[0].data.push(axisData); //在数组后添加一项（x轴）
                    data_pl_0.shift();//移除数组的第一项 （y轴）
                    data_pl_1.shift();//移除数组的第一项 （y轴）
                    data_pl_2.shift();//移除数组的第一项 （y轴）
                    data_pl_3.shift();//移除数组的第一项 （y轴）
                    data_pl_4.shift();//移除数组的第一项 （y轴）
                    data_pl_5.shift();//移除数组的第一项 （y轴）
                    data_pl_6.shift();//移除数组的第一项 （y轴）
                    data_pl_0.push(pl_1);//在数组最后加入数据 （y轴）
                    data_pl_1.push(pl_2);//在数组最后加入数据 （y轴）
                    data_pl_2.push(pl_3);//在数组最后加入数据 （y轴）
                    data_pl_3.push(pl_4);//在数组最后加入数据 （y轴）
                    data_pl_4.push(pl_5);//在数组最后加入数据 （y轴）
                    data_pl_5.push(pl_6);//在数组最后加入数据 （y轴）
                    data_pl_6.push(pl_7);//在数组最后加入数据 （y轴）


                    $scope.option1.xAxis[0].data.shift(); //移除数组的第一项 （x轴）
                    $scope.option2.xAxis[0].data.shift();
                    $scope.option3.xAxis[0].data.shift();
                    $scope.option4.xAxis[0].data.shift();
                    $scope.option5.xAxis[0].data.shift();
                    $scope.option6.xAxis[0].data.shift();
                    $scope.option7.xAxis[0].data.shift();

                    $scope.option1.xAxis[0].data.push(tim); //在数组后添加一项（x轴）
                    $scope.option2.xAxis[0].data.push(tim); //在数组后添加一项（x轴）
                    $scope.option3.xAxis[0].data.push(tim); //在数组后添加一项（x轴）
                    $scope.option4.xAxis[0].data.push(tim); //在数组后添加一项（x轴）
                    $scope.option5.xAxis[0].data.push(tim); //在数组后添加一项（x轴）
                    $scope.option6.xAxis[0].data.push(tim); //在数组后添加一项（x轴）
                    $scope.option7.xAxis[0].data.push(tim); //在数组后添加一项（x轴）
                }
                echarts1.setOption($scope.option1);
                echarts2.setOption($scope.option2);
                echarts3.setOption($scope.option3);
                echarts4.setOption($scope.option4);
                echarts5.setOption($scope.option5);
                echarts6.setOption($scope.option6);
                echarts7.setOption($scope.option7);
            };
            //关闭事件
            socket.onclose = function () {
                console.log("Socket已关闭");
            };
            //发生了错误事件
            socket.onerror = function () {
                alert("Socket发生了错误");
            };
            $scope.$on("$destroy", function () {
                socket.close();
            })
        }


    });


    // app.directive('eCharts', function($http, $window) {
    // 	function link($scope, element, attrs) {
    // 		var myChart = ec.init(element[0]);
    // 		$scope.$watch(attrs['eData'], function() {
    // 			var option = $scope.$eval(attrs.eData);
    // 			console.info(option)
    // 			if (angular.isObject(option)) {
    // 				myChart.setOption(option);
    // 			}
    // 		}, true);
    // 		$scope.getDom = function() {
    // 			return {
    // 				'height' : element[0].offsetHeight,
    // 				'width' : element[0].offsetWidth
    // 			};
    // 		};
    // 		$scope.$watch($scope.getDom, function() {
    // 			// resize echarts图表
    // 			myChart.resize();
    // 		}, true);
    // 	}
    // 	return {
    // 		restrict : 'A',
    // 		link : link
    // 	};
    // });
});
//