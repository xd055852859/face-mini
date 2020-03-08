const app = getApp()
const imgCanvas = require('../../utils/drawCanvas.js')
Page({
    data: {
        upProcess: 0,
        middleProcess: 0,
        downProcess: 0,
        upSrc: "../../images/loading.png",
        middleSrc: "../../images/loading.png",
        downSrc: "../../images/loading.png",
        uploadImg: 'http://cdn-icare.qingtime.cn/1548815328635_uploadImg-bigImg-person.png',
        viewWidth: '',
        viewHeight: '',
        viewTop: 0,
        viewLeft: 0,
        backgroundArr: [],
        buttonState: false
    },
    onLoad: function() {
        let that = this;
        let imgState = false;
        let errorState = false;
        let progressState = false;
        let report = '';
        let {
            width,
            height
        } = app.globalData;
        let {
            viewTop,
            viewLeft
        } = this.data;
        let timer = '';
        let faceTop = 0;
        let faceLeft = 0;
        let faceXArr = [];
        let faceYArr = [];
        let scaleNum = 1;
        this.setData({
            uploadImg: app.globalData.uploadImg
        })
        wx.request({
            url: app.globalData.URL + '/readFace', //仅为示例，并非真实的接口地址
            data: {
                "picPath": app.globalData.picPath,
            },
            method: "GET",
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function(res) {
                if (res.data.msg === "OK") {
                    app.globalData.report = res.data.data;
                    report = res.data.data;
                    imgState = true;

                    const ctx = wx.createCanvasContext('canvas');
                    var query = wx.createSelectorQuery();
                    //选择id
                    query.select('.scanImg-img-info-background-view').boundingClientRect(function(rect) {
                        let imgWidth = rect.width;
                        let imgHeight = rect.height;

                        //裁剪器官
                        let faceOrgArr = report.split('x1,x2,y1,y2:')[1].split(" ");
                        let faceArr = [faceOrgArr[1], faceOrgArr[2], faceOrgArr[3], parseInt(faceOrgArr[4])];
                        let newFaceData = report.split("landmark72: ")[1];
                        let newFaceArr = newFaceData.replace(/u/g, '').replace('[', '').replace(']', '').replace('↵', '').replace(/ 'x'/g, "'x'").split(', ')
                        if (height > width) {
                            if (height > imgHeight) {
                                scaleNum = imgHeight / height * 0.8
                            }
                        } else {
                            if (width > imgWidth) {
                                scaleNum = imgWidth / width * 0.8
                            }
                        }

                        viewTop = imgHeight / 2 - height * scaleNum / 2;
                        viewLeft = imgWidth / 2 - width * scaleNum / 2;
                        that.setData({
                            viewTop: viewTop + 'px',
                            viewLeft: viewLeft + 'px',
                            viewWidth: width * scaleNum + 'px',
                            viewHeight: height * scaleNum + 'px'
                        })

                        ctx.drawImage(app.globalData.uploadImg, 0, 0, width * scaleNum, height * scaleNum);
                        ctx.draw();
                        faceTop = +faceArr[0] * scaleNum;
                        faceLeft = +faceArr[2] * scaleNum;
                        faceXArr = [];
                        faceYArr = [];
                        that.data.backgroundArr = newFaceArr.map((item, index) => {
                            // item = JSON.parse("'"+item.replace(/\"/g,'').replace(/\'/g,"\"")+"'");
                            item = JSON.parse(item.replace(/'/g, "\""));
                            item.x = item.x * scaleNum;
                            item.y = item.y * scaleNum;
                            faceXArr.push(item.x);
                            faceYArr.push(item.y);
                            return item
                        });
                        if (imgState && progressState) {
                            that.setData({
                                buttonState: true
                            })
                        }
                    }).exec();
                } else {
                    errorState = true;
                    wx.showModal({
                        title: '提示',
                        content: "面部识别有误，请上传可识别的图片",
                        showCancel: false,
                        success(res) {
                            if (res.confirm) {
                                wx.navigateTo({
                                    url: '../uploadImg/uploadImg',
                                })
                            }
                        }
                    })

                }
            }
        });
        let upNum = 0;
        let middleNum = 0;
        let downNum = 0;
        timer = setInterval(function() {
            if (upNum <= 100) {
                if (upNum <= 90) {
                    upNum++;
                } else if (upNum < 100 && upNum > 90) {
                    if (imgState) {
                        upNum++;
                    }
                } else if (upNum === 100) {
                    upNum++;
                    imgCanvas.default.maxNum([1, faceXArr, faceYArr, faceTop, faceLeft, width, height, 'face', 0, 0, 0, 0, that, 0, 0]);
                    that.setData({
                        upState: 'success',
                        upSrc: '../../images/right.png'
                    })
                }
            } else if (upNum > 100 && middleNum <= 100) {
                if (middleNum < 100 && upNum > 100) {
                    middleNum++;
                } else if (middleNum === 100) {
                    imgCanvas.default.maxNum([1, faceXArr, faceYArr, faceTop, faceLeft, width, height, 'face', 0, 0, 0, 0, that, 0, 1]);
                    middleNum++;
                    that.setData({
                        middleState: 'success',
                        middleSrc: '../../images/right.png'
                    })
                }
            } else if (middleNum > 100) {
                if (downNum <= 100 && middleNum > 100) {
                    downNum++;
                } else if (downNum > 100) {
                    that.setData({
                        downState: 'success',
                        downSrc: '../../images/right.png'
                    })
                    progressState = true;
                    if (imgState && progressState) {
                        that.setData({
                            buttonState: true
                        })
                    }
                    clearInterval(timer);
                }
            }
            that.setData({
                upProcess: upNum,
                middleProcess: middleNum,
                downProcess: downNum
            })
            if (errorState) {
                clearInterval(timer);
            }
        }, 15);

    },
    toReport: function() {
        wx.navigateTo({
            url: '../report/report',
        })
    }
})