define(function (require) {
    var app = require('../app');
    app.controller('GCGLController', function ($scope, $http) {
        $scope.totalItems = 64;
        $scope.currentPage = 1

    });
});
//