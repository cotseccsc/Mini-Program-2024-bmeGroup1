// pages/quiz/quiz.js
const AV = require("../../../libs/av-core-min.js");
const QuizState = AV.Object.extend("QuizState");
const quizState = new QuizState();
const newQuizState = new QuizState();
const query = new AV.Query("QuizState");

Page({

  data: {
    select: "",
    status: "",
    isDisabled: false,
    list: [{
        title: "1 + 1 = ?",
        option: ["2", "4", "6", "8"],
        answer: "A",
        answeredCorrectly: false,
      }, {
        title: "2 + 2 = ?",
        option: ["2", "4", "6", "8"],
        answer: "A",
        answeredCorrectly: false,
      }, {
        title: "3 + 3 = ?",
        option: ["2", "4", "6", "8"],
        answer: "A",
        answeredCorrectly: false,
      }, {
        title: "4 + 4 = ?",
        option: ["2", "4", "6", "8"],
        answer: "A",
        answeredCorrectly: false,
      }, {
        title: "5 + 5 = ?",
        option: ["2", "4", "6", "8"],
        answer: "A",
        answeredCorrectly: false,
      },

    ],
    answerNow: 0, //第一道题目的answerNow的值是0，从0开始的，数据库如果第一条是1，要注意
    optionList: ["A", "B", "C", "D"],
    successNum: 0,
    failNum: 0,
    nextIndex: -1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onShow(options) {
    /*quizState.set("Username","sincostan");
    quizState.set("BeginNum",0);
    quizState.set("0",0);
    quizState.set("1",0);
    quizState.set("2",0);
    quizState.set("3",0);
    quizState.set("4",0);
    quizState.save();*/


    const username = wx.getStorageSync('username');
    if (username) {
      query.equalTo("Username", username);
      query.first().then((quizState) => {
        if (quizState) {
          const b = quizState.get("CorrectNum");
          const c = quizState.get("BeginNum");
          const cstring = c+"";
          const d = quizState.get(cstring);
          // 判定是否全部答对，b的具体判断条件应跟随题目总数的改变而修改
          if (b >= this.data.list.length && d) {
            quizState.set("BeginNum", 0);
            for(let i=0;i< this.data.list.length; i++)
            {
              let istring=i+"";
              quizState.set(istring,0);
            }
                  /*quizState.set("0", 0);
                  quizState.set("1", 0);
                  quizState.set("2", 0);
                  quizState.set("3", 0);
                  quizState.set("4", 0);*/
                  quizState.save();
            wx.showModal({
              title: "恭喜您已经完成所有题目！",
              content: "请问您要再温习一遍吗？(您的答题进度已经被保存，您在此处的选择不会影响您的答题进度)",
              cancelText: "不要",
              confirmText: "要",
              complete: (res) => {

                if (res.cancel) {
                  wx.switchTab({
                    url: '/pages/training/training',
                  });

                }
                if (res.confirm) { 
                }
              }
            })
          }

          const a= quizState.get("BeginNum");

          for(let j=0; j< this.data.list.length; j++)
          {
          let jstring=j+"";
          const m=quizState.get(jstring);
          let n=false;
          if(m){
            n=true;
          }
          this.setData({
          [`list[${j}].answeredCorrectly`]: n
          });
          }

          this.setData({
            answerNow: a
          });
        } 
        
        
        else {
          newQuizState.set("Username", username);
          newQuizState.set("BeginNum", 0);
          newQuizState.set("CorrectNum",0);
          for(let i=0;i< this.data.list.length; i++)
            {
              let istring=i+"";
              newQuizState.set(istring,0);
            }
          /*newQuizState.set("0", 0);
          newQuizState.set("1", 0);
          newQuizState.set("2", 0);
          newQuizState.set("3", 0);
          newQuizState.set("4", 0);*/
          newQuizState.save();
        }
      });
    }

    //读取用户各个题目的答题情况
    //读取开始的题目标号给answerNow
  },

  selectAnswer(e) {
    if(!this.data.isDisabled){
      this.setData({
        isDisabled: true
      });
      const {
        item
      } = e.currentTarget.dataset;
      const currentIndex = this.data.answerNow;
      const nextQuestion = this.findNextQuestion();
      const answer = this.data.list[this.data.answerNow].answer;
      
  
      if (item === answer) {
        // 正确
        this.setData({
          select: item,
          status: "success",
          successNum: this.data.successNum + 1,
        });
        
  
        const username = wx.getStorageSync('username');
        if (username) {
          let x = this.data.answerNow + "";
          query.equalTo("Username", username)
          query.first().then((quizState) => {
            if (quizState) {
              quizState.set(x, 1);
              quizState.save();
              const c = quizState.get("CorrectNum");
              if (c < 5) {
                quizState.increment("CorrectNum", 1);
                quizState.save();
              } else {}
            }
          });
        }
      } else {
        // 错误
        this.setData({
          select: item,
          status: "fail",
          failNum: this.data.failNum + 1
        });
  
        if (this.data.nextIndex === -1) {
          this.setData({
            nextIndex: this.data.answerNow,
            //将下一次需要开始的错题题号数据同步到数据库
          });
          const username = wx.getStorageSync('username');
          if (username) {
            query.equalTo("Username", username)
            query.first().then((quizState) => {
              if (quizState) {
                quizState.set("BeginNum", this.data.nextIndex);
                quizState.save();
              }
            });
          }
        }
      }
      
      if (nextQuestion === -1) {
        wx.showModal({
          title: "本次答题结束",
          content: `你回答对了 ${this.data.successNum} 道题目；答错了 ${this.data.failNum}道题目，加油！`,
          showCancel: false,
          success: () => {
            wx.switchTab({
              url: '/pages/training/training',
            })
          }
        });
      } else {
        setTimeout(() => {
          this.setData({
            answerNow: nextQuestion,
            status: "",
            select: "",
            isDisabled:false,
          })
        }, 500);
      }
    }



  },

  findNextQuestion() {
    for (let i = this.data.answerNow + 1; i < this.data.list.length; i++) {
      if (!this.data.list[i].answeredCorrectly) {
        return i;
      }
    }
    return -1;
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})