// ==UserScript==
// @name         B站直播后台暂停播放
// @namespace    https://github.com/exdrcw/BilibiliLiveAutoPause
// @version      0.1
// @description  可以让你在切换标签页或者最小化浏览器的时候暂停直播，切换回去会自动恢复
// @author       Drcw
// @require      https://cdn.staticfile.org/jquery/1.8.3/jquery.min.js
// @include      *://live.bilibili.com/*
// @icon         https://www.google.com/s2/favicons?domain=bilibili.com
// @grant        none
// @updateURL    https://cdn.jsdelivr.net/gh/exdrcw/BilibiliLiveAutoPause/installer.github.user.js
// ==/UserScript==

(function() {
    'use strict';
    document.addEventListener("visibilitychange", function () {

if (document.visibilityState == "visible") {
      //document.title='页面可见';

    var a = $("video");
    a[0].play();

}
if (document.visibilityState == "hidden") {
    //document.title='页面不可见';
    a = $("video");
    a[0].pause();
   }
})
})();
