var t = Object.assign || function(t) {
    for (var a = 1; a < arguments.length; a++) {
        var n = arguments[a];
        for (var e in n) Object.prototype.hasOwnProperty.call(n, e) && (t[e] = n[e]);
    }
    return t;
}, a = require("../../utils/index.js");

getApp();

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
        dataList: null,
        minDate: new Date(Date.now() - 6048e5).getTime()
    },
    ready: function() {
        this.onRefresh();
    },
    methods: {
        loadData: function() {
            var n = this;
            return new Promise(function(e, i) {
                n.setData({
                    loading: !0
                }), (0, a.Request)(a.Api.getScoreList, {
                    start: n.data.start,
                    length: 10
                }).then(function(a) {
                    var i = a.list.map(function(a) {
                        return t({}, a);
                    });
                    console.log(99, i), n.setData({
                        list: i,
                        loading: !1
                    }), e(a.list.map(function(a) {
                        return t({}, a);
                    }));
                }).catch(function(t) {
                    n.setData({
                        loading: !1
                    }), i();
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
    }
});