define(function (require) {
    var app = require('../app');
    app.controller('GYBZ_lianzhuSub2Controller', function ($scope, $http, $uibModal, $log) {
        $scope.list = [];
        $scope.totalItems = 0;
        $scope.currentPage = 1;
        var $ctrl = this;
        $scope.data = {
            "fmatcode": $scope.fmatcode,
            "cast_no": $scope.cast_no
        };
        $scope.page = function () {
            var ii = layer.load();
            $http({
                method: "POST",
                url: "Gybz/lianzhuSub2List/" + $scope.currentPage + "/10",
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
                "fmatcode": $scope.fmatcode,
                "cast_no": $scope.cast_no
            }
            $scope.page();
        };
        $scope.doClear = function () {
            $scope.fmatcode = null;
            $scope.cast_no = null;
            //$scope.doSearch();
        };
        //点击选中行
        $scope.rowClick = function (id) {
            $scope.radioModel = id + "";
        }
    });
});
//