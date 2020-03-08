// pages/share/share.js
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        url: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        // console.log("xxx", options);
        // let toUrl = ''
        // // if (options.reportId) {
        // //     toUrl = app.globalData.FACEURL + '?userKey=' + app.globalData.userData._key + '&reportId=' + options.reportId
        // // } else {
        // toUrl = app.globalData.FACEURL + '?userKey=' + app.globalData.userData._key
        // // }
        // this.setData({
        //     url: toUrl
        // })
    },

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
        console.log(this.data.url);
        return {
          title: '面相探索', // 转发后 所显示的title
          path: '/pages/url/url', // 相对的路径
        }
    }
})