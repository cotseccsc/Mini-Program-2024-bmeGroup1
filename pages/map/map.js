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
        'name':'周亦卿楼AED',
        'desc':'周亦卿大楼一楼大门进门左侧107室门口',
        'latitude':30.260283,
        'longitude':120.121984,
        'iconPath':'/images/map/AED.jpeg',
        'width':32,
        'height':32
      },{
        'id':2,
        'name':'AED',
        'desc':'玉泉乒乓球房门口',
        'latitude':30.265584,
        'longitude':120.127284,
        'iconPath':'/images/map/AED.jpeg',
        'width':32,
        'height':32
      },{
        'id':3,
        'name':'KIT',
        'desc':'周亦卿大楼1楼大门进门右侧墙上',
        'latitude':30.26047333,
        'longitude':120.12203028,
        'iconPath':'/images/map/KIT.png',
        'width':32,
        'height':32
      },{
        'id':4,
        'name':'九洲大药房',
        'desc':'浙江省杭州市西湖区玉古路156号',
        'latitude':30.263177,
        'longitude':120.1268678,
        'iconPath':'/images/map/pharmacy.jpg',
        'width':32,
        'height':32
      },{
        'id':5,
        'name':'延寿堂药店',
        'desc':'浙江省杭州市西湖区外东山弄66号东山农贸市场196号',
        'latitude':30.259041,
        'longitude':120.127159,
        'iconPath':'/images/map/pharmacy.jpg',
        'width':32,
        'height':32
      },{
        'id':6,
        'name':'求实药店',
        'desc':'浙江省杭州市西湖区浙大路6号',
        'latitude':30.259903,
        'longitude':120.130431,
        'iconPath':'/images/map/pharmacy.jpg',
        'width':32,
        'height':32
      },{
        'id':7,
        'name':'海王星辰健康药房（西溪路店）',
        'desc':'浙江省杭州市西湖区西溪路395-2号',
        'latitude':30.267981,
        'longitude':120.127907,
        'iconPath':'/images/map/pharmacy.jpg',
        'width':32,
        'height':32
      },{
        'id':8,
        'name':'杭州勤益药店',
        'desc':'浙江省杭州市西湖区西溪路418号',
        'latitude':30.270383,
        'longitude':120.123575,
        'iconPath':'/images/map/pharmacy.jpg',
        'width':32,
        'height':32
      },{
        'id':9,
        'name':'之江校区健身房AED',
        'desc':'之江校区健身房入口右侧',
        'latitude':30.192147,
        'longitude':120.124843,
        'iconPath':'/images/map/AED.jpeg',
        'width':32,
        'height':32
      },{
        'id':10,
        'name':'之江校区校医院AED',
        'desc':'之江校区6号楼',
        'latitude':30.193062,
        'longitude':120.124444,
        'iconPath':'/images/map/AED.jpeg',
        'width':32,
        'height':32
      },{
        'id':11,
        'name':'海王星辰健康药房（恒生花园店）',
        'desc':'浙江省杭州市西湖区文三路133-4号',
        'latitude':30.277384,
        'longitude':120.143142,
        'iconPath':'/images/map/pharmacy.jpg',
        'width':32,
        'height':32
      },{
        'id':12,
        'name':'海王星辰健康药房（联强店）',
        'desc':'浙江省杭州市西湖区文三路255号联强大厦B座',
        'latitude':30.277293,
        'longitude':120.134909,
        'iconPath':'/images/map/pharmacy.jpg',
        'width':32,
        'height':32
      },{
        'id':13,
        'name':'国药大药房（杭大路店）',
        'desc':'浙江省杭州市西湖区杭大路44号',
        'latitude':30.27036,
        'longitude':120.14124,
        'iconPath':'/images/map/pharmacy.jpg',
        'width':32,
        'height':32
      },{
        'id':14,
        'name':'九洲大药房（文三路店）',
        'desc':'浙江省杭州市西湖区文三路353号',
        'latitude':30.276734,
        'longitude':120.132749,
        'iconPath':'/images/map/pharmacy.jpg',
        'width':32,
        'height':32
      }
      ,{
        'id':15,
        'name':'之江校区8号楼学生宿舍急救箱',
        'desc':'8号楼学生宿舍门厅',
        'latitude':30.192121,
        'longitude':120.12408,
        'iconPath':'/images/map/KIT.png',
        'width':32,
        'height':32
      },{
        'id':16,
        'name':'玉泉校医院AED',
        'desc':'校医院门诊楼大门右侧',
        'latitude':30.267495,
        'longitude':120.124699,
        'iconPath':'/images/map/AED.jpeg',
        'width':32,
        'height':32
      }
      ,{
        'id':17,
        'name':'玉泉25舍急救箱',
        'desc':'25舍一楼大厅右侧',
        'latitude':30.267973,
        'longitude':120.125233,
        'iconPath':'/images/map/KIT.png',
        'width':32,
        'height':32
      },{
        'id':18,
        'name':'邻家大药房（紫金西苑二店）',
        'desc':'西湖区紫金西苑1幢1层104号商铺',
        'latitude':30.301066,
        'longitude':120.068071,
        'iconPath':'/images/map/pharmacy.jpg',
        'width':32,
        'height':32
      },{
        'id':19,
        'name':'老百姓健康药房（浙大港湾家园店）',
        'desc':'西湖区太和路港湾家园22幢10号',
        'latitude':30.310697,
        'longitude':120.086213,
        'iconPath':'/images/map/pharmacy.jpg',
        'width':32,
        'height':32
      },{
        'id':20,
        'name':'浙江大学(紫金港校区)风雨操场AED',
        'desc':'风雨操场进门右前方拐角处墙上',
        'latitude':30.306547,
        'longitude':120.090548,
        'iconPath':'/images/map/AED.jpeg',
        'width':32,
        'height':32
      },{
        'id':21,
        'name':'浙江大学（西溪校区）校医院AED',
        'desc':'校医院门口（内外各一台）',
        'latitude':30.277155,
        'longitude':120.14083,
        'iconPath':'/images/map/AED.jpeg',
        'width':32,
        'height':32
      },{
        'id':22,
        'name':'浙江大学（紫金港校区）行政服务办事大厅AED',
        'desc':'行政办事服务大厅入口左侧',
        'latitude':30.297318,
        'longitude':120.088716,
        'iconPath':'/images/map/AED.jpeg',
        'width':32,
        'height':32
      },{
        'id':23,
        'name':'浙江大学（紫金港校区）主图书馆AED',
        'desc':'主图二层24h自习区研讨间213旁',
        'latitude':30.303148,
        'longitude':120.079869,
        'iconPath':'/images/map/AED.jpeg',
        'width':32,
        'height':32
      },{
        'id':24,
        'name':'浙江大学（紫金港校区）银泉足球场AED',
        'desc':'银泉足球场入口右侧墙上',
        'latitude':30.306988,
        'longitude':120.075545,
        'iconPath':'/images/map/AED.jpeg',
        'width':32,
        'height':32
      },{
        'id':25,
        'name':'浙江大学（紫金港校区）尧坤楼309排练室AED',
        'desc':'尧坤楼309排练室进门右侧墙边',
        'latitude':30.29926,
        'longitude':120.072398,
        'iconPath':'/images/map/AED.jpeg',
        'width':32,
        'height':32
      },{
        'id':26,
        'name':'浙江大学（紫金港校区）医学综合楼AED',
        'desc':'医学综合楼1楼门厅',
        'latitude':30.296663,
        'longitude':120.084633,
        'iconPath':'/images/map/AED.jpeg',
        'width':32,
        'height':32
      },{
        'id':27,
        'name':'浙江大学（紫金港校区）西教AED',
        'desc':'西1-310斜对面',
        'latitude':30.302323,
        'longitude':120.084685,
        'iconPath':'/images/map/AED.jpeg',
        'width':32,
        'height':32
      },{
        'id':28,
        'name':'浙江大学（紫金港校区）文化广场AED',
        'desc':'东区1楼休闲餐厅靠文化广场入口对面，校园卡服务部旁',
        'latitude':30.307771,
        'longitude':120.08443,
        'iconPath':'/images/map/AED.jpeg',
        'width':32,
        'height':32
      },{
        'id':29,
        'name':'华家池校区运动场AED',
        'desc':'浙江大学华家池校区新农村杂志社附近',
        'latitude':30.268372,
        'longitude':120.195718,
        'iconPath':'/images/map/AED.jpeg',
        'width':32,
        'height':32
      },{
        'id':30,
        'name':'浙江大学（紫金港校区）东教AED',
        'desc':'东1B-123门口右侧',
        'latitude':30.302212,
        'longitude':120.08923,
        'iconPath':'/images/map/AED.jpeg',
        'width':32,
        'height':32
      },{
        'id':31,
        'name':'浙江大学（紫金港校区）东田径场AED',
        'desc':'东田径场和东足球场（西操）间过道右侧墙上',
        'latitude':30.304935,
        'longitude':120.082612,
        'iconPath':'/images/map/AED.jpeg',
        'width':32,
        'height':32
      },{
        'id':32,
        'name':'浙江大学（紫金港校区）老游泳池AED',
        'desc':'老游泳池（亚运热身馆）靠风雨操场一侧入口右侧',
        'latitude':30.307541,
        'longitude':120.090365,
        'iconPath':'/images/map/AED.jpeg',
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



  onReady() {
    const map = wx.createMapContext("map");
    map.moveToLocation();
  },
  handleMarkerTap(e){
    console.log(e);
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