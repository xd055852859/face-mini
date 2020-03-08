// pages/bindTel/bindTel.js
const app = getApp()
Page({

  data: {
    mobile: '',
    code: '',
    codeState: false,
    num: 60, //倒计时
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  getMobile: function(e) {
    this.setData({
      mobile: e.detail.value
    })
  },
  getCode: function(e) {
    this.setData({
      code: e.detail.value
    })
  },
  sendVercode: function(e) {
    var that = this;
    var re = new RegExp(/^\s*$/);
    var re1 = new RegExp(/(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/);
    if (re.test(this.data.mobile)) {
      wx.showModal({
        title: '信息提示',
        showCancel: false,
        confirmColor: "#5095FA",
        content: '手机号码不能为空'
      })
      return;
    } else if (!re1.test(this.data.mobile)) {
      wx.showModal({
        title: '信息提示',
        showCancel: false,
        confirmColor: "#5095FA",
        content: '请输入正确的手机号码'
      })
      return;
    }
    this.setData({
      codeState: true,
      codeViewState: true
    })
    wx.request({
      url: 'https://baokudata.qingtime.cn/sgbh/account/verifyCode',
      method: 'POST',
      data: {
        "mobileArea": "+86",
        "mobile": this.data.mobile,
        "source": 2
      },

      //参数为键值对字符串
      header: {
        //设置参数内容类型为x-www-form-urlencoded
        // 'content-type': 'application/x-www-form-urlencoded',
        'content-type': 'application/json'
      },
      success: function(res) {
        var timer = setInterval(function() {
          if (that.data.num < 2) {
            that.data.num = 60;
            that.setData({
              codeState: false,
              num: that.data.num
            })
            clearInterval(timer);
          } else {
            that.data.num--;
            that.setData({
              num: that.data.num,
            })
          }
        }, 1000)
      }
    })
  },
  bindMobile: function() {
    var re = new RegExp(/^\s*$/);

    if (re.test(this.data.code)) {
      wx.showModal({
        title: '信息提示',
        showCancel: false,
        confirmColor: "#5095FA",
        content: '验证码不能为空'
      })
      return;
    } else if (this.data.code.length !== 4) {
      wx.showModal({
        title: '信息提示',
        showCancel: false,
        confirmColor: "#5095FA",
        content: '请输入正确的验证码'
      })
      return;
    }
    wx.login({
      success: res => {
        wx.request({
          url: 'https://baokudata.qingtime.cn/sgbh/account/thirdRegister',
          method: 'POST',
          data: {
            "mobileArea": "+86",
            "mobile": this.data.mobile,
            "uId": res.code,
            "app": 17,
            "type": 2,
            "code": this.data.code
          },

          //参数为键值对字符串
          header: {
            //设置参数内容类型为x-www-form-urlencoded
            // 'content-type': 'application/x-www-form-urlencoded',
            'content-type': 'application/json'
          },
          success: function(res) {
            console.log('新注册', res);
            if (res.data.msg === "OK") {
              app.globalData.userData = res.data;
              app.globalData.userState = true;
              app.globalData.bindState = true;
              wx.redirectTo({
                url: '../home/home',
              })
            } else {
              wx.showModal({
                title: '信息提示',
                showCancel: false,
                confirmColor: "#5095FA",
                content: res.data.msg
              })

            }
          }
        })
      }
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