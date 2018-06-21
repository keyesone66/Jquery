// JavaScript Document


$(document).ready(function(){
	
	$("tbody>tr:odd").addClass("odd");
	$("tbody>tr:even").addClass("even")
	$("tr:contains('星期三')").addClass("selected");

			//.hover绑定一个或两个处理程序到匹配的元素，当鼠标指针进入和离开元素时执行
	$("tbody>tr").hover(function(){
		
		
				$(this).addClass("selected")
							//.siblings()遍历所有
						.siblings().removeClass("selected")	.end()
							//查找radio有就设置值为ture
						.find(":radio").attr("checked",true);


		});

	});


