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
    },
    onLoad: function() {
        this.setData({
            Name:t.globalData.Name,
            organName:t.globalData.organName,
            campusCard:t.globalData.campusCard
        })
    },
    onShow: function() {
        this.setData({
            Name:t.globalData.Name,
            organName:t.globalData.organName,
            campusCard:t.globalData.campusCard
        })
    },
    addUserInfo: function() {
        wx.navigateTo({
            url: "/pages/student/shenqing/index"
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
        this.setData({
            code: '暂无出行校验码'
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
    }
});