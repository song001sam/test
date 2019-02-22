define(['../app',
    'angular'
], function (app, angular) {
    app.controller('headerController', function ($scope, $http, $uibModal) {
        $scope.init = function () {
            $scope.GXList = [
                {code: "AI_LG_LD_ORC", value: "转炉"},
                {code: "AI_LG_LF_ORC", value: "LF"},
                {code: "AI_LG_RH_ORC", value: "RH"}
            ]
            $scope.GZList = []
            $scope.cols = [];
            $scope.inCols = [];
            $scope.outCols = [];
            $scope.data = {};
            $scope.modelOptions = {
                debounce: {
                    default: 500,
                    blur: 250
                },
                getterSetter: true
            };
            $http({
                url: "XSMX/GZList",
                method: "GET"
            }).then(function (res) {
                $scope.GZList = res.data;
            });
        }

        //初始化
        $scope.GXChange = function () {
            $scope.$emit('GXChange', $scope.GX.code);
        }
        $scope.GZChange = function () {
            $scope.$emit('GZChange', $scope.GZ);
        }
        $scope.GGChange = function () {
            $scope.$emit('GGChange', $scope.GG);
        }
        //数组移除元素方法

        $scope.show = function () {
            $http({
                url: "XSMX/XGXFX",
                method: "post",
                data: {
                    tableName: $scope.GX.code,
                    colIn: $scope.inCols,
                    colOut: $scope.outCols
                }
            }).then(function (res) {
                $scope.data = res.data;
                $scope.showTable = true;
            }, function (err) {
                //错误代码
            });
        }
    }).filter('numFormat', function () { //可以注入依赖
        return function (num, digits) {
            return num.toFixed(digits);
        }
    });
});
//