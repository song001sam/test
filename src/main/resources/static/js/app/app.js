define(function (require, exports, module) {
    var angular = require('angular');
    var asyncLoader = require('angular-async-loader');

    require('angular-ui-router');
    require('ui.bootstrap');
    require('ngRoute');
    require('ngTouch');
    require('ngAnimate');
    require('ngSanitize');
    require('datetimepicker');
    var app = angular.module('app', ['ui.router', 'ui.bootstrap', 'ui.bootstrap.pagination', 'ngRoute', 'ngTouch', 'ngAnimate', 'ngSanitize', 'ui.bootstrap.datetimepicker']);

    // initialze app module for async loader
    asyncLoader.configure(app);

    module.exports = app;
});
//var app = angular.module('myApp', ['ui.router','oc.lazyLoad','ui.bootstrap','ngRoute','ngTouch', 'ngAnimate', 'ngSanitize']);
