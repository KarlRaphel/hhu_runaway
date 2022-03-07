var a = getApp();

Page({
    data: {
        data: null,
        userInfo: null
    },
    onLoad: function() {
        this.setData({
            Name:a.globalData.Name,
            createTime:a.globalData.createTime,
            startTime:a.globalData.startTime,
            endTime:a.globalData.endTime,
            Teacher:a.globalData.Teacher,
            Reason:a.globalData.Reason,
        })

    }
});