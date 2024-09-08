// index.js
const AV = require("../../../libs/av-core-min.js");
const BBS = AV.Object.extend("BBS");
const PersonalInfo = AV.Object.extend("PersonalInfo");
const personalInfo = new PersonalInfo();
const queryPersonalInfo = new AV.Query("PersonalInfo");
const queryBBS = new AV.Query("BBS");
var gender;

Page({
  data: {
    posts: [],
    newPostContent: '',
    menuVisible: false,
    username: '',
    imagesrc: '',
    toTop:false,
    page: 1,
    limit: 10,
    hasMore: true,
  },

  onLoad() {
    this.fetchPosts();
  },

  navigateToPending:function(){
    wx.navigateTo({
      url: '/packageProfile/pages/pending/pending',
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


  fetchPosts() {
    const {
      page,
      limit,
      posts,
    } = this.data;
    queryBBS.limit(limit);
    queryBBS.skip((page - 1) * limit);
    queryBBS.descending('Likes');

    queryBBS.find().then((results) => {
      const newPosts =results.map(item => ({
        id: item.get('ID'),
        username: item.get('Sender'),
        content: item.get('Content'),
        likes: item.get('Likes'),
        userAvatar: item.get('UserAvatar'),
        commentNum:item.get('CommentNum'),
      }));
      
      this.setData({
        posts: newPosts,
        hasMore: results.length === limit
      });
    }).catch((error) => {
      console.error('查询失败:', error);
    });
  },

  //论坛区域
  //数据初始化

  onInput(e) {
    this.setData({
      newPostContent: e.detail.value
    });
  },
  //发帖
  publishPost() {
    if (this.data.newPostContent.trim() === '') return;


    const newPost = {
      id: Date.now(),
      username: this.data.username,
      userAvatar: this.data.imagesrc,
      content: this.data.newPostContent,
      likes: 0,
      CommentNum:0,
    };
    const bbs = new BBS();
    const posts = [...this.data.posts, newPost];
    bbs.set("ID", newPost.id);
    bbs.set("Sender", newPost.username);
    bbs.set("Content", newPost.content);
    bbs.set("Likes", 0);
    bbs.set("CommentNum", 0);
    bbs.set("UserAvatar", newPost.userAvatar);
    bbs.save();

    this.setData({
      posts,
      newPostContent: ''
    });
  },

  //点赞
  likePost(e) {
    const postId = e.currentTarget.dataset.id;
    const posts = this.data.posts.map(post => {
      if (post.id === postId && !post.liked) {
        // 创建 BBS 实例和查询对象
        const likedPost = new BBS();
        const queryLike = new AV.Query("BBS");
        queryLike.equalTo("ID", postId);

        // 执行数据库查询和更新
        queryLike.first().then((likedPost) => {
          if (likedPost) {
            likedPost.increment("Likes", 1);
            likedPost.save().then(() => {
              // 数据库更新成功后，同步更新本地数据
              post.likes += 1;
              post.liked = true;
              // 更新页面数据
              this.setData({
                posts,
              });
            });
          }
        });
      }
      return post;
    });
  },

  //评论
  commentPost(e) {
    const postId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/packageProfile/pages/volunteer_cabin_comment/volunteer_cabin_comment?id=${postId}`
    });
  },

  //左上角菜单栏，不用管
  toggleMenu: function () {
    this.setData({
      menuVisible: !this.data.menuVisible
    });
  },

  closeMenu: function () {
    this.setData({
      menuVisible: false
    });
  },

  onReachBottom() {
    if (this.data.hasMore) {
      this.setData({
        page: this.data.page + 1
      });
      this.fetchPosts();
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
      this.fetchPosts();
    }
    else{
      wx.showToast({
        title: '到顶啦~',
        icon:'none',
      });
    }
  }
});