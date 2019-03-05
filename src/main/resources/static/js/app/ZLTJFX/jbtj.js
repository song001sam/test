define(['echarts',
    'require',
    'bootstrap-slider',
    '../header/header'
], function (ec, require, bs) {
    var app = require('../app');

    app.controller('jbtjController', function ($scope, $http, Excel, $timeout, $uibModal) {
        var angular = require('angular');

        //导出excel
        $scope.exportToExcel = function (tableId) { // ex: '#my-table'
            $scope.exportHref = Excel.tableToExcel(tableId, '基本生产数据统计信息');
            $timeout(function () {
                location.href = $scope.exportHref;
            }, 100); // trigger download
        }

        $scope.init = function () {
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
            $scope.GWList = [
                {code: "AI_LG_LD_ORC", value: "转炉"},
                {code: "AI_LG_LF_ORC", value: "LF"},
                {code: "AI_LG_RH_ORC", value: "RH"}
            ]
            $scope.BLTypeList = [
                {code: "1", value: "连续"},
                {code: "2", value: "离散"}
            ]
            $scope.cols = [];
            $scope.targetCols = [];
            $scope.HXZDCols = [];
            $scope.colTables = [];
            $scope.countList = [];
        }
        $scope.$on('GXChange', function (e, m) {
            console.info(e)
            $scope.GX = m;
            $http({
                url: "XSMX/colNameAndComment/" + m,
                method: "GET"

            }).then(function (res) {
//            	$scope.cols=[];
//                let i = 0;
//                angular.forEach(res.data, function (value, key) {
//                    i++;
//                    $scope.cols.push({"key": key, "value": value, "sort": i});
//                })
                $scope.cols = [];
                angular.forEach(res.data, function (value, key) {
                    $scope.cols.push({"key": key, "value": value});
                })
                $scope.cols.sort(function (x, y) {
                    return x.key.localeCompare(y.key);
                });
                let i = 0;
                angular.forEach($scope.cols, function (value, key) {
                    i++;
                    value.sort = i;
                })
            }, function () {

            });


        });
        $scope.$on('GZChange', function (e, m) {
            $scope.GZ = m
        });
        $scope.chkTr = function (col) {
            $scope.focus = col;
        }
        $scope.chkCol = function (col) {
            return col == $scope.focus;
        }
        $scope.removeByArr = function (arr, targetArr) {
            for (var i = 0; i < arr.length; i++) {
                targetArr.push(arr[i]);
            }
            targetArr.sort((x, y) => x.sort - y.sort);
        };
        $scope.removeByValue = function (arr, val) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] === val) {
                    arr.splice(i, 1);
                    break;
                }
            }
        };
        $scope.addByValue = function (arr, val) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] === val) {
                    return;
                }
            }
            arr.push(val);
        };
        $scope.addUp = function () {
            if ($scope.focus == undefined) {
                return;
            }
            //先要将之前选择的覆盖掉
            //$scope.removeByArr($scope.targetCols,$scope.cols);
            //$scope.targetCols=[];
            //添加
            $scope.removeByValue($scope.cols, $scope.focus);
            $scope.targetCols.push($scope.focus);
            $scope.targetCols.sort((x, y) => x.sort - y.sort);
            $scope.focus = undefined;
        }
        $scope.delUp = function () {
            if ($scope.focus == undefined) {
                return;
            }
            $scope.removeByValue($scope.targetCols, $scope.focus);
            $scope.addByValue($scope.cols, $scope.focus);
            $scope.cols.sort((x, y) => x.sort - y.sort);
            $scope.focus = undefined;
        }

        $scope.toUpdate = function (index) {
            $scope.colTables[index].status = "update";
        };
        $scope.save = function (index) {
            $scope.colTables[index].status = "text";
        };
        $scope.chkTr = function (col) {
            $scope.focus = col;
        }
        $scope.chkCol = function (col) {
            return col == $scope.focus;
        }
        //复制一行
        $scope.copyRow = function () {
            if ($scope.focus == undefined) {
                return;
            }
            for (var i = 0; i < $scope.colTables.length; i++) {
                if ($scope.colTables[i] === $scope.focus) {
                    if ($scope.BLType.code == 1) {
                        $scope.colTables.push({
                            "name": $scope.focus.name,
                            "zmin": $scope.focus.zmin,
                            "zmax": $scope.focus.zmax,
                            "qmin": $scope.focus.qmin,
                            "qmax": $scope.focus.qmax,
                            "status": "update"
                        });
                    } else {
                        $scope.colTables.push({
                            "name": $scope.focus.name,
                            "zscope": $scope.focus.zscope,
                            "qscope": $scope.focus.qscope,
                            "status": "update"
                        });
                    }
                    break;
                }
            }
        };
        //删除一行
        $scope.delRow = function () {
            if ($scope.focus == undefined) {
                return;
            }
            for (var i = 0; i < $scope.colTables.length; i++) {
                if ($scope.colTables[i] === $scope.focus) {
                    $scope.colTables.splice(i, 1);
                    break;
                }
            }
        };
        $scope.tjjsChange = function (tjjs) {
            if (tjjs) {
                $scope.HXZDCols = $scope.targetCols;
                $scope.HXZD = $scope.targetCols[0];
                if ($scope.BLType.code == 1) {
                    $scope.colTables.push({name: $scope.HXZD.key, zmin: 0, zmax: 10, qmin: 0, qmax: 10});
                } else {
                    $scope.colTables.push({name: $scope.HXZD.key, zscope: 0, qscope: 10});
                }
            } else {
                $scope.HXZDCols = [];
            }
        }

        $scope.HXChange = function (hxzd) {
            $scope.colTables = [];
            if (hxzd != null) {
                if ($scope.BLType.code == 1) {
                    $scope.colTables.push({name: hxzd.key, zmin: 0, zmax: 10, qmin: 0, qmax: 10});
                } else {
                    $scope.colTables.push({name: hxzd.key, zscope: 0, qscope: 10});
                }
            }
        }
        $scope.BLTypeChange = function (type) {
            $scope.colTables = [];
            if (type.code == 1) {
                $scope.colTables.push({name: $scope.HXZD.key, zmin: 0, zmax: 10, qmin: 0, qmax: 10});
            } else {
                $scope.colTables.push({name: $scope.HXZD.key, zscope: 0, qscope: 10});
            }
        }

        $scope.dataCount = function () {
            if ($scope.targetCols.length < 1) {
                $uibModal.open({
                    animation: true,
                    size: "sm",
                    template: "<div class=\"modal-dialog\">请选择分析变量</div>"
                });
                return;
            }
            $http({
                url: "Zltjfx/jbtj/getDataCount",
                method: "POST",
                data: {targetCols: $scope.targetCols, tableName: $scope.GX, GZ: $scope.GZ}
            }).then(function (res) {
                $scope.countList = res.data;
            }, function () {

            });

            if ($scope.tjjs) {

                var data;
                var url;

                if ($scope.BLType.code == 1) {
                    url = "Zltjfx/jbtj/getMap1";
                    data = {
                        tableName: $scope.GX,
                        colName: $scope.HXZD.key,
                        type: $scope.BLType.code,
                        scope: $scope.colTables,
                        GZ: $scope.GZ
                    };
                } else {
                    url = "Zltjfx/jbtj/getMap2";
                    data = {
                        tableName: $scope.GX,
                        colName: $scope.HXZD.key,
                        type: $scope.BLType.code,
                        scope: $scope.colTables,
                        GZ: $scope.GZ
                    };
                }

                $http({
                    url: url,
                    method: "POST",
                    data: data
                }).then(function (res) {
                    $scope.mapData = res.data;
                    $scope.xAxisList = [];
                    $scope.yAxisList = [];
                    $scope.nameList = [];
                    angular.forEach($scope.mapData, function (item, n) {
                        $scope.xAxisList.push(item.xAxis);
                        $scope.yAxisList.push(item.yAxis);
                    });
                    console.info($scope.echarts1);
                    if (!$scope.echarts1) {
                        $scope.echarts1 = ec.init(document.getElementById('echarts1'));
                    }
                    var option = {

                        color: ['#3398DB'],
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                            },
                            formatter: '{c}%'
                        },
                        toolbox: {
                            feature: {
                                dataView: {readOnly: false},
                                restore: {},
                                saveAsImage: {}
                            }
                        },
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        xAxis: [
                            {
                                type: 'category',
                                data: $scope.xAxisList,
                                axisLabel: {
                                    interval: 0,
                                    rotate: 40
                                }
                            }
                        ],
                        yAxis: [
                            {
                                type: 'value'
                            }
                        ],
                        series: [
                            {
                                name: $scope.HXZD.key,
                                type: 'bar',
                                barWidth: '60%',
                                data: $scope.yAxisList,

                            }
                        ]

                    };
                    $scope.echarts1.setOption(option, true);

                }, function () {

                });

            }

        }

        $scope.toChoose = function (index, sp) {
            var modalInstance = $uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'ZLTJFX/select.html',
                controller: 'fltj_selectCtrl',
                resolve: {
                    data: function () {
                        return {
                            "index": index,
                            "sp": sp,
                            "colKey": $scope.colTables[index].name,
                            "tableName": $scope.GX
                        }
                    },
                    $pscope: $scope
                }
            });
        };
    }).controller('fltj_selectCtrl', function ($scope, $http, $uibModalInstance, data, $pscope) {
        $scope.cols = [];
        $scope.indexParam = data.index;
        $scope.sp = data.sp;
        $http({
            method: "POST",
            url: "Zltjfx/getSelectData/",
            data: {
                "colKey": data.colKey,
                "tableName": data.tableName
            }
        }).then(function (response) {
            for (var i = 0; i < response.data.length; i++) {
                $scope.cols.push({"value": response.data[i], "selected": "No"});
            }
            //$scope.totalItems = response.data.total;
            //$scope.list = response.data.list;
        }, function (response) {
        });
        $scope.ok = function () {
            $scope.selectedCols = "";
            for (var i = 0; i < $scope.cols.length; i++) {
                if ("Yes" == $scope.cols[i].selected) {
                    if ("" == $scope.selectedCols) {
                        $scope.selectedCols = $scope.cols[i].value.trim();
                    } else {
                        $scope.selectedCols = $scope.selectedCols + "," + $scope.cols[i].value.trim();
                    }

                }
            }
            if ($scope.sp == 'zscope') {
                $pscope.colTables[$scope.indexParam].zscope = $scope.selectedCols
            } else {
                $pscope.colTables[$scope.indexParam].qscope = $scope.selectedCols
            }
            $scope.close();
        };
        $scope.close = function () {
            $uibModalInstance.close();
        }
    });

});
//