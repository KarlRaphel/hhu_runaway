var t = Object.assign || function(t) {
    for (var a = 1; a < arguments.length; a++) {
        var e = arguments[a];
        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
}, a = require("../../../../utils/index.js"), e = getApp();

Component({
    properties: {
        type: Number
    },
    data: {
        isEnd: !1,
        list: [],
        start: 0,
        loading: !0
    },
    pageLifetimes: {
        show: function() {
            this.onRefresh();
        }
    },
    methods: {
        onDetial: function(t) {
            var a = t.currentTarget.dataset.item;
            wx.navigateTo({
                url: "/pages/audit/index?data=" + JSON.stringify(a) + "&type=" + this.data.type
            });
        },
        onCheckClick: function(t) {
            var a = this.data.list[t.currentTarget.dataset.index];
            a.checked = !a.checked, this.setData({
                list: this.data.list
            });
        },
        onSelectAll: function(t) {
            for (var a = t.currentTarget.dataset.value, e = 0; e < a.length; e++) a[e].checked = !a[e].checked;
            this.setData({
                list: a
            });
        },
        loadData: function() {
            var i = this;
            return new Promise(function(n, s) {
                i.setData({
                    loading: !0
                }), (0, a.Request)(a.Api.getAuditList, {
                    openid: e.globalData.openId,
                    verifierState: i.data.type,
                    start: i.data.start,
                    length: 10
                }).then(function(e) {
                    i.setData({
                        loading: !1
                    }), n(e.list.map(function(e) {
                        return t({}, e, {
                            checked: !1,
                            createTime: e.createTime.substr(0, 16),
                            startTime: e.startTime.substr(0, 10),
                            endTime: e.endTime.substr(0, 10),
                            status: a.Util.status(e.dictionaryInfo)
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
                start: this.data.start + 10
            }), this.loadData().then(function(a) {
                t.setData({
                    list: t.data.list.concat(a),
                    isEnd: a.length < 10
                });
            });
        },
        onShowDetail: function(t) {
            this.data.list[t.currentTarget.dataset.index];
        },
        btn_act: function(t) {
            var a = this, e = t.target.dataset.value;
            this.data.list.filter(function(t) {
                return t.checked;
            }).length ? wx.showModal({
                title: "提示",
                content: 0 == e ? "确定通过勾选的申请吗？" : "确定拒绝勾选的申请吗？",
                success: function(t) {
                    t.confirm && a.submitData(e);
                }
            }) : wx.showToast({
                title: "请勾选需要审核的申请",
                icon: "none"
            });
        },
        submitData: function(t) {
            var i = this;
            wx.showLoading({
                title: "提交中..."
            }), this.setData({
                showMask: !0
            }), (0, a.Request)(a.Api.updateMoreAuditState, {
                openid: e.globalData.openId,
                list: this.data.list.filter(function(t) {
                    return t.checked;
                }).map(function(a) {
                    return {
                        visitorId: a.id,
                        state: t
                    };
                })
            }).then(function(a) {
                wx.hideLoading(), wx.showToast({
                    title: 0 == t ? "通过成功" : "已全部拒绝"
                }), setTimeout(function() {
                    i.onRefresh(), i.setData({
                        showMask: !1
                    });
                }, 500);
            }).catch(function(t) {
                i.setData({
                    showMask: !1
                });
            });
        }
    }
});