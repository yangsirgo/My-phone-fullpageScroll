/**
 * Created by ryf on 2016/7/8.
 */
define(["zepto"],function ($){
    function load_ready() {
        audio_array[0].play();
        audio_array[0].loop = true;
    }
    /*声音脚本 开始*/
//音频标签存放数组
    var audio_array = [];
    function loadSound() {
        var audio_num = 0;

        //获得json中图片的地址
        var audio = document.createElement("audio");
        audio.src = "./js/music.mp3";//地址
        audio.className = "bg_music";

        audio_array.push(audio);
        $(".audio_wrap").append(audio);

        audio_array[0].load();
        audio_array[0].addEventListener("canplaythrough", function () {

            load_ready();

        });

    }
    var play = 1;
    $(".music_control").click(function () {
        if (play == 1) {

            $(".play_btn").hide();
            $(".stop_btn").show();
            audio_array[0].pause();
            play = 0;

        } else {

            $(".stop_btn").hide();
            $(".play_btn").show();
            audio_array[0].play()
            play = 1;

        }
    });
    /*声音脚本 结束*/
    loadSound();

})
