//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        modalState: false,
        checkState: true,
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        personObj: {},
        total: 0
    },
    onGotUserInfo(e) {
        app.globalData.name = e.detail.userInfo.nickName;
        wx.navigateTo({
            url: '../uploadImg/uploadImg',
        })
    },
    //事件处理函数

    showCheck: function() {
        this.setData({
            checkState: !this.data.checkState
        })
    },
    toUpload: function() {
        this.setData({
            modalState: !this.data.modalState
        })
    },
    toHistory: function() {
        wx.navigateTo({
            url: '../history/history',
        })
    },
    onLoad: function() {
        let that = this;
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        } else if (this.data.canIUse) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                console.log(res.userInfo);
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            })
        }
        console.log(that);
        wx.request({
            url: app.globalData.URL + '/userInfo', //仅为示例，并非真实的接口地址
            method: "GET",
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function(res) {
                console.log(res);
                let personArr = res.data.data;
                let personNum = 0;
                let timer = setInterval(function() {
                    if (personNum === 10) {
                        personNum = 0
                    }
                    that.setData({
                        personObj: personArr[personNum]
                    })
                    personNum++;
                }, 5000);
                that.setData({
                    total: res.data.total
                })
            }
        })
    },
    getUserInfo: function(e) {
        console.log(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    },
    onShareAppMessage: function() {
        let that = this;
        return {
            title: '面相探索', // 转发后 所显示的title
            path: '/pages/index/index', // 相对的路径
        }
    }
})