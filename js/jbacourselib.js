/*********************************************
  :: JBA js course library
********************************************/

//revealing module pattern (only expose globals to return object)
	var courseFeatureJBA = (function(){
		var count = 0;
		var animateArgs;

		var animateProgressBar = function(id, times, startBg, endBg, speed){
			test = speed;
			count++;
			//pass arguments to reAnimateProgressBar (if needed)
			animateArgs = arguments;
			//timeout for progress bar animate
			if(count < times + 1){
			$(id).animate({
		    backgroundColor: startBg
		  	}, speed, "linear")

		  	.animate({
		    backgroundColor: endBg
		  }, speed, "linear", function() {
		    animateProgressBar(id, times, startBg, endBg, speed);
		 });
		}
	  };

	  var reAnimateProgressBar = function(){ 
	  		var id = animateArgs[0], times = animateArgs[1], startBg = animateArgs[2], endBg = animateArgs[3],
	  		 speed = animateArgs[4];
		  	$(id).mouseover(function() {
		  		count = 0;
			    animateProgressBar(id, times, startBg, endBg, speed);
			 });
	  		};

	   var updateProgressBarNumber = function(){

	   };		

		//global functions
		return {
            animateProgressBar: animateProgressBar,
            reAnimateProgressBar: reAnimateProgressBar,
            updateProgressBarNumber: updateProgressBarNumber
        };
	})();