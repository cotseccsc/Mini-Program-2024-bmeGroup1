// pages/concussion/concussion.js
Page({
  data: {
    concussionContent: '' // 用于存储文档内容
  },
  onLoad: function(options) {
    // 设置文档内容
    this.setData({
      concussionContent: `
        2. 脑震荡
        定义：
        脑震荡是指头部遭受外力打击后，即刻发生短暂的脑神经功能障碍。
        <img src="/packageTraining/images/detailed_injury/concussion/concussion_image_1.jpeg" style="width:100%;" />
        临床表现：
        1.头伤后立即发生短暂性昏迷，时间在30分钟内，清醒后常有近事遗忘、头痛、头晕、恶心、厌食、呕吐、耳鸣、注意力不集中等症状，血压，呼吸和脉搏基本正常。
        2.神经系统检查无阳性体征，腰椎穿检查脑脊液压力和成分正常。
        3.脑震荡最有特点的表现就是逆行性遗忘，即创伤发生的时间片段记忆缺失。
        即时处理：
        脑震荡发生后，应立即让伤者平卧，绝对保持安静。严禁摇动、牵扯，更不要随意移动位置，头部两侧用衣物填塞，以免左右摇晃，同时用毛巾浸湿冷敷头部，身体衣着要保暖。对神志不清者可用手指掐人中、合谷等穴，使其苏醒。病情严重者应立即送医院抢救。
        <img src="/packageTraining/images/detailed_injury/concussion/concussion_image_2.jpg" style="width:100%;" />
      `
    });
  }
});