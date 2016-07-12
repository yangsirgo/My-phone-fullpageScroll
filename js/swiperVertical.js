/**
 * Created by ryf on 2016/7/8.
 */

define(["zepto","swiper","animate"], function ($,a) {
    function get(className) {
        return document.querySelector(className);
    }
    var mySwiper = new Swiper('.swiper-container-v', {
        direction: 'vertical',
        pagination: '.swiper-pagination-v',
        mousewheelControl: true,
        onInit: function (swiper) {
            $(".section1-bg2").delay(0, function () {
                animate(get(".section1-bg2"), {
                    'top': '0',
                }, 1500, 'easeOutStrong');
            });
            $(".section1-bg3").delay(0, function () {
                animate(get(".section1-bg3"), {
                    'top': '0',
                }, 1500, 'easeOutStrong');
            });
            $(".index-box").delay(0, function () {
                animate(get(".index-box"), {
                    'top': (0.16 * window.innerHeight),
                }, 1500, 'easeOutStrong');
            });
        },
        onSlideChangeEnd: function (swiper) {
            var index = mySwiper.activeIndex;
            if (index == 1) {
                $(".section1-bg2").delay(0, function () {
                    animate(get(".section1-bg2"), {
                        top: '0',
                    }, 1500, 'easeOutStrong');
                });
                $(".section1-bg3").delay(0, function () {
                    animate(get(".section1-bg3"), {
                        top: '0',
                    }, 1500, 'easeOutStrong');
                });
                $(".index-box").delay(0, function () {
                    animate(get(".index-box"), {
                        top: (0.16 * window.innerHeight),
                    }, 1500, 'easeOutStrong');
                });
            }
            if (index == 2) {
                $(".about-eng").delay(500, function () {
                    animate(get(".about-eng"), {
                        top: (-1 * window.innerHeight),
                    }, 1500, 'easeOutStrong');
                });
                $(".about-names").delay(500, function () {
                    animate(get(".about-names"), {
                        left: (-1 * window.innerWidth),
                    }, 1500, 'easeOutStrong');
                });
                $(".about-zh").delay(700, function () {
                    animate(get(".about-zh"), {
                        left: (-1 * window.innerWidth),
                    }, 1500, 'easeOutStrong');
                });
                $(".about-name").delay(900, function () {
                    animate(get(".about-name"), {
                        left: (-1 * window.innerWidth),
                    }, 1500, 'easeOutStrong');
                });
                $(".about-bottom").delay(900, function () {
                    animate(get(".about-bottom"), {
                        right: (-1 * window.innerWidth),
                    }, 1500, 'easeOutStrong');
                });
            }
            if (index == 3) {
                $('.server-eng').delay(500, function () {
                    animate(get('.server-eng'),{
                        top: (-1 * window.innerHeight),
                    }, 1500, 'easeOutStrong');
                });
                $('.server-names').delay(500, function () {
                    animate(get('.server-names'),{
                        left: (-1 * window.innerWidth)
                    }, 1500, 'easeOutStrong');
                });
                $('.server-zh').delay(500, function () {
                    animate(get('.server-zh'),{
                        right: (-1 * window.innerWidth),
                    }, 1500, 'easeOutStrong');
                });
                $('.server-bottom-os').delay(500, function () {
                    animate(get('.server-bottom-os'),{
                        left: (-1 * window.innerWidth),
                    }, 1500, 'easeOutStrong');
                });
                $('.server-bottom-oz').delay(500, function () {
                    animate(get('.server-bottom-oz'),{
                        right: (-1 * window.innerWidth),
                    }, 1500, 'easeOutStrong');
                });

            }
            if (index == 4) {
                $('.cpyy-hwtg-ts').delay(500, function () {
                    animate(get('.cpyy-hwtg-ts'),{
                        left: (-1 * window.innerWidth),
                    }, 1500, 'easeOutStrong');

                });
                $('.zhinenghuayjimg').delay(500, function () {
                    animate(get('.zhinenghuayjimg'),{
                        bottom: (-1 * window.innerHeight),
                    }, 1500, 'easeOutStrong');
                });
            }
            if (index == 5) {
                $('.cpyy-hwtg-ta').delay(500, function () {
                    animate(get('.cpyy-hwtg-ta'),{
                        right: (-1 * window.innerWidth),
                    }, 1500, 'easeOutStrong');
                });
                $('.cpyy-hwtg-bottoma').delay(500, function () {
                    animate(get('.cpyy-hwtg-bottoma'),{
                        bottom: (-1 * window.innerHeight),
                    }, 1500, 'easeOutStrong');
                });
            }
            if (index == 6) {
                $('.cpyy-hwtg-tb').delay(500, function () {
                    animate(get('.cpyy-hwtg-tb'),{
                        left: (-1 * window.innerWidth),
                    }, 1500, 'easeOutStrong');
                });
                $('.cpyy-hwtg-bottomb').delay(500, function () {
                    animate(get('.cpyy-hwtg-bottomb'),{
                        bottom: (-1 * window.innerHeight),
                    }, 1500, 'easeOutStrong');
                });
            }
            if (index == 7) {
                $('.cpyy-hwtg-tc').delay(500, function () {
                    animate(get('.cpyy-hwtg-tc'),{
                        right: (-1 * window.innerWidth),
                    }, 1500, 'easeOutStrong');

                });
                $('.cpyy-hwtg-bottomc').delay(500, function () {
                    animate(get('.cpyy-hwtg-bottomc'),{
                        bottom: (-1 * window.innerHeight),
                    }, 1500, 'easeOutStrong');
                });
            }
            if (index == 8) {
                $('.cpyy-hwtg-td').delay(500, function () {
                    animate(get('.cpyy-hwtg-td'),{
                        left: (-1 * window.innerWidth),
                    }, 1500, 'easeOutStrong');
                });
                $('.cpyy-hwtg-bottomd').delay(500, function () {
                    animate(get('.cpyy-hwtg-bottomd'),{
                        bottom: (-1 * window.innerHeight),
                    }, 1500, 'easeOutStrong');
                });
            }
            if (index == 9) {
                $('.cpyy-hwtg-te').delay(500, function () {
                    animate(get('.cpyy-hwtg-te'),{
                        right: (-1 * window.innerWidth),
                    }, 1500, 'easeOutStrong');
                });
                $('.cpyy-hwtg-bottome').delay(500, function () {
                    animate(get('.cpyy-hwtg-bottome'),{
                        bottom: (-1 * window.innerHeight),
                    }, 1500, 'easeOutStrong');
                });
            }
            if (index == 10) {
                $('.section2-eng-o').delay(500, function () {
                    animate(get('.section2-eng-o'),{
                        top: (-2 * window.innerHeight)
                    }, 1500, 'easeOutStrong');
                });
                $('.section2-eng-t').delay(500, function () {
                    animate(get('.section2-eng-t'),{
                        left: (-1 * window.innerWidth)
                    }, 1500, 'easeOutStrong');
                });
                $('.section2-eng-th').delay(500, function () {
                    animate(get('.section2-eng-th'),{
                        right: (-1 * window.innerWidth)
                    }, 1500, 'easeOutStrong');
                });
                $('.section2-pic').delay(500, function () {
                    animate(get('.section2-pic'),{
                        bottom: (-1 * window.innerHeight)
                    }, 1500, 'easeOutStrong');
                });
            }
            if (index == 11) {
                $('.connect-pics').delay(500, function () {
                    animate(get('.connect-pics'),{
                        left: (-1 * window.innerWidth),
                    }, 1500, 'easeOutStrong');
                });
                $('.connect-zh').delay(500, function () {
                    animate(get('.connect-zh'),{
                        left: (-1 * window.innerWidth),
                    }, 1800, 'easeOutStrong');
                });
                $('.connect-map').delay(500, function () {
                    animate(get('.connect-map'), {
                        right: (-1 * window.innerWidth),
                    }, 1500, 'easeOutStrong');
                });
                $('.connect-msg-t').delay(500, function () {
                    animate(get('.connect-msg-t'), {
                        left: (-1 * window.innerWidth),
                    }, 1500, 'easeOutStrong');
                });
                $('.connect-msg-b').delay(500, function () {
                    animate(get('.connect-msg-b'), {
                        right: (-1 * window.innerWidth),
                    }, 1500, 'easeOutStrong');
                });
            }
        },
        onSlideChangeStart: function (swiper) {
            var index = mySwiper.activeIndex + 1;
            if (index == 1) {
                $(".section1-bg2").delay(0, function () {
                    animate(get(".section1-bg2"), {
                        top: '0',
                    }, 1500, 'easeOutStrong');
                });
                $(".section1-bg3").delay(0, function () {
                    animate(get(".section1-bg3"), {
                        top: '0',
                    }, 1500, 'easeOutStrong');
                });
                $(".index-box").delay(0, function () {
                    animate(get(".index-box"), {
                        top: (0.16 * window.innerHeight),
                    }, 1500, 'easeOutStrong');
                });
            }
            if (index == 2) {
                $(".about-eng").delay(500, function () {
                    animate(get(".about-eng"), {
                        top: (0.14 * window.innerHeight),
                    }, 1500, 'easeOutStrong');
                });
                $(".about-names").delay(500, function () {
                    animate(get(".about-names"), {
                        left: '0',
                    }, 1500, 'easeOutStrong');
                });
                $(".about-zh").delay(700, function () {
                    animate(get(".about-zh"), {
                        left: (0.14 * window.innerWidth),
                    }, 1500, 'easeOutStrong');
                });
                $(".about-name").delay(900, function () {
                    animate(get(".about-name"), {
                        left: (0.14 * window.innerWidth),
                    }, 1500, 'easeOutStrong');
                });
                $(".about-bottom").delay(900, function () {
                    animate(get(".about-bottom"), {
                        right: '0',
                    }, 1500, 'easeOutStrong');
                });
            }
            if(index == 3){
                $('.server-eng').delay(500, function () {
                    animate(get('.server-eng'),{
                        top: (0.18*window.innerHeight),
                    }, 1500, 'easeOutStrong');
                });
                $('.server-names').delay(500,function () {
                    animate(get('.server-names'),{
                        left:'0'
                    }, 1500, 'easeOutStrong');
                });
                $('.server-zh').delay(500,function () {
                    animate(get('.server-zh'),{
                        right:'0',
                    }, 1500, 'easeOutStrong');
                });
                $('.server-bottom-os').delay(500,function () {
                    animate(get('.server-bottom-os'),{
                        left:'0',
                    }, 1500, 'easeOutStrong');
                });
                $('.server-bottom-oz').delay(500,function () {
                    animate(get('.server-bottom-oz'),{
                        right:'0',
                    }, 1500, 'easeOutStrong');
                });

            }
            if(index == 4){
                $('.cpyy-hwtg-ts').delay(500, function () {
                    animate(get('.cpyy-hwtg-ts'),{
                        left:'0',
                    }, 1500,'easeOutStrong');
                });
                $('.zhinenghuayjimg').delay(500, function () {
                    animate(get('.zhinenghuayjimg'),{
                        bottom:'0',
                    }, 1500,'easeOutStrong');
                });
            }
            if(index == 5){
                $('.cpyy-hwtg-ta').delay(500, function () {
                    animate(get('.cpyy-hwtg-ta'),{
                        right:'0',
                    }, 1500,'easeOutStrong');
                });
                $('.cpyy-hwtg-bottoma').delay(500, function () {
                    animate(get('.cpyy-hwtg-bottoma'),{
                        bottom:(0.1*window.innerHeight),
                    }, 1500,'easeOutStrong');
                });
            }
            if(index == 6){
                $('.cpyy-hwtg-tb').delay(500, function () {
                    animate(get('.cpyy-hwtg-tb'),{
                        left:'0',
                    }, 1500,'easeOutStrong');
                });
                $('.cpyy-hwtg-bottomb').delay(500, function () {
                    animate(get('.cpyy-hwtg-bottomb'),{
                        bottom:(0.1*window.innerHeight),
                    }, 1500,'easeOutStrong');
                });
            }
            if(index == 7){
                $('.cpyy-hwtg-tc').delay(500, function () {
                    animate(get('.cpyy-hwtg-tc'),{
                        right:'0',
                    }, 1500,'easeOutStrong');
                });
                $('.cpyy-hwtg-bottomc').delay(500, function () {
                    animate(get('.cpyy-hwtg-bottomc'),{
                        bottom:(0.1*window.innerHeight),
                    }, 1500,'easeOutStrong');
                });
            }
            if(index == 8){
                $('.cpyy-hwtg-td').delay(500, function () {
                    animate(get('.cpyy-hwtg-td'),{
                        left:'0',
                    }, 1500,'easeOutStrong');
                });
                $('.cpyy-hwtg-bottomd').delay(500, function () {
                    animate(get('.cpyy-hwtg-bottomd'),{
                        bottom:(0.1*window.innerHeight),
                    }, 1500,'easeOutStrong');
                });
            }
            if(index == 9){
                $('.cpyy-hwtg-te').delay(500, function () {
                    animate(get('.cpyy-hwtg-te'),{
                        right:'0',
                    }, 1500,'easeOutStrong');
                });
                $('.cpyy-hwtg-bottome').delay(500, function () {
                    animate(get('.cpyy-hwtg-bottome'),{
                        bottom:(0.1*window.innerHeight),
                    }, 1500,'easeOutStrong');
                });
            }
            if(index == 10){
                $('.section2-eng-o').delay(500, function () {
                    animate(get('.section2-eng-o'),{
                        top: (0.15*window.innerHeight),
                    }, 1500, 'easeOutStrong');
                });
                $('.section2-eng-t').delay(500, function () {
                    animate(get('.section2-eng-t'),{
                        left:'0'
                    }, 1500, 'easeOutStrong');
                });
                $('.section2-eng-th').delay(500, function () {
                    animate(get('.section2-eng-th'),{
                        right:'0',
                    }, 1500, 'easeOutStrong');
                });
                $('.section2-pic').delay(500, function () {
                    animate(get('.section2-pic'),{
                        bottom:(0.2*window.innerHeight),
                    }, 1500, 'easeOutStrong');
                });
            }
            if(index == 11){
                $('.connect-pics').delay(500, function () {
                    animate(get('.connect-pics'),{
                        left:'0',
                    }, 1500,'easeOutStrong');
                });
                $('.connect-zh').delay(500, function () {
                    animate(get('.connect-zh'),{
                        left:(0.11*window.innerWidth),
                    }, 1800,'easeOutStrong');
                });
                $('.connect-map').delay(500, function () {
                    animate(get('.connect-map'),{
                        right:'0',
                    }, 1500,'easeOutStrong');
                });
                $('.connect-msg-t').delay(500, function () {
                    animate(get('.connect-msg-t'),{
                        left:  (0.14*window.innerWidth)
                    }, 1500,'easeOutStrong');
                });
                $('.connect-msg-b').delay(500, function () {
                    animate(get('.connect-msg-b'),{
                        right:'0',
                    }, 1500,'easeOutStrong');
                });
            }
        },
    })

})
