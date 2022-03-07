Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = "http://124.70.212.38:9001/hehai_mg";

e = "https://12580.fyzhgd.com/ApiGeteway/hehai_mg", exports.default = {
    baseUrl: e,
    getOpenId: e + "/api/WeChat/jsCode2session/:appid/:secret/:code",
    bindUser: "POST " + e + "/api/UniversityTeacherBase/BindCampusCard/:card/:openId",
    bindStudent: "POST " + e + "/api/UniversityStudent/BindOpenId/:card/:openId",
    bindQiTa: "POST " + e + "/cApi/visitor/bcyy/BindOpenId",
    getUserInfo: e + "/api/UniversityTeacherBase/GetTeacherByOpenid/:openId",
    getCode: "POST " + e + "/api/UniversityVisitor/GetValidCode/:openId",
    updateUserSex: "POST " + e + "/cApi/bathhouse/apply/updateSexByIdCard/:idCard/:sextype",
    submitXSShenQing: "PUT " + e + "/cApi/university-student-organ/stuentOutApply",
    getXSShenHeJiLu: e + "/api/UniversityStudentOrgan/GetStudentOutVerifierRecord",
    getXSShenHeList: e + "/cApi/visitor/university-visitor-item/getStudentOutVerifierList",
    updateMoreXSState: "PUT " + e + "/cApi/visitor/university-visitor-user/auditor",
    getXSAreaJiLu: e + "/cApi/university/accessRecords/getCampusSiteRecords",
    getXSMGJiLu: e + "/cApi/university/accessRecords/getRecordsUnit",
    submitShenQing: "POST " + e + "/cApi/visitor/university-visitor-user/addVisitor",
    getShenHeJiLu: e + "/api/UniversityVisitor/ListAuditorSafe",
    getJiLuDetail: e + "/api/UniversityVisitor/ListAuditorSafeItem/:id",
    getAuditList: e + "/api/UniversityVisitor/ListAuditor",
    updateAuditState: "PUT " + e + "/api/UniversityVisitor/Auditor/:openid/:visitorId/:state",
    updateMoreAuditState: "PUT " + e + "/cApi/visitor/university-visitor-user/auditor",
    getTXInfo: "POST " + e + "/cApi/visitor/university-gate/GateIdCard/:idCard/:id",
    getTXInfoFromOther: "POST " + e + "/api/UniversityCampusSiteRecords/Add/:type/:userid/:areaType/:id",
    getTXBath: "POST " + e + "/cApi/bathhouse/apply/accessBathhouseByQRcode/:bathhouseId/:idCard",
    getTXBus: "POST " + e + "/cApi/visitor/bcyy/schoolBusCheck",
    getTXBind: "POST " + e + "/cApi/visitor/bcyy/BindOpenId",
    getBusRecord: e + "/cApi/visitor/bcyy/getCodeScanningRecords",
    getUserList: e + "/api/UniversityTeacherBase/GetBatch/:openId",
    getBlackList: e + "/api/UniversityBlack/ListBlack/:id",
    getWhiteList: e + "/api/UniversityBlack/List/:id",
    getShenHeBlackList: e + "/api/UniversityBlack/ListBlackToBeConfirmed/:id",
    getShenHeWhiteList: e + "/api/UniversityBlack/ListWhiteToBeConfirmed/:id",
    shenhe1blackList: "POST " + e + "/cApi/university/black/oneAuditBlack",
    shenhe2blackList: "POST " + e + "/cApi/university/black/twoAuditBlack",
    shenhe1whiteList: "POST " + e + "/cApi/university/black/oneAuditWhite",
    shenhe2whiteList: "POST " + e + "/cApi/university/black/twoAuditWhite",
    getManageUserList: e + "/api/UniversityBlack/AllList/:id",
    updateUserDetail: "PUT " + e + "/cApi/university/teacher-base/updateTeacher/:id",
    deleteUser: "DELETE " + e + "/cApi/university/teacher-base/deleteTeacher/:id",
    addUser: "POST " + e + "/cApi/university/teacher-base/addTeacher",
    unbindUser: e + "/api/UniversityTeacherBase/UnBindUniversityTeacherOpenId",
    getZaoTangList: e + "/cApi/bathhouse/bathhouse/bathHouseListByName",
    getZaoTangTimeList: e + "/cApi/bathhouse/apply/selectDertailList",
    submitZaoTangYuYue: "POST " + e + "/cApi/bathhouse/apply/applyBathHouse",
    getZaoTangSetting: e + "/cApi/bathhouse/detail/selectBathHousetask/:id",
    addNewZaoTangTime: "PUT " + e + "/cApi/bathhouse/detail/addBathHousedetail",
    getSelfZaoTangRecord: e + "/cApi/bathhouse/apply/selectUserApplyList/:id",
    cancelZaoTangYuYue: "PUT " + e + "/cApi/bathhouse/apply/updateUserApply",
    getAllRecord: e + "/cApi/bathhouse/apply/ApplyListByDateAndName",
    destoryZaoTangSetting: "POST " + e + "/cApi/bathhouse/detail/updatetask",
    getConfigSelectList: e + "/cApi/bathhouse/detail/bathHouseListDR",
    batchDetail: "POST " + e + "/cApi/bathhouse/detail/updatedetailpl",
    updateDetail: "POST " + e + "/cApi/bathhouse/detail/updateBathHousedetail/:id",
    deleteDetail: "DELETE " + e + "/cApi/bathhouse/detail/deleteBathHousedetail/:id",
    artificialConfirm: "POST " + e + "/cApi/bathhouse/apply/QRCodeManualBathhouse/:bathhouseId/:applyUserId/:state",
    addFamily: "POST " + e + "/cApi/teacherFamily/addFamily",
    getFamilyList: e + "/cApi/teacherFamily/selectFamily",
    updateFamily: "PUT " + e + "/cApi/teacherFamily/updateFamily/:id",
    deleteFamily: "DELETE " + e + "/cApi/teacherFamily/deleteFamily/:id",
    addFamilyShenHe: "POST " + e + "/cApi/teacher-family-auditee/auditeeFamily",
    getShenheList: e + "/cApi/teacher-family-auditee/selectFamilyAuditee",
    shenHeFamily: "PUT " + e + "/cApi/teacher-family-auditee/updateAuditee",
    getStepsData: "POST " + e + "/cApi/sport-step/stepData",
    getStepsList: e + "/cApi/sport-step/getSportStepList",
    getScoreList: e + "/cApi/sport-step/selectSportStepScore",
    updateSteps: "PUT " + e + "/cApi/sport-step/updatAddress",
    getScoreSetting: e + "/cApi/sport-step/getSportStepScore",
    getLeaderList: e + "/api/UniversityStudentOrgan/GetOneTeacherBaseList",
    applysportStep: "POST " + e + "/cApi/sport-step/applysportStep"
};