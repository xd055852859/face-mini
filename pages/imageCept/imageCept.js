// pages/imageCept/imageCept.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        faceData: `{u'log_id': 747956902798960321, u'timestamp': 1550279896, u'cached': 0, u'result': {u'face_list': [{u'angle': {u'yaw': -4.37, u'roll': -3.25, u'pitch': 18.89}, u'face_shape': {u'type': u'heart', u'probability': 0.45}, u'location': {u'width': 194, u'top': 183.18, u'height': 185, u'rotation': 0, u'left': 155.7}, u'face_type': {u'type': u'human', u'probability': 0.8}, u'face_token': u'c2cfaa02a4bb65a64341efda95068283', u'face_probability': 1}], u'face_num': 1}, u'error_code': 0, u'error_msg': u'SUCCESS'}↵face_num: 1↵x1,x2,y1,y2: 136 368 73 387↵0.511907720425↵80.0062497559 40.6078810085 41.3037528561↵221 227 -6↵222 227↵0.25 38.0 11.0 �۾ࣺ 48↵【面相解说】1 圆胖面型，个性开朗大方， 待人处事诚恳、和善，热心公益社交。↵↵【眉型解说】8 眉与眼之间距较开阔，其人乐观豁达，随遇而安，不太会和人计较，但眉眼也不宜间距太开，易受人利用而不自知。↵↵【眼型解说】9 眼角上扬的人，多富于行动力，头脑精敏灵活，处事爽快明朗，但带些高傲、自负的心态，擅于掌握时机，能够即时发挥自我优点。↵↵【鼻型解说】2 鼻子长的人，深其思维能力，但常考虑较多，心事不太吐露，较重视精神或心灵方面的充实，保守稳健、富耐性而带些孤刚。↵↵【嘴型解说】2 嘴角略往上翘，相学称为弯弓仰月口，其人聪明有为，具才华，知上进，能得朋友之信赖及仰重，如唇色红润明亮，更为晚运亨通之兆。↵↵angle_yaw: -1.38↵angle_pitch: 21.05↵angle_roll: -2.2↵age: 23↵beauty: 78.81↵gender: female↵race: yellow↵glasses: none↵expression: smile↵landmark72: [{ u'y': 122.21, u'x': 18.41}, { u'y': 153.98, u'x': 22.21}, { u'y': 186.05, u'x': 28.42}, { u'y': 217.73, u'x': 37.56}, { u'y': 250.08, u'x': 57.9}, { u'y': 280.67, u'x': 87.61}, { u'y': 293.35, u'x': 119.86}, { u'y': 279.53, u'x': 151.29}, { u'y': 247.92, u'x': 179.92}, { u'y': 214.97, u'x': 198.91}, { u'y': 183.09, u'x': 206.94}, { u'y': 151, u'x': 212.03}, { u'y': 119.15, u'x': 214.93}, { u'y': 138.63, u'x': 54.38}, { u'y': 131.66, u'x': 63.94}, { u'y': 130.14, u'x': 74.32}, { u'y': 133.98, u'x': 84.38}, { u'y': 144.91, u'x': 92.56}, { u'y': 145.05, u'x': 82.99}, { u'y': 145.11, u'x': 72.51}, { u'y': 142.79, u'x': 62.1}, { u'y': 137.09, u'x': 75.13}, { u'y': 119.92, u'x': 38.05}, { u'y': 109.38, u'x': 52}, { u'y': 109.65, u'x': 66.7}, { u'y': 112.09, u'x': 80.47}, { u'y': 121.27, u'x': 93.93}, { u'y': 120.18, u'x': 79.45}, { u'y': 118.17, u'x': 65.9}, { u'y': 117.56, u'x': 51.94}, { u'y': 144.01, u'x': 140.85}, { u'y': 132.89, u'x': 148.67}, { u'y': 128.45, u'x': 158.5}, { u'y': 129.79, u'x': 169.17}, { u'y': 136.4, u'x': 178.58}, { u'y': 141, u'x': 171.04}, { u'y': 143.6, u'x': 161.03}, { u'y': 143.87, u'x': 150.52}, { u'y': 135.61, u'x': 159.12}, { u'y': 120.49, u'x': 138.07}, { u'y': 110.7, u'x': 151}, { u'y': 107.77, u'x': 164.52}, { u'y': 106.9, u'x': 179.38}, { u'y': 116.49, u'x': 193.66}, { u'y': 114.87, u'x': 179.86}, { u'y': 116.3, u'x': 165.76}, { u'y': 118.67, u'x': 152.14}, { u'y': 147.08, u'x': 105.17}, { u'y': 166.49, u'x': 101.87}, { u'y': 186.25, u'x': 98.18}, { u'y': 202.26, u'x': 92.61}, { u'y': 208.1, u'x': 104.3}, { u'y': 207.76, u'x': 131.66}, { u'y': 201.86, u'x': 143.19}, { u'y': 185.81, u'x': 137.36}, { u'y': 166.12, u'x': 132.93}, { u'y': 146.75, u'x': 128.65}, { u'y': 202.37, u'x': 118.1}, { u'y': 222.62, u'x': 78.05}, { u'y': 223.97, u'x': 99.03}, { u'y': 226.39, u'x': 118.06}, { u'y': 223.31, u'x': 137.35}, { u'y': 221.79, u'x': 158.47}, { u'y': 244.12, u'x': 142.9}, { u'y': 254.18, u'x': 118.68}, { u'y': 244.65, u'x': 94.15}, { u'y': 227.87, u'x': 98.35}, { u'y': 231.27, u'x': 117.75}, { u'y': 227.44, u'x': 137.94}, { u'y': 236.77, u'x': 138.94}, { u'y': 242.4, u'x': 118.51}, { u'y': 237.54, u'x': 97.88}]↵`,
        backgroundArr: []

    },
    //绘制二维码
    drawCode: function(canvasId, mainImg, personImg) {
        var context = wx.createCanvasContext(canvasId);
        context.drawImage(mainImg, 0, 0, 300, 300);
        context.arc(150, 150, 71, 0, 2 * Math.PI);
        context.clip();
        context.drawImage(personImg, 80, 80, 140, 140);
        context.draw();

        // var context = wx.createCanvasContext(canvasId);
        // context.drawImage(mainImg, 0, 0, 600, 600);
        // context.arc(300, 300, 142, 0, 2 * Math.PI);
        // context.clip();
        // context.drawImage(personImg, 160, 160, 280, 280);
        // context.draw();
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        let faceArr = this.data.faceData.split('↵')[2].split(":")[1].split(" ").splice(1)
        let faceTop = +faceArr[0];
        let faceLeft = +faceArr[2];
        let faceHeight = faceArr[1] - faceArr[0];
        let faceWidth = faceArr[3] - faceArr[2];
        console.log(faceArr);
        console.log(faceTop, faceLeft, faceHeight, faceWidth);
        let newFaceData = "[{ u'y':" + this.data.faceData.split("[{ u'y':")[1];
        let newFaceArr = newFaceData.replace(/ u/g, '').replace('[', '').replace(']↵', '').split(', ')
        // console.log(newFaceArr);
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
        this.data.backgroundArr = newFaceArr.map((item, index) => {
            // item = JSON.parse("'"+item.replace(/\"/g,'').replace(/\'/g,"\"")+"'");
            item = JSON.parse(item.replace(/\'/g, "\""));
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
        this.maxNum(eyeXArr, eyeYArr, eyeLeftArr, faceTop, faceLeft, 460, 520, 'eye', eyeRightArr);
        this.maxNum(eyebrowXArr, eyebrowYArr, eyebrowLeftArr, faceTop, faceLeft, 460, 520, 'eyebrow', eyebrowRightArr);
        this.maxNum(faceXArr, faceYArr, faceNewArr, faceTop, faceLeft, 460, 520, 'face');
        this.maxNum(mouthXArr, mouthYArr, mouthArr, faceTop, faceLeft, 460, 520, 'mouth');
        this.maxNum(noseXArr, noseYArr, noseArr, faceTop, faceLeft, 460, 520, 'nose');
        //脸型 0-12
        //左眉毛 22-29   右眉毛  39-46
        //左眼 13-20  右眼 30-37
        //嘴巴 58-71
        //鼻子47-57

        // const context = wx.createCanvasContext('firstCanvas');
        // context.drawImage("../../images/uploadImg-bigImg-person.png", 0, 0, 520, 460);
        // context.fillRect(190.38, 203.14, 38, 15)
        // // context.fillRect(136, 73, 232, 314)
        // // context.drawImage("../../images/uploadImg-bigImg-person.png", 0, 0, 1040, 920);
        // context.clip()
        // context.draw();
    },
    maxNum: function(arr1, arr2, arr3, top, left, height, width, canvasName, arr4) {
        let xMax = Math.max.apply(null, arr1) + top;
        let xMin = Math.min.apply(null, arr1) + top;
        let yMax = Math.max.apply(null, arr2) + left;
        let yMin = Math.min.apply(null, arr2) + left;
        let query = wx.createSelectorQuery();
        let backgroundNumArr = [13, 22, 24, 26, 17, 15, 13, 19, 17, 50, 58, 64, 62, 53, 30, 39, 41, 43, 34, 32, 30, 36, 34];
        let backgroundLineArr = [];
        const context = wx.createCanvasContext(canvasName + 'Canvas');
        this.setData({
            [canvasName + 'Width']: width + 'px',
            [canvasName + 'Height']: height + 'px'
        });
        context.fillRect(xMin - 10, yMin - 10, xMax - xMin + 20, yMax - yMin + 20)
        // context.scale(0.5, 0.5)
        context.clip()
        context.drawImage("../../images/uploadImg-bigImg-person.png", 0, 0, width, height);

        this.drawRectLine(xMin - 9.5, yMin - 9.5, xMin + 2.5, yMin - 9.5, context); //横
        this.drawRectLine(xMin - 9.5, yMin - 9.5, xMin - 9.5, yMin - 0.5, context); //竖

        this.drawRectLine(xMax + 9.5, yMin - 9.5, xMax - 2.5, yMin - 9.5, context);
        this.drawRectLine(xMax + 9.5, yMin - 9.5, xMax + 9.5, yMin + 0.5, context);

        this.drawRectLine(xMin - 9.5, yMax + 9.5, xMin + 2.5, yMax + 9.5, context);
        this.drawRectLine(xMin - 9.5, yMax + 9.5, xMin - 9.5, yMax - 0.5, context);

        this.drawRectLine(xMax + 9.5, yMax + 9.5, xMax - 2.5, yMax + 9.5, context);
        this.drawRectLine(xMax + 9.5, yMax + 9.5, xMax + 9.5, yMax - 0.5, context);

        this.drawLine(arr3, context, top, left, '#00DF72');
        if (arr4) {
            this.drawLine(arr4, context, top, left, '#00DF72');
        }
        context.draw();

        const contextCover = wx.createCanvasContext(canvasName + 'CoverCanvas');
        contextCover.fillStyle = "rgba(0, 0, 0, 0.4)";
        contextCover.fillRect(0, 0, width, height);
        context.draw();

        const contextBackground = wx.createCanvasContext(canvasName + 'BackgroundCanvas');
        contextBackground.drawImage("../../images/uploadImg-bigImg-person.png", 0, 0, width, height);
        contextBackground.lineWidth = 0.8;
        backgroundNumArr.forEach((item, index) => {
            //圆点
            contextBackground.arc(this.data.backgroundArr[item].x + top, this.data.backgroundArr[item].y + left, 1, 0, 2 * Math.PI);
            contextBackground.setStrokeStyle("rgba(255,255,255,0.4)");

            if (index < backgroundNumArr.length - 1) {
                this.drawRectLine(this.data.backgroundArr[item].x + top, this.data.backgroundArr[item].y + left, this.data.backgroundArr[backgroundNumArr[index + 1]].x + top, this.data.backgroundArr[backgroundNumArr[index + 1]].y + left, contextBackground);
            } else {
                contextBackground.arc(this.data.backgroundArr[57].x + top, this.data.backgroundArr[57].y + left, 2, 0, 2 * Math.PI);
                contextBackground.setStrokeStyle("white");
                this.drawRectLine(this.data.backgroundArr[57].x + top, this.data.backgroundArr[57].y + left, this.data.backgroundArr[17].x + top, this.data.backgroundArr[17].y + left, contextBackground);
                this.drawRectLine(this.data.backgroundArr[57].x + top, this.data.backgroundArr[57].y + left, this.data.backgroundArr[30].x + top, this.data.backgroundArr[30].y + left, contextBackground);
                this.drawRectLine(this.data.backgroundArr[57].x + top, this.data.backgroundArr[57].y + left, this.data.backgroundArr[50].x + top, this.data.backgroundArr[50].y + left, contextBackground);
                this.drawRectLine(this.data.backgroundArr[57].x + top, this.data.backgroundArr[57].y + left, this.data.backgroundArr[53].x + top, this.data.backgroundArr[53].y + left, contextBackground);
            }
            contextBackground.stroke();
        });
        contextBackground.draw();
    },
    drawLine: function(arr, context, top, left, color) {
        console.log(arr);
        context.moveTo(arr[0].x + top, arr[0].y + left);
        arr.forEach((item, index) => {
            if (index > 0) {
                context.lineTo(item.x + top, item.y + left);
                context.setStrokeStyle(color);
                context.stroke();
            }
        })
        context.lineTo(arr[0].x + top, arr[0].y + left);
        context.setStrokeStyle(color);
        context.stroke();
    },
    drawRectLine: function(beginx, beginy, endx, endy, context) {
        context.moveTo(beginx, beginy);
        context.lineTo(endx, endy);
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