var t = Object.assign || function(t) {
    for (var a = 1; a < arguments.length; a++) {
        var e = arguments[a];
        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
}, a = require("../../../utils/index.js"), e = getApp();

Page({
    data: {
        isEnd: !1,
        list: [],
        start: 0,
        loading: !0,
        obj: null
    },
    onLoad: function() {
        this.onRefresh();
    },
    loadData: function() {
        var i = this;
        return new Promise(function(n, s) {
            i.setData({
                loading: !0
            }), (0, a.Request)(a.Api.getSelfZaoTangRecord, {
                id: e.globalData.userInfo.id,
                start: i.data.start,
                length: 20
            }).then(function(e) {
                i.setData({
                    loading: !1
                }), n(e.list.map(function(e) {
                    return console.log(99, e), t({}, e, {
                        createTime: a.Util.formatTime(e.createTime, "MM月DD日 HH:mm"),
                        startTime: a.Util.formatTime(e.startTime, "HH:mm"),
                        endTime: a.Util.formatTime(e.endTime, "HH:mm"),
                        userDate: a.Util.formatTime(e.userDate, "MM月DD日")
                    });
                }));
            }).catch(function(t) {
                i.setData({
                    loading: !1
                }), s();
            });
        });
    },
    onRefresh: function() {
        var t = this;
        this.setData({
            start: 0
        }), this.loadData().then(function(a) {
            t.setData({
                list: a,
                isEnd: !1
            });
        });
    },
    loadMore: function() {
        var t = this;
        this.setData({
            start: this.data.start + 20
        }), this.loadData().then(function(a) {
            t.setData({
                list: t.data.list.concat(a),
                isEnd: a.length < 20
            });
        });
    },
    onShowDetail: function(t) {
        var a = t.currentTarget.dataset.item;
        this.setData({
            obj: a
        }), wx.navigateTo({
            url: "/pages/zaotang/shenqingdetail/index"
        });
    }
});