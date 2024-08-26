// pages/profile/profile.js
const app = getApp();
const AV = require("../../libs/av-core-min.js");
const PersonalInfo = AV.Object.extend("PersonalInfo");
const personalInfo = new PersonalInfo();
const query = new AV.Query("PersonalInfo");
Page({
  data: {
    username: '',
    isLogged: false, // 初始化页面数据
    avatarSwitch: '/images/profile/selfavatar.png' // 用户头像位置
  },
  onLoad: function () {
    wx.showTabBar();
    // 从本地存储获取用户名

    // 从全局获取登录状态
    this.setData({
      isLogged: app.globalData.isLogged
    });
  },

  onShow: function () {
    const username = wx.getStorageSync('username');
    if (username) {
      this.setData({
        username
      });
    }
    this.setData({
      isLogged: app.globalData.isLogged
    });
    this.readGender();
  },

  showLoginPromptAndRedirect: function () {
    wx.showModal({
      title: '提示',
      content: '请注册或登录！',
      showCancel: false, // 不显示取消按钮
      success: (res) => {
        if (res.confirm) {
          console.log('用户点击确定');
          // 用户点击确定后立即跳转到登录页面
          this.navigateToLogin();
        }
      }
    });
  },

  navigateRedirect() {
    this.showLoginPromptAndRedirect();
  },

  ExitLogin: function () {
    app.globalData.isLogged = false;
    this.setData({
      isLogged: false,
    });
    wx.switchTab({
      url: '/packageProfile/pages/profile/profile',
    });
  },

  navigateToLogin() {
    wx.navigateTo({
      url: '/packageProfile/pages/login/login'
    });
  },

  navigateToPersonalInfo() {
    wx.navigateTo({
      url: '/packageProfile/pages/personal_info/personal_info'
    });
  },

  navigateToEmergencyContact() {
    wx.navigateTo({
      url: '/packageProfile/pages/emergency_contact/emergency_contact'
    });
  },

  navigateToHonorInfo() {
    wx.navigateTo({
      url: '/packageProfile/pages/honor_info/honor_info'
    });
  },

  navigateToVolunteerCabin() {
    wx.navigateTo({
      url: '/packageProfile/pages/volunteer_cabin/volunteer_cabin'
    });
  },

  navigateToFeedback() {
    wx.navigateTo({
      url: '/packageProfile/pages/feedback/feedback'
    });
  },

  navigateToRedCross() {
    wx.navigateTo({
      url: '/packageProfile/pages/red_cross/red_cross'
    });
  },

  navigateToAboutUs() {
    wx.navigateTo({
      url: '/packageProfile/pages/about_us/about_us'
    });
  },


  readGender: function () {
    this.setData({
      avatarSwitch:'/images/profile/selfavatar.png'
    });
    const username = wx.getStorageSync('username');
    query.equalTo("Username", username);
    query.first().then((personalInfo) => {
      if (personalInfo) {
        const gender = personalInfo.get("Gender");
        let newAvatarSwitch;
        switch (gender) {
          case '女':
            newAvatarSwitch = '/images/profile/selfavatar-female.png'
            break;
          case '男':
            newAvatarSwitch = '/images/profile/selfavatar-male.png';
            break;
          default:
            newAvatarSwitch = '/images/profile/selfavatar.png';
            break;
        }
        // 使用setData的回调函数来确保数据更新后执行
        this.setData({
          avatarSwitch: newAvatarSwitch
        }, () => {
          // 这里可以安全地使用更新后的avatarSwitch
          console.log(this.data.avatarSwitch); // 这将打印更新后的值
        });
      }
    });
  }
})