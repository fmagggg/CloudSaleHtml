var pageVm = new Vue({
	el: '#page',
	data: {
		userInfo: {},
		userId: userId,
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
				me.getLoginUserInfo();
				me.loadGrid();
				top.addModal($('#createUserModal')[0]);
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
		getLoginUserInfo: function(){
			var me = this;
			$.getJSON(baseurl + "/sys/user/queryByUserId.html", {
				userId : me.userId
			}, function(data) {
				me.userInfo = data;
			});
		},
		loadGrid: function(){
			var me = this;
			me.grid.jqGrid({
	        	url: baseurl + "/sys/user/queryByCondition.html",
	            postData: {
	            	userId: me.userId,
	    			key: me.key
	            },
	            datatype: "json",
	        	height: $(window).height() - 135,
	            autowidth: true,
	            colModel: [
	                { label: '主键', name: 'userId', hidden: true },
	                { label: '账户', name: 'account', index: 'account', sortable: true,sorttype: 'float', width: 100, align: 'center' },
	                { label: '姓名', name: 'realName', index: 'realName', sortable: true, sorttype: 'float', width: 100, align: 'center' },
	                {
	                    label: '性别', name: 'gender', index: 'gender', sortable: true, width: 45, align: 'center',
	                    formatter: function (cellvalue, options, rowObject) {
	                        return cellvalue == 1 ? "男" : "女";
	                    }
	                },
	                { label: '手机', name: 'mobile', index: 'mobile', sortable: true, width: 120, align: 'center' },
	                {
	                    label: '公司', name: 'organizeName', index: 'organizeName', sortable: true, width: 180, align: 'center'
	                },
	                { label: '区域', name: 'areaName', sortable: true, width: 200, align: 'center' },
	                { label: '角色', name: 'roleName', sortable: true, width: 200, align: 'center' },
	                { label: "备注", name: "description", sortable: true, index: "description", width: 200, align: "left" }
	            ],
	            viewrecords: true,
	            rowNum: 100,
	            rowList: [100, 500, 1000],
	            pager: "#gridPager",
	            sortable: true,
	            sortname: 'organizeId asc,gmtCreate desc',
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
		addUser: function(){
			var me = this;
			if (accountType != 2 && (me.userInfo.authUserCount - me.userInfo.childUserCount) <= 0) {
	            dialogMsg("超过授权人数，不能添加，请联系管理员扩容！", 0);
	        } else {
	        		top.showModal('createUserModal');
	        		top.createUserModalVm.modalTitle = '新增用户';
	        		top.createUserModalVm.clear();
	        }
		},
		editUser: function(){
			var me = this;
			var userId = me.grid.jqGridRowValue("userId");
	        if (userId) {
		        	$.getJSON(baseurl + "/sys/user/queryByUserId.html", {
		        		userId : userId
				}, function(res) {
					if(res){
						top.showModal('createUserModal');
						top.createUserModalVm.modalTitle = '修改用户';
						top.createUserModalVm.clear();
						top.createUserModalVm.formData = res;
					}
				});
	        }else{
	        		dialogMsg("请选择一个用户进行操作", 0);
	        }
		},
		deleteUser: function(){
			var me = this;
			var userId = me.grid.jqGridRowValue("userId");
	        if (userId) {
	        	var me = this;
	        top.swal({
					title : "您确认要删除此用户吗？",
					type: "warning",
					showCancelButton : true,
					confirmButtonColor : "#DD6B55",
					confirmButtonText : "是的，我要删除",
					cancelButtonText : "取消",
					closeOnConfirm : true
				}, function (isConfirm) {
					if (isConfirm) {
						$.getJSON(baseurl + "/sys/user/deleteUser.html", {
							userId : userId
						}, function(res) {
							if(res && res.code == '0'){
								me.grid.setGridParam({datatype:'json'}).trigger('reloadGrid');
							}else if(res && res.msg){
								dialogMsg(res.msg, 0);
							}
						});
					}
				});
	        } else {
	            dialogMsg('请选择一个用户进行操作', 0);
	        }
		},
		exportGrid: function(){
			
		}
	}
});
top.createUserModalVm = new Vue({
	el: '#createUserModal',
	components: {
		Treeselect: VueTreeselect.Treeselect
	},
	data: {
		modalTitle: '',
		formData : {
			
		},
		areaOptions:[],
		roleOptions:[]
	},
	mounted: function(){
		this.init();
	},
	methods: {
		init: function(){
			var me = this;
			setTimeout(function(){
				me.initEvent();
				me.loadAreaOptions();
				me.loadRoleOptions();
			});
		},
		initEvent: function(){
			
		},
		loadAreaOptions: function(parentAreaCode, callback){
			var me = this;
			$.getJSON(baseurl + "/sys/area/queryOptions.html", {
				parentAreaCode: parentAreaCode
			}, function(res) {
				if(callback){
					callback(res);
				}else{
					me.areaOptions = res;
				}
			});
		},
		loadOptions({ action, parentNode, callback }) {
			var me = this;
			me.loadAreaOptions(parentNode.id, function(res){
				parentNode.children = res;
				callback();
			});
	    },
	    loadRoleOptions: function(){
		    	var me = this;
		    	$.getJSON(baseurl + "/sys/role/queryOptions.html", {
		    		
		    	}, function(res){
		    		me.roleOptions = res;
		    	});
	    },
		save : function(){
			var me = this;
			if(!this.valid()){
				return;
			}
			var method = me.formData.userId ? 'updateUser' : 'createUser';
			$.ajax({
			   type: "POST",
			   contentType:"application/json",
			   url: baseurl + '/sys/user/' + method + '.html',
			   data: JSON.stringify(me.formData),
			   dataType: 'json',
			   success: function(res){
				   if(res && res.code == '0'){
					   top.hideModal('createUserModal');
					   pageVm.reload();
				   }else if(res && res.code != '0'){
					   dialogMsg(res.msg, 2);
				   }
			   }
			});
		},
		valid: function(){
			if(accountType == 2){
				if(!this.formData.organizeName){
					dialogMsg("请输入公司名称", 0);
					return false;
				}
				if(this.formData.authTime <= 0){
					dialogMsg("请输入大于0的授权天数", 0);
					return false;
				}
				if(this.formData.authUserCount <= 0){
					dialogMsg("请输入大于0的授权人数", 0);
					return false;
				}
			}
			if(!this.formData.account){
				dialogMsg("请输入账号", 0);
				return false;
			}
			if(!this.formData.password){
				dialogMsg("请输入密码", 0);
				return false;
			}
			if(!this.formData.areaCode){
				dialogMsg("请选择区域", 0);
				return false;
			}
			if(!this.formData.roleCode){
				dialogMsg("请选择角色", 0);
				return false;
			}
			if(!this.formData.realName){
				dialogMsg("请输入姓名", 0);
				return false;
			}
			if(!this.formData.mobile){
				dialogMsg("请输入手机", 0);
				return false;
			}
			return true;
		},
		clear: function(){
			this.formData = {};
		}
	}
});