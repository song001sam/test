define(function (require) {
    var app = require('../app');
    app.controller('GYBZ_zhazhiController', function ($scope, $http, $uibModal, $log) {
        $scope.list = [];
        $scope.totalItems = 0;
        $scope.currentPage = 1;
        var $ctrl = this;
        $scope.data = {
            "line": $scope.line,
            "stl_grd_cd": $scope.stl_grd_cd
        };
        $scope.page = function () {
            var ii = layer.load();
            $http({
                method: "POST",
                url: "Gybz/zhazhiList/" + $scope.currentPage + "/10",
                data: $scope.data
            }).then(function (response) {
                $scope.totalItems = response.data.total;
                $scope.list = response.data.list;
                layer.close(ii);
            }, function (response) {
                layer.close(ii);
            });
        }
        $scope.page();
        $scope.doSearch = function () {
            $scope.data = {
                "line": $scope.line,
                "stl_grd_cd": $scope.stl_grd_cd
            }
            $scope.page();
        };
        $scope.doClear = function () {
            $scope.line = null;
            $scope.stl_grd_cd = null;
            //$scope.doSearch();
        };
        //点击选中行
        $scope.rowClick = function (id) {
            $scope.radioModel = id + "";
        }
    });
});
//