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
            .state('index.GYBZ_lianzhu', {
                url: '/GYBZ_lianzhu',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'GYBZ/lianzhu_list.html';
                },
                controllerUrl: 'app/GYBZ/lianzhu_list',
                controller: 'GYBZ_lianzhuController'
            })
            .state('index.GYBZ_lianzhu_sub1', {
                url: '/GYBZ_lianzhu_sub1',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'GYBZ/lianzhu_sub1_list.html';
                },
                controllerUrl: 'app/GYBZ/lianzhu_sub1_list',
                controller: 'GYBZ_lianzhuSub1Controller'
            })
            .state('index.GYBZ_lianzhu_sub2', {
                url: '/GYBZ_lianzhu_sub2',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'GYBZ/lianzhu_sub2_list.html';
                },
                controllerUrl: 'app/GYBZ/lianzhu_sub2_list',
                controller: 'GYBZ_lianzhuSub2Controller'
            })
            .state('index.a', {
                url: '/a',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'a.html';
                },
                controllerUrl: 'app/a',
                controller: 'aController'
            })
            .state('index.TXFXbar', {
                url: '/TXFXbar',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'TXFX/bar.html';
                },
                controllerUrl: 'app/TXFX/bar',
                controller: 'barController'
            })
            .state('index.TXFXpie', {
                url: '/TXFXpie',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'TXFX/pie.html';
                },
                controllerUrl: 'app/TXFX/pie',
                controller: 'pieController'
            })
            .state('index.XGXFX', {
                url: '/SXFX/XGXFX',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'SXFX/XGXFX.html';
                },
                controllerUrl: 'app/SXFX/XGXFX',
                controller: 'XGXFXController'
            })
            .state('index.FCFX', {
                url: '/SXFX/FCFX',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'SXFX/FCFX.html';
                },
                controllerUrl: 'app/SXFX/FCFX',
                controller: 'FCFXController'
            })
            .state('index.ZYFX', {
                url: '/SXFX/ZYFX',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'SXFX/ZYFX.html';
                },
                controllerUrl: 'app/SXFX/ZYFX',
                controller: 'ZYFXController'
            })
    }]);
});