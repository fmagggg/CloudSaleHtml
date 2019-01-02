var pageVm = new Vue({
	el: '#page',
	data: {
		key: "",
		grid: null
	},
	mounted: function(){
		this.init();
	},
	methods: {
		init: function(){
			var me = this;
			setTimeout(function(){
				me.grid = $('#gridTable');
				me.initEvent();
				me.loadGrid();
				top.addModal($('#createAreaModal')[0]);
			});
		},
		initEvent: function(){
			$(window).resize(function (e) {
	            window.setTimeout(function () {
	                $("#gridTable").setGridHeight($(window).height() - 135);
	                $("#gridTable").setGridWidth($(window).width());
	            }, 200);
	            e.stopPropagation();
	        });
		},
		loadGrid: function(){
			var me = this;
			me.grid.jqGrid({
				url: baseurl + "/sys/area/queryByCondition.html",
	            postData: {
	    				key: me.key
	            },
	            datatype: "json",
	            height: $(window).height() - 135,
	            autowidth: true,
	            colModel: [
	            		{ label: '区域编码', name: 'areaCode', hidden: true },
	            		{ label: '节点层级', name: 'level', hidden: true },
	            		{ label: '区域名称', name: 'areaName', index: 'areaName', sortable: false,sorttype: 'float', width: 200, align:"left" },
	                { label: '门店编号', name: 'branchCode', index: 'branchCode', sortable: false, sorttype: 'float', width: 150, align: 'center' },
	                { label: "备注", name: "description", sortable: false, index: "description", width: 200, align: "left" }
	            ],
	            treeGrid: true,
	            treeGridModel: "adjacency",
	            ExpandColumn: "areaName",
	            treeReader:{
					parent_id_field: "parentAreaCode"
				},
				rowNum: "all",
				hoverrows:false,
				viewrecords:false,
				gridview:true,
	            loadonce: true
	        });
		},
		search: function(){
			var me = this;
			me.grid.jqGrid('setGridParam', {
                datatype: 'json',
                postData: {
	    				key: me.key
	            },
	            page: 1
            }).trigger('reloadGrid');
		},
		refresh: function(){
			window.location.reload();
		},
		reload: function(){
			var me = this;
			me.key = '';
			me.grid.jqGrid('setGridParam', {
                datatype: 'json',
                postData: {
	    				key: me.key
	            },
	            page: 1
            }).trigger('reloadGrid').jqGrid('resetSelection');
		},
		addArea: function(){
			var me = this;
			var areaCode = me.grid.jqGridRowValue("areaCode");
			var level = me.grid.jqGridRowValue("level");
			top.showModal('createAreaModal');
			top.createAreaModalVm.modalTitle = '新增区域';
			top.createAreaModalVm.clear();
			top.createAreaModalVm.formData.parentAreaCode = areaCode ? areaCode : 0;
			top.createAreaModalVm.formData.level = level ? (level * 1 + 1) : 0;
		},
		editArea: function(){
			var me = this;
			var areaCode = me.grid.jqGridRowValue("areaCode");
	        if (areaCode) {
	        		$.getJSON(baseurl + "/sys/area/queryByCode.html", {
					areaCode : areaCode
				}, function(res) {
					if(res){
						top.showModal('createAreaModal');
						top.createAreaModalVm.modalTitle = '修改区域';
						top.createAreaModalVm.clear();
						top.createAreaModalVm.formData.areaCode = res.areaCode;
						top.createAreaModalVm.formData.areaName = res.areaName;
						top.createAreaModalVm.formData.branchCode = res.branchCode;
						top.createAreaModalVm.formData.description = res.description;
					}
				});
	        }else{
	        		dialogMsg("请选择一个区域进行操作", 0);
	        }
		},
		deleteArea: function(){
			var me = this;
			var areaCode = me.grid.jqGridRowValue("areaCode");
	        if (areaCode) {
	        	var me = this;
	        	top.swal({
					title : "您确认要删除此区域吗？",
					type: "warning",
					showCancelButton : true,
					confirmButtonColor : "#DD6B55",
					confirmButtonText : "是的，我要删除",
					cancelButtonText : "取消",
					closeOnConfirm : true
				}, function (isConfirm) {
					if (isConfirm) {
						$.getJSON(baseurl + "/sys/area/deleteArea.html", {
							areaCode : areaCode
						}, function() {
							me.grid.setGridParam({datatype:'json'}).trigger('reloadGrid');
						});
					}
				});
	        } else {
	            dialogMsg('请选择一个区域进行操作', 0);
	        }
		},
		exportGrid: function(){
			
		}
	}
});
top.createAreaModalVm = new Vue({
	el: '#createAreaModal',
	data: {
		modalTitle: '',
		formData : {
			
		}
	},
	mounted: function(){
		this.init();
	},
	methods: {
		init: function(){
			var me = this;
			setTimeout(function(){
				me.initEvent();
			});
		},
		initEvent: function(){
			
		},
		save : function(){
			var me = this;
			if(!this.valid()){
				return;
			}
			var method = me.formData.areaCode ? 'updateArea' : 'createArea';
			$.ajax({
			   type: "POST",
			   contentType:"application/json",
			   url: baseurl + '/sys/area/' + method + '.html',
			   data: JSON.stringify(me.formData),
			   dataType: 'json',
			   success: function(res){
				   if(res && res.code == '0'){
					   pageVm.reload();
				   }
			   }
			});
			top.hideModal('createAreaModal');
		},
		valid: function(){
			return true;
		},
		clear: function(){
			this.formData = {
				
			};
		}
	}
});