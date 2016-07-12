# My-phone-fullpageScroll

## 功能概述

移动端上实现上下轮播,其中新闻部分左右轮播.并伴有音乐.可用于网络公司手机页面.

##兼容性

低版本的手机浏览器效果一般.
- ios4.1+
- Andriod2.3+

##主要技术

###引用zepto框架目的是代码量优化,
- zepto框架
  + 封装delay插件.
  + 效果:$("#id").delay(timer,cb).
  + 目的是保证动画在延迟一定时间后执行.

###轮播swiper框架
- swiper框架
  + 监听onInit初始化后执行。
  + 监听onSlideChangeEnd，slider切换结束时执行。
  + 监听onSlideChangeStart，slider切换开始时执行。
  + 监听mySwiper.activeIndex返回当前活动块的索引
  + 新闻轮播(横向轮播);
  
###封装animat方法
- animate方法
  + 原因:swiper框架和zepto框架的动画功能太单一了,同时jQuery.easing插件动画效果(贝尔塞曲线什么的)很多,可以拿来用,但是只是jQuery的插件,用在zepto中,我需要改造.
  + 单独的做了一个animate.js,将jQuery的部分去掉,用到哪些曲线动画保留,没用的
  + 删掉.主要用了一种动画:easeOutStrong;
  + 使用在delay的回调函数中.

### 页面音乐
- H5的音频标签
  + audio src loop
  + 监听canplaythrough事件,提示视频能够不停顿地一直播放;
  + audio标签动态生成,设置src属性,增加CSS类.
  + 音频标签放在数组内
  + 自动播放 需要在标签属性中添加autoplay;

CSS3技术的应用:
- 首页面
  + 首页面背景使用CSS3动画,看起来会有缓动效果.背景图片@keyframes 0 scale 1; 50% scale 1.1;100% scale 1.0;时间20s一次.
  + 内图片 rotate 0-360; 100s一个周期;
  + 时针使用图片旋转效果,rotate 0-360; 60s一个周期;
  + 时针外围图 ,rotate 0-360; 40s一个周期;
  + 整图下面三角 : scale 0-1; 2s;opacity 0 - 1变化;2s;

