// pages/profile/profile.js
const app = getApp();
const AV = require("../../libs/av-core-min.js");
const PersonalInfo = AV.Object.extend("PersonalInfo");
const personalInfo = new PersonalInfo();
const query = new AV.Query("PersonalInfo");
const quizState=new AV.Object("QuizState");
const query1=new AV.Query("PersonalInfo");
const query2=new AV.Query("QuizState");
Page({
  data: {
    username: '',
    isLogged: false, // 初始化页面数据
    avatarSwitch: '/images/profile/selfavatar.png' // 用户头像位置
  },

  judgeVolunteer: function() {
    var volunteerEligible = 0;
    var volunteerWilling = 0;
    const username = wx.getStorageSync('username');
    //console.log(username);

    if (username && app.globalData.isLogged) {
      const query2Promise = query2.equalTo("Username", username).first();
      const query1Promise = query1.equalTo("Username", username).first();

      Promise.all([query2Promise, query1Promise]).then(([quizState, personalInfo]) => {
        if (quizState) {
          let a = quizState.get("CorrectNum");
          if (a >= 30) {
            volunteerEligible = 1;
            //console.log("eligiblity update success.");
          } else {
            volunteerEligible = 0;
          }
        }

        if (personalInfo) {
          let b = personalInfo.get("VolunteerWilling");
          if (b === '是') {
            volunteerWilling = 1;
            //console.log("willingness update success.");
          } else {
            volunteerWilling = 0;
          }

          //console.log(volunteerEligible);
         //console.log(volunteerWilling);
          if (volunteerWilling && volunteerEligible) {
            personalInfo.set("IsVolunteer", 1);
          } else {
            personalInfo.set("IsVolunteer", 0);
          }
          personalInfo.save();
        }
      }).catch((error) => {
        console.error("Error during querying: ", error);
      });
    }
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
    this.judgeVolunteer();
  },

  showLoginPromptAndRedirect: function () {
    wx.showModal({
      title: '提示',
      content: '请注册或登录！',
      showCancel: false, // 不显示取消按钮
      success: (res) => {
        if (res.confirm) {
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
    // 退出登录时清除本地存储中的用户名信息
    wx.removeStorage('username');
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
        });
      }
    });
  }
})