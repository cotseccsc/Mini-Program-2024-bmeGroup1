// pages/training/training.js
Page({
  data: {},

  onLoad: function () {
    // Do something when page load.
  },

  navigateTo: function (e) {
    const target = e.currentTarget.dataset.target;
    wx.navigateTo({
      url: `/pages/${target}/${target}`
    });
  }
})
