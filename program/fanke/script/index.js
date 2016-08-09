window.onload = function(){
	

	//header移入移出事件
	var oHright  = document.getElementById('headerRight');
	var oHmy     = document.getElementById('H_my');
	var oHhelp   = document.getElementById('H_help');
	var oHnotice = document.getElementById('H_notice');	

	var oUl_my     = oHmy.getElementsByTagName('ul')[0];
	var oUl_help   = oHhelp.getElementsByTagName('ul')[0];
	var oUl_notice = oHnotice.getElementsByTagName('ul')[0];


	oHmy.onmouseover = function(){
		oUl_my.style.display = 'block';
	}
	oHmy.onmouseout = function(){
		oUl_my.style.display = 'none';
	}

	oHhelp.onmouseover = function(){
		oUl_help.style.display = 'block';
	}
	oHhelp.onmouseout = function(){
		oUl_help.style.display = 'none';
	}

	oHnotice.onmouseover = function(){
		oUl_notice.style.display = 'block';
	}
	oHnotice.onmouseout = function(){
		oUl_notice.style.display = 'none';
	}

	//header移入移出事件
	var osCar = document.getElementById('sCar');
	var ohText= document.getElementById('hCarText');

	ohText.onmouseover = osCar.onmouseover = function(){
		ohText.style.display = 'block';
	}

	ohText.onmouseout = osCar.onmouseout = function(){
		ohText.style.display = 'none';
	}

	//menu 的 移入事件效果

	var oMenu  = document.getElementById('Menu');
	var oMenuA = document.getElementsByTagName('a');

	for(var i=0;i<oMenuA.length;i++){
		oMenuA[i].onmouseover = function(){
			oMenuA[this].style.background = 'blue';
		}
	}

	

	// 导航栏 隐藏的DIV 显示隐藏事件
	
	var oMenuA1   = document.getElementById('menuA1');
	var oMenuDiv1 = document.getElementById('menuDiv1');
	
	oMenuA1.onmouseover = oMenuDiv1.onmouseover = function(){
		oMenuDiv1.style.display = 'block';
	}
	oMenuA1.onmouseout = oMenuDiv1.onmouseout = function(){
		oMenuDiv1.style.display = 'none';
	}

	// -----------------------------------------------------
	var oMenuA2   = document.getElementById('menuA2');
	var oMenuDiv2 = document.getElementById('menuDiv2');
	
	oMenuA2.onmouseover = oMenuDiv2.onmouseover = function(){
		oMenuDiv2.style.display = 'block';
	}
	oMenuA2.onmouseout = oMenuDiv2.onmouseout = function(){
		oMenuDiv2.style.display = 'none';
	}
	// -----------------------------------------------------
	var oMenuA3   = document.getElementById('menuA3');
	var oMenuDiv3 = document.getElementById('menuDiv3');
	
	oMenuA3.onmouseover = oMenuDiv3.onmouseover = function(){
		oMenuDiv3.style.display = 'block';
	}
	oMenuA3.onmouseout = oMenuDiv3.onmouseout = function(){
		oMenuDiv3.style.display = 'none';
	}
	// -----------------------------------------------------
	var oMenuA4   = document.getElementById('menuA4');
	var oMenuDiv4 = document.getElementById('menuDiv4');
	
	oMenuA4.onmouseover = oMenuDiv4.onmouseover = function(){
		oMenuDiv4.style.display = 'block';
	}
	oMenuA4.onmouseout = oMenuDiv4.onmouseout = function(){
		oMenuDiv4.style.display = 'none';
	}
	// -----------------------------------------------------
	var oMenuA5   = document.getElementById('menuA5');
	var oMenuDiv5 = document.getElementById('menuDiv5');
	
	oMenuA5.onmouseover = oMenuDiv5.onmouseover = function(){
		oMenuDiv5.style.display = 'block';
	}
	oMenuA5.onmouseout = oMenuDiv5.onmouseout = function(){
		oMenuDiv5.style.display = 'none';
	}
	// -----------------------------------------------------
	var oMenuA6   = document.getElementById('menuA6');
	var oMenuDiv6 = document.getElementById('menuDiv6');
	
	oMenuA6.onmouseover = oMenuDiv6.onmouseover = function(){
		oMenuDiv6.style.display = 'block';
	}
	oMenuA6.onmouseout = oMenuDiv6.onmouseout = function(){
		oMenuDiv6.style.display = 'none';
	}
	// -----------------------------------------------------
	var oMenuA7   = document.getElementById('menuA7');
	var oMenuDiv7 = document.getElementById('menuDiv7');
	
	oMenuA7.onmouseover = oMenuDiv7.onmouseover = function(){
		oMenuDiv7.style.display = 'block';
	}
	oMenuA7.onmouseout = oMenuDiv7.onmouseout = function(){
		oMenuDiv7.style.display = 'none';
	}
	

	// 导航栏 显示的DIV 隐藏事件解释



	//点击或移入换图 事件

	var oGroup = document.getElementById('mainGroup');
	var aGroupA= oGroup.getElementsByTagName('a');
	var placeholder = document.getElementById('placeholder');
	
	for(var i=0;i<aGroupA.length;i++){
		aGroupA[i].onclick = aGroupA[i].onmouseover = function(){			
			showPic(this);
			return false;
			}			
		}		
	}


	function showPic(whichpic){
		var source = whichpic.href;
		var placeholder = document.getElementById('placeholder');

		placeholder.src = source;
	}

	
	


	
	

}

