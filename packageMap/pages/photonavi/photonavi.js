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
        images = 'http://lc-TrWcvqLp.cn-n1.lcfile.com/eCAIDSETydcOHOq9jWE6HCCtokfo7KBN/1%E5%91%A8%E6%A5%BC107AED.jpg';
        break;
      
      case '2':
        images = 'http://lc-TrWcvqLp.cn-n1.lcfile.com/DmdrUUojtaWFeXHsqzLIb0t1OzO5iT47/2%E7%8E%89%E6%B3%89%E4%B9%92%E4%B9%93%E7%90%83%E6%88%BFAED.jpg';
        break;
      
      // 可以继续添加更多的case来处理不同的marker id
      case '3':
        images = 'http://lc-TrWcvqLp.cn-n1.lcfile.com/ngFEtmFlUBOvbEEMtAOwVrcz9wqqzov9/3%E5%91%A8%E6%A5%BC%E6%80%A5%E6%95%91%E7%AE%B1.jpg';
        break;
      case '4':
        images = 'http://lc-TrWcvqLp.cn-n1.lcfile.com/0SMo3x69qnQdvLsnxBzK6HRaMWvldkfj/4%E4%B9%9D%E6%B4%B2%E5%A4%A7%E8%8D%AF%E6%88%BF%E7%8E%89%E5%8F%A4%E8%B7%AF%E5%BA%97.jpg';
        break;
      case '5':
        images = 'http://lc-TrWcvqLp.cn-n1.lcfile.com/1o5JSh6ykfja8BWx460J0hzV1N8RQcNk/5%E5%BB%B6%E5%AF%BF%E5%A0%82%E8%8D%AF%E5%BA%97.jpg';
        break;
      case '6':
        images = 'http://lc-TrWcvqLp.cn-n1.lcfile.com/7ibRGF90dC7cRVQhAF6czRRYT8QXI3o4/6%E6%B1%82%E5%AE%9E%E8%8D%AF%E5%BA%97.jpg';
        break;
      case '7':
        images = 'http://lc-TrWcvqLp.cn-n1.lcfile.com/XAJ927sfsiCTrJikXXBxoJaG5sWxqkk7/7%E6%B5%B7%E7%8E%8B%E6%98%9F%E8%BE%B0%E8%A5%BF%E6%BA%AA%E8%B7%AF.jpg';
        break;
      case '8':
        images = 'http://lc-TrWcvqLp.cn-n1.lcfile.com/JHgp20sIAdtsTggKCQw53UcVWfJwfIag/8%E5%8B%A4%E7%9B%8A%E8%8D%AF%E5%BA%97.jpg';
        break;
      case '9':
        images = 'http://lc-TrWcvqLp.cn-n1.lcfile.com/n2iwsfnxt7Ac40gFKS6JxvWLlzzdCJCD/9%E4%B9%8B%E6%B1%9F%E5%81%A5%E8%BA%AB%E6%88%BFAED.jpg';
        break;
        case '10':
        images = 'http://lc-TrWcvqLp.cn-n1.lcfile.com/trENkfM49cG9jc84MzqSkpAvaKMx9DiT/10%E4%B9%8B%E6%B1%9F%E6%A0%A1%E5%8C%BB%E9%99%A2.jpg';
        break;
        case '11':
          images = 'http://lc-TrWcvqLp.cn-n1.lcfile.com/HbC0jdSDkhkodzfneMLaxopqx0HaeD1x/11%E6%B5%B7%E7%8E%8B%E6%98%9F%E8%BE%B0%E6%81%92%E7%94%9F%E8%8A%B1%E5%9B%AD.jpg';
        break;
        case '12':
          images='http://lc-TrWcvqLp.cn-n1.lcfile.com/WLCQBzg4vyoVFaiCwvfGT5ULjIxk4vKC/12%E6%B5%B7%E7%8E%8B%E6%98%9F%E8%BE%B0%E8%81%94%E5%BC%BA.jpg';
          break;
        case '13':
          images='http://lc-TrWcvqLp.cn-n1.lcfile.com/CnbfdnGYPSqVw3KMHPCrlWsQtNYIw1uV/13%E5%9B%BD%E8%8D%AF%E5%A4%A7%E8%8D%AF%E6%88%BF%E6%9D%AD%E5%A4%A7%E8%B7%AF.jpg';
          break;
        case '14':
          images='http://lc-TrWcvqLp.cn-n1.lcfile.com/Sgk0WTqifJXMj8EMDIE6oqn14u5DDOx7/14%E4%B9%9D%E6%B4%B2%E5%A4%A7%E8%8D%AF%E6%88%BF%E6%96%87%E4%B8%89%E8%B7%AF.jpg';
          break;
        case '15':
          images='http://lc-TrWcvqLp.cn-n1.lcfile.com/ckkLmE3dkw97FGhFmTRYf2w1srS4PXeR/15%E4%B9%8B%E6%B1%9F8%E5%8F%B7%E6%A5%BC%E6%80%A5%E6%95%91%E7%AE%B1.jpg';
          break;
        case '16':
          images='http://lc-TrWcvqLp.cn-n1.lcfile.com/vI8BICiKOM30N8l3AdcOIbAeXiMuPGCb/16%E7%8E%89%E6%B3%89%E6%A0%A1%E5%8C%BB%E9%99%A2AED.jpg';
          break;
          case '17':
            images='http://lc-TrWcvqLp.cn-n1.lcfile.com/uGttpFtovjmmGzqAaXnFMUUO1jl74H5W/1725%E8%88%8D%E6%80%A5%E6%95%91%E7%AE%B1.jpg';
            break;
        case '18':
          images='http://lc-TrWcvqLp.cn-n1.lcfile.com/LsPKsEYd7a6PJtSVaeQec2SFXObC18GO/18%E9%82%BB%E5%AE%B6%E5%A4%A7%E8%8D%AF%E6%88%BF%E7%B4%AB%E9%87%91%E8%A5%BF%E8%8B%912%E5%BA%97.jpg';
          break;
        case '19':
          images='http://lc-TrWcvqLp.cn-n1.lcfile.com/n1G3oJmCR0G9DWQD53KwpVXsQbSaYOz8/19%E8%80%81%E7%99%BE%E5%A7%93%E5%81%A5%E5%BA%B7%E8%8D%AF%E6%88%BF%E6%B8%AF%E6%B9%BE%E5%BA%97.jpg';
          break;
        case '20':
          images='http://lc-TrWcvqLp.cn-n1.lcfile.com/rFwytfGbeIicfgLqmnq2KVGTc6VAVwdl/20%E9%A3%8E%E9%9B%A8%E6%93%8D%E5%9C%BAAED.jpg';
          break;  
      case '21':
        images='http://lc-TrWcvqLp.cn-n1.lcfile.com/LcQY78sSmTAEJipY3QDkhqvOeLtQUv06/21%E8%A5%BF%E6%BA%AA%E6%A0%A1%E5%8C%BB%E9%99%A2%E9%97%A8%E5%8E%85AED.jpg';
        break;  
      case '22':
        images = 'http://lc-TrWcvqLp.cn-n1.lcfile.com/8Ib9WqAvANXkusYiBXdHvwNrnfQxv5kJ/22%E7%B4%AB%E9%87%91%E6%B8%AF%E8%A1%8C%E6%94%BF%E5%8A%9E%E4%BA%8B%E6%9C%8D%E5%8A%A1%E5%A4%A7%E5%8E%85AED.jpg';
        break;
      case '23':
        images = 'http://lc-TrWcvqLp.cn-n1.lcfile.com/UCYfnn1vtLwRGB3t2qGyQj0RuSjhs681/23%E4%B8%BB%E5%9B%BE%E4%BA%8C%E6%A5%BCAED.jpg';
        break;
      case '24':
        images = 'http://lc-TrWcvqLp.cn-n1.lcfile.com/xMbwcvOeyNeK5tX5I26Sk1JKOCg12wx5/24%E9%93%B6%E6%B3%89%E8%B6%B3%E7%90%83%E5%9C%BAAED.jpg';
        break;
      case '25':
        images = 'http://lc-TrWcvqLp.cn-n1.lcfile.com/Hx7g46WuAC1Bzj8oTXD72BeyksgB54Vq/25%E5%B0%A7%E5%9D%A4%E6%A5%BCAED.jpg';
        break;
      case '26':
        images = 'http://lc-TrWcvqLp.cn-n1.lcfile.com/Uzxz9UD9bHCOBwiLTI96VNqlNbfkE73k/26%E5%8C%BB%E7%BB%BC%E6%A5%BCAED.jpg';
        break;
      case '27':
        images = 'http://lc-TrWcvqLp.cn-n1.lcfile.com/UVsPDdtO3uDdft63mQSyV9ANAw3F3kYB/27%E8%A5%BF%E6%95%99AED.jpg';
        break;
      case '28':
        images = 'http://lc-TrWcvqLp.cn-n1.lcfile.com/PUSyPHaCA9uNmQgqWNzIer3x8btd4tYK/28%E6%96%87%E5%B9%BFAED.jpg';
        break;
        case '29':
          images = 'http://lc-TrWcvqLp.cn-n1.lcfile.com/jNCQlYMwv9KyFqgqSs3dUz5aiMYy9xwR/29%E5%8D%8E%E5%AE%B6%E6%B1%A0%E8%BF%90%E5%8A%A8%E5%9C%BAAED.jpg';
          break;
      case '30':
        images = 'http://lc-TrWcvqLp.cn-n1.lcfile.com/hY99SWzEvsMaQkkvExLHoCsMHhuqSbWb/30%E4%B8%9C%E6%95%99AED.jpg';
        break;
      case '31':
        images = 'http://lc-TrWcvqLp.cn-n1.lcfile.com/himOlX2LG1aj1TCTdq9rl3O7gkpMQO7H/31%E7%B4%AB%E9%87%91%E6%B8%AF%E4%B8%9C%E6%93%8DAED.jpg';
        break;
      case '32':
        images = 'http://lc-TrWcvqLp.cn-n1.lcfile.com/yWXsw0MhPc9K86YdiGr3Rd6Cd0RyG6Te/32%E4%BA%9A%E8%BF%90%E7%83%AD%E8%BA%AB%E9%A6%86AED.jpg';
        break;
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