// pages/index/index.js
const AV = require("../../../libs/av-core-min.js")
const app= getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:"",
    password:"",
  },

  // 用户名输入触发事件
  inputUsername(e) {
    this.setData({
      username:e.detail.value
    })
  },

  // 密码输入触发事件
  inputPassword(e) {
    this.setData({
      password:e.detail.value
    })
  },

  // 跳转到注册页面
  toRegister(){
    wx.navigateTo({
      url: '../register/register?username=' + this.data.username,
    })
  },

  login() {
    let username = this.data.username;
    let password = this.data.password;
    AV.User.logIn(username, password).then(
      (userLogged) => {
        wx.showToast({
          title: userLogged.attributes.username + " 欢迎登录",
          icon: "success"
        });
        wx.setStorageSync('username', username); // 保存用户名到本地存储

        // 直接使用setData更新全局状态
      app.globalData.isLogged = true;
        
        wx.switchTab({
          url: "/pages/profile/profile",
        });
      }, (error) => {
        wx.showToast({
          title: "登录失败",
          icon: "none"
        });
        console.error(JSON.stringify(error));
      }
    );
  }
})