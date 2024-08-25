// pages/photonavi/photonavi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markerId:null,
  
       images:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      markerId:options.markerId,
      
    })
    const markerId=options.markerId
    
    let images =[];
    switch (markerId) {
      case '1':
        images = '/images/profile/redcross/red_cross_logo.png';
        break;
      case '2':
        images = '/images/navigationbar/training.png';
        break;
      // 可以继续添加更多的case来处理不同的marker id
      default:
        images = [];
        break;
    }
    this.setData({
      images: images
    });
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