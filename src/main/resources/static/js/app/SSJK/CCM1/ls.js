define(['echarts', 'require'], function (ec, require) {
    var app = require('../../app');
    app.controller('lsController1', function ($scope, $location) {
        // $scope.list = [];
        // $scope.totalItems = 0;
        // $scope.currentPage = 1;
        // var $ctrl = this;
        // $scope.page = function() {
        // $http({
        // method : "GET",
        // url : "Ssjk/list/" + $scope.currentPage + "/5"
        // }).then(function(response) {
        // $scope.totalItems = response.data.total;
        // $scope.list = response.data.list;
        // }, function(response) {
        // });
        // }
        // $http({
        //    method: "POST",
        //    url: "SSJK/queryHeaderInfo",
        //    data: {lzNum: "1"}
        // }).then(function (response) {
        //    console.info("success");
        //    $scope.luhao = response.data.luhao;
        //    $scope.gangzhong = response.data.gangzhong;
        //    $scope.duanmian = response.data.duanmian;
        // }, function (response) {
        // });


        var target = -1;

        $scope.$on("to-child", function (event, msg) {
            target = msg;
        });
        $scope.option1 = {
            title: {
                text: '1流拉速',
                textStyle: {
                    color: 'black',
                    fontSize: 12
                },
                left: 'center'
            },
            tooltip: {
                trigger: 'axis'
            },
            // legend : {
            // 	textStyle : {
            // 		color : 'black',
            // 		fontSize : 10
            // 	},
            // 	data : [ '1流拉速' ],
            // 	top : '10%'
            // },
            xAxis: [{
                type: 'category',
                data: (function () {
                    var res = [];
                    return res;
                })(),
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        color: 'black',
                        fontSize: 7
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'black'
                    }
                },
                boundaryGap: false
            }],
            grid: {
                left: 33,
                right: 30
            },
            yAxis: [{
                type: 'value',
                name: '',
                nameTextStyle: {
                    fontSize: 9,
                    color: 'black'
                },
                axisLabel: {
                    textStyle: {
                        color: 'black',
                        fontSize: 9,
                        fontFamily: 'Arial',
                    }
                },
                splitLine: {
                    show: false
                    // 不显示网格线
                }

            }],
            // visualMap : {
            // 	/*
            // 	 * show:false, top:10, right: 10,
            // 	 */
            // 	show : false,
            // 	pieces : [ {
            // 		gt : target - 0.02,
            // 		lte : target + 0.02,// 最小值的界限
            // 		color : 'green'
            // 	} ],
            // 	outOfRange : {
            // 		color : 'red'
            // 	}
            // },
            series: [{
                name: '1流拉速',
                type: 'line',
                // markLine : {
                // 	symbol : 'none',// 去掉箭头
                // 	itemStyle : {
                // 		normal : {
                // 			lineStyle : {
                // 				type : 'dotted',
                // 				color : 'blue'
                // 			},
                // 			label : {
                // 				show : true,
                // 				position : 'end'
                // 			}
                // 		}
                // 	},// 'dotted'虚线 'solid'实线
                // 	data : [ {
                // 		name : '目标拉速1',
                // 		yAxis : target,
                // 		itemStyle : {
                // 			normal : {
                // 				lineStyle : {
                // 					type : 'solid',
                // 					color : 'blue ',
                // 					width : 1
                // 				},
                // 				label : {
                // 					formatter : target,
                // 					textStyle : {
                // 						color : 'blue',
                // 						fontSize : 7,
                // 						fontWeight : "bolder"
                // 					}
                // 				}
                // 			}
                // 		}
                // 	}, {
                // 		name : '目标拉速2',
                // 		yAxis : target,
                // 		itemStyle : {
                // 			normal : {
                // 				lineStyle : {
                // 					type : 'solid',
                // 					color : 'blue ',
                // 					width : 1
                // 				},
                // 				label : {
                // 					formatter : target,
                // 					textStyle : {
                // 						color : 'blue',
                // 						fontSize : 7,
                // 						fontWeight : "bolder"
                // 					}
                // 				}
                // 			}
                // 		}
                // 	} ]
                // },
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
                                fontSize: 9
                            }
                        }
                    }
                }
            }]
        }
        $scope.option2 = {
            title: {
                text: '2流拉速',
                textStyle: {
                    color: 'black',
                    fontSize: 12
                },
                left: 'center'
            },
            tooltip: {
                trigger: 'axis'
            },
            // legend : {
            // 	textStyle : {
            // 		color : 'black',
            // 		fontSize : 10
            // 	},
            // 	data : [ '2流拉速' ],
            // 	top : '10%'
            // },
            xAxis: [{
                type: 'category',
                data: (function () {
                    var res = [];
                    return res;
                })(),

                axisLabel: {
                    interval: 0,
                    textStyle: {
                        color: 'black',
                        fontSize: 7
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'black'
                    }
                },
                boundaryGap: false
            }],
            yAxis: [{
                type: 'value',
                name: '',
                nameTextStyle: {
                    fontSize: 9,
                    color: 'black'
                },
                axisLabel: {
                    textStyle: {
                        color: 'black',
                        fontSize: 9,
                        fontFamily: 'Arial',
                    }
                },
                splitLine: {
                    show: false
                    // 不显示网格线
                }

            }],
            // visualMap : {
            // 	/*
            // 	 * show:false, top:10, right: 10,
            // 	 */
            // 	show : false,
            // 	pieces : [ {
            // 		gt : -1,
            // 		lte : 0,// 最小值的界限
            // 		color : 'green'
            // 	} ],
            // 	outOfRange : {
            // 		color : 'red'
            // 	}
            // },
            grid: {
                left: 33,
                right: 30
            },
            series: [{
                name: '2流拉速',
                type: 'line',
                // markLine : {
                // 	symbol : 'none',// 去掉箭头
                // 	itemStyle : {
                // 		normal : {
                // 			lineStyle : {
                // 				type : 'dotted',
                // 				color : 'blue'
                // 			},
                // 			label : {
                // 				show : true,
                // 				position : 'end'
                // 			}
                // 		}
                // 	},// 'dotted'虚线 'solid'实线
                // 	data : [ {
                // 		name : '目标拉速',
                // 		yAxis : target,
                // 		itemStyle : {
                // 			normal : {
                // 				lineStyle : {
                // 					type : 'solid',
                // 					color : 'blue ',
                // 					width : 1
                // 				},
                // 				label : {
                // 					formatter : target,
                // 					textStyle : {
                // 						color : 'blue',
                // 						fontSize : 7,
                // 						fontWeight : "bolder"
                // 					}
                // 				}
                // 			}
                // 		}
                // 	}, {
                // 		name : '目标拉速2',
                // 		yAxis : target,
                // 		itemStyle : {
                // 			normal : {
                // 				lineStyle : {
                // 					type : 'solid',
                // 					color : 'blue ',
                // 					width : 1
                // 				},
                // 				label : {
                // 					formatter : target,
                // 					textStyle : {
                // 						color : 'blue',
                // 						fontSize : 7,
                // 						fontWeight : "bolder"
                // 					}
                // 				}
                // 			}
                // 		}
                // 	} ]
                // },
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
                                fontSize: 9
                            }
                        }
                    }
                }
            }]
        }
        $scope.option3 = {
            title: {
                text: '3流拉速',
                textStyle: {
                    color: 'black',
                    fontSize: 12
                },
                left: 'center'
            },
            tooltip: {
                trigger: 'axis'
            },
            // legend : {
            // 	textStyle : {
            // 		color : 'black',
            // 		fontSize : 10
            // 	},
            // 	data : [ '3流拉速' ],
            // 	top : '10%'
            // },
            xAxis: [{
                type: 'category',
                data: (function () {
                    var res = [];
                    return res;
                })(),
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        color: 'black',
                        fontSize: 7
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'black'
                    }
                },
                boundaryGap: false
            }],
            yAxis: [{
                type: 'value',
                name: '',
                nameTextStyle: {
                    fontSize: 9,
                    color: 'black'
                },
                axisLabel: {
                    textStyle: {
                        color: 'black',
                        fontSize: 9,
                        fontFamily: 'Arial',
                    }
                },
                splitLine: {
                    show: false
                    // 不显示网格线
                },

            }],
            // visualMap : {
            // 	/*
            // 	 * show:false, top:10, right: 10,
            // 	 */
            // 	show : false,
            // 	pieces : [ {
            // 		gt : -1,
            // 		lte : 0,// 最小值的界限
            // 		color : 'green'
            // 	} ],
            // 	outOfRange : {
            // 		color : 'red'
            // 	}
            // },
            grid: {
                left: 33,
                right: 30
            },
            series: [{
                name: '3流拉速',
                type: 'line',
                // markLine : {
                // 	symbol : 'none',// 去掉箭头
                // 	itemStyle : {
                // 		normal : {
                // 			lineStyle : {
                // 				type : 'dotted',
                // 				color : 'blue'
                // 			},
                // 			label : {
                // 				show : true,
                // 				position : 'end'
                // 			}
                // 		}
                // 	},// 'dotted'虚线 'solid'实线
                // 	data : [ {
                // 		name : '目标拉速',
                // 		yAxis : target,
                // 		itemStyle : {
                // 			normal : {
                // 				lineStyle : {
                // 					type : 'solid',
                // 					color : 'blue ',
                // 					width : 1
                // 				},
                // 				label : {
                // 					formatter : target,
                // 					textStyle : {
                // 						color : 'blue',
                // 						fontSize : 7,
                // 						fontWeight : "bolder"
                // 					}
                // 				}
                // 			}
                // 		}
                // 	}, {
                // 		name : '目标拉速2',
                // 		yAxis : target,
                // 		itemStyle : {
                // 			normal : {
                // 				lineStyle : {
                // 					type : 'solid',
                // 					color : 'blue ',
                // 					width : 1
                // 				},
                // 				label : {
                // 					formatter : target,
                // 					textStyle : {
                // 						color : 'blue',
                // 						fontSize : 7,
                // 						fontWeight : "bolder"
                // 					}
                // 				}
                // 			}
                // 		}
                // 	} ]
                // },
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
                                fontSize: 9
                            }
                        }
                    }
                }
            }]
        }
        $scope.option4 = {
            title: {
                text: '4流拉速',
                textStyle: {
                    color: 'black',
                    fontSize: 12
                },
                left: 'center'
            },
            tooltip: {
                trigger: 'axis'
            },
            // legend : {
            // 	textStyle : {
            // 		color : 'black',
            // 		fontSize : 10
            // 	},
            // 	data : [ '4流拉速' ],
            // 	top : '10%'
            // },
            xAxis: [{
                type: 'category',
                data: (function () {
                    var res = [];
                    return res;
                })(),
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        color: 'black',
                        fontSize: 7
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'black'
                    }
                },
                boundaryGap: false
            }],
            yAxis: [{
                type: 'value',
                name: '',
                nameTextStyle: {
                    fontSize: 9,
                    color: 'black'
                },
                axisLabel: {
                    textStyle: {
                        color: 'black',
                        fontSize: 9,
                        fontFamily: 'Arial',
                    }
                },
                splitLine: {
                    show: false
                    // 不显示网格线
                },

            }],
            // visualMap : {
            // 	/*
            // 	 * show:false, top:10, right: 10,
            // 	 */
            // 	show : false,
            // 	pieces : [ {
            // 		gt : -1,
            // 		lte : 0,// 最小值的界限
            // 		color : 'green'
            // 	} ],
            // 	outOfRange : {
            // 		color : 'red'
            // 	}
            // },
            grid: {
                left: 33,
                right: 30
            },
            series: [{
                name: '4流拉速',
                type: 'line',
                // markLine : {
                // 	symbol : 'none',// 去掉箭头
                // 	itemStyle : {
                // 		normal : {
                // 			lineStyle : {
                // 				type : 'dotted',
                // 				color : 'blue'
                // 			},
                // 			label : {
                // 				show : true,
                // 				position : 'end'
                // 			}
                // 		}
                // 	},// 'dotted'虚线 'solid'实线
                // 	data : [ {
                // 		name : '目标拉速',
                // 		yAxis : target,
                // 		itemStyle : {
                // 			normal : {
                // 				lineStyle : {
                // 					type : 'solid',
                // 					color : 'blue ',
                // 					width : 1
                // 				},
                // 				label : {
                // 					formatter : target,
                // 					textStyle : {
                // 						color : 'blue',
                // 						fontSize : 7,
                // 						fontWeight : "bolder"
                // 					}
                // 				}
                // 			}
                // 		}
                // 	}, {
                // 		name : '目标拉速2',
                // 		yAxis : target,
                // 		itemStyle : {
                // 			normal : {
                // 				lineStyle : {
                // 					type : 'solid',
                // 					color : 'blue ',
                // 					width : 1
                // 				},
                // 				label : {
                // 					formatter : target,
                // 					textStyle : {
                // 						color : 'blue',
                // 						fontSize : 7,
                // 						fontWeight : "bolder"
                // 					}
                // 				}
                // 			}
                // 		}
                // 	} ]
                // },
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
                                fontSize: 9
                            }
                        }
                    }
                }
            }]
        }
        $scope.option5 = {
            title: {
                text: '5流拉速',
                textStyle: {
                    color: 'black',
                    fontSize: 12
                },
                left: 'center'
            },
            tooltip: {
                trigger: 'axis'
            },
            // legend : {
            // 	textStyle : {
            // 		color : 'black',
            // 		fontSize : 10
            // 	},
            // 	data : [ '5流拉速' ],
            // 	top : '10%'
            // },
            xAxis: [{
                type: 'category',
                data: (function () {
                    var res = [];
                    return res;
                })(),
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        color: 'black',
                        fontSize: 7
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'black'
                    }
                },
                boundaryGap: false
            }],
            yAxis: [{
                type: 'value',
                name: '',
                nameTextStyle: {
                    fontSize: 9,
                    color: 'black'
                },
                axisLabel: {
                    textStyle: {
                        color: 'black',
                        fontSize: 9,
                        fontFamily: 'Arial',
                    }
                },
                splitLine: {
                    show: false
                    // 不显示网格线
                }
            }],
            // visualMap : {
            // 	/*
            // 	 * show:false, top:10, right: 10,
            // 	 */
            // 	show : false,
            // 	pieces : [ {
            // 		gt : -1,
            // 		lte : 0,// 最小值的界限
            // 		color : 'green'
            // 	} ],
            // 	outOfRange : {
            // 		color : 'red'
            // 	}
            // },
            grid: {
                left: 33,
                right: 30
            },
            series: [{
                name: '5流拉速',
                type: 'line',
                // markLine : {
                // 	symbol : 'none',// 去掉箭头
                // 	itemStyle : {
                // 		normal : {
                // 			lineStyle : {
                // 				type : 'dotted',
                // 				color : 'blue'
                // 			},
                // 			label : {
                // 				show : true,
                // 				position : 'end'
                // 			}
                // 		}
                // 	},// 'dotted'虚线 'solid'实线
                // 	data : [ {
                // 		name : '目标拉速',
                // 		yAxis : target,
                // 		itemStyle : {
                // 			normal : {
                // 				lineStyle : {
                // 					type : 'solid',
                // 					color : 'blue ',
                // 					width : 1
                // 				},
                // 				label : {
                // 					formatter : target,
                // 					textStyle : {
                // 						color : 'blue',
                // 						fontSize : 7,
                // 						fontWeight : "bolder"
                // 					}
                // 				}
                // 			}
                // 		}
                // 	}, {
                // 		name : '目标拉速2',
                // 		yAxis : target,
                // 		itemStyle : {
                // 			normal : {
                // 				lineStyle : {
                // 					type : 'solid',
                // 					color : 'blue ',
                // 					width : 1
                // 				},
                // 				label : {
                // 					formatter : target,
                // 					textStyle : {
                // 						color : 'blue',
                // 						fontSize : 7,
                // 						fontWeight : "bolder"
                // 					}
                // 				}
                // 			}
                // 		}
                // 	} ]
                // },
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
                                fontSize: 9
                            }
                        }
                    }
                }
            }]
        }
        $scope.option6 = {
            title: {
                text: '6流拉速',
                textStyle: {
                    color: 'black',
                    fontSize: 12
                },
                left: 'center'
            },
            tooltip: {
                trigger: 'axis'
            },
            // legend : {
            // 	textStyle : {
            // 		color : 'black',
            // 		fontSize : 10
            // 	},
            // 	data : [ '6流拉速' ],
            // 	top : '10%'
            // },
            xAxis: [{
                type: 'category',
                data: (function () {
                    var res = [];
                    return res;
                })(),
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        color: 'black',
                        fontSize: 7
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'black'
                    }
                },
                boundaryGap: false
            }],
            yAxis: [{
                type: 'value',
                name: '',
                nameTextStyle: {
                    fontSize: 9,
                    color: 'black'
                },
                axisLabel: {
                    textStyle: {
                        color: 'black',
                        fontSize: 9,
                        fontFamily: 'Arial',
                    }
                },
                splitLine: {
                    show: false
                    // 不显示网格线
                },

            }],
            // visualMap : {
            // 	/*
            // 	 * show:false, top:10, right: 10,
            // 	 */
            // 	show : false,
            // 	pieces : [ {
            // 		gt : -1,
            // 		lte : 0,// 最小值的界限
            // 		color : 'green'
            // 	} ],
            // 	outOfRange : {
            // 		color : 'red'
            // 	}
            // },
            grid: {
                left: 33,
                right: 30
            },
            series: [{
                name: '6流拉速',
                type: 'line',
                // markLine : {
                // 	symbol : 'none',// 去掉箭头
                // 	itemStyle : {
                // 		normal : {
                // 			lineStyle : {
                // 				type : 'dotted',
                // 				color : 'blue'
                // 			},
                // 			label : {
                // 				show : true,
                // 				position : 'end'
                // 			}
                // 		}
                // 	},// 'dotted'虚线 'solid'实线
                // 	data : [ {
                // 		name : '目标拉速',
                // 		yAxis : target,
                // 		itemStyle : {
                // 			normal : {
                // 				lineStyle : {
                // 					type : 'solid',
                // 					color : 'blue ',
                // 					width : 1
                // 				},
                // 				label : {
                // 					formatter : target,
                // 					textStyle : {
                // 						color : 'blue',
                // 						fontSize : 7,
                // 						fontWeight : "bolder"
                // 					}
                // 				}
                // 			}
                // 		}
                // 	}, {
                // 		name : '目标拉速2',
                // 		yAxis : target,
                // 		itemStyle : {
                // 			normal : {
                // 				lineStyle : {
                // 					type : 'solid',
                // 					color : 'blue ',
                // 					width : 1
                // 				},
                // 				label : {
                // 					formatter : target,
                // 					textStyle : {
                // 						color : 'blue',
                // 						fontSize : 7,
                // 						fontWeight : "bolder"
                // 					}
                // 				}
                // 			}
                // 		}
                // 	} ]
                // },
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
                                fontSize: 9
                            }
                        }
                    }
                }
            }]
        }
        $scope.option7 = {
            title: {
                text: '7流拉速',
                textStyle: {
                    color: 'black',
                    fontSize: 12
                },
                left: 'center'
            },
            tooltip: {
                trigger: 'axis'
            },
            // legend : {
            // 	textStyle : {
            // 		color : 'black',
            // 		fontSize : 10
            // 	},
            // 	data : [ '7流拉速' ],
            // 	top : '10%'
            // },
            xAxis: [{
                type: 'category',
                data: (function () {
                    var res = [];
                    return res;
                })(),
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        color: 'black',
                        fontSize: 7
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'black'
                    }
                },
                boundaryGap: false
            }],
            yAxis: [{
                type: 'value',
                name: '',
                nameTextStyle: {
                    fontSize: 9,
                    color: 'black'
                },
                axisLabel: {
                    textStyle: {
                        color: 'black',
                        fontSize: 9,
                        fontFamily: 'Arial',
                    }
                },
                splitLine: {
                    show: false
                    // 不显示网格线
                }

            }],
            // visualMap : {
            // 	/*
            // 	 * show:false, top:10, right: 10,
            // 	 */
            // 	show : false,
            // 	pieces : [ {
            // 		gt : -1,
            // 		lte : 0,// 最小值的界限
            // 		color : 'green'
            // 	} ],
            // 	outOfRange : {
            // 		color : 'red'
            // 	}
            // },
            grid: {
                left: 33,
                right: 30
            },
            series: [{
                name: '7流拉速',
                type: 'line',
                // markLine : {
                // 	symbol : 'none',// 去掉箭头
                // 	itemStyle : {
                // 		normal : {
                // 			lineStyle : {
                // 				type : 'dotted',
                // 				color : 'blue'
                // 			},
                // 			label : {
                // 				show : true,
                // 				position : 'end'
                // 			}
                // 		}
                // 	},// 'dotted'虚线 'solid'实线
                // 	data : [ {
                // 		name : '目标拉速',// data[0].itemStyle.normal.label.formatter
                // 		yAxis : target,
                // 		itemStyle : {
                // 			normal : {
                // 				lineStyle : {
                // 					type : 'solid',
                // 					color : 'blue ',
                // 					width : 1
                // 				},
                // 				label : {
                // 					formatter : target,
                // 					textStyle : {
                // 						color : 'blue',
                // 						fontSize : 7,
                // 						fontWeight : "bolder"
                // 					}
                // 				}
                // 			}
                // 		}
                // 	}, {
                // 		name : '目标拉速2',
                // 		yAxis : target,
                // 		itemStyle : {
                // 			normal : {
                // 				lineStyle : {
                // 					type : 'solid',
                // 					color : 'blue ',
                // 					width : 1
                // 				},
                // 				label : {
                // 					formatter : target,
                // 					textStyle : {
                // 						color : 'blue',
                // 						fontSize : 7,
                // 						fontWeight : "bolder"
                // 					}
                // 				}
                // 			}
                // 		}
                // 	} ]
                // },
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
                                fontSize: 9
                            }
                        }
                    }
                }
            }]
        }

        function setTarget(data) {

            data = parseFloat(data);
            // console.info("3");
            if (data != -1) {
                var visualMap = {
                    /*
                     * show:false, top:10, right: 10,
                     */
                    show: false,
                    pieces: [{
                        //gt : target - 0.02,
                        //lte : target + 0.02,// 最小值的界限
                        color: 'green'
                    }],
                    outOfRange: {
                        color: 'red'
                    }
                };
                var markLine = {
                    symbol: 'none',// 去掉箭头
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                type: 'dotted',
                                color: 'blue'
                            },
                            label: {
                                show: true,
                                position: 'end'
                            }
                        }
                    },// 'dotted'虚线 'solid'实线
                    data: [{
                        name: '目标拉速',
                        // yAxis : target,
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    type: 'solid',
                                    color: 'blue ',
                                    width: 0.5
                                },
                                label: {
                                    // formatter : target,
                                    textStyle: {
                                        color: 'blue',
                                        fontSize: 5,
                                        fontWeight: "bolder"
                                    }
                                }
                            }
                        }
                    }, {
                        name: '目标拉速2',
                        // yAxis : target,
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    type: 'solid',
                                    color: 'blue ',
                                    width: 0.5
                                },
                                label: {
                                    // formatter : target,
                                    textStyle: {
                                        color: 'blue',
                                        fontSize: 5,
                                        fontWeight: "bolder"
                                    }
                                }
                            }
                        }
                    }]
                };

                //1
                $scope.option1.visualMap = visualMap;
                $scope.option1.series[0].markLine = markLine;

                //2
                $scope.option2.visualMap = visualMap;
                $scope.option2.series[0].markLine = markLine;

                //3
                $scope.option3.visualMap = visualMap;
                $scope.option3.series[0].markLine = markLine;

                //4
                $scope.option4.visualMap = visualMap;
                $scope.option4.series[0].markLine = markLine;

                //5
                $scope.option5.visualMap = visualMap;
                $scope.option5.series[0].markLine = markLine;

                //6
                $scope.option6.visualMap = visualMap;
                $scope.option6.series[0].markLine = markLine;

                //7
                $scope.option7.visualMap = visualMap;
                $scope.option7.series[0].markLine = markLine;

                //1
                $scope.option1.visualMap.pieces[0].lte = data + 0.02;
                $scope.option1.visualMap.pieces[0].gt = data - 0.02;
                $scope.option1.series[0].markLine.data[0].yAxis = data + 0.02;
                $scope.option1.series[0].markLine.data[0].itemStyle.normal.label.formatter = data + 0.02;
                $scope.option1.series[0].markLine.data[1].yAxis = data - 0.02;
                $scope.option1.series[0].markLine.data[1].itemStyle.normal.label.formatter = data - 0.02;

                //2
                $scope.option2.visualMap.pieces[0].lte = data + 0.02;
                $scope.option2.visualMap.pieces[0].gt = data - 0.02;
                $scope.option2.series[0].markLine.data[0].yAxis = data + 0.02;
                $scope.option2.series[0].markLine.data[0].itemStyle.normal.label.formatter = data + 0.02;
                $scope.option2.series[0].markLine.data[1].yAxis = data - 0.02;
                $scope.option2.series[0].markLine.data[1].itemStyle.normal.label.formatter = data - 0.02;

                //3
                $scope.option3.visualMap.pieces[0].lte = data + 0.02;
                $scope.option3.visualMap.pieces[0].gt = data - 0.02;
                $scope.option3.series[0].markLine.data[0].yAxis = data + 0.02;
                $scope.option3.series[0].markLine.data[0].itemStyle.normal.label.formatter = data + 0.02;
                $scope.option3.series[0].markLine.data[1].yAxis = data - 0.02;
                $scope.option3.series[0].markLine.data[1].itemStyle.normal.label.formatter = data - 0.02;

                //4
                $scope.option4.visualMap.pieces[0].lte = data + 0.02;
                $scope.option4.visualMap.pieces[0].gt = data - 0.02;
                $scope.option4.series[0].markLine.data[0].yAxis = data + 0.02;
                $scope.option4.series[0].markLine.data[0].itemStyle.normal.label.formatter = data + 0.02;
                $scope.option4.series[0].markLine.data[1].yAxis = data - 0.02;
                $scope.option4.series[0].markLine.data[1].itemStyle.normal.label.formatter = data - 0.02;

                //5
                $scope.option5.visualMap.pieces[0].lte = data + 0.02;
                $scope.option5.visualMap.pieces[0].gt = data - 0.02;
                $scope.option5.series[0].markLine.data[0].yAxis = data + 0.02;
                $scope.option5.series[0].markLine.data[0].itemStyle.normal.label.formatter = data + 0.02;
                $scope.option5.series[0].markLine.data[1].yAxis = data - 0.02;
                $scope.option5.series[0].markLine.data[1].itemStyle.normal.label.formatter = data - 0.02;

                //6
                $scope.option6.visualMap.pieces[0].lte = data + 0.02;
                $scope.option6.visualMap.pieces[0].gt = data - 0.02;
                $scope.option6.series[0].markLine.data[0].yAxis = data + 0.02;
                $scope.option6.series[0].markLine.data[0].itemStyle.normal.label.formatter = data + 0.02;
                $scope.option6.series[0].markLine.data[1].yAxis = data - 0.02;
                $scope.option6.series[0].markLine.data[1].itemStyle.normal.label.formatter = data - 0.02;

                //7
                $scope.option7.visualMap.pieces[0].lte = data + 0.02;
                $scope.option7.visualMap.pieces[0].gt = data - 0.02;
                $scope.option7.series[0].markLine.data[0].yAxis = data + 0.02;
                $scope.option7.series[0].markLine.data[0].itemStyle.normal.label.formatter = data + 0.02;
                $scope.option7.series[0].markLine.data[1].yAxis = data - 0.02;
                $scope.option7.series[0].markLine.data[1].itemStyle.normal.label.formatter = data - 0.02;

            } else {
                //console.info("delete1");
                delete $scope.option1.visualMap;
                delete $scope.option1.series[0].markLine;

                delete $scope.option2.visualMap;
                delete $scope.option2.series[0].markLine;

                delete $scope.option3.visualMap;
                delete $scope.option3.series[0].markLine;

                delete $scope.option4.visualMap;
                delete $scope.option4.series[0].markLine;

                delete $scope.option5.visualMap;
                delete $scope.option5.series[0].markLine;

                delete $scope.option6.visualMap;
                delete $scope.option6.series[0].markLine;

                delete $scope.option7.visualMap;
                delete $scope.option7.series[0].markLine;


            }
        };

        function setYAsix(data) {
            data = parseFloat(data);
            // console.info("4");
            //设置y轴坐标最大值最小值
            if (data != -1) {

                //1
                $scope.option1.yAxis[0].max = data * 1.04;
                $scope.option1.yAxis[0].min = data * 0.96;
                //2
                $scope.option2.yAxis[0].max = data * 1.04;
                $scope.option2.yAxis[0].min = data * 0.96;
                //3
                $scope.option3.yAxis[0].max = data * 1.04;
                $scope.option3.yAxis[0].min = data * 0.96;
                //4
                $scope.option4.yAxis[0].max = data * 1.04;
                $scope.option4.yAxis[0].min = data * 0.96;
                //5
                $scope.option5.yAxis[0].max = data * 1.04;
                $scope.option5.yAxis[0].min = data * 0.96;
                //6
                $scope.option6.yAxis[0].max = data * 1.04;
                $scope.option6.yAxis[0].min = data * 0.96;
                //7
                $scope.option7.yAxis[0].max = data * 1.04;
                $scope.option7.yAxis[0].min = data * 0.96;

            } else {
                // console.info("delete2");
                delete $scope.option1.yAxis[0].max;
                delete $scope.option1.yAxis[0].min;

                delete $scope.option2.yAxis[0].max;
                delete $scope.option2.yAxis[0].min;

                delete $scope.option3.yAxis[0].max;
                delete $scope.option3.yAxis[0].min;

                delete $scope.option4.yAxis[0].max;
                delete $scope.option4.yAxis[0].min;

                delete $scope.option5.yAxis[0].max;
                delete $scope.option5.yAxis[0].min;

                delete $scope.option6.yAxis[0].max;
                delete $scope.option6.yAxis[0].min;

                delete $scope.option7.yAxis[0].max;
                delete $scope.option7.yAxis[0].min;

            }
        };
        //初始化
        var echarts1 = ec.init(document.getElementById('option1'));
        var echarts2 = ec.init(document.getElementById('option2'));
        var echarts3 = ec.init(document.getElementById('option3'));
        var echarts4 = ec.init(document.getElementById('option4'));
        var echarts5 = ec.init(document.getElementById('option5'));
        var echarts6 = ec.init(document.getElementById('option6'));
        var echarts7 = ec.init(document.getElementById('option7'));
        echarts1.setOption($scope.option1, true);
        echarts2.setOption($scope.option2, true);
        echarts3.setOption($scope.option3, true);
        echarts4.setOption($scope.option4, true);
        echarts5.setOption($scope.option5, true);
        echarts6.setOption($scope.option6, true);
        echarts7.setOption($scope.option7, true);

        var host = $location.host();
        var port = $location.port();
        var ws = "ws://" + host + ":" + port + "/BDIA/ws/ccm1_1";


        var socket;
        if (typeof (WebSocket) == "undefined") {
            console.log("您的浏览器不支持WebSocket");
        } else {
            console.log("您的浏览器支持WebSocket");
            //socket = new WebSocket("ws://localhost:8080/BDIA/ws/ccm1_1");
            socket = new WebSocket(ws);
            //打开事件
            socket.onopen = function () {
                console.log("Socket 已打开");
                //socket.send("这是来自客户端的消息" + location.href + new Date());
            };
            //获得消息事件
            socket.onmessage = function (msg) {
                //console.info(msg.data);
                var str = msg.data.split(",");
                var time = new Date(str[0].replace(/-/g, "/"));
                //var tim = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
                //var tim = getNowFormatDate(time);
                var tim = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
                //str 数组1-7是拉速 拉速为负数时，设置为0
                var ls_1 = parseFloat(str[1]) > 0 ? parseFloat(str[1]) : 0;
                var ls_2 = parseFloat(str[2]) > 0 ? parseFloat(str[2]) : 0;
                var ls_3 = parseFloat(str[3]) > 0 ? parseFloat(str[3]) : 0;
                var ls_4 = parseFloat(str[4]) > 0 ? parseFloat(str[4]) : 0;
                var ls_5 = parseFloat(str[5]) > 0 ? parseFloat(str[5]) : 0;
                var ls_6 = parseFloat(str[6]) > 0 ? parseFloat(str[6]) : 0;
                var ls_7 = parseFloat(str[7]) > 0 ? parseFloat(str[7]) : 0;

                var data_ls_0 = $scope.option1.series[0].data;
                var data_ls_1 = $scope.option2.series[0].data;
                var data_ls_2 = $scope.option3.series[0].data;
                var data_ls_3 = $scope.option4.series[0].data;
                var data_ls_4 = $scope.option5.series[0].data;
                var data_ls_5 = $scope.option6.series[0].data;
                var data_ls_6 = $scope.option7.series[0].data;

                if (data_ls_0.length < 4) {//图标展示60个点
                    //option.xAxis[0].data.push(axisData); //在数组后添加一项（x轴）
                    //data0.push(num);//在数组最后加入数据 （y轴）
                    $scope.option1.xAxis[0].data.push(tim); //在数组后添加一项（x轴）
                    $scope.option2.xAxis[0].data.push(tim); //在数组后添加一项（x轴）
                    $scope.option3.xAxis[0].data.push(tim); //在数组后添加一项（x轴）
                    $scope.option4.xAxis[0].data.push(tim); //在数组后添加一项（x轴）
                    $scope.option5.xAxis[0].data.push(tim); //在数组后添加一项（x轴）
                    $scope.option6.xAxis[0].data.push(tim); //在数组后添加一项（x轴）
                    $scope.option7.xAxis[0].data.push(tim); //在数组后添加一项（x轴）
                    data_ls_0.push(ls_1);//在数组最后加入数据 （y轴）
                    data_ls_1.push(ls_2);
                    data_ls_2.push(ls_3);
                    data_ls_3.push(ls_4);
                    data_ls_4.push(ls_5);
                    data_ls_5.push(ls_6);
                    data_ls_6.push(ls_7);
                } else {
                    //data0.shift();//移除数组的第一项 （y轴）
                    //data0.push(num);//在数组最后加入数据 （y轴）
                    //option.xAxis[0].data.shift(); //移除数组的第一项 （x轴）
                    //option.xAxis[0].data.push(axisData); //在数组后添加一项（x轴）
                    data_ls_0.shift();//移除数组的第一项 （y轴）
                    data_ls_1.shift();//移除数组的第一项 （y轴）
                    data_ls_2.shift();//移除数组的第一项 （y轴）
                    data_ls_3.shift();//移除数组的第一项 （y轴）
                    data_ls_4.shift();//移除数组的第一项 （y轴）
                    data_ls_5.shift();//移除数组的第一项 （y轴）
                    data_ls_6.shift();//移除数组的第一项 （y轴）
                    data_ls_0.push(ls_1);//在数组最后加入数据 （y轴）
                    data_ls_1.push(ls_2);//在数组最后加入数据 （y轴）
                    data_ls_2.push(ls_3);//在数组最后加入数据 （y轴）
                    data_ls_3.push(ls_4);//在数组最后加入数据 （y轴）
                    data_ls_4.push(ls_5);//在数组最后加入数据 （y轴）
                    data_ls_5.push(ls_6);//在数组最后加入数据 （y轴）
                    data_ls_6.push(ls_7);//在数组最后加入数据 （y轴）


                    $scope.option1.xAxis[0].data.shift(); //移除数组的第一项 （x轴）
                    $scope.option2.xAxis[0].data.shift();
                    $scope.option3.xAxis[0].data.shift();
                    $scope.option4.xAxis[0].data.shift();
                    $scope.option5.xAxis[0].data.shift();
                    $scope.option6.xAxis[0].data.shift();
                    $scope.option7.xAxis[0].data.shift();

                    $scope.option1.xAxis[0].data.push(tim); //在数组后添加一项（x轴）
                    $scope.option2.xAxis[0].data.push(tim); //在数组后添加一项（x轴）
                    $scope.option3.xAxis[0].data.push(tim); //在数组后添加一项（x轴）
                    $scope.option4.xAxis[0].data.push(tim); //在数组后添加一项（x轴）
                    $scope.option5.xAxis[0].data.push(tim); //在数组后添加一项（x轴）
                    $scope.option6.xAxis[0].data.push(tim); //在数组后添加一项（x轴）
                    $scope.option7.xAxis[0].data.push(tim); //在数组后添加一项（x轴）
                }

                setTarget(target);
                setYAsix(target);

                echarts1.setOption($scope.option1);
                echarts2.setOption($scope.option2);
                echarts3.setOption($scope.option3);
                echarts4.setOption($scope.option4);
                echarts5.setOption($scope.option5);
                echarts6.setOption($scope.option6);
                echarts7.setOption($scope.option7);

            };
            //关闭事件
            socket.onclose = function () {
                console.log("Socket已关闭");
            };
            //发生了错误事件
            socket.onerror = function () {
                alert("Socket发生了错误");
            };
            $scope.$on("$destroy", function () {
                socket.close();
            })
        }


    });
    // app.directive('eCharts', function($http, $window) {
    // 	function link($scope, element, attrs) {
    // 		var myChart = ec.init(element[0]);
    // 		$scope.$watch(attrs['eData'], function() {
    // 			var option = $scope.$eval(attrs.eData);
    // 			console.info(option)
    // 			if (angular.isObject(option)) {
    // 				myChart.setOption(option);
    // 			}
    // 		}, true);
    // 		$scope.getDom = function() {
    // 			return {
    // 				'height' : element[0].offsetHeight,
    // 				'width' : element[0].offsetWidth
    // 			};
    // 		};
    // 		$scope.$watch($scope.getDom, function() {
    // 			// resize echarts图表
    // 			myChart.resize();
    // 		}, true);
    // 	}
    // 	return {
    // 		restrict : 'A',
    // 		link : link
    // 	};
    // });
});
//