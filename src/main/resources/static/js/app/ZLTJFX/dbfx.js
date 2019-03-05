define(['echarts',
    'require',
    'bootstrap-slider',
    '../header/header'
], function (ec, require, bs) {
    var app = require('../app');

    app.controller('dbfxController', function ($scope, $http, Excel, $timeout, $uibModal) {
        var angular = require('angular');
        //导出excel
        $scope.exportToExcel = function (tableId) { // ex: '#my-table'
            if ($scope.downCols.length < 1) {
                layer.alert('[ 对比字段 ] 至少选择一个');
                return;
            }
            if ($scope.colThree2.length != 2) {
                layer.alert('[ 入选对比类别 ] 请选择两个');
                return;
            }
            var fileName = "对比分析结果导出";
            $scope.exportHref = Excel.tableToExcel(tableId, 'sheet1');
            //$timeout(function(){location.href=$scope.exportHref;},100); // trigger download
            $timeout(function () {
                document.getElementById("dlink").href = $scope.exportHref
            }, 200); // trigger download
            document.getElementById("dlink").download = fileName;//这里是关键所在,当点击之后,设置a标签的属性,这样就可以更改标签的标题了
            $timeout(function () {
                document.getElementById("dlink").click()
            }, 2000); // trigger download
        }
        $scope.init = function () {

            $scope.GWList = [
                {code: "AI_LG_LD_ORC", value: "转炉"},
                {code: "AI_LG_LF_ORC", value: "LF"},
                {code: "AI_LG_RH_ORC", value: "RH"}
            ]
            $scope.TypeList = [
                {code: "0", value: "连续"},
                {code: "1", value: "离散"}
            ];
            $scope.cols = [];
            $scope.upCols = [];
            $scope.downCols = [];
            $scope.colTables = [];
            $scope.colThree1 = [];//第三步-分类变量组合列表
            $scope.colThree2 = [];//第三步-入选对比类别
            $scope.jisuanShow = false;
            $scope.colList = [];//分类统计对比结果-表头
            $scope.rowList = [];//分类统计对比结果-data
            $scope.KZX = 0;
        };
        $scope.$on('GXChange', function (e, m) {
            console.info(e)
            $scope.GX = m;
            $http({
                url: "XSMX/colNameAndComment/" + m,
                method: "GET"

            }).then(function (res) {
                $scope.cols = [];
                var i = 0;
                angular.forEach(res.data, function (value, key) {
                    i++;
                    $scope.cols.push({"key": key, "value": value, "sort": i});
                })
            }, function () {

            });


        });
        $scope.$on('GZChange', function (e, m) {
            $scope.GZ = m;
        });
        $scope.chkTr = function (col) {
            $scope.focus = col;
        }
        $scope.chkCol = function (col) {
            return col == $scope.focus;
        }
        $scope.initSelect = function (index) {
            var dataType = $scope.colTables[index].dataType;
            if (dataType == null || dataType == undefined) {
                dataType = $scope.TypeList[0];
                $scope.colTables[index].dataType = $scope.TypeList[0];
            }
            for (var i = 0; i < $scope.TypeList.length; i++) {
                if ($scope.TypeList[i].code === dataType.code) {
                    return $scope.TypeList[i].value;
                }
            }
            return $scope.TypeList[0].value;
        }
        //生成分类组合
        $scope.getFLZH = function () {
            var ii = layer.load();
            $scope.colList = [];
            $scope.retTables = [];

            //传入后台计算具体每个矩阵中的值
            $http({
                url: "Zltjfx/getMatrixDataNoSelect/" + $scope.GX,
                method: "POST",
                data: $scope.colTables
            }).then(function (res) {
                $scope.colThree1 = res.data;
                $scope.colThree2 = [];
                /*$scope.echartsshow();*/
                layer.close(ii);
            }, function () {
                layer.close(ii);
            });
        };
        //点击分析
        $scope.fenxi = function () {
            //获取对比字段
            if ($scope.downCols.length < 1) {
                layer.alert('[ 对比字段 ] 至少选择一个');
                return;
            }
            if ($scope.colThree2.length != 2) {
                layer.alert('[ 入选对比类别 ] 请选择两个');
                return;
            }
            $scope.jisuanShow = true;
            $scope.colList = [];
            $scope.retTables = [];
            var ii = layer.load();
            //传入后台计算具体每个矩阵中的值
            $http({
                url: "Zltjfx/getDBXFData/" + $scope.GX + "/" + $scope.GZ,
                method: "POST",
                data: {"colThree2Lists": $scope.colThree2, "duibiList": $scope.downCols}
            }).then(function (res) {
                $scope.echartList1 = res.data.avgBar;
                $scope.echartList2x = res.data.echartList2x;
                $scope.echartList2y = res.data.echartList2y;
                $scope.echartsshow();
                layer.close(ii);
            }, function () {
                layer.close(ii);
            });
        };
        //查询字段-中的最大值最小值
        $scope.getColDataMax = function (val, typeCode) {
            var ii = layer.load();
            $http({
                url: "Zltjfx/getColDataMax/",
                method: "POST",
                data: {colKey: val.key, tableName: $scope.GX, GZ: $scope.GZ}
            }).then(function (res) {
                $scope.colTables.push({
                    "id": new Date().getTime(),
                    "key": val.key,
                    "value": val.value,
                    "min": res.data.min.trim(),
                    "max": res.data.max.trim(),
                    "sort": val.sort,
                    "type": typeCode
                });

                $scope.colTables.sort((x, y) => x.sort - y.sort);
                layer.close(ii);
            }, function () {
                layer.close(ii);
            });
        };
        //查询字段-中的最大值最小值
        $scope.toUpdate = function (index) {
            $scope.colTables[index].status = "update";
        };
        $scope.save = function (index) {
            $scope.colTables[index].status = "text";
        };

        //复制一行
        $scope.copyRow = function () {
            if ($scope.focus == undefined) {
                return;
            }
            for (var i = 0; i < $scope.colTables.length; i++) {
                if ($scope.colTables[i] === $scope.focus) {
                    $scope.colTables.push({
                        "id": new Date().getTime(),
                        "key": $scope.focus.key,
                        "value": $scope.focus.value,
                        "min": $scope.focus.min,
                        "max": $scope.focus.max,
                        "type": $scope.focus.type,
                        "lsdata": $scope.focus.lsdata,
                        "dataType": $scope.focus.dataType,
                        "sort": $scope.focus.sort,
                        "status": "update"
                    });
                    break;
                }
            }
            $scope.colTables.sort((x, y) => x.sort - y.sort);
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
        //集合中是否存在
        $scope.isExist = function (arr, val) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] === val) {
                    return true;
                }
            }
            return false;
        };
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
        $scope.removeByKey = function (arr, val) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].key === val.key) {
                    arr.splice(i, 1);
                    $scope.removeByKey(arr, val);//递归删除
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
            //是否选中对应集合
            if (!$scope.isExist($scope.cols, $scope.focus)) {
                return;
            }
            //查询该字段的最大最小值
            $scope.getColDataMax($scope.focus, "fenlei");
            //添加
            $scope.removeByValue($scope.cols, $scope.focus);
            $scope.upCols.push($scope.focus);
            $scope.upCols.sort((x, y) => x.sort - y.sort);
            $scope.focus = undefined;
        };
        $scope.delUp = function () {
            if ($scope.focus == undefined) {
                return;
            }
            //是否选中对应集合
            if (!$scope.isExist($scope.upCols, $scope.focus)) {
                return;
            }
            $scope.removeByValue($scope.upCols, $scope.focus);
            $scope.removeByKey($scope.colTables, $scope.focus);
            $scope.addByValue($scope.cols, $scope.focus);
            $scope.upCols.sort((x, y) => x.sort - y.sort);
            $scope.focus = undefined;
        }
        $scope.addDown = function () {
            if ($scope.focus == undefined) {
                return;
            }
            //是否选中对应集合
            if (!$scope.isExist($scope.cols, $scope.focus)) {
                return;
            }
            //添加
            $scope.removeByValue($scope.cols, $scope.focus);
            $scope.addByValue($scope.downCols, $scope.focus);
            $scope.downCols.sort((x, y) => x.sort - y.sort);
            $scope.focus = undefined;
        };
        $scope.delDown = function () {
            if ($scope.focus == undefined) {
                return;
            }
            //是否选中对应集合
            if (!$scope.isExist($scope.downCols, $scope.focus)) {
                return;
            }
            $scope.removeByValue($scope.downCols, $scope.focus);
            $scope.cols.push($scope.focus);
            $scope.cols.sort((x, y) => x.sort - y.sort);
            $scope.focus = undefined;
        };
        $scope.addThree = function () {
            if ($scope.focus == undefined) {
                return;
            }
            if ($scope.colThree2.length == 2) {
                return;
            }
            //是否选中对应集合
            if (!$scope.isExist($scope.colThree1, $scope.focus)) {
                return;
            }
            //添加
            $scope.removeByValue($scope.colThree1, $scope.focus);
            $scope.addByValue($scope.colThree2, $scope.focus);
            $scope.colThree2.sort((x, y) => x.sort - y.sort);
            $scope.focus = undefined;
        }
        $scope.delThree = function () {
            if ($scope.focus == undefined) {
                return;
            }
            //是否选中对应集合
            if (!$scope.isExist($scope.colThree2, $scope.focus)) {
                return;
            }
            $scope.removeByValue($scope.colThree2, $scope.focus);
            $scope.addByValue($scope.colThree1, $scope.focus);
            $scope.colThree1.sort((x, y) => x.sort - y.sort);
            $scope.focus = undefined;
        };
        $scope.echartsshow = function () {
            option1 = {
                legend: {},
                tooltip: {},
                dataset: {
                    source: $scope.echartList1
                },
                xAxis: {type: 'category'},
                yAxis: {},
                // Declare several bar series, each will be mapped
                // to a column of dataset.source by default.
                series: [
                    {
                        type: 'bar',
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        }
                    },
                    {
                        type: 'bar',
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        }
                    }
                ]
            };
            option2 = {
                xAxis: {
                    type: 'category',
                    data: $scope.echartList2x
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: $scope.echartList2y,
                    type: 'bar',
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    }
                }]
            };

            if (!$scope.echarts1) {
                $scope.echarts1 = ec.init(document.getElementById('echarts1'));
            }
            $scope.echarts1.setOption(option1, true);

            if (!$scope.echarts2) {
                $scope.echarts2 = ec.init(document.getElementById('echarts2'));
            }
            $scope.echarts2.setOption(option2, true);
        };
        $scope.toChoose = function (index) {
            var modalInstance = $uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'ZLTJFX/select.html',
                controller: 'fltj_selectCtrl',
                resolve: {
                    data: function () {
                        return {"index": index, "colKey": $scope.colTables[index].key, "tableName": $scope.GW.code}
                    },
                    $pscope: $scope
                }
            });
        };
    }).controller('fltj_selectCtrl', function ($scope, $http, $uibModalInstance, data, $pscope) {
        $scope.cols = [];
        $scope.indexParam = data.index;
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
            $pscope.colTables[$scope.indexParam].lsdata = $scope.selectedCols
            $scope.close();
        };
        $scope.close = function () {
            $uibModalInstance.close();
        }
    });

});
//