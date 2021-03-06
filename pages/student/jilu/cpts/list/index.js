var t = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var a = arguments[e];
        for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (t[i] = a[i]);
    }
    return t;
}, e = require("../../../../../utils/index.js"), a = getApp();

Component({
    properties: {
        type: {
            type: Number
        }
    },
    data: {
        isEnd: !1,
        item: null,
        list: [],
        start: 0,
        loading: !0
    },
    ready: function() {
        this.onRefresh();
    },
    methods: {
        loadData: function() {
            var i = this;
            return new Promise(function(n, s) {
                i.setData({
                    loading: !0
                }),
                function(a) {
                    i.setData({
                        loading: !1
                    }), 
                    n(a.list.map(function(a) {
                        return t({}, a, {
                            createTime: a.createTime && a.createTime.substr(0, 16),
                            startTime: a.startTime && a.startTime.substr(0, 16),
                            endTime: a.endTime && a.endTime.substr(0, 16),
                            status: e.Util.status(a.dictionaryInfo)
                        });
                    }));
                };
            });
        },
        onRefresh: function() {
            var t = this;
            t.setData({
            list:[{
                        createTime: a.globalData.createTime,
                        startTime: a.globalData.startTime,
                        endTime: a.globalData.endtTime,
                        applicantName: a.globalData.Name,
                        oneVerifier: a.globalData.Teacher,
                        visitorReason: a.globalData.Reason,
                        status:[{
                            color: "#0099fe",
                            label: "已通过"
                        }]
                    }] 
                })
            },
        loadMore: function() {
            var t = this;
            this.setData({
                start: this.data.start + 10
            }), this.loadData().then(function(e) {
                t.setData({
                    list: t.data.list.concat(e),
                    isEnd: e.length < 10
                });
            });
        },
        onShowDetail: function(t) {
            this.triggerEvent("user", t.currentTarget.dataset.item), wx.navigateTo({
                url: "/pages/student/jiluDetail/index"
            });
        }
    }
});