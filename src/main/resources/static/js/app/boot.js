require.config({
    baseUrl: 'js/',
    paths: {
        'angular': 'Angularjs/angular',
        'angular-ui-router': 'Angularjs/angular-ui-router',
        'angular-async-loader': 'Angularjs/angular-async-loader',
        'ui.bootstrap': 'ui.bootstrap.angular',
        'ngRoute': 'Angularjs/angular-route',
        'ngTouch': 'Angularjs/angular-touch',
        'ngAnimate': 'Angularjs/angular-animate',
        'ngSanitize': 'Angularjs/angular-sanitize',
        'jquery': 'jquery-3.3.1.min',
        'datetimepicker': 'Angularjs/datetimepicker',
        'datetimepicker.templates': 'Angularjs/datetimepicker.templates',
        'moment': 'moment',
        'echarts': 'echarts',
        'bootstrap-slider': 'Bootstrap/bootstrap-slider'


    },
    shim: {
        'angular': {exports: 'angular'},
        'angular-ui-router': {deps: ['angular']},
        'angular-async-loader': {deps: ['angular']},
        'ui.bootstrap': {deps: ['angular']},
        'ngRoute': {deps: ['angular']},
        'ngTouch': {deps: ['angular']},
        'ngAnimate': {deps: ['angular']},
        'ngSanitize': {deps: ['angular']},
        'ngWebSocket': {deps: ['angular']},
        'jquery': {deps: ['angular']},
        'datetimepicker': {deps: ['angular']},
        'datetimepicker.templates': {deps: ['angular']},
        'moment': {deps: ['angular']},
        'bootstrap-slider': {deps: ['angular']}
    }
});
require(['angular', 'app/app-routes'], function (angular) {
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['app']);
        angular.element(document).find('html').addClass('ng-app');
    });
});