module.exports = {
    getCookie: function(cookieName) {
        console.log('work!')
        let strCookie = document.cookie,
            arrCookie = strCookie.split("; ");
        for (let i = 0; i < arrCookie.length; i++) {
            let arr = arrCookie[i].split("=");
            if (cookieName === arr[0]) {
                return arr[1];
            }
        }
        return "";
    }
}