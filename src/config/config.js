((doc, win) => {
    const docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = () => {
        let clientWidth = docEl.clientWidth; 
        if (!clientWidth) return;
        docEl.style.fontSize = (clientWidth / 750) + 'px';
        // clientWidth为手机的分辨率，后面的值为设计图大小
        // 假如是iphone6，屏幕尺寸375，html的font-size为
      };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
    //当dom加载完成时，或者 屏幕垂直、水平方向有改变进行html的根元素计算
})(document, window);