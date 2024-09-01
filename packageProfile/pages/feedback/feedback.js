const AV=require("../../../libs/av-core-min.js");
const ProgramFeedback=AV.Object.extend("ProgramFeedback");
const programFeedback=new ProgramFeedback();

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
  },

  sendFeedback() {
    const { opinion, rating, email } = this.data.feedback;
    if (opinion.trim() === '' || rating.trim() === '' || email.trim() === '') {
      wx.showToast({
        title: '请填写完整的反馈信息',
        icon: 'none'
      });
      return;
    }
    // 这里可以添加发送反馈信息到服务器的代码
    programFeedback.set("Opinion",this.data.feedback.opinion);
    programFeedback.set("Rating",this.data.feedback.rating);
    programFeedback.set("Email",this.data.feedback.email);
    programFeedback.save();

    // 显示发送成功的弹窗
    wx.showToast({
      title: '反馈发送成功！',
      icon: 'success',
      duration: 2000,
      complete: () => {
        // 延迟一段时间后重新加载页面
        setTimeout(() => {
          wx.switchTab({
            url: '/pages/profile/profile'
          });
        }, 2000);
      }
    });
  },

  goToFacilityMapInfo() {
    wx.navigateTo({
      url: '/packageProfile/pages/facilitymapinfo/facilitymapinfo'
    });
  }
});