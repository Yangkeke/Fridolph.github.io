//getStyle

function getStyle(obj,name){
	if(obj.currentStyle){
		return obj.currentStyle;
	}
	else{
		return getComputedStyle(obj,false)[name];
	}
}

//moveStart

function moveStart(obj,attribute,iTarget){
	//多个物体运动框架
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		//声明
		var current = 0;
		if(attribute == 'opacity'){
			current = Math.round( parseFloat(getStyle(obj,attribute))*100 );
		}
		else{
			current = parseInt(getStyle(obj,attribute));
		}
		//缓冲速度 
		var speed = (iTarget - current )/6;
		//上下取整
		speed = speed>0? Math.ceil(speed):Math.floor(speed);

		//静
		if(iTarget == current){
			clearInterval(obj.timer);
		}
		else{
			if(attribute == 'opacity'){
				obj.style.filter  = 'alpha(opacity:'+(current+speed)+')';
				obj.style.opacity = (current + speed)/100;
				
			}
			else{
				obj.style[attribute] = current+speed+'px';
			}
		}

	},30);
}
