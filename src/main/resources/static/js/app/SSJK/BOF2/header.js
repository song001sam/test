define(function (require) {
    var app = require('../../app');
    app.controller('BOF2HeaderController', function ($scope, $interval, $http, $state) {

        console.info("jinru");

        function queryInfo() {
            $http({
                method: "POST",
                url: "SSJK/queryBOFHeaderInfo",
                data: {lzNum: "2"}
            }).then(function (response) {
                // console.info("success");
                $scope.luhao = response.data.luhao;
                $scope.gangzhong = response.data.gangzhong;
                $scope.lucikaishishijian = response.data.lucikaishishijian;
                //$scope.target = response.data.target;
                // $scope.$broadcast("test", $scope.target);
                //$scope.$broadcast("to-child", $scope.target);
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
