//var app = angular.module('myApp', ['ui.router','oc.lazyLoad','ui.bootstrap','ngRoute','ngTouch', 'ngAnimate', 'ngSanitize']);
define(function (require) {
    var app = require('./app');
    app.controller('indexController', function ($scope, $http, $state) {
        $http({
            method: "POST",
            url: "/public/getUser"

        }).then(function (response) {
            $scope.userName = response.data.username
        }, function (response) {

        });
        $scope.check = function (index) {
            if (index == 0)
                return true;
            else
                return false;
        };
        $scope.groups = [
            {
                list: [{content: "模型管理", url: "index.MXGL"}, {content: "生产数据统计分析", url: "index.TJFX"}, {
                    content: "新钢种成分分析",
                    url: "index.CFFX"
                }], title: "智能分析"
            },
            {list: [{content: "123", url: "a"}, {content: "456", url: "b({id:'aa'})"}], title: "系统管理"},
        ]

    }).controller("aController", function ($scope, $route) {
        $scope.hello = "hello,a!";
    })
        .controller("bController", function ($scope, $route, $stateParams) {
            alert($stateParams.id);
            $scope.hello = "hello,b!";
        });
});