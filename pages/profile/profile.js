// pages/profile/profile.js
const app = getApp();

Page({
  data: {
    username: '',
    isLogged: false, // 初始化页面数据
  },
  onLoad: function() {
    wx.showTabBar();
    // 从本地存储获取用户名

    // 从全局获取登录状态
    this.setData({
      isLogged: app.globalData.isLogged
    });
  },

  onShow: function() {
    const username = wx.getStorageSync('username');
    if (username) {
      this.setData({
        username
      });
    }
    this.setData({
      isLogged: app.globalData.isLogged
    });
  },

  showLoginPromptAndRedirect: function() {
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

  ExitLogin:function(){
    app.globalData.isLogged = false;
    this.setData({
      isLogged: false,
    });
    wx.switchTab({
      url: '/pages/profile/profile',
    });
  },

  navigateToLogin() {
    wx.navigateTo({
      url: '/pages/login/login'
    });
  },

  navigateToPersonalInfo() {
    wx.navigateTo({
      url: '/pages/personal_info/personal_info'
    });
  },

  navigateToEmergencyContact() {
    wx.navigateTo({
      url: '/pages/emergency_contact/emergency_contact'
    });
  },

  navigateToHonorInfo() {
    wx.navigateTo({
      url: '/pages/honor_info/honor_info'
    });
  },

  navigateToVolunteerCabin() {
    wx.navigateTo({
      url: '/pages/volunteer_cabin/volunteer_cabin'
    });
  },

  navigateToFeedback() {
    wx.navigateTo({
      url: '/pages/feedback/feedback'
    });
  },

  navigateToRedCross() {
    wx.navigateTo({
      url: '/pages/red_cross/red_cross'
    });
  },

  navigateToAboutUs() {
    wx.navigateTo({
      url: '/pages/about_us/about_us'
    });
  }
})