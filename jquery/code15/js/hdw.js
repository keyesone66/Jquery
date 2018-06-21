// JavaScript Document


$(document).ready(function(){
	//$("tr:even")     //索引为偶数的元素，从 0 开始
    //$("tr:odd")      //索引为奇数的元素，从 0 开始
	$("tbody>tr:odd").addClass("odd");
	$("tbody>tr:even").addClass("even")
	//$("div:contains('nick')")    //包含nick文本的元素
	//默认选项为星期三的选项
	$("tr:contains('星期三')").addClass("selected");

	
	$("tbody>tr").click(function(){
		
			//如果拥有selected类
		if($(this).hasClass("selected")){
					//移除这个类并且复选框为false
				$(this).removeClass("selected")
				.find(":checkbox").attr("checked",false);
			
			}else{
				
				$(this).addClass("selected")
				.find(":checkbox").attr("checked",true);
				
				
				}
		
		

		});

	});


