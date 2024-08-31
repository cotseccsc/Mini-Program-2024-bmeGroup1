// index.js
const AV = require("../../../libs/av-core-min.js");
const quizState = new AV.Object("QuizState");
//const MedalInfo = AV.Object.extend("MedalInfo");
//const medalInfo = new MedalInfo();
//const newMedalInfo = new MedalInfo();
const query1 = new AV.Query("QuizState");
//const query2 = new AV.Query("MedalInfo");
Page({
  data: {
    totalMedals: 3,
    earnedMedals: [],
    pendingMedals: [{
        id: 1,
        image: '/packageProfile/images/honor_info/铜牌.jpg',
        progress: 0
      },
      {
        id: 2,
        image: '/packageProfile/images/honor_info/银牌.jpg',
        progress: 0
      },
      {
        id: 3,
        image: '/packageProfile/images/honor_info/金牌.jpg',
        progress: 0
      }
    ]
  },

  checkMedals: function () {
    let earnedMedals = this.data.earnedMedals;
    let pendingMedals = this.data.pendingMedals.filter(medal => {
      if (medal.progress >= 100) {
        earnedMedals.push(medal);
        return false;
      }
      return true;
    });
    this.setData({
      earnedMedals: earnedMedals,
      pendingMedals: pendingMedals
    });
  },

  loadQuizData: function () {
    return new Promise((resolve, reject) => { // 返回一个新的 Promise
      const username = wx.getStorageSync('username');
      if (username) {
        query1.equalTo("Username", username);
        query1.first().then((quizState) => {
          if (quizState) {
            let a = quizState.get("CorrectNum");
            console.log(a);
            for (let i = 0; i < this.data.pendingMedals.length; i++) {

              let c = 100 * a / (10 * i + 10);
              let b = Math.round(c);
              if (b > 100) {
                b = 100;
              }
              this.setData({
                [`pendingMedals[${i}].progress`]: b
              });
            }
            resolve(); // 异步操作完成后调用 resolve
          }
        }).catch((error) => {
          console.error('Error fetching quiz state:', error);
          reject(error); // 出错时调用 reject
        });
      } else {
        wx.showToast({
          title: 'Unexpected Error.',
          icon: 'error',
          duration: 2000,
        });
        reject('No username found'); // 没有找到 username 时调用 reject
      }
    });
  },

 onLoad: function () {
  this.loadQuizData().then(() => { // 等待 loadQuizData 完成后再执行
    // 此时 pendingMedals 已经更新，可以进行 checkMedals 操作
    for (let i = 0; i < this.data.pendingMedals.length; i++) {
      console.log(this.data.pendingMedals[i].progress);
    }
    this.checkMedals();
  }).catch((error) => {
    console.error('Failed to load quiz data:', error);
  });
  }
});