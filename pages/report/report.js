// pages/report/report.js
const app = getApp();
const imgCanvas = require('../../utils/drawCanvas.js')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        uploadImg: '',
        reportArr: [],
        viewWidth: '',
        viewHeight: '',
        backgroundArr: [],
        name: '',
        reportKey: 0,
        faceImg: '',
        reportNameArr: ["面形", "眉形", "眼形", "鼻形", "嘴形"],
        reportEnNameArr: ["face", "eyebrow", "eye", "nose", "mouth"],
        option: "",
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        let that = this;
        this.setData({
            option: JSON.stringify(options)
        })
        // app.globalData.report = `{u'log_id': 747956902798960321, u'timestamp': 1550279896, u'cached': 0, u'result': {u'face_list': [{u'angle': {u'yaw': -4.37, u'roll': -3.25, u'pitch': 18.89}, u'face_shape': {u'type': u'heart', u'probability': 0.45}, u'location': {u'width': 194, u'top': 183.18, u'height': 185, u'rotation': 0, u'left': 155.7}, u'face_type': {u'type': u'human', u'probability': 0.8}, u'face_token': u'c2cfaa02a4bb65a64341efda95068283', u'face_probability': 1}], u'face_num': 1}, u'error_code': 0, u'error_msg': u'SUCCESS'}↵face_num: 1↵x1,x2,y1,y2: 136 368 73 387↵0.511907720425↵80.0062497559 40.6078810085 41.3037528561↵221 227 -6↵222 227↵0.25 38.0 11.0 �۾ࣺ 48↵【面相解说】1 圆胖面型，个性开朗大方， 待人处事诚恳、和善，热心公益社交。↵↵【眉型解说】8 眉与眼之间距较开阔，其人乐观豁达，随遇而安，不太会和人计较，但眉眼也不宜间距太开，易受人利用而不自知。↵↵【眼型解说】9 眼角上扬的人，多富于行动力，头脑精敏灵活，处事爽快明朗，但带些高傲、自负的心态，擅于掌握时机，能够即时发挥自我优点。↵↵【鼻型解说】2 鼻子长的人，深其思维能力，但常考虑较多，心事不太吐露，较重视精神或心灵方面的充实，保守稳健、富耐性而带些孤刚。↵↵【嘴型解说】2 嘴角略往上翘，相学称为弯弓仰月口，其人聪明有为，具才华，知上进，能得朋友之信赖及仰重，如唇色红润明亮，更为晚运亨通之兆。↵↵angle_yaw: -1.38↵angle_pitch: 21.05↵angle_roll: -2.2↵age: 23↵beauty: 78.81↵gender: female↵race: yellow↵glasses: none↵expression: smile↵landmark72: [{ u'y': 122.21, u'x': 18.41}, { u'y': 153.98, u'x': 22.21}, { u'y': 186.05, u'x': 28.42}, { u'y': 217.73, u'x': 37.56}, { u'y': 250.08, u'x': 57.9}, { u'y': 280.67, u'x': 87.61}, { u'y': 293.35, u'x': 119.86}, { u'y': 279.53, u'x': 151.29}, { u'y': 247.92, u'x': 179.92}, { u'y': 214.97, u'x': 198.91}, { u'y': 183.09, u'x': 206.94}, { u'y': 151, u'x': 212.03}, { u'y': 119.15, u'x': 214.93}, { u'y': 138.63, u'x': 54.38}, { u'y': 131.66, u'x': 63.94}, { u'y': 130.14, u'x': 74.32}, { u'y': 133.98, u'x': 84.38}, { u'y': 144.91, u'x': 92.56}, { u'y': 145.05, u'x': 82.99}, { u'y': 145.11, u'x': 72.51}, { u'y': 142.79, u'x': 62.1}, { u'y': 137.09, u'x': 75.13}, { u'y': 119.92, u'x': 38.05}, { u'y': 109.38, u'x': 52}, { u'y': 109.65, u'x': 66.7}, { u'y': 112.09, u'x': 80.47}, { u'y': 121.27, u'x': 93.93}, { u'y': 120.18, u'x': 79.45}, { u'y': 118.17, u'x': 65.9}, { u'y': 117.56, u'x': 51.94}, { u'y': 144.01, u'x': 140.85}, { u'y': 132.89, u'x': 148.67}, { u'y': 128.45, u'x': 158.5}, { u'y': 129.79, u'x': 169.17}, { u'y': 136.4, u'x': 178.58}, { u'y': 141, u'x': 171.04}, { u'y': 143.6, u'x': 161.03}, { u'y': 143.87, u'x': 150.52}, { u'y': 135.61, u'x': 159.12}, { u'y': 120.49, u'x': 138.07}, { u'y': 110.7, u'x': 151}, { u'y': 107.77, u'x': 164.52}, { u'y': 106.9, u'x': 179.38}, { u'y': 116.49, u'x': 193.66}, { u'y': 114.87, u'x': 179.86}, { u'y': 116.3, u'x': 165.76}, { u'y': 118.67, u'x': 152.14}, { u'y': 147.08, u'x': 105.17}, { u'y': 166.49, u'x': 101.87}, { u'y': 186.25, u'x': 98.18}, { u'y': 202.26, u'x': 92.61}, { u'y': 208.1, u'x': 104.3}, { u'y': 207.76, u'x': 131.66}, { u'y': 201.86, u'x': 143.19}, { u'y': 185.81, u'x': 137.36}, { u'y': 166.12, u'x': 132.93}, { u'y': 146.75, u'x': 128.65}, { u'y': 202.37, u'x': 118.1}, { u'y': 222.62, u'x': 78.05}, { u'y': 223.97, u'x': 99.03}, { u'y': 226.39, u'x': 118.06}, { u'y': 223.31, u'x': 137.35}, { u'y': 221.79, u'x': 158.47}, { u'y': 244.12, u'x': 142.9}, { u'y': 254.18, u'x': 118.68}, { u'y': 244.65, u'x': 94.15}, { u'y': 227.87, u'x': 98.35}, { u'y': 231.27, u'x': 117.75}, { u'y': 227.44, u'x': 137.94}, { u'y': 236.77, u'x': 138.94}, { u'y': 242.4, u'x': 118.51}, { u'y': 237.54, u'x': 97.88}]↵`;
        // app.globalData.uploadImg = 'http://tmp/wxca52e693f0d4d111.o6zAJswtvn_qU75BO96lxuezT6mE.z65vJg5I2EqE832b52f3dce6bb6282768528a9cac12b.png';
        app.globalData.width = 520;
        app.globalData.height = 460;
        if (options.reportKey) {
            wx.showLoading({
                title: '面相数据加载中',
                mask: true
            })
            this.setData({
                reportKey: options.reportKey
            })
            wx.request({
                url: app.globalData.URL + '/resultDetail',
                data: {
                    "resultId": options.reportKey,
                },
                method: "GET",
                header: {
                    'content-type': 'application/json' // 默认值
                },
                success: function(res) {
                    app.globalData.report = res.data.data.result;
                    app.globalData.uploadImg = "https://face2.qingtime.cn/" + res.data.data.picPath.replace(/\\/g, '/');
                    app.globalData.height = res.data.data.picHeight;
                    app.globalData.width = res.data.data.picWidth;
                    app.globalData.name = res.data.data.reportName;
                    console.log(app.globalData.uploadImg);
                    wx.downloadFile({
                        url: "https://face2.qingtime.cn/" + res.data.data.picPath.replace(/\\/g, '/'), // 仅为示例，并非真实的资源
                        success(res) {
                            // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
                            if (res.statusCode === 200) {
                                app.globalData.uploadImg = res.tempFilePath;
                                that.getReport();
                            }
                        }
                    })
                }
            })
        } else {
            this.getReport();
        }
    },
    getReport: function() {
        let that = this;
        let arr = app.globalData.report.split("angle_yaw")[0].split("【").splice(1);
        let reportArr = arr.map((item, index) => {
            return item.split("】")[1].substring(2).replace(/↵/g, "").replace(/\"/g, "");
        });
        this.setData({
            reportArr: reportArr,
            uploadImg: app.globalData.uploadImg,
            name: app.globalData.name
        })
        //裁剪器官
        let faceOrgArr = app.globalData.report.split('x1,x2,y1,y2:')[1].split(" ");
        let faceArr = [faceOrgArr[1], faceOrgArr[2], faceOrgArr[3], parseInt(faceOrgArr[4])];
        let newFaceData = app.globalData.report.split("landmark72: ")[1];
        let newFaceArr = newFaceData.replace(/u/g, '').replace('[', '').replace(']', '').replace('↵', '').replace(/ 'x'/g, "'x'").split(', ')
        let faceXArr = [];
        let faceYArr = [];
        let faceNewArr = [];
        let eyebrowXArr = [];
        let eyebrowYArr = [];
        let eyebrowLeftArr = [];
        let eyebrowRightArr = [];
        let eyeXArr = [];
        let eyeYArr = [];
        let eyeLeftArr = [];
        let eyeRightArr = [];
        let mouthXArr = [];
        let mouthYArr = [];
        let mouthArr = [];
        let noseXArr = [];
        let noseYArr = [];
        let noseArr = [];
        let scaleNum = 1;
        let query = wx.createSelectorQuery();
        if (app.globalData.width > 250) {
            scaleNum = 250 / app.globalData.width
        }
        // that.setData({
        //     viewWidth: app.globalData.width* scaleNum+"px",
        //     viewHeight: app.globalData.height* scaleNum+"px"
        // })
        // let faceWidth = app.globalData.width;
        // let faceHeight = app.globalData.height;
        that.setData({
            viewWidth: app.globalData.width * scaleNum + "px",
            viewHeight: app.globalData.height * scaleNum + "px"
        })
        let faceWidth = app.globalData.width;
        let faceHeight = app.globalData.height;
        let faceTop = +faceArr[0] * scaleNum;
        let faceLeft = +faceArr[2] * scaleNum;
        that.data.backgroundArr = newFaceArr.map((item, index) => {
            // item = JSON.parse("'"+item.replace(/\"/g,'').replace(/\'/g,"\"")+"'");
            item = JSON.parse(item.replace(/\'/g, "\""));
            item.x = item.x * scaleNum;
            item.y = item.y * scaleNum;
            if (0 <= index && index <= 12) {
                faceXArr.push(item.x);
                faceYArr.push(item.y);
                faceNewArr.push(item);
            }
            if (13 <= index && index <= 20 || 30 <= index && index <= 37) {
                eyeXArr.push(item.x);
                eyeYArr.push(item.y);
                if (13 <= index && index <= 20) {
                    eyeLeftArr.push(item);
                }
                if (30 <= index && index <= 37) {
                    eyeRightArr.push(item);
                }
            }
            if (22 <= index && index <= 29 || 39 <= index && index <= 46) {
                eyebrowXArr.push(item.x);
                eyebrowYArr.push(item.y);
                if (22 <= index && index <= 29) {
                    eyebrowLeftArr.push(item);
                }
                if (39 <= index && index <= 46) {
                    eyebrowRightArr.push(item);
                }
            }
            if (47 <= index && index <= 56) {
                noseXArr.push(item.x);
                noseYArr.push(item.y);
                noseArr.push(item);
            }
            if (58 <= index && index <= 65) {
                mouthXArr.push(item.x);
                mouthYArr.push(item.y);
                mouthArr.push(item);
            }
            return item
        });
        imgCanvas.default.maxNum([scaleNum, eyeXArr, eyeYArr, faceTop, faceLeft, faceWidth, faceHeight, 'eye', eyeLeftArr, eyeRightArr, 0, 0, this, 1, 1]);
        imgCanvas.default.maxNum([scaleNum, eyebrowXArr, eyebrowYArr, faceTop, faceLeft, faceWidth, faceHeight, 'eyebrow', eyebrowLeftArr, eyebrowRightArr, 0, 0, this, 1, 1]);
        imgCanvas.default.maxNum([scaleNum, faceXArr, faceYArr, faceTop, faceLeft, faceWidth, faceHeight, 'face', faceNewArr, 0, 0, 0, this, 1, 1]);
        imgCanvas.default.maxNum([scaleNum, mouthXArr, mouthYArr, faceTop, faceLeft, faceWidth, faceHeight, 'mouth', mouthArr, 0, 0, 0, this, 1, 1]);
        imgCanvas.default.maxNum([scaleNum, noseXArr, noseYArr, faceTop, faceLeft, faceWidth, faceHeight, 'nose', noseArr, 0, 0, 0, this, 1, 1]);
        let topAreaXArr = [
            // +faceArr[0] + (faceArr[1] - faceArr[0]) * 0.1,
            0,
            Math.min.apply(null, eyebrowXArr)
        ];
        let topAreaYArr = [
            // +faceArr[2] + (faceArr[3] - faceArr[2]) * 0.1,
            (faceArr[3] - faceArr[2]) * 0.05,
            Math.min.apply(null, eyebrowYArr)
        ];
        let middleAreaXArr = [
            Math.min.apply(null, eyebrowXArr),
            Math.max.apply(null, noseXArr),
        ];
        let middleAreaYArr = [
            Math.min.apply(null, eyebrowYArr),
            Math.max.apply(null, noseYArr),
        ];
        let bottomAreaXArr = [
            Math.max.apply(null, noseXArr),
            Math.max.apply(null, faceXArr)
        ];
        let bottomAreaYArr = [
            Math.max.apply(null, noseYArr),
            Math.max.apply(null, faceYArr)
        ];
        imgCanvas.default.maxNum([scaleNum, topAreaXArr, topAreaYArr, faceTop, faceLeft, faceWidth, faceHeight, 'topArea', 0, 0, Math.max.apply(null, faceXArr) - Math.min.apply(null, faceXArr),
            Math.min.apply(null, faceXArr), this, 1, 1
        ]);
        imgCanvas.default.maxNum([scaleNum, middleAreaXArr, middleAreaYArr, faceTop, faceLeft, faceWidth, faceHeight, 'middleArea', 0, 0, Math.max.apply(null, faceXArr) - Math.min.apply(null, faceXArr), Math.min.apply(null, faceXArr), this, 1, 1]);
        imgCanvas.default.maxNum([scaleNum, bottomAreaXArr, bottomAreaYArr, faceTop, faceLeft, faceWidth, faceHeight, 'bottomArea', 0, 0, Math.max.apply(null, faceXArr) - Math.min.apply(null, faceXArr), Math.min.apply(null, faceXArr), this, 1, 1]);
    },
    toWeb: function(e) {
        wx.navigateTo({
            url: '../web/web?webName=' + e.currentTarget.dataset.webname,
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    toIndex() {
        wx.navigateTo({
            url: '../index/index',
        })
    },
    saveReport: function() {
        let that = this;
        wx.request({
            url: app.globalData.URL + '/saveReport', //仅为示例，并非真实的接口地址
            data: {
                "picPath": app.globalData.picPath,
                "userKey": app.globalData.userData._key,
                "picHeight": app.globalData.height,
                "picWidth": app.globalData.width,
                "reportName": app.globalData.name,
                "content": app.globalData.report
            },
            method: "POST",
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function(res) {
                wx.showToast({
                    title: '保存成功',
                    icon: 'success',
                    duration: 2000
                })
                that.setData({
                    reportKey: res.data.key
                })
                // wx.navigateTo({
                //     url: '../history/history',
                // })
            },
        })
    },
    onReady: function() {},

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
        let that = this;
        return {
            title: '分享面向报告', // 转发后 所显示的title
            path: '/pages/report/report?reportKey=' + that.data.reportKey, // 相对的路径
            // success: (res) => { // 成功后要做的事情
            //     console.log("转发成功", res);
            //     wx.getShareInfo({
            //         shareTicket: res.shareTickets[0],
            //         success: (res) => {
            //             wx.showToast({
            //                 title: '分享成功',
            //                 icon: 'success',
            //                 duration: 2000
            //             })
            //         },
            //         fail: function(res) {
            //             console.log(res)
            //         },
            //         complete: function(res) {
            //             console.log(res)
            //         }
            //     })
            // },
            // fail: function(res) {
            //     // 分享失败
            //     console.log(res)
            // }
        }
    }

})