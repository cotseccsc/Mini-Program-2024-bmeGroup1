Page({
  data: {
    feedback: {
      opinion: '',
      rating: '',
      email: ''
    }
  },

  bindOpinionInput(event) {
    this.setData({
      'feedback.opinion': event.detail.value
    });
  },

  bindRatingInput(event) {
    this.setData({
      'feedback.rating': event.detail.value
    });
  },

  bindEmailInput(event) {
    this.setData({
      'feedback.email': event.detail.value
    });
  },

  copyEmail() {
    wx.setClipboardData({
      data: '3220103675@zju.edu.cn',
      success: function () {
        wx.showToast({
          title: '复制成功',
          icon: 'success',
          duration: 2000
        })
      }
    });
  }
});
