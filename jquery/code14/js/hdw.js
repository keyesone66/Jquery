// JavaScript Document
	$(document).ready(function(){
		
		
		//创建一个*
		$(".a1").each(function(){
			//添加红色强调
			var hdw = $("<strong class='reda'>*</strong>");
			
			$(this).parent().append(hdw);

			});
			//end
			
			//失去焦点
		$("form :input").blur(function(){
			//判断是否存在a2存在就清空
			$(this).parent().find(".a2").remove();
			
			//判断		
			if ($(this).is("#username")){
				
				if (this.value=="" || this.value.length < 6){
					
					var hdw1 = $("<span class='a2 error'>用户名不得小于6位</span>");
					
					$(this).parent().append(hdw1);
					
					}else{
						
					var hdw1 = $("<span class='a2 righta'>正确</span>");
					
					$(this).parent().append(hdw1);				
				}

			}
			//end	
			
	
			//判断		
			if ($(this).is("#password")){
				
				if (this.value==""){
					
					var hdw1 = $("<span class='a2 error'>密码不得为空</span>");
					
					$(this).parent().append(hdw1);
					
					}else{
						
					var hdw1 = $("<span class='a2 righta'>正确</span>");
					
					$(this).parent().append(hdw1);				
				}

			}
			//end
				
			//判断		
			if ($(this).is("#passwords")){
				
				if (this.value=="" || this.value!= $("#password").val()){
					
					var hdw1 = $("<span class='a2 error'>两次密码不一样</span>");
					
					$(this).parent().append(hdw1);
					
					}else{
						
					var hdw1 = $("<span class='a2 righta'>正确</span>");
					
					$(this).parent().append(hdw1);				
				}

			}
			//end	

			
			//判断		
			if ($(this).is("#email")){
				
				if (this.value=="" || ( this.value!="" && !/.+@.+\.[a-zA-Z]{2,4}$/.test(this.value) )){
					
					var hdw1 = $("<span class='a2 error'>邮件的格式不正确</span>");
					
					$(this).parent().append(hdw1);
					
					}else{
						
					var hdw1 = $("<span class='a2 righta'>正确</span>");
					
					$(this).parent().append(hdw1);				
				}

			}
			//end	
			
			//判断		
			if ($(this).is("#tel")){
				
				if (this.value=="" || isNaN($(this).val()) || this.value.length < 11 ){
					
					var hdw1 = $("<span class='a2 error'>手机号不得为空，必须是11位数字</span>");
					
					$(this).parent().append(hdw1);
					
					}else{
						
					var hdw1 = $("<span class='a2 righta'>正确</span>");
					
					$(this).parent().append(hdw1);				
				}

			}
			//end

	});	
	//blur  end
		
		
		
		//提交
		$("#send").click(function(){
			//触发被选元素的指定事件类型
			$("form :input").trigger("blur");
			
			var hdw3 = $(".error").length; 
			
			if (hdw3){
				
				return false;
				
				}
			
			alert("注册成功");	
	
		});
	//end
	
	
	
		//重置
		$("#res").click(function(){
			
			$(".a2").remove();

			});
			//end
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		});	