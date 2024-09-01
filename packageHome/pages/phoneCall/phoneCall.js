const app = getApp();
const AV = require("../../../libs/av-core-min.js");
const emergencyContact = new AV.Object("EmergencyContact");
const personalInfo = new AV.Object("PersonalInfo");
const query1 = new AV.Query("EmergencyContact");
const query2 = new AV.Query("PersonalInfo");
Page({
  data: {
    eC1: '',
    eC2: '',
    showRadio: false, // 控制勾选栏显示
    showRadio0: false,
    showButtonA: false,
    showButtonB: false, // 控制按钮B显示
    options0: [{
        label: '玉泉校区',
        value: '玉泉校区'
      },
      {
        label: '紫金港校区',
        value: '紫金港校区'
      },
      {
        label: '之江校区',
        value: '之江校区'
      },
      {
        label: '华家池校区',
        value: '华家池校区'
      },
      {
        label: '西溪校区',
        value: '西溪校区'
      },
    ],
    options: [{
        label: '玉泉校区',
        value: '玉泉校区'
      },
      {
        label: '紫金港校区',
        value: '紫金港校区'
      },
      {
        label: '之江校区',
        value: '之江校区'
      },
      {
        label: '华家池校区',
        value: '华家池校区'
      },
      {
        label: '西溪校区',
        value: '西溪校区'
      },
    ],
    selectedOption0: '',
    selectedOptions: '',
    zyzPhoneNum: '',
    PhoneNum120: '',
    loginOrNot: 0
  },

  readContact: function () {
    const username = wx.getStorageSync('username');
    if (username && app.globalData.isLogged) {
      query1.equalTo("Username", username);
      query1.first().then((emergencyContact) => {
        if (emergencyContact) {
          let a = emergencyContact.get("EmerContact1");
          let b = emergencyContact.get("EmerContact2");
          this.setData({
            eC1: a,
            eC2: b,
          });
        }
      });
    }
  },

  searchVolunteer: function () {
    //获得用户填写的位置信息
    //console.log(this.data.selectedOptions);
    //如果存在是志愿者并且在同一校区的用户
    query2.equalTo("School", this.data.selectedOptions);
    query2.equalTo("IsVolunteer", 1);
    query2.find().then((personalInfo) => {
      if (personalInfo && personalInfo.length > 0) {
        //随机获得一个人的电话号码
        let randomperson = personalInfo[Math.floor(Math.random() * personalInfo.length)];
        let m = randomperson.get("Phone");
        //console.log(m);
        this.setData({
          zyzPhoneNum: m
        }, () => {
          // 确保 setData 完成后再执行 makePhoneCall
          this.makePhoneCall();
        });
      } else {
        wx.showModal({
          title: '404 Not Found',
          content: '您所在的校区没有志愿者!\r\n立即拨打同校区急救电话请按“拨打120”!\r\n否则请按取消!',
          cancelText: "取消",
          confirmText: "拨打120",
          confirmColor: '#ff0000',
          complete: (res) => {
            if (res.cancel) {}
            if (res.confirm) {
              switch (this.data.selectedOptions) {
                case '紫金港校区':
                  wx.makePhoneCall({
                    phoneNumber: '88981120',
                  });
                  break;
                case '玉泉校区':
                  wx.makePhoneCall({
                    phoneNumber: '87953120',
                  });
                  break;
                case '之江校区':
                  wx.makePhoneCall({
                    phoneNumber: '88201120',
                  });
                  break;
                case '西溪校区':
                  wx.makePhoneCall({
                    phoneNumber: '88201120',
                  });
                  break;
                case '华家池校区':
                  wx.makePhoneCall({
                    phoneNumber: '88201120',
                  });
                  break;
                default:
                  break;
              }
            }
          }
        });
      }
    });
  },

  onShow() {
    //登录了，loginOrNot给1，没登陆给0
    if (app.globalData.isLogged) {
      this.setData({
        loginOrNot: 1,
      });
    } else {
      this.setData({
        loginOrNot: 0,
      });
    }
    //读取用户的紧急联系人
    //将紧急联系人12分别给ec1以及ec2
    this.readContact();
  },

  makePhoneCall120() {
    this.setData({
      showRadio0: true
    })
  },

  makePhoneCall1() {

    if (this.data.loginOrNot === 0) {
      wx.showModal({
        cancelColor: '#ff0000',
        cancelText: '取消',
        confirmText: '去登录',
        content: '当前未登录，所以并没有紧急联系人电话，你是否要去登录？',
        showCancel: true,
        title: '当前未登录',
        success: (result) => {
          if (result.confirm) {
            wx.navigateTo({
              url: '/packageProfile/pages/login/login', //用户要去登录
            })
          }
        },

      })
    } else {
      wx.makePhoneCall({
        phoneNumber: this.data.eC1
      });
    }

  },

  makePhoneCall2() {
    if (this.data.loginOrNot === 0) {
      wx.showModal({
        cancelColor: '#ff0000',
        cancelText: '取消',
        confirmText: '去登录',
        content: '当前未登录，所以并没有紧急联系人电话，你是否要去登录？',
        showCancel: true,
        title: '当前未登录',
        success: (result) => {
          if (result.confirm) {
            wx.navigateTo({
              url: '/packageProfile/pages/login/login', //用户要去登录
            })
          }
        },

      })
    } else {
      wx.makePhoneCall({
        phoneNumber: this.data.eC2
      });
    }
  },

  makePhoneCallzyz() {
    this.setData({
      showRadio: true
    });
  },

  radioChange: function (e) {
    const selectedOption = e.detail.value;
    this.setData({
      selectedOptions: selectedOption,
      showButtonB: selectedOption !== '' // 如果有选项被选择，则显示按钮B
    }, () => {});
  },

  radioChange0: function (e) {
    const selectedOption0 = e.detail.value;
    this.setData({
      selectedOption0: selectedOption0,
      showButtonA: selectedOption0 !== '' // 如果有选项被选择，则显示按钮A
    });
  },

  makePhoneCall: function () {
    //selectOption里面有了选的校区
    //以下代码根据校区来给出要打的电话，在本地用if分支来作为示例，如果接入数据库的话在下面改动
    //上面都是根据选项给电话的过程示例就给两个校区
    wx.makePhoneCall({
      phoneNumber: this.data.zyzPhoneNum
    });
  },

  makePhoneCall0: function () {
    //selectOption0里面有了选的校区
    const Position = this.data.selectedOption0;
    if (Position === '玉泉校区') {
      this.setData({
        PhoneNum120: '87953120'
      })
    } else if (Position === '紫金港校区') {
      this.setData({
        PhoneNum120: '88981120'
      })
    } else if (Position === '西溪校区') {
      this.setData({
        PhoneNum120: '88201120'
      })
    } else if (Position === '之江校区') {
      this.setData({
        PhoneNum120: '88201120'
      })
    } else if (Position === '华家池校区') {
      this.setData({
        PhoneNum120: '88201120'
      })
    }
    //上面都是根据选项给电话的过程示例就给两个校区
    wx.makePhoneCall({
      phoneNumber: this.data.PhoneNum120
    });
  }
})