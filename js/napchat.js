$(document).ready(function(){
  $('.branding-08-slider').slick({
    centerMode: true,
    centerPadding: '0px',
    draggable: false,
    slidesToShow: 3,
    infinite: false,
    speed: 180,
    arrows: false,
  });
  napChatInit();
  	
});

var napChat = function(){

	$("#branding-08-button").on("click",function(){
		$(".branding-08-phone-container").addClass("branding-08-popup");
		setTimeout(function(){
			$(".branding-08-phone").addClass("branding-phone-in");
			setTimeout(function(){
				$(".tapme-container").addClass("tapme-container-in");
			}, 200);
		}, 200);
	});


	$(".slick-center").on("click",function(e){

		e.stopPropagation();

		var currentIndex = $('.branding-08-slider').slick('slickCurrentSlide');
		var slideIndex = $(this).data("slide-index");

		if (currentIndex == 0){
			$('.branding-08-slider').slick('slickGoTo',1);
			$(".branding-08-button1").removeClass("slick-button-active");
			$(".tapme-container").removeClass("tapme-container-in");
			$(".branding-08-button2").addClass("slick-button-active");
			$(".branding-08-recording-dot").show();
			$("#timerUpdate").fadeIn();
			recordingTimer(false);

			napChat();
		} else if ( currentIndex == 1){
			$('.branding-08-slider').slick('slickGoTo',2);
			$(".branding-08-recording-dot").hide();
			$("#timerUpdate").hide();
			
			$(".branding-08-actual-image").addClass("branding-08-filter");
			$(".branding-08-button2").removeClass("slick-button-active");
			$(".branding-08-button3").addClass("slick-button-active");
			recordingTimer(true);


			napChat();
		} else if ( currentIndex == 2){
			$('.branding-08-slider').slick('slickGoTo',3);
			$(".branding-08-cat-image").addClass("branding-08-flex-start branding-08-background-position");

			setTimeout(function(){
				$(".branding-08-comments").addClass("branding-08-comments-appear");
				setTimeout(function(){
					commentsAppear();
				}, 200);
			}, 200);
			$(".branding-08-button3").removeClass("slick-button-active");
			$(".branding-08-button4").addClass("slick-button-active");
			napChat();
		} else if ( currentIndex == 3){
			// $("#branding-08-button").hide();
			$(".branding-08-phone").removeClass("branding-phone-in");
			setTimeout(function(){
				$(".branding-08-phone-container").removeClass("branding-08-popup");
				setTimeout(function(){

					napChatReset();
				}, 200);
			}, 200);
			napChat();
		}
		napchat();
		

	});
}

var napChatReset = function(){

	
	$('.branding-08-slider').slick('slickGoTo',0,false);
	$(".branding-08-button4").removeClass("slick-button-active");
	// console.log("removed?");
	$(".branding-08-actual-image").removeClass("branding-08-filter");
	$(".branding-08-cat-image").removeClass("branding-08-flex-start branding-08-background-position");
	$(".branding-08-button1").addClass("slick-button-active");
	$(".branding-08-comments").removeClass("branding-08-comments-appear");
	time = 0;
	commentsHide();
}

var commentsAppear = function(){
	setTimeout(function(){
		$(".branding-08-cat-header").addClass("comment-appear");
		setTimeout(function(){
			$(".branding-08-cat-title").addClass("comment-appear");
			setTimeout(function(){
				$(".branding-08-comment1").addClass("comment-appear");
				setTimeout(function(){
					$(".branding-08-comment2").addClass("comment-appear");
					setTimeout(function(){
						$(".branding-08-comment3").addClass("comment-appear");
					}, 300);
				}, 800);
			}, 400);
		}, 100);
	}, 50);

}

var commentsHide = function(){
	setTimeout(function(){
		$(".branding-08-cat-header").removeClass("comment-appear");
		setTimeout(function(){
			$(".branding-08-cat-title").removeClass("comment-appear");
			setTimeout(function(){
				$(".branding-08-comment1").removeClass("comment-appear");
				setTimeout(function(){
					$(".branding-08-comment2").removeClass("comment-appear");
					setTimeout(function(){
						$(".branding-08-comment3").removeClass("comment-appear");
					}, 300);
				}, 800);
			}, 400);
		}, 100);
	}, 50);

}



var likeNumber1 = -1;
var likeNumber2 = -1;
var likeNumber3 = -1;

var likeCounter1 = function(){
	
	likeNumber1 ++;
	likeTimer1 = Math.ceil(Math.random() * 4000) + 500;
	setTimeout(function(){
		$('#branding-field-1').text(likeNumber1);
		$("#thumb1").addClass("thumb-pop");
		setTimeout(function(){
			$("#thumb1").removeClass("thumb-pop");
		}, 200);
		likeCounter1();
	}, likeTimer1);
}

var likeCounter2 = function(){
	
	likeNumber2 ++;
	likeTimer2 = Math.ceil(Math.random() * 4000) + 2000;
	setTimeout(function(){
		$('#branding-field-2').text(likeNumber2);
		$("#thumb2").addClass("thumb-pop");
		setTimeout(function(){
			$("#thumb2").removeClass("thumb-pop");
		}, 200);
		likeCounter2();
	}, likeTimer2);
}

var likeCounter3 = function(){
	
	likeNumber3 ++;
	likeTimer3 = Math.ceil(Math.random() * 4000) + 200;
	setTimeout(function(){
		$('#branding-field-3').text(likeNumber3);
		$("#thumb3").addClass("thumb-pop");
		setTimeout(function(){
			$("#thumb3").removeClass("thumb-pop");
		}, 200);
		likeCounter3();
	}, likeTimer3);
}

var napChatInit = function(){
	if ($("#branding-08-container-fluid").hasClass("branding-08-init")){
		napChat();
		likeCounter1();
		likeCounter2();
		likeCounter3();
	}
}

var i = 1; 
var time = 0;


var recordingTimer = function(x){


	
	
	time++;
	
	if (time >= 10){
		var recordTime = time;
	} else {
		var recordTime = "0"+time;
	}

	$('#timerUpdate').text("00:"+recordTime);

	setTimeout(function () {
	   i++;
	   if (x == true){
	   	i=0;
	   	time=0;
	   	console.log("its true");
	   	console.log(i);
	   	console.log(time);
	   	return false;

	   } else if (i < 60) {

	      recordingTimer();

	   }
	}, 1000)


}







// setInterval(function() {
// 	var likeCounter = 0;
//   var number = 1 + Math.floor(Math.random() * 6);
//   $('#my_div').text(number);
// },
// 1000);

