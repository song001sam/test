define(['echarts', 'require'], function (ec, require) {
    var app = require('../../app');
    app.controller('ygddController1', function ($scope, $location) {
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
                text: '有功电度',
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
            // 	data : [ '有功电度' ],
            // 	top : '5%'
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
                name: '有功电度',
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
        var ws = "ws://" + host + ":" + port + "/BDIA/ws/lf1_1";

        var socket;
        if (typeof (WebSocket) == "undefined") {
            console.log("您的浏览器不支持WebSocket");
        } else {
            console.log("您的浏览器支持WebSocket");
            //socket = new WebSocket("ws://localhost:8080/BDIA/ws/lf1_1");
            socket = new WebSocket(ws);
            //打开事件
            socket.onopen = function () {
                console.log("Socket 已打开");
                //socket.send("这是来自客户端的消息" + location.href + new Date());
            };
            //获得消息事件
            socket.onmessage = function (msg) {
                var str = msg.data.split(",");
                if (str[0] == "1") {
                    var time = new Date(str[1].replace(/-/g, "/"));
                    var tim = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
                    var ygdd_1 = parseFloat(str[6]);
                    var data_ygdd_0 = $scope.option1.series[0].data;
                    if (data_ygdd_0.length < 12) {//图标展示60个点
                        //option.xAxis[0].data.push(axisData); //在数组后添加一项（x轴）
                        //data0.push(num);//在数组最后加入数据 （y轴）
                        $scope.option1.xAxis[0].data.push(tim); //在数组后添加一项（x轴）
                        data_ygdd_0.push(ygdd_1);//在数组最后加入数据 （y轴）
                    } else {
                        //data0.shift();//移除数组的第一项 （y轴）
                        //data0.push(num);//在数组最后加入数据 （y轴）
                        //option.xAxis[0].data.shift(); //移除数组的第一项 （x轴）
                        //option.xAxis[0].data.push(axisData); //在数组后添加一项（x轴）
                        data_ygdd_0.shift();//移除数组的第一项 （y轴）
                        data_ygdd_0.push(ygdd_1);//在数组最后加入数据 （y轴）
                        $scope.option1.xAxis[0].data.shift(); //移除数组的第一项 （x轴）
                        $scope.option1.xAxis[0].data.push(tim); //在数组后添加一项（x轴）
                    }
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