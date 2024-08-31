// pages/index/index.js
Page({
  data: {},
navigateToPhoneCall: function(){
  wx.navigateTo({
    url: '/packageHome/pages/phoneCall/phoneCall'
  });
},

  navigateToRapidGuide: function(){
    wx.navigateTo({
      url: '/packageHome/pages/rapidguide/rapidguide'
    });
  },
  navigateToTraining:function(){
    wx.switchTab({
      url: '/pages/training/training',
    })
  }
})
