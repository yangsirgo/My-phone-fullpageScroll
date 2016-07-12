/**
 * Created by ryf on 2016/7/7.
 */

;(function($){
    $.extend($.fn,
        {
            delay: function delay(timer,callback){
                setTimeout(callback,timer)
            }
        })
})(Zepto)