//var app = angular.module('myApp', ['ui.router','oc.lazyLoad','ui.bootstrap','ngRoute','ngTouch', 'ngAnimate', 'ngSanitize']);
define(function (require) {
    var app = require('./app');
    app.controller('indexController', function ($scope, $http, $state) {
        $scope.status = {
            open: []
        };
        $http({
            method: "POST",
            url: "public/getUser"

        }).then(function (response) {
            $scope.userName = response.data.username
        }, function (response) {

        });
        $scope.check = function (index) {
            if (index == 0)
                return true;
            else
                return false;
        };
        $scope.groups = [
            {
                contentList: [
                    {
                        content: "模型管理", url: "index.MXGL", contentList: [
                            {content: "模型管理", url: "index.MXGL"},
                            {content: "模型管理", url: "index.MXGL"}
                        ]
                    },
                    {
                        content: "生产数据统计分析", url: "index.TJFX"
                    },
                    {
                        content: "新钢种成分分析",
                        url: "index.CFFX"
                    },
                    {
                        content: "单工序分析",
                        url: "index.XSMX"
                    }
                ], content: "智能分析"
            },
            {contentList: [{content: "用户管理", url: "index.a"}, {content: "系统设置", url: "b({id:'aa'})"}], content: "系统管理"},
            {
                content: "质量实时监控", contentList: [
                    {
                        content: "BOF1", url: "", contentList: [
                            {content: " 氧枪高度", url: "index.BOF1_yqgd"},
                            {content: " 转炉角度", url: "index.BOF1_zljd"},
                            {content: " 顶吹氧气流量", url: ""}
                        ]
                    },
                    {
                        content: "BOF2", url: "", contentList: [
                            {content: " 氧枪高度", url: "index.BOF2_yqgd"},
                            {content: " 转炉角度", url: "index.BOF2_zljd"},
                            {content: " 顶吹氧气流量", url: ""}
                        ]
                    },
                    {
                        content: "LF1", url: "", contentList: [
                            {content: "钢包底吹AR流速", url: "index.LF1_arls"},
                            {content: "有功电度", url: "index.LF1_ygdd"},
                            {content: "无功电度", url: "index.LF1_wgdd"}
                        ]
                    },
                    {
                        content: "LF2", url: "", contentList: [
                            {content: "钢包底吹AR流速", url: "index.LF2_arls"},
                            {content: "有功电度", url: "index.LF2_ygdd"},
                            {content: "无功电度", url: "index.LF2_wgdd"}
                        ]
                    },
                    {
                        content: "LF5", url: "", contentList: [
                            {content: "钢包底吹AR流速", url: "index.LF5_arls"},
                            {content: "有功电度", url: "index.LF5_ygdd"},
                            {content: "无功电度", url: "index.LF5_wgdd"}
                        ]
                    },
                    {
                        content: "LF6", url: "", contentList: [
                            {content: " 底吹AR流速", url: ""},
                            {content: " 原边总电耗", url: ""}
                        ]
                    },
                    {
                        content: "RH1", url: "", contentList: [
                            {content: "真空罐压力", url: "index.RH1_zkgyl"},
                            {content: "真空环流", url: "index.RH1_zkhl"},
                            {content: "钢水温度", url: "index.RH1_gswd"},
                            {content: "底搅拌气体消耗", url: "index.RH1_qtxh"}
                        ]
                    },
                    {
                        content: "CCM1", url: "", contentList: [
                            {content: "拉速", url: "index.CCM1_ls"},
                            {content: "频率", url: "index.CCM1_pl"},
                            {content: "电流", url: "index.CCM1_dl"},
                            {content: "振频", url: "index.CCM1_zp"},
                            {content: "振幅", url: "index.CCM1_zf"},
                            {content: "累计铸流长度", url: "index.CCM1_zlcd"},
                            {content: "结晶器水量", url: "index.CCM1_jjqsl"}
                        ]
                    },
                    {
                        content: "CCM2", url: "", contentList: [
                            {content: "拉速", url: "index.CCM2_ls"},
                            {content: "频率", url: "index.CCM2_pl"},
                            {content: "电流", url: "index.CCM2_dl"},
                            {content: "振频", url: "index.CCM2_zp"},
                            {content: "振幅", url: "index.CCM2_zf"},
                            {content: "累计铸流长度", url: "index.CCM2_zlcd"},
                            {content: "结晶器水量", url: "index.CCM2_jjqsl"}
                        ]
                    }
                ]
            },
            {
                content: "过程质量追溯", contentList: [
                    {content: "成品信息", url: "index.MXGL"}
                ]
            },
            {
                content: "产品质量分析", contentList: [
                    {
                        content: "图形分析", url: "index.MXGL", contentList: [
                            {content: "直方图", url: "index.TXFXbar"},
                            {content: "饼图", url: "index.TXFXpie"},
                            {content: "散点图", url: "index.MXGL"},
                            {content: "排列图", url: "index.MXGL"},
                            {content: "盒形图", url: "index.MXGL"},
                            {content: "运行图", url: "index.MXGL"}
                        ]
                    },
                    {
                        content: "质量统计分析", url: "index.MXGL", contentList: [
                            {content: "基本生产数据统计", url: "index.MXGL"},
                            {content: "分类统计对比分析", url: "index.MXGL"},
                            {content: "对比分析", url: "index.MXGL"}
                        ]
                    },
                    {
                        content: "质量缺陷分析（单工序分析）", url: "index.MXGL", contentList: [
                            {content: "线性相关分析", url: "index.XGXFX"},
                            {content: "偏相关分析", url: "index.MXGL"},
                            {content: "方差分析（单因子/多因子）", url: "index.FCFX"},
                            {content: "主元分析", url: "index.ZYFX"}
                        ]
                    },
                    {
                        content: "CPK分析", url: "index.MXGL", contentList: [
                            {content: "CPK整体趋势", url: "index.CPK1"},
                            {content: "工位CPK对比", url: "index.CPK2"},
                            {content: "班组CPK对比", url: "index.CPK_BZ"}
                        ]
                    }
                ]
            },
            {
                content: "钢种质量设计", contentList: [
                    {content: "模型管理", url: "index.MXGL"},
                    {content: "质量建模", url: "index.MXGL"}
                ]
            },
            {
                content: "工艺标准库", contentList: [
                    {content: "转炉工艺标准", url: "index.MXGL"},
                    {content: "精炼工艺标准", url: "index.MXGL"},
                    {
                        content: "连铸工艺标准", contentList: [
                            {content: "主表", url: "index.GYBZ_lianzhu"},
                            {content: "子表1", url: "index.GYBZ_lianzhu_sub1"},
                            {content: "子表2", url: "index.GYBZ_lianzhu_sub2"}
                        ]
                    },
                    {content: "化学成分标准", url: "index.MXGL"},
                    {content: "demo", url: "index.GYBZ_lz"}
                ]
            }
        ]
    })
});