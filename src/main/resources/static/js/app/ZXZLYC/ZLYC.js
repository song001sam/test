define([
    'require',
    '../app',
    'angular'
], function (require, app, angular) {
    app.controller('ZLYCController', function ($scope, $http, $uibModal) {
        $scope.cols = [
            {GX: "转炉", GW: "BOF1", num: "1"},
            {GX: "转炉", GW: "BOF2", num: "2"},
            {GX: "LF1", GW: "LF1-1号位", num: "1_1"},
            {GX: "LF1", GW: "LF1-2号位", num: "1_2"},
            {GX: "LF2", GW: "LF2-1号位", num: "2_1"},
            {GX: "LF2", GW: "LF2-2号位", num: "2_2"},
            {GX: "LF5", GW: "LF5-1号位", num: "5_1"},
            {GX: "LF5", GW: "LF5-2号位", num: "5_2"},
            {GX: "RH", GW: "RH1-1号位", num: "1_1"},
            {GX: "RH", GW: "RH1-2号位", num: "1_2"},
            {GX: "CCM", GW: "CCM1", num: "1"},
            {GX: "CCM", GW: "CCM2", num: "2"},
        ];
        $scope.radioClick = function (index) {
            // console.info($scope.radio,index);
            $scope.radio = index;
        }
        $scope.yuce = function () {
            if ($scope.cols[$scope.radio].flag) {
                console.info("预测");
            } else {
                $uibModal.open({
                    animation: true,
                    ariaLabelledBy: 'modal-title',
                    ariaDescribedBy: 'modal-body',
                    template: '<h3>请选择并确认炉号已经检查</h3>',
                    // controller: 'ModalInstanceCtrl',
                    size: 'sm',
                    backdrop: 'false'


                }).result.then(function () {

                }, function () {

                })
            }
        }
        $scope.showLH = function (col) {
            // console.info(col);
            $http({
                method: "POST",
                url: "ZXZLYC/ZLYC/showLH/",
                data: col
            }).then(function (res) {
                col.LH = res.data
                col.flag = true;
            }, function () {

            })
        }
    });
});