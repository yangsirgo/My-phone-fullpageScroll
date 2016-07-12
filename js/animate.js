/**
 * Created by ryf on 2016/7/7.
 */
;(function() {

    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];

    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }

    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }

}());

var getStyle=function (obj,attr){
    return obj.currentStyle ? obj.currentStyle[attr]:getComputedStyle(obj)[attr];
}

var Tween = {
    easeOutExpo: function (e, f, a, h, g) {
        return (f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a
    },
    linear: function (t, b, c, d){  //匀速
        return c*t/d + b;
    },
    easeIn: function(t, b, c, d){  //加速曲线
        return c*(t/=d)*t + b;
    },
    easeOut: function(t, b, c, d){  //减速曲线
        return -c *(t/=d)*(t-2) + b;
    },
    easeBoth: function(t, b, c, d){  //加速减速曲线
        if ((t/=d/2) < 1) {
            return c/2*t*t + b;
        }
        return -c/2 * ((--t)*(t-2) - 1) + b;
    },
    easeInStrong: function(t, b, c, d){  //加加速曲线
        return c*(t/=d)*t*t*t + b;
    },
    easeOutStrong: function(t, b, c, d){  //减减速曲线
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    },
    easeBothStrong: function(t, b, c, d){  //加加速减减速曲线
        if ((t/=d/2) < 1) {
            return c/2*t*t*t*t + b;
        }
        return -c/2 * ((t-=2)*t*t*t - 2) + b;
    },
    elasticIn: function(t, b, c, d, a, p){  //正弦衰减曲线（弹动渐入）
        if (t === 0) {
            return b;
        }
        if ( (t /= d) == 1 ) {
            return b+c;
        }
        if (!p) {
            p=d*0.3;
        }
        if (!a || a < Math.abs(c)) {
            a = c;
            var s = p/4;
        } else {
            var s = p/(2*Math.PI) * Math.asin (c/a);
        }
        return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    },
    elasticOut: function(t, b, c, d, a, p){    //正弦增强曲线（弹动渐出）
        if (t === 0) {
            return b;
        }
        if ( (t /= d) == 1 ) {
            return b+c;
        }
        if (!p) {
            p=d*0.3;
        }
        if (!a || a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else {
            var s = p/(2*Math.PI) * Math.asin (c/a);
        }
        return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
    },
    elasticBoth: function(t, b, c, d, a, p){
        if (t === 0) {
            return b;
        }
        if ( (t /= d/2) == 2 ) {
            return b+c;
        }
        if (!p) {
            p = d*(0.3*1.5);
        }
        if ( !a || a < Math.abs(c) ) {
            a = c;
            var s = p/4;
        }
        else {
            var s = p/(2*Math.PI) * Math.asin (c/a);
        }
        if (t < 1) {
            return - 0.5*(a*Math.pow(2,10*(t-=1)) *
                Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        }
        return a*Math.pow(2,-10*(t-=1)) *
            Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
    }
}




function animate(obj,json,times,fx,fn){

    if( typeof times == 'undefined' ){
        times = 400;
        fx = 'linear';
    }

    if( typeof times == 'string' ){
        if(typeof fx == 'function'){
            fn = fx;
        }
        fx = times;
        times = 400;
    }
    else if(typeof times == 'function'){
        fn = times;
        times = 400;
        fx = 'linear';
    }
    else if(typeof times == 'number'){
        if(typeof fx == 'function'){
            fn = fx;
            fx = 'linear';
        }
        else if(typeof fx == 'undefined'){
            fx = 'linear';
        }
    }



    var iCur = {};
    var startTime = +new Date();

    for(var attr in json){
        iCur[attr] = 0;

        if( attr == 'opacity' ){
            if(Math.round(getStyle(obj,attr)*100) == 0){
                iCur[attr] = 0;
            }
            else{
                iCur[attr] = Math.round(getStyle(obj,attr)*100) || 100;
            }
        }
        else if(attr == 'scrollTop' ){
            iCur[attr]=window.scrollY||document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;;
        }
        else{
            iCur[attr] = parseInt(getStyle(obj,attr)) || 0;
        }

    }


    if(obj.timer){
        cancelAnimationFrame(obj.timer)
    }
    //obj.timer=null;

    function update(){

        var changeTime = +new Date();
        var scale = 1 - Math.max(0,startTime - changeTime + times)/times;

        for(var attr in json){

            var value = Tween[fx](scale*times, iCur[attr] , json[attr] - iCur[attr] , times );

            if(attr == 'opacity'){
                obj.style.filter = 'alpha(opacity='+ value +')';
                obj.style.opacity = value/100;
            }else if(attr == 'scrollTop'){
                window.scrollTo(0, value);
            }else{
                obj.style[attr] = value + 'px';
            }

        }

        if(scale == 1){
            cancelAnimationFrame(obj.timer);
            fn&&fn.apply(this, arguments);
        }else{
            //setup_fps_meters();
            obj.timer=requestAnimationFrame(arguments.callee);
        }

    }//update  end
    //    requestAnimationFrame(update);  //某些时候 画的过快  有bug
    update();

}