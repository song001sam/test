define(function (require) {
    var app = require('../app');
    app.controller('GYBZ_xingnengController', function ($scope, $http, $uibModal, $log) {
        $scope.list = [];
        $scope.totalItems = 0;
        $scope.currentPage = 1;
        var $ctrl = this;
        $scope.data = {
            "std_spec": $scope.std_spec,
            "stl_grd_cd": $scope.stl_grd_cd
        };
        $scope.page = function () {
            var ii = layer.load();
            $http({
                method: "POST",
                url: "Gybz/xingnengList/" + $scope.currentPage + "/10",
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
                "std_spec": $scope.std_spec,
                "stl_grd_cd": $scope.stl_grd_cd
            }
            $scope.page();
        };
        $scope.doClear = function () {
            $scope.std_spec = null;
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