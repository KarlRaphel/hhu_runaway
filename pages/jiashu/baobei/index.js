var t = Object.assign || function(t) {
    for (var a = 1; a < arguments.length; a++) {
        var n = arguments[a];
        for (var e in n) Object.prototype.hasOwnProperty.call(n, e) && (t[e] = n[e]);
    }
    return t;
}, a = require("../../../utils/index.js"), n = getApp();

Component({
    properties: {
        type: {
            type: Number
        }
    },
    data: {
        isEnd: !1,
        list: [],
        start: 0,
        loading: !0,
        dataList: null
    },
    ready: function() {
        this.onRefresh();
    },
    methods: {
        loadData: function() {
            var e = this;
            return new Promise(function(i, s) {
                e.setData({
                    loading: !0
                }), (0, a.Request)(a.Api.getFamilyList, {
                    teacherIdCard: n.globalData.userInfo.idCard,
                    start: e.data.start,
                    length: 10
                }).then(function(a) {
                    e.setData({
                        loading: !1
                    }), i(a.list.map(function(a) {
                        return t({}, a);
                    }));
                }).catch(function(t) {
                    e.setData({
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
        },
        onAddNew: function() {
            wx.navigateTo({
                url: "/pages/jiashu/onAddJiaShu/index"
            });
        },
        onUpdate: function(t) {
            this.setData({
                dataList: t.currentTarget.dataset.item
            }), wx.navigateTo({
                url: "/pages/jiashu/onEditJiaShu/index"
            });
        }
    }
});