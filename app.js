//app.js
// const ald = require('./utils/ald-stat.js')
App({
  onLaunch: function() {
    // 展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)
    let that = this;
    // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //     console.log(res);
    //     if (res.code) {
    //       // that.globalData.resCode = res.code;
    //       wx.request({ //后台接口请求
    //         url: "https://baokudata.qingtime.cn/sgbh/account/thirdLogin",
    //         data: {
    //           app: 17,
    //           uId: res.code,
    //           type: 2,
    //         },
    //         method: 'GET',
    //         header: {
    //           'content-type': 'application/json'
    //         },
    //         success: function(res) {
    //           if (res.data.msg === "OK") {
    //             that.globalData.userData = res.data;
    //             // that.globalData.name = res.data.profile.trueName ? res.data.profile.trueName : res.data.profile.nickName ? res.data.profile.nickName : '';
    //             console.log(res.data);
    //             that.globalData.userState = true;
    //             //由于这里是网络请求，可能会在 Page.onLoad 之后才返回
    //             // 所以此处加入 callback 以防止这种情况
    //             if (that.userDataCallback) {
    //               that.userDataCallback(res.data, that.globalData.userState);
    //             }
    //           } else if (res.data.msg === "NOUSER") {
    //             that.globalData.userState = false;
    //             if (that.userDataCallback) {
    //               that.userDataCallback(res.data, that.globalData.userState);
    //             }
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
    // // // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo
    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })

  },
  globalData: {
    userInfo: null,
    uploadImg: "",
    picPath: "",
    report: {},
    //URL: "http://192.168.1.101:8086",
    URL: "https://facedata.qingtime.cn",
    FACEURL: "https://faceview.qingtime.cn",
    //FACEURL: "http://localhost:3000",
    toUrl: "",
    resCode: "",
    userData: {},
    height: "",
    width: "",
    name: "",
    avatar: '',
    userState: false,
    key: 0,
    bindState: false
  }
})