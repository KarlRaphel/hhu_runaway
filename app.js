var n = require("./utils/index.js"),e = require("/utils/index.js");

App({
    globalData: {
        openId: null,
        wxUserInfo: null,
        userInfo: null,
        permission: null,
        isMaster: !1,
        isStudent: !1,
        organ: [],
        bathhouse: null,
        error: !1,
        sessionKey: null,
        Name: "微信用户",
        entryName: "常州校区北门",
        organName: "机电工程学院",
        Reason:"去万达购买生活用品",
        Teacher:"蒋旦悦",
        startTime:e.Util.formatTime(Date.now(), "YYYY-MM-DD 07:00:00"),
        endTime:e.Util.formatTime(Date.now(), "YYYY-MM-DD 22:00:00"),
        createTime:e.Util.formatTime(Date.now()-98765432, "YYYY-MM-DD HH:mm:ss")
    },
});