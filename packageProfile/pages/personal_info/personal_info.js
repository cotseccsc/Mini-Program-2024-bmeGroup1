// pages/personal_info/personal_info.js
// pages/person/person.js
const AV = require("../../../libs/av-core-min.js");
const PersonalInfo = AV.Object.extend("PersonalInfo");
const personalInfo = new PersonalInfo();
const newPersonalInfo = new PersonalInfo();
const query = new AV.Query("PersonalInfo");
Page({
  data: {
    gender: '',
    name: '',
    phone: '',
    birthday: '',
    email: '',
    school:'',
    volunteerWilling:'',
    schools: ['紫金港校区','玉泉校区', '西溪校区', '华家池校区', '之江校区']
  },
  bindSchoolChange(event) {
    this.setData({
      'school': this.data.schools[event.detail.value]
    });
  },

  onShow: function () {
    this.initializeData();
  },

// 页面数据的初始化
initializeData:function(){
  // 从本地缓存中读取用户信息
  const username = wx.getStorageSync('username');
  // 查找是否已有数据
  query.equalTo("Username", username);
  query.first().then((personalInfo) => {
    // 若已有数据
    if (personalInfo) {
      this.setData({
        gender:personalInfo.get("Gender"),
        name:personalInfo.get("Name"),
        phone:personalInfo.get("Phone"),
        birthday:personalInfo.get("Birthday"),
        email:personalInfo.get("Email"),
        school: personalInfo.get("School"),
        volunteerWilling: personalInfo.get("VolunteerWilling")
      });
    }
  });
},

  onGenderChange: function (e) {
    this.setData({
      gender: e.detail.value
    });
  },

  onVolunteerChange: function (e) {
    this.setData({
      volunteerWilling: e.detail.value
    });
  },

  onInputChange: function (e) {
    const field = e.currentTarget.dataset.field;
    this.setData({
      [field]: e.detail.value
    });
  },

  saveProfile: function () {
    const username = wx.getStorageSync('username');
  // 查找是否已有数据
  query.equalTo("Username", username);
  query.first().then((personalInfo) => {
    if(personalInfo){
      personalInfo.set("Gender",this.data.gender);
      personalInfo.set("Name",this.data.name);
      personalInfo.set("Phone",this.data.phone);
      personalInfo.set("Birthday",this.data.birthday);
      personalInfo.set("Email",this.data.email);
      personalInfo.set("School",this.data.school);
      personalInfo.set("VolunteerWilling",this.data.volunteerWilling);
      personalInfo.save();
    }
    else{
      newPersonalInfo.set("Gender",this.data.gender);
      newPersonalInfo.set("Name",this.data.name);
      newPersonalInfo.set("Phone",this.data.phone);
      newPersonalInfo.set("Birthday",this.data.birthday);
      newPersonalInfo.set("Email",this.data.email);
      newPersonalInfo.set("School",this.data.school);
      newPersonalInfo.set("VolunteerWilling",this.data.volunteerWilling);
      newPersonalInfo.set("Username",username);
      newPersonalInfo.save();
    }
  });
    wx.showToast({
      title: '保存成功',
      icon: 'success',
      duration: 2000
    });
  }
});