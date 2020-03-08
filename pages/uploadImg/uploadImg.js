const app = getApp()
Page({
    data: {
        uploadImgArr: ["正面", "面部完整呈现", "无刘海遮挡", "五官清晰", "不带眼镜"],
        hidden: true,
        nickName: ''
    },
    onLoad: function() {
        this.setData({
            nickName: app.globalData.name
        })
    },
    getName: function(e) {
        app.globalData.name = e.detail.value;
        this.setData({
            nickName: e.detail.value
        })
    },
    uploadImg: function() {
        let re = new RegExp(/^\s*$/);
        let that = this;
        wx.chooseImage({
            count: 1,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success(res) {
                console.log('获取图片', res);
                wx.getImageInfo({
                    src: res.tempFilePaths[0],
                    success(res) {
                        app.globalData.height = res.height;
                        app.globalData.width = res.width;
                    }
                })
                app.globalData.uploadImg = res.tempFilePaths[0];
                console.log(res.tempFilePaths[0]);
                wx.showLoading({
                    title: '照片上传中',
                    mask: true
                })
                wx.uploadFile({
                    url: app.globalData.URL + '/upload/picture', // 仅为示例，非真实的接口地址
                    filePath: res.tempFilePaths[0],
                    name: 'file',
                    // formData: {
                    //     user: 'test'
                    // },
                    success(res) {
                        const data = JSON.parse(res.data);
                        console.log(data.picPath);
                        app.globalData.picPath = data.picPath;
                        // do something
                        if (app.globalData.userState) {
                            wx.hideLoading();
                            wx.navigateTo({
                                url: '../scanImg/scanImg',
                            })
                        } else {
                            wx.hideLoading();
                            wx.navigateTo({
                                url: '../bindTel/bindTel',
                            })
                        }
                    }
                })
            }
        })
    }
})