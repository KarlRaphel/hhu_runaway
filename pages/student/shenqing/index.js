function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var e = require("../../../utils/index.js"), a = getApp();

Page({
    data: {
        showMask: !1,
        startTime: "",
        endTime: "",
        userInfo: null,
        selectTimeShow: !1,
        minDate: Date.now()-300000000,
        currentDate: void 0,
        remark: "",
        tag: null,
        isGraduate: null,
        selectShow: !1,
        teacher: null,
        times: null,
        columns: [ {
            url: e.Api.getLeaderList
        } ]
    },
    onLoad: function() {
    },
    onSelectTimeOk: function(i) {
        var s = e.Util.formatTime(i.detail, "YYYY-MM-DD HH:mm");
        if(this.data.tag=="0"){
            a.globalData.startTime=s,
            this.setData({
                selectTimeShow: !1,
                startTime:s
            })
        }
        if(this.data.tag=="1"){
            a.globalData.endTime=s,
            this.setData({
                selectTimeShow: !1,
                endTime:s
            })
        }
        if(this.data.tag=="2"){
            a.globalData.createTime=s,
            this.setData({
                selectTimeShow: !1,
                createTime:s
            })
        }
    },
    onHideTimePicker: function() {
        this.setData({
            selectTimeShow: !1
        });
    },
    onShowTimePicker: function(t) {
        this.setData({
            selectTimeShow: !0,
            tag: t.currentTarget.dataset.tag
        });
    },
    onRemarkChange: function(t) {
        a.globalData.Reason=t.detail
    },
    onTeacherChange: function(t) {
        a.globalData.Teacher=t.detail
    },
    onNameChange: function(t) {
        a.globalData.Name=t.detail
    },
    onOrganChange: function(t) {
        a.globalData.organName=t.detail
    },
    onEntryChange: function(t) {
        a.globalData.entryName=t.detail
    },
    onCardChange: function(t) {
        a.globalData.campusCard=t.detail
    },




    onSelect: function(t) {
        this.setData({
            teacherId: t.detail
        });
    },
    onNumChange: function(t) {
        this.setData({
            times: t.detail
        });
    },
    onSubmit: function() {
        wx.navigateBack({delta:1})
        },
    checkboxChange: function(t) {
        this.data.isGraduate = t.target.dataset.value;
        }
    },

);