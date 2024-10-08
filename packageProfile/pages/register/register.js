// pages/index/index.js
const AV = require("../../../libs/av-core-min.js");
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: "",
    password: "",
  },

  // 用户名输入触发事件
  inputUsername(e) {
    this.setData({
      username: e.detail.value
    });
  },

  // 密码输入触发事件
  inputPassword(e) {
    this.setData({
      password: e.detail.value
    });
  },

  // 注册
  register() {
    let { username, password } = this.data;
    let user = new AV.User();
    let foundUser=new AV.User();
    let query = new AV.Query(AV.User);

    // 检查用户名是否已存在
    query.equalTo("username", username);
    query.first().then((foundUser) => {
      if (foundUser) {
        // 如果找到用户，说明用户名已存在
        wx.showToast({
          title: "用户名已存在，请选择其他用户名",
          icon: "none"
        });
      } else {
        // 用户名不存在，可以注册
        user.set("username", username);
        user.set("password", password);
        user.save().then(() => {
          wx.showToast({
            title: "注册成功",
            icon: "success"
          });
          wx.setStorageSync('username', username); // 保存用户名到本地存储
          app.globalData.isLogged = true;
          wx.switchTab({
            url: '/pages/profile/profile',
          });
        }).catch(error => {
          wx.showToast({
            title: error.message,
            icon: "none"
          });
        });
      }
    }).catch(error => {
      wx.showToast({
        title: "查询用户失败：" + error.message,
        icon: "none"
      });
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      username: options.username
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {}
});