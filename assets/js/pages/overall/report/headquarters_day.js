var pageVM = new Vue({
	el : '#page',
	data : {
		chart1Data:[{"门店":"003301","实销":79,"同期实销":803},{"门店":"002901","实销":295,"同期实销":487},{"门店":"003401","实销":387,"同期实销":4230},{"门店":"002301","实销":539,"同期实销":2564},{"门店":"003201","实销":1262,"同期实销":null},{"门店":"003001","实销":1326,"同期实销":3999},{"门店":"001501","实销":1665,"同期实销":3516},{"门店":"001401","实销":2017,"同期实销":4714},{"门店":"002601","实销":3142,"同期实销":6312},{"门店":"001901","实销":3315,"同期实销":7983},{"门店":"003101","实销":3937,"同期实销":1431},{"门店":"001101","实销":4564,"同期实销":11368},{"门店":"001301","实销":4752,"同期实销":2367},{"门店":"000201","实销":5571,"同期实销":4589},{"门店":"001701","实销":7044,"同期实销":4438},{"门店":"000701","实销":7213,"同期实销":8853},{"门店":"000801","实销":8093,"同期实销":10779},{"门店":"000301","实销":9223,"同期实销":11223},{"门店":"000401","实销":9617,"同期实销":11560},{"门店":"000501","实销":9803,"同期实销":17034},{"门店":"003501","实销":10216,"同期实销":4587},{"门店":"000601","实销":14852,"同期实销":36224},{"门店":"002801","实销":20696,"同期实销":336},{"门店":"000901","实销":34702,"同期实销":35430}],
		chart2Title:[{"标题1":"【2018-12-30】销售共计：￥164312"}],
		chart2SubTitle:[{"name":"本月任务：￥7200000,目前已完成￥5400038,完成率：75%,预测完成率：75%"}],
		chart2Data:[{"昨日销售":164312,"月累计销售":5333826,"完成率":74.08}],
		chart3Data:[{"时间":"10","昨日时段销售额":11742,"同期时段销售额":30625},{"时间":"11","昨日时段销售额":16821,"同期时段销售额":23115},{"时间":"12","昨日时段销售额":12281,"同期时段销售额":14749},{"时间":"13","昨日时段销售额":11070,"同期时段销售额":7419},{"时间":"14","昨日时段销售额":10083,"同期时段销售额":18059},{"时间":"15","昨日时段销售额":27177,"同期时段销售额":15366},{"时间":"16","昨日时段销售额":14910,"同期时段销售额":33278},{"时间":"17","昨日时段销售额":17469,"同期时段销售额":20594},{"时间":"18","昨日时段销售额":9559,"同期时段销售额":20392},{"时间":"19","昨日时段销售额":13004,"同期时段销售额":12009},{"时间":"20","昨日时段销售额":8688,"同期时段销售额":6688},{"时间":"21","昨日时段销售额":47,"同期时段销售额":-10898},{"时间":"22","昨日时段销售额":0,"同期时段销售额":150},{"时间":"7","昨日时段销售额":0,"同期时段销售额":58},{"时间":"8","昨日时段销售额":3437,"同期时段销售额":792},{"时间":"9","昨日时段销售额":8022,"同期时段销售额":6934}],
        chart3Title:[{"标题2":"昨日整体客流【1151人】,同比去年下降10.84%,\n客单价【142.8元/人】,同比去年下降7.51%"}],
		chart4Data:[{"平均退货率":21.728400,"平均折扣率":57.538800,"客单价":142.755655,"连带率":2.860990}],
		chart8Data:[{"name":"食品","value":98239},{"name":null,"value":24369},{"name":"纸尿裤","value":21689},{"name":"洗护用品","value":7877},{"name":"床品内衣宝宝套","value":3537},{"name":"婴童装外出服","value":3480},{"name":"喂养用品","value":2814},{"name":"鞋帽袜散货件","value":2058},{"name":"孕产妇类","value":218},{"name":"玩具","value":31},{"name":"物料","value":1}],
		chart9Data:[{"营业员编号":"2601","姓名":"邓树清","销售金额":20695.7300,"客单价":339.274262,"连带率":4.606557},{"营业员编号":"505","姓名":"刘倍菡","销售金额":7185.7700,"客单价":108.875303,"连带率":2.545454},{"营业员编号":"918","姓名":"于鸿伟","销售金额":6192.3200,"客单价":158.777435,"连带率":3.076923},{"营业员编号":"405","姓名":"乐开诚","销售金额":5746.2200,"客单价":205.222142,"连带率":3.785714},{"营业员编号":"805","姓名":"石卫平","销售金额":5692.9400,"客单价":113.858800,"连带率":3.180000},{"营业员编号":"701","姓名":"高舒","销售金额":5302.5200,"客单价":182.845517,"连带率":3.620689},{"营业员编号":"202","姓名":"李向东","销售金额":5294.8700,"客单价":79.027910,"连带率":2.000000},{"营业员编号":"406","姓名":"谢纯德","销售金额":5071.2100,"客单价":174.869310,"连带率":3.793103},{"营业员编号":"604","姓名":"陶翔华","销售金额":4835.9000,"客单价":172.710714,"连带率":2.000000},{"营业员编号":"1301","姓名":"幸大鹏","销售金额":4751.8000,"客单价":237.590000,"连带率":5.100000},{"营业员编号":"1101","姓名":"叶芳","销售金额":4564.4000,"客单价":152.146666,"连带率":1.966666},{"营业员编号":"630","姓名":"文燕","销售金额":4408.2600,"客单价":200.375454,"连带率":2.500000},{"营业员编号":"935","姓名":"朱贤申","销售金额":4378.1800,"客单价":257.540000,"连带率":3.647058},{"营业员编号":"1701","姓名":"朱安全","销售金额":3970.5400,"客单价":180.479090,"连带率":3.272727},{"营业员编号":"3601","姓名":"杨靖","销售金额":3937.2500,"客单价":145.824074,"连带率":2.222222},{"营业员编号":"951","姓名":"赖莉","销售金额":3936.3900,"客单价":231.552352,"连带率":3.000000},{"营业员编号":"943","姓名":"马瑞","销售金额":3477.2700,"客单价":183.014210,"连带率":3.105263},{"营业员编号":"921","姓名":"周国强","销售金额":3450.3100,"客单价":111.300322,"连带率":2.903225},{"营业员编号":"914","姓名":"肖文飚","销售金额":3347.3900,"客单价":90.470000,"连带率":2.459459},{"营业员编号":"1901","姓名":"潘俊武","销售金额":3315.3000,"客单价":301.390909,"连带率":3.181818},{"营业员编号":"920","姓名":"徐敏","销售金额":3304.6300,"客单价":157.363333,"连带率":3.000000},{"营业员编号":"806","姓名":"王思彤","销售金额":3187.8500,"客单价":81.739743,"连带率":4.076923},{"营业员编号":"2101","姓名":"黄晋","销售金额":3142.4600,"客单价":136.628695,"连带率":2.304347},{"营业员编号":"937","姓名":"王长旭","销售金额":3062.7000,"客单价":161.194736,"连带率":1.578947},{"营业员编号":"503","姓名":"史银红","销售金额":1934.0000,"客单价":322.333333,"连带率":7.000000},{"营业员编号":"953","姓名":"周泳","销售金额":1722.9300,"客单价":71.788750,"连带率":2.000000},{"营业员编号":"606","姓名":"庄葛巍","销售金额":1713.8000,"客单价":114.253333,"连带率":1.466666},{"营业员编号":"1501","姓名":"党明惠","销售金额":1664.9000,"客单价":72.386956,"连带率":2.086956},{"营业员编号":"602","姓名":"刘洁筱","销售金额":1526.6000,"客单价":169.622222,"连带率":2.555555},{"营业员编号":"2501","姓名":"杨克军","销售金额":1326.2000,"客单价":132.620000,"连带率":2.700000},{"营业员编号":"3201","姓名":"郝玉杰","销售金额":1262.4000,"客单价":252.480000,"连带率":13.000000},{"营业员编号":"931","姓名":"侯慧娟","销售金额":829.6600,"客单价":92.184444,"连带率":4.000000},{"营业员编号":"504","姓名":"陶永华","销售金额":734.0000,"客单价":367.000000,"连带率":2.000000},{"营业员编号":"906","姓名":"段爱红","销售金额":625.4000,"客单价":62.540000,"连带率":2.800000},{"营业员编号":"2011","姓名":"杜春","销售金额":539.2000,"客单价":49.018181,"连带率":2.545454},{"营业员编号":"909","姓名":"马春秀","销售金额":491.9600,"客单价":27.331111,"连带率":1.388888},{"营业员编号":"3901","姓名":"廖晨光","销售金额":387.1000,"客单价":55.300000,"连带率":2.285714},{"营业员编号":"616","姓名":"柳青","销售金额":386.7300,"客单价":128.910000,"连带率":7.000000},{"营业员编号":"904","姓名":"刘志忠","销售金额":385.0000,"客单价":32.083333,"连带率":1.333333},{"营业员编号":"2701","姓名":"张长杰","销售金额":295.0000,"客单价":73.750000,"连带率":1.750000},{"营业员编号":"205","姓名":"魏剑","销售金额":276.5000,"客单价":55.300000,"连带率":1.600000},{"营业员编号":"3501","姓名":"郑旭东","销售金额":192.3500,"客单价":32.058333,"连带率":2.333333},{"营业员编号":"632","姓名":"刘新中","销售金额":131.1200,"客单价":32.780000,"连带率":0.750000},{"营业员编号":"3802","姓名":"赵静静","销售金额":79.0000,"客单价":39.500000,"连带率":1.000000},{"营业员编号":"302","姓名":"李群仙","销售金额":70.5000,"客单价":23.500000,"连带率":2.333333},{"营业员编号":"625","姓名":"朱振坤","销售金额":40.0000,"客单价":20.000000,"连带率":0.000000},{"营业员编号":"501","姓名":"徐友筠","销售金额":-51.0000,"客单价":-17.000000,"连带率":1.000000},{"营业员编号":"933","姓名":"姚艳霞","销售金额":-329.0000,"客单价":-164.500000,"连带率":-0.500000},{"营业员编号":"803","姓名":"郑振洲","销售金额":-788.0000,"客单价":-197.000000,"连带率":0.000000},{"营业员编号":"401","姓名":"陈澍","销售金额":-1200.0000,"客单价":-66.666666,"连带率":-1.000000}],
		chart10Data:[{"分类":"000601_8","门店":"000601","时间":8,"昨日客流":0,"昨日客单价":0.0,"昨日时段销售额":0.0000,"同期客流":1,"同期客单价":10.0,"同期时段销售额":10.0000},{"分类":"000601_9","门店":"000601","时间":9,"昨日客流":0,"昨日客单价":0.0,"昨日时段销售额":0.0000,"同期客流":3,"同期客单价":52.0,"同期时段销售额":156.0000},{"分类":"000601_10","门店":"000601","时间":10,"昨日客流":2,"昨日客单价":9.5,"昨日时段销售额":19.0000,"同期客流":14,"同期客单价":274.6,"同期时段销售额":3844.5500},{"分类":"000601_11","门店":"000601","时间":11,"昨日客流":11,"昨日客单价":140.4,"昨日时段销售额":1544.9200,"同期客流":9,"同期客单价":878.2,"同期时段销售额":7904.0000},{"分类":"000601_12","门店":"000601","时间":12,"昨日客流":6,"昨日客单价":98.3,"昨日时段销售额":589.8000,"同期客流":6,"同期客单价":102.1,"同期时段销售额":612.5000},{"分类":"000601_13","门店":"000601","时间":13,"昨日客流":0,"昨日客单价":0.0,"昨日时段销售额":0.0000,"同期客流":12,"同期客单价":86.9,"同期时段销售额":1043.2200},{"分类":"000601_14","门店":"000601","时间":14,"昨日客流":14,"昨日客单价":98.5,"昨日时段销售额":1379.6100,"同期客流":9,"同期客单价":290.4,"同期时段销售额":2613.5000},{"分类":"000601_15","门店":"000601","时间":15,"昨日客流":11,"昨日客单价":88.3,"昨日时段销售额":971.0000,"同期客流":15,"同期客单价":297.7,"同期时段销售额":4465.0300},{"分类":"000601_16","门店":"000601","时间":16,"昨日客流":12,"昨日客单价":228.1,"昨日时段销售额":2737.7500,"同期客流":22,"同期客单价":243.5,"同期时段销售额":5357.8300},{"分类":"000601_17","门店":"000601","时间":17,"昨日客流":21,"昨日客单价":165.3,"昨日时段销售额":3471.1400,"同期客流":15,"同期客单价":359.8,"同期时段销售额":5396.2600},{"分类":"000601_18","门店":"000601","时间":18,"昨日客流":12,"昨日客单价":113.0,"昨日时段销售额":1356.2000,"同期客流":9,"同期客单价":429.6,"同期时段销售额":3866.2900},{"分类":"000601_19","门店":"000601","时间":19,"昨日客流":6,"昨日客单价":62.8,"昨日时段销售额":376.8200,"同期客流":12,"同期客单价":249.3,"同期时段销售额":2991.3500},{"分类":"000601_20","门店":"000601","时间":20,"昨日客流":4,"昨日客单价":601.5,"昨日时段销售额":2405.9100,"同期客流":12,"同期客单价":126.8,"同期时段销售额":1521.2000},{"分类":"000601_21","门店":"000601","时间":21,"昨日客流":0,"昨日客单价":0.0,"昨日时段销售额":0.0000,"同期客流":1,"同期客单价":-3558.0,"同期时段销售额":-3558.0000}],
        chart11Data:[{"name":"000901","销售":56832.8400,"退货":7426.4900,"退货率":13.07},{"name":"000601","销售":23981.3400,"退货":4337.0000,"退货率":18.08},{"name":"001101","销售":15404.8100,"退货":3678.5000,"退货率":23.88},{"name":"000301","销售":14364.0500,"退货":2969.0000,"退货率":20.67},{"name":"000401","销售":10419.0500,"退货":3412.0000,"退货率":32.75},{"name":"000801","销售":9710.7000,"退货":2275.9000,"退货率":23.44},{"name":"001701","销售":9519.6300,"退货":939.8000,"退货率":9.87},{"name":"002901","销售":8491.9000,"退货":393.0000,"退货率":4.63},{"name":"003501","销售":8466.7600,"退货":4366.0000,"退货率":51.57},{"name":"001501","销售":8114.5400,"退货":3531.7000,"退货率":43.52},{"name":"000501","销售":7395.7600,"退货":737.9000,"退货率":9.98},{"name":"000201","销售":6424.3100,"退货":2212.0000,"退货率":34.43},{"name":"002601","销售":5004.0000,"退货":98.0000,"退货率":1.96},{"name":"001901","销售":4270.5000,"退货":1751.0000,"退货率":41.00},{"name":"003001","销售":3799.1000,"退货":2258.4000,"退货率":59.45},{"name":"001401","销售":3511.0800,"退货":90.0000,"退货率":2.56},{"name":"002801","销售":3062.8000,"退货":0.0000,"退货率":0.00},{"name":"000701","销售":2409.8300,"退货":555.0000,"退货率":23.03},{"name":"003301","销售":2093.1000,"退货":535.6000,"退货率":25.59},{"name":"003101","销售":1820.5100,"退货":138.5000,"退货率":7.61},{"name":"001301","销售":1759.5000,"退货":0.0000,"退货率":0.00},{"name":"003201","销售":1416.6100,"退货":312.0000,"退货率":22.02},{"name":"002301","销售":887.8000,"退货":0.0000,"退货率":0.00},{"name":"003401","销售":489.3000,"退货":368.2000,"退货率":75.25}],
        chart12Data:[{"name":"000201","value":48.23},{"name":"000301","value":55.14},{"name":"000401","value":60.92},{"name":"000501","value":57.91},{"name":"000601","value":61.38},{"name":"000701","value":50.26},{"name":"000801","value":58.39},{"name":"000901","value":59.65},{"name":"001101","value":53.05},{"name":"001301","value":43.17},{"name":"001401","value":57.02},{"name":"001501","value":55.71},{"name":"001701","value":60.29},{"name":"001901","value":47.46},{"name":"002301","value":79.13},{"name":"002601","value":57.55},{"name":"002801","value":70.62},{"name":"002901","value":65.38},{"name":"003001","value":57.39},{"name":"003101","value":47.92},{"name":"003201","value":57.26},{"name":"003301","value":43.57},{"name":"003401","value":60.64},{"name":"003501","value":61.15}],
        chart13Data:[{"name":"000201","value":50.19},{"name":"000301","value":105.62},{"name":"000401","value":105.24},{"name":"000501","value":90.19},{"name":"000601","value":134.73},{"name":"000701","value":46.34},{"name":"000801","value":70.37},{"name":"000901","value":100.77},{"name":"001101","value":149.56},{"name":"001301","value":109.97},{"name":"001401","value":152.66},{"name":"001501","value":150.27},{"name":"001601","value":0.00},{"name":"001701","value":144.24},{"name":"001901","value":44.48},{"name":"002301","value":295.93},{"name":"002601","value":200.16},{"name":"002801","value":510.47},{"name":"002901","value":283.06},{"name":"003001","value":237.44},{"name":"003101","value":72.82},{"name":"003201","value":94.44},{"name":"003301","value":104.66},{"name":"003401","value":48.93},{"name":"003501","value":112.89}],
        chart14Data:[{"name":"000201","value":0.97},{"name":"000301","value":1.22},{"name":"000401","value":1.58},{"name":"000501","value":1.48},{"name":"000601","value":2.25},{"name":"000701","value":1.31},{"name":"000801","value":1.17},{"name":"000901","value":1.79},{"name":"001101","value":2.02},{"name":"001301","value":2.44},{"name":"001401","value":1.96},{"name":"001501","value":1.43},{"name":"001701","value":2.43},{"name":"001901","value":1.04},{"name":"002301","value":2.67},{"name":"002601","value":2.75},{"name":"002801","value":3.50},{"name":"002901","value":2.70},{"name":"003001","value":2.31},{"name":"003101","value":1.54},{"name":"003201","value":1.27},{"name":"003301","value":3.20},{"name":"003401","value":1.90},{"name":"003501","value":1.59}],
        chart15Data:[{"name":"伊利","value":23110.9000},{"name":"飞鹤","value":15854.4000},{"name":"海普诺凯1897","value":9997.4000},{"name":"美赞臣","value":9526.9000},{"name":"澳优","value":6888.0000},{"name":"惠氏","value":6549.0000},{"name":"美素","value":5286.9000},{"name":"合生元","value":4561.3300},{"name":"婴尚","value":4312.4400},{"name":"其他","value":4057.5100},{"name":"牛栏","value":3210.0000},{"name":"英氏","value":2484.9200},{"name":"佳贝艾特.","value":2040.0000},{"name":"爱他美","value":1770.0000},{"name":"亲益","value":1629.0000},{"name":"优莱美","value":1101.0000}]
	},
	mounted : function() {
		this.init();
	},
	methods : {
		init : function() {
			var me = this;
			setTimeout(function() {
				me.initEvent();
				me.loadData();
			});
		},
		initEvent: function(){
			var me = this;
            $(window).resize(function (e) {
                window.setTimeout(function () {
                    $("#gridPanel_1").setGridWidth($("#gridPanel_1").parents('.card-body').width());
                }, 200);
            });
		},
		loadData: function(){
			this.getChartData();
		},
		getChartData: function(){
			var me = this;
            me.createChart1(this.chart1Data);
            me.createChart2(this.chart2Data);
            me.createChart3(this.chart3Data);
            me.createChart4(this.chart4Data);
            me.createChart5(this.chart4Data);
            me.createChart6(this.chart4Data);
            me.createChart7(this.chart4Data);
            me.createChart8(this.chart8Data);
            me.createChart9(this.chart9Data);
		},
		createChart1 : function(data) {
			var me = this;
			var option = {
                title: {
                    text: '●各门店销售完成状况(点击可看详情)',
                    x: 'left'
                },
                tooltip: {
                    show: true,
                    formatter: "{b}<br />{a}: {c}元",
                },
                toolbox: {
                    feature: {
                        restore: {
                            show: true
                        }
                    },
                    top: '4%'
                },
                legend: {
                    data: ['昨日实销', '同期实销'],
                    top: '6%'
                },
                grid: {
                    left: '2%',
                    right: '2%',
                    bottom: '0%',
                    containLabel: true
                },
                xAxis: {
                    show: false,
                    type: 'value',
                    boundaryGap: [0, 0.2]
                },
                yAxis: {
                    type: 'category',
                    data: public_data.getEchartsData(data, '门店', 'branch'),
                    position: 'right',
                    splitArea: {
                        show: true
                    },
                },
                series: [
                    {
                        name: '昨日实销',
                        type: 'bar',
                        label: {
                            normal: {
                                show: true,
                                position: 'right',
                                formatter: '￥{c}'
                            }

                        },
                        data: public_data.getEchartsData(data, '实销', ''),
                        markLine: {
                            label: {
                                normal: {
                                    show: false,
                                    position: 'end',
                                    formatter: '{b}{c}%'
                                }
                            },
                            lineStyle: {
                                normal: {
                                    color: 'blue'
                                }
                            },
                            symbol: 'circle',
                            data: [
                                { name: '平均值', type: 'average' }
                            ]
                        }
                    },
                    {
                        name: '同期实销',
                        type: 'bar',
                        label: {
                            normal: {
                                show: true,
                                position: 'right',
                                formatter: '￥{c}'
                            }
                        },
                        data: public_data.getEchartsData(data, '同期实销', '')
                    }
                ]
            };
			ECharts.Draw(option, "chart1", function(params){
				var branchId = public_data.Name(params.name, 'branch');
				$('#chartModal').modal('show');
                chartModal.modalTitle = '【'+params.name+'】客流及客单价概况';
                setTimeout(function(){
                    me.createChart10(me.chart10Data);
                },200);
			});
		},
		createChart2 : function(data) {
            var option = {
                title: {
                    text: '全公司' + this.chart2Title[0]['标题1'],
                    subtext: this.chart2SubTitle[0]['name'],
                    x: 'center',
                    top: '10%',
                    textStyle: {
                        fontSize: 22
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "月累计销售：" + data[0].月累计销售 + "元，完成率：" + data[0].完成率 + "%"
                },
                grid: {
                    top: '55%',
                    left: '0%',
                    right: '0%',
                    bottom: '5%',
                    containLabel: true
                },
                xAxis: {
                    max: 100,
                    axisLabel: {
                        show: true,
                        formatter: "{value}%",
                    },
                    axisLine: {
                        show: false
                    }

                },
                yAxis: [{
                    show: false,
                    data: ['xx'],
                    axisLine: {
                        show: false
                    }
                }, {
                    // 辅助 x 轴
                    show: false,
                    data: [100]
                }],

                series: [{
                    // 辅助系列
                    type: 'bar',
                    silent: true,
                    yAxisIndex: 1,
                    itemStyle: {
                        normal: {
                            barBorderRadius: 120,
                            color: '#ddd'
                        }
                    },
                    barWidth: 15,
                    data: [100]
                }, {
                    type: 'bar',
                    data: [fixNum(data[0].完成率,2)],
                    markPoint: {
                        symbol: 'roundRect',
                        symbolSize: 40,
                        data: [{
                            type: 'max'
                        }],
                        label: {
                            normal: {
                                formatter: '{c}%',
                                show: true,
                            }
                        }
                    },
                    barWidth: 15,
                    itemStyle: {
                        normal: {
                            barBorderRadius: 180,
                            //color: '#59c4e6',#7b93e0
                            color: '#7b93e0'
                        }
                    }
                }]
            };
			ECharts.Draw(option, "chart2");
		},
		createChart3 : function(data) {
			var option = {
                title: {
                    text: this.chart3Title[0]['标题2'],
                    x: 'center',
                    textStyle: {
                        fontSize: 14
                    }
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        }
                    }
                },
                grid: {
                    top: '40%',
                    left: '0%',
                    right: '0%',
                    bottom: '5%',
                    containLabel: true
                },
                legend: {
                    data: ['昨日时段销售额', '同期时段销售额'],
                    top: '20%'
                },
                xAxis: [
                    {
                        type: 'category',
                        data: public_data.getEchartsData(data, '时间', ''),
                        axisPointer: {
                            type: 'shadow'
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '成交额',
                        axisLabel: {
                            formatter: '{value}元'
                        }
                    }
                ],
                series: [{
                    name: '昨日时段销售额',
                    type: 'line',
                    symbolSize: 2,
                    itemStyle: {
                        normal: {
                            areaStyle: {
                                color: "rgba(123, 147, 224, 0.2)",
                                type: "default"
                            },
                            lineStyle: {
                                width: 1
                            }
                        }
                    },
                    smooth: true,
                    data: public_data.getEchartsData(data, '昨日时段销售额', ''),
                },
                    {
                        name: '同期时段销售额',
                        type: 'line',
                        smooth: true,
                        symbolSize: 2,
                        itemStyle: {
                            normal: {
                                areaStyle: {
                                    color: "rgba(89, 196, 230, 0.2)",
                                    type: "default"
                                },
                                lineStyle: {
                                    width: 1
                                }
                            }
                        },
                        data: public_data.getEchartsData(data, '同期时段销售额', ''),
                    }
                ]
            };
            ECharts.Draw(option, "chart3");
		},
        createChart4 : function(data) {
		    var me = this;
            var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                series: [{
                    name: '平均退货率',
                    type: 'pie',
                    radius: [
                        '70%',
                        '85%'
                    ],
                    label: {
                        normal: {
                            position: 'center'
                        }
                    },
                    data: [{
                        value: data[0].平均退货率,
                        name: '平均退货率',

                        label: {
                            normal: {
                                formatter: '{d} %',
                                textStyle: {
                                    fontSize: 26
                                }
                            }
                        }
                    }, {
                        value: 100 - (data[0].平均退货率),
                        name: '占比',
                        label: {
                            normal: {
                                formatter: '\n平均退货率',
                                textStyle: {
                                    color: '#555',
                                    fontSize: 16
                                }
                            }
                        },
                        tooltip: {
                            show: false
                        },
                        itemStyle: {
                            normal: {
                                color: '#dedede'
                            },
                            emphasis: {
                                color: '#dedede'
                            }
                        },
                        hoverAnimation: false
                    }]
                }
                ]
            };
            ECharts.Draw(option, "chart4", function(params){
                $('#chartModal').modal('show');
                chartModal.modalTitle = '全公司各门店销售及退货情况';
                setTimeout(function(){
                    me.createChart11(me.chart11Data);
                },200);
            });
        },
        createChart5 : function(data) {
		    var me = this;
            var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                series: [{
                    name: '平均折扣率',
                    type: 'pie',
                    radius: [
                        '70%',
                        '85%'
                    ],
                    label: {
                        normal: {
                            position: 'center'
                        }
                    },
                    data: [{
                        value: data[0].平均折扣率,
                        name: '平均折扣率',

                        label: {
                            normal: {
                                formatter: '{d}%',
                                textStyle: {
                                    fontSize: 26
                                }
                            }
                        }
                    }, {
                        value: 100 - data[0].平均折扣率,
                        name: '占比',
                        label: {
                            normal: {
                                formatter: '\n平均折扣率',
                                textStyle: {
                                    color: '#555',
                                    fontSize: 16
                                }
                            }
                        },
                        tooltip: {
                            show: false
                        },
                        itemStyle: {
                            normal: {
                                color: '#dedede'
                            },
                            emphasis: {
                                color: '#dedede'
                            }
                        },
                        hoverAnimation: false
                    }]
                }
                ]
            };
            ECharts.Draw(option, "chart5", function(params){
                $('#chartModal').modal('show');
                chartModal.modalTitle = '各门店折扣分布';
                setTimeout(function(){
                    me.createChart12(me.chart12Data);
                },200);
            });
        },
        createChart6 : function(data) {
		    var me = this;
            var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                series: [{
                    name: '客单价',
                    type: 'pie',
                    radius: [
                        '70%',
                        '85%'
                    ],
                    label: {
                        normal: {
                            position: 'center'
                        }
                    },
                    data: [{
                        value: fixNum(data[0].客单价,2),
                        name: '客单价',

                        label: {
                            normal: {
                                formatter: '{c}',
                                textStyle: {
                                    fontSize: 26
                                }
                            }
                        }
                    }, {
                        value: (data[0].客单价 < 500 ? 500 : data[0].客单价 * 1.2) - (data[0].客单价),
                        name: '占比',
                        label: {
                            normal: {
                                formatter: '\n客单价',
                                textStyle: {
                                    color: '#555',
                                    fontSize: 16
                                }
                            }
                        },
                        tooltip: {
                            show: false
                        },
                        itemStyle: {
                            normal: {
                                color: '#dedede'
                            },
                            emphasis: {
                                color: '#dedede'
                            }
                        },
                        hoverAnimation: false
                    }]
                }
                ]
            };
            ECharts.Draw(option, "chart6", function(params){
                $('#chartModal').modal('show');
                chartModal.modalTitle = '各门店客单价分布';
                setTimeout(function(){
                    me.createChart13(me.chart13Data);
                },200);
            });
        },
        createChart7 : function(data) {
		    var me = this;
            var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                series: [{
                    name: '连带率',
                    type: 'pie',
                    radius: [
                        '70%',
                        '85%'
                    ],
                    label: {
                        normal: {
                            position: 'center'
                        }
                    },
                    data: [{
                        value: fixNum(data[0].连带率,2),
                        name: '连带率',

                        label: {
                            normal: {
                                formatter: '{c}',
                                textStyle: {
                                    fontSize: 26
                                }
                            }
                        }
                    }, {
                        value: (data[0].连带率 < 10 ? 10 : data[0].连带率 * 1.1) - (data[0].连带率),
                        name: '占比',
                        label: {
                            normal: {
                                formatter: '\n连带率',
                                textStyle: {
                                    color: '#555',
                                    fontSize: 16
                                }
                            }
                        },
                        tooltip: {
                            show: false
                        },
                        itemStyle: {
                            normal: {
                                color: '#dedede'
                            },
                            emphasis: {
                                color: '#dedede'
                            }
                        },
                        hoverAnimation: false
                    }]
                }
                ]
            };
            ECharts.Draw(option, "chart7", function(params){
                $('#chartModal').modal('show');
                chartModal.modalTitle = '各门店连带率分布';
                setTimeout(function(){
                    me.createChart14(me.chart14Data);
                },200);
            });
        },
        createChart8 : function(data) {
		    var me = this;
            var option = {
                title: {
                    top: '2%',
                    text: "●各类别销售分布",
                    x: 'left'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                grid: {
                    top: '20%'
                },
                series: [
                    {
                        name: '销售分布',
                        type: 'pie',
                        radius: ['55%', '80%'],
                        center: ['50%', '55%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '25',
                                    fontWeight: 'normal'
                                },
                                formatter: "{b}\n{c}"
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: data
                    }
                ]
            };
            var dom = document.getElementById("chart8");
            var myChart = echarts.init(dom, 'cloudsale-echart-theme');
            this.show(myChart, option)
            myChart.setOption(option, true);
            myChart.on('click', function (params) {
                var clsId = public_data.Name(params.name, 'cls_all')
                $('#chartModal').modal('show');
                chartModal.modalTitle = '【'+params.name+'】各品牌详情';
                setTimeout(function(){
                    me.createChart15(me.chart15Data);
                },200);
            });
            $(window).resize(function () {
                myChart.resize();
            });
        },
        createChart9 : function(data) {
            var $gridTable = $("#gridPanel_1");
            $gridTable.jqGrid({
                datatype: "local",
				data:data,
                width: $("#gridPanel_1").parent().width(),
                height: 230,
                colModel: [
                    { name: "营业员编号", label: "营业员编号", align: "center", sortable: true, sorttype: 'float' },
                    { name: "姓名", label: "姓名", align: "center", sortable: true },
                    $.extend({ name: "销售金额", label: "销售金额", align: "center", sortable: true, sorttype: 'float' }, jqFormatter.RMB0),
                    $.extend({ name: "客单价", label: "客单价", align: "center", sortable: true, sorttype: 'float' }, jqFormatter.RMB0),
                    $.extend({ name: "连带率", label: "连带率", align: "center", sortable: true, sorttype: 'float' }, jqFormatter.Num2)
                ],
                rownumbers: true, //如果为ture则会在表格左边新增一列，显示行顺序号，从1开始递增。此列名为'rn'.
                rowNum: 1000,
                loadonce: true,
                onCellSelect: function (rowid, iCol, contents, event) {
                    var saleManN = $(this).getCell(rowid, 1);
                    myColorbox({ href: "/CloudSale/Report_PC/web_page/Aspx/sales_details_inquiry.aspx?sDate=" + dataInfo.getYesterdayStartDate() + "&eDate=" + dataInfo.getYesterdayEndDate() + "&saleMan=" + saleManN, closeButton: false, width: '95%', height: '95%', iframe: true })
                }
            });
        },
		createChart10: function(data){
            var option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        }
                    }
                },
                legend: {
                    data: ['昨日客流', '同期客流', '昨日客单价', '同期客单价'],
                    top: '1%'
                },
                xAxis: [
                    {
                        type: 'category',
                        data: public_data.getEchartsData(data, '时间', ''),
                        axisPointer: {
                            type: 'shadow'
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '客流量',
                        axisLabel: {
                            formatter: '{value} /人'
                        }
                    },
                    {
                        type: 'value',
                        name: '累计销售',
                        axisLabel: {
                            formatter: '{value}/元'
                        }
                    }
                ],
                series: [
                    {
                        name: '昨日客流',
                        type: 'bar',
                        data: public_data.getEchartsData(data, '昨日客流', ''),
                    },
                    {
                        name: '同期客流',
                        type: 'bar',
                        data: public_data.getEchartsData(data, '同期客流', ''),
                    },
                    {
                        name: '昨日客单价',
                        type: 'line',
                        yAxisIndex: 1,
                        data: public_data.getEchartsData(data, '昨日客单价', ''),
                    },
                    {
                        name: '同期客单价',
                        type: 'line',
                        yAxisIndex: 1,
                        data: public_data.getEchartsData(data, '同期客单价', ''),
                    }
                ]
            };
            ECharts.Draw(option, "chartModalCon");
		},
        createChart11: function(data){
            var option = {
                title: {
                    text: '全公司各门店销售及退货情况',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        }
                    }
                },
                legend: {
                    data: ['销售', '退货', '退货率'],
                    top: '7%'
                },
                xAxis: [
                    {
                        type: 'category',
                        data: public_data.getEchartsData(data, 'name', 'branch'),
                        axisPointer: {
                            type: 'shadow'
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '金额',
                        axisLabel: {
                            formatter: '{value} /元'
                        }
                    },
                    {
                        type: 'value',
                        name: '百分比',
                        axisLabel: {
                            formatter: '{value}/%'
                        }
                    }
                ],
                series: [
                    {
                        name: '销售',
                        type: 'bar',
                        data: public_data.getEchartsData(data, '销售', ''),
                    },
                    {
                        name: '退货',
                        type: 'bar',
                        data: public_data.getEchartsData(data, '退货', ''),
                    },
                    {
                        name: '退货率',
                        type: 'line',
                        yAxisIndex: 1,
                        data: public_data.getEchartsData(data, '退货率', ''),
                    },
                ]
            };
            ECharts.Draw(option, "chartModalCon");
        },
        createChart12: function(data){
            var option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        }
                    }
                },
                xAxis: [
                    {
                        type: 'category',
                        data: public_data.getEchartsData(data, 'name', 'branch'),
                        axisPointer: {
                            type: 'shadow'
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '百分比',
                        axisLabel: {
                            formatter: '{value}/%'
                        }
                    }
                ],
                series: [
                    {
                        name: '缺货率',
                        type: 'line',
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        data: public_data.getEchartsData(data, 'value', ''),
                    },
                ]
            };
            ECharts.Draw(option, "chartModalCon");
        },
        createChart13: function(data){
            var option = {
                title: {
                    text: '各门店客单价分布',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        }
                    }
                },
                xAxis: [
                    {
                        type: 'category',
                        data: public_data.getEchartsData(data, 'name', 'branch'),
                        axisPointer: {
                            type: 'shadow'
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '百分比',
                        axisLabel: {
                            formatter: '{value}/%'
                        }
                    }
                ],
                series: [
                    {
                        name: '客单价',
                        type: 'line',
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        data: public_data.getEchartsData(data, 'value', ''),
                    },
                ]
            };
            ECharts.Draw(option, "chartModalCon");
        },
        createChart14: function(data){
            var option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        }
                    }
                },
                xAxis: [
                    {
                        type: 'category',
                        data: public_data.getEchartsData(data, 'name', 'branch'),
                        axisPointer: {
                            type: 'shadow'
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        //name: '百分比',
                        axisLabel: {
                            formatter: '{value}'
                        }
                    }
                ],
                series: [
                    {
                        name: '连带率',
                        type: 'line',
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        data: public_data.getEchartsData(data, 'value', ''),
                    },
                ]
            };
            ECharts.Draw(option, "chartModalCon");
        },
        createChart15: function(data){
            var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                series: [
                    {
                        name: '品牌',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '50%'],
                        data: data,
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    formatter: '{b} : ￥{c}',
                                    textStyle: {
                                        color: '#333'
                                    }
                                },
                                labelLine: { show: true }
                            }
                        }
                    }
                ]
            };
            ECharts.Draw(option, "chartModalCon");
        },
        show: function(myChart, option) {
			var app = {};
			app.currentIndex = -1;
			showChart = setInterval(function () {
				var dataLen = option.series[0].data.length;
				// 取消之前高亮的图形
				myChart.dispatchAction({
					type: 'downplay',
					seriesIndex: 0,
					dataIndex: app.currentIndex
				});
				app.currentIndex = (app.currentIndex + 1) % dataLen;
				// 高亮当前图形

				myChart.dispatchAction({
					type: 'highlight',
					seriesIndex: 0,
					dataIndex: app.currentIndex
				});
				pieIndex = app.currentIndex
			}, 1000)
		}
	}
});
var chartModal = new Vue({
    el: '#chartModal',
    data: {
        modalTitle: ''
    },
    mounted: function(){
        this.init();
    },
    methods: {
        init: function(){

        }
    }
});