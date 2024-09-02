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
      title: "当你在运动中扭伤了脚踝，首先应该做的是什么？",
      option: ["立即进行热敷", "立即进行冷敷"],
      answer: "B",
      answeredCorrectly: false,
    }, {
      title: "运动中出现肌肉拉伤时，以下哪项措施是错误的？",
      option: ["休息", "冷敷", "立即进行热敷", "适当抬高受伤部位"],
      answer: "C",
      answeredCorrectly: false,
    }, {
      title: "在运动中不慎摔倒导致皮肤擦伤，正确的处理方法是？",
      option: ["立即用酒精消毒", "用肥皂水清洗伤口", "用干净的水冲洗伤口", "用纸巾擦拭伤口"],
      answer: "D",
      answeredCorrectly: false,
    }, {
      title: "如果在运动中感到头晕，应该采取以下哪种措施？",
      option: ["继续运动", "立即躺下休息", "深呼吸并坐下休息", "喝含咖啡因的饮料"],
      answer: "C",
      answeredCorrectly: false,
    }, {
      title: "运动中出现肌肉痉挛（抽筋），应该采取以下哪种措施？",
      option: ["立即进行热敷", "立即进行冷敷", "轻轻拉伸肌肉", "立即进行按摩"],
      answer: "C",
      answeredCorrectly: false,
    },
    {
      title: "运动中不慎扭伤手腕，以下哪项措施是错误的？",
      option: ["立即停止运动", "用弹性绷带固定手腕", "立即进行冷敷", "立即进行热敷"],
      answer: "D",
      answeredCorrectly: false,
    },
    {
      title: "在运动中不慎骨折，以下哪项措施是错误的？",
      option: ["立即停止运动", "用夹板固定受伤部位", "立即进行冷敷", "立即进行热敷"],
      answer: "D",
      answeredCorrectly: false,
    },{
      title: "运动中出现心跳过速，以下哪项措施是错误的？",
      option: ["立即停止运动", "坐下休息", "深呼吸", "继续运动以恢复正常心率"],
      answer: "D",
      answeredCorrectly: false,
    },{
      title: "运动中出现脱水症状，以下哪项措施是错误的？",
      option: ["立即停止运动", "喝含电解质的运动饮料", "喝大量的水", "休息并补充适量的水分"],
      answer: "C",
      answeredCorrectly: false,
    },{
      title: "在运动中不慎被尖锐物体划伤，以下哪项措施是错误的？",
      option: ["立即用干净的水冲洗伤口", "用肥皂水清洗伤口", "用干净的纱布包扎伤口", "立即用创可贴覆盖伤口"],
      answer: "D",
      answeredCorrectly: false,
    },{
      title: "运动中出现低血糖症状，以下哪项措施是错误的？",
      option: ["立即停止运动", "吃一些含糖的食物", "喝含糖的饮料", "继续运动以恢复正常血糖"],
      answer: "D",
      answeredCorrectly: false,
    },{
      title: "运动中出现中暑症状，以下哪项措施是错误的？",
      option: ["立即停止运动", "移到阴凉处休息", "喝冰水", "用湿毛巾擦拭身体"],
      answer: "C",
      answeredCorrectly: false,
    },{
      title: "运动中出现眼外伤，以下哪项措施是错误的？",
      option: ["立即用干净的水冲洗眼睛", "用干净的纱布轻轻覆盖眼睛", "立即用手揉眼睛", "尽快就医"],
      answer: "C",
      answeredCorrectly: false,
    },{
      title: "运动中出现关节脱位，以下哪项措施是错误的？",
      option: ["立即停止运动", "用冰袋冷敷", "尝试自行复位", "尽快就医"],
      answer: "C",
      answeredCorrectly: false,
    },{
      title: "运动中出现胸痛，以下哪项措施是错误的？",
      option: ["立即停止运动", "坐下休息", "深呼吸", "继续运动以缓解症状"],
      answer: "D",
      answeredCorrectly: false,
    },
    {
      title: "关于心肺复苏，以下说法错误的是：",
      option: ["心肺复苏时，需要交叉手指保持双臂伸直，同时手指抬起，这样他们就不会碰到病人的胸腔或胸部", "进行胸部按压。需要身体前倾，肩膀对着病人的胸部，按压下深5cm左右，后用手让胸部恢复。重复以每分钟100次的频率进行按压。", "打开呼吸道操作时，移到患者的头部。倾斜头部，抬起下巴，再次打开气道。让他的嘴微微张开。", "进行人工呼吸时，用额头上的手捏住鼻孔，用另一只手托住病人的下巴。正常呼吸，将嘴巴放在患者嘴上，然后吹，直到可以看到他的胸部上升。"],
      answer: "B",
      answeredCorrectly: false,
    },
    {
      title: "关于AED，以下说法错误的是：",
      option: ["自动体外除颤器（AED）是一种便携式的医疗设备，可以诊断特定的心律失常，并且给予电击除颤，是可被非专业人员使用的用于抢救心脏骤停患者的医疗设备。", "基本上所有发生心脏骤停需要心肺复苏的病人都需要使用AED。", "在心跳骤停时，只有在最佳抢救时间的“黄金4分钟”内，利用自动体外除颤器（AED）对患者进行除颤和心肺复苏，才是最有效制止猝死的办法。", "AED只有预先学习过相关知识的人才会使用。"],
      answer: "D",
      answeredCorrectly: false,
    },{
      title: "关于AED，以下最合理的是：",
      option: ["AED电极板正极贴在患者右侧锁骨下，负极帖在患者左侧乳头外下方，不要贴反。", "左下的位置在左乳外侧电极片中线在腋中线，电极片上缘距腋窝约7cm左右。", "AED开始通过贴在伤病员身上的电极片，采集分析其心律数据", "以上均正确"],
      answer: "D",
      answeredCorrectly: false,
    },{
      title: "关于AED的操作，以下说法错误的是：",
      option: ["按电源键开机之后，AED会有语音提示，会告诉接下来怎么做。", "通常而言，两块电极片分别贴在胸骨右侧，锁骨下方和左胸乳头外侧、腋中线位置。", "将电极片导线的另一端插入AED机器上，此时周围人员可以帮助扶着病人。", "如果AED分析出伤病员需要电击，就会自动充电，确认没有人接触伤病员之后，按下电击按钮，AED会自动对伤病员进行电击除颤。"],
      answer: "C",
      answeredCorrectly: false,
    },{
      title: "关于AED，以下说法正确的是：",
      option: ["在给病人施救过程中，按下通电按钮后可以不立刻远离患者，无须告诫身边任何人不得接触靠近患者", "患者在水中可以使用AED，患者胸部如有汗水来不及可以不擦干胸部", "一旦发现心脏骤停人员，务必及时、持续实施心肺复苏，同时配合使用AED，同步拨打120呼救后，心肺复苏可以停止", "AED专门用于帮助心搏呼吸骤停的伤者恢复心律，只要按照提示操作，操作者既不会触电，也不会伤到任何人，不必有所顾虑"],
      answer: "D",
      answeredCorrectly: false,
    },{
      title: "关于踝关节，以下说法正确的是：",
      option: ["踝关节是人体距离地面最近的关节", "踝关节扭伤，导致的损伤即为外踝的距腓前韧带跟腓韧带", "踝关节损伤经休息后，疼痛和肿胀可能消失。但是，会出现因韧带松弛导致的踝关节不稳、反复扭伤", "以上均错"],
      answer: "C",
      answeredCorrectly: false,
    },{
      title: "关于运动损伤，你认为以下哪些操作是被允许的：",
      option: ["喝酒", "涂抹红花油", "热敷", "加压"],
      answer: "D",
      answeredCorrectly: false,
    },{
      title: "运动损伤时，一般来说不可以：",
      option: ["发生状况时应尽可能先保护受伤的部位和肢体", "用冰块或冷毛巾冷敷受伤处", "如果受伤部位在胳膊上，可以将受伤的胳膊抬高，高于心脏位置即可", "进行受损位置的按摩"],
      answer: "D",
      answeredCorrectly: false,
    },{
      title: "关于开放性软组织损伤，以下说法错误的是：",
      option: ["局部皮肤或粘膜完整，无裂口与外界相通，损伤时的出血积聚在组织内", "常见的有擦伤、切伤、刺伤和撕裂伤", "较浅、小、干净伤口，可用碘酊消毒", "较大、深、不洁伤口，应现场加压包扎后送医院进行清创、止血等处理"],
      answer: "A",
      answeredCorrectly: false,
    },{
      title: "关于闭合性软组织损伤，以下说法错误的是：",
      option: ["临床表现包括：肌肉拉伤、关节韧带拉伤、骨质增生", "伤后24或48小时内，处理原则为止血、止痛、防肿、制动和减轻炎症反应", "不可使用点穴、针刺治疗", "后期时候损伤基本修复、痛肿基本消失，但功能尚未完全恢复"],
      answer: "C",
      answeredCorrectly: false,
    },{
      title: "关于关节脱位，以下说法错误的是：",
      option: ["关节脱位又叫脱臼或脱骱，是指组成关节各骨的关节面失去正常的对合关系", "如按脱位程度来分，可分为半脱位、全脱位和轻微脱位", "脱位可分为先天性、外伤性、病理性和习惯性脱位四种", "按脱位后的时间来分，又可分为新鲜脱位和陈旧性脱位"],
      answer: "B",
      answeredCorrectly: false,
    },{
      title: "关于创伤，以下说法错误的是：",
      option: ["反复磨损和撕裂，发生于日常活动中或是晃动或颠簸移动的结果", "使用过度，多发生于运动员过度训练", "脱位和疾病无关", "脱位的严重并发症需要立即治疗"],
      answer: "C",
      answeredCorrectly: false,
    },{
      title: "在获得医疗救助之前，应按照以下哪些内容执行：",
      option: ["用临时夹板、吊带或垫子对患肢进行固定和支撑", "尽可能将患肢抬高到心脏水平以上，减轻肿胀", "用冰块（毛巾或衣物包裹）缓解疼痛和肿胀", "以上均需要"],
      answer: "D",
      answeredCorrectly: false,
    },{
      title: "关于脑震荡，以下说法错误的是：",
      option: ["脑震荡是指头部遭受外力打击后，即刻发生短暂的脑神经功能障碍", "头伤后立即发生短暂性昏迷，血压，呼吸和脉搏不正常", "脑震荡最有特点的表现就是逆行性遗忘", "神经系统检查无阳性体征"],
      answer: "B",
      answeredCorrectly: false,
    },{
      title: "关于脑震荡处理，以下说法错误的是：",
      option: ["脑震荡发生后，应立即让伤者平卧。", "尝试与患者交流，轻轻摇动患者身体查看是否有意识。", "用毛巾浸湿冷敷头部，身体衣着要保暖。", "对神志不清者可用手指掐人中、合谷等穴，使其苏醒。 "],
      answer: "B",
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