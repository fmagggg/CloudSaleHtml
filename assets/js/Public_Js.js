var IsPC=function () {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

$(function () {
    //DepartmentId = top.DepartmentId;
    //branch = top.branch;
    //branchName = top.branchName;
    //saleMan = top.saleMan;
    //authorityFlag = top.authorityFlag;
    //CanSeeProfit = top.CanSeeProfit;
    if (typeof $ != 'undefined' && typeof (jQuery) != 'undefined' && document.body) {
        if (IsPC()) {
            if ($("#choseDate").length > 0) {
                var dateHtml = '\
                            <div class="pull-left dateArea" style="width: 100%;">\
                                <label class="btn btn-sm btn-white pull-left"><i class="fa fa-calendar"></i>&nbsp选择时间</label>\
                                <div id="dateNew"  class="form-control input-wdatepicker pull-left" style="width: 220px; height: 30px !important;padding:4px 12px"></div>\
                            </div>\
                            <div  class="dropdown-menu" role="menu" style="padding:5px">\
                                <div>\
                                    <label class="btn btn-sm btn-white pull-left"><i class="fa fa-calendar"></i>&nbsp开始时间</label>\
                                    <input type="text" id="sDate" onfocus="WdatePicker()" class="form-control input-wdatepicker pull-left" style="width: 210px; height: 30px !important" />\
                                </div>\
                                <div class="pull-left">\
                                    <label class="btn btn-sm btn-white pull-left"><i class="fa fa-calendar"></i>&nbsp结束时间</label>\
                                    <input type="text" id="eDate" onfocus="WdatePicker()" class="form-control input-wdatepicker pull-left" style="width: 210px; height: 30px !important" />\
                                </div>\
                                <div id="dateDefault" data-toggle="buttons" class="btn-group" style="float: left; margin-left: 5px; margin-right: 5px">\
                                    <label data-value="getToday" class="btn btn-sm btn-white" style="width:17.67%">\
                                        <input type="radio" id="" name="dateoptions" />今日</label>\
                                    <label data-value="getYesterday" class="btn btn-sm btn-white" style="width:16.67%">\
                                        <input type="radio" id="" name="dateoptions" />昨日</label>\
                                    <label data-value="getWeek" class="btn btn-sm btn-white" style="width:16.67%">\
                                        <input type="radio" id="" name="dateoptions" />本周</label>\
                                    <label data-value="getLastWeek" class="btn btn-sm btn-white" style="width:16.67%">\
                                        <input type="radio" id="" name="dateoptions" />上周</label>\
                                    <label data-value="getMonth" class="btn btn-sm btn-white" style="width:16.67%">\
                                        <input type="radio" id="" name="dateoptions" />本月</label>\
                                    <label data-value="getLastMonth" class="btn btn-sm btn-white" style="width:16.67%">\
                                        <input type="radio" id="" name="dateoptions" />上月</label>\
                                    <label data-value="getMonth_30Day" class="btn btn-sm btn-white" style="width: 21%">\
                                        <input type="radio" id="" name="dateoptions" />近30日</label>\
                                    <label data-value="getQuarter" class="btn btn-sm btn-white"style="width:20%">\
                                        <input type="radio" id="" name="dateoptions" />本季度</label>\
                                    <label data-value="getlastQuarter" class="btn btn-sm btn-white"style="width:20%">\
                                        <input type="radio" id="" name="dateoptions" />上季度</label>\
                                    <label data-value="getYear" class="btn btn-sm btn-white"style="width:20%">\
                                        <input type="radio" id="" name="dateoptions" />本年度</label>\
                                    <label data-value="getlastYear" class="btn btn-sm btn-white"style="width:20%">\
                                        <input type="radio" id="" name="dateoptions" />上年度</label>\
                                </div>\
                            </div>\
              \
'
                $("#choseDate").html(dateHtml)
                $("#dateNew").click(function () {
                    $("#choseDate").toggleClass("open");
                    event.stopPropagation();//阻止冒泡
                })
                $("#dateDefault").find("label").click(function () {
                    var datekey = $(this).attr("data-value");
                    eval("sDate=dataInfo." + datekey + "StartDate()")
                    eval("eDate=dataInfo." + datekey + "EndDate()")
                    $("#sDate").val(sDate)
                    $("#eDate").val(eDate)
                    $("#dateNew").html(sDate + " 至 " + eDate);
                })
                $(document).click(function (e) {
                    var e = e ? e : window.event;
                    var tar = e.srcElement || e.target;
                    if ($(tar).parent("div").parent("div").parent("div").attr('id') != "choseDate") {
                        $("#choseDate").removeClass("open")
                        e.stopPropagation();
                    }
                });
                $("#choseDate").find("input[type='text']").on("focus", function () {
                    var idNow = $(this).attr("id");
                    eval(idNow + "='" + $(this).val() + "'")
                    $("#dateNew").html(sDate + " 至 " + eDate);
                })
                $("#sDate").on("change", function () {
                    sDate = $(this).val();
                    eDate = $("#eDate").val();
                    $("#dateNew").html(sDate + " 至 " + eDate);
                })
                $("#eDate").on("change", function () {
                    eDate = $(this).val();
                    sDate = $("#sDate").val();
                    $("#dateNew").html(sDate + " 至 " + eDate);
                })
                sDate = GetQueryString("sDate") == null ? dataInfo.getMonth_30DayStartDate() : GetQueryString("sDate")
                eDate = GetQueryString("eDate") == null ? dataInfo.getMonth_30DayEndDate() : GetQueryString("eDate")
                $("#sDate").val(sDate);
                $("#eDate").val(eDate);
                $("#dateNew").html(sDate + " 至 " + eDate);
            }
            if ($("#haveStock").length > 0) {
                $("#haveStock").click(function () {
                    $(this).toggleClass("badge-danger")
                    $(this).toggleClass("badge-info")
                    if ($(this).text().indexOf("有库存") >= 0) {
                        $(this).html("<i class='fa fa-toggle-off'></i>&nbsp显示全部")
                        stckflag = 0
                    } else {
                        $(this).html("<i class='fa fa-toggle-on'></i>&nbsp只看有库存")
                        stckflag = 1
                    }
                    $("#search").trigger("click");
                })
            }
            if ($("#ParamPanel").length > 0) {//参数面板<div id="ParamPanel" data-content="branch_cls_brand_supcust_saleMan_itemNo" class="input-group pull-left"></div>
                var ParamList = $("#ParamPanel").attr("data-content").split("_")
                var paramHtml = "";
                for (var j = 0; j < ParamList.length; j++) {
                    switch (ParamList[j]) {
                        case "branch": paramHtml += '\
                            <div class="pull-left">\
                                <label class="btn btn-sm btn-white pull-left" style="width: 80px"><i class="fa fa-bank"></i>&nbsp门&nbsp&nbsp 店 </label>\
                                <div id="branch_no_M" class="ui-select pull-left" style="height: 30px !important; width: 215px"></div>\
                                <label class="btn btn-sm btn-white pull-left restParam" style="width: 20px;height: 30px;padding:5px 0"><i class="fa fa-close"></i></label>\
                            </div>\
                            '; break;
                        case "cls": paramHtml += '\
                                <div class="pull-left">\
                                    <label class="btn btn-sm btn-white pull-left" style="width: 80px"><i class="fa fa-file-image-o"></i>&nbsp类&nbsp&nbsp 别 </label>\
                                    <div id="cls_tree" class="ui-select pull-left" style="height: 30px !important; width: 215px"></div>\
                                    <label class="btn btn-sm btn-white pull-left restParam" style="width: 20px;height: 30px;padding:5px 0"><i class="fa fa-close"></i></label>\
                                </div>\
                            '; break;
                        case "brand": paramHtml += '\
                                <div class="pull-left">\
                                    <label class="btn btn-sm btn-white pull-left" style="width: 80px"><i class="fa fa-dashboard"></i>&nbsp品&nbsp&nbsp 牌 </label>\
                                    <div id="brand_tree" class="ui-select pull-left" style="height: 30px !important; width: 215px"></div>\
                                    <label class="btn btn-sm btn-white pull-left restParam" style="width: 20px;height: 30px;padding:5px 0"><i class="fa fa-close"></i></label>\
                                </div>\
                            '; break;
                        case "supcust": paramHtml += '\
                                <div class="pull-left">\
                                    <label class="btn btn-sm btn-white pull-left" style="width: 80px"><i class="fa fa-cubes"></i>&nbsp供应商 </label>\
                                    <div id="supcust_tree" class="ui-select pull-left" style="height: 30px !important; width: 215px"></div>\
                                    <label class="btn btn-sm btn-white pull-left restParam" style="width: 20px;height: 30px;padding:5px 0"><i class="fa fa-close"></i></label>\
                                </div>\
                            '; break;
                        case "saleMan": paramHtml += '\
                                <div class="pull-left">\
                                    <label class="btn btn-sm btn-white pull-left" style="width: 80px"><i class="fa fa-group"></i>&nbsp营业员 </label>\
                                    <div id="sale_man_tree" class="ui-select pull-left" style="height: 30px !important; width: 215px"></div>\
                                    <label class="btn btn-sm btn-white pull-left restParam" style="width: 20px;height: 30px;padding:5px 0"><i class="fa fa-close"></i></label>\
                                </div>\
                            '; break;
                        case "itemNo": paramHtml += '\
                                <div class="pull-left">\
                                    <label class="btn btn-sm btn-white pull-left" style="width: 80px"><i class="fa fa-gift"></i>&nbsp条&nbsp&nbsp码</label>\
                                    <div id="item_no" class="ui-select pull-left" style="height: 30px !important; width:215px"></div>\
                                    <label class="btn btn-sm btn-white pull-left restParam" style="width: 20px;height: 30px;padding:5px 0"><i class="fa fa-close"></i></label>\
                                </div>\
                            '; break;
                        case "flowNo": paramHtml += '\
                                <div class="pull-left">\
                                    <label class="btn btn-sm btn-white pull-left" style="width: 80px"><i class="fa fa-newspaper-o"></i>&nbsp单&nbsp&nbsp号</label>\
                                    <div id="flowNo" class="ui-select pull-left" style="height: 30px !important; width:215px"></div>\
                                    <label class="btn btn-sm btn-white pull-left restParam" style="width: 20px;height: 30px;padding:5px 0"><i class="fa fa-close"></i></label>\
                                </div>\
                            '; break;
                        case "vipNo": paramHtml += '\
                                <div class="pull-left">\
                                    <label class="btn btn-sm btn-white pull-left" style="width: 80px"><i class="fa fa-credit-card"></i>&nbsp卡&nbsp&nbsp号</label>\
                                    <div id="vipInfo" class="ui-select pull-left" style="height: 30px !important; width:215px"></div>\
                                    <label class="btn btn-sm btn-white pull-left restParam" style="width: 20px;height: 30px;padding:5px 0"><i class="fa fa-close"></i></label>\
                                </div>\
                            '; break;
                    }
                }
                $("#ParamPanel").html('\
                            <div class="pull-left ParamPanelArea" style="width: 100%;">\
                                <label class="btn btn-sm btn-white pull-left"><i class="fa fa-search"></i>&nbsp其他参数</label>\
                                <div id="ParamPanelDiv" class="form-control input-wdatepicker pull-left" style="color:#ccc; width: 240px; height: 30px !important; padding: 4px 12px">筛选门店、类别、品牌等参数</div>\
                            </div>\
                            <div class="dropdown-menu " role="menu" style="padding: 5px 5px 0 5px">\
                           ' + paramHtml + '\
                        </div>\
                      ')
                $("#ParamPanelDiv").click(function () {
                    $("#ParamPanel").toggleClass("open");
                    event.stopPropagation();//阻止冒泡
                })
                $(".ui-select-option-search").click(function () {
                    $("#ParamPanel").addClass("open")
                    event.stopPropagation();//阻止冒泡
                })
                
                $("#ParamPanel").find(".restParam").click(function () {
                    var domId = $(this).prev("div").attr("id");
                    $("#" + domId + "-option").find("input[name='Multiple']").removeAttr("checked");
                    $("#" + domId + "-option").find("img[src*='checkbox_1.png']").trigger("click");
                    $("#" + domId).find('.ui-select-text').html("");
                    $("#" + domId).attr("data-value","");
                    $("#" + domId).attr("data-text", "");
                })

                $(document).click(function (event) {
                    if ($(event.target).parents(".ui-select-option").length==0 && $(event.target).parents("[id='ParamPanel']").length == 0) {
                        $("#ParamPanel").removeClass("open")
                        event.stopPropagation();
                    }
                });

            }
            var initWidget = [
                   { "name": "month_M", "data": top.monthDic, "Multiple": true, "isTree": false, "description": "筛选月份" },
                   { "name": "month_S", "data": top.monthDic, "Multiple": false, "isTree": false, "description": "筛选月份" },
                   { "name": "branch_no_M", "data": top.branch_arr, "Multiple": true, "isTree": false, "description": "筛选门店" },
                   { "name": "branch_no_S", "data": top.branch_arr, "Multiple": false, "isTree": false, "description": "筛选门店" },
                   { "name": "brand_M", "data": top.brand_arr, "Multiple": true, "isTree": false, "description": "筛选类别" },
                   { "name": "brand_S", "data": top.brand_arr, "Multiple": false, "isTree": false, "description": "筛选品牌" },
                   { "name": "cls_tree", "data": top.cls_tree, "Multiple": true, "isTree": true, "description": "筛选类别" },
                   { "name": "brand_tree", "data": top.brand_tree, "Multiple": false, "isTree": true, "description": "筛选品牌" },
                   { "name": "sale_man_tree", "data": top.sale_man_tree, "Multiple": false, "isTree": true, "description": "筛选人员" },
                   { "name": "supcust_tree", "data": top.supcust_tree, "Multiple": false, "isTree": true, "description": "筛选供应商" },
                   { "name": "vipflag_M", "data": top.vipDic, "Multiple": true, "isTree": false, "description": "筛选会员类型" }
            ]

            for (var i = 0; i < initWidget.length; i++) {
                if ($("#" + initWidget[i].name).length > 0) {
                    if (initWidget[i].isTree) {
                        $("#" + initWidget[i].name).ComboBoxTreeEx({
                            height: "200px",//高度
                            allowSearch: true,
                            description: initWidget[i].description,
                            data: initWidget[i].data
                        });
                        if ($("#" + initWidget[i].name + "-option").find("img[src*='checkbox_1.png']").length > 0) {
                            $("#" + initWidget[i].name + "-option").find("img[src*='checkbox_1.png']").trigger("click");
                        }
                    } else {
                        $("#" + initWidget[i].name).ComboBoxEX({
                            data: initWidget[i].data,//控件数据
                            id: "id",//实际值
                            text: "name",//显示值
                            title: "name",//鼠标提示
                            Multiple: initWidget[i].Multiple,//是否多选
                            height: "200px",
                            allowSearch: true,
                            description: initWidget[i].description
                        });
                    }
                }
            }
            if ($("#item_no").length > 0) {
                initItem("item_no", "");
                $("#item_no-option").find('.ui-select-option-search').find('input').bind("keypress", function (e) {
                    if (event.keyCode == "13") {
                        var value = $(this).val();
                        initItem($(this).parent("div").parent("div").attr("id").split("-")[0], value)
                    }
                })
            }
            if ($("#flowNo").length > 0) {
                initFlow("flowNo", "");
                $("#flowNo-option").find('.ui-select-option-search').find('input').bind("keypress", function (e) {
                    if (event.keyCode == "13") {
                        var value = $(this).val();
                        initFlow($(this).parent("div").parent("div").attr("id").split("-")[0], value)
                    }
                })
            }
            if ($("#vipInfo").length > 0) {
                initVip("vipInfo", "");
                $("#vipInfo-option").find('.ui-select-option-search').find('input').bind("keypress", function (e) {
                    if (event.keyCode == "13") {
                        var value = $(this).val();
                        initVip($(this).parent("div").parent("div").attr("id").split("-")[0], value)
                    }
                })
            }
        }
    } else {
        location.reload()
    }
})



Date.prototype.Format = function (fmt) { // author: meizz
    var o = {
        "M+": this.getMonth() + 1, // 月份
        "d+": this.getDate(), // 日
        "h+": this.getHours(), // 小时
        "m+": this.getMinutes(), // 分
        "s+": this.getSeconds(), // 秒
        "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
        "S": this.getMilliseconds() // 毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
var public_data = {
    Trim: function (str) {
        var result = "";
        var str=str.toString()
        if (str != null || str != "" || str != "null") {
            result = str.replace(/(^\s*)|(\s*$)/g, "");

        } else {
            result = str
        }
        return result;
    },
    Dic_init: function (tree_json, key_value) {
        var tree_data = [];
        //alert(tree_json);
        var keyWord = {
            "sql_str": "Dictionaries '" + key_value + "'",
            "col_name": "id~pId~name"
        }
        $.ajax({
            url: "/CloudSale/GetSql.ashx",
            data: $.extend(keyWord, tree_json),
            type: "post",
            cache: false,
            async: false,
            dataType: "json",
            success: function (data) {
                if (key_value == "brand" || key_value == "supcust") {
                    for (var i = 0; i < data.length; i++) {
                        tree_data.push((data[i].pId == "" || data[i].pId == null || data[i].pId == "null") ? ($.extend(data[i], { nocheck: true })) : (data[i]))
                    }
                }
                else {
                    tree_data = data;
                }
            }
        });
        return tree_data;
    },
    Dic_tree:function(data, isAll) {
        var L1 = [];
        var treeJson = {};
        var str = "";
        for (var i = 0; i < data.length; i++) {
            var json = {
                "id": public_data.Trim(data[i].id),
                "text": public_data.Trim(data[i].name),
                "value": public_data.Trim(data[i].id),
                "parentnodes": public_data.Trim(data[i].pId),
                "showcheck": true,
                "isexpand": false,
                "complete": true,
                "hasChildren": false,
                "ChildNodes": []
            }
            if (data[i].pId == "" || data[i].pId == null || data[i].pId == "null" || data[i].pId == 0) {
                json.showcheck = isAll;
                L1.push(json);
            } else {
                if (!isAvailable(treeJson[json.parentnodes])) {
                    treeJson[json.parentnodes] = [];
                }
                treeJson[json.parentnodes].push(json);
            }
        }
        for (var j = 0; j < L1.length; j++) {
            var pId = L1[j]["id"];
            if (isAvailable(treeJson[pId])) {
                str = "L1[" + j + "]"
                eval( str + '["hasChildren"]= true')
                str = str + '["ChildNodes"]'
                eval( str + "= treeJson[pId]")
                delete treeJson[pId];
                getTree(str)
            }
        }
        function getTree(str) {
            var nodeArr = eval(str)
            for (var j = 0; j < nodeArr.length; j++) {
                var pId = nodeArr[j]["id"];
                if (isAvailable(treeJson[pId])) {
                    eval(str + '[' + j + ']["hasChildren"]= true')
                    var strN = str + '[' + j + ']["ChildNodes"]'
                    eval(strN + "= treeJson[pId]")
                    delete treeJson[pId]
                    getTree(strN)
                }
            }
        }
        return L1;
    },
    //Dic_tree: function (data, all) {
    //    var treeCLSjson = []
    //    for (var i = 0; i < data.length; i++) {
    //        var json = {
    //            "id": public_data.Trim(data[i].id),
    //            "text": public_data.Trim(data[i].name),
    //            "value": public_data.Trim(data[i].id),
    //            "parentnodes": public_data.Trim(data[i].pId),
    //            "showcheck": true,
    //            "isexpand": false,
    //            "complete": true,
    //            "hasChildren": false,
    //            "ChildNodes": []
    //        }
    //        if (data[i].pId == "" || data[i].pId == null || data[i].pId == "null" || data[i].pId == 0) {
    //            json.showcheck = all;
    //            treeCLSjson.push(json)
    //        } else {
    //            for (var l_1 = 0; l_1 < treeCLSjson.length; l_1++) {
    //                if (treeCLSjson[l_1].id == data[i].pId) {
    //                    treeCLSjson[l_1].hasChildren = true;
    //                    treeCLSjson[l_1].ChildNodes.push(json)
    //                    break;
    //                }
    //                else if (data[i].pId.indexOf(treeCLSjson[l_1].id) == 0) {
    //                    for (var l_2 = 0; l_2 < treeCLSjson[l_1].ChildNodes.length; l_2++) {
    //                        if (treeCLSjson[l_1].ChildNodes[l_2].id == data[i].pId) {
    //                            treeCLSjson[l_1].ChildNodes[l_2].hasChildren = true;
    //                            treeCLSjson[l_1].ChildNodes[l_2].ChildNodes.push(json)
    //                            break;
    //                        } else if (data[i].pId.indexOf(treeCLSjson[l_1].ChildNodes[l_2].id) == 0) {
    //                            var arr = treeCLSjson[l_1].ChildNodes[l_2].ChildNodes;
    //                            for (var l_3 = 0; l_3 < treeCLSjson[l_1].ChildNodes[l_2].ChildNodes.length; l_3++) {
    //                                if (treeCLSjson[l_1].ChildNodes[l_2].ChildNodes[l_3].id == data[i].pId) {
    //                                    treeCLSjson[l_1].ChildNodes[l_2].ChildNodes[l_3].hasChildren = true;
    //                                    treeCLSjson[l_1].ChildNodes[l_2].ChildNodes[l_3].ChildNodes.push(json)
    //                                    break;
    //                                }
    //                                else if (data[i].pId.indexOf(treeCLSjson[l_1].ChildNodes[l_2].ChildNodes[l_3].id) == 0) {
    //                                    var arr = treeCLSjson[l_1].ChildNodes[l_2].ChildNodes[l_3].ChildNodes;
    //                                    for (var l_4 = 0; l_4 < treeCLSjson[l_1].ChildNodes[l_2].ChildNodes[l_3].ChildNodes.length; l_4++) {
    //                                        if (treeCLSjson[l_1].ChildNodes[l_2].ChildNodes[l_3].ChildNodes[l_4].id == data[i].pId) {
    //                                            treeCLSjson[l_1].ChildNodes[l_2].ChildNodes[l_3].ChildNodes[l_4].hasChildren = true;
    //                                            treeCLSjson[l_1].ChildNodes[l_2].ChildNodes[l_3].ChildNodes[l_4].ChildNodes.push(json)
    //                                            break;
    //                                        }
    //                                    }
    //                                }
    //                            }
    //                        }
    //                    }
    //                }
    //            }
    //        }
    //    }
    //    return treeCLSjson;
    //},
    
    //jqgrid 门店转义使用方式colModel的对应列添加formatter: public_data.Dic_branch方法 注：此处方法无需括号，自带(cellvalue, options, rowObject)3个参数
    Dic_branch: function (cellvalue, options, rowObject) {
        var Dic_arr = top.branch_arr;
        if (Dic_arr.length > 0 && cellvalue!=null) {
            for (var i = 0; i < Dic_arr.length; i++) {
                if (public_data.Trim(cellvalue) ==public_data.Trim(Dic_arr[i].id)) {
                    return public_data.Trim(Dic_arr[i].name);
                }
                if (i == Dic_arr.length - 1) {
                    return cellvalue==null?"":cellvalue;
                }
            }
        } else {
            return cellvalue==null?"":cellvalue;
        }
    },
   //pie表数据条数展示处理
    Dic_pie: function (data, x) {
        var data1 = {
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }

            },
            labelLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            }
        }
        if (data.length > 5 && data.length <= 35) {
            for (var i in data) {
                if (i > 5) {
                    if (i < x) {
                        if (i % 2 == 0) {
                            $.extend(data[i], data1)
                        }
                    } else {
                        $.extend(data[i], data1)
                    }
                }
            }
        }
        if (data.length > 35 && data.length < 1000) {
            for (var i in data) {
                if (i > 5) {
                    if (i < x) {
                        if (i % 3 != 0) {
                            $.extend(data[i], data1)
                        }
                    } else {
                        $.extend(data[i], data1)
                    }
                }
            }
        }
        return data;
    },
    //销售员转义
    Dic_sale_man: function (cellvalue, options, rowObject) {
        var Dic_arr = top.sale_man_arr;
        if (Dic_arr.length > 0 && cellvalue!=null) {
            for (var i = 0; i < Dic_arr.length; i++) {
                if (public_data.Trim(cellvalue) ==public_data.Trim(Dic_arr[i].id)) {
                    return public_data.Trim(Dic_arr[i].name);
                }
                if (i == Dic_arr.length - 1) {
                    return cellvalue==null?"":cellvalue;
                }
            }
        } else {
            return cellvalue==null?"":cellvalue;
        }
    },
    //类别转义
    Dic_cls_all: function (cellvalue, options, rowObject) {
        var Dic_arr = top.cls_all_arr;
        if (Dic_arr.length > 0 && cellvalue!=null) {
            for (var i = 0; i < Dic_arr.length; i++) {
                if (public_data.Trim(cellvalue) ==public_data.Trim(Dic_arr[i].id)) {
                    return public_data.Trim(Dic_arr[i].name);
                }
                if (i == Dic_arr.length - 1) {
                    return cellvalue==null?"":cellvalue;
                }
            }
        } else {
            return cellvalue==null?"":cellvalue;
        }
    },
    //供应商转义
    Dic_supcust: function (cellvalue, options, rowObject) {
        var Dic_arr = top.supcust_arr;
        if (Dic_arr.length > 0 && cellvalue!=null) {
            for (var i = 0; i < Dic_arr.length; i++) {
                if (public_data.Trim(cellvalue) ==public_data.Trim(Dic_arr[i].id)) {
                    return public_data.Trim(Dic_arr[i].name);
                }
                if (i == Dic_arr.length - 1) {
                    return cellvalue==null?"":cellvalue;
                }
            }
        } else {
            return cellvalue==null?"":cellvalue;
        }
    },

    //品牌转义
    Dic_brand: function (cellvalue, options, rowObject) {
        var Dic_arr = top.brand_arr;
        if (Dic_arr.length > 0 && cellvalue!=null) {
            for (var i = 0; i < Dic_arr.length; i++) {
                if (public_data.Trim(cellvalue) ==public_data.Trim(Dic_arr[i].id)) {
                    return public_data.Trim(Dic_arr[i].name);
                }
                if (i == Dic_arr.length - 1) {
                    return cellvalue==null?"":cellvalue;
                }
            }
        } else {
            return cellvalue==null?"":cellvalue;
        }
    },

    //数据字典传入id返回名称，key_val:要处理都值，id对应都处理类型：branch,cls_all,brand,supcust，sale_man等
    Dic_GetName: function (key_val, id) {
        var arr = eval("top." + id + "_arr");
        for (var i = 0; i < arr.length; i++) {
            if (public_data.Trim(arr[i].id) == public_data.Trim(key_val)) {
                return public_data.Trim(arr[i].name)
            }
            if (i == arr.length - 1) {
               return public_data.Trim(key_val)
            }
        }
    },
    //数据字典传入name返回编号，key_val:要处理都值，id对应都处理类型：branch，sale_man等
    Dic_GetValue: function (key_val, id) {
        var arr = eval("top." + id + "_arr");
        for (var i = 0; i < arr.length; i++) {
            if (public_data.Trim(arr[i].name) == public_data.Trim(key_val)) {
                return public_data.Trim(arr[i].id)
            }
            if (i == arr.length - 1) {
                return public_data.Trim(key_val)
            }
        }
    },
    //name转vlaue
    Name: function (name, id) {
        var arr = eval("top." + id + "_arr");
        if (arr.length > 0) {
            for (var i = 0; i < arr.length; i++) {
                if (name == arr[i].name) {
                    return arr[i].id;
                }
                if (i == arr.length - 1) {
                    return name;
                }
            }
        } else {
            return name;
        }
    },

    ///返回echars需要都值：data：传入的json数组，key_id ,json中需要返回的列名称，dic_id：如若需要利用数据字典转换则传入对应值如：branch，sale_man等，无需转换传入空""
    getEchartsData: function (data, key_id, dic_id) {
        var arr = [];
        for (var i = 0; i < data.length; i++) {
            if (dic_id.length == 0) {
                arr.push(eval("data[" + i + "]." + key_id));
            }
            else {
                arr.push(eval("public_data.Dic_GetName(data[" + i + "]." + key_id + ",'" + dic_id + "')"));
            }
        }
        return arr;
    },
    Get_Echars: function (sql_str, col_name) {
        var date = [];
        $.ajax({
            url: "/CloudSale/GetSql.ashx",
            data: $.extend({ "sql_str": sql_str, "col_name": col_name }, top.session),
            type: "post",
            cache: false,
            async: false,
            dataType: "json",
            success: function (data) {
                date = data;
            },
            error: function (msg) {
                alert("系统发生错误");
            }
        });
        return date;
    }
}
var now = new Date(); //当前日期 
var nowDayOfWeek = now.getDay(); //今天本周的第几天 
var nowDay = now.getDate(); //当前日 
var nowMonth = now.getMonth(); //当前月 
var nowYear = now.getYear(); //当前年 
nowYear += (nowYear < 2000) ? 1900 : 0; //
var lastYear = now.getYear()-1;
var lastMonth = now.getMonth()-1;
lastYear += (lastYear < 2000) ? 1900 : 0; //
var dataInfo = {
    //格式化日期：yyyy-MM-dd 
    formatDate: function (date) {
        var myyear = date.getFullYear();
        var mymonth = date.getMonth() + 1;
        var myweekday = date.getDate();

        if (mymonth < 10) {
            mymonth = "0" + mymonth;
        }
        if (myweekday < 10) {
            myweekday = "0" + myweekday;
        }
        return (myyear + "-" + mymonth + "-" + myweekday);
    },

    DateAdd: function (interval, number, date) {
        var date = new Date(date.replace(/-/g, "/"));
        switch(interval.toLowerCase()){
            case "yy": return new Date(date.setFullYear(date.getFullYear() + number)).Format("yyyy-MM-dd");
            case "mm": return new Date(date.setMonth(date.getMonth() + number)).Format("yyyy-MM-dd");
            case "dd": return new Date(date.setDate(date.getDate() + number)).Format("yyyy-MM-dd");
            case "wk": return new Date(date.setDate(date.getDate() + 7 * number)).Format("yyyy-MM-dd");
            case "hh": return new Date(date.setHours(date.getHours() + number)).Format("yyyy-MM-dd hh:mm:ss");
            case "mi": return new Date(date.setMinutes(date.getMinutes() + number)).Format("yyyy-MM-dd hh:mm:ss");
            case "ss": return new Date(date.setSeconds(date.getSeconds() + number)).Format("yyyy-MM-dd hh:mm:ss");
            case "l": return new Date(date.setMilliseconds(date.getMilliseconds() + number)).Format("yyyy-MM-dd hh:mm:ss");
        }
    },
    DateDiff: function (interval, date1, date2) {
        var date1 = new Date(date1.replace(/-/g, "/"));
        var date2 = new Date(date2.replace(/-/g, "/"));
        var long = date2.getTime() - date1.getTime(); //相差毫秒
        switch (interval.toLowerCase()) {
            case "yy": return parseInt(date2.getFullYear() - date1.getFullYear());
            case "mm": return parseInt((date2.getFullYear() - date1.getFullYear()) * 12 + (date2.getMonth() - date1.getMonth()));
            case "dd": return parseInt(long/1000/60 / 60 / 24);
            case "wk": return parseInt(long/1000/60 / 60 / 24 / 7);
            case "hh": return parseInt(long/1000/60 / 60);
            case "mi": return parseInt(long/1000/60);
            case "ss": return parseInt(long/1000);
            case "l": return parseInt(long);
        }
    },
    //获得某月的天数 
    getMonthDays: function (myMonth) {
        var monthStartDate = new Date(nowYear, myMonth, 1);
        var monthEndDate = new Date(nowYear, myMonth + 1, 1);
        var days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24);
        return days;
    },
    //获得本季度的开始月份 
    getQuarterStartMonth: function () {
        var quarterStartMonth = 0;
        if (nowMonth < 3) {
            quarterStartMonth = 0;
        }
        if (2 < nowMonth && nowMonth < 6) {
            quarterStartMonth = 3;
        }
        if (5 < nowMonth && nowMonth < 9) {
            quarterStartMonth = 6;
        }
        if (nowMonth > 8) {
            quarterStartMonth = 9;
        }
        return quarterStartMonth;
    },
    //获得昨天的结束日期 
    getYesterday: function () {
        //var weekEndDate = new Date(nowYear, nowMonth, nowDay + (6 - nowDayOfWeek)); //8
        var Yesterday = new Date(nowYear, nowMonth, nowDay - 1);
        return dataInfo.formatDate(Yesterday);
    },
    getTodayStartDate: function () {
        //var weekEndDate = new Date(nowYear, nowMonth, nowDay + (6 - nowDayOfWeek)); //8
        var Yesterday = new Date(nowYear, nowMonth, nowDay );
        return dataInfo.formatDate(Yesterday);
    },
    getTodayEndDate: function () {
        //var weekEndDate = new Date(nowYear, nowMonth, nowDay + (6 - nowDayOfWeek)); //8
        var Yesterday = new Date(nowYear, nowMonth, nowDay );
        return dataInfo.formatDate(Yesterday);
    },
    getYesterdayStartDate: function () {
        //var weekEndDate = new Date(nowYear, nowMonth, nowDay + (6 - nowDayOfWeek)); //8
        var Yesterday = new Date(nowYear, nowMonth, nowDay - 1);
        return dataInfo.formatDate(Yesterday);
    },
    getYesterdayEndDate: function () {
        //var weekEndDate = new Date(nowYear, nowMonth, nowDay + (6 - nowDayOfWeek)); //8
        var Yesterday = new Date(nowYear, nowMonth, nowDay - 1);
        return dataInfo.formatDate(Yesterday);
    },
    //获得本周的开始日期 
    getWeekStartDate: function () {
        var weekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek);
        return dataInfo.formatDate(weekStartDate);
    },

    //获得本周的结束日期 
    getWeekEndDate: function () {
        //var weekEndDate = new Date(nowYear, nowMonth, nowDay + (6 - nowDayOfWeek)); //8 //
        return dataInfo.formatDate(now);
    },
    //获得上周开始日期 
    getLastWeekStartDate: function () {
        var lastweekStartDate = new Date(nowYear, nowMonth, nowDay - (nowDayOfWeek + 7));
        return dataInfo.formatDate(lastweekStartDate);
    },
    //获得上周结束时间
    getLastWeekEndDate: function () {
        var lastweekEndDate = new Date(nowYear, nowMonth, nowDay - (nowDayOfWeek + 1));
        return dataInfo.formatDate(lastweekEndDate);
    },
    //获得本月的开始日期 
    getMonthStartDate: function () {
        var monthStartDate = new Date(nowYear, nowMonth, 1);
        return dataInfo.formatDate(monthStartDate);
    },

    //获得本月的结束日期 
    getMonthEndDate: function () {
        // var monthEndDate = new Date(nowYear, nowMonth, dataInfo.getMonthDays(nowMonth));
        return dataInfo.formatDate(now);
    },

    //获得上月开始时间
    getLastMonthStartDate: function () {
        var lastMonthStartDate = new Date(nowYear, nowMonth - 1, 1);
        return dataInfo.formatDate(lastMonthStartDate);
    },

    //获得上月结束时间
    getLastMonthEndDate: function () {
        var lastMonthEndDate = new Date(nowYear, nowMonth - 1, dataInfo.getMonthDays(lastMonth));
        return dataInfo.formatDate(lastMonthEndDate);
    },
	    //获得当前30天前开始时间
    getMonth_30DayStartDate: function () {
        var Month_30DayStartDate = new Date(nowYear, nowMonth, nowDay-30);
        return dataInfo.formatDate(Month_30DayStartDate);
    },

    //获得当前30天结束时间
    getMonth_30DayEndDate: function () {
        return dataInfo.formatDate(now);
    },
    //获得本季度的开始日期 
    getQuarterStartDate: function () {
        var quarterStartDate = new Date(nowYear, dataInfo.getQuarterStartMonth(), 1);
        return dataInfo.formatDate(quarterStartDate);
    },

    //或的本季度的结束日期 
    getQuarterEndDate: function () {
        //var quarterEndMonth = dataInfo.getQuarterStartMonth() + 2;
        // var quarterStartDate = new Date(nowYear, quarterEndMonth, dataInfo.getMonthDays(quarterEndMonth));
        return dataInfo.formatDate(now);
    },
    //获得本季度的开始日期 
    getlastQuarterStartDate: function () {
        var quarterStartDate = new Date(nowYear, dataInfo.getQuarterStartMonth() - 3, 1);
        return dataInfo.formatDate(quarterStartDate);
    },

    //或的本季度的结束日期 
    getlastQuarterEndDate: function () {
        var quarterEndMonth = dataInfo.getQuarterStartMonth() - 1;
        var quarterEndDate = new Date(nowYear, quarterEndMonth, dataInfo.getMonthDays(quarterEndMonth));
        return dataInfo.formatDate(quarterEndDate);
    },
    //获得今年开始时间
    getYearStartDate: function () {
        var YearStartDate = new Date(nowYear, 0, 1);
        return dataInfo.formatDate(YearStartDate);
    },
    getYearEndDate: function () {
        // var YearStartDate = new Date(nowYear, 0, 1);
        return dataInfo.formatDate(now);
    },
    //获得去年开始时间
    getlastYearStartDate: function () {
        var lastYearStartDate = new Date(lastYear, 0, 1);
        return dataInfo.formatDate(lastYearStartDate);
    },
    getlastYearEndDate: function () {
        var lastYearEndDate = new Date(lastYear, 11, dataInfo.getMonthDays(11));
        return dataInfo.formatDate(lastYearEndDate);
    },
    //获取时间判断
    dateDefault: function (val) {
        if (val != '') {
            $("#StartTime").val(eval("dataInfo.get" + val + "StartDate()"));
            $("#EndTime").val(eval("dataInfo.get" + val + "EndDate()"));
        }
        $("#StartTime").attr('value', $("#StartTime").val());
        $("#EndTime").attr('value', $("#EndTime").val());
        $("#cxzs").attr("value", $("#StartTime").val() + "至" + $("#EndTime").val());
    }
}
var setting = {
    check: {
        enable: true,
        chkboxType: { "Y": "", "N": "" }
    },
    view: {
        dblClickExpand: false
    },
    data: {
        simpleData: {
            enable: true
        }
    },
    callback: {
        onCheck: public_data.onCheck
    }
};
Date.prototype.dateAdd = function (interval, number) {
    var d = this;
    var k = { 'y': 'FullYear', 'q': 'Month', 'm': 'Month', 'w': 'Date', 'd': 'Date', 'h': 'Hours', 'n': 'Minutes', 's': 'Seconds', 'ms': 'MilliSeconds' };
    var n = { 'q': 3, 'w': 7 };
    eval('d.set' + k[interval] + '(d.get' + k[interval] + '()+' + ((n[interval] || 1) * number) + ')');
    return d;
}
var stringToDate=function (fDate) {
    var fullDate = fDate.split("-");
    return new Date(fullDate[0], fullDate[1] - 1, fullDate[2], 0, 0, 0);
}
//表的格式化
var jqFormatter = {
    RMB0: { formatter: "currency", formatoptions: { "prefix": "¥", "decimalPlaces":0} },
    RMB2: { formatter: "currency", formatoptions: { "prefix": "¥", "decimalPlaces":2} },
    Num0: { formatter: "number", formatoptions: { thousandsSeparator: "","decimalPlaces":0} },
    Num2: { formatter: "number", formatoptions: { "decimalPlaces": 2 } },
    //RMB0: function (cellvalue, options, rowObject) {
    //    if (cellvalue == undefined || Math.round(cellvalue) == 0) {
    //        return "-"
    //    } else {
    //        return "¥" + cellvalue.toFixed(0)
    //    }
    //},
    //RMB2: function (cellvalue, options, rowObject) {
    //    if (cellvalue == undefined || Math.round(cellvalue) == 0) {
    //        return "-"
    //    } else {
    //        return "¥"+cellvalue.toFixed(2)
    //    }
    //},
    //Num0: function (cellvalue, options, rowObject) {
    //    if (cellvalue == undefined || Math.round(cellvalue)==0) {
    //        return "-"
    //    } else {
    //        return cellvalue.toFixed(0)
    //    }
    //},
    //Num2: function (cellvalue, options, rowObject) {
    //    if (cellvalue == undefined || Math.round(cellvalue) == 0) {
    //        return "-"
    //    } else {
    //        return cellvalue.toFixed(2)
    //    }
    //},
    Percent: function (cellvalue, options, rowObject) {
        if (cellvalue == undefined || cellvalue == 0) {
            return "-"
        } else{
            return Math.round(cellvalue * 10000) / 100 + '%'
        }
    },
    saleFormat: function (cellvalue, options, rowObject) {
        if (cellvalue < 0) {
            return ('<span class="badge badge-danger">¥' +fixNum(cellvalue,2) + '</span>')
        } else {
            return ('<span class="badge badge-info">¥' + fixNum(cellvalue, 2) + '</span>')
        }
    }
}

var GetQueryString= function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}
var isAvailable=function (param) {
    return (undefined != param && null != param && "" != param && "null" != param && "undefined" != param);
}
var guid=function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
var monthDic = [
    { id: "01", name: "1月" },
    { id: "02", name: "2月" },
    { id: "03", name: "3月" },
    { id: "04", name: "4月" },
    { id: "05", name: "5月" },
    { id: "06", name: "6月" },
    { id: "07", name: "7月" },
    { id: "08", name: "8月" },
    { id: "09", name: "9月" },
    { id: "10", name: "10月" },
    { id: "11", name: "11月" },
    { id: "12", name: "12月" },
]
var vipDic = [
    { id: "A", name: "整体汇总" },
    { id: "0", name: "孕早期" },
    { id: "1", name: "孕中期" },
    { id: "2", name: "孕晚期" },
    { id: "3", name: "0至6个月" },
    { id: "4", name: "6至12个月" },
    { id: "5", name: "12至24个月" },
    { id: "6", name: "24至36个月" },
    { id: "7", name: "36至72个月" },
    { id: "8", name: "其他" }
];
var dateDic = [
    { id: "getToday", name: "今日" },
    { id: "getYesterday", name: "昨日" },
    { id: "getWeek", name: "本周" },
    { id: "getLastWeek", name: "上周" },
    { id: "getMonth", name: "本月" },
    { id: "getLastMonth", name: "上月" },
    { id: "getMonth_30Day", name: "近30日" },
    { id: "getQuarter", name: "本季度" },
    { id: "getlastQuarter", name: "上季度" },
    { id: "getYear", name: "本年度" },
    { id: "getlastYear", name: "上年度" }
];

var vipFlagDic = function (vipKey) {
    var vipFlag = '';
    switch (vipKey) {
        case "A": vipFlag = "【整体汇总】"; break;
        case "0": vipFlag = "【孕早期】"; break;
        case "1": vipFlag = "【孕中期】"; break;
        case "2": vipFlag = "【孕晚期】"; break;
        case "3": vipFlag = "【0至6个月】"; break;
        case "4": vipFlag = "【6至12个月】"; break;
        case "5": vipFlag = "【12至24个月】"; break;
        case "6": vipFlag = "【24至36个月】"; break;
        case "7": vipFlag = "【36至72个月】"; break;
        case "8": vipFlag = "【其他】"; break;
    }
    return vipFlag
}


var condition = {
    backColor_ABC: function (id, keyValue, A, B, C) {
        $("#" + id).find(".ui-widget-content.jqgrow.ui-row-ltr").find("[aria-describedby*='" + keyValue + "']").each(function () {
            var value = ($(this).text().replace(/%/g, '').replace(/¥/g, '').replace(/,/g, ''))
            if (value > A) {
                $(this).html('<span class="badge badge-info">' + $(this).text() + '</span>')
            } else if (value > B) {
                $(this).html('<span class="badge badge-success">' + $(this).text() + '</span>')
            } else if (value > C) {
                $(this).html('<span class="badge badge-warning">' + $(this).text() + '</span>')
            } else {
                $(this).html('<span class="badge badge-danger">' + $(this).text() + '</span>')
            }
        })
    },
    backColor_CBA: function (id, keyValue, A, B, C) {
        $("#" + id).find(".ui-widget-content.jqgrow.ui-row-ltr").find("[aria-describedby*='" + keyValue + "']").each(function () {
            var value = ($(this).text().replace(/%/g, '').replace(/¥/g, '').replace(/,/g, ''))
            if (value < A) {
                $(this).html('<span class="badge badge-info">' + $(this).text() + '</span>')
            } else if (value < B) {
                $(this).html('<span class="badge badge-success">' + $(this).text() + '</span>')
            } else if (value < C) {
                $(this).html('<span class="badge badge-warning">' + $(this).text() + '</span>')
            } else {
                $(this).html('<span class="badge badge-danger">' + $(this).text() + '</span>')
            }
        })
    },
    fontColor_ABC: function (id, keyValue, A, B, C) {
        $("#" + id).find(".ui-widget-content.jqgrow.ui-row-ltr").find("[aria-describedby*='" + keyValue + "']").each(function () {
            var value = ($(this).text().replace(/%/g, '').replace(/¥/g, '').replace(/,/g, ''))
            if (value > A) {
                $(this).html('<span class="font-bold text-info">' + $(this).text() + '</span>')
            } else if (value > B) {
                $(this).html('<span class="font-bold text-success">' + $(this).text() + '</span>')
            } else if (value > C) {
                $(this).html('<span class="font-bold text-warning">' + $(this).text() + '</span>')
            } else {
                $(this).html('<span class="font-bold text-danger">' + $(this).text() + '</span>')
            }
        })
    },
    fontColor_CBA: function (id, keyValue, A, B, C) {
        $("#" + id).find(".ui-widget-content.jqgrow.ui-row-ltr").find("[aria-describedby*='" + keyValue + "']").each(function () {
            var value = ($(this).text().replace(/%/g, '').replace(/¥/g, '').replace(/,/g, ''))
            if (value < A) {
                $(this).html('<span class="font-bold text-info">' + $(this).text() + '</span>')
            } else if (value < B) {
                $(this).html('<span class="font-bold text-success">' + $(this).text() + '</span>')
            } else if (value < C) {
                $(this).html('<span class="font-bold text-warning">' + $(this).text() + '</span>')
            } else {
                $(this).html('<span class="font-bold text-danger">' + $(this).text() + '</span>')
            }
        })
    },
    arrow_init: function (id, keyValue) {
        $("#" + id).find(".ui-widget-content.jqgrow.ui-row-ltr").find("[aria-describedby*='" + keyValue + "']").each(function () {
            var value = ($(this).text().replace(/%/g, '').replace(/¥/g, '').replace(/,/g, ''))
            if (value >= 0) {
                $(this).html('<div class="text-info">' + parseInt(value) + '%<i class="fa fa-level-up"></i></div>')
            }
            if (value < 0) {
                $(this).html('<div class="text-danger">' + parseInt(value) + '%<i class="fa fa-level-down"></i></div>')
            }
        })

    }
}


$.fn.jqGridEx = function (options) {
    oldRow = 0;
    oldCol = 0;//记录编辑的单元格坐标自动保存用
    oldVal = 0;
    var $jqGrid = $(this);
    if (!$jqGrid.attr('id')) {
        return false;
    }
    var _this = $(this);
    var sumCol = options.sumColArr;
    var sumName = options.sumName;
    var avgCol = options.avgColArr;
    var defaults = {
        afterEditCell: function (rowid, celname, value, iRow, iCol) {
            oldVal = value
            oldRow = iRow
            oldCol = iCol
        },
        gridComplete: function () {
            var sumColArr = {};
            if (options.footerrow == true) {
            eval("sumColArr." + sumName.split("_")[0] + "='" + sumName.split("_")[1] + "'");//合计列处理
            for (var i = 0; i < sumCol.length; i++) {
                eval("sumColArr." + sumCol[i] + "=" + _this.getCol(sumCol[i], false, "sum"))
            }          
            for (var i = 0; i < avgCol.length; i++) {
                eval("sumColArr." + avgCol[i] + "=" + _this.getCol(avgCol[i], false, "avg"))
            }
            }
            Complete($jqGrid.attr('id'), sumColArr);
            _this.find("[aria-describedby*='card_id']").click(function () {
                if ($(this).text().length > 1) {
                    $.colorbox({ overlayClose: true, href: "/CloudSale/Report_PC/web_page/Aspx/members_single_portrait.aspx?vip=" + $(this).text(), closeButton: false, width: '95%', height: '95%', iframe: true })
                }
            })
            _this.find("[aria-describedby*='card_id']").css("cursor", "pointer");
            _this.find("[aria-describedby*='卡号']").click(function () {
                if ($(this).text().length > 1) {
                    $.colorbox({ overlayClose: true, href: "/CloudSale/Report_PC/web_page/Aspx/members_single_portrait.aspx?vip=" + $(this).text(), closeButton: false, width: '95%', height: '95%', iframe: true })
                }
            })
            _this.find("[aria-describedby*='卡号']").css("cursor", "pointer");
            _this.find("[aria-describedby*='条码']").click(function () {
                var title = "【" + $(this).parent("tr").find("[aria-describedby*='商品名称']").text() + "（条码：" + $(this).parent("tr").find("[aria-describedby*='条码']").text() + "）】各门店30日销量及库存分布"
                $.colorbox({ overlayClose: true, href: "/CloudSale/Report_PC/web_page/Aspx_XZ/commonCharts.aspx?title=" + encodeURIComponent(encodeURIComponent(title))+"&item_no=" + $(this).parent("tr").find("[aria-describedby*='item_no']").text(), closeButton: false, width: '1200px', height: '450px', iframe: true })
            })
            _this.find("[aria-describedby*='条码']").css("cursor", "pointer");
            _this.find("[aria-describedby*='货号']").click(function () {
                var title = "【" + $(this).parent("tr").find("[aria-describedby*='商品名称']").text() + "（条码：" + $(this).parent("tr").find("[aria-describedby*='条码']").text() + "）】各门店30日销量及库存分布"
                $.colorbox({ overlayClose: true, href: "/CloudSale/Report_PC/web_page/Aspx_XZ/commonCharts.aspx?title=" + encodeURIComponent(encodeURIComponent(title)) + "&item_no=" + $(this).parent("tr").find("[aria-describedby*='item_no']").text(), closeButton: false, width: '1200px', height: '450px', iframe: true })
            })
            _this.find("[aria-describedby*='货号']").css("cursor", "pointer");
            _this.find("[aria-describedby*='商品名称']").click(function () {
                var title = "【" + $(this).parent("tr").find("[aria-describedby*='商品名称']").text() + "（条码：" + $(this).parent("tr").find("[aria-describedby*='条码']").text() + "）】各门店30日销量及库存分布"
                $.colorbox({ overlayClose: true, href: "/CloudSale/Report_PC/web_page/Aspx_XZ/commonCharts.aspx?title=" + encodeURIComponent(encodeURIComponent(title)) + "&item_no=" + $(this).parent("tr").find("[aria-describedby*='item_no']").text(), closeButton: false, width: '1200px', height: '450px', iframe: true })
            })
            _this.find("[aria-describedby*='商品名称']").css("cursor","pointer");
            $("#export").unbind().click(function () {
                var gridID = $(this).parent("div").parent("div").find("h5").attr("data-gridID");
                var fileName =$(this).parent("div").parent("div").find("h5").text();
                gridID = (gridID == undefined ? "gridPanel" : gridID)
                dialogOpen({
                    id: "ExcelIExportDialog",
                    title: '导出销售明细查询结果',
                    url: '/Utility/ExcelExportForm?gridId=' + gridID + '&filename=' + fileName,
                    width: "501px",
                    height: "380px",
                    callBack: function (iframeId) {
                        top.frames[iframeId].AcceptClick();
                    }, btn: ['导出Excel', '关闭']
                });
            })
            $jqGrid.find("[title='0.00']").html("-")
            $jqGrid.find("[title='0']").html("-")
        }
    };
    var option = $.extend(options, defaults);
    delete option.sumColArr;
    delete option.sumName;
    delete option.avgColArr;
    $jqGrid.jqGrid(option);
    //$jqGrid.find("[title='0.00']").html("-")
    //$jqGrid.find("[title='0']").html("-")
    //$jqGrid.find(".ui-row-ltr").find("td").each(function () {
    //    if ($(this).text() == 0) {
    //        $(this).html("-")
    //    }
    //})
}

var saveGridSell = function (gridID) {
    if (oldRow * oldCol != 0) {
        $("#" + gridID).jqGrid("saveCell", oldRow, oldCol)
        oldRow = 0
        oldCol = 0
    }
}

var Complete = function (gridID, sumColArr) {
    var _this = $("#" + gridID);
    _this.footerData("set", sumColArr);
}

var getNewData = function (keyWord) {
    var newArr = [];
    $.ajax({
        url: "/CloudSale/GetSql.ashx",
        data: $.extend(keyWord, top.session),
        type: "post",
        cache: false,
        async: false,
        dataType: "json",
        success: function (data) {
            newArr = data;
        }
    });
    return newArr
}
var getNewDataBase = function (keyWord) {
    var newArr = [];
    $.ajax({
        url: "/CloudSale/GetSqldb.ashx",
        data:keyWord,
        type: "post",
        cache: false,
        async: false,
        dataType: "json",
        success: function (data) {
            newArr = data;
        }
    });
    return newArr
}
var getAccessToken = function (appid) {
    var result="";
    $.ajax({
        url: "/CloudSale/get_token_fwh.ashx?appid=" + appid,
        type: "post",
        cache: false,
        async: false,
        dataType: "text",
        success: function (data) {
            result = data;
        }
    });
    return result
}
var myloadingOpen=function() {
    $('body').loading({
        loadingWidth: 120,
        title: '',
        name: 'CloudSaleLoading',
        discription: '计算中，请稍后！',
        direction: 'column',
        type: 'origin',
        originDivWidth: 40,
        originDivHeight: 40,
        originWidth: 6,
        originHeight: 6,
        smallLoading: false,
        loadingMaskBg: 'rgba(0,0,0,0.2)'
    });
}
var myloadingClose = function () {
    removeLoading('CloudSaleLoading');
}

var useDays=function (dayNum) {
    if (dayNum > 90) {
        return "badge-danger"
    } else if (dayNum > 60) {
        return "badge-warning"
    } else if (dayNum > 60) {
        return "badge-success"
    } else if (dayNum > 0) {
        return "badge-info"
    } else {
        return "badge-danger"
    }
}
var classABC = function (Num,A,B,C) {
    if (Num > A) {
        return "info"
    } else if (Num > B) {
        return "success"
    } else if (Num > C) {
        return "warning"
    } else {
        return "danger"
    }
}
var classCBA = function (Num, A, B, C) {
    if (Num < A) {
        return "info"
    } else if (Num < B) {
        return "success"
    } else if (Num < C) {
        return "warning"
    } else {
        return "danger"
    }
}
var Merger = function (gridName, CellName, parentCell) {
    //得到显示到界面的id集合
    var mya = $("#" + gridName + "").getDataIDs();
    var parentArr = [];
    if (isAvailable(parentCell)) {
        parentArr = parentCell.split("~")
    }
    //当前显示多少条
    var length = mya.length;
    for (var i = 0; i < length; i++) {
        //从上到下获取一条信息
        var before = $("#" + gridName + "").jqGrid('getRowData', mya[i]);
        //定义合并行数
        var rowSpanTaxCount = 1;
        for (j = i + 1; j <= length; j++) {
            //和上边的信息对比 如果值一样就合并行数+1 然后设置rowspan 让当前单元格隐藏

            var end = $("#" + gridName + "").jqGrid('getRowData', mya[j]);

            if (before[CellName] == end[CellName] && checkParent(before, end, parentArr)) {
                rowSpanTaxCount++;
                $("#" + gridName + "").setCell(mya[j], CellName, '', { display: 'none' });
            } else {
                rowSpanTaxCount = 1;
                break;
            }
            $("#" + CellName + "" + mya[i] + "").attr("rowspan", rowSpanTaxCount);
        }
    }
    function checkParent(beforeJson, endJson, parArr) {
        var checkResult = true;
        for (var i = 0; i < parArr.length; i++) {
            if (before[parArr[i]] != end[parArr[i]]) {
                checkResult = false;
                break;
            }
        }
        return checkResult;
    }
}
$.fn.ComboBoxEX = function (options) {
    //options参数：description,height,width,allowSearch,url,param,data
    var $select = $(this);
    if (!$select.attr('id')) {
        return false;
    }
    if (options) {
        if ($select.find('.ui-select-text').length == 0) {
            var $select_html = "";
            $select_html += "<div class=\"ui-select-text\" style='color:#999;overflow:hidden;padding-right:16px'>" + options.description + "</div>";
            $select_html += "<div class=\"ui-select-option\">";
            $select_html += "<div class=\"ui-select-option-content\" style=\"max-height: " + options.height + "\">" + $select.html() + "</div>";
            if (options.allowSearch) {
                $select_html += "<div class=\"ui-select-option-search\"><input type=\"text\" class=\"form-control\" placeholder=\"搜索关键字\" /><span class=\"input-query\" title=\"Search\"><i class=\"fa fa-search\"></i></span></div>";
            }
            $select_html += "</div>";
            $select.html('');
            $select.append($select_html);
        }
    }
    var $option_html = $($("<p>").append($select.find('.ui-select-option').clone()).html());
    $option_html.attr('id', $select.attr('id') + '-option');
    $select.find('.ui-select-option').remove();
    if ($option_html.length > 0) {
        $('body').find('#' + $select.attr('id') + '-option').remove();
    }
    $('body').prepend($option_html);
    var $option = $("#" + $select.attr('id') + "-option");
    if (options.url != undefined) {
        $option.find('.ui-select-option-content').html('');
        $.ajax({
            url: options.url,
            data: options.param,
            type: "post",
            dataType: "json",
            async: false,
            success: function (data) {
                options.data = data;
                var json = data;
                loadComboBoxView(json);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                dialogMsg(errorThrown, -1);
            }
        });
    }
    else if (options.data != undefined) {
        var json = options.data;
        loadComboBoxView(json);
    }
    else {
        $option.find('li').css('padding', "0 5px");
        $option.find('li').click(function (e) {
            var data_text = $(this).text();
            var data_value = $(this).attr('data-value');
            $select.attr("data-value", data_value).attr("data-text", data_text);
            $select.find('.ui-select-text').html(data_text).css('color', '#000');
            $option.slideUp(150);
            $select.trigger("change");
            e.stopPropagation();
        }).hover(function (e) {
            if (!$(this).hasClass('liactive')) {
                $(this).toggleClass('on');
            }
            e.stopPropagation();
        });
    }
    function loadComboBoxView(json, searchValue, m) {
        if (json.length > 0) {
            var $_html = $('<ul></ul>');
            
            if (options.description) {
                $_html.append('<li data-value="">' + options.description + '</li>');
            }
            $.each(json, function (i) {
                var row = json[i];
                var title = row[options.title];
                if (title == undefined) {
                    title = "";
                }
                if (searchValue != undefined) {
                    if (row[m.text].indexOf(searchValue) != -1) {
                        $_html.append('<li data-value="' + row[options.id] + '" title="' + title + '">' + (options.Multiple == true ? '<input style="vertical-align:text-top;margin:2px;" type="checkbox"  value="' + row[options.id] + '" />' : "") + row[options.text] + '</li>');
                    }
                }
                else {
                    $_html.append('<li data-value="' + row[options.id] + '" title="' + title + '">' + (options.Multiple == true ? '<input style="vertical-align:text-top;margin:2px;" name="Multiple" type="checkbox"  value="' + row[options.id] + '" />' : "") + row[options.text] + '</li>');
                }
            });
            $option.find('.ui-select-option-content').html($_html);
            $option.find('li').css('padding', "0 5px");
            $option.find('li').click(function (e) {
                var et = e.target || e.srcElement;
                if (options.Multiple == true) {
                    var data_text = "";
                    var data_value = "";
                    if (et.tagName != "INPUT") {
                        if ($(this).find("input").is(":checked") == false) {
                            $(this).find("input").prop("checked", "checked");
                        } else {
                            $(this).find("input").prop("checked", false);
                        }
                    }
                    var i=0
                    $(this).parent().children("li").find("input").each(function () {
                        //alert($(this).val())
                        if ($(this).is(":checked") == true) {
                            if (i == 0) {
                                data_text = $(this).parent("li").text();
                                data_value = $(this).val()
                            } else {
                                data_text = data_text + "," + $(this).parent("li").text();
                                data_value = data_value + "'',''" + $(this).val();
                            }
                            i++
                        }
                        
                    })
                    $select.attr("data-value", data_value).attr("data-text", data_text);
                    $select.find('.ui-select-text').html(data_text).css('color', '#000');
                    $select.trigger("change");
                    e.stopPropagation();
                } else { 
                var data_text = $(this).text();
                var data_value = $(this).attr('data-value');
                $select.attr("data-value", data_value).attr("data-text", data_text);
                $select.find('.ui-select-text').html(data_text).css('color', '#000');
                $option.slideUp(150);
                $select.trigger("change");
                e.stopPropagation();
                }
            }).hover(function (e) {
                if (!$(this).hasClass('liactive')) {
                    $(this).toggleClass('on');
                }
                e.stopPropagation();
            });
        }
    }
    //操作搜索事件
    if (options.allowSearch) {
        $option.find('.ui-select-option-search').find('input').bind("keypress", function (e) {
            if (event.keyCode == "13") {
                var value = $(this).val();
                //loadComboBoxView($(this)[0].options.data, value, $(this)[0].options);
                seachComboBoxItem($option, value)
            }
        }).focus(function () {
            $(this).select();
        });
        $option.find(".fa.fa-search").click(function () {
            var value = $(this).parents(".ui-select-option-search").find('input').val();
            seachComboBoxItem($option, value)
            event.stopPropagation();
        })
    }


    function seachComboBoxItem(domItem, value) {
        if (value == "") {
            domItem.find("li").css("display", "block")
        } else {
            domItem.find("li").css("display", "none")
            domItem.find("li[data-value*='" + value + "']").css("display", "block")
            domItem.find("li[title*='" + value + "']").css("display", "block")
        }
    }
    $select.unbind('click');
    $select.bind("click", function (e) {
        if ($select.attr('readonly') == 'readonly' || $select.attr('disabled') == 'disabled') {
            return false;
        }
        $(this).addClass('ui-select-focus');
        if ($option.is(":hidden")) {
            $select.find('.ui-select-option').hide();
            $('.ui-select-option').hide();
            var left = $select.offset().left;
            var top = $select.offset().top + 29;
            var width = $select.width();
            if (options.width) {
                width = options.width;
            }
            if (($option.height() + top) < $(window).height()) {
                $option.slideDown(150).css({ top: top, left: left, width: width });
            } else {
                var _top = (top - $option.height() - 32)
                $option.show().css({ top: _top, left: left, width: width });
                $option.attr('data-show', true);
            }
            $option.css('border-top', '1px solid #ccc');
            $option.find('li').removeClass('liactive');
            if (options.Multiple == false && $select.attr('data-value')!="") {
            $option.find('[data-value=' + $select.attr('data-value') + ']').addClass('liactive');
            }
            $option.find('.ui-select-option-search').find('input').select();
        } else {
            if ($option.attr('data-show')) {
               $option.hide();
            } else {
               $option.slideUp(150);
            }
        }
        e.stopPropagation();
    });
    $(document).click(function (e) {
        var e = e ? e : window.event;
        var tar = e.srcElement || e.target;
        if (!$(tar).hasClass('form-control')) {
            if ($option.attr('data-show')) {
                $option.hide();
            } else {
                $option.slideUp(150);
            }
            $select.removeClass('ui-select-focus');
            e.stopPropagation();
        }
    });
    return $select;
}




$.fn.ComboBoxTreeEx = function (options) {
    //options参数：description,height,allowSearch,appendTo,click,url,param,method,icon
    
    var $select = $(this);
    $("#"+$select.attr("id")+"-option").html("");
    if (!$select.attr('id')) {
        return false;
    }
    if ($select.find('.ui-select-text').length == 0) {
        var $select_html = "";
        $select_html += "<div class=\"ui-select-text\"  style='color:#999;overflow:hidden;padding-right:16px'>" + options.description + "</div>";
        $select_html += "<div class=\"ui-select-option\">";
        $select_html += "<div class=\"ui-select-option-content\" style=\"max-height: " + options.height + "\"></div>";
        if (options.allowSearch) {
            $select_html += "<div class=\"ui-select-option-search\"><input type=\"text\" class=\"form-control\" placeholder=\"搜索关键字\" /><span class=\"input-query\" title=\"Search\"><i class=\"fa fa-search\" title=\"按回车查询\"></i></span></div>";
        }
        $select_html += "</div>";
        $select.append($select_html);
    }


    var $option_html = $($("<p>").append($select.find('.ui-select-option').clone()).html());
    $option_html.attr('id', $select.attr('id') + '-option');
    $select.find('.ui-select-option').remove();
    if (options.appendTo) {
        $(options.appendTo).prepend($option_html);
    } else {
        $('body').prepend($option_html);
    }
    var $option = $("#" + $select.attr('id') + "-option");
    var $option_content = $("#" + $select.attr('id') + "-option").find('.ui-select-option-content');
    //$option_content.refreshNode();
    //$option_content.refreshNode();
    loadtreeview(options.url);
    function loadtreeview(url) {
        $option_content.treeview({
            onnodeclick: function (item) {
                $select.attr("data-value", item.id).attr("data-text", item.text);
                $select.find('.ui-select-text').html(item.text).css('color', '#000');
                $select.trigger("change");
                if (options.click) {
                    options.click(item);
                }
            },
            height: options.height,
            showcheck: true, //whether to show checkbox
            checkstate: 0, //Checkbox checking state. 0 for unchecked, 1 for partial checked, 2 for checked.
            cascadecheck: true,
            oncheckboxclick:false,
            clicktoggle: false,
            allcheck:"0",//是否多选自定义更改的内容董20180321
            data: options.data,
            param: options.param,
            method: options.method,
            description: options.description
        });      
    }
    if (options.allowSearch) {
        $option.find('.ui-select-option-search').find('input').bind("keypress", function (e) {
            if (e.keyCode == "13") {
                var value = $(this).val();
                var value = $(this).val();
                seachTreeItem($option, value)
                event.stopPropagation();
            }
        }).focus(function () {
            $(this).select();
        });
        $option.find("i.fa-search").click(function () {
            var value = $(this).parents(".ui-select-option-search").find('input').val();
            seachTreeItem($option, value)
            event.stopPropagation();
        })
    }
    function seachTreeItem(domItem, value) {
        if (value == "") {
            domItem.find("ul").css("display", "block")
            domItem.find("ul").find(".bbit-tree-node").css("display", "block")
        } else {
            domItem.find("ul").css("display", "block")
            domItem.find("ul").find(".bbit-tree-node").css("display", "none")
            domItem.find("span[data-value*='" + value + "']").parents(".bbit-tree-node").css("display", "block")
            domItem.find("[title*='" + value + "']").parents(".bbit-tree-node").css("display", "block")
        }

    }
    $option.find('li').click(function (e) {
        var treeText = [];
        var treeValue = [];
        var et = e.target || e.srcElement;
        if (!$(et).hasClass("bbit-tree-ec-icon")) {
            if ($(this).find(".bbit-tree-node-over").attr("id") != undefined) {
                var id = $(this).find(".bbit-tree-node-over").attr("id").replace(/-/g, "_") + '_cb'
                if ($("#" + id).length == 0) {
                    $(this).find(".bbit-tree-node-over").find(".bbit-tree-ec-icon").trigger("click");
                    $select.find(".ui-select-text").html(options.description).css('color', '#999');
                    $select.attr("data-value", "")
                } else {
                    var imgpath = $("#" + id).attr("src")
                    if (imgpath != undefined) {
                        if (imgpath.indexOf("checkbox_1.png") != -1) {
                            $("#" + id).attr("src", imgpath.replace("checkbox_1.png", "checkbox_0.png"))
                        } else if (imgpath.indexOf("checkbox_0.png") != -1) {
                            $("#" + id).attr("src", imgpath.replace("checkbox_0.png", "checkbox_1.png"))
                        }
                        $option_content.find("img[src*='checkbox_1.png']").each(function () {
                            treeText.push($(this).parent("div").attr("title"))
                            treeValue.push($(this).parent("div").attr("id").split("_")[1])
                        })
                        $select.find(".ui-select-text").html(treeText.join(",")).css('color', '#000');
                        $select.attr("data-value", treeValue.join("'',''"))
                    }
                }
            } else {
                $select.find(".ui-select-text").html(options.description)
                $select.attr("data-value", "")
                $option_content.find("img[src*='checkbox_1.png']").each(function () {
                    var imgpath = $(this).attr("src")
                    $(this).attr("src", imgpath.replace("checkbox_1.png", "checkbox_0.png"))
                })
            }
        }
        e.stopPropagation();
    })
    if (options.icon) {
        $option.find('i').remove();
        $option.find('img').remove();
    }
    $select.find('.ui-select-text').unbind('click');
    $select.find('.ui-select-text').bind("click", function (e) {
       
        if ($select.attr('readonly') == 'readonly' || $select.attr('disabled') == 'disabled') {
            return false;
        }
        $(this).parent().addClass('ui-select-focus');
        if ($option.is(":hidden")) {
            $select.find('.ui-select-option').hide();
            $('.ui-select-option').hide();
            var left = $select.offset().left;
            var top = $select.offset().top + 29;
            var width = $select.width();
            if (options.width) {
                width = options.width;
            }
            if (($option.height() + top) < $(window).height()) {
                $option.slideDown(150).css({ top: top, left: left, width: width });
            } else {
                var _top = (top - $option.height() - 32);
                $option.show().css({ top: _top, left: left, width: width });
                $option.attr('data-show', true);
            }
            $option.css('border-top', '1px solid #ccc');
            if (options.appendTo) {
                $option.css("position", "inherit")
            }
            $option.find('.ui-select-option-search').find('input').select();
        } else {
            if ($option.attr('data-show')) {
                $option.hide();
            } else {
                $option.slideUp(150);
            }
        }
        e.stopPropagation();
    });
    $select.find('li div').click(function (e) {
        var e = e ? e : window.event;
        var tar = e.srcElement || e.target;
       // alert($(this).html())
        if (!$(tar).hasClass('bbit-tree-ec-icon')) {
            $option.slideUp(150);
            e.stopPropagation();
        }
    });
    $(document).click(function (e) {
        var e = e ? e : window.event;
        var tar = e.srcElement || e.target;
        if (!$(tar).hasClass('bbit-tree-ec-icon') && !$(tar).hasClass('form-control')) {
            if ($option.attr('data-show')) {
                $option.hide();
            } else {
                $option.slideUp(150);
            }
            $select.removeClass('ui-select-focus');
            e.stopPropagation();
        }
    });

    return $select;
}
var initParm = function (parmArr) {
    for (var i = 0; i < parmArr.length; i++) {
        if (parmArr[i].parmData != "") {
            var initDicArr = (parmArr[i].parmData == null ? [] : parmArr[i].parmData.split("'',''"));
            for (var j = 0; j < initDicArr.length; j++) {
                if (parmArr[i].isTree == false) {
                    $("#" + parmArr[i].divName + "-option").find("li[data-value='" + initDicArr[j] + "']").trigger("click");
                } else {
                    var treeid = $("#" + parmArr[i].divName + "-option").find(".ui-select-option-content").attr("id")
                    var keyID = public_data.Trim(initDicArr[j]);
                    var imgSrctemp = $("#" + treeid + "_" + keyID + "_cb").attr("src").replace("checkbox_0.png", "checkbox_1.png")
                    $("#" + treeid + "_" + keyID + "_cb").attr("src", imgSrctemp)
                }
            }
            if (parmArr[i].isTree == true) { 
                var treeText = [];
                var treeValue = [];
                $("#" + parmArr[i].divName + "-option").find(".ui-select-option-content").find("img[src*='checkbox_1.png']").each(function () {
                    treeText.push($(this).parent("div").attr("title"))
                    treeValue.push($(this).parent("div").attr("id").split("_")[1])
                })
                $("#" + parmArr[i].divName).find(".ui-select-text").html(treeText.join(","))
                $("#" + parmArr[i].divName).attr("data-value", treeValue.join("'',''"))
            }
        }
    }
}
var saveJson = function (table_name, savValArry, key_flag, Triggers) {
    var result = "";
    key_flag = (key_flag == null ? "DbConnection" : key_flag)//
    Triggers = (Triggers == null ? "true" : Triggers) ///是否开启触发器，默认开启，部分为检测数据是否正确选择关闭触发器
    var keyWord = {
        "table_name": table_name,
        "json": JSON.stringify(savValArry),
        "key_flag": key_flag,
        "Triggers": Triggers
    }
    $.ajax({
        url: "/CloudSale/Get_Post.ashx?Cmd=saveJsonToTable",
        type: "post",
        data: $.extend(keyWord, top.session),
        cache: false,
        async: false,
        dataType: "text",
        success: function (data) {
            result = data
        }
    });
    return result
}
var updateJson = function (table_name, savValArry, PrimaryKey, key_flag, Triggers) {
    var result = "";
    key_flag = (key_flag == null ? "DbConnection" : key_flag)//
    Triggers = (Triggers == null ? "true" : Triggers) ///是否开启触发器，默认开启，部分为检测数据是否正确选择关闭触发器
    var keyWord = {
        "table_name": table_name,
        "json": JSON.stringify(savValArry),
        "key_flag": key_flag,
        "PrimaryKey": PrimaryKey,
        "Triggers": Triggers
    }
    $.ajax({
        url: "/CloudSale/Get_Post.ashx?Cmd=updateJsonToTable",
        type: "post",
        data: $.extend(keyWord, top.session),
        cache: false,
        async: false,
        dataType: "json",
        success: function (data) {
            result = data[0].errmsg
        }
    });
    return result
}

var saveBaseJson = function (table_name, savValArry) {
    var result = "";
    var keyWord = {
        "sestoken": "",
        "str": "",
        "table_name": table_name,
        "json": JSON.stringify(savValArry),
        "key_flag": "BaseDb"
    }
    $.ajax({
        url: "/CloudSale/Get_Post.ashx?Cmd=saveJsonToTable",
        type: "post",
        data: keyWord,
        cache: false,
        async: false,
        dataType: "text",
        success: function (data) {
            result = data
        }
    });
    return result
}
var deletItem = function (table_name, key ) {
    var result = "";
    keyWord = {
        "sql_str": "deleteItem '" + table_name + "','" + key + "'",
        "col_name": "errmsg"
    }
    $.ajax({
        url: "/CloudSale/GetSql.ashx",
        type: "post",
        data: $.extend(keyWord, top.session),
        cache: false,
        async: false,
        dataType: "json",
        success: function (data) {
            result = data[0].errmsg
        }
    });
    return result
}
var initItem=function (id, value) {
    var keyWord = {
        "sql_str": "searchItem 'item','" + value + "'",
        "col_name": "item_no~item_name"
    }
    $("#" + id).ComboBoxEX({
        url: "/CloudSale/GetSql.ashx",//控件数据
        param: $.extend(keyWord, top.session),
        id: "item_no",//实际值
        text: "item_name",//显示值
        title: "item_name",//鼠标提示
        Multiple: true,//是否多选
        allowSearch: true,
        height: "200px",
        description: "筛选单品SKU"
    });
}
var initFlow = function (id, value) {
    var keyWord = {
        "sql_str": "searchItem 'saleflowNo','" + value + "'",
        "col_name": "flow_no"
    }
    $("#" + id).ComboBoxEX({
        url: "/CloudSale/GetSql.ashx",//控件数据
        param: $.extend(keyWord, top.session),
        id: "flow_no",//实际值
        text: "flow_no",//显示值
        title: "flow_no",//鼠标提示
        Multiple: true,//是否多选
        allowSearch: true,
        height: "200px",
        description: "筛选单号"
    });
}
var initVip = function (id, value) {
    var keyWord = {
        "sql_str": "searchItem 'vip','" + value + "'",
        "col_name": "card_id~vip_name"
    }
    $("#" + id).ComboBoxEX({
        url: "/CloudSale/GetSql.ashx",//控件数据
        param: $.extend(keyWord, top.session),
        id: "card_id",//实际值
        text: "vip_name",//显示值
        title: "vip_name",//鼠标提示
        Multiple: false,//是否多选
        allowSearch: true,
        height: "200px",
        description: "输入卡号/姓名/电话等"
    });
}

var pulldownMemu = {
    itemMemu: function (value, id) {
        itemArr = [];
        var _id = "#" + id + "_li";
        var keyWord = {
            "sql_str": "searchItem 'itemMenu','" + value + "'",
            "col_name": "item_no~条码~货号~商品名称~品牌名称~零售价"
        }
        $.ajax({
            url: "/CloudSale/GetSql.ashx",
            data: $.extend(keyWord, session),
            type: "post",
            dataType: "json",//后台处理后返回的数据格式
            async: false,//取消异步请求
            success: function (data) {//ajax请求成功后触发的方法
                $(_id).html(" "); //对id为browsers的html内容格式化
                if (data.length != 0) {
                    for (var i = 0; i < data.length; i++) {
                        itemArr.push(data[i]);
                        $(_id).append("<li class=\"mui-table-view-cell\" value=" + i + "><a class=\"mui-navigate-right\">" + data[i]["条码"] + "<br />" + data[i]["商品名称"] + "</a></li>");//对id为browsers进行添加内容
                    }
                }
            },
            error: function (msg) {  //ajax请求失败后触发的方法
                mui.alert("系统异常！", " ");   //弹出错误信息
            }
        });
       $("#item_key_ul").css("display","block");
    },
    vipMemu: function (value, id) {
        vipSearchArr = [];
        var _id = "#" + id + "_li";
        var keyWord = {
            "sql_str": "searchItem 'vipMenu','" + value + "'",
            "col_name": "卡号~姓名~性别~地址~生日~月龄~联系方式~剩余积分~储值余额~办卡日期~办卡门店~lasttime_W"
        }
        $.ajax({
            url: "/CloudSale/GetSql.ashx",
            data: $.extend(keyWord, session),
            type: "post",
            dataType: "json",//后台处理后返回的数据格式
            async: false,//取消异步请求
            success: function (data) {//ajax请求成功后触发的方法
                $(_id).html(" "); //对id为browsers的html内容格式化
                if (data.length != 0) {
                    for (var i = 0; i < data.length; i++) {
                        vipSearchArr.push(data[i]);
                        $(_id).append("<li class=\"mui-table-view-cell\" value=" + i + "><a class=\"mui-navigate-right\">姓名：" + data[i]["姓名"] + "  | 卡号：" + data[i]["卡号"] + "<br />电话：" + data[i]["联系方式"] + "</a></li>");//对id为browsers进行添加内容
                    }
                }
            },
            error: function (msg) {  //ajax请求失败后触发的方法
                mui.alert("系统异常！", " ");   //弹出错误信息
            }
        });
        $("#"+id+"_ul").css("display", "block");
    }
}
var isExitsFunction=function (funcName) {
    try {
        if (typeof (eval(funcName)) == "function") {
            return true;
        }
    } catch (e) {

    }
    return false;
}

//var Loading=function() {
//    var ID = 'YDUI_LOADING';
//    $('#' + ID).remove();
//    var $dom = $('' +
//        '<div class="mask-white-dialog" id="' + ID + '">' +
//        '   <div class="m-loading">' +
//        '       <div class="loading-icon"></div>' +
//        '       <div class="loading-txt">' + ('数据加载中') + '</div>' +
//        '   </div>' +
//        '</div>').remove();
//    $("body").append($dom);
//    setTimeout(function () {
//        $('#' + ID).remove();
//    }, 500);
//}

var getCookie=function (name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}

var tagClassBefore;
////移动端初始化下拉树，传入id和树数组
var initTree = function (treeID, treeJson, multi) {
    var timespan = Date.parse(new Date()) / 1000;
    var _this = $("#" + treeID)
    $("#" + treeID).attr("data-value", timespan)
    var iconClass = $("#" + treeID).prev().find("i").prop("class");
    $("#" + treeID).append(getChildNods(treeJson, 0, iconClass, timespan, multi))
    $("#" + treeID).find(".cell-item").click(function (e) {
        var dataMult = $(this).attr("data-mult");
        var dataLv = $(this).attr("data-leval");
        var et = e.target || e.srcElement;
        var divID = $(this).attr("data-value");
        var divParent = $(this).parent("div").attr("data-value");
        if (dataLv == 0 && dataMult == false) {
            _this.find("div[data-value='" + divID + "']").toggle()
        } else {
            if (et.tagName == "INPUT") {
                if (tagClassBefore != "cell-checkbox-icon") {
                    if (_this.find("div[data-value='" + divID + "']").length > 0) {
                        $(this).find("input[type ='checkbox']").removeAttr("checked")
                        _this.find("div[data-value='" + divID + "']").toggle()
                    }
                } else {
                    _this.find("label[data-value='" + divParent + "']").find("input[type ='checkbox']").removeAttr("checked")
                    _this.find("div[data-value='" + divID + "']").find("input[type ='checkbox']").removeAttr("checked")
                }
            } else {
                tagClassBefore = et.className
            }
        }
    })
}
var getChildNods = function (nodArr, leval, iconClass, timespan, multi) {
    var nodHtml = "";
    var myDisplay = (leval == 0 && multi == false) ? "none" : "block";
    for (var i = 0; i < nodArr.length; i++) {
        nodHtml += '\
                        <label data-mult="' + multi + '" class="cell-item" data-value="' + nodArr[i].id + '" data-leval="' + leval + '">\
                            <span class="cell-left"><i class="' + iconClass + '"></i>&nbsp&nbsp  ' + nodArr[i].text + '</span>\
                            <label class="cell-right">\
                                <input type="checkbox" value="' + nodArr[i].id + '" name="checkbox' + timespan + '" style="display:' + myDisplay + '"/>\
                                <i class="cell-checkbox-icon" style="display:' + myDisplay + '"></i>\
                            </label>\
                        </label>\
        '
        if (nodArr[i].hasChildren) {
            var arrChild = nodArr[i].ChildNodes;
            nodHtml += '\
                        <div class="m-cell" style="margin-left:20px;border-left:1px dashed #D9D9D9; display:none" data-value="' + nodArr[i].id + '">\
                        ' + getChildNods(arrChild, leval + 1, iconClass) + '\
                        </div>\
                     '
        }
    }
    return nodHtml
}
//手机端下拉选择框 inputtype为checkbox 或radio
var initPulldowm = function (domID, nodArr, inputType, containID) {
    timespan = Date.parse(new Date()) / 1000;
    $("#" + domID).attr("data-value", timespan)
    var iconClass = $("#" + domID).prev().find("i").prop("class");
    for (var i = 0; i < nodArr.length; i++) {
        $("#" + domID).append('\
                        <label class="cell-item" data-value="' + nodArr[i].id + '">\
                            <span class="cell-left"><i class="'+ iconClass + '"></i>&nbsp&nbsp  ' + nodArr[i].name + (containID==true?" (编号：" + nodArr[i].id + ")":"") + '</span>\
                            <label class="cell-right">\
                                <input type="'+inputType+'" value="' + nodArr[i].id + '" name="checkbox' + timespan + '" />\
                                <i class="cell-' + inputType + '-icon"></i>\
                            </label>\
                        </label>\
        ')
    }

}

var initDateDiv=function (id) {
    var currYear = (new Date()).getFullYear();
    var opt = {};
    opt.date = {
        preset: 'date'
    };
    opt.datetime = {
        preset: 'datetime'
    };
    opt.time = {
        preset: 'time'
    };
    opt.default = {
        theme: 'android-ics light', //皮肤样式
        display: 'modal', //显示方式 
        mode: 'scroller', //日期选择模式
        dateFormat: 'yyyy-mm-dd',
        lang: 'zh',
        showNow: true,
        defaultValue: "",
        nowText: "今天",
        startYear: currYear - 50, //开始年份
        endYear: currYear + 10 //结束年份
    };
    $("#" + id).mobiscroll($.extend(opt['date'], opt['default']));
}

///导入EXCEL 解析为json

var wb;//读取完成的数据
var rABS = false; //是否将文件读取为二进制字符串

var importExcel = function (obj) {//导入
    if (!obj.files) {
        return;
    }
    var f = obj.files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
        var data = e.target.result;
        if (rABS) {
            wb = XLSX.read(btoa(fixdata(data)), {//手动转化
                type: 'base64'
            });
        } else {
            wb = XLSX.read(data, {
                type: 'binary'
            });
        }
        //wb.SheetNames[0]是获取Sheets中第一个Sheet的名字
        //wb.Sheets[Sheet名]获取第一个Sheet的数据
        document.getElementById("myJson").innerHTML = JSON.stringify(XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]));
    };
    if (rABS) {
        reader.readAsArrayBuffer(f);
    } else {
        reader.readAsBinaryString(f);
    }

}

var fixdata=function (data) { //文件流转BinaryString
    var o = "",
        l = 0,
        w = 10240;
    for (; l < data.byteLength / w; ++l) o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)));
    o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
    return o;
}

var isParent=function (obj, parentObj) {
    while (obj != undefined && obj != null && obj.tagName.toUpperCase() != 'BODY') {
        if (obj == parentObj) {
            return true;
        }
        obj = obj.parentNode;
    }
    return false;
}

var fixNum = function (data,Num) {
    if (data != undefined && data != null && data != "null" && !isNaN(data)) {
        return parseFloat(data.toFixed(Num))
    } else {
        return 0
    }
}

var getDicName=function(Arr,val, ID, Name) {
    var result = ID;
    for (var i = 0; i < Arr.length; i++) {
        if (val == Arr[i][ID]) {
            result = Arr[i][Name]
            break;
        }
    }
    return result
}

