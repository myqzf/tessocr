var app = getApp();
var host = 'https://api.comments.hk/';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fetchData();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },
  
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('--------下拉刷新-------');
    wx.showNavigationBarLoading();
    //wx.startPullDownRefresh()
    console.log('onPullDownRefresh', '下拉刷新....');
    this.fetchData();
    wx.stopPullDownRefresh;
  },
 
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('--------上拉刷新-------');
    wx.showNavigationBarLoading();
    //wx.startPullDownRefresh()
    console.log('onPullDownRefresh', '上拉刷新....');
    this.fetchData();
    wx.stopPullDownRefresh;
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
   
  },

  fetchData: function () {
    var that = this;
    wx.request({
      url: "https://api.comments.hk/",
      success: function (res) {
        var data = res.data
        console.log(res)

        that.setData({
          images: data.images,
          comment_content: data.comment_content,
          author: data.author,
          description: data.description,
          title: data.title
        })
      }
    })
  }
})
