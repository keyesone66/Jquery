// JavaScript Document


$(document).ready(function(){
	
	$("tbody>tr:odd").addClass("odd");
	$("tbody>tr:even").addClass("even")
	$("tr:contains('������')").addClass("selected");

			//.hover��һ���������������ƥ���Ԫ�أ������ָ�������뿪Ԫ��ʱִ��
	$("tbody>tr").hover(function(){
		
		
				$(this).addClass("selected")
							//.siblings()��������
						.siblings().removeClass("selected")	.end()
							//����radio�о�����ֵΪture
						.find(":radio").attr("checked",true);


		});

	});


