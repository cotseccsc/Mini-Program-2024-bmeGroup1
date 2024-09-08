// index.js
const AV = require("../../../libs/av-core-min.js");
const quizState = new AV.Object("QuizState");
const personalInfo = new AV.Object("PersonalInfo");
const query1 = new AV.Query("QuizState");
const query2 = new AV.Query("PersonalInfo");

Page({
  data: {
    totalMedals: 4,
    earnedMedals: [],
    pendingMedals: [{
        id: 1,
        image: '/packageProfile/images/honor_info/铜牌.jpg',
        progress: 0,
        text: '知识问答中完成10道题目'
      },
      {
        id: 2,
        image: '/packageProfile/images/honor_info/银牌.jpg',
        progress: 0,
        text: '知识问答中完成20道题目'
      },
      {
        id: 3,
        image: '/packageProfile/images/honor_info/金牌.jpg',
        progress: 0,
        text: '知识问答中完成30道题目'
      },
      {
        id: 4,
        image: '/packageProfile/images/honor_info/volunteerMedal.jpg',
        progress: 0,
        text: '成为我们的志愿者'
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

  loadVolunteerData: function () {
    return new Promise((resolve, reject) => { // 返回一个新的 Promise
      const username = wx.getStorageSync('username');
      if (username) {
        query2.equalTo("Username", username);
        query2.first().then((personalInfo) => {
          if (personalInfo) {
            const m = personalInfo.get("IsVolunteer");
            this.setData({
              pendingMedals: this.data.pendingMedals.map(medal => {
                if (medal.id === 4) { // 假设id为4的是志愿者徽章
                  return { ...medal, progress: m ? 100 : 0 }; // 根据志愿者状态设置进度
                }
                return medal;
              })
            }, () => {
              resolve(); // 异步操作完成后调用 resolve
            });
          } else {
            resolve(); // 如果没有找到个人信息，也调用 resolve
          }
        }).catch((error) => {
          console.error('Error fetching volunteer data:', error);
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

  loadQuizData: function () {
    return new Promise((resolve, reject) => { // 返回一个新的 Promise
      const username = wx.getStorageSync('username');
      if (username) {
        query1.equalTo("Username", username);
        query1.first().then((quizState) => {
          if (quizState) {
            let a = quizState.get("CorrectNum");
            this.setData({
              pendingMedals: this.data.pendingMedals.map((medal) => {
                if (medal.id <= 3) { // 只更新 id 小于或等于 3 的勋章进度
                  let b = Math.round(100 * a / (10 * medal.id));
                  b = Math.min(b, 100);
                  return { ...medal, progress: b };
                }
                return medal; // 如果 id 大于 3，保持原进度不变
              })
            }, () => {
              resolve(); // 异步操作完成后调用 resolve
            });
          } else {
            resolve(); // 如果没有找到 quizState 信息，也调用 resolve
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
    Promise.all([
      this.loadVolunteerData(),
      this.loadQuizData()
      
    ]).then(() => {
      // 两个数据加载函数都完成后，检查并更新勋章
      this.checkMedals();
      console.log("Check Success!");
    }).catch((error) => {
      // 如果任何一个 Promise 失败，都会执行这里的代码
      console.error('Failed to load data:', error);
      wx.showToast({
        title: '加载数据失败',
        icon: 'error',
        duration: 2000,
      });
    });
  }
});