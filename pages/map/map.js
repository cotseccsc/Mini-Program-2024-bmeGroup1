// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    subKey:'4YCBZ-QHAWB-CMDUR-JDYNJ-HCTIT-2DBEF',//腾讯地图key，需要修改
    enable3d:false,
    showLocation:true,
    showCompass:false,
    enableOverLooking:false,
    enableZoom:true,
    enableScroll:true,
    enableRotate:false,
    enableSatellite:false,
    drawPolygon:false,
    enableTraffic:false,
    latitude:'30.263842',
    longitude:'120.123077',
    markers:[
      {
        'id':1,
        'name':'AED',
        'desc':'周亦卿大楼一楼大门进门左侧107室门口',
        'latitude':30.260283,
        'longitude':120.121984,
        'iconPath':'/images/index/SOS.png',
        'width':32,
        'height':32
      },{
        'id':2,
        'name':'AED',
        'desc':'玉泉北门门口',
        'latitude':30.268561,
        'longitude':120.125791,
        'iconPath':'/images/index/SOS.png',
        'width':32,
        'height':32
      }
      //还有点可以继续添加
    ],
    circles: [],
    polyLines:[],
    polygons:[],
    showDialog:false,
    currentMarker:null
 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    const map = wx.createMapContext("map");
    map.moveToLocation();

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

  },
  handleMarkerTap(e){
    const marker=this.data.markers.find(item=>item.id==e.markerId);
    marker && this.setData({
      currentMarker: marker,
      showDialog:true
    });
  },

navi1(){
  const longitude=this.data.currentMarker.longitude
  const latitude=this.data.currentMarker.latitude
  wx.openLocation({
    latitude,
    longitude,
    scale:18
  })
},
   
navi2(){
  //const markerId=this.data.currentMarker.markerId;
  wx.navigateTo({
    url: '/packageMap/pages/photonavi/photonavi?markerId='+this.data.currentMarker.id,
  })
},


})