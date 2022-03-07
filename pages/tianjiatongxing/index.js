function t(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = e, t;
}

var a = require("../../utils/index.js"), e = getApp();

Page({
    data: {
        showMask: !1,
        userInfo: null,
        address: null,
        tong: !1
    },
    onLoad: function() {
        var t = getCurrentPages();
        t[t.length - 2].data;
        this.setData({
            userInfo: e.globalData.userInfo
        });
    },
    onInput: function(a) {
        this.setData(t({}, a.currentTarget.dataset.name, a.detail));
    },
    onRemarkChange: function(t) {
        this.setData({
            remark: t.detail
        });
    },
    onFileChange: function(t) {
        this.setData({
            images: t.detail
        });
    },
    onSubmit: function() {
        var t = this;
        this.data.userInfo.name ? this.data.userInfo.phone ? this.data.address ? wx.showModal({
            title: "提示",
            content: "确定提交吗？",
            success: function(a) {
                a.confirm && t.submitData();
            }
        }) : wx.showToast({
            title: "请输入地址",
            icon: "none"
        }) : wx.showToast({
            title: "请输入电话",
            icon: "none"
        }) : wx.showToast({
            title: "请输入名字",
            icon: "none"
        });
    },
    submitData: function() {
        var t = this;
        wx.showLoading({
            title: "提交中..."
        }), this.setData({
            showMask: !0
        }), (0, a.Request)(a.Api.applysportStep, {
            teacherId: this.data.userInfo.id,
            teacherName: this.data.userInfo.name,
            phone: this.data.userInfo.phone,
            address: this.data.address,
            campusCard: this.data.userInfo.campusCard
        }).then(function(a) {
            wx.hideLoading(), wx.showToast({
                title: "提交成功"
            }), setTimeout(function() {
                var a = getCurrentPages();
                a[a.length - 2].setData({
                    tong: !0
                }), t.setData({
                    showMask: !1
                }), wx.navigateBack({
                    delta: 1
                });
            }, 500);
        }).catch(function(a) {
            t.setData({
                showMask: !1
            });
        });
    }
});