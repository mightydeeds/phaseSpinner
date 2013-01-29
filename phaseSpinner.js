// (function( $ ){
// 	'use strict';

// 	// build functions that formFont has access to

// 	$.phaseSpinner = function(elm, arguments){
// 		// do stuff
// 	}

// 	$.fn.phaseSpinner = function(param) {
// 		return this.each(function(){
// 			$.phaseSpinner(this, param);
// 		});
// 	};

// })(jQuery);





(function( $ ) {

	var methods = {
		init:function(options){ 

			var options = $.extend({
				'size'  : 100,
				'number': 5,
				'color' : 'salmon'
			}, options);

			return this.each(function() {

				$(this).addClass('phaseSpinner');

				if($(this).css("position") == "static"){
					$(this).css("position","relative");
				}

				$(this).css({
					width:options.size + "px",
					height:options.size + "px"
				})

				var pSize  = Math.floor(options.size / 2 / options.number),
					offset = (options.size - pSize) / 2,
					padd   = (options.size - pSize * options.number * 2)/2;

				console.log(pSize);

				var start = (Math.random() * - 150) * 3000 + 'ms';
				
				for (var i = 0; i < options.number; i++) {
			
					var dotL = $('<div class="spin_dot">');

					dotL[0].style.backgroundColor = options.color;
					dotL[0].style.width = (pSize - 4) + "px";
					dotL[0].style.height = (pSize - 4) + "px";
					dotL[0].style.left = (i * pSize + padd) +"px";

					var dotR = $('<div class="spin_dot">');

					dotR[0].style.backgroundColor = options.color;
					dotR[0].style.width = (pSize - 4) + "px";
					dotR[0].style.height = (pSize - 4) + "px";
					dotR[0].style.right = (i * pSize + padd) +"px";

					var bar = $('<div class="load_bar">').append(dotL,dotR);

					bar[0].style.top = offset + "px";
					bar[0].style.width = options.size + "px";
					bar[0].style.height = (pSize - 4) + "px";
					bar[0].style.webkitAnimationDelay = start;
					bar[0].style.MozAnimationDelay = start;
					bar[0].style.webkitAnimationDuration = (3000*options.number)/(i+1) + "ms";
					bar[0].style.MozAnimationDuration = (3000*options.number)/(i+1) + "ms";
						
					$(this).append(bar);	

				};

			});

		},
		test:function(testvar,var2){
		
			console.log(var2);

		}
	};

	$.fn.phaseSpinner = function(method){

		if (methods[method]){
			return methods[method].apply( this, Array.prototype.slice.call(arguments,1) );
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
		}

	};

})( jQuery );
