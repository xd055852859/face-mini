// pages/history/history.js
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: {},
        historyData: [],
        url: '',
        userData: {}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        if (app.globalData.userState) {
            let that = this;
            this.setData({
                userData: app.globalData.userData
            })
            wx.request({
                url: app.globalData.URL + '/userResult', //仅为示例，并非真实的接口地址
                data: {
                    "userKey": app.globalData.userData._key
                },
                method: "GET",
                header: {
                    'content-type': 'application/json' // 默认值
                },
                success: function(res) {
                    console.log(res);
                    if (res.data.msg === "OK") {
                        if (res.data.data.length > 0) {
                            res.data.data.forEach((item, index) => {
                                item.filePath = "https://face2.qingtime.cn/" + item.filePath.replace(/\\/g, '/');
                                // item.filePath = app.globalData.URL + "/" + item.filePath.replace(/\\/g, '/');
                                item.createTime = new Date(item.createTime).toLocaleString();
                            })
                            that.setData({
                                historyData: res.data.data,
                            });
                        }
                    }
                }
            })
        }
    },
    toReport: function(e) {
        console.log(e.currentTarget.dataset.key)
        wx.navigateTo({
            url: '../report/report?reportKey=' + e.currentTarget.dataset.key
        })
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

    }
})