Page({
  data: {
    // 初始化数据
  },
  copyLink: function(event) {
    var link = event.currentTarget.dataset.url;
    wx.setClipboardData({
      data: link,
      success: function() {
        wx.showToast({
          title: '链接已复制',
          icon: 'success',
          duration: 2000
        })
      }
    });
  },
  callPhone: function(event) {
    var phone = event.currentTarget.dataset.phone;
    wx.makePhoneCall({
      phoneNumber: phone
    });
  },
  openLink: function(event) {
    var url = event.currentTarget.dataset.url;
    wx.navigateTo({
      url: '/pages/webview/webview?url=' + encodeURIComponent(url)
    });
  }
})