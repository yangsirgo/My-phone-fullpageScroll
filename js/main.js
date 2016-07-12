/**
 * Created by ryf on 2016/7/8.
 */

require.config({
    baseUrl: 'js',
    shim:{
        "zepto":{
            exports:"$"
        },
        "swiper":{
            exports:"a"
        },
        "delay" : {
            deps : ["zepto"]
        },
        "animate":{
            deps : ["zepto"]
        }
    }
})
require(["zepto","delay","animate","music","swiperLine","swiperVertical"], function ($,a) {})