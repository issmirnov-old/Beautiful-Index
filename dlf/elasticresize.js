(function($){
 
    $.fn.extend({ 
         
        //pass the options variable to the function
        elasticresize: function(options) {
 
 
            //Set the default values, use comma to separate the settings, example:
            var defaults = {
                minWindowSize: 400, 
				minContainerSize: 398, 
				maxWindowSize: 1000, 
				maxContainerSize: 700
            }
                 
            var options =  $.extend(defaults, options);
 
            return this.each(function() {
                var o = options;

				var windowWidth = $(window).width();
			
			var rise = o.maxContainerSize-o.minContainerSize;
			var run = o.maxWindowSize-o.minWindowSize;
			var slope = rise/run;
			
			var yintercept = o.maxContainerSize-(slope*o.maxWindowSize);
			
			var newContainerWidth = slope*windowWidth + yintercept;
			
			//Handle the resizing of the container
			var difference = o.minWindowSize - o.minContainerSize;
			
			
			if(windowWidth<o.minWindowSize){
				
				//Make it the right width when the browser is smaller than the minimum window width
				
				$(this).css({
					width: windowWidth - difference
				});
				
				
			}
			else if(windowWidth>=o.minWindowSize && windowWidth<o.maxWindowSize){
			$(this).css({
				width: newContainerWidth
			});	
			}
			else if(windowWidth>=o.maxWindowSize){
			$(this).css({
				width: o.maxContainerSize
			});		
			}
			
			
			
			
             
            });
        }
    });
     
})(jQuery);