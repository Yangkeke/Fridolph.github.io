
//轮播图 原声JS代码

window.onload = function(){
	var oTabBox = document.getElementById('tabBox');

	var oGallery = oTabBox.getElementsByTagName('ul')[0];
	var aXnum_li = oTabBox.getElementsByTagName('ol')[0].getElementsByTagName('li');
	var nNow = 0;

	for(var i=0;i<aXnum_li.length;i++){
		aXnum_li[i].index = i;
		aXnum_li[i].onmouseover = function(){
			nNow = this.index;
			tab();
		}
	}

	function tab(){
		for(var j=0;j<aXnum_li.length;j++){
			aXnum_li[j].className = '';
		}
		aXnum_li[nNow].className = 'active';
		moveStart(oGallery,{top:-282*nNow});
	}

	function tab_Next(){
		nNow++;
		if(nNow == aXnum_li.length){
			nNow = 0;
		}
		tab();
	}

	var timer = setInterval(tab_Next,2000);

	oTabBox.onmouseover = function(){
		clearInterval(timer);
	}

	oTabBox.onmouseout  = function(){
		timer = setInterval(tab_Next,2000);
	}
}