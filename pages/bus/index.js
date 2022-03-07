var t = Object.assign || function(t) {
    for (var a = 1; a < arguments.length; a++) {
        var e = arguments[a];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    }
    return t;
}, a = require("../../utils/index.js"), e = getApp();

Page({
    data: {
        list: [],
        loading: !0,
        item: null
    },
    onLoad: function() {
        this.onRefresh();
    },
    loadData: function() {
        var n = this;
        return new Promise(function(i, s) {
            n.setData({
                loading: !0
            }), (0, a.Request)(a.Api.getBusRecord, {
                card: e.globalData.userInfo.idCard,
                start: n.data.start,
                length: 10
            }).then(function(e) {
                n.setData({
                    loading: !1
                }), i(e.list.map(function(e) {
                    return console.log(45, e), t({}, e, {
                        createTime: a.Util.formatTime(e.createTime && e.createTime, "MM月DD日 HH:mm:ss")
                    });
                }));
            }).catch(function(t) {
                n.setData({
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
            start: this.data.start + 10
        }), this.loadData().then(function(a) {
            t.setData({
                list: t.data.list.concat(a),
                isEnd: a.length < 10
            });
        });
    }
});