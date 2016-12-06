/**
 * Created by miroK on 2016/9/14.
 */
(function(){

    var curX=0;
    var index=0;
    var curLeft=0;

    var list=document.getElementsByClassName('list')[0];

    document.body.addEventListener('touchstart',function(e){

        e= e.touches[0];
        curX= e.clientX;
        curLeft=curX-list.offsetLeft;

    });

    document.body.addEventListener('touchmove',function(e){

        e=e.touches[0];

        var direction=(e.clientX-curX)>0;

        move(e);
    });
    function move(e){
        var left= e.clientX-curLeft;
        list.style.marginLeft=left+'px';
    }

    document.body.addEventListener('touchend',function(e){

        e= e.changedTouches[0];

        var num= e.clientX-curX;

        var dir=num>0;

        var  width=document.documentElement.clientWidth/2;

        if(Math.abs(num)>=width){

            console.log('过半了')

        }else{

            console.log('未过半')

        }

        index+=Math.abs(num)>width?(dir?-1:1):0;
        if(index<0){

            index=3;
        }
        if(index>3){

            index=0;
        }
        main(index);
    });

    function main(num){

        var left=-num*100+'%';
        console.log(left)
        list.style.transition='0.5s';
        list.style.marginLeft=left;
    }

})();