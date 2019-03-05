define(['echarts',
    'require'], function (ec, require) {

    var app = require('../app');
    app.controller('CPKController1', function ($scope, $http, $uibModal) {
        //设置时间格式
        Date.prototype.format = function (format) {
            var o = {
                "M+": this.getMonth() + 1, //month
                "d+": this.getDate(),    //day
                "h+": this.getHours(),   //hour
                "m+": this.getMinutes(), //minute
                "s+": this.getSeconds(), //second
                "q+": Math.floor((this.getMonth() + 3) / 3),  //quarter
                "S": this.getMilliseconds() //millisecond
            }
            if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
                (this.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o) if (new RegExp("(" + k + ")").test(format))
                format = format.replace(RegExp.$1,
                    RegExp.$1.length == 1 ? o[k] :
                        ("00" + o[k]).substr(("" + o[k]).length));
            return format;
        };
        $scope.GXOption = [
            {value: "D01", code: '1#转炉'},
            {value: "D02", code: '2#转炉'},
            {value: "E0", code: 'RH'},
            {value: "E01", code: '1#LF'},
            {value: "E02", code: '2#LF'},
            {value: "E05", code: '5#LF'},
            {value: "E06", code: '6#LF'},
            {value: "G01", code: '1#连铸'},
            {value: "G02", code: '2#连铸'},
            {value: "G05", code: '5#连铸'}
        ];
        $scope.BBOption = [
            {value: "A", code: "甲班"},
            {value: "B", code: "乙班"},
            {value: "C", code: "丙班"},
            {value: "D", code: "丁班"}
        ];
        $scope.GZOption = [
            {value: 'F0053', code: 'ML15'},
            {value: 'H0100', code: '42CrMo'},
            {value: 'E0036', code: 'S45C-Ti'},
            {value: 'H0170', code: 'M3'},
            {value: 'E0026', code: 'SAE10B21'},
            {value: 'E0032', code: 'S45CB'},
            {value: 'F0032', code: 'JGSWRCH35K'},
            {value: 'E0006', code: '45'},
            {value: 'H0155', code: '30MnVS6'},
            {value: 'A0016', code: 'HRB400E-4'},
            {value: 'Y0024', code: '45S20'},
            {value: 'H0104', code: '25CrMo-3'},
            {value: 'H0134', code: 'AISI4145H'},
            {value: 'H0158', code: 'B3-1'},
            {value: 'H0116', code: 'YT42CrMoA'},
            {value: 'H0091', code: '20CrMnTi-X'},
            {value: 'A0020', code: 'HRB400E-3'},
            {value: 'H0161', code: '40Cr4-B'},
            {value: 'E0003', code: '25'},
            {value: 'H0151', code: '42CrMo-713'},
            {value: 'H0037', code: 'SCM440'},
            {value: 'H0117', code: 'SCM435-D'},
            {value: 'H0074', code: '42CrMoA-ZC'},
            {value: 'H0033', code: '35CrMnSiA'},
            {value: 'F0002', code: 'ML40Cr'},
            {value: 'E0069', code: '50J'},
            {value: 'B0010', code: '20CrMnTiH-5'},
            {value: 'G0005', code: 'SWRH82B-2'},
            {value: 'A0010', code: 'HRB400-1'},
            {value: 'T0006', code: '55SiCrA'},
            {value: 'H0148', code: 'SH42CrMo-2'},
            {value: 'A0001', code: 'HPB300'},
            {value: 'E0077', code: '10B21-K'},
            {value: 'H0077', code: 'HM21530'},
            {value: 'H0138', code: '20CrMo-2'},
            {value: 'E0018', code: 'C-1045H'},
            {value: 'H0006', code: '30CrMoA'},
            {value: 'H0152', code: '1E1998'},
            {value: 'D0001', code: 'Q195'},
            {value: 'D0007', code: 'Q235B'},
            {value: 'H0035', code: '35CrMo-2'},
            {value: 'Y0017', code: '45S10'},
            {value: 'B0003', code: '42CrMoH'},
            {value: 'Z0005', code: '9SiCr-X'},
            {value: 'H0182', code: '40CrV-ST'},
            {value: 'H0020', code: '30CrMnTi'},
            {value: 'B0024', code: 'H20CrMo-2'},
            {value: 'E0053', code: '10B21Q'},
            {value: 'B0049', code: 'DF20CrMnTiH3'},
            {value: 'H0008', code: '42CrMoA'},
            {value: 'T0010', code: '50CrV'},
            {value: 'A0008', code: 'HRB400'},
            {value: 'Z0013', code: 'C&U1-LD'},
            {value: 'D0011', code: 'Q235-1'},
            {value: 'E0010', code: '65'},
            {value: 'H0118', code: 'SCM440-D'},
            {value: 'H0095', code: 'SCM435-K'},
            {value: 'E0025', code: 'SAE10B20'},
            {value: 'H0140', code: '1.00E+28'},
            {value: 'L0004', code: 'JGLX82A'},
            {value: 'B0023', code: 'H20CrMo-1'},
            {value: 'H0089', code: '42CrMo4'},
            {value: 'F0005', code: 'ML20MnTiB'},
            {value: 'B0009', code: '20CrMnTiH-3'},
            {value: 'H0124', code: '42CrMo-Y'},
            {value: 'H0063', code: 'B3'},
            {value: 'E0070', code: '45-Z'},
            {value: 'B0032', code: 'WL20CrMnTiH4'},
            {value: 'H0019', code: '20CrMnTi'},
            {value: 'F0007', code: 'SWRCH15A'},
            {value: 'F0030', code: 'JGML20MnTiB'},
            {value: 'E0002', code: '20'},
            {value: 'H0072', code: '9SiCr'},
            {value: 'F0039', code: 'JGSWRCH15A'},
            {value: 'H0174', code: 'GN-2A-5'},
            {value: 'H0175', code: 'YLT-B2Q1'},
            {value: 'H0168', code: 'LT-B2'},
            {value: 'E0078', code: 'C45'},
            {value: 'A0019', code: 'HRB400-4'},
            {value: 'Z0002', code: 'GCr15-1'},
            {value: 'L0005', code: 'JGLX86A'},
            {value: 'L0003', code: 'JGLX72A'},
            {value: 'Y0022', code: 'GT1215HS'},
            {value: 'H0143', code: '42CrMoA-HY'},
            {value: 'P0001', code: '30MnSi'},
            {value: 'H0002', code: '40Cr'},
            {value: 'H0048', code: 'Q20CrMo-2'},
            {value: 'H0050', code: '40Cr-1'},
            {value: 'B0001', code: '20CrMnTiH'},
            {value: 'Y0003', code: '11SMn37'},
            {value: 'B0011', code: '20CrMnTiHCS'},
            {value: 'G0004', code: 'SWRH82B-1'},
            {value: 'E0071', code: '45-FS'},
            {value: 'E0020', code: '50Mn-1'},
            {value: 'E0022', code: '65J'},
            {value: 'C0007', code: 'Q460C'},
            {value: 'H0059', code: 'HM20620'},
            {value: 'Z0004', code: 'GCr15-K'},
            {value: 'B0002', code: '20CrMoH'},
            {value: 'F0001', code: 'ML20Cr'},
            {value: 'F0038', code: 'SWRCH35K-K'},
            {value: 'H0014', code: '20MnTiB'},
            {value: 'Y0002', code: '1215'},
            {value: 'Y0001', code: 'GT1215S'},
            {value: 'F0009', code: 'SWRCH25K'},
            {value: 'F0008', code: 'SWRCH22A'},
            {value: 'G0013', code: 'SWRH82B-1A'},
            {value: 'H0157', code: '15B36Cr1'},
            {value: 'H0138', code: 'SH40Cr-1'},
            {value: 'H0109', code: 'SH40MnB'},
            {value: 'H0038', code: 'B7'},
            {value: 'G0003', code: 'SWRH77B'},
            {value: 'F0010', code: 'SWRCH35K'},
            {value: 'E0015', code: 'Jan-45'},
            {value: 'E0016', code: 'YT45'},
            {value: 'H0131', code: '1E0963'},
            {value: 'H0036', code: 'SCM435'},
            {value: 'H0025', code: '42CrMo-1'},
            {value: 'H0028', code: '25MnCrNiMoA'},
            {value: 'H0085', code: 'SC40Cr'},
            {value: 'H0172', code: 'GN-14A'},
            {value: 'H0042', code: '50BV30'},
            {value: 'T0002', code: '50CrVA'},
            {value: 'G0012', code: 'SWRH72A'},
            {value: 'A0012', code: 'HRB400-7'},
            {value: 'B0021', code: 'H20CrMnTi'},
            {value: 'E0046', code: '55J'},
            {value: 'E0023', code: '70J'},
            {value: 'Z0007', code: 'GCr15-A'},
            {value: 'B0026', code: 'ZL20CrMnTiH2'},
            {value: 'D0005', code: 'Q235'},
            {value: 'T0009', code: '60Si2Mn'},
            {value: 'H0126', code: 'SC42CrMoA-1'},
            {value: 'F0026', code: 'ML08AL'},
            {value: 'E0004', code: '35'},
            {value: 'F0020', code: '10B33'},
            {value: 'T0008', code: '60Si2CrVAT'},
            {value: 'F0024', code: 'ML40CrQ'},
            {value: 'B0039', code: '20CrMnTiSH3'},
            {value: 'E0057', code: '65Mn-优质碳素钢'},
            {value: 'A0007', code: 'HRB400E'},
            {value: 'E0079', code: 'AISI1030'},
            {value: 'H0171', code: 'GN-3A-3'},
            {value: 'E0011', code: '70'},
            {value: 'H0183', code: '40Mn2SY'},
            {value: 'H0076', code: 'JGQG-42'},
            {value: 'H0009', code: '27SiMn'},
            {value: 'H0082', code: '40Cr-A'},
            {value: 'F0015', code: 'GTML35-M'},
            {value: 'H0005', code: '20CrMoA'},
            {value: 'H0127', code: 'SC42CrMoA-2'},
            {value: 'B0045', code: 'ZL20CrMnTiH3'},
            {value: 'H0106', code: '40Cr-3'},
            {value: 'A0011', code: 'HRB400-2'},
            {value: 'T0005', code: '60Si2MnA-K'},
            {value: 'D0012', code: 'Q235D-1'},
            {value: 'B0040', code: 'FAS3420H'},
            {value: 'B0056', code: '20MnCr5'},
            {value: 'H0094', code: 'SCM440-Q'},
            {value: 'E0044', code: 'Jan-50'},
            {value: 'E0017', code: 'Mar-45'},
            {value: 'H0111', code: 'SC42CrMoA'},
            {value: 'E0008', code: '55'},
            {value: 'E0051', code: '60J'},
            {value: 'E0074', code: 'D-SF640'},
            {value: 'H0135', code: 'F45MnVS'},
            {value: 'H0133', code: 'HM-8A'},
            {value: 'B0031', code: 'WL20CrMnTiH2'},
            {value: 'H0090', code: '20Cr-1'},
            {value: 'H0024', code: '40MnB-1'},
            {value: 'F0012', code: 'SWRCH45K'},
            {value: 'A0021', code: 'HRB400E-3S'},
            {value: 'E0001', code: '10'},
            {value: 'H0017', code: '20CrMnMo'},
            {value: 'H0045', code: 'SCM435-1'},
            {value: 'H0070', code: 'AISI4145HM'},
            {value: 'H0029', code: '25MnCrNiMoA-1'},
            {value: 'B0060', code: '20CrMnTiH5'},
            {value: 'F0026', code: 'ML08Al'},
            {value: 'H0039', code: '35VB'},
            {value: 'B0006', code: 'Q20CrMnTi-2'},
            {value: 'B0018', code: '22CrMoH'},
            {value: 'H0147', code: 'SH42CrMo-1'},
            {value: 'Z0001', code: 'GCr15'},
            {value: 'H0164', code: '42CrMoA-LT'},
            {value: 'H0145', code: '40Mn2-ZS'},
            {value: 'E0057', code: '65Mn'},
            {value: 'E0029', code: 'Cf53'},
            {value: 'B0027', code: 'Z20CrMnTiH3'},
            {value: 'E0076', code: '10B21'},
            {value: 'Z0023', code: 'C&U171'},
            {value: 'H0011', code: '30Mn2'},
            {value: 'H0001', code: '20Cr'},
            {value: 'C0002', code: 'Q345B'},
            {value: 'H0119', code: '20CrMo/A'},
            {value: 'E0072', code: '65MnJX'},
            {value: 'H0125', code: '35CrMo/A'},
            {value: 'E0005', code: '40'},
            {value: 'T0007', code: '55SiCrA-K'},
            {value: 'G0006', code: 'SWRH82B-3'},
            {value: 'H0007', code: '35CrMoA'},
            {value: 'B0038', code: '20CrMnTiSH2'},
            {value: 'E0012', code: '25Mn'},
            {value: 'B0059', code: '20CrMnTiH3-F'},
            {value: 'H0132', code: '1E1201'},
            {value: 'E0055', code: 'S35C-Ti'},
            {value: 'E0009', code: '60'},
            {value: 'H0169', code: '75MnCr'},
            {value: 'H0012', code: '40Mn2'},
            {value: 'G0014', code: 'SWRH82B-1B'},
            {value: 'H0105', code: '35CrMo-3'},
            {value: 'H0107', code: 'C70S6BY'},
            {value: 'F0036', code: '35ACR'},
            {value: 'E0064', code: '35Mn-1'},
            {value: 'L0001', code: 'C72DA'},
            {value: 'L0002', code: 'C82DA'},
            {value: 'F0027', code: 'ML15Al'},
            {value: 'H0166', code: 'HY4520'},
            {value: 'C0004', code: 'Q345D'},
            {value: 'H0061', code: 'HM21430'},
            {value: 'E0050', code: 'SH45'},
            {value: 'H0123', code: '42CrMo/A'},
            {value: 'H0092', code: '42CrMo-3'},
            {value: 'E0080', code: 'S20C-Ti'},
            {value: 'A0010', code: ''},
            {value: 'F0031', code: 'JGSWRCH45K'},
            {value: 'H0121', code: '42CrMoA-LT2'},
            {value: 'C0014', code: 'Q345B-DH'},
            {value: 'H0142', code: '40MnB-2'},
            {value: 'H0139', code: 'SH40Cr-2'},
            {value: 'E0007', code: '50'},
            {value: 'Y0022', code: 'SAE1141协议圆钢'},
            {value: 'T0004', code: '60Si2MnA'},
            {value: 'Y0009', code: '11SMn30'},
            {value: 'B0037', code: 'WL20CrMnTiH3'},
            {value: 'F0029', code: 'JGML40Cr'},
            {value: 'H0032', code: '30CrMnSiA'},
            {value: 'H0154', code: 'F45VS'},
            {value: 'Z0006', code: 'GCr15-2'},
            {value: 'H0013', code: '45Mn2'},
            {value: 'H0120', code: '42CrMoA-LT1'},
            {value: 'H0110', code: '30Mn5'},
            {value: 'B0017', code: 'ZL20CrH'},
            {value: 'F0021', code: '10B33FY'},
            {value: 'H0165', code: 'JGF45V'}
        ]
        $scope.ItemOption = [
            {value: "CH001", code: "C"},
            {value: "CH002", code: "Si"},
            {value: "CH003", code: "Mn"},
            {value: "CH004", code: "P"},
            {value: "CH006", code: "Cr"},
            {value: "CH011", code: "Als"},
            {value: "CH012", code: "B"},
            {value: "CH013", code: "Ti"},
            {value: "SUPERHEAT_DEGREE", code: "过热度"}
        ];
        $scope.list = [];
        $scope.totalItems = 0;
        $scope.currentPage = 1;
        var cpkTimeOne = ec.init(document.getElementById('echartsOne'));
        var cpkTimeOne_option = {
            title: {
                text: '一炼钢CPK整体趋势图',
                textStyle: {
                    fontSize: 14
                },
                left: 'center'

            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                textStyle: {
                    color: '#B7E1FF',
                    fontSize: 14
                },
                data: [''],
                top: '10%'
            },
            xAxis: [{
                type: 'category',
                data: (function () {
                    var res = [];
                    return res;
                })(),
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        fontSize: 10
                    }
                }
            }],
            yAxis: [{
                type: 'value',
                name: 'cpk值',
                nameTextStyle: {
                    fontSize: 14
                },
                axisLabel: {
                    textStyle: {
                        fontSize: 14,
                        fontFamily: 'Arial',
                    }
                },
                splitLine: {
                    show: false
                    //不显示网格线
                },
                max: 2,
                min: 0
            }],
            series: [{
                name: 'cpk',
                type: 'line',
                markLine: {
                    silent: true,
                    symbol: 'none',//去掉箭头
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                type: 'dotted',
                                color: 'red'
                            },
                            label: {
                                show: true,
                                position: 'end'
                            }
                        }
                    },//'dotted'虚线 'solid'实线
                    data: [{
                        name: '',
                        yAxis: 1,
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    type: 'solid',
                                    color: 'red ',
                                    width: 0.5
                                },
                                label: {
                                    formatter: 1,
                                    textStyle: {
                                        color: 'red',
                                        fontSize: 14,
                                        fontWeight: "bolder"
                                    }
                                }
                            }
                        }
                    }, {
                        name: '',
                        yAxis: 1.33,
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    type: 'solid',
                                    color: 'red ',
                                    width: 0.5
                                },
                                label: {
                                    formatter: 1.33,
                                    textStyle: {
                                        color: 'red',
                                        fontSize: 14,
                                        fontWeight: "bolder"
                                    }
                                }
                            }
                        }
                    }]
                },
                data: (function () {
                    var res = [];
                    return res;
                })(),
                itemStyle: {
                    normal: {
                        color: 'blue',
                        label: {
                            show: false,
                            position: 'top',
                            textStyle: {
                                color: 'black',
                                fontSize: 14
                            }
                        }
                    }
                }
            }]
        };
        cpkTimeOne.setOption(cpkTimeOne_option);

        $scope.wang = 5;
        $scope.open2 = function () {
            $scope.popup2.opened = true;
        };
        $scope.open1 = function () {
            $scope.popup1.opened = true;
        };
        $scope.popup1 = {
            opened: false
        };

        $scope.popup2 = {
            opened: false
        };
        $scope.dt1 = new Date(new Date().setDate(1));
        $scope.dt2 = new Date();

        $scope.data = {
            "beginTime": $scope.dt1.format("yyyy-MM-dd"),
            "endTime": $scope.dt2.format("yyyy-MM-dd")
        };
        $scope.doSearch = function () {
            $scope.currentPage = 1;
            $scope.data = {
                "pos": $scope.pos,
                "shiftId": $scope.shiftId,
                "stlGrdName": $scope.stlGrdName,
                "itemCd": $scope.itemCd,
                "beginTime": $scope.dt1.format("yyyy-MM-dd"),
                "endTime": $scope.dt2.format("yyyy-MM-dd")
            }
            $scope.i1 = layer.load(0);
            $scope.page();
            $scope.showEchartsOne();

        };
        $scope.page = function () {


            $http({
                method: "post",
                url: "CPK/list/" + $scope.currentPage + "/5",
                data: $scope.data

            }).then(function (response) {
                $scope.totalItems = response.data.total;
                $scope.list = response.data.list;
                layer.close($scope.i1);
            }, function (response) {
                layer.close($scope.i1);
            });
        };

        $scope.showEchartsOne = function () {
            $http({
                method: "post",
                url: "CPK/showEchartsOneByTime",
                data: $scope.data
            }).then(function (response) {
                var x = cpkTimeOne_option.xAxis[0].data;
                var y = cpkTimeOne_option.series[0].data;
                x.splice(0, x.length);
                y.splice(0, y.length);
                angular.forEach(response.data, function (i, j) {
                    x.push(i.ins_time);
                    y.push(i.avg);
                })
                cpkTimeOne.setOption(cpkTimeOne_option);
            }, function (response) {
            });
        };
        $scope.page();
        $scope.showEchartsOne();


        cpkTimeOne.on('click', function (data) {
            $scope.xName = data.name;
            $scope.modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'CPK/eTimeTwo.html',
                controllerAs: '$scope',
                controller: 'CPKTimeTwo',
                backdrop: 'static',
                resolve: {
                    items: function () {
                        return $scope;

                    }
                }
            });

        });

    }).controller('CPKTimeTwo', function (items, $scope, $http, $uibModal) {
        var cpkTimeTwo_option = {
            title: {
                text: items.xName + '工位CKP对比图',
                textStyle: {
                    fontSize: 14
                },
                left: 'center'

            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                textStyle: {
                    color: '#B7E1FF',
                    fontSize: 14
                },
                data: [''],
                top: '10%'
            },
            xAxis: [{
                type: 'category',
                data: (function () {
                    var res = [];
                    return res;
                })(),
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        fontSize: 10
                    }
                }
            }, {
                type: 'category',
                show: false,
                data: (function () {
                    var res = [];
                    return res;
                })(),
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        fontSize: 10
                    }
                }
            }],
            yAxis: [{
                type: 'value',
                name: 'cpk值',
                nameTextStyle: {
                    fontSize: 14
                },
                axisLabel: {
                    textStyle: {
                        fontSize: 14,
                        fontFamily: 'Arial',
                    }
                },
                splitLine: {
                    show: false//不显示网格线
                },
                max: 2,
                min: 0
            }],
            series: [{
                name: 'cpk',
                type: 'bar',
                barWidth: '30%',
                markLine: {
                    silent: true,
                    symbol: 'none',//去掉箭头
                    itemStyle: {
                        normal: {lineStyle: {type: 'dotted', color: 'red'}, label: {show: true, position: 'end'}}
                    },//'dotted'虚线 'solid'实线
                    data: [
                        {
                            name: '',
                            yAxis: 1,
                            itemStyle: {
                                normal: {
                                    lineStyle: {
                                        type: 'solid',
                                        color: 'red ',
                                        width: 0.5
                                    },
                                    label: {
                                        formatter: 1,
                                        textStyle: {
                                            color: 'red',
                                            fontSize: 14,
                                            fontWeight: "bolder"
                                        }
                                    }
                                }
                            }
                        },
                        {
                            name: '',
                            yAxis: 1.33,
                            itemStyle: {
                                normal: {
                                    lineStyle: {
                                        type: 'solid',
                                        color: 'red ',
                                        width: 0.5
                                    },
                                    label: {
                                        formatter: 1.33,
                                        textStyle: {
                                            color: 'red',
                                            fontSize: 14,
                                            fontWeight: "bolder"
                                        }
                                    }
                                }
                            }
                        }
                    ]
                },
                data: (function () {
                    var res = [];
                    return res;
                })(),
                itemStyle: {
                    normal: {
                        color: 'blue',
                        label: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: 'black',
                                fontSize: 14
                            }
                        }
                    }
                }
            }]
        };
        $scope.init = function () {
            $scope.cancel = function () {
                items.modalInstance.close();
            };
            var cpkTimeTwo = ec.init(document.getElementById('echartsTwo'));
            cpkTimeTwo.setOption(cpkTimeTwo_option);
            $scope.data = items.data;
            $scope.data.x = items.xName;

            var i3 = layer.load();
            $http({
                method: "post",
                url: "CPK/showEchartsTwoByTime",
                data: $scope.data

            }).then(function (response) {
                var x = cpkTimeTwo_option.xAxis[0].data;
                var xx = cpkTimeTwo_option.xAxis[1].data;
                var y = cpkTimeTwo_option.series[0].data;
                x.splice(0, x.length);
                xx.splice(0, xx.length);
                y.splice(0, y.length);
                angular.forEach(response.data, function (i, j) {
                    x.push(i.newPos);
                    xx.push(i.pos);
                    y.push(i.avg);
                })
                cpkTimeTwo.setOption(cpkTimeTwo_option);
                layer.close(i3);
            }, function (response) {
                layer.close(i3);
            });

            cpkTimeTwo.on('click', function (params) {
                $scope.xName = cpkTimeTwo_option.xAxis[1].data[params.dataIndex];
                $scope.xName2 = params.name;
                // console.info($scope.xName);
                $scope.modalInstance = $uibModal.open({
                    animation: $scope.animationsEnabled,
                    ariaLabelledBy: 'modal-title',
                    ariaDescribedBy: 'modal-body',
                    templateUrl: 'CPK/eTimeThree.html',
                    controllerAs: '$scope',
                    controller: 'CPKTimeThree',
                    backdrop: 'static',
                    resolve: {
                        itemss: function () {
                            return $scope;
                        }
                    }
                });
            });
        }
    }).controller('CPKTimeThree', function (itemss, $scope, $http, $uibModal) {

        var cpkTimeThree_option = {
            title: {
                text: itemss.data.x + " " + itemss.xName2 + " " + 'CPK对比图',
                textStyle: {
                    fontSize: 14
                },
                left: 'center'

            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                textStyle: {
                    color: '#B7E1FF',
                    fontSize: 14
                },
                data: [''],
                top: '10%'
            },
            xAxis: [{
                type: 'category',
                data: (function () {
                    var res = [];
                    return res;
                })(),
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        fontSize: 14
                    }
                }
            }],
            yAxis: [{
                type: 'value',
                name: 'cpk值',
                nameTextStyle: {
                    fontSize: 14,
                },
                axisLabel: {
                    textStyle: {
                        fontSize: 14,
                        fontFamily: 'Arial',
                    }
                },
                splitLine: {
                    show: false//不显示网格线
                },
                max: 2,
                min: 0
            }],
            series: [{
                name: 'cpk',
                type: 'bar',
                barWidth: '30%',
                markLine: {
                    silent: true,
                    symbol: 'none',//去掉箭头
                    itemStyle: {
                        normal: {lineStyle: {type: 'dotted', color: 'red'}, label: {show: true, position: 'end'}}
                    },//'dotted'虚线 'solid'实线
                    data: [
                        {
                            name: '',
                            yAxis: 1,
                            itemStyle: {
                                normal: {
                                    lineStyle: {
                                        type: 'solid',
                                        color: 'red ',
                                        width: 0.5
                                    },
                                    label: {
                                        formatter: 1,
                                        textStyle: {
                                            color: 'red',
                                            fontSize: 14,
                                            fontWeight: "bolder"
                                        }
                                    }
                                }
                            }
                        },
                        {
                            name: '',
                            yAxis: 1.33,
                            itemStyle: {
                                normal: {
                                    lineStyle: {
                                        type: 'solid',
                                        color: 'red ',
                                        width: 0.5
                                    },
                                    label: {
                                        formatter: 1.33,
                                        textStyle: {
                                            color: 'red',
                                            fontSize: 14,
                                            fontWeight: "bolder"
                                        }
                                    }
                                }
                            }
                        }
                    ]
                },
                data: (function () {
                    var res = [];
                    return res;
                })(),
                itemStyle: {
                    normal: {
                        color: 'blue',
                        label: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: 'black',
                                fontSize: 14
                            }
                        }
                    }
                }
            }]
        };
        $scope.init = function () {
            $scope.cancel = function () {
                itemss.modalInstance.close();
            };
            var cpkTimeThree = ec.init(document.getElementById('echartsThree'));
            cpkTimeThree.setOption(cpkTimeThree_option);
            $scope.data = itemss.data;
            $scope.data.y = itemss.xName;
            var i4 = layer.load();
            $http({
                method: "post",
                url: "CPK/showEchartsThreeByTime",
                data: $scope.data

            }).then(function (response) {
                var x = cpkTimeThree_option.xAxis[0].data;
                var y = cpkTimeThree_option.series[0].data;
                x.splice(0, x.length);
                y.splice(0, y.length);
                angular.forEach(response.data, function (i, j) {
                    x.push(i.item_cd);
                    y.push(i.avg);
                })
                cpkTimeThree.setOption(cpkTimeThree_option);
                layer.close(i4);
            }, function (response) {
                layer.close(i4);
            });
        }

    })
});
//