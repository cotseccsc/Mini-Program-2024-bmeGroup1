const AV = require("../../../libs/av-core-min.js");
const FacilityFeedback = AV.Object.extend("FacilityFeedback");
const facilityFeedback = new FacilityFeedback();

Page({
  data: {
    facility: {
      region: '请选择',
      location: ''
    },
    regions: ['紫金港校区', '玉泉校区', '西溪校区', '华家池校区', '之江校区', '其他地点'] // 定义区域选项
  },

  bindRegionChange(event) {
    this.setData({
      'facility.region': this.data.regions[event.detail.value]
    });
  },

  bindLocationInput(event) {
    this.setData({
      'facility.location': event.detail.value
    });
  },


  sendFeedback() {
    const {
      region,
      location
    } = this.data.facility;
    if (region.trim() === '' || location.trim() === '') {
      wx.showToast({
        title: '请填写完整的设施信息',
        icon: 'none'
      });
      return;
    }
    // 这里可以添加发送设施信息到服务器的代码
    facilityFeedback.set("FacilityRegion", this.data.facility.region);
    facilityFeedback.set("FacilityAccuratePosition", this.data.facility.location);
    facilityFeedback.save();
    // 显示发送成功的弹窗
    wx.showToast({
      title: '发送成功！',
      icon: 'success',
      duration: 2000,
      complete: () => {
        // 延迟一段时间后重新加载页面
        setTimeout(() => {
          wx.switchTab({
            url: '/pages/profile/profile'
          });
        }, 2000);
      }
    });
  }
});