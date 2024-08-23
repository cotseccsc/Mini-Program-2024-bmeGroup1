Page({
  // Navigate to the "training=1=info" interface
  navigateToInfo() {
    wx.navigateTo({
      url: '/pages/traininginfo/traininginfo'
    });
  },

  // Navigate to the "training=1=guide" interface
  navigateToGuide() {
    wx.navigateTo({
      url: '/pages/general-principles/general-principles'
    });
  },

  // Navigate to the "training=1=stretch" interface
  navigateToStretch() {
    wx.navigateTo({
      url: '/pages/prevention/prevention'
    });
  },

  // Navigate to the "training=1=aed" interface
  navigateToAed() {
    wx.navigateTo({
      url: '/pages/cpr-aed/cpr-aed'
    });
  },

  // Navigate to the "training=1=quiz" interface
  navigateToQuiz() {
    wx.navigateTo({
      url: '/pages/quiz/quiz'
    });
  },

  // Navigate to the "training=2=sporthurt" interface
  navigateToSportHurt() {
    wx.navigateTo({
      url: '/pages/detailed_injury/detailed_injury'
    });
  }
});
