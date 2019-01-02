var pageVM = new Vue({
	el : '#page',
	data : {
		data1 : [ {
			"value" : 0.0
		}, {
			"value" : 0.0
		}, {
			"value" : 0.0
		}, {
			"value" : 0.0
		} ],
		chart1Data:null,
		chart2Data:null,
		chart3Data:null,
		data2 : [ {
			"date" : "2018-11-15",
			"value" : "￥-60773.05"
		} ]
	},
	mounted : function() {
		this.init();
	},
	methods : {
		init : function() {
			var me = this;
			setTimeout(function() {
				me.initEvent();
				//me.loadData();
			});
		},
		initEvent: function(){
			var me = this;
			
		},
		loadData: function(){
			this.getYesterdayGain();
			this.getChart1Data();
			this.getChart2Data();
			this.getChart3Data();
		},
		getYesterdayGain : function() {
			var me = this;
			$.get(baseurl + "/Report_PC/Home_page/yesterday_gain",function(data){
				me.data1 = data;
			});
		},
		getChart1Data: function(){
			var me = this;
			$.get(baseurl + "/Report_PC/Home_page/month_gain",function(data){
				data = [{"日期":"2018-11-01","本期销售":110508,"同期销售":110838,"累计":110508},{"日期":"2018-11-02","本期销售":101744,"同期销售":95734,"累计":212252},{"日期":"2018-11-03","本期销售":102711,"同期销售":96277,"累计":314963},{"日期":"2018-11-04","本期销售":104406,"同期销售":122302,"累计":419369},{"日期":"2018-11-05","本期销售":82894,"同期销售":114171,"累计":502263},{"日期":"2018-11-06","本期销售":72479,"同期销售":84234,"累计":574742},{"日期":"2018-11-07","本期销售":93761,"同期销售":65618,"累计":668503},{"日期":"2018-11-08","本期销售":71431,"同期销售":59656,"累计":739934},{"日期":"2018-11-09","本期销售":499609,"同期销售":530547,"累计":1239543},{"日期":"2018-11-10","本期销售":476412,"同期销售":353190,"累计":1715955},{"日期":"2018-11-11","本期销售":787712,"同期销售":558562,"累计":2503667},{"日期":"2018-11-12","本期销售":77733,"同期销售":489628,"累计":2581400},{"日期":"2018-11-13","本期销售":1820,"同期销售":89392,"累计":2583220}];
				me.chart1Data = data;
				me.createChart1(data);
			});
		},
		getChart2Data: function(){
			var me = this;
			$.get(baseurl + "/Report_PC/Home_page/yesterday_t_z_d_l",function(data){
				data = [{"昨日退货率":11.217500,"昨日折扣率":59.486700,"昨日客单价":135.188678,"昨日连带率":2.243664}];
				me.chart2Data = data;
				me.createChart2(data);
			});
		},
		getChart3Data: function(){
			var me = this;
			$.get(baseurl + "/Report_PC/Home_page/today_branch_sale",function(data){
				data = [{"name":"测试15店","value":3510},{"name":"测试09店","value":3063},{"name":"测试34店","value":2796},{"name":"测试30店","value":2064},{"name":"测试11店","value":1339},{"name":"测试06店","value":1333}];
				me.chart3Data = data;
				me.createChart3(data);
			});
		},
		createChart1 : function(data) {
			var xData = [],y1Data = [], y2Data = [], y3Data = [];
			$.each(data,function(i,item){
				xData.push(item['日期']);
				y1Data.push(item['本期销售']);
				y2Data.push(item['同期销售']);
				y3Data.push(item['累计']);
			});
			var option = {
				tooltip : {
					trigger : 'axis',
					axisPointer : {
						type : 'cross',
						crossStyle : {
							color : '#999'
						}
					}
				},
				grid : {
					left : '1%',
					right : '1%',
					bottom : '1%',
					top : '50',
					containLabel : true
				},
				legend : {
					data : [ '本期销售', '同期销售', '累计完成' ],
					top : '2',
					x : "right"
				},
				xAxis : [ {
					type : 'category',
					data : xData,
					axisPointer : {
						type : 'shadow'
					}
				} ],
				yAxis : [ {
					type : 'value',
					//name: '每日完成',
					axisLabel : {
						formatter : '{value}'
					}
				}, {
					type : 'value',
					//name: '累计完成',
					axisLabel : {
						formatter : '{value}'
					},
					splitLine : {
						show : false
					}
				} ],
				series : [ {
					name : '本期销售',
					type : 'bar',
					smooth : true,
					data : y1Data
				}, {
					name : '同期销售',
					type : 'bar',
					smooth : true,
					data : y2Data
				}, {
					name : '累计完成',
					type : 'line',
					smooth : 'true',
					symbolSize : 2,
					itemStyle : {
						normal : {
							areaStyle : {
								color : "rgba(237, 175, 218, 0.2)",
								type : "default"
							},
							lineStyle : {
								width : 1
							}
						}
					},
					yAxisIndex : 1,
					data : y3Data
				} ]
			};
			ECharts.Draw(option, "chart1", false, "");
		},
		createChart2 : function(data) {
			var option = {
				tooltip : {
					trigger : 'item',
					formatter : "{a} <br/>{b} : {c} ({d}%)"
				},
				series : [
						{
							name : "昨日退货率",
							type : 'pie',
							radius : [ '65%', '85%' ],
							center : [ '12.5%', '50%' ],
							label : {
								normal : {
									position : 'center'
								}
							},
							data : [ {
								value : fixNum(data[0].昨日退货率, 2),
								name : "昨日退货率",
								label : {
									normal : {
										formatter : '{d} %',
										textStyle : {
											fontSize : 26
										}
									}
								}
							}, {
								value : 100 - (data[0].昨日退货率),
								name : '占比',
								label : {
									normal : {
										formatter : '\n昨日退货率',
										textStyle : {
											color : '#555',
											fontSize : 16
										}
									}
								},
								tooltip : {
									show : false
								},
								itemStyle : {
									normal : {
										color : '#dedede'
									},
									emphasis : {
										color : '#dedede'
									}
								},
								hoverAnimation : false
							} ]
						},
						{
							name : "昨日折扣率",
							type : 'pie',
							radius : [ '65%', '85%' ],
							center : [ '37.5%', '50%' ],
							label : {
								normal : {
									position : 'center'
								}
							},
							data : [ {
								value : fixNum(data[0].昨日折扣率, 2),
								name : "昨日折扣率",
								label : {
									normal : {
										formatter : '{d} %',
										textStyle : {
											fontSize : 26
										}
									}
								}
							}, {
								value : 100 - (data[0].昨日折扣率),
								name : '占比',
								label : {
									normal : {
										formatter : '\n昨日折扣率',
										textStyle : {
											color : '#555',
											fontSize : 16
										}
									}
								},
								tooltip : {
									show : false
								},
								itemStyle : {
									normal : {
										color : '#dedede'
									},
									emphasis : {
										color : '#dedede'
									}
								},
								hoverAnimation : false
							} ]
						},
						{
							name : "昨日客单价",
							type : 'pie',
							radius : [ '65%', '85%' ],
							center : [ '62.5%', '50%' ],
							label : {
								normal : {
									position : 'center'
								}
							},
							data : [
									{
										value : fixNum(data[0].昨日客单价, 2),
										name : "昨日客单价",
										label : {
											normal : {
												formatter : '{c}',
												textStyle : {
													fontSize : 26
												}
											}
										}
									},
									{
										value : (data[0].昨日客单价 < 500 ? 500
												: data[0].昨日客单价 * 1.2)
												- (data[0].昨日客单价),
										name : '占比',
										label : {
											normal : {
												formatter : '\n昨日客单价',
												textStyle : {
													color : '#555',
													fontSize : 16
												}
											}
										},
										tooltip : {
											show : false
										},
										itemStyle : {
											normal : {
												color : '#dedede'
											},
											emphasis : {
												color : '#dedede'
											}
										},
										hoverAnimation : false
									} ]
						},
						{
							name : "昨日连带率",
							type : 'pie',
							radius : [ '65%', '85%' ],
							center : [ '87.5%', '50%' ],
							label : {
								normal : {
									position : 'center'
								}
							},
							data : [
									{
										value : fixNum(data[0].昨日连带率, 2),
										name : "昨日连带率",
										label : {
											normal : {
												formatter : '{c}',
												textStyle : {
													fontSize : 26
												}
											}
										}
									},
									{
										value : (data[0].昨日连带率 < 10 ? 10
												: data[0].昨日连带率 * 1.1)
												- (data[0].昨日连带率),
										name : '占比',
										label : {
											normal : {
												formatter : '\n昨日连带率',
												textStyle : {
													color : '#555',
													fontSize : 16
												}
											}
										},
										tooltip : {
											show : false
										},
										itemStyle : {
											normal : {
												color : '#dedede'
											},
											emphasis : {
												color : '#dedede'
											}
										},
										hoverAnimation : false
									} ]
						} ]
			};
			ECharts.Draw(option, "chart2", false, "");
		},
		createChart3 : function(chartData) {
			var dataAxis = [];
			var data = [];
			var yMax = chartData[0].value;
			for(var i=0,len=chartData.length; i<len; i++){
				dataAxis.push(chartData[i].name);
				data.push(chartData[i].value);
			}
			var dataShadow = [];
			for (var i = 0; i < data.length; i++) {
			    dataShadow.push(yMax);
			}
			var option = {
				grid: {
			        left: '3%',
			        right: '4%',
			        bottom: '3%',
			        top: '3%',
			        containLabel: true
			    },
			    xAxis: {
			    	type : 'category',
			        data: dataAxis,
			        axisTick: {
		                alignWithLabel: true
		            }
			    },
			    yAxis: {
			        axisLine: {
			            show: false
			        },
			        axisTick: {
			            show: false
			        },
			        axisLabel: {
			            textStyle: {
			                color: '#999'
			            }
			        }
			    },
			    series: [
			        { // For shadow
			            type: 'bar',
			            itemStyle: {
			                normal: {color: 'rgba(0,0,0,0.05)'}
			            },
			            barGap:'-100%',
			            barCategoryGap:'40%',
			            data: dataShadow,
			            animation: false
			        },
			        {
			            type: 'bar',
			            itemStyle: {
			                normal: {
			                    color: new echarts.graphic.LinearGradient(
			                        0, 0, 0, 1,
			                        [
			                            {offset: 0, color: '#727CF5'},
			                            {offset: 0.5, color: '#787AEF'},
			                            {offset: 1, color: '#A76FC5'}
			                        ]
			                    )
			                }
			            },
			            data: data
			        }
			    ]
			};
			ECharts.Draw(option, "chart3", false, "");
		}
	}
});