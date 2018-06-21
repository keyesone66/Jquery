// JavaScript Document


	$(document).ready(function(){
		
			$(".hdw").click(function(){
			//toggleClass如果存在就删除,否则就添加
				$(this).toggleClass("selected")
						//toggle();   //切换 显示/隐藏
						.siblings('.child_'+this.id).toggle();

				}).click();

		});


