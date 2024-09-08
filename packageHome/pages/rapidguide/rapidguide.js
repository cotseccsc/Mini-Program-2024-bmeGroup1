// pages/quiz/quiz.js
Page({

  data: {
    select: "",
    status: "",
    list: [
      {
        id:"0",
        title:
        // &nbsp;&nbsp;&nbsp;&nbsp;
          "请根据下述操作判断伤者是否有生命体征:\n1、检查呼吸：看胸口或腹部是否有起伏。\n2、检查脉搏：在手腕内侧靠近拇指一侧，用同样的方法检查是否有脉搏。\n3、检查意识：轻拍肩膀或大声呼唤，看是否有如眨眼、说话等反应。",
        //  image:["/images/index/急救指导logo.png"],
        option:["有","没有"],
      }, {
        id:"1",
        title:"是否出现暴露外伤（破皮、出血等）？",
        // 如果有需要对伤者先做伤口处理，如果没有将进入伤者伤处疼痛部位选择
        option:["有外伤","没有","运动过程中突然晕倒","回到上一级"],
      }, {
        id:"2",
        title:"较浅、小、干净伤口，可用碘酊或其它消毒，然后用创可贴或消毒纱布覆盖。\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;较大、深、不洁伤口，应现场加压包扎后送医院进行清创、止血等处理。",
        option:["若外伤处理完成，请指明伤者的疼痛部位，以获取进一步指导","回到上一级"],

      }, {
        id:"3",
        title:"需要进行心肺复苏和使用AED",
        option:["跳转至心肺复苏AED教程->"],

      }, {
        id:"4",
        title:"请根据下方示意图，选择伤者的受伤部位：",
        image:["/packageHome/images/body.png"],
        option:["头部","上肢","下肢","躯干"],

      },
      {
        id:"5",
        title:"伤者是否因为脑部受创，处于昏迷晕倒或者具有头疼头晕的状态？",
        option:["是","否"],
      },{
        id:"6",
        title:"伤者此时可能处于脑震荡。\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请立即让伤者平卧，保持安静，严禁摇动、牵扯、移动伤者位置。头部两侧用衣物填塞，以免左右摇晃，同时用毛巾浸湿冷敷头部。\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;若伤者神志不清，可用手指掐人中、合谷（食指和大拇指虎口肌肉处）等穴，使其苏醒，并等待救护车。",      
        option:["返回上一级","返回伤处选择"],
      },
      {
        id:"7",
        title:"若其意识清醒，伤口小、浅、干净，可用碘酊消毒，并用创可贴或消毒纱布覆盖。\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;较大、深、不洁伤口，应现场加压包扎后送医院进行清创、止血等处理。",      
        option:["返回上一级","返回伤处选择"],
      },{
        id:"8",
        title:"伤者是否有明显骨痛错位症状？",      
        option:["是","否","回到伤处选择"],
      },{
        id:"9",
        title:"伤者受伤部位是否在大腿小腿脚掌部位？",      
        option:["是","不是，在踝关节部位","返回伤处选择"],
      },{
        id:"10",
        title:"伤者可能为关节脱位、骨折等严重伤害。在获得医疗救助之前，请对伤者：\n1、用临时夹板、吊带或垫子对患肢进行固定和支撑；\n2、尽可能将患肢抬高到心脏水平以上，减轻肿胀；\n3、用冰块（毛巾或衣物包裹）缓解疼痛和肿胀。",      
        option:["返回上一级","返回伤处选择"],
      },{
        id:"11",
        title:"伤者可能遭受闭合性软组织损伤，包括但不限于腱鞘炎、肩周炎、肌肉或韧带拉伤。\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请立即对受伤部位进行冷敷，实施加压包扎，抬高患肢，并避免任何运动。在完成初步处理后，务必尽快就医，以便获得进一步的医疗评估和治疗。",      
        option:["回到上一级","返回伤处选择"],
      },{
        // 检查到这个部分
        id:"12",
        title:"伤者踝关节受伤，应立即抬高受伤的脚、冷敷，以减少局部血肿，若扭伤十分严重，存在骨折或脱位现象，需等待送医进一步治疗",      
        option:["回到上一级","返回伤处选择"],
      },{
        id:"13",
        title:"伤者的躯干是哪一部分感到疼痛？",      
        option:["胸部","背部","腰部","腹部"],
      },{
        id:"14",
        title:"关于疼痛的强度，请问是轻微不断的疼痛还是剧烈难忍的疼痛？",      
        option:["轻微疼痛","剧烈疼痛","返回上一级"],
      },{
        id:"15",
        title:"伤者背部疼痛，按部位请问是肌肉疼痛还是脊柱骨头疼？",      
        option:["肌肉疼痛","脊柱疼痛","返回上一级"],
      },{
        id:"16",
        title:"伤者腰部，按部位是肌肉疼痛还是腰椎骨疼？",      
        option:["肌肉疼痛","腰部骨头疼痛","返回上一级"],
      },{
        id:"17",
        title:"如果腹部疼痛，在一般运动下，通常为运动式的腹痛。如果受创严重不排除内脏受到损伤。\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在正常的运动过程中，腹痛请尝试放慢速度、深呼吸、调节呼吸节奏，用手轻轻按压疼痛区域，做一些轻柔的拉伸和放松活动。\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果仍然剧烈疼痛不止，在专业医疗人员到达之前，不要自行给患者服用止痛药或其他药物，以免掩盖症状或导致病情恶化。",      
        option:["返回疼痛部位选择","返回伤处选择"],
      },{
        id:"18",
        title:"伤者可能为肋间肌肉炎症。在受伤部位使用冷敷（如冰袋）以减轻肿胀和疼痛，但应避免直接接触皮肤。尽量避免使用受伤的肌肉。\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果疼痛允许，可以轻柔地拉伸肋间肌肉，但避免剧烈动作。",      
        option:["返回上一级","返回疼痛部位选择","返回伤处选择"],
      },{
        id:"19",
        title:"伤者的疼痛部位位于胸外还是胸内？",      
        option:["胸外肋骨部位","胸内剧烈疼痛，或者伤者有哮喘等","返回上一级"],
      },{
        id:"20",
        title:"伤者可能受到胸部创伤导致肋骨骨折、断裂。\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请让患者让患者采取半坐姿或斜倚姿势，以减轻呼吸时的疼痛。\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;受伤部位使用冷敷（如冰袋）以减轻肿胀和疼痛，但避免直接接触皮肤。尽量避免深呼吸和剧烈咳嗽，可以用枕头或毛巾轻轻按压胸部以减轻疼痛。",      
        option:["返回上一级","返回疼痛部位选择","返回伤处选择"],
      },{
        id:"21",
        title:"伤者可能是肺部挫伤、气胸、运动性哮喘。\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请让患者保持半坐位或半卧位，这有助于呼吸并等待就医。\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;伤者本身有哮喘等疾病，可能会随身携带药物，请你帮助取出并为患者服下。",      
        option:["返回上一级","返回疼痛部位选择","返回伤处选择"],
      },{
        id:"22",
        title:"伤者可能为肌肉拉伤或者局部炎症。\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;受伤部位使用冷敷（如冰袋）以减轻肿胀和疼痛，避免直接接触皮肤，并尽量避免使用受伤的肌肉。                       ",      
        option:["返回上一级","返回疼痛部位选择","返回伤处选择"],
      },{
        id:"23",
        title:"伤者可能发生了侧弯滑脱或压缩性的脊柱骨折。\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请在疼痛部位进行冷敷，避免直接接触皮肤，同时避免一切可能导致脊柱扭转和弯曲的动作，保持脊柱尽量中立，等待送医。",      
        option:["返回上一级","返回疼痛部位选择","返回伤处选择"],
      },{
        id:"24",
        title:"伤者可能为腰部肌肉拉伤或者局部炎症。\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请在受伤部位使用冷敷（如冰袋），避免直接接触皮肤，尽量避免使用受伤的肌肉。",      
        option:["返回上一级","返回疼痛部位选择","返回伤处选择"],
      },{
        id:"25",
        title:"伤者可能为椎间骨突出或骨折。疼痛可能放射到腿部，伴有麻木磁通肌肉无力等别的症状。\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可以让伤者平躺在舒适的位置（最好是平硬表面），膝盖弯曲以减轻脊柱的压力。\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在疼痛区域使用冷敷（如冰袋）以减轻肿胀和疼痛，避免直接接触皮肤，尽量避免搬动患者。",      
        option:["返回上一级","返回疼痛部位选择","返回伤处选择"],
      },{
        id:"26",
        title:"伤者在运动过程中突然晕倒，可能发生休克。\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此时请让患者平躺在地上，若没有头部、颈部或背部损伤，可以抬高患者的双腿约30厘米（12英寸）以促进血液回流到心脏。并用毯子、外套或其他可用物品覆盖患者。\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;持续观察患者的呼吸和意识状态。若呼吸或脉搏停止，请立即进行心肺复苏（CPR）。",      
        option:["返回上一级"],
      },
    ],
    answerNow: 0,//第一道题目的answerNow的值是0，从0开始的，数据库如果第一条是1，要注意
    optionList: ["A", "B", "C", "D"],
    successNum: 0,
    failNum: 0,
    nextIndex:-1,
    showButton: false,
  },
  onButtonClick: function() {
    // 按钮点击事件处理
    wx.switchTab({
      url: '/pages/index/index'
    });
    // 在这里添加更多处理逻辑
  },


// return() {
//     wx.navigateTo({
//       url: '/packageTraining/pages/cpr-aed/cpr-aed'
//     });
//   },
  selectAnswer(e){
    console.log(e);
    const { item } = e.currentTarget.dataset;
    const currentIndex = this.data.answerNow;
    const nextQuestion = this.findNextQuestion(item,currentIndex);  
        // 正确
        this.setData({
            select: item,
            status: "success",
           
        })
        if(this.data.answerNow===3)
        {
          wx.navigateTo({
            url: '/packageTraining/pages/cpr-aed/cpr-aed',
          })
        }
        setTimeout(() => {
          this.setData({
              answerNow: nextQuestion,
              status: "",
              select: "",
          })
          if(this.data.answerNow===6|this.data.answerNow===7|this.data.answerNow===10|this.data.answerNow===11|this.data.answerNow===12|this.data.answerNow===17|this.data.answerNow===18|this.data.answerNow===20|this.data.answerNow===21|this.data.answerNow===22|this.data.answerNow===23|this.data.answerNow===24|this.data.answerNow===25|this.data.answerNow===26|this.data.answerNow===2){
                this.setData({
                  showButton:true
                })
          }else{
            this.setData({
              showButton:false
            })
          }
      }, 500);
      
  },

  findNextQuestion(item,currentIndex){
   if(item==="A"){
      if(currentIndex===0)
      {
        return 1;
      }
      if(currentIndex===1)
      {
        return 2;
      }
      if(currentIndex===2)
      {
        return 4;
      }
      if(currentIndex===3)
      {
        return 0;
      }
      if(currentIndex===4)
      {
        return 5;
      }
      if(currentIndex===5)
      {
        return 6;
      }
      if(currentIndex===6)
      {
        return 5;
      }if(currentIndex===7)
      {
        return 5;
      }
      if(currentIndex===8)
      {
        return 10;
      }
      if(currentIndex===9)
      {
        return 8;
      }
      if(currentIndex===10)
      {
        return 8;
      }if(currentIndex===11)
      {
        return 8;
      }if(currentIndex===12)
      {
        return 9;
      }if(currentIndex===13)
      {
        return 14;
      }if(currentIndex===14)
      {
        return 18;
      }if(currentIndex===15)
      {
        return 22;
      }if(currentIndex===16)
      {
        return 24;
      }if(currentIndex===17)
      {
        return 13;
      }if(currentIndex===18)
      {
        return 14;
      }if(currentIndex===19)
      {
        return 20;
      }if(currentIndex===20)
      {
        return 19;
      }if(currentIndex===21)
      {
        return 19;
      }if(currentIndex===22)
      {
        return 15;
      }if(currentIndex===23)
      {
        return 15;
      }if(currentIndex===24)
      {
        return 16;
      }if(currentIndex===25)
      {
        return 16;
      }if(currentIndex===26)
      {
        return 1;
      }
   }else if(item==="B"){
    if(currentIndex===0)
    {
      return 3;
    }
    if(currentIndex===1)
      {
        return 4;
      }
      if(currentIndex===2)
      {
        return 1;
      }
      if(currentIndex===4)
      {
        return 8;
      }if(currentIndex===5)
      {
        return 7;
      }if(currentIndex===6)
      {
        return 4;
      }if(currentIndex===7)
      {
        return 4;
      }if(currentIndex===8)
      {
        return 11;
      }if(currentIndex===9)
      {
        return 12;
      }if(currentIndex===10)
      {
        return 4;
      }if(currentIndex===11)
      {
        return 4;
      }
      if(currentIndex===12)
      {
        return 4;
      }if(currentIndex===13)
      {
        return 15;
      }if(currentIndex===14)
      {
        return 19;
      }if(currentIndex===15)
      {
        return 23;
      }if(currentIndex===16)
      {
        return 25;
      }if(currentIndex===17)
      {
        return 4;
      }if(currentIndex===18)
      {
        return 13;
      }if(currentIndex===19)
      {
        return 21;
      }if(currentIndex===20)
      {
        return 13;
      }
      if(currentIndex===21)
      {
        return 13;
      }if(currentIndex===22)
      {
        return 13;
      }if(currentIndex===23)
      {
        return 13;
      }if(currentIndex===24)
      {
        return 13;
      }if(currentIndex===25)
      {
        return 13;
      }
   }else if(item==="C"){
    if(currentIndex===1)
    {
      return 26;
    }
    if(currentIndex===4)
    {
      return 9;
    }if(currentIndex===8)
    {
      return 4;
    }if(currentIndex===9)
    {
      return 4;
    }if(currentIndex===13)
    {
      return 16;
    }if(currentIndex===14)
    {
      return 13;
    }if(currentIndex===15)
    {
      return 13;
    }if(currentIndex===16)
    {
      return 13;
    }if(currentIndex===18)
    {
      return 4;
    }if(currentIndex===19)
    {
      return 14;
    }if(currentIndex===20)
    {
      return 4;
    }if(currentIndex===21)
    {
      return 4;
    }if(currentIndex===22)
    {
      return 4;
    }if(currentIndex===23)
    {
      return 4;
    }if(currentIndex===24)
    {
      return 4;
    }if(currentIndex===25)
    {
      return 4;
    }
   }else if(item==="D"){
    if(currentIndex===1)
    {
      return 0;
    }
    if(currentIndex===4)
    {
      return 13;
    }if(currentIndex===13)
    {
      return 17;
    }
  }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

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