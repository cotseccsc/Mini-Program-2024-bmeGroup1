// pages/about_us/about_us.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  copyLink() {
    wx.setClipboardData({
      data: 'https://github.com/cotseccsc/Mini-Program-2024-bmeGroup1',
      success: function () {
        wx.showToast({
          title: '复制成功',
          icon: 'success',
          duration: 2000
        })
      }
    });
  }


})