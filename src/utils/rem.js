((doc, win) => {
    const docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = () => {
        let clientWidth = docEl.clientWidth; 
        if (!clientWidth) return;
        if(clientWidth>=640){
            docEl.style.fontSize = '100px';          
        }else{
            docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
        }
        // docEl.style.fontSize = 20 * (clientWidth / 750) + 'px';
        // clientWidth为手机的分辨率，后面的值为设计图大小
        // 假如是iphone6，屏幕尺寸375，html的font-size为
      };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
    // 当dom加载完成时，或者 屏幕垂直、水平方向有改变进行html的根元素计算


    const test = () => {
        if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){
            doc.body.style.fontFamily = "'Helvetica Neue', Helvetica, Arial, sans-serif"
        }else if(/(Android)/i.test(navigator.userAgent)){
            doc.body.style.fontFamily = "'RobotoRegular', 'Droid Sans', sans-serif"
        }
    }
    win.addEventListener(resizeEvt, test, false);
})(document, window);