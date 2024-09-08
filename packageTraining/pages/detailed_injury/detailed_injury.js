Page({
  data: {
    images: [
      '/packageTraining/images/detailed_injury/freecompress-新闻-1.png',
      '/packageTraining/images/detailed_injury/freecompress-正在开发.png'
    ],

  },

  onLoad: function () {
    // Do something when page load.
  },

  navigateTo: function (e) {
    const target = e.currentTarget.dataset.target;
    wx.navigateTo({
      url: `/packageTraining/pages/${target}/${target}`
    });
  }
})
