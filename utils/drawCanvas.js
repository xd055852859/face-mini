const app = getApp();
const DrawCanvas = {
    maxNum(arr) {
        let [scaleNum, arr1, arr2, top, left, width, height, canvasName, arr3, arr4, faceWidth, faceBegin, that, drawContext, drawBgContext] = [...arr];
        const context = wx.createCanvasContext(canvasName + 'Canvas');
        let backgroundNumArr = [13, 22, 24, 26, 17, 15, 13, 19, 17, 50, 58, 64, 62, 53, 30, 39, 41, 43, 34, 32, 30, 36, 34];
        let xMax = (Math.max.apply(null, arr1) + top);
        let xMin = (Math.min.apply(null, arr1) + top);
        let yMax = (Math.max.apply(null, arr2) + left);
        let yMin = (Math.min.apply(null, arr2) + left);
        if (drawContext) {
            context.beginPath();
            if (arr3) {
                context.rect(xMin - 10, yMin - 10, xMax - xMin + 20, yMax - yMin + 20);
            } else {
                context.rect(faceBegin + top, yMin, faceWidth, yMax - yMin);
            }
            context.setFillStyle('rgba(0,0,0,0)')
            context.fill();
            // context.arc(50, 50, 25, 0, 2 * Math.PI)
            context.clip();
            context.drawImage(app.globalData.uploadImg, 0, 0, width * scaleNum, height * scaleNum);
        }
        context.beginPath();
        this.drawRectLine(xMin - 9.5, yMin - 9.5, xMin + 2.5, yMin - 9.5, context); //横
        this.drawRectLine(xMin - 9.5, yMin - 9.5, xMin - 9.5, yMin - 0.5, context); //竖

        this.drawRectLine(xMax + 9.5, yMin - 9.5, xMax - 2.5, yMin - 9.5, context);
        this.drawRectLine(xMax + 9.5, yMin - 9.5, xMax + 9.5, yMin + 0.5, context);

        this.drawRectLine(xMin - 9.5, yMax + 9.5, xMin + 2.5, yMax + 9.5, context);
        this.drawRectLine(xMin - 9.5, yMax + 9.5, xMin - 9.5, yMax - 0.5, context);

        this.drawRectLine(xMax + 9.5, yMax + 9.5, xMax - 2.5, yMax + 9.5, context);
        this.drawRectLine(xMax + 9.5, yMax + 9.5, xMax + 9.5, yMax - 0.5, context);
        context.lineWidth = 2;
        context.setStrokeStyle('#00DF72');
        context.stroke();
        context.closePath();
        context.save();
        if (drawContext) {
            if (arr3) {
                this.drawLine(arr3, context, top, left, '#00DF72');
            }
            if (arr4) {
                this.drawLine(arr4, context, top, left, '#00DF72');
            }
            context.save();
            // ctx.fill()     
            context.closePath();

        }

        context.restore();
        context.draw();
        // const contextCover = wx.createCanvasContext(canvasName + 'CoverCanvas');
        // contextCover.setFillStyle("rgba(0, 0, 0, 0.4)")
        // contextCover.fillRect(0, 0, width, height);
        // contextCover.draw(true);
        if (drawBgContext) {
            const contextBackground = wx.createCanvasContext(canvasName + 'BackgroundCanvas');
            //contextBackground.drawImage(this.state.uploadImg, 0, 0, width * scaleNum, height * scaleNum);
            //contextBackground.drawImage(this.state.uploadImg, 0, 0, width, height);

            contextBackground.beginPath();
            contextBackground.arc(that.data.backgroundArr[57].x + top, that.data.backgroundArr[57].y + left, 1.5, 0, 2 * Math.PI);
            contextBackground.setFillStyle("rgba(255,255,255,0.4)");
            contextBackground.fill();
            contextBackground.beginPath();
            this.drawRectLine(that.data.backgroundArr[57].x + top, that.data.backgroundArr[57].y + left, that.data.backgroundArr[17].x + top, that.data.backgroundArr[17].y + left, contextBackground);
            this.drawRectLine(that.data.backgroundArr[57].x + top, that.data.backgroundArr[57].y + left, that.data.backgroundArr[30].x + top, that.data.backgroundArr[30].y + left, contextBackground);
            this.drawRectLine(that.data.backgroundArr[57].x + top, that.data.backgroundArr[57].y + left, that.data.backgroundArr[50].x + top, that.data.backgroundArr[50].y + left, contextBackground);
            this.drawRectLine(that.data.backgroundArr[57].x + top, that.data.backgroundArr[57].y + left, that.data.backgroundArr[53].x + top, that.data.backgroundArr[53].y + left, contextBackground);
            contextBackground.setStrokeStyle("rgba(255,255,255,0.4)");
            contextBackground.stroke();
            contextBackground.closePath();

            backgroundNumArr.forEach((item, index) => {
                //圆点
                contextBackground.beginPath();
                contextBackground.arc(that.data.backgroundArr[item].x + top, that.data.backgroundArr[item].y + left, 1.5, 0, 2 * Math.PI);
                contextBackground.setFillStyle("rgba(255,255,255,0.4)");
                contextBackground.fill();
                contextBackground.beginPath();
                if (index < backgroundNumArr.length - 1) {
                    this.drawRectLine(that.data.backgroundArr[item].x + top, that.data.backgroundArr[item].y + left, that.data.backgroundArr[backgroundNumArr[index + 1]].x + top, that.data.backgroundArr[backgroundNumArr[index + 1]].y + left, contextBackground);
                }
                contextBackground.setStrokeStyle("rgba(255,255,255,0.4)");
                contextBackground.stroke();
                contextBackground.closePath();

            });
            contextBackground.draw();
            wx.hideLoading();
        }
    },
    drawLine(arr, context, top, left, color) {
        arr.forEach((item, index) => {
            if (index > 0) {
                context.moveTo(arr[index - 1].x + top, arr[index - 1].y + left);
                context.lineTo(item.x + top, item.y + left);
                context.setStrokeStyle(color);
                context.stroke();
            } else {
                context.moveTo(arr[0].x + top, arr[0].y + left);
            }
        })
        context.moveTo(arr[arr.length - 1].x + top, arr[arr.length - 1].y + left);
        context.lineTo(arr[0].x + top, arr[0].y + left);
        context.setStrokeStyle(color);
        context.stroke();

    },
    drawRectLine(beginx, beginy, endx, endy, context) {
        context.moveTo(beginx, beginy);
        context.lineTo(endx, endy);
    }
}
export default DrawCanvas