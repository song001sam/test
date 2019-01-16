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
    // app.config(['$httpProvider', function($httpProvider) {
    //
    //     $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    //
    //     var param = function(obj) {
    //         var query = '', name, value, fullSubName, subName, subValue, innerObj, i;
    //
    //         for(name in obj) {
    //             value = obj[name];
    //
    //             if(value instanceof Array) {
    //                 for(i=0; i<value.length; ++i) {
    //                     subValue = value[i];
    //                     fullSubName = name + '[' + i + ']';
    //                     innerObj = {};
    //                     innerObj[fullSubName] = subValue;
    //                     query += param(innerObj) + '&';
    //                 }
    //             }else if(value instanceof Object) {
    //                 for(subName in value) {
    //                     subValue = value[subName];
    //                     fullSubName = name + '[' + subName + ']';
    //                     innerObj = {};
    //                     innerObj[fullSubName] = subValue;
    //                     query += param(innerObj) + '&';
    //                 }
    //             }else if(value !== undefined && value !== null)
    //                 query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
    //         }
    //
    //         return query.length ? query.substr(0, query.length - 1) : query;
    //     };
    //
    //     $httpProvider.defaults.transformRequest = [function(data) {
    //         return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
    //     }];
    // }]);
    module.exports = app;
});
//var app = angular.module('myApp', ['ui.router','oc.lazyLoad','ui.bootstrap','ngRoute','ngTouch', 'ngAnimate', 'ngSanitize']);
