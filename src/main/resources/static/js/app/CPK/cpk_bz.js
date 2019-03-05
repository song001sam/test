define(['echarts',
    'require'], function (ec, require) {

    var app = require('../app');
    app.controller('CPKController_bz', function ($scope, $http, $uibModal, $compile) {
        //设置时间格式
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
        $scope.colorStr = "#FF44AA";
        $scope.list = [];
        $scope.totalItems = 0;
        $scope.currentPage = 1;
        var cpkPosOne = ec.init(document.getElementById('echartsOne'));
        var cpkPosOne_option = {
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
                textStyle: {
                    color: '#B7E1FF',
                    fontSize: 14
                },
                data: [''],
                top: '10%'
            },
            xAxis: [{
                type: 'category',
                data: (function () {
                    var res = [];
                    return res;
                })(),
                axisLabel: {
                    interval: 3,
                    rotate: 45,
                    margin: 2/* ,
					 formatter:function(value){
					        return value.split("").join("\n");
					 } */
                }
            }],
            yAxis: [{
                type: 'value',
                name: 'cpk值',
                nameTextStyle: {
                    fontSize: 14
                },
                axisLabel: {
                    textStyle: {
                        fontSize: 14,
                        fontFamily: 'Arial',
                    }
                },
                splitLine: {
                    show: false
                    //不显示网格线
                },
                max: 2,
                min: 0
            }],
            series: [{
                name: 'cpk',
                type: 'bar',
                barWidth: '30%',
                markLine: {
                    silent: true,
                    symbol: 'none',//去掉箭头
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                type: 'dotted',
                                color: 'red'
                            },
                            label: {
                                show: true,
                                position: 'end'
                            }
                        }
                    },//'dotted'虚线 'solid'实线
                    data: [{
                        name: '',
                        yAxis: 1,
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    type: 'solid',
                                    color: 'red ',
                                    width: 0.5
                                },
                                label: {
                                    formatter: 1,
                                    textStyle: {
                                        color: 'red',
                                        fontSize: 9,
                                        fontWeight: "bolder"
                                    }
                                }
                            }
                        }
                    }, {
                        name: '',
                        yAxis: 1.33,
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    type: 'solid',
                                    color: 'red ',
                                    width: 0.5
                                },
                                label: {
                                    formatter: 1.33,
                                    textStyle: {
                                        color: 'red',
                                        fontSize: 9,
                                        fontWeight: "bolder"
                                    }
                                }
                            }
                        }
                    }]
                },
                data: (function () {
                    var res = [];
                    return res;
                })(),
                itemStyle: {
                    normal: {
                        color: 'blue',
                        label: {
                            show: false,
                            position: 'top',
                            textStyle: {
                                color: 'black',
                                fontSize: 14
                            }
                        }
                    }
                }
            }]
        };
        cpkPosOne.setOption(cpkPosOne_option);

        $scope.open1 = function () {
            $scope.popup1.opened = true;
        };
        $scope.open2 = function () {
            $scope.popup2.opened = true;
        };
        $scope.popup1 = {
            opened: false
        };
        $scope.popup2 = {
            opened: false
        };

        $scope.dt1 = new Date(new Date().setDate(1));
        $scope.dt2 = new Date();

        $scope.data = {
            "beginTime": $scope.dt1.format("yyyy-MM-dd"),
            "endTime": $scope.dt2.format("yyyy-MM-dd")
        };
        $scope.doSearch = function () {
            $scope.data = {
                "beginTime": $scope.dt1.format("yyyy-MM-dd"),
                "endTime": $scope.dt2.format("yyyy-MM-dd")
            }
            $scope.page();
            $scope.showEchartsOne();
        };
        $scope.page = function () {
            $http({
                method: "post",
                url: "CPK/searchGroupByItem_cd/" + $scope.currentPage + "/50",
                data: $scope.data

            }).then(function (response) {
                $scope.totalItems = response.data.total;
                var str = "";
                var colorStrs = ["#FF44AA", "#FF3333", "#FF7744", "#FFAA33", "#FFCC22", "#FFFF33", "#CCFF33", "#99FF33", "#33FF33", "#33FFAA", "#33FFDD", "#33FFFF", "#33CCFF", "#5555FF", "#B94FFF", "#FF3EFF"];
                var index = 1;
                var colorIndex = 0;
                angular.forEach(response.data.list, function (i, j) {
                    if (i.stl_grd_name_name != undefined && i.stl_grd_name_name != undefined) {
                        if (index < 60) {
                            if (colorIndex == colorStrs.length) {
                                colorIndex = 0;
                            }
                            var colorStr = colorStrs[colorIndex];
                            stl_grd_name_name = i.stl_grd_name_name == undefined ? "" : i.stl_grd_name_name;
                            var param = stl_grd_name_name + ": " + i.item_cd_name;
                            str = str + "<li style='margin:1px; width:29%;float:left;list-style-type:none;' ng-click=showdetail('" + i.stl_grd_name + "','" + i.item_cd + "','" + colorStr + "')><span style='border-radius:5px; background-color: " + colorStr + ";'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;" + param + "</span></li>";
                            index++;
                            colorIndex++;
                        }
                    }
                });
                var $htmlstr = $compile(str)($scope);
                $("#cpk_ul").html($htmlstr);
            }, function (response) {
            });
        };
        $scope.showdetail = function (stl_grd_name, item_cd, colorStr) {
            $scope.data_detail = {
                "beginTime": $scope.dt1.format("yyyy-MM-dd"),
                "endTime": $scope.dt2.format("yyyy-MM-dd"),
                "stlGrdName": stl_grd_name,
                "itemCd": item_cd
            };
            $scope.colorStr = colorStr;
            $scope.showEchartsOne($scope.data_detail);
        };
        $scope.showEchartsOne = function (data_detail) {
            if (data_detail == undefined) {
                data_detail = $scope.data;
            }
            $http({
                method: "post",
                url: "CPK/showEchartsBZByPos",
                data: data_detail
            }).then(function (response) {
                var x = cpkPosOne_option.xAxis[0].data;
                var y = cpkPosOne_option.series[0].data;
                cpkPosOne_option.series[0].itemStyle.normal.color = $scope.colorStr;
                x.splice(0, x.length);
                y.splice(0, y.length);
                angular.forEach(response.data, function (i, j) {
                    shift_id_name = i.shift_id_name == undefined ? "" : i.shift_id_name;
                    x.push(shift_id_name + "-" + i.pos_name);
                    y.push(i.avg);
                })
                cpkPosOne.setOption(cpkPosOne_option);
            });
        };
        $scope.page();
        $scope.showEchartsOne();


        cpkPosOne.on('click', function (data) {
            $scope.xName = data.name;
            $scope.modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'CPK/eTimeTwo.html',
                controllerAs: '$scope',
                controller: 'CPKPosTwo',
                backdrop: 'static',
                resolve: {
                    items: function () {
                        return $scope;

                    }
                }
            });
        });
    });
});
//