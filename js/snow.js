function($){
	
	$.fn.snow = function(options){
	
			var $flake 			= $('<div id="snowbox" />').css({'position': 'absolute', 'top': '-50px'}).html('&#10052;'),
				documentHeight 	= $(document).height(),
				documentWidth	= $(document).width(),
				defaults		= {
									minSize		: 10,		
									maxSize		: 20,		
									newOn		: 1000,		
									flakeColor	: "#B7ECFF"
								},
				options			= $.extend({}, defaults, options);
			
			var interval		= setInterval( function(){
				var startPositionLeft 	= Math.random() * documentWidth,
				 	startOpacity		= 0.5 + Math.random(),
					sizeFlake			= options.minSize + Math.random() * options.maxSize,
					endPositionTop		= documentHeight,
					endPositionLeft		= startPositionLeft+Math.random() * -237+Math.random()*12,
//					startPositionLeft - 100 + Math.random() * 500,
					durationFall		= documentHeight * 20 + Math.random() * 5000;
				$flake.clone().appendTo('body').css({
							left: startPositionLeft,
							opacity: startOpacity,
							'font-size': sizeFlake,
							color: options.flakeColor
						}).animate({
							top: endPositionTop,
							left: endPositionLeft,
							opacity: 0.2
						},durationFall,'linear',function(){
							$(this).remove()
						}
					);
					
			}, options.newOn);
	
	};
	
})(jQuery);

$(function(){
		$.fn.snow({ 
			minSize: 5,		//雪花的最小尺寸
			maxSize: 40, 	//雪花的最大尺寸
			newOn: 100		//雪花出现的频率 这个数值越小雪花越多
		});
	});
