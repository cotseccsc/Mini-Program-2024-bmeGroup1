// app.js

const AV = require("./libs/av-core-min.js");
const adapters = require("./libs/leancloud-adapters-weapp.js");



AV.setAdapters(adapters);
AV.init({
  appId: "TrWcvqLpLXVq15lEg0KNEfxa-gzGzoHsz",
  appKey: "xiPiX1xNylyJpEWUb7Y8Ko6g",
  serverURL: "https://trwcvqlp.lc-cn-n1-shared.com",
});

 




App({
 async onLaunch() {

    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)


    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })

  },
  globalData: {
    userInfo: null,
    isLogged: false
  },
  
  

})
