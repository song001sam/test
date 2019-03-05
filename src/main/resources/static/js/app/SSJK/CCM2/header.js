define(function (require) {
    var app = require('../../app');
    app.controller('CCM2HeaderController', function ($scope, $interval, $http, $state) {

        console.info("jinru");
        // $scope.wanghaodong = "wanghaodong";
        // console.info($scope);
        // $scope.$broadcast("to-child", "12345678");
        function queryInfo() {
            $http({
                method: "POST",
                url: "SSJK/queryCCMHeaderInfo",
                data: {lzNum: "2"}
            }).then(function (response) {
                // console.info("success");
                $scope.luhao = response.data.luhao;
                $scope.gangzhong = response.data.gangzhong;
                $scope.duanmian = response.data.duanmian;
                $scope.target = response.data.target;
                // $scope.$broadcast("test", $scope.target);
                $scope.$broadcast("to-child", $scope.target);
            }, function (response) {
            });
        }

        queryInfo();
        $interval(function () {//定时器
            // console.info("interval");
            queryInfo();
        }, 15000);

    })
})
