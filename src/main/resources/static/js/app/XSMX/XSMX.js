define(['echarts',
    'require',
    'bootstrap-slider'
], function (ec, require, bs) {
    var app = require('../app');
    var angular = require('angular');
    app.controller('XSMXController', function ($scope, $http, $uibModal) {
        $scope.check = []
        $scope.CF = {checkbox: [false, false, false, false, false, false, false, false]};
        $scope.selectGT = "t_gt_0";
        $scope.show = false;
        $scope.result = {};

        $scope.checkColName = function (index) {
            console.info($scope.CF.checkbox[index]);
            return $scope.CF.checkbox[index];
        }
        $scope.filter1 = function (i) {
            return i;
        }
        $scope.selectChange = function () {
            $http({
                url: "XSMX/colName/" + $scope.selectGT,
                method: "GET"
            }).then(function (res) {
                console.info(res.data);
                $scope.check = res.data;
                $scope.CF = {checkbox: []};
                angular.forEach($scope.check, function () {
                    $scope.CF.checkbox.push(false);
                })
            }, function () {

            });
        }
        $scope.sub = function () {
            console.info($scope.CF);

            if ($scope.CF.checkbox.filter($scope.filter1).length <= 1) {
                $uibModal.open({
                    animation: true,
                    size: "sm",
                    template: "<div class=\"modal-dialog\">请选择2个以上</div><button class='btn-info btn'ng-click='$close()'>关闭</button>",
                    backdrop: "static"
                });
                return;
            }
            var instance = $uibModal.open({
                animation: true,
                size: "sm",
                template: "<div class=\"modal-dialog\">计算中，请等待</div>",
                backdrop: "static"
            });
            $http({
                url: "XSMX/jisuan",
                method: "POST",
                data: {
                    colNames: function () {
                        var list = [];
                        angular.forEach($scope.CF.checkbox, function (item, index, t) {
                            if (item) {
                                list.push(item);
                            }
                        });
                        return list;
                    }(), tableName: $scope.selectGT
                }
            }).then(function (res) {
                $scope.result = res.data;
                $scope.result.Correlation = res.data.Correlation;
                $scope.result.PValue = res.data.PValue;

                // $scope.result1 = []
                // for(var i in $scope.result){
                //     var o = {};
                //     o[i] = $scope.result[i]
                //     $scope.result1.push(o)
                // }
                $scope.show = true;
                //
                // console.info($scope.result1);
                instance.close();
            }, function () {

            });
        }
        $scope.selectChange();
    });

});
//