define(['echarts', 'require'], function (ec, require) {
    var app = require('../../app');
    app.controller('yqgdController2', function ($scope, $location) {
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
        // $scope.option1 = {
        // 	title : {
        // 		text : '氧枪高度',
        // 		textStyle : {
        // 			color : 'black',
        // 			fontSize : 15
        // 		}
        // 	},
        // 	tooltip : {
        // 		formatter : "{a} <br/>{b} : {c}%"
        // 	},
        // 	series : [ {
        // 		name : '氧枪高度',
        // 		type : 'gauge',
        // 		detail : {
        // 			formatter : '{value}',
        // 			fontSize : 12
        // 		},
        // 		data : [ {
        // 			value : 0,
        // 			name : '氧枪高度'
        // 		} ],
        // 		axisLine : {
        // 			lineStyle : {
        // 				color : [ [ 0.2, 'green' ], [ 0.8, '#63869e' ],
        // 						[ 1, '#91c7ae' ] ]
        // 			}
        // 		},
        // 		max : 20000,
        // 		min : 0,
        // 		axisLabel : {
        // 			fontSize : 12
        // 		}
        // 	} ]
        // }

        $scope.option1 = {
            title: {
                text: '氧枪高度',
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
            //     textStyle : {
            //         color : 'black',
            //         fontSize : 10
            //     },
            //     data : [ '1流频率' ],
            //     top : '10%'
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
                name: '氧枪高度',
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
        echarts1.setOption($scope.option1, true);

        var host = $location.host();
        var port = $location.port();
        var ws = "ws://" + host + ":" + port + "/BDIA/ws/bof2_1";

        var socket;
        if (typeof (WebSocket) == "undefined") {
            console.log("您的浏览器不支持WebSocket");
        } else {
            console.log("您的浏览器支持WebSocket");
            //socket = new WebSocket("ws://localhost:8080/BDIA/ws/bof2_1");
            socket = new WebSocket(ws);
            //打开事件
            socket.onopen = function () {
                console.log("Socket 已打开");
                //socket.send("这是来自客户端的消息" + location.href + new Date());
            };
            //获得消息事件
            socket.onmessage = function (msg) {
                //console.info(msg.data);
                // var str = msg.split(",");
                // var yqgd = parseFloat(str[1]);
                // $scope.option1.series[0].data[0].value = yqgd;
                // echarts1.setOption($scope.option1);
                var str = msg.data.split(",");
                var time = new Date(str[0].replace(/-/g, "/"));
                var tim = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
                //str 数组1-7是拉速 拉速为负数时，设置为0
                //str 数组8-14是结晶器电磁搅拌运行频率
                var yqgd_1 = parseFloat(str[2]);

                var data_yqgd_0 = $scope.option1.series[0].data;
                if (data_yqgd_0.length < 12) {//图标展示60个点
                    //option.xAxis[0].data.push(axisData); //在数组后添加一项（x轴）
                    //data0.push(num);//在数组最后加入数据 （y轴）
                    $scope.option1.xAxis[0].data.push(tim); //在数组后添加一项（x轴）
                    data_yqgd_0.push(yqgd_1);//在数组最后加入数据 （y轴）
                } else {
                    data_yqgd_0.shift();//移除数组的第一项 （y轴）
                    data_yqgd_0.push(yqgd_1);//在数组最后加入数据 （y轴）


                    $scope.option1.xAxis[0].data.shift(); //移除数组的第一项 （x轴）
                    $scope.option1.xAxis[0].data.push(tim); //在数组后添加一项（x轴）
                }
                echarts1.setOption($scope.option1);

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