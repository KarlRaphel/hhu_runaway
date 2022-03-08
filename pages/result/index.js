var t = require("../../utils/index.js");
var app = getApp();
Page({
    data: {
        wxUserInfo: null,
        userInfo: null,
        loading: !1,
        error: !1,
        data: null,
        type: null,
        isMG: !1,
        errorText: "",
        id: "",
        isBus: !1,
        lat: 0,
        lng: 0,
        name: "",
        list: [],
        time: t.Util.formatTime(Date.now(), "MM月DD日 HH:mm"),
    },
    onLoad: function() {
        this.setData({
        Name: app.globalData.Name,
        entryName: app.globalData.entryName,
        organName: app.globalData.organName
        })
        },
        onShow: function() {
            this.setData({
                time: t.Util.formatTime(Date.now(), "MM月DD日 HH:mm")
            })
        },
});