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
				top.addModal($('#createRoleModal')[0]);
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
		        	url: baseurl + "/sys/role/queryByCondition.html",
	            postData: {
	    				key: me.key
	            },
	            datatype: "json",
		        	height: $(window).height() - 135,
	            autowidth: true,
	            colModel: [
	            	{ label: '区域编码', name: 'roleCode', hidden: true },
	                { label: '角色名称', name: 'roleName', width: 100, align: 'center' },
	                { label: '可看数据权限', name: 'canSeeDataStr', width: 100, align: 'center' },
	                { label: '可看毛利', name: 'canSeeProfitStr', width: 120, align: 'center' },
	                { label: "备注", name: "description", width: 200, align: "left" }
	            ],
	            viewrecords: true,
	            rowNum: 100,
	            rowList: [100, 500, 1000],
	            pager: "#gridPager",
	            loadonce: true,  //缓存排序后才可翻页
	            rownumbers: true,
	            shrinkToFit: false,
	            gridview: true
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
		addRole: function(){
			var me = this;
			top.showModal('createRoleModal');
			top.createRoleModalVm.modalTitle = '新增角色';
			top.createRoleModalVm.clear();
		},
		editRole: function(){
			var me = this;
			var roleCode = me.grid.jqGridRowValue("roleCode");
	        if (roleCode) {
	        		$.getJSON(baseurl + "/sys/role/queryByCode.html", {
	        			roleCode : roleCode
				}, function(res) {
					if(res){
						top.showModal('createRoleModal');
						top.createRoleModalVm.modalTitle = '修改角色';
						top.createRoleModalVm.clear();
						top.createRoleModalVm.formData = res;
						top.createRoleModalVm.menuCheckedIds = res.menuCheckedIds ? res.menuCheckedIds.split(',') : [];
						top.createRoleModalVm.buttonCheckedIds = res.buttonCheckedIds ? res.buttonCheckedIds.split(',') : [];
					}
				});
	        }else{
	        		dialogMsg("请选择一个角色进行操作", 0);
	        }
		},
		deleteRole: function(){
			var me = this;
			var roleCode = me.grid.jqGridRowValue("roleCode");
	        if (roleCode) {
		        	var me = this;
		        	top.swal({
					title : "您确认要删除此角色吗？",
					type: "warning",
					showCancelButton : true,
					confirmButtonColor : "#DD6B55",
					confirmButtonText : "是的，我要删除",
					cancelButtonText : "取消",
					closeOnConfirm : true
				}, function (isConfirm) {
					if (isConfirm) {
						$.getJSON(baseurl + "/sys/role/deleteRole.html", {
							roleCode : roleCode
						}, function() {
							me.grid.setGridParam({datatype:'json'}).trigger('reloadGrid');
						});
					}
				});
	        } else {
	            dialogMsg('请选择一个角色进行操作', 0);
	        }
		},
		exportGrid: function(){
			
		}
	}
});
top.createRoleModalVm = new Vue({
	el: '#createRoleModal',
	data: {
		modalTitle: '',
		formData : {
			
		},
		tabIndex: 0,
		menuCheckedIds: [],
		buttonCheckedIds: [],
		menuTreeData: [],
		buttonTreeData: [],
		// 设置项
		options: {
			depthOpen: 1
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
				me.loadModuleOptions();
				me.loadButtonOptions();
			});
		},
		initEvent: function(){
			
		},
		loadModuleOptions: function(){
			var me = this;
	    	$.getJSON(baseurl + "/sys/module/queryOptions.html", {
	    	}, function(res){
	    		me.menuTreeData = [{
    				id: '0',
    				label: '全部',
	    			children: res
	    		}];
	    	});
		},
		loadButtonOptions: function(){
			var me = this;
		    	$.getJSON(baseurl + "/sys/button/queryOptions.html", {
		    	}, function(res){
		    		me.buttonTreeData = [{
	    				id: '0',
	    				label: '全部',
		    			children: res
		    		}];
		    	});
		},
		save : function(){
			var me = this;
			if(!this.valid()){
				return;
			}
			var method = me.formData.roleCode ? 'updateRole' : 'createRole';
			me.formData.menuCheckedIds = me.menuCheckedIds.join();
			me.formData.buttonCheckedIds = me.buttonCheckedIds.join();
			$.ajax({
			   type: "POST",
			   contentType:"application/json",
			   url: baseurl + '/sys/role/' + method + '.html',
			   data: JSON.stringify(me.formData),
			   dataType: 'json',
			   success: function(res){
				   if(res && res.code == '0'){
					   pageVm.reload();
				   }
			   }
			});
			top.hideModal('createRoleModal');
		},
		valid: function(){
			if(this.tabIndex == 0){
				if(!this.formData.roleName){
					dialogMsg("请输入角色名称", 0);
					return false;
				}
				if(!this.formData.canSeeData){
					dialogMsg("请选择数据权限", 0);
					return false;
				}
				if(!this.formData.canSeeData){
					dialogMsg("请选择是否毛利可见", 0);
					return false;
				}
			}else if(this.tabIndex == 1){
				if(this.menuCheckedIds == null || this.menuCheckedIds.length == 0){
					dialogMsg("您没有选择菜单权限", 0);
				}
			}else if(this.tabIndex == 2){
				if(this.buttonCheckedIds == null || this.buttonCheckedIds.length == 0){
					dialogMsg("您没有选择按钮权限", 0);
				}
			}
			return true;
		},
		clear: function(){
			this.formData = {};
			this.menuCheckedIds = [];
			this.buttonCheckedIds = [];
			this.tabIndex = 0;
		},
		preTab: function(){
			if(this.tabIndex > 0){
				this.tabIndex--;
			}
		},
		nextTab: function(){
			if(this.tabIndex < 2){
				if(this.valid()){
					this.tabIndex++;
				}
			}else if( this.tabIndex == 2){
				if(this.valid()){
					this.save();
				}
			}
		}
	}
});