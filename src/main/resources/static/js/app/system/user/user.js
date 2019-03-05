define(function (require) {
    var app = require('../../app');
    app.controller('UserController', function ($scope, $http, $uibModal) {

        $scope.list = [];
        $scope.totalItems = 0;
        $scope.currentPage = 1;
        var $ctrl = this;
        $scope.page = function () {
            $http({
                method: "GET",
                url: "system/user/list/" + $scope.currentPage + "/5"
            }).then(function (response) {
                $scope.totalItems = response.data.total;
                $scope.list = response.data.list;
            }, function (response) {
            });
        }
        $scope.page();
        $scope.del = function () {
            if (confirm()) {
                console.info($scope);
                $http({
                    method: "GET",
                    url: "system/user/del/" + $scope.id
                }).then(function (response) {
                    $scope.page();
                }, function (response) {
                });
            }
        };
        $scope.add = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'system/user/add.html',
                controller: 'UserAddController',
                controllerAs: '$scope1',
                size: 'lg',
                backdrop: "static",
                resolve: {
                    items: function () {
                        return $scope;
                    },

                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };
        $scope.update = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'system/user/update.html',
                controller: 'UserUpdateController',
                controllerAs: '$scope1',
                size: 'lg',
                backdrop: "static",
                resolve: {
                    items: function () {
                        return $scope;
                    },

                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };
    }).controller('UserAddController', function ($scope, $http, items, $uibModalInstance) {

        $scope.ok = function () {
            console.info(items);
            $http({
                method: "POST",
                url: "system/user/add/",
                data: {
                    "usercode": $scope.usercode,
                    "username": $scope.username,
                    "password": $scope.password,
                    "roleID": $scope.roleID
                }

            }).then(function (response) {
                $scope.totalItems = response.data.total;
                $scope.list = response.data.list;


            }, function (response) {
                $uibModalInstance.close();
            });

        }
    }).controller('UserUpdateController', function ($scope, $http, items, $uibModalInstance) {

        $scope.ok = function () {
            console.info(items);
            $http({
                method: "POST",
                url: "system/user/add/",
                data: {
                    "id": items.id,
                    "usercode": $scope.usercode,
                    "username": $scope.username,
                    "password": $scope.password,
                    "roleID": $scope.roleID
                }

            }).then(function (response) {
                $scope.totalItems = response.data.total;
                $scope.list = response.data.list;


            }, function (response) {
                $uibModalInstance.close();
            });

        }
    })
});
//