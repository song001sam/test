define(function (require) {
    var app = require('../../app');
    app.controller('LF1HeaderController', function ($scope, $interval, $http, $state) {

        console.info("jinru");

        function queryInfo() {
            //一号工位
            $http({
                method: "POST",
                url: "SSJK/queryLFHeaderInfo",
                data: {lzNum: "1", pos: "1"}
            }).then(function (response) {
                // console.info("success");
                $scope.luhao = response.data.luhao;
                $scope.gangzhong = response.data.gangzhong;
                $scope.gangshuizhongliang = response.data.gangshuizhongliang;
                $scope.gangzhazhongliang = response.data.gangzhazhongliang;
                $scope.lucikaishishijian = response.data.lucikaishishijian;
                //$scope.target = response.data.target;
                // $scope.$broadcast("test", $scope.target);
                //$scope.$broadcast("to-child", $scope.target);
            }, function (response) {
            });
            //二号工位
            $http({
                method: "POST",
                url: "SSJK/queryLFHeaderInfo",
                data: {lzNum: "1", pos: "2"}
            }).then(function (response) {
                // console.info("success");
                $scope.luhao2 = response.data.luhao;
                $scope.gangzhong2 = response.data.gangzhong;
                $scope.gangshuizhongliang2 = response.data.gangshuizhongliang;
                $scope.gangzhazhongliang2 = response.data.gangzhazhongliang;
                $scope.lucikaishishijian2 = response.data.lucikaishishijian;
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
