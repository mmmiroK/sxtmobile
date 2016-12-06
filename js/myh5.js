/**
 * Created by miroK on 2016/9/18.
 */
(function(){

    var page=1;

    $('.container').scroll(function(){

        var sTop=$(this).scrollTop();
        var scrollHeight=this.scrollHeight-this.clientHeight-2;

        if(sTop>=scrollHeight){

            console.log('加载数据');
            page++;

            $.ajax({
                type:'get',
                url:'api.php',
                data:{pid:page},

                beforeSend:function(){
                   $('.mask').show();
                },
                complete:function(){
                   $('.mask').hide();
                },
                success:function(txt){
                    var json= $.parseJSON(txt);
                    console.log(json);
                    var html= '';
                    if(json.error) return;
                    $.each(json,function(){

                        var text='';

                        $.each(this.word,function(){

                            console.log(this);

                            text+='<p>'+this+'</p>';
                        });

                        html+='<li><img src="'+this.pic+'"><div><h3>'+this.tname+'老师</h3>'+text+'</div></li>';
                    });

                    $('.teacher ul').append(html);
                }
            });
        }
    })
})();