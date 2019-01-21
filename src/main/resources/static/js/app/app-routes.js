define(function (require) {
    var app = require('./app');
    // require('app/indexController')
    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/index');
        $stateProvider.state('index', {
            url: '/index',
            templateUrl: function () {
                return 'index1.html';
            },
            controllerUrl: 'app/indexController',
            controller: 'indexController'
        }).state('index.MXGL', {
            url: '/MXGL',//ui-sref中的接受参数
            templateUrl: function () {
                return 'MXGL/list.html';
            },
            controllerUrl: 'app/MXGL/MXGL',
            controller: 'MXGLController'
        })
            .state('index.TJFX', {
                url: '/TJFX',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'TJFX/list.html';
                },
                controllerUrl: 'app/TJFX/TJFX',
                controller: 'TJFXController'
            })
            .state('index.CFFX', {
                url: '/CFFX',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'CFFX/list.html';
                },
                controllerUrl: 'app/CFFX/CFFX',
                controller: 'CFFXController'
            })
            .state('index.XSMX', {
                url: '/XSMX',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'XSMX/list.html';
                },
                controllerUrl: 'app/XSMX/XSMX',
                controller: 'XSMXController'
            })
            .state('index.a', {
                url: '/a',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'a.html';
                },
                controllerUrl: 'app/a',
                controller: 'aController'
            })
    }]);
});