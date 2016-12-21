/*********************************************
  :: Buttons
********************************************/

var buttonVisited = function() {
    $(".jba-btn").on("click", function() {
        if (!$(this).hasClass("jba-visited") && !$(this).hasClass("jba-btn-tab")) {
            console.log("dont have");
            $(this).addClass("jba-visited");
        } else {
            $(this).removeClass("jba-visited");
        }
    });

    $(".question-button").on("click", function() {
        $(this).addClass("question-visited");

    });

    $(".radial-button").on("click", function() {
        $(this).addClass("radial-visited");


    });
}

buttonVisited();


var buttonTabs = function() {
    $(".jba-btn-tab").on("click", function() {
        $(".jba-btn-tab").removeClass("jba-btn-tab-active");
        $(this).addClass("jba-btn-tab-active");
    });

}

buttonTabs();



var courseCloseSpin = function() {
    $(".close-button").hover(function() {
        $(".close-button-cross").toggleClass("close-cross-spin");
    });
}

var lockedReject = function() {
    $(".rectangle-locked").on("click", function() {
        // e.preventDefault();
        var thisRectangle = this;
        $(thisRectangle).parent().addClass("reject-wobble");
        setTimeout(function() {
            $(thisRectangle).parent().removeClass("reject-wobble");
        }, 400);

    });

    $(".next-button-locked").on("click", function() {
        // e.preventDefault();

        $(".next-button-locked").parent().addClass("reject-wobble");
        setTimeout(function() {
            $(".next-button-locked").parent().removeClass("reject-wobble");
        }, 400);

    });


}

lockedReject();

courseCloseSpin();

var jbaButtonLocked = function() {
    $(".jba-btn-locked").on("click", function(e) {
        e.preventDefault();
        var thisButton = this;
        $(thisButton).addClass("reject-wobble");
        setTimeout(function() {
            $(thisButton).removeClass("reject-wobble");
        }, 400);

    });
}

jbaButtonLocked();

//Temporary, can delete after switching to master js

var flexySpeckCheck = function() {
    console.log("hey im working!");

    var speckCheckNow = function() {
        var flexyImageHeight = $(".flexy-image").height();
        if (flexyImageHeight < 100) {
            $(".flexy-image").children('img').css("display", "none");
        } else {
            $(".flexy-image").children('img').css("display", "block");
        }
    }

    speckCheckNow();

    $(window).resize(function() {
        speckCheckNow();
    });
}

flexySpeckCheck();

// $(document).ready(function() {
//     textareaResize();
//     $(window).resize(function() {
//         textareaResize();
//     });

// });

// var textareaResize = function() {

//     if ($("textarea").length) {
//         var gettingHeight = $(".content-row").children().height();
//         var calculatedHeight = gettingHeight + 60;
//         console.log(gettingHeight);
//         if ($(window).width() <= 991 && $(window).width() >= 480) {
//             console.log("query");
//             $(".content-row").css("height", calculatedHeight);
//         }
//     }
// }



// Test plz delete

var jbaScrollFader = function(){
    // $(".content-row").on('scrollstart', function() { //or 'scrollstop'
    //     console.log("I'm scrolling!");
    //     $("#scroll-test-a").fadeOut(200, function() {
    //         $(".jba-btn-submit").fadeIn(200);
    //     });
    // });

    $(".content-row").scroll(function() {
        $(".jba-btn-scroll").fadeOut(200, function() {
            $(".jba-btn-submit, .next-button").fadeIn(200);
        });
    });
}



jbaScroller = function(){
    $(".jba-btn-scroll").on("click", function() {
        var y = $(".content-row").scrollTop();
        $(".content-row").animate({ scrollTop: y + $(window).height() }, 1000);
        $(".jba-btn-scroll").fadeOut(200, function() {
            $(".jba-btn-submit, .next-button").fadeIn(200);
        });

    });
} 



var scrollDetect = function(){
    var div = $('.content-row');
    //This controls how much hidden content there is before the scroll script starts
    var scrollCutoffThreshold = 20;

    var hasVerticalScrollbar = div[0].scrollHeight - scrollCutoffThreshold > div[0].clientHeight;
    var hasHorizontalScrollbar = div[0].scrollWidth > div[0].clientWidth;

    console.log(hasHorizontalScrollbar);
    console.log(hasVerticalScrollbar);

    if (hasVerticalScrollbar && !$(".single-item").length) {
        console.log("scroll page gooooooooo 😅😆😩");
        $(".jba-btn-submit, .next-button").hide();
        $("<button class='jba-btn-scroll'><i class='fa fa-angle-down' aria-hidden='true'></i></button>").insertBefore(".jba-btn-submit");
        $("<button class='jba-btn-scroll'><i class='fa fa-angle-down' aria-hidden='true'></i></button>").insertBefore(".next-button");
        jbaScrollFader();
        jbaScroller();
    } 
}

scrollDetect();


var svgSpeechBubble = function(){
    $(".svg-character").on("click",function(){
        $(".svg-bubble").addClass("svg-bubble-popin")
        $(".svg-tapme").fadeOut(200);
    })
}

svgSpeechBubble();







