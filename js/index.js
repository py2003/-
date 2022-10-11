window.addEventListener('load',function(){

// 显示与隐藏左右箭头模块
var one=this.document.querySelector('.one');
var zb=one.querySelector('.zb');
var yb=one.querySelector('.yb');
var oneWidth=one.offsetWidth; 
one.addEventListener('mouseover',function(){
    zb.style.display='block';
    yb.style.display='block';
    clearInterval(times);
    times=null;

})
one.addEventListener('mouseout',function(){
    zb.style.display='none';
    yb.style.display='none';
    times=setInterval(function(){
        yb.click();
    },3000)

})


// 动态生成小圆圈模块
var ul=one.querySelector('ul');
var ol=one.querySelector('ol');
var flag=true;
for(i=0;i<ul.children.length;i++){
    li=document.createElement('li');
    li.setAttribute('index',i);
    ol.appendChild(li)
    ol.children[0].className='bs';
    li.addEventListener('click',function(){
        for(i=0;i<ol.children.length;i++){
            ol.children[i].className='';
             // 小圆圈排他思想模块结束
        }
        this.className='bs';
        var index=this.getAttribute('index');
        sum=index;
        num-index;
        dh(ul,-index*oneWidth);
        // 图片跟随小圆圈滚动模块结束
          
    })
}

        
    // 右侧按钮模块
    num=0;
    sum=0;
    var first=ul.children[0].cloneNode(true);
    ul.appendChild(first);
    yb.addEventListener('click',function(){
        if(flag){
            flag=false;
            if(num==ul.children.length-1){
                ul.style.left=0;
                num=0;
            }
            num++
            dh(ul,-num*oneWidth,function(){
                flag=true;
            });
            // 小圆圈跟随右箭头变化
            sum++;
            if(sum==ol.children.length){
                sum=0;
            }
            for(i=0;i<ol.children.length;i++){
                ol.children[i].className='';
            }
            ol.children[sum].className='bs';
        }

    })

    
   
   
   
// 左侧按钮模块
 ul.appendChild(first);
    zb.addEventListener('click',function(){
        if(flag){
            flag=false;
            if(num==0){
                num=ul.children.length-1;
                ul.style.left=-(ul.children.length-1)*oneWidth;
               
            }
            num--
            dh(ul,-num*oneWidth,function(){
                flag=true;
            });
            // 小圆圈跟随右箭头变化
            sum--;
            if(sum<0){
                sum=ol.children.length-1;
            }
           
            for(i=0;i<ol.children.length;i++){
                ol.children[i].className='';
            }
            ol.children[sum].className='bs';
        }

    })
   
   
// 自动播放按钮

var times=this.setInterval(function(){
    yb.click();
},3000)



})
