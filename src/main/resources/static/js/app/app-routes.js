define(function (require) {
    var app = require('./app');
    // require('app/indexController')
    app.factory('Excel', function ($window) {
        var uri = 'data:application/vnd.ms-excel;base64,',
            template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="UTF-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
            base64 = function (s) {
                return $window.btoa(unescape(encodeURIComponent(s)));
            },
            format = function (s, c) {
                return s.replace(/{(\w+)}/g, function (m, p) {
                    return c[p];
                })
            };
        return {
            tableToExcel: function (tableId, worksheetName) {
                var table = $(tableId),
                    ctx = {worksheet: worksheetName, table: table.html()},
                    href = uri + base64(format(template, ctx));
                return href;
            }
        };
    })
    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/index');
        $stateProvider.state('index', {
            url: '/index',
            templateUrl: function () {
                return 'index1.html';
            },
            controllerUrl: 'app/indexController',
            controller: 'indexController'
        }).state('index.MXGL', {
            url: '/MXGL',//ui-sref中的接受参数
            templateUrl: function () {
                return 'ZXZLYC/MXGL/list.html';
            },
            controllerUrl: 'app/ZXZLYC/MXGL',
            controller: 'MXGLController'
        })
            .state('index.CFFX', {
                url: '/CFFX',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'ZXZLYC/CFFX/list.html';
                },
                controllerUrl: 'app/ZXZLYC/CFFX',
                controller: 'CFFXController'
            })
            .state('index.ZLYC', {
                url: '/ZLYC',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'ZXZLYC/ZLYC/list.html';
                },
                controllerUrl: 'app/ZXZLYC/ZLYC',
                controller: 'ZLYCController'
            })
            .state('index.user', {
                url: '/system/user',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'system/user/list.html';
                },
                controllerUrl: 'app/system/user/user',
                controller: 'UserController'
            })
            .state('index.role', {
                url: '/system/role',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'system/role/list.html';
                },
                controllerUrl: 'app/system/role/role',
                controller: 'RoleController'
            })
            .state('index.GYBZ_lianzhu', {
                url: '/GYBZ_lianzhu',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'GYBZ/lianzhu_list.html';
                },
                controllerUrl: 'app/GYBZ/lianzhu_list',
                controller: 'GYBZ_lianzhuController'
            })
            .state('index.GYBZ_lianzhu_sub1', {
                url: '/GYBZ_lianzhu_sub1',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'GYBZ/lianzhu_sub1_list.html';
                },
                controllerUrl: 'app/GYBZ/lianzhu_sub1_list',
                controller: 'GYBZ_lianzhuSub1Controller'
            })
            .state('index.GYBZ_lianzhu_sub2', {
                url: '/GYBZ_lianzhu_sub2',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'GYBZ/lianzhu_sub2_list.html';
                },
                controllerUrl: 'app/GYBZ/lianzhu_sub2_list',
                controller: 'GYBZ_lianzhuSub2Controller'
            })
            .state('index.GYBZ_zhuanlu', {
                url: '/GYBZ_zhuanlu',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'GYBZ/zhuanlu_list.html';
                },
                controllerUrl: 'app/GYBZ/zhuanlu_list',
                controller: 'GYBZ_zhuanluController'
            })
            .state('index.GYBZ_zhuanlu_sub', {
                url: '/GYBZ_zhuanlu_sub',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'GYBZ/zhuanlu_sub_list.html';
                },
                controllerUrl: 'app/GYBZ/zhuanlu_sub_list',
                controller: 'GYBZ_zhuanlu_subController'
            })
            .state('index.GYBZ_jinglian', {
                url: '/GYBZ_jinglian',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'GYBZ/jinglian_list.html';
                },
                controllerUrl: 'app/GYBZ/jinglian_list',
                controller: 'GYBZ_jinglianController'
            })
            .state('index.GYBZ_fangxing', {
                url: '/GYBZ_fangxing',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'GYBZ/fangxing_list.html';
                },
                controllerUrl: 'app/GYBZ/fangxing_list',
                controller: 'GYBZ_fangxingController'
            })
            .state('index.GYBZ_neikong', {
                url: '/GYBZ_neikong',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'GYBZ/neikong_list.html';
                },
                controllerUrl: 'app/GYBZ/neikong_list',
                controller: 'GYBZ_neikongController'
            })
            .state('index.GYBZ_xingneng', {
                url: '/GYBZ_xingneng',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'GYBZ/xingneng_list.html';
                },
                controllerUrl: 'app/GYBZ/xingneng_list',
                controller: 'GYBZ_xingnengController'
            })
            .state('index.GYBZ_jiarelu', {
                url: '/GYBZ_jiarelu',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'GYBZ/jiarelu_list.html';
                },
                controllerUrl: 'app/GYBZ/jiarelu_list',
                controller: 'GYBZ_jiareluController'
            })
            .state('index.GYBZ_zhazhi', {
                url: '/GYBZ_zhazhi',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'GYBZ/zhazhi_list.html';
                },
                controllerUrl: 'app/GYBZ/zhazhi_list',
                controller: 'GYBZ_zhazhiController'
            })
            .state('index.a', {
                url: '/a',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'a.html';
                },
                controllerUrl: 'app/a',
                controller: 'aController'
            })
            .state('index.XGXFX', {
                url: '/SXFX/XGXFX',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'SXFX/XGXFX.html';
                },
                controllerUrl: 'app/SXFX/XGXFX',
                controller: 'XGXFXController'
            })
            .state('index.FCFX', {
                url: '/SXFX/FCFX',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'SXFX/FCFX.html';
                },
                controllerUrl: 'app/SXFX/FCFX',
                controller: 'FCFXController'
            })
            .state('index.ZYFX', {
                url: '/SXFX/ZYFX',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'SXFX/ZYFX.html';
                },
                controllerUrl: 'app/SXFX/ZYFX',
                controller: 'ZYFXController'
            })
            .state('index.PXGFX', {
                url: '/SXFX/PXGFX',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'SXFX/PXGFX.html';
                },
                controllerUrl: 'app/SXFX/PXGFX',
                controller: 'PXGFXController'
            })
            .state('index.TXFXbar', {
                url: '/TXFXbar',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'TXFX/bar.html';
                },
                controllerUrl: 'app/TXFX/bar',
                controller: 'barController'
            })
            .state('index.TXFXpie', {
                url: '/TXFXpie',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'TXFX/pie.html';
                },
                controllerUrl: 'app/TXFX/pie',
                controller: 'pieController'
            })
            .state('index.TXFXscatter', {
                url: '/TXFXscatter',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'TXFX/scatter.html';
                },
                controllerUrl: 'app/TXFX/scatter',
                controller: 'scatterController'
            })
            .state('index.TXFXbarSort', {
                url: '/TXFXbarSort',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'TXFX/barSort.html';
                },
                controllerUrl: 'app/TXFX/barSort',
                controller: 'barSortController'
            })
            .state('index.TXFXboxplot', {
                url: '/TXFXboxplot',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'TXFX/boxplot.html';
                },
                controllerUrl: 'app/TXFX/boxplot',
                controller: 'boxplotController'
            })
            .state('index.TXFXline', {
                url: '/TXFXline',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'TXFX/line.html';
                },
                controllerUrl: 'app/TXFX/line',
                controller: 'lineController'
            })
            .state('index.ZLTJFXjbtj', {
                url: '/ZLTJFXjbtj',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'ZLTJFX/jbtj.html';
                },
                controllerUrl: 'app/ZLTJFX/jbtj',
                controller: 'jbtjController'
            })
            .state('index.ZLTJFXfltj', {
                url: '/ZLTJFXfltj',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'ZLTJFX/fltj.html';
                },
                controllerUrl: 'app/ZLTJFX/fltj',
                controller: 'fltjController'
            })
            .state('index.ZLTJFXdbfx', {
                url: '/ZLTJFXdbfx',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'ZLTJFX/dbfx.html';
                },
                controllerUrl: 'app/ZLTJFX/dbfx',
                controller: 'dbfxController'
            })
            .state('index.CPK1', {
                url: '/CPK1',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'CPK/list1.html';
                },
                controllerUrl: 'app/CPK/cpk1',
                controller: 'CPKController1'
            }).state('index.CPK2', {
            url: '/CPK2',//ui-sref中的接受参数
            templateUrl: function () {
                return 'CPK/list2.html';
            },
            controllerUrl: 'app/CPK/cpk2',
            controller: 'CPKController2'
        }).state('index.CPK_BZ', {
            url: '/CPK_BZ',//ui-sref中的接受参数
            templateUrl: function () {
                return 'CPK/list_bz.html';
            },
            controllerUrl: 'app/CPK/cpk_bz',
            controller: 'CPKController_bz'
        }).state('index.BOF1Header.BOF1_yqgd', {
            url: '/BOF1/yqgd',//ui-sref中的接受参数
            templateUrl: function () {
                return 'SSJK/BOF1/yqgd.html';
            },
            controllerUrl: 'app/SSJK/BOF1/yqgd',
            controller: 'yqgdController1'
        })
            .state('index.BOF1Header.BOF1_zljd', {
                url: '/BOF1/zljd',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'SSJK/BOF1/zljd.html';
                },
                controllerUrl: 'app/SSJK/BOF1/zljd',
                controller: 'zljdController1'
            }).state('index.BOF1Header.BOF1_dcyqhl', {
            url: '/BOF1/dcyqhl',//ui-sref中的接受参数
            templateUrl: function () {
                return 'SSJK/BOF1/dcyqhl.html';
            },
            controllerUrl: 'app/SSJK/BOF1/dcyqhl',
            controller: 'dcyqhlController1'
        })
            .state('index.BOF2Header.BOF2_yqgd', {
                url: '/BOF2/yqgd',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'SSJK/BOF2/yqgd.html';
                },
                controllerUrl: 'app/SSJK/BOF2/yqgd',
                controller: 'yqgdController2'
            })
            .state('index.BOF2Header.BOF2_zljd', {
                url: '/BOF2/zljd',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'SSJK/BOF2/zljd.html';
                },
                controllerUrl: 'app/SSJK/BOF2/zljd',
                controller: 'zljdController2'
            }).state('index.BOF2Header.BOF2_dcyqhl', {
            url: '/BOF2/dcyqhl',//ui-sref中的接受参数
            templateUrl: function () {
                return 'SSJK/BOF2/dcyqhl.html';
            },
            controllerUrl: 'app/SSJK/BOF2/dcyqhl',
            controller: 'dcyqhlController2'
        })
            .state('index.LF1Header.LF1_arls', {
                url: '/LF1/arls',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'SSJK/LF1/arls.html';
                },
                controllerUrl: 'app/SSJK/LF1/arls',
                controller: 'arlsController1'
            })
            .state('index.LF1Header.LF1_ygdd', {
                url: '/LF1/ygdd',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'SSJK/LF1/ygdd.html';
                },
                controllerUrl: 'app/SSJK/LF1/ygdd',
                controller: 'ygddController1'
            })
            .state('index.LF1Header.LF1_wgdd', {
                url: '/LF1/wgdd',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'SSJK/LF1/wgdd.html';
                },
                controllerUrl: 'app/SSJK/LF1/wgdd',
                controller: 'wgddController1'
            })
            .state('index.LF2Header.LF2_arls', {
                url: '/LF2/arls',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'SSJK/LF2/arls.html';
                },
                controllerUrl: 'app/SSJK/LF2/arls',
                controller: 'arlsController2'
            })
            .state('index.LF2Header.LF2_ygdd', {
                url: '/LF2/ygdd',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'SSJK/LF2/ygdd.html';
                },
                controllerUrl: 'app/SSJK/LF2/ygdd',
                controller: 'ygddController2'
            })
            .state('index.LF2Header.LF2_wgdd', {
                url: '/LF2/wgdd',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'SSJK/LF2/wgdd.html';
                },
                controllerUrl: 'app/SSJK/LF2/wgdd',
                controller: 'wgddController2'
            })
            .state('index.LF5Header.LF5_arls', {
                url: '/LF5/arls',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'SSJK/LF5/arls.html';
                },
                controllerUrl: 'app/SSJK/LF5/arls',
                controller: 'arlsController5'
            })
            .state('index.LF5Header.LF5_ygdd', {
                url: '/LF5/ygdd',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'SSJK/LF5/ygdd.html';
                },
                controllerUrl: 'app/SSJK/LF5/ygdd',
                controller: 'ygddController5'
            })
            .state('index.LF5Header.LF5_wgdd', {
                url: '/LF5/wgdd',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'SSJK/LF5/wgdd.html';
                },
                controllerUrl: 'app/SSJK/LF5/wgdd',
                controller: 'wgddController5'
            })
            .state('index.RH1Header.RH1_zkgyl', {
                url: '/RH1/zkgyl',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'SSJK/RH1/zkgyl.html';
                },
                controllerUrl: 'app/SSJK/RH1/zkgyl',
                controller: 'zkgylController1'
            })
            .state('index.RH1Header.RH1_zkhl', {
                url: '/RH1/zkhl',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'SSJK/RH1/zkhl.html';
                },
                controllerUrl: 'app/SSJK/RH1/zkhl',
                controller: 'zkhlController1'
            })
            .state('index.RH1Header.RH1_gswd', {
                url: '/RH1/gswd',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'SSJK/RH1/gswd.html';
                },
                controllerUrl: 'app/SSJK/RH1/gswd',
                controller: 'gswdController1'
            })
            .state('index.RH1Header.RH1_qtxh', {
                url: '/RH1/qtxh',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'SSJK/RH1/qtxh.html';
                },
                controllerUrl: 'app/SSJK/RH1/qtxh',
                controller: 'qtxhController1'
            })
            .state('index.ccm1Header.CCM1_ls', {
                url: '/CCM1/ls',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'SSJK/CCM1/ls.html';
                },
                controllerUrl: 'app/SSJK/CCM1/ls',
                controller: 'lsController1'
            })
            .state('index.ccm1Header.CCM1_pl', {
                url: '/CCM1/pl',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'SSJK/CCM1/pl.html';
                },
                controllerUrl: 'app/SSJK/CCM1/pl',
                controller: 'plController1'
            })
            .state('index.ccm1Header.CCM1_dl', {
                url: '/CCM1/dl',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'SSJK/CCM1/dl.html';
                },
                controllerUrl: 'app/SSJK/CCM1/dl',
                controller: 'dlController1'
            })
            .state('index.ccm1Header.CCM1_zp', {
                url: '/CCM1/zp',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'SSJK/CCM1/zp.html';
                },
                controllerUrl: 'app/SSJK/CCM1/zp',
                controller: 'zpController1'
            })
            .state('index.ccm1Header.CCM1_zf', {
                url: '/CCM1/zf',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'SSJK/CCM1/zf.html';
                },
                controllerUrl: 'app/SSJK/CCM1/zf',
                controller: 'zfController1'
            })
            .state('index.ccm1Header.CCM1_zlcd', {
                url: '/CCM1/zlcd',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'SSJK/CCM1/zlcd.html';
                },
                controllerUrl: 'app/SSJK/CCM1/zlcd',
                controller: 'zlcdController1'
            })
            .state('index.ccm1Header.CCM1_jjqsl', {
                url: '/CCM1/jjqsl',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'SSJK/CCM1/jjqsl.html';
                },
                controllerUrl: 'app/SSJK/CCM1/jjqsl',
                controller: 'jjqslController1'
            })
            .state('index.ccm2Header.CCM2_ls', {
                url: '/CCM2/ls',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'SSJK/CCM2/ls.html';
                },
                controllerUrl: 'app/SSJK/CCM2/ls',
                controller: 'lsController2'
            })
            .state('index.ccm2Header.CCM2_pl', {
                url: '/CCM2/pl',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'SSJK/CCM2/pl.html';
                },
                controllerUrl: 'app/SSJK/CCM2/pl',
                controller: 'plController2'
            })
            .state('index.ccm2Header.CCM2_dl', {
                url: '/CCM2/dl',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'SSJK/CCM2/dl.html';
                },
                controllerUrl: 'app/SSJK/CCM2/dl',
                controller: 'dlController2'
            })
            .state('index.ccm2Header.CCM2_zp', {
                url: '/CCM2/zp',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'SSJK/CCM2/zp.html';
                },
                controllerUrl: 'app/SSJK/CCM2/zp',
                controller: 'zpController2'
            })
            .state('index.ccm2Header.CCM2_zf', {
                url: '/CCM2/zf',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'SSJK/CCM2/zf.html';
                },
                controllerUrl: 'app/SSJK/CCM2/zf',
                controller: 'zfController2'
            })
            .state('index.ccm2Header.CCM2_zlcd', {
                url: '/CCM2/zlcd',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'SSJK/CCM2/zlcd.html';
                },
                controllerUrl: 'app/SSJK/CCM2/zlcd',
                controller: 'zlcdController2'
            })
            .state('index.ccm2Header.CCM2_jjqsl', {
                url: '/CCM2/jjqsl',//ui-sref中的接受参数
                templateUrl: function () {
                    return 'SSJK/CCM2/jjqsl.html';
                },
                controllerUrl: 'app/SSJK/CCM2/jjqsl',
                controller: 'jjqslController2'
            }).state('index.ZLZS', {
            url: '/ZLZS/cp',//ui-sref中的接受参数
            templateUrl: function () {
                return 'ZLZS/list.html';
            },
            controllerUrl: 'app/ZLZS/ZLZS',
            controller: 'ZLZSController'
        }).state('index.ccm1Header', {
            url: '/CCM1/header',//ui-sref中的接受参数
            templateUrl: function () {
                return 'SSJK/CCM1/list.html';
            },
            controllerUrl: 'app/SSJK/CCM1/header',
            controller: 'CCM1HeaderController'
        }).state('index.ccm2Header', {
            url: '/CCM2/header',//ui-sref中的接受参数
            templateUrl: function () {
                return 'SSJK/CCM2/list.html';
            },
            controllerUrl: 'app/SSJK/CCM2/header',
            controller: 'CCM2HeaderController'
        }).state('index.BOF1Header', {
            url: '/BOF1/header',//ui-sref中的接受参数
            templateUrl: function () {
                return 'SSJK/BOF1/list.html';
            },
            controllerUrl: 'app/SSJK/BOF1/header',
            controller: 'BOF1HeaderController'
        }).state('index.BOF2Header', {
            url: '/BOF2/header',//ui-sref中的接受参数
            templateUrl: function () {
                return 'SSJK/BOF2/list.html';
            },
            controllerUrl: 'app/SSJK/BOF2/header',
            controller: 'BOF2HeaderController'
        }).state('index.LF1Header', {
            url: '/LF1/header',//ui-sref中的接受参数
            templateUrl: function () {
                return 'SSJK/LF1/list.html';
            },
            controllerUrl: 'app/SSJK/LF1/header',
            controller: 'LF1HeaderController'
        }).state('index.LF2Header', {
            url: '/LF2/header',//ui-sref中的接受参数
            templateUrl: function () {
                return 'SSJK/LF2/list.html';
            },
            controllerUrl: 'app/SSJK/LF2/header',
            controller: 'LF2HeaderController'
        }).state('index.LF5Header', {
            url: '/LF5/header',//ui-sref中的接受参数
            templateUrl: function () {
                return 'SSJK/LF5/list.html';
            },
            controllerUrl: 'app/SSJK/LF5/header',
            controller: 'LF5HeaderController'
        }).state('index.RH1Header', {
            url: '/RH1/header',//ui-sref中的接受参数
            templateUrl: function () {
                return 'SSJK/RH1/list.html';
            },
            controllerUrl: 'app/SSJK/RH1/header',
            controller: 'RH1HeaderController'
        }).state('index.ZLZS_luci', {
            url: '/ZLZS/luci',//ui-sref中的接受参数
            templateUrl: function () {
                return 'ZLZS/luci.html';
            },
            controllerUrl: 'app/ZLZS/luci',
            controller: 'LUCIController'
        }).state('index.ZLZS_pici', {
            url: '/ZLZS/pici',//ui-sref中的接受参数
            templateUrl: function () {
                return 'ZLZS/pici.html';
            },
            controllerUrl: 'app/ZLZS/pici',
            controller: 'PICIController'
        }).state('index.ZLPJ_luhao', {
            url: '/ZLPJ/luhao',//ui-sref中的接受参数
            templateUrl: function () {
                return 'ZLPJ/luhao.html';
            },
            controllerUrl: 'app/ZLPJ/luhao',
            controller: 'ZLPJController'
        }).state('index.ZLZD_luhao', {
            url: '/ZLZD/luhao',//ui-sref中的接受参数
            templateUrl: function () {
                return 'ZLZD/luhao.html';
            },
            controllerUrl: 'app/ZLZD/luhao',
            controller: 'ZLZDController'
        }).state('index.ZLZS_pos', {
            url: '/ZLZS/pos',//ui-sref中的接受参数
            templateUrl: function () {
                return 'ZLZS/pos.html';
            },
            controllerUrl: 'app/ZLZS/pos',
            controller: 'POSController'
        })
    }]);
});