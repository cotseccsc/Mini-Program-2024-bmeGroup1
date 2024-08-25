// pages/emergency_contact_modify/emergency_contact_modify.js
const AV = require("../../../libs/av-core-min.js");
const EmergencyContact = AV.Object.extend("EmergencyContact");
const emergencyContact = new EmergencyContact();
const newEmergencyContact = new EmergencyContact();
const query = new AV.Query("EmergencyContact");
Page({
  data: {
    newEmergencyContactNumber1: '', // 用于存储用户输入的新紧急联系人电话
    newEmergencyContactNumber2: ''
  },
  // 生命周期函数-监听页面加载
  onLoad: function (options) {
    // 这里可以获取页面参数或做其他初始化工作
  },

  onShow: function(){
  },
  // 输入框内容变化时的处理函数
  newEmergencyContactNumberChange1: function (e) {
    this.setData({
      newEmergencyContactNumber1: e.detail.value
    });
  },
  newEmergencyContactNumberChange2: function (e) {
    this.setData({
      newEmergencyContactNumber2: e.detail.value
    });
  },

//确认修改按钮绑定数据库
  confirmModify: function () {

    //获取用户名信息
    const username = wx.getStorageSync('username');

    //载入输入框中的值
    const a=this.data.newEmergencyContactNumber1;
    const b=this.data.newEmergencyContactNumber2;
    //存数据库
    //存之前首先要查，有没有用户名一致的情况，这种情况不再次增加数据库内容
    query.equalTo("Username", username);
    query.first().then((emergencyContact) => {
      if(emergencyContact){
        emergencyContact.set("EmerContact1",a);
        emergencyContact.set("EmerContact2",b);
        emergencyContact.save().then(
          (emergencyContact) => {
            //保存成功
            wx.showToast({
              title: '设置保存成功！',
              icon:'success'
            });
          },
        );
      }
      else {
        newEmergencyContact.set("Username",username);
        newEmergencyContact.set("EmerContact1",a);
        newEmergencyContact.set("EmerContact2",b);
        newEmergencyContact.save().then(
          (newEmergencyContact) => {
            //保存成功
            wx.showToast({
              title: '设置保存成功！',
              icon:'success'
            });
          },
        );
      }
    });
  }

});