define(function (require) {
    var app = require('../app');
    app.controller('GYBZ_LZController', function ($scope, $http, $uibModal, $log) {
        $scope.list = [];
        $scope.totalItems = 0;
        $scope.currentPage = 1;
        var $ctrl = this;
        $scope.page = function () {
            $http({
                method: "GET",
                url: "Gybz/list/" + $scope.currentPage + "/5"
            }).then(function (response) {
                $scope.totalItems = response.data.total;
                $scope.list = response.data.list;
            }, function (response) {
            });
        }
        $scope.page();
        $scope.openadd = function (size, parentSelector) {
            var parentElem = parentSelector ?
                angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
            var modalInstance = $uibModal.open({
                animation: $ctrl.animationsEnabled,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'GYBZ/add.html',
                controller: 'GYBZ_ADDCtrl',
                controllerAs: '$ctrl',
                size: size,
                appendTo: parentElem,
                resolve: {
                    items: function () {
                        return $ctrl.items;
                    },
                    $pscope: $scope
                }
            });
            modalInstance.result.then(function (selectedItem) {
                $ctrl.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };
        $scope.openUpdate = function (size, parentSelector) {
            var parentElem = parentSelector ?
                angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
            var index = $('input:radio[name="radio"]:checked').val();
            var modalInstance = $uibModal.open({
                animation: $ctrl.animationsEnabled,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'GYBZ/add.html',
                controller: 'GYBZ_UpdateCtrl',
                controllerAs: '$ctrl',
                size: size,
                appendTo: parentElem,
                resolve: {
                    data: function () {
                        return $scope.list[index];
                    },
                    $pscope: $scope
                }
            });
            modalInstance.result.then(function (selectedItem) {
                $ctrl.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };
        $scope.delete = function (size, parentSelector) {
            var index = $('input:radio[name="radio"]:checked').val();
            $http({
                method: "POST",
                url: "Gybz/lz_delete/" + $scope.list[index].id
            }).then(function (response) {
                if ("T" == response.data.isok) {
                    alert("操作成功");
                    $scope.list.splice(index, 1);
                } else {
                    alert("操作失败")
                }
                //$scope.totalItems = response.data.total;
                //$scope.list = response.data.list;
            }, function (response) {
            });
        };
        //点击选中行
        $scope.rowClick = function (id) {
            $scope.radioModel = id + "";
        }
    }).controller('GYBZ_ADDCtrl', function ($scope, $http, $uibModalInstance, $pscope) {
        $scope.ok = function () {
            $http({
                method: "POST",
                url: "Gybz/lz_add/",
                data: {
                    "name": $scope.name,
                    "age": $scope.age,
                    "remark": $scope.remark
                }

            }).then(function (response) {
                if ("T" == response.data.isok) {
                    alert("操作成功");
                    $pscope.totalItems = response.data.list.total;
                    $pscope.list = response.data.list.list;
                    $uibModalInstance.close();
                } else {
                    alert("操作失败")
                }
                //$scope.totalItems = response.data.total;
                //$scope.list = response.data.list;
            }, function (response) {
            });
        };
        $scope.close = function () {
            $uibModalInstance.close();
        }
    }).controller('GYBZ_UpdateCtrl', function ($scope, $http, $uibModalInstance, data, $pscope) {
        $http({
            method: "POST",
            url: "Gybz/lz_get/" + data.id,
            data: {
                "name": $scope.name,
                "age": $scope.age,
                "remark": $scope.remark,
                "id": $scope.id
            }
        }).then(function (response) {
            if ("T" == response.data.isok) {
                $scope.id = response.data.model.id;
                $scope.name = response.data.model.name;
                $scope.age = response.data.model.age;
                $scope.remark = response.data.model.remark;
            } else {
                alert("操作失败")
            }
            //$scope.totalItems = response.data.total;
            //$scope.list = response.data.list;
        }, function (response) {
        });
        $scope.ok = function () {
            $http({
                method: "POST",
                url: "Gybz/lz_update/",
                data: {
                    "id": $scope.id,
                    "name": $scope.name,
                    "age": $scope.age,
                    "remark": $scope.remark
                }

            }).then(function (response) {
                if ("T" == response.data.isok) {
                    alert("操作成功");
                    $uibModalInstance.close();
                    $pscope.totalItems = response.data.list.total;
                    $pscope.list = response.data.list.list;

                } else {
                    alert("操作失败")
                }
                //$scope.totalItems = response.data.total;
                //$scope.list = response.data.list;
            }, function (response) {
            });
        };
        $scope.close = function () {
            $uibModalInstance.close();
        }
    })
});
//