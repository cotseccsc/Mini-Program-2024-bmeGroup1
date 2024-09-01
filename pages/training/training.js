const AV=require("../../libs/av-core-min.js");
const personalInfo=new AV.Object("PersonalInfo");
const quizState=new AV.Object("QuizState");
const query1=new AV.Query("PersonalInfo");
const query2=new AV.Query("QuizState");
const app=getApp();

Page({
  judgeVolunteer: function() {
    var volunteerEligible = 0;
    var volunteerWilling = 0;
    const username = wx.getStorageSync('username');
    //console.log(username);

    if (username && app.globalData.isLogged) {
      const query2Promise = query2.equalTo("Username", username).first();
      const query1Promise = query1.equalTo("Username", username).first();

      Promise.all([query2Promise, query1Promise]).then(([quizState, personalInfo]) => {
        if (quizState) {
          let a = quizState.get("CorrectNum");
          if (a >= 30) {
            volunteerEligible = 1;
            //console.log("eligiblity update success.");
          } else {
            volunteerEligible = 0;
          }
        }

        if (personalInfo) {
          let b = personalInfo.get("VolunteerWilling");
          if (b === '是') {
            volunteerWilling = 1;
            //console.log("willingness update success.");
          } else {
            volunteerWilling = 0;
          }

          //console.log(volunteerEligible);
          //console.log(volunteerWilling);
          if (volunteerWilling && volunteerEligible) {
            personalInfo.set("IsVolunteer", 1);
          } else {
            personalInfo.set("IsVolunteer", 0);
          }
          personalInfo.save();
        }
      }).catch((error) => {
        console.error("Error during querying: ", error);
      });
    }
  },
onShow:function(){
this.judgeVolunteer();
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
