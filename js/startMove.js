function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj)[attr];
	}
}
function startMove(obj,json,frequency,fnEnd){
	clearInterval(obj.timer);
	var iSpeed=0;
	var icur=0;
	
	obj.timer=setInterval(function(){
		var ibtn=true;
		for(var attr in json){
			var target=json[attr];
		    if(attr=='opacity'){
			icur=Math.round(getStyle(obj,attr)*100);
		  }else{
			icur=parseInt(getStyle(obj,attr));
		   }
		  iSpeed=(target-icur)/8;
		  iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
		
		  if(icur!=target){
			ibtn=false;
		     if(attr=='opacity'){
			    obj.style.filter="alpha(opacity:"+icur+";)";
			    obj.style.opacity=(icur+iSpeed)/100;
		      }else{
			    obj.style[attr]=icur+iSpeed+'px';
		      }
		}
		
		}
		if(ibtn){
			clearInterval(obj.timer);
			fnEnd&&fnEnd.call(obj);
		}
	},frequency)
	
	
	
}
