// index.js

const AV = require("../../../libs/av-core-min.js");
const BBS = AV.Object.extend("BBS");
const bbs = new BBS();
const PersonalInfo = AV.Object.extend("PersonalInfo");
const personalInfo = new PersonalInfo();
const queryPersonalInfo = new AV.Query("PersonalInfo");
const queryBBS = new AV.Query("BBS");
const Comments = AV.Object.extend("Comments");
const comments = new Comments();
const queryComments = new AV.Query("Comments");
var gender;
Page({
  data: {
    toTop:false,
    post: {},
    limit: 10,
    page: 1,
    hasMore: true,
    newCommentContent: '',
    username: '',
    imagesrc: '',
    comments: [],
  },

  onLoad(options) {
    const postId = options.id;
    // 从数据库查找BBS的值
    const postIdNum = parseInt(postId, 10);
    queryBBS.equalTo("ID", postIdNum);
    queryBBS.first().then((bbs) => {
      if (bbs) {
        const post1 = {
          id: postId,
          content: bbs.get("Content"),
          username: bbs.get("Sender"),
          userAvatar: bbs.get("UserAvatar"),
        };
        this.setData({ post: post1 }, () => {
          this.fetchComments();
        });
      } else {
        const err = {
          id: postId,
          content: "Undefined",
          username: "404 Not Found",
          userAvatar: ''
        };
        this.setData({
          post: err
        });
      }
    });
  },

  onShow() {
    this.setData({
      username: wx.getStorageSync('username'),
    });
    queryPersonalInfo.equalTo("Username", this.data.username);
    queryPersonalInfo.first().then((personalInfo) => {
      if (personalInfo) {
        gender = personalInfo.get("Gender");
        switch (gender) {
          case '男':
            this.setData({
              imagesrc: '/images/profile/selfavatar-male.png',
            });
            break;
          case '女':
            this.setData({
              imagesrc: '/images/profile/selfavatar-female.png',
            });
            break;
          default:
            this.setData({
              imagesrc: '/images/profile/selfavatar.png',
            });
            break;
        }
      } else {
        // 如果没有找到个人信息，可以在这里设置默认图片
        this.setData({
          imagesrc: '/images/profile/selfavatar.png',
        });
      }
    }).catch((error) => {
      // 处理查询错误
      console.error("查询个人信息出错:", error);
    });
  },

  onInput(e) {
    this.setData({
      newCommentContent: e.detail.value
    });
  },

  publishComment() {
    if (this.data.newCommentContent.trim() === '') return;

    const newComment = {
      username: this.data.username, // 用户登录时用户名
      userAvatar: this.data.imagesrc, // 用户登录时头像
      content: this.data.newCommentContent
    };

    const newCommentObject = new Comments();
    newCommentObject.set("Sender", newComment.username);
    newCommentObject.set("SenderAvatar", newComment.userAvatar);
    newCommentObject.set("Content", newComment.content);
    // 存入原帖的id便于指向与查找
    newCommentObject.set("OriginalTarget", this.data.post.id);
    newCommentObject.save().then(() => {
      // 给对应帖子评论数目+1
      const u=parseInt(this.data.post.id,10);
      queryBBS.equalTo("ID", u);
      queryBBS.first().then((bbs) => {
        if (bbs) {
          bbs.increment("CommentNum", 1);
          bbs.save();
          this.fetchComments();
        }
      });
      this.setData({
        newCommentContent: ''
      });
    }).catch((error) => {
      console.error("发表评论失败:", error);
    });
  },



  // 从数据库分页读取评论
  fetchComments() {
    const { page, limit } = this.data;
    queryComments.limit(limit);
    queryComments.skip((page - 1) * limit);
    queryComments.equalTo("OriginalTarget", this.data.post.id);

    queryComments.find().then((results) => {
      const newComments = results.map(item => ({
        content: item.get("Content"),
        username: item.get("Sender"),
        userAvatar: item.get("SenderAvatar"),
      }));

      this.setData({
        comments: newComments,
        hasMore: results.length === limit
      });
    }).catch((error) => {
      console.error('查询失败:', error);
    });
  },



  onReachBottom() {
    if (this.data.hasMore) {
      this.setData({
        page: this.data.page + 1
      });
      this.fetchComments();
    } else {
      wx.showToast({
        title: '小水怡情，请不要伤身哦~',
        icon: 'none'
      });
    }
  },

  onPageScroll: function (e) {
    // 判断页面是否滚动到顶部
    if (e.scrollTop === 0) {
      this.setData({
        toTop: true
      });
      // 执行滚动到顶部时的逻辑
      this.handleScrollToTop();
    } else {
      this.setData({
        toTop: false
      });
    }
  },

  // 滚动到顶部时触发的函数
  handleScrollToTop: function () {
    // 在这里编写页面滚动到顶部时需要执行的逻辑
    if(this.data.page>1){
      this.setData({
        page: this.data.page-1,
      });
      this.fetchComments();
    }
    else{
      wx.showToast({
        title: '到顶啦~',
        icon:'none',
      });
    }
    console.log('页面滚动到顶部');
  }
});