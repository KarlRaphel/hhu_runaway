var a = require("../../utils/index.js"), e = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}(require("./xieyi.js")), t = getApp();

Page({
    data: {
        isStudent: !1,
        isTeacher: 0,
        showMask: !1,
        userInfo: null,
        wxUserInfo: null,
        loading: !0,
        loadError: !1,
        idCardNum: null,
        code: "刷新获取",
        codeUpdateTime: null,
        codeLoading: !1,
        isTeacherLoader: !1,
        isAdmin: !1,
        isMaster: !1,
        checked: !0,
        isGeLi: !1,
        hasBathhouse: !1,
        isFamily: !1,
        isFirst: !1,
        isLabor: !1,
        isOrdinary: !1,
        isUnOrdinary: !1,
        isGraduate: !1,
        isStay: !1,
        glTime: a.Util.formatTime(Date.now(), "MM月DD日 HH:mm"),
        qrUrl: "",
        tong: !1,
        idCard: null,
        idPhone: null,
        isFangKe: !1,
        edit: !1,
        Name: "微信用户",
        organName: "物联网工程学院",
        entryName: "常州校区北门"
    },
    onLoad: function(a) {
        var e = this;
        this.setData({
            qrUrl: a.q && decodeURIComponent(a.q)
        }), t.onLoadFinish = function(a) {
            e.setData({
                wxUserInfo: a.wxUserInfo,
                loadError: a.error
            });
        };
    },
    onShow: function() {},
    addUserInfo: function() {
        this.setData({
            edit: !0
        })
    },
    inputName: function(o) {
        this.setData({
            Name: o.detail.value
        }),
        getApp().globalData.Name = o.detail.value
    },
    inputOrg: function(o) {
        this.setData({
            organName: o.detail.value
        }),
        getApp().globalData.organName = o.detail.value
    },
    inputEntry: function(o) {
        this.setData({
            entryName: o.detail.value
        }),
        getApp().globalData.entryName=o.detail.value
    },
    inputReason: function(o) {
        getApp().globalData.Reason=o.detail.value
    },
    confirmInfo: function() {
        console.log(this.data.message), console.log(t.globalData), this.setData({
            edit: !1
        });
    },
    jumpByCode: function(a) {
        wx.navigateTo({
            url: "/pages/result/index?type=1&id=1"
        });
    },
    onIdCardNumChange: function(a) {
        this.setData({
            idCardNum: a.detail
        });
    },
    onIdCardChange: function(a) {
        this.setData({
            idCard: a.detail
        });
    },
    onIdPhoneChange: function(a) {
        this.setData({
            idPhone: a.detail
        });
    },
    onCheckStudent: function(a) {
        this.setData({
            isTeacher: a.currentTarget.dataset.value
        });
    },
    onCheckClick: function() {
        this.setData({
            checked: !this.data.checked
        });
    },
    onXieYiClick: function() {
        wx.showModal({
            title: "用户协议",
            content: e.default.xieyi
        });
    },
    onYinSiClick: function() {
        wx.showModal({
            title: "隐私政策",
            content: e.default.yinsi
        });
    },
    onBind: function(e) {},

    onRefresh: function() {
        wx.showToast({
            title: "无该功能。。。。。。。。",
            icon: "none"
        });
    },
    gotoSaoYiSao: function() {
        var o = this;
        wx.scanCode({
            success: function(t) {
                o.jumpByCode(t.result);
            },
            fail: function() {
                o.jumpByCode(t.result);
            }
        });
    },
    
    gotoXSJiLu: function() {
        wx.navigateTo({
            url: "/pages/student/jilu/index"
        });
    },

    gotoZaoTang: function() {
        wx.showToast({
            title: "无该功能。。。。。。。。",
            icon: "none"
        });
    }
});