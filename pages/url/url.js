// pages/url/url.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orgUrl: '',
    version: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // this.setData({
    //   orgUrl: options.url
    // })
    // console.log(options.url)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    let url = app.globalData.FACEURL;
    // if (app.globalData.userData.data) {
    //   app.globalData.userData = app.globalData.userData.data
    // }
    // if (this.data.orgUrl) {
    // url = options.url + '?version=' + (new Date()).valueOf();
    // } else {
    //   url = url + '?userKey=' + app.globalData.userData._key + '&avatar=' + app.globalData.avatar + '&nickName=' + app.globalData.name + '&token=' + app.globalData.userData.token + '&version=' + (new Date()).valueOf();
    // }
    // console.log(url);
    this.setData({
      url: url
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})