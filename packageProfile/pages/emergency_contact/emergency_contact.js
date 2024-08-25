// pages/emergency_contact/emergency_contact.js
const AV = require("../../../libs/av-core-min.js");
const EmergencyContact = AV.Object.extend("EmergencyContact");
const emergencyContact=new EmergencyContact();
const query = new AV.Query("EmergencyContact");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: {
      eC1: '', // 初始化a为空字符串
      eC2: '' // 初始化b为空字符串
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.readFromLeancloud();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  navigateToModify: function() {
    wx.navigateTo({
      url: '/packageProfile/pages/emergency_contact_modify/emergency_contact_modify'
    });
  },
  makePhoneCall1: function() {
    
    if (this.data.eC1) {
      wx.makePhoneCall({
        phoneNumber: this.data.eC1
      });
    } else {
      wx.showToast({
        title: '紧急联系人电话为空',
        icon: 'none'
      });
    }
  },
  makePhoneCall2: function() {
    
    if (this.data.eC2) {
      wx.makePhoneCall({
        phoneNumber: this.data.eC2
      });
    } else {
      wx.showToast({
        title: '紧急联系人2电话为空',
        icon: 'none'
      });
    }
  },

  readFromLeancloud: function(){
    const that = this;
    const username = wx.getStorageSync('username');
query.equalTo("Username", username);
query.first().then((emergencyContact) => {
  if (emergencyContact) {
    const a = emergencyContact.get('EmerContact1');
    const b = emergencyContact.get('EmerContact2');
    that.setData({
      eC1: a || 'No data', // 如果 a 是 undefined，显示 'No data'
      eC2: b || 'No data' // 如果 b 是 undefined，显示 'No data'
    });
  } else {
    // 如果没有找到 emergencyContact，设置默认值
    that.setData({
      eC1: 'No data',
      eC2: 'No data'
    });
  }
});
  }
  
  
})
