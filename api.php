<?php
	
	$data = array();
	
	for($i = 1; $i<=10;$i++){
		
		for($j =1;$j<=5;$j++){
			
			if(!isset($data[$i])){
				
				$data[$i] = array();
				
			}
			$data[$i][$j] = array(
			
				'tname'=>'海绵宝宝'.(($i-1)*5+$j),
				'word'=>array('天国的嫁衣海绵宝宝有限公司','海绵宝宝天国的嫁衣有限公司','天国的嫁衣海绵宝宝没海绵有限公司'),
				'pic'=>'images/'.mt_rand(1, 3).'.jpg'
			
			);
		}
		
	}	
	
	$pid = intval(isset($_GET['pid']) ?  $_GET['pid'] :1);
	
	$json = isset($data[$pid]) ? $data[$pid] :array('error'=>'404您访问的页面不存在！');
	
	echo json_encode($json);
	
	sleep(2);
?>