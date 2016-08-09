
// 完美运动框架

function getStyle(obj,name){
	if(obj.currentStyle){
		return obj.currentStyle;
	}
	else{
		return getComputedStyle(obj,false)[name];
	}
}

function moveStart(obj,json,fnEnd){
	// 完美运动框架
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var bStop = true;
		for(var attribute in json){
			var current = 0;
			if(attribute == 'opacity'){
				current = Math.round(parseFloat(getStyle(obj,attribute))*100);
			}
			else{
				current = parseInt(getStyle(obj,attribute));
			}

			var speed = (json[attribute] - current)/8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);

			if(json[attribute] != current){
				bStop = false;
			}

			if(attribute == 'opacity'){
				obj.style.filter = 'alpha(opacity:'+(current+speed)+')';
				obj.style.opacity = (current + speed)/100;
			}
			else{
				obj.style[attribute] = current+speed+'px';
			}
		}
	
		if(bStop){
			clearInterval(obj.timer);		

			if(fnEnd)fnEnd();
		}

	},30);	
}






