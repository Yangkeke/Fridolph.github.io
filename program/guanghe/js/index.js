// JS效果


// 大型轮播图 —— banner
$(function() {
    var $window = $(window), window_width = $window.width();
    $('#js_banner,#js_banner_img li').width(window_width);
    new $.Tab({
        target: $('#js_banner_img li'),
        effect: 'slide3d',
        animateTime: 1000,
        stay: 3500,
        autoPlay: true,
        merge: true,
        prevBtn: $('#js_banner_pre'),
        nextBtn: $('#js_banner_next')
    });
});

// 最新上架 选项框效果
$(function(){
	$("#main").find(".hot_menu").find("a").on("click mousemove",function(){
		$(".hot_menu").find("a").attr("class","");
		$(this).attr("class","_active");

		$("#hot_box").find("ul").hide();		
		$("#hot_box").find("ul").eq( $(this).index() ).show();
		
		
	});
});

// 我要买车  我要卖车  —— 选框效果
$(function(){
	$(".bs_box").find("li").click(function(){
		$(".bs_box").find("li").attr("class","");
		$(this).attr("class","_active");

		$("#bs_box").find("form").hide();
		$("#bs_box").find("form").eq( $(this).index() ).show();	
	});
});



// 名车鉴赏 浮动框提示效果

$("#car1").hover(
	function(){
		$("#car1_inner").fadeIn("fast");
	},
	function(){
		$("#car1_inner").fadeOut("fast");
	}
);

$("#car2").hover(function(){
		$("#car2_inner").fadeIn("fast");
	},function(){
		$("#car2_inner").fadeOut("fast");
	}
);

$("#car3").hover(function(){
		$("#car3_inner").fadeIn("fast");
	},function(){
		$("#car3_inner").fadeOut("fast");
	}
);

$("#car4").hover(function(){
		$("#car4_inner").fadeIn("fast");
	},function(){
		$("#car4_inner").fadeOut("fast");
	}
);

$("#car5").hover(function(){
		$("#car5_inner").fadeIn("fast");
	},function(){
		$("#car5_inner").fadeOut("fast");
	}
);

$("#car6").hover(function(){
		$("#car6_inner").fadeIn("fast");
	},function(){
		$("#car6_inner").fadeOut("fast");
	}
);


// 小轮播图
$(function(){
	$('#demo1').slideBox();
	$('#demo2').slideBox({
		direction : 'top',//left,top#方向
		duration : 0.3,//滚动持续时间，单位：秒
		easing : 'linear',//swing,linear//滚动特效
		delay : 5,//滚动延迟时间，单位：秒
		startIndex : 1//初始焦点顺序
	});
	$('#demo3').slideBox({
		duration : 0.3,//滚动持续时间，单位：秒
		easing : 'linear',//swing,linear//滚动特效
		delay : 5,//滚动延迟时间，单位：秒
		hideClickBar : false,//不自动隐藏点选按键
		clickBarRadius : 10
	});
	$('#demo4').slideBox({
		hideBottomBar : true//隐藏底栏
	});
});

// form表单中，点击输入（清除默认的文字）

$(function(){

	// 买车卖车表单效果
	$("#sell_text").focusin(function() {
		$(this).attr('value','');
	});

	$("#sell_text").focusout(function() {
		$(this).attr('value','您的姓名');
	});

	$("#sell_phone").focusin(function() {
		$(this).attr('value','');
	});

	$("#sell_phone").focusout(function() {
		$(this).attr('value','您的电话');
	});

	// AMA表单效果
	$("#AMA_number").focusin(function() {
		$(this).attr('value','');
	});

	$("#AMA_number").focusout(function() {
		$(this).attr('value','车牌车型');		
	});

	$("#AMA_name").focusin(function() {
		$(this).attr('value','');
	});

	$("#AMA_name").focusout(function() {
		$(this).attr('value','您的姓名');
	});

	$("#AMA_tel").focusin(function() {
		$(this).attr('value','');
	});

	$("#AMA_tel").focusout(function() {
		$(this).attr('value','您的电话');
	});
});
