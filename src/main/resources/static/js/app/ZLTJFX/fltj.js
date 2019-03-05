define(['echarts',
    'require',
    'bootstrap-slider',
    '../header/header'
], function (ec, require, bs) {
    var app = require('../app');

    app.controller('fltjController', function ($scope, $http, Excel, $timeout, $uibModal) {
        var angular = require('angular');
        //导出excel
        $scope.exportToExcel = function (tableId) { // ex: '#my-table'
            //获取统计变量分组
            if (!$scope.downCols.length > 0) {
                layer.alert('请选择 [ 统计变量 ] ');
                return;
            }
            var fileName = "分类对比统计导出";
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
            $scope.GZ = m
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
        //点击计算
        $scope.jisuan = function () {
            //获取统计变量分组
            if (!$scope.downCols.length > 0) {
                layer.alert('请选择 [ 统计变量 ] ');
                return;
            }
            $scope.colList = [];
            $scope.retTables = [];
            var ii = layer.load();//开启进度条
            $scope.jisuanShow = true;
            for (var i = 0; i < $scope.colTables.length; i++) {
                if ($scope.colTables[i].key === $scope.downCols[0].key) {
                    if ("0" == $scope.colTables[i].dataType.code) {//连续
                        $scope.colList.push({
                            "id": new Date().getTime(),
                            "key": $scope.colTables[i].key,
                            "value": $scope.colTables[i].value,
                            "text": $scope.colTables[i].min + "<=" + $scope.colTables[i].value + "<=" + $scope.colTables[i].max
                        });
                    } else {
                        var list = $scope.colTables[i].lsdata.split(",");
                        for (var j = 0; j < list.length; j++) {
                            $scope.colList.push({
                                "id": new Date().getTime(),
                                "key": $scope.colTables[i].key,
                                "value": $scope.colTables[i].value,
                                "text": $scope.colTables[i].value + "=" + list[j]
                            });
                        }

                    }

                }
            }
            //传入后台计算具体每个矩阵中的值
            $http({
                url: "Zltjfx/getMatrixData/" + $scope.GX + "/" + $scope.GZ,
                method: "POST",
                data: $scope.colTables
            }).then(function (res) {
                $scope.retTables = res.data;

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
                    type: typeCode
                });
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
        //集合中是否存在
        $scope.isExist = function (arr, val) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] === val) {
                    return true;
                }
            }
            return false;
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
            $scope.addByValue($scope.upCols, $scope.focus);
            $scope.upCols.sort((x, y) => x.sort - y.sort);
            $scope.focus = undefined;

        }
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
            //删除colTables之前的统计变量
            if ($scope.downCols.length > 0) {
                $scope.removeByKey($scope.colTables, $scope.downCols[0]);
            }
            //先要将之前选择的覆盖掉
            $scope.removeByArr($scope.downCols, $scope.cols);
            $scope.downCols = [];

            //查询该字段的最大最小值
            $scope.getColDataMax($scope.focus, "tongji");
            //添加
            $scope.removeByValue($scope.cols, $scope.focus);
            $scope.addByValue($scope.downCols, $scope.focus);
            //$scope.downCols.push($scope.focus);
            $scope.downCols.sort((x, y) => x.sort - y.sort);
            $scope.focus = undefined;
        }
        $scope.delDown = function () {
            if ($scope.focus == undefined) {
                return;
            }
            //是否选中对应集合
            if (!$scope.isExist($scope.downCols, $scope.focus)) {
                return;
            }
            $scope.removeByValue($scope.downCols, $scope.focus);
            $scope.removeByKey($scope.colTables, $scope.focus);
            $scope.cols.push($scope.focus);
            $scope.cols.sort((x, y) => x.sort - y.sort);
            $scope.focus = undefined;

        };
        $scope.method1 = function (tableid) {
            var curTbl = document.getElementById(tableid);
            var oXL = new ActiveXObject("Excel.Application");
            var oWB = oXL.Workbooks.Add();
            var oSheet = oWB.ActiveSheet;
            var sel = document.body.createTextRange();
            sel.moveToElementText(curTbl);
            sel.select();
            sel.execCommand("Copy");
            oSheet.Paste();
            oXL.Visible = true;
        };
        $scope.echartsshow = function () {
            $scope.xData = [];
            $scope.yData = [];
            var valueIndex = $scope.colList[0].text;
            if ($scope.selectedName != null && $scope.selectedName != undefined) {
                valueIndex = $scope.selectedName.text;
            } else {
                $scope.selectedName = $scope.colList[0];
            }
            for (var i = 0; i < $scope.retTables.length; i++) {
                var temp = $scope.retTables[i].colsValue[valueIndex];
                $scope.yData.push(temp);
                $scope.xData.push(i + 1);
            }
            if ($scope.upCols.length < 1) {
                $uibModal.open({
                    animation: true,
                    size: "sm",
                    template: "<div class=\"modal-dialog\">请选择唯一一个变量</div>"
                });
                return;
            }
            ;
            option = {
                color: ['#3398DB'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
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
                        data: $scope.xData,
                        axisTick: {
                            alignWithLabel: true
                        },
                        axisLabel: {
                            formatter: '序号 {value}'
                        },
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {

                        name: $scope.selectedName.text,
                        type: 'bar',
                        barWidth: '60%',
                        data: $scope.yData
                    }
                ]
            };
            if (!$scope.echarts1) {
                $scope.echarts1 = ec.init(document.getElementById('echarts1'));
            }
            $scope.echarts1.setOption(option, true);
        };
        $scope.toChoose = function (index) {
            var modalInstance = $uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'ZLTJFX/select.html',
                controller: 'fltj_selectCtrl',
                resolve: {
                    data: function () {
                        return {"index": index, "colKey": $scope.colTables[index].key, "tableName": $scope.GX}
                    },
                    $pscope: $scope
                }
            });
            // modalInstance.result.then(function (selectedItem) {
            //     $ctrl.selected = selectedItem;
            // }, function () {
            //     $log.info('Modal dismissed at: ' + new Date());
            // });
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