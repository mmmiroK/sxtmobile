(function(){
	
	//0.声明一个全局变量保存页码  每次滚动到页面最底面就等于点下一页
	
	var page = 1;
	
	//1.给container添加滚动事件
	
	$('.container').scroll(function(){
		
		//2.获取滚动条位置
		
		var sTop = $(this).scrollTop();
		
		//3.获取当前元素包含滚动条的实际高度-自身可视区域的高度  得到滚动条高度
		
		var scrollHeight = this.scrollHeight-this.clientHeight-2;
		
		//4.让当前滚动条位置与滚动条高度比较 。 滚动条位置>=滚动条的高度  滚动到最后
		
		if(sTop>=scrollHeight){
			
			//console.log('加载数据');
			
			page++;
			
		//	console.log(page);
			
			$.ajax({
				type:"get",
				url:"api.php",
				async:true,
				data:{pid:page},
				
				beforeSend:function(){
					//发送之前让遮罩层显示出来
					
					$('.mask').show();
					
				},
				
				complete:function(){
					//无论成败都会执行这个函数
					
					$('.mask').hide();
				},
				
				success:function(txt){
					
					//5.将服务器返回的数据转换成JSON
					
					var json = $.parseJSON(txt);
					
					//6.遍历JSON数据生成HTML代码
					
					var html = '';
					
					//6.1如果JSON数据中有error信息 就不往下执行，因为没有取到数据
					
					if(json.error) return ;
					
					$.each(json, function() {
						
						//7.声明变量保存工作
						
						var word = '';
						
						//8.遍历工作经历数组
						
						$.each(this.word, function() {
							
							//9.将每条工作信息加入word变量
							
							word+='<p>'+this+'</p>';
							
						});
						
						html+='<li><img src="'+this.pic+'"/><div><h3>'+this.tname+'老师</h3>'+word+'</div></li>';
						
						
					});
					
					//10.将生成的数据添加到UL中
					
					$('.teacher ul').append(html);
					//console.log(html)
					
				}
			});
			
		}
		
	});
	
})();
