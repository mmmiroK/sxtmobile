/**
 * Created by miroK on 2016/9/12.
 */
(function(){

    var num=1/window.devicePixelRatio;

    var meta=document.createElement('meta');

    meta.name="viewport";

    meta.content='width=device-width, user-scalable=no, initial-scale='+num+', maximum-scale='+num+', minimum-scale='+num;

    document.body.appendChild(meta);

    var fontSize=document.documentElement.clientWidth/10;

    document.getElementsByTagName('html')[0].style.fontSize=fontSize+'px';

})();