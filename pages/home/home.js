// pages/home/home.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // wx.getSetting({
    //     success(res) {
    //         console.log(res.authSetting);
    //         if (res.authSetting['scope.userInfo']) {
    //             wx.getUserInfo({
    //                 success(res) {
    //                   console.log(res)
    //                     app.globalData.name = res.userInfo.nickName;
    //                     app.globalData.avatar = res.userInfo.avatarUrl;
    //                     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //                     // 所以此处加入 callback 以防止这种情况
    //                     console.log("进来了方法", app.globalData.bindState);
    //                     if (app.globalData.bindState) {
    //                         if (app.globalData.userState) {
    wx.navigateTo({
      url: '../url/url',
    })
    //                         } else {
    //                             wx.redirectTo({
    //                                 url: '../bindTel/bindTel',
    //                             })
    //                         }
    //                     } else {
    //                         if (JSON.stringify(app.globalData.userData) != '{}') {
    //                             if (app.globalData.userState) {
    //                                 wx.navigateTo({
    //                                     url: '../url/url',
    //                                 })
    //                             } else {
    //                                 wx.redirectTo({
    //                                     url: '../bindTel/bindTel',
    //                                 })
    //                             }
    //                         } else {
    //                             app.userDataCallback = (userData, userState) => {
    //                                 console.log("进来了", userState);
    //                                 if (userState) {
    //                                     wx.navigateTo({
    //                                         url: '../url/url',
    //                                     })
    //                                 } else {
    //                                     wx.redirectTo({
    //                                         url: '../bindTel/bindTel',
    //                                     })
    //                                 }
    //                             }
    //                         }
    //                     }
    //                 }
    //             })
    //         }
    //     }
    // })
  },
  toUrl: function() {
    wx.navigateTo({
      url: '../url/url',
    })
  },
  // onGotUserInfo(e) {
  //     app.globalData.name = e.detail.userInfo.nickName ? e.detail.userInfo.nickName:'';
  //     app.globalData.avatar = e.detail.userInfo.avatarUrl;
  //     if (app.globalData.userState) {
  //         wx.navigateTo({
  //             url: '../url/url',
  //         })
  //     } else {
  //         wx.redirectTo({
  //             url: '../bindTel/bindTel',
  //         })
  //     }

  // },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

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