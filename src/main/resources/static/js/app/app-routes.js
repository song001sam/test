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
        }).state('index.GCGL', {
            url: '/GCGL',//ui-sref中的接受参数
            templateUrl: function () {
                return 'GCGL/list.html';
            },
            controllerUrl: 'app/GCGL/GCGL',
            controller: 'GCGLController'
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
    }]);
});