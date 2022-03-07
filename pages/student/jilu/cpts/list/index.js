var t = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var a = arguments[e];
        for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (t[i] = a[i]);
    }
    return t;
}, e = require("../../../../../utils/index.js"), a = getApp();

Component({
    properties: {
        type: {
            type: Number
        }
    },
    data: {
        isEnd: !1,
        item: null,
        list: [],
        start: 0,
        loading: !0
    },
    ready: function() {
        this.onRefresh();
    },
    methods: {
        loadData: function() {
            var i = this;
            return new Promise(function(n, s) {
                i.setData({
                    loading: !0
                }),
                function(a) {
                    i.setData({
                        loading: !1
                    }), 
                    n(a.list.map(function(a) {
                        return t({}, a, {
                            createTime: a.createTime && a.createTime.substr(0, 16),
                            startTime: a.startTime && a.startTime.substr(0, 16),
                            endTime: a.endTime && a.endTime.substr(0, 16),
                            status: e.Util.status(a.dictionaryInfo)
                        });
                    }));
                };
            });
        },
        onRefresh: function() {
            var t = this;
            t.setData({
            list:[{
                        id: "4d4d481545cd416c96dd52a7c46f204a",
                        createTime: e.Util.formatTime(Date.now()-90000000, "YYYY-MM-DD HH:mm:ss"),
                        updateTime: "2020-04-07 10:07:25",
                        startTime: e.Util.formatTime(Date.now(), "YYYY-MM-DD 07:00:00"),
                        endTime: e.Util.formatTime(Date.now(), "YYYY-MM-DD 22:00:00"),
                        applicantId: "4f5449a1864b49d2befff9aa58786a3d",
                        applicantName: a.globalData.Name,
                        applicantPhone: "18502554047",
                        universityId: null,
                        universityName: null,
                        visitorReason: a.globalData.Reason,
                        verifierId: "1f633d87c5a34094b27f28618b6e633a",
                        verifierTwoId: "193dc921b9434af08aceca75ce3d6959",
                        verifierState: 11,
                        type: 1,
                        verifier: 10,
                        unitManagerId: "1f633d87c5a34094b27f28618b6e633a",
                        unitManagerName: "翟福雷",
                        unitPartyCommittee: null,
                        unitPartyCommitteeId: "193dc921b9434af08aceca75ce3d6959",
                        unitPartyCommitteeName: "徐群",
                        index:1,
                        status:[{
                            color: "green",
                            label: "已通过"
                        }],
                        dictionaryInfo: [ {
                            value: "1",
                            label: "翟福雷已审核"
                        }]
                    }] 
                })
            },
        loadMore: function() {
            var t = this;
            this.setData({
                start: this.data.start + 10
            }), this.loadData().then(function(e) {
                t.setData({
                    list: t.data.list.concat(e),
                    isEnd: e.length < 10
                });
            });
        },
        onShowDetail: function(t) {
            this.triggerEvent("user", t.currentTarget.dataset.item), wx.navigateTo({
                url: "/pages/student/jiluDetail/index"
            });
        }
    }
});