window.onload=function(){
	var Team=document.getElementsByClassName('team')[0];
	var ocold3=Team.getElementsByClassName('col-md-3');
	var icon1=Team.getElementsByClassName('view-caption');
	var icon2=Team.getElementsByClassName('team-icon');
	
	var timer=null;
	var num=0;
	console.log(icon2)
	for(var i=0;i<ocold3.length;i++){
		ocold3[i].index=i;
		var a=icon2[i].getElementsByTagName('a');
			
		
			ocold3[i].onmouseover=function(){
			
			num=this.index;
			startMove(icon1[this.index],{top:200},30,function(){				
				
				
					setTimeout(function(){
					
					startMove(icon2[num],{top:100},30);
					
				},300)
				
			});
		    }
		
		    ocold3[i].onmouseout=function(){
				
			startMove(icon1[this.index],{top:300},30,function(){
				
					startMove(icon2[num],{top:400},30,)
				
			})
			
		    }
		
	}
}
