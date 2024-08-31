
Page({
  data: {
    eC1: '123455666', 
    eC2: '' ,
    showRadio: false, // 控制勾选栏显示
    showButtonB: false,  // 控制按钮B显示
    options: [
      {
        label: '玉泉校区', value: '玉泉校区'
      },
      {
        label: '紫金港校区', value: '紫金港校区'
      },
      {
        label: '之江校区', value: '之江校区'
      },
      {
        label: '华家池校区', value: '华家池校区'
      },
      {
        label: '西溪校区', value: '西溪校区'
      },
    ],
    selectedOptions:  '',
    zyzPhoneNum:'',
    loginOrNot:0
  },

  onShow(){
    //读取用户的紧急联系人
    //将紧急联系人12分别给ec1以及ec2
    //登录了，loginOrNot给1，没登陆给0
  },

  makePhoneCall120(){
    wx.makePhoneCall({
      phoneNumber: '120'
    });
  },
  makePhoneCall1(){
    
    if(this.data.loginOrNot===0)
    {
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
              url: '/packageProfile/pages/login/login',//用户要去登录
            })
          } 
        },
        
      })
    }else{
      wx.makePhoneCall({
        phoneNumber: this.data.eC1
      });
    }

  },

  makePhoneCall2(){
    if(this.data.loginOrNot===0)
    {
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
              url: '/packageProfile/pages/login/login',//用户要去登录
            })
          } 
        },
        
      })
    }else{
      wx.makePhoneCall({
        phoneNumber: this.data.eC2
      });
    }
  },

  makePhoneCallzyz(){
    this.setData({
      showRadio: true
    });
  },

  radioChange: function(e) {
    const selectedOption = e.detail.value;
    this.setData({
      selectedOption: selectedOption,
      showButtonB: selectedOption !== '' // 如果有选项被选择，则显示按钮B
    });
  },

  makePhoneCall: function() {
    //selectOption里面有了选的校区
    const Position = this.data.selectedOption;
      //以下代码根据校区来给出要打的电话，在本地用if分支来作为示例，如果接入数据库的话在下面改动
      if(Position==='玉泉校区'){
        this.setData({
          zyzPhoneNum:'19550132523'
        })
      }else if(Position==='紫金港校区')
      {
        this.setData({
          zyzPhoneNum:'15167617377'
        })
      }
      //上面都是根据选项给电话的过程示例就给两个校区
      wx.makePhoneCall({
        phoneNumber: this.data.zyzPhoneNum
      });
  }

})