var isDrill = false; //默认不下钻
var isDrill_url = "";//默认下钻URL为空


var ECharts = {
    GetQueryString: function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    },

    Draw: function (option, id, handler) {
        var myChart = echarts.init(document.getElementById(id), 'cloudsale-echart-theme');
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
        if (handler) {
            myChart.on('click', function (params) { handler(params) });
        }
        //myChart.setOption(option, true);
        $(window).resize(function () {
            myChart.resize();
        });
    },
    new_ym: function (name, url) {
        top.tablist.newTab({
            title: name,
            closed: true,
            replace: true,
            // icon: "fa fa-file-text-o",
            url: top.contentPath + "/CloudSale/Report_PC/web_page" + url + ""
        });
    }
}