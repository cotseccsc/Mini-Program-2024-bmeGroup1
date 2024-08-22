// pages/profile/profile.js
Page({
  data: {},
  onLoad: function () {
    // Do something when page load.
  },
  navigateToLogin() {
    wx.navigateTo({
      url: '/pages/login/login'
    });
  },

  navigateToPersonalInfo() {
    wx.navigateTo({
      url: '/pages/personal_info/personal_info'
    });
  },

  navigateToEmergencyContact() {
    wx.navigateTo({
      url: '/pages/emergency_contact/emergency_contact'
    });
  },

  navigateToHonorInfo() {
    wx.navigateTo({
      url: '/pages/honor_info/honor_info'
    });
  },

  navigateToVolunteerCabin() {
    wx.navigateTo({
      url: '/pages/volunteer_cabin/volunteer_cabin'
    });
  },

  navigateToFeedback() {
    wx.navigateTo({
      url: '/pages/feedback/feedback'
    });
  },

  navigateToRedCross() {
    wx.navigateTo({
      url: '/pages/red_cross/red_cross'
    });
  },

  navigateToAboutUs() {
    wx.navigateTo({
      url: '/pages/about_us/about_us'
    });
  }
})