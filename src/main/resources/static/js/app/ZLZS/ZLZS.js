define(['echarts',
    'require'
], function (ec, require) {
    var app = require('../app');
    //var angular = require('angular');
    app.controller('ZLZSController', function ($scope, $http, $uibModal) {

        $scope.hide = true;
        $scope.HHOption = [
            {value: "bof_lance_height", name: '转炉-氧枪高度'},
            {value: "bof_bof_angle", name: '转炉-转炉角度'},
            {value: "bof_o2_flow", name: '转炉-顶吹氧气流量'},
            {value: "lf_lf1ar1flow", name: 'LF-1#钢包1#底吹AR流速'},
            {value: "lf_lf1ar2flow", name: 'LF-1#钢包2#底吹AR流速'},
            {value: "lf_lfpritotengy", name: 'LF-有功电度'},
            {value: "lf_lfsectotengy", name: 'LF-无功电度'},
            {value: "ccm_tundish_weight", name: '连铸-中间罐净重t'},
            {value: "ccm_superheat", name: '连铸-过热度'}
        ];
        $scope.kunhao = '';
        $scope.query = function () {
            if ($scope.kunhao == '') {
                alert("请输入卷号/捆号");
            } else {
                var i = layer.load();
                $http({
                    method: "post",
                    url: "QCM/queryInfoByPlateId",
                    data: {plateId: $scope.kunhao}

                }).then(function (response) {
                    // console.info(response);
                    if (!response.data.error) {
                        $scope.plate_id = response.data.plate_id;
                        $scope.zhishu = response.data.zhishu;
                        $scope.plate_type = response.data.plate_type;
                        $scope.roll_sch_id = response.data.roll_sch_id;
                        $scope.smp_lot = response.data.smp_lot;
                        $scope.slab_id = response.data.slab_id;
                        $scope.heat_id = response.data.heat_id;
                        $scope.status = response.data.status;
                        $scope.pre_status = response.data.pre_status;
                        $scope.stl_grd_cd = response.data.stl_grd_cd;
                        $scope.org_stl_grd = response.data.org_stl_grd_cd;
                        $scope.mat_qul_cd = response.data.mat_qul_cd;
                        $scope.org_mat_qul = response.data.org_mat_qul_cd;
                        $scope.matcode = response.data.matcode;
                        $scope.plate_act_t = response.data.plate_act_thk;
                        $scope.plate_act_w = response.data.plate_act_wth;
                        $scope.plate_act_l = response.data.plate_act_lth;
                        $scope.plate_wgt = response.data.plate_wgt;
                        $scope.cal_wgt = response.data.cal_wgt;
                        $scope.std = response.data.std;
                        $scope.plate_ord_w = response.data.plate_ord_wgt;
                        $scope.prod_id = response.data.prod_id;
                        $scope.ord_fl = response.data.ord_fl;
                        $scope.prod_time = response.data.prod_time;
                        $scope.shift = response.data.shift;
                        $scope.crew = response.data.crew;
                        $scope.smp_fl = response.data.smp_fl;
                        $scope.judge_time = response.data.judge_time;
                        $scope.prod_grd = response.data.prod_grd;
                        $scope.surf_grd = response.data.surf_grd;
                        $scope.jun_check_l = response.data.jun_check_lvl;
                        $scope.thk_add = response.data.thk_add;
                        $scope.std_spec = response.data.std_spec;
                        $scope.ins_pgmid = response.data.ins_pgmid;
                        $scope.ins_time = response.data.ins_time;
                        $scope.upd_date = response.data.upd_date;
                        $scope.upd_emp_id = response.data.upd_emp_id;
                        $scope.memo = response.data.memo;
                        $scope.w_pro = response.data.w_pro;
                        $scope.contract_no = response.data.contract_no;
                        $scope.sale_no = response.data.sale_no;
                        $scope.sale_rno = response.data.sale_rno;
                        $scope.pothook = response.data.pothook;
                        $scope.month_flag = response.data.month_flag;
                        $scope.dispatch_id = response.data.dispatch_id;
                        $scope.rs_fl = response.data.rs_fl;
                        $scope.plate_bj = response.data.plate_bj;
                        $scope.matname = response.data.matname;
                        $scope.wgt_empid = response.data.wgt_empid;
                        $scope.wgt_time = response.data.wgt_time;
                        $scope.std_name = response.data.std_name;
                        $scope.wgt_fl = response.data.wgt_fl;
                        //填充流号
                        if (response.data.liuhao != null && response.data.liuhao != 'wu') {
                            $scope.liuhao = response.data.liuhao;
                            $scope.BPOption = [
                                {
                                    value: "strand_speed",
                                    code: "连铸-" + response.data.liuhao + "流拉速"
                                },
                                {
                                    value: "mold_rate1_act",
                                    code: "连铸-" + response.data.liuhao + "流结晶器振频1"
                                },
                                {
                                    value: "mold_rate2_act",
                                    code: "连铸-" + response.data.liuhao + "流结晶器振频2"
                                },
                                {
                                    value: "mold_level_act",
                                    code: "连铸-" + response.data.liuhao + "流结晶器液位"
                                }
                            ]
                        }
                        $scope.hide = false;
                        layer.close(i);
                    } else {
                        layer.close(i);
                        alert("没有查到相关捆号信息");
                    }

                }, function (response) {
                    layer.close(i);
                });
            }
        }
        //根据炉号查echarts图
        $scope.queryByHeatId = function () {
            //先判断炉号是否为空
            if ($scope.heat_id == '' || $scope.heat_id == null) {
                alert("炉号为空");
            } else if ($scope.luhao == '' || $scope.luhao == null) {
                alert("请选择查询条件");
            } else {
                $scope.modalInstance = $uibModal.open({
                    animation: $scope.animationsEnabled,
                    ariaLabelledBy: 'modal-title',
                    ariaDescribedBy: 'modal-body',
                    templateUrl: 'ZLZS/echarts.html',
                    controllerAs: '$scope',
                    controller: 'echartsController',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        items: function () {
                            return $scope;
                        }
                    }
                });

            }
        }
        //根据板坯号查询获得echarts图
        $scope.queryBySlabId = function () {
            if ($scope.slab_id == null || $scope.slab_id == '') {
                alert("板坯号为空");
            } else if ($scope.banpi == null || $scope.banpi == '') {
                alert("请选择查询条件");
            } else {
                $scope.modalInstance = $uibModal.open({
                    animation: $scope.animationsEnabled,
                    ariaLabelledBy: 'modal-title',
                    ariaDescribedBy: 'modal-body',
                    templateUrl: 'ZLZS/echarts.html',
                    controllerAs: '$scope',
                    controller: 'echartsController2',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        itemss: function () {
                            return $scope;
                        }
                    }
                });
            }
        }


    }).controller('echartsController', function (items, $scope, $http, $uibModal) {
        var echars_option = {
            title: {
                text: items.luhao.name,
                textStyle: {
                    fontSize: 14
                },
                left: 'center'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['']
            },
            grid: {
                left: '10%',
                bottom: '35%'
            },
            toolbox: {
                show: true,
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    dataView: {readOnly: false},
                    magicType: {type: ['line', 'bar']},
                    restore: {},
                    saveAsImage: {}
                }
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                data: (function () {
                    var res = [];
                    return res;
                })(),
                axisLabel: {
                    // interval: 50,
                    rotate: 45,
                    margin: 4,
                }

            }],
            yAxis: {
                type: 'value',
                /* min:min,
                max:max, */
                axisLabel: {
                    //formatter: '{value} °C'
                }
            },
            dataZoom: [{
                //startValue: '09:01:02'
            }, {
                type: 'inside'
            }],

            series: [
                {
                    name: '',
                    type: 'line',
                    data: (function () {
                        var res = [];
                        return res;
                    })(),

                    markPoint: {
                        data: [
                            {type: 'max', name: '最大值'},
                            {type: 'min', name: '最小值'}
                        ]
                    },
                    markLine: {
                        symbol: 'none',
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    },
                    color: '#3333ff'
                }
            ]
        };
        $scope.init = function () {
            $scope.cancel = function () {
                items.modalInstance.close();
            };
            var echarts = ec.init(document.getElementById('echarts'));
            var i = layer.load();
            $http({
                method: "post",
                url: "QCM/getEchartsByHeatId",
                data: {
                    heatId: items.heat_id,
                    arg: items.luhao.value
                }

            }).then(function (response) {
                if (!response.data.error) {
                    $scope.x = response.data.instime.split(",");
                    $scope.y = response.data.secarg.split(",");
                    $scope.xx = echars_option.xAxis[0].data;
                    $scope.yy = echars_option.series[0].data;
                    angular.forEach($scope.x, function (i, j) {
                        $scope.xx.push(i);

                    });
                    angular.forEach($scope.y, function (i, j) {
                        $scope.yy.push(i);

                    })
                    /*for(var i = 0 ; i < x.length; i++){
                        xx.push(x[i]);
                    }
                    for(var i = 0 ; i < y.length; i++){
                        yy.push(y[i]);
                    }*/
                    echarts.setOption(echars_option);
                    layer.close(i);
                } else {
                    layer.close(i);
                }
            }, function (response) {
                layer.close(i);
            });
        }
    }).controller('echartsController2', function (itemss, $scope, $http, $uibModal) {

        var echars_option = {
            title: {
                text: itemss.banpi.code,
                textStyle: {
                    fontSize: 14
                },
                left: 'center'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['']
            },
            grid: {
                left: '10%',
                bottom: '35%'
            },
            toolbox: {
                show: true,
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    dataView: {readOnly: false},
                    magicType: {type: ['line', 'bar']},
                    restore: {},
                    saveAsImage: {}
                }
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                data: (function () {
                    var res = [];
                    return res;
                })(),
                axisLabel: {
                    // interval: 50,
                    rotate: 45,
                    margin: 4,
                }

            }],
            yAxis: {
                type: 'value',
                /* min:min,
                max:max, */
                axisLabel: {
                    //formatter: '{value} °C'
                }
            },
            dataZoom: [{
                //startValue: '09:01:02'
            }, {
                type: 'inside'
            }],

            series: [
                {
                    name: '',
                    type: 'line',
                    data: (function () {
                        var res = [];
                        return res;
                    })(),

                    markPoint: {
                        data: [
                            {type: 'max', name: '最大值'},
                            {type: 'min', name: '最小值'}
                        ]
                    },
                    markLine: {
                        symbol: 'none',
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    },
                    color: '#3333ff'
                }
            ]
        };
        $scope.init = function () {
            $scope.cancel = function () {
                itemss.modalInstance.close();
            };
            var echarts = ec.init(document.getElementById('echarts'));
            var i = layer.load();
            $http({
                method: "post",
                url: "QCM/getEchartsBySlabId",
                data: {
                    slabId: itemss.slab_id,
                    liuhao: itemss.liuhao,
                    banpi: itemss.banpi.value
                }

            }).then(function (response) {
                if (!response.data.error) {
                    $scope.x = response.data.instime.split(",");
                    $scope.y = response.data.secarg.split(",");
                    $scope.xx = echars_option.xAxis[0].data;
                    $scope.yy = echars_option.series[0].data;
                    angular.forEach($scope.x, function (i, j) {
                        $scope.xx.push(i);

                    });
                    angular.forEach($scope.y, function (i, j) {
                        $scope.yy.push(i);

                    })
                    /*for(var i = 0 ; i < x.length; i++){
                        xx.push(x[i]);
                    }
                    for(var i = 0 ; i < y.length; i++){
                        yy.push(y[i]);
                    }*/
                    echarts.setOption(echars_option);
                    layer.close(i);
                } else {
                    layer.close(i);
                }
            }, function (response) {
                layer.close(i);
            });
        }
    })
})