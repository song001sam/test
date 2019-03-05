define(['echarts', 'require'], function (ec, require) {
    var app = require('../../app');
    app.controller('dlController2', function ($scope, $location) {
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
                text: '1流结晶器电磁搅拌运行电流',
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
            // 	data : [ '1流电流' ],
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
                name: 'A',
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
            series: [{
                name: '1流电流',
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
                text: '2流结晶器电磁搅拌运行电流',
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
            // 	data : [ '2流电流' ],
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
                name: 'A',
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
            series: [{
                name: '2流电流',
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
                text: '3流结晶器电磁搅拌运行电流',
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
            // 	data : [ '3流电流' ],
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
                name: '',
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
            series: [{
                name: '3流电流',
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
                text: '4流结晶器电磁搅拌运行电流',
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
            // 	data : [ '4流电流' ],
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
                name: 'A',
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
            series: [{
                name: '4流电流',
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
                text: '5流结晶器电磁搅拌运行电流',
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
            // 	data : [ '5流电流' ],
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
                name: 'A',
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
            series: [{
                name: '5流电流',
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
                text: '6流结晶器电磁搅拌运行电流',
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
            // 	data : [ '6流电流' ],
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
                name: 'A',
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
            series: [{
                name: '6流电流',
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
                text: '7流结晶器电磁搅拌运行电流',
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
            // 	data : [ '7流电流' ],
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
                name: 'A',
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
            series: [{
                name: '7流电流',
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
        $scope.option8 = {
            title: {
                text: '8流结晶器电磁搅拌运行电流',
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
            // 	data : [ '8流电流' ],
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
                name: 'A',
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
            series: [{
                name: '8流电流',
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
        var echarts8 = ec.init(document.getElementById('option8'));
        echarts1.setOption($scope.option1, true);
        echarts2.setOption($scope.option2, true);
        echarts3.setOption($scope.option3, true);
        echarts4.setOption($scope.option4, true);
        echarts5.setOption($scope.option5, true);
        echarts6.setOption($scope.option6, true);
        echarts7.setOption($scope.option7, true);
        echarts8.setOption($scope.option8, true);

        var host = $location.host();
        var port = $location.port();
        var ws = "ws://" + host + ":" + port + "/BDIA/ws/ccm2_1";

        var socket;
        if (typeof (WebSocket) == "undefined") {
            console.log("您的浏览器不支持WebSocket");
        } else {
            console.log("您的浏览器支持WebSocket");
            //socket = new WebSocket("ws://localhost:8080/BDIA/ws/ccm2_1");
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
                //str 数组17-24是结晶器电磁搅拌运行电流
                var dl_1 = parseFloat(str[17]);
                var dl_2 = parseFloat(str[18]);
                var dl_3 = parseFloat(str[19]);
                var dl_4 = parseFloat(str[20]);
                var dl_5 = parseFloat(str[21]);
                var dl_6 = parseFloat(str[22]);
                var dl_7 = parseFloat(str[23]);
                var dl_8 = parseFloat(str[24]);


                var data_dl_0 = $scope.option1.series[0].data;
                var data_dl_1 = $scope.option2.series[0].data;
                var data_dl_2 = $scope.option3.series[0].data;
                var data_dl_3 = $scope.option4.series[0].data;
                var data_dl_4 = $scope.option5.series[0].data;
                var data_dl_5 = $scope.option6.series[0].data;
                var data_dl_6 = $scope.option7.series[0].data;
                var data_dl_7 = $scope.option8.series[0].data;

                if (data_dl_0.length < 6) {//图标展示60个点
                    //option.xAxis[0].data.push(axisData); //在数组后添加一项（x轴）
                    //data0.push(num);//在数组最后加入数据 （y轴）
                    $scope.option1.xAxis[0].data.push(tim); //在数组后添加一项（x轴）
                    $scope.option2.xAxis[0].data.push(tim); //在数组后添加一项（x轴）
                    $scope.option3.xAxis[0].data.push(tim); //在数组后添加一项（x轴）
                    $scope.option4.xAxis[0].data.push(tim); //在数组后添加一项（x轴）
                    $scope.option5.xAxis[0].data.push(tim); //在数组后添加一项（x轴）
                    $scope.option6.xAxis[0].data.push(tim); //在数组后添加一项（x轴）
                    $scope.option7.xAxis[0].data.push(tim); //在数组后添加一项（x轴）
                    $scope.option8.xAxis[0].data.push(tim); //在数组后添加一项（x轴）
                    data_dl_0.push(dl_1);//在数组最后加入数据 （y轴）
                    data_dl_1.push(dl_2);
                    data_dl_2.push(dl_3);
                    data_dl_3.push(dl_4);
                    data_dl_4.push(dl_5);
                    data_dl_5.push(dl_6);
                    data_dl_6.push(dl_7);
                    data_dl_7.push(dl_8);

                } else {
                    //data0.shift();//移除数组的第一项 （y轴）
                    //data0.push(num);//在数组最后加入数据 （y轴）
                    //option.xAxis[0].data.shift(); //移除数组的第一项 （x轴）
                    //option.xAxis[0].data.push(axisData); //在数组后添加一项（x轴）
                    data_dl_0.shift();//移除数组的第一项 （y轴）
                    data_dl_1.shift();//移除数组的第一项 （y轴）
                    data_dl_2.shift();//移除数组的第一项 （y轴）
                    data_dl_3.shift();//移除数组的第一项 （y轴）
                    data_dl_4.shift();//移除数组的第一项 （y轴）
                    data_dl_5.shift();//移除数组的第一项 （y轴）
                    data_dl_6.shift();//移除数组的第一项 （y轴）
                    data_dl_7.shift();//移除数组的第一项 （y轴）
                    data_dl_0.push(dl_1);//在数组最后加入数据 （y轴）
                    data_dl_1.push(dl_2);//在数组最后加入数据 （y轴）
                    data_dl_2.push(dl_3);//在数组最后加入数据 （y轴）
                    data_dl_3.push(dl_4);//在数组最后加入数据 （y轴）
                    data_dl_4.push(dl_5);//在数组最后加入数据 （y轴）
                    data_dl_5.push(dl_6);//在数组最后加入数据 （y轴）
                    data_dl_6.push(dl_7);//在数组最后加入数据 （y轴）
                    data_dl_7.push(dl_8);//在数组最后加入数据 （y轴）


                    $scope.option1.xAxis[0].data.shift(); //移除数组的第一项 （x轴）
                    $scope.option2.xAxis[0].data.shift();
                    $scope.option3.xAxis[0].data.shift();
                    $scope.option4.xAxis[0].data.shift();
                    $scope.option5.xAxis[0].data.shift();
                    $scope.option6.xAxis[0].data.shift();
                    $scope.option7.xAxis[0].data.shift();
                    $scope.option8.xAxis[0].data.shift();

                    $scope.option1.xAxis[0].data.push(tim); //在数组后添加一项（x轴）
                    $scope.option2.xAxis[0].data.push(tim); //在数组后添加一项（x轴）
                    $scope.option3.xAxis[0].data.push(tim); //在数组后添加一项（x轴）
                    $scope.option4.xAxis[0].data.push(tim); //在数组后添加一项（x轴）
                    $scope.option5.xAxis[0].data.push(tim); //在数组后添加一项（x轴）
                    $scope.option6.xAxis[0].data.push(tim); //在数组后添加一项（x轴）
                    $scope.option7.xAxis[0].data.push(tim); //在数组后添加一项（x轴）
                    $scope.option8.xAxis[0].data.push(tim); //在数组后添加一项（x轴）
                }
                echarts1.setOption($scope.option1);
                echarts2.setOption($scope.option2);
                echarts3.setOption($scope.option3);
                echarts4.setOption($scope.option4);
                echarts5.setOption($scope.option5);
                echarts6.setOption($scope.option6);
                echarts7.setOption($scope.option7);
                echarts8.setOption($scope.option8);

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