//var app = angular.module('myApp', ['ui.router','oc.lazyLoad','ui.bootstrap','ngRoute','ngTouch', 'ngAnimate', 'ngSanitize']);
define(function (require) {
    var app = require('./app');
    app.controller('indexController', function ($scope, $http, $state) {
        $scope.status = {
            open: []
        };
        $http({
            method: "POST",
            url: "public/getUser"

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
                contentList: [
                    {
                        content: "模型管理", url: "index.MXGL", contentList: [
                            {content: "模型管理", url: "index.MXGL"},
                            {content: "模型管理", url: "index.MXGL"}
                        ]
                    },
                    {
                        content: "生产数据统计分析", url: "index.TJFX"
                    },
                    {
                        content: "新钢种成分分析",
                        url: "index.CFFX"
                    },
                    {
                        content: "单工序分析",
                        url: "index.XSMX"
                    }
                ], content: "智能分析"
            },
            {contentList: [{content: "用户管理", url: "index.a"}, {content: "系统设置", url: "b({id:'aa'})"}], content: "系统管理"},
        ]

    })
});