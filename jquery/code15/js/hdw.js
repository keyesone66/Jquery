// JavaScript Document


$(document).ready(function(){
	//$("tr:even")     //����Ϊż����Ԫ�أ��� 0 ��ʼ
    //$("tr:odd")      //����Ϊ������Ԫ�أ��� 0 ��ʼ
	$("tbody>tr:odd").addClass("odd");
	$("tbody>tr:even").addClass("even")
	//$("div:contains('nick')")    //����nick�ı���Ԫ��
	//Ĭ��ѡ��Ϊ��������ѡ��
	$("tr:contains('������')").addClass("selected");

	
	$("tbody>tr").click(function(){
		
			//���ӵ��selected��
		if($(this).hasClass("selected")){
					//�Ƴ�����ಢ�Ҹ�ѡ��Ϊfalse
				$(this).removeClass("selected")
				.find(":checkbox").attr("checked",false);
			
			}else{
				
				$(this).addClass("selected")
				.find(":checkbox").attr("checked",true);
				
				
				}
		
		

		});

	});


