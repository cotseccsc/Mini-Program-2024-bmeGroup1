Page({
  // Navigate to the "training=1=info" interface
  navigateToInfo() {
    wx.navigateTo({
      url: '/packageTraining/pages/traininginfo/traininginfo'
    });
  },

  // Navigate to the "training=1=guide" interface
  navigateToGuide() {
    wx.navigateTo({
      url: '/packageTraining/pages/general-principles/general-principles'
    });
  },

  // Navigate to the "training=1=stretch" interface
  navigateToStretch() {
    wx.navigateTo({
      url: '/packageTraining/pages/prevention/prevention'
    });
  },

  // Navigate to the "training=1=aed" interface
  navigateToAed() {
    wx.navigateTo({
      url: '/packageTraining/pages/cpr-aed/cpr-aed'
    });
  },

  // Navigate to the "training=1=quiz" interface
  navigateToQuiz() {
    wx.navigateTo({
      url: '/packageTraining/pages/quiz/quiz'
    });
  },

  // Navigate to the "training=2=sporthurt" interface
  navigateToSportHurt() {
    wx.navigateTo({
      url: '/packageTraining/pages/detailed_injury/detailed_injury'
    });
  }
});
