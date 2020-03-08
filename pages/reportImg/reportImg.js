// pages/reportImg/reportImg.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        reportImg: '',
        picHeight: '',
        picWidth: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        console.log("", options.reportImg);
        let scale = 1;
        let that = this;
        let {
            reportImg
        } = options;
        console.log(options);
        wx.getImageInfo({
            // src: options.reportImg,
            src: reportImg,
            success(res) {
                let query = wx.createSelectorQuery();
                query.select('#container').boundingClientRect()
                query.exec(function(res) {
                    // scale = res[0].width / picWidth;
                    that.setData({
                        reportImg: reportImg
                    })
                })
            }
        })

    },
    downloadImg: function() {
        // wx.getImageInfo({
        //     src: this.data.reportImg,
        //     success: function(res) {
        //         wx.saveImageToPhotosAlbum({
        //             filePath: res.path,
        //             success: (res) => {
        //                 console.log(res);
        //                 wx.showToast({
        //                     title: "已保存到相册",
        //                     icon: 'none',
        //                     duration: 2000,
        //                     mask: true
        //                 })
        //             }
        //         })
        //     }
        // })
        wx.downloadFile({
            url: this.data.reportImg,
            success: function(res) {
                console.log(res);
                //图片保存到本地
                wx.saveImageToPhotosAlbum({
                    filePath: res.tempFilePath,
                    success: function(data) {
                        console.log(res);
                        wx.showToast({
                            title: "已保存到相册",
                            icon: 'none',
                            duration: 2000,
                            mask: true
                        })
                    },
                    fail: function(err) {
                        console.log(err);
                        if (err.errMsg === "saveImageToPhotosAlbum:fail auth deny") {
                            console.log("用户一开始拒绝了，我们想再次发起授权")
                            console.log('打开设置窗口')
                            wx.openSetting({
                                success(settingdata) {
                                    console.log(settingdata)
                                    if (settingdata.authSetting['scope.writePhotosAlbum']) {
                                        console.log('获取权限成功，给出再次点击图片保存到相册的提示。')
                                    } else {
                                        console.log('获取权限失败，给出不给权限就无法正常使用的提示')
                                    }
                                }
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