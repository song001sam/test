define(function (require) {
    var app = require('./app');
    var angular = require('angular');
    app.controller('aController', function ($scope, $http) {
        $scope.name = "songshaochen";
    });

});
//