window.onload = function(){
    // 测试
    console.log('网页可见区域宽度:'+document.body.clientWidth);
    console.log('网页可见区域高度:'+document.body.clientHeight);
    console.log('网页可见区域宽度(包括边线宽):'+document.body.offsetWidth);
    console.log('网页可见区域高度(包括边线高):'+document.body.offsetHeight);
    console.log('网页正文全文宽:'+document.body.scrollWidth);
    console.log('网页正文全文高:'+document.body.scrollHeight);
    console.log('网页被卷去的高:'+document.body.scrollTop);
    console.log('网页被卷去的左:'+document.body.scrollLeft);
    console.log('网页正文部分上:'+window.srceenTop);
    console.log('网页正文部分左:'+window.screenLeft);
    console.log('屏幕分辨率的宽:'+window.screen.width);
    console.log('屏幕分辨率的高:'+window.screen.height);
    console.log('屏幕可用工作区宽:'+window.screen.availWidth);
    console.log('屏幕可用工作区高:'+window.screen.availHeight);

    // 声明要获取元素
    var oMusic = document.getElementById('music');
    var oAudio = document.getElementsByTagName('audio')[0];

    var oPage1 = document.getElementById('page1');
    var oPage2 = document.getElementById('page2');
    var oPage3 = document.getElementById('page3');

    // 当音乐播放停止时，停止转盘转动效果
    oAudio.addEventListener("ended", function(){
        oMusic.setAttribute('class', '');
    }, false);

    // 点击音乐图标，控制音乐播放效果
    oMusic.onclick = function(){
        if(oAudio.paused){
            oAudio.play();
            this.setAttribute('class','play'); 
            // this.style.animationPlayState = 'running'; 兼容性差
        }else{
            oAudio.pause();
            this.setAttribute('class','');
            // this.style.animationPlayState = 'paused';
        }
    }

    // 事件监听，有BUG，touchstart只触发一次
    // oMusic.addEventListener('touchstart', function(ev){        
    //     if(oAudio.paused){
    //         oAudio.play();
    //         this.setAttribute('class','play'); 指针会回到原始位置
    //         // this.style.animationPlayState = 'running'; 兼容性差
    //     }else{
    //         oAudio.pause();
    //         this.setAttribute('class','');
    //         // this.style.animationPlayState = 'paused';
    //     }
    // }, false);  
    
    // 点击屏幕，开启好运2016    
    oPage1.addEventListener('touchstart', function(event){
        oPage1.style.display = 'none';
        oPage2.style.display = 'block';
        oPage3.style.display = 'block';        

        setTimeout(function(){
            oPage2.setAttribute('class','page fadeOut');
            oPage3.setAttribute('class','page fadeIn');
            oPage3.style.top = "100%";

        },3000);
    }, false);
}


