
Page({

  data: {
    select: "",
    status: "",
    list: [
      {
        id:"0",
        title:"请根据下述操作判断伤者是否有生命体征1、检查呼吸：看胸口或腹部是否有起伏或把耳朵靠近口鼻处，听听是否有呼吸声。2、检查脉搏；在手腕内侧靠近拇指一侧，用同样的方法检查是否有脉搏。3、检查意识：轻拍肩膀或大声呼唤，看是否有反应，如眨眼、说话或动作。",
        option:["有","没有"],

      }, {
        id:"1",
        title:"请问他是否有暴露的皮外伤害（破皮、出血等），如果有需要对伤者先做伤口处理，如果没有将进入伤者伤处疼痛部位选择",
        option:["有皮外受伤情况","并没有","他是运动过程中突然晕倒，如跑步过程中晕倒","回到上一级"],

      }, {
        id:"2",
        title:"开放性软组织损伤的内容",
        option:["已处理好外伤，接下来选择伤者其它疼痛部位","回到上一级"],

      }, {
        id:"3",
        title:"心肺复苏AED孩子救心脏骤停患者的医疗设备。基本上所有发生心脏骤停需要心肺复苏的病人都需要使用AED。在心跳骤停时，只有在最佳抢救时间的“黄金4分钟”内，利用自动体外除颤器",
        
        option:["回到上一级"],

      }, {
        id:"4",
        title:"请根据伤者的伤处部位选择，我们将进行初步判断",
       
        option:["胸部","上肢","下肢","躯体"],
      },
      {
        id:"5",
        title:"伤者是否因为脑部受创，处于昏迷晕倒或者具有头疼头晕的状态？",
        option:["是","否"],
      },{
        id:"6",
        title:"如果是，伤者此时可能处于脑震荡，请立即让伤者平卧，绝对保持安静。严禁摇动、牵扯，更不要随意移动位置，头部两侧用衣物填塞，以免左右摇晃，同时用毛巾浸湿冷敷头部，身体衣着要保暖。神志不清可用手指掐人中、合谷（食指和大拇指虎口肌肉处）等穴，使其苏醒。并等待救护车来到",      
        option:["返回上一级","返回伤处选择"],
      },
      {
        id:"7",
        title:"若其意识清醒，如果伤口小浅较浅、小、干净伤口，可用碘酊或其它消毒，然后用创可贴或消毒纱布覆盖。较大、深、不洁伤口，应现场加压包扎后送医院进行清创、止血等处理。等待送医进一步检查",      
        option:["返回上一级","返回伤处选择"],
      },{
        id:"8",
        title:"伤者是否有明显骨痛错位症状",      
        option:["是","否","回到上一级"],
      },{
        id:"9",
        title:"伤者受伤部位是否在大腿小腿脚掌部位",      
        option:["是","不是，在踝关节部位","返回伤处选择"],
      },{
        id:"10",
        title:"伤者可能为关节脱位、骨折等严重伤害，在获得医疗救助之前，请对伤者1.用临时夹板、吊带或垫子对患肢进行固定和支撑；2.尽可能将患肢抬高到心脏水平以上，减轻肿胀；3.用冰块（毛巾或衣物包裹）缓解疼痛和肿胀。",      
        option:["返回上一级","返回伤处选择"],
      },{
        id:"11",
        title:"伤者可能为闭合性软组织损伤，如腱鞘炎肩周炎肌肉韧带拉伤，请即刻冷敷、加压包扎、患肢抬高、适当制动。还可使用止痛药物和点穴、针刺治疗。",      
        option:["回到上一级","返回伤处选择"],
      },{
        id:"12",
        title:"伤者踝关节受伤，应立即抬高受伤的脚，冷敷，以减少局部血肿，如果脚踝扭伤十分严重的如骨骼受伤，有骨折或者脱位现象，等待送医进一步治疗",      
        option:["回到上一级","返回伤处选择"],
      },{
        id:"13",
        title:"伤者的躯干是哪一部分感到疼痛？",      
        option:["胸部","背部","腰部","腹部"],
      },{
        id:"14",
        title:"关于疼痛的情况，请问是轻微不断的疼痛还是剧烈难忍的疼痛？",      
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
        title:"如果腹部疼痛，在一般运动下，通常为运动式的腹痛，如果受创严重不排除内脏受到损伤，正常的运动过程中腹痛请尝试放慢速度，深呼吸，调节呼吸节奏。用手轻轻按压疼痛区域停下来做一些轻柔的拉伸和放松活动，有助于缓解腹部紧张。                          如果仍然剧烈疼痛不止，在专业医疗人员到达之前，不要自行给患者服用止痛药或其他药物，以免掩盖症状或导致病情恶化，等待救护车来到。",      
        option:["返回疼痛部位选择","返回伤处选择"],
      },{
        id:"18",
        title:"根据当前状况，伤者可能为肋间的肌肉炎症，受伤部位使用冷敷（如冰袋）以减轻肿胀和疼痛，但避免直接接触皮肤。                                  尽量避免使用受伤的肌肉。                       如果疼痛允许：可以轻柔地拉伸肋间肌肉，避免剧烈动作。",      
        option:["返回上一级","返回疼痛部位选择","返回伤处选择"],
      },{
        id:"19",
        title:"如果伤者的胸部剧烈疼痛，大概是在胸外还是胸内？",      
        option:["胸外肋骨部位","胸内剧烈疼痛，或者伤者有哮喘等","返回上一级"],
      },{
        id:"20",
        title:"如果肋骨部位疼痛，可能是胸部受创导致的肋骨骨折、断裂                                    请让患者让患者采取半坐姿或斜倚姿势，以减轻呼吸时的疼痛。                                       受伤部位使用冷敷（如冰袋）以减轻肿胀和疼痛，但避免直接接触皮肤。                                尽量避免深呼吸和剧烈咳嗽，可以用枕头或毛巾轻轻按压胸部以减轻疼痛。",      
        option:["返回上一级","返回疼痛部位选择","返回伤处选择"],
      },{
        id:"21",
        title:"如果胸内的剧烈疼痛，伤者可能是肺部挫伤、气胸、运动性哮喘。                              请让患者保持半坐位或半卧位，这有助于呼吸。等待就医伤者自己知道哮喘等疾病，可能会随身携带药物，帮助取出为患者服下",      
        option:["返回上一级","返回疼痛部位选择","返回伤处选择"],
      },{
        id:"22",
        title:"伤者背部疼痛，可能为肌肉拉伤或者局部炎症受伤部位使用冷敷（如冰袋）以减轻肿胀和疼痛，但避免直接接触皮肤。                                  尽量避免使用受伤的肌肉。                       ",      
        option:["返回上一级","返回疼痛部位选择","返回伤处选择"],
      },{
        id:"23",
        title:"脊柱痛疼，可能在运动过程中发生了侧弯滑脱、压缩性的脊柱骨折，请对患者疼痛部位进行冷敷以减轻疼痛和可能的炎症。避免直接接触皮肤。              同时避免一切可能导致脊柱扭转和弯曲的动作，保持脊柱尽量中立。等待送医进一步治疗",      
        option:["返回上一级","返回疼痛部位选择","返回伤处选择"],
      },{
        id:"24",
        title:"腰部的肌肉疼痛可能为肌肉拉伤或者局部炎症受伤部位使用冷敷（如冰袋）以减轻肿胀和疼痛，但避免直接接触皮肤。                                  尽量避免使用受伤的肌肉。",      
        option:["返回上一级","返回疼痛部位选择","返回伤处选择"],
      },{
        id:"25",
        title:"腰椎疼痛，可能为椎间骨突出以及骨折，疼痛可能放射到腿部，伴有麻木磁通肌肉无力等别的症状，可以让伤者让患者平躺在一个舒适的位置，最好是平硬的表面，膝盖弯曲以减轻脊柱的压力。                 在疼痛区域使用冷敷（如冰袋）以减轻肿胀和疼痛，但避免直接接触皮肤，防止冻伤。                     尽量避免搬动患者",      
        option:["返回上一级","返回疼痛部位选择","返回伤处选择"],
      },{
        id:"26",
        title:"运动过程中，比如长跑马拉松等，突然晕倒，可能为休克，此时请让患者                         平躺在地上。如果没有头部、颈部或背部损伤，可以抬高患者的双腿约30厘米（12英寸），以促进血液回流到心脏。                                         用毯子、外套或其他可用物品覆盖患者，保持体温，避免寒冷。                                       持续观察患者的呼吸、脉搏和意识状态。如果呼吸或脉搏停止，立即进行心肺复苏（CPR）。",      
        option:["返回上一级"],
      },
    ],
    answerNow: 0,//第一道题目的answerNow的值是0，从0开始的，数据库如果第一条是1，要注意
    optionList: ["A", "B", "C", "D"],
    successNum: 0,
    failNum: 0,
    nextIndex:-1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
      //读取用户各个题目的答题情况
      //读取开始的题目标号给answerNow
  },

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
        setTimeout(() => {
          this.setData({
              answerNow: nextQuestion,
              status: "",
              select: "",
          })
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