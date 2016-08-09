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
	$("#hot_menu").find("a").on("click mousemove",function(){
		$("#hot_menu").find("a").attr("class","");
		$(this).attr("class","_active");

		$(".hot_box").find("ul").hide();		
		$(".hot_box").find("ul").eq( $(this).index() ).show();		
	});
});

// 我要买车  我要卖车  —— 选框效果
$(function(){
	$("#buy_sell").find("a").click(function(){
		$("#buy_sell").find("a").attr("class","");
		$(this).attr("class","_active");

		$("#bs_box").find("form").hide();
		$("#bs_box").find("form").eq( $(this).index() ).show();	
	});
});



// form表单中，点击输入（清除默认的文字）

$(function(){
	// 预约买车表单效果
	$("#o_number").focusin(function() {
		$(this).attr('value','');
	});

	$("#o_number").focusout(function() {
		$(this).attr('value','车牌车型');
	});

	$("#o_name").focusin(function() {
		$(this).attr('value','');
	});

	$("#o_name").focusout(function() {
		$(this).attr('value','您的姓名');
	});

	$("#o_tel").focusin(function() {
		$(this).attr('value','');
	});

	$("#o_tel").focusout(function() {
		$(this).attr('value','您的电话');		
	});

	// 我要卖车

	$("#sell_text").focusin(function() {
		$(this).attr('value','');
	});

	$("#sell_text").focusout(function() {
		$(this).attr('value','车牌车型');
	});

	$("#sell_phone").focusin(function() {
		$(this).attr('value','');
	});

	$("#sell_phone").focusout(function() {
		$(this).attr('value','您的姓名');
	});
});

	

// 美容项目  选框效果
$(function(){
	$(".majorPro").find("a").on("click mousemove",function(){
		$(".majorPro").find("a").attr("class","");
		$(this).attr("class","_active");

		$("#mContent").find("ul").hide();		
		$("#mContent").find("ul").eq( $(this).index() ).show();		
	});
});

