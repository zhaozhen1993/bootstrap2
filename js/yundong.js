window.onload=function(){
	var num=0;
	var lunboSmall=document.getElementById('lunboSmall');
    console.log(lunboSmall);
    var lunboSmall2=document.getElementsByClassName('col-lg-2');
    console.log(lunboSmall)
    for(var i=0;i<6;i++){
    	var ali=lunboSmall2[i].cloneNode(true);
    	console.log(lunboSmall2.parentNode)
    	lunboSmall.appendChild(ali);
    }
     setInterval(function(){
     	var lunboSmall=document.getElementById('lunboSmall');
	    
     	num++;
     	console.log()
     	startMove(lunboSmall,{left:-310},50,function(){
     		var firstLi=lunboSmall.getElementsByClassName('col-lg-2')[0];
     		
     		firstLi.remove();
     		lunboSmall.style.left=0;
     		lunboSmall.appendChild(firstLi);
     		
     	})
     },5000)
}


function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj)[attr];
	}
}
function startMove(obj,json,x,fn){
	var iSpeed=0;
	var iCur=0;
	
	clearInterval(obj.timer)
	obj.timer=setInterval(function(){
		var iBtn=true;
		for(var attr in json){
		var iTarget=json[attr];
		
		if(attr=='opacity'){
			iCur=Math.round(getStyle(obj,'opacity')*1000);
		}else{
			iCur=parseInt(getStyle(obj,attr));
		}
		iSpeed=(iTarget-iCur)/8;
		iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
		if(iTarget!=iCur){
			iBtn=false;
	       if(attr=='opacity'){
	    	obj.style.filter="alpha(opacity:"+iSpeed+iCur+")";
	    	obj.style.opacity=(iCur+iSpeed)/100;
	       }else{
	    	obj.style[attr]=iCur+iSpeed+'px';
	         }
	    }
	         }
		if(iBtn){
			clearInterval(obj.timer);
			fn&&fn.call(obj);
		}
	},x)
	
}
