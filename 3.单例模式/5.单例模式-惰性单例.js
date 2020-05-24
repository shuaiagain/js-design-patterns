//1.非通用惰性单例
var createIframe = (function() {

    var iframe;
    return function() {

        if (!iframe) {

            iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            document.body.appendChild(iframe);
        }

        return iframe;
    };
})();

//2.通用的惰性单例
// var obj;
// if(!obj){
//     obj=xxx;
// }

var getSingle = function(fn) {

    var result;
    return function() {
        debugger
        return result || (result = fn.apply(this, arguments));
    };
};

var createLoginLayer = function() {

    var div = document.createElement('div');
    div.innerHTML = '登录浮窗';
    div.style.display = 'none';

    document.body.appendChild(div);
    return div;
};

var loginAA = getSingle(createLoginLayer);
var loginLayerAA = loginAA();
loginLayerAA.style.display = 'block';

var loginBB = getSingle(createLoginLayer);
var loginLayerBB = loginBB();
loginLayerBB.style.display = 'block';

console.log(loginLayerAA == loginLayerBB)