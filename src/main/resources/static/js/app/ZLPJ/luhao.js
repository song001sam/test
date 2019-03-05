define(['echarts',
    'require'
], function (ec, require) {
    var app = require('../app');
    //var angular = require('angular');
    app.controller('ZLPJController', function ($scope, $http, $uibModal) {
        $scope.show = false;
        $scope.initShow = false;
        $scope.luhao = '';
        $scope.page = function () {
            var i = layer.load(0);
            $http({
                method: "post",
                url: "ZLPJ/queryInfoByLuHao/" + $scope.currentPage + "/5",
                data: {"luhao": $scope.luhao}
            }).then(function (response) {
                // console.info(response.data);
                $scope.totalItems = response.data.total;
                $scope.list = response.data.list;
                layer.close(i);
                $scope.show = true;
            }, function (response) {
                layer.close(i);
            });
        }

        $scope.query = function () {
            if ($scope.luhao == '') {
                $scope.list = [];
                $scope.show = false;
                $scope.initShow = false;
                alert("请输入炉号信息");
            } else {
                $scope.initShow = false;
                $scope.currentPage = 1;
                $scope.page();
            }
        }
        $scope.initCurrentPage = 1;
        $scope.initPage = function () {
            var i = layer.load();
            $http({
                method: "post",
                url: "ZLPJ/queryAllInfoByLuHao/" + $scope.initCurrentPage + "/5",
            }).then(function (response) {
                $scope.initTotalItems = response.data.total;
                $scope.initList = response.data.list;
                layer.close(i);
                $scope.initShow = true;
            }, function (response) {
                layer.close(i);
            });
        }
    })
})