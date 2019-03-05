define(function (require) {
    var app = require('../app');
    app.controller('MXGLController', function ($scope, $http, $uibModal) {

        $scope.list = [];
        $scope.totalItems = 0;
        $scope.currentPage = 1;
        var $ctrl = this;
        $scope.page = function () {
            $http({
                method: "GET",
                url: "ZXZLYC/Mxgl/list/" + $scope.currentPage + "/5"
            }).then(function (response) {
                $scope.totalItems = response.data.total;
                $scope.list = response.data.list;
            }, function (response) {
            });
        }
        $scope.page();
        $scope.open = function (size, parentSelector) {
            var parentElem = parentSelector ? angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
            var modalInstance = $uibModal.open({
                animation: $ctrl.animationsEnabled,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'MXGL/add.html',
                controller: 'ModalInstanceCtrl',
                controllerAs: '$scope1',
                size: size,
                appendTo: parentElem,
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
    }).controller('ModalInstanceCtrl', function ($scope, $http, items, $uibModalInstance) {

        $scope.ok = function () {
            $http({
                method: "POST",
                url: "Mxgl/add/",
                data: {
                    "mxglmxlb": $scope.mxglmxlb,
                    "mxglmxmc": $scope.mxglmxmc,
                    "mxglsyfw": $scope.mxglsyfw,
                    "mxglmxsm": $scope.mxglmxsm
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