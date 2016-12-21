/*********************************************
  :: Progress Bar
********************************************/

$(function() {
    $(".branding98 .front").hide();
    $(".testShell, .testMTV").hide();
    $('#slider-vertical').find("span").removeClass().addClass('newSliderbutton');
    $('.arrow-wrap').parent().next().hide();

    //Branding-12

    $('#brandingLeft').on('click', function() {
        // if($('#brandingLeft').hasClass('bSelected')) {
        // 	$('#brandingLeft').css("background","url('../img/buttons/brandingUnclicked.svg?" + Math.random() + "')");
        // 	setTimeout(function(){$('#brandingLeft').css("background","url('../img/buttons/rectangle-button.svg')")},900);
        // 	$('#brandingLeft').removeClass('bSelected');
        // } else {
        if ($('#brandingRight').next().hasClass('correct')) {
            $('#brandingLeft').click(false);
        } else {
            $('#brandingLeft')
                .css("background", "url('../img/buttons/brandingClicked.svg?" + Math.random() + "') no-repeat")
                .addClass('bSelected');
        }
        // }
    });

    $('#marketingLeft').on('click', function() {
        // if($('#marketingLeft').hasClass('mSelected')) {
        // 		$('#marketingLeft').css("background","url('../img/buttons/marketingUnclicked.svg?" + Math.random() + "')");
        // 		setTimeout(function(){$('#marketingLeft').css("background","url('../img/buttons/rectangle-button.svg')")},900);
        // 		$('#marketingLeft').removeClass('mSelected');
        // 		// console.log("gelll");
        // } else {
        if ($('#brandingLeft').hasClass('bSelected')) {
            return;
        }
        if ($("#marketingRight").next().hasClass('correct')) {
            $('#marketingLeft').click(false);
        } else {
            $('#marketingLeft')
                .css("background", "url('../img/buttons/marketingClicked.svg?" + Math.random() + "') no-repeat")
                .addClass('mSelected');

        }
        // }
    });
    $("#brandingRight").on("click", function() {
        setTimeout(function() {
            $(".branding12").removeClass("animated shake");
        }, 1000);

        if ($("#brandingLeft").hasClass("bSelected")) {
            $("#brandingRight")
                .css("background", "url('../img/buttons/brandingClicked.svg?" + Math.random() + "') no-repeat")
                .addClass('brSelected');
            $("#brandingRight").next().removeClass("hidden").addClass("animated fadeIn correct");
            $("#brandingLeft").removeClass("bSelected");
            $('.branding-line').addClass('b-line-showing');

        } else if ($("#marketingLeft").hasClass("mSelected")) {
            popup();
            $("#marketingLeft").css("background", "url('../img/buttons/rectangle-button.svg') no-repeat");
            $("#marketingLeft").removeClass('mSelected');
        } else if ($('#brandingLeft').not('.bSelected') && $('#marketingLeft').not('.mSelected') && $('#brandingRight').not('.brSelected')) {
            $('#brandingLeft,#marketingLeft').addClass('animated pulse');
            $('#brandingLeft,#marketingLeft').one("animationend", function() {
                $('#brandingLeft,#marketingLeft').removeClass("animated pulse");
            });
        }
        setTimeout(function() { checkCorrect() }, 700);
    });

    $("#marketingRight").on("click", function() {
        if ($("#brandingLeft").hasClass("bSelected")) {
            $(".branding12").addClass("animated shake");
            popup();
            setTimeout(function() {
                $(".branding12").removeClass("animated shake");
            }, 1000);
            $('#brandingLeft').css("background", "url('../img/buttons/rectangle-button.svg') no-repeat");
            $("#brandingLeft").removeClass('bSelected');

        } else if ($("#marketingLeft").hasClass("mSelected")) {
            $("#marketingRight")
                .css("background", "url('../img/buttons/marketingClicked.svg?" + Math.random() + "') no-repeat")
                .addClass('mrSelected');
            $("#marketingRight").next().removeClass("hidden").addClass("animated fadeIn correct");
            $("#marketingLeft").removeClass("mSelected");
            $('.marketing-line').addClass('b-line-showing');
        } else if ($('#brandingLeft').not('.bSelected') && $('#marketingLeft').not('.mSelected')) {
            $('#brandingLeft,#marketingLeft').addClass('animated pulse');
            $('#brandingLeft,#marketingLeft').one("animationend", function() {
                $('#brandingLeft,#marketingLeft').removeClass("animated pulse");
            });
        }
        setTimeout(function() { checkCorrect() }, 700);
    });

    popup = function(e) {
        if ($("#brandingRight").hasClass("popupOnce") || $("#marketingRight").hasClass("popupOnce")) {
            $('[data-popup="popup-1"]').fadeIn(350).css("display", "flex");
            $('.popup-inner').css('display', 'block');
            $(".branding12").addClass("animated shake");
        }
    }

    checkCorrect = function() {
        if ($("#brandingRight").next().hasClass("correct") && $("#marketingRight").next().hasClass("correct") && $("#marketingRight").hasClass("bla")) {
            $('[data-popup="popup-2"]').fadeIn(350).css("display", "flex");
            $('.popup-inner').css('display', 'block');
            $("#marketingRight").removeClass("bla");
            $('#notQuite').remove();
        }
    }

    //branding12
});

$(document).ready(function() {
    //progress bar animation
    // $(".percentageProgress").addClass("active");

    function arrow() {
        $(".percentageArrow").removeClass("hidden").addClass("animated fadeInRight");
    }

    function percentage() {
        $(".percentageTxt").removeClass("hidden").addClass("animated pulse");
    }

    function fixed() {
        $(".fixed").removeClass("hidden").addClass("animated fadeIn");
    }
    setTimeout(function() { arrow() }, 1000);
    setTimeout(function() { fixed() }, 1000);
    setTimeout(function() { percentage() }, 2000);
    setTimeout(function() { $(".percentageArrow, .percentageTxt").addClass("hidden"); }, 6000);
    //slider animation
    $('.single-item').slick({
        infinite: false
    });
    // console.log("hello");

    //next arrow changing color

    if ($("#last").hasClass("lastArrow")) {
        setTimeout(function() { $(".next-button-locked, .arrowLock").css("display", "none"); }, 1500);
        setTimeout(function() { $(".next-button").removeClass("hidden").addClass("animated rubberBand") }, 1500);
    }


    //custom page 41 slider

    $('.41-slider').slick({
        infinite: false
    });

    // branding97

    setTimeout(function() { $(".firstCheck").show(200) }, 1000);
    setTimeout(function() { $(".secondCheck").show(200) }, 2000);
    setTimeout(function() { $(".thirdCheck").show(200) }, 3000);
    setTimeout(function() { $(".fourthCheck").show(200) }, 4000);

    //branding46
    $(".wrong").on('click', function() {
        // console.log("hello");
        $(this).addClass("animated shake").removeClass("rectangle-tab-active");
        $(this).one("animationend", function() {
            $(this).removeClass("animated shake");
        });
    });
    $("#lg").on('click', function() {
        setTimeout(function() {
            $(".testLG").fadeOut(200, function() {
                $(".testShell").show(500);
            });
        }, 1000);

    });
    $("#shell").on('click', function() {
        $(".testShell").hide();
        $(".testMTV").show(500);
    });
    $(".success").on('click', function() {
        $(".testMTV").css("opacity", "0");
        $(".goodjob").removeClass("hidden").addClass("animated rollIn");
    });

    //branding74
    $(function() {
        $('.popSocial , .popCampaign, .popMarket').hide();
        $('.popup-close').on("click", function() {
            // console.log("hello");
            $(this).parent().hide(200);
        });
        $('.market').on("click", function() {
            $('.popSocial , .popMarket , .popCampaign').fadeOut(200);
            $('.popMarket').fadeIn(200);
        });
        $('.social').on("click", function() {
            $('.popSocial , .popMarket , .popCampaign').fadeOut(200);
            $('.popSocial').fadeIn(200);
        });
        $('.campaign').on("click", function() {
            $('.popSocial , .popMarket , .popCampaign').fadeOut(200);
            $('.popCampaign').fadeIn(200);
        });
    });

    //branding28

    setTimeout(function() { $(".movingHand").addClass("active"); }, 2000);
    setTimeout(function() { $(".movingHand").addClass("scale"); }, 3000);
    setTimeout(function() { $(".movingHand").removeClass("scale"); }, 4000);

    //branding20

    $("#slider-vertical").slider({
        orientation: "vertical",
        range: "min",
        max: 5,
        min: 1,
        value: 5,
        slide: function(event, ui) {
            $("#amount").val(ui.value);
        }
    });
    $("#amount").val($("#slider-vertical").slider("value"));


    //branding27

    $('.arrow-wrap').on("click", function() {

        if ($(this).data("slided") == true) {
            $(this).parent().next().slideUp('normal');
            $(this).children().attr("src", "../img/slider/plus.png");
            $(this).data("slided", false);
        } else {
            $('.arrow-wrap').data('slided', false);
            $('.accordion').slideUp('normal');
            $('.arrow-wrap img').attr("src", "../img/slider/plus.png");
            $(this).parent().next().slideDown();
            $(this).children().attr("src", "../img/slider/minus.png");
            $(this).data("slided", true);
        }

    });

    /* Activate Progress bar on hover */
    function fadeProgressBarIn() {
        setTimeout(function() { arrow() }, 500);
        setTimeout(function() { fixed() }, 500);
        setTimeout(function() { percentage() }, 1000);
        setTimeout(function() { $(".percentageArrow, .percentageTxt").addClass("hidden"); }, 6000);
    }

    //courseProgressBar
    $(".courseProgressBar").mouseover(function() {
        fadeProgressBarIn();
    }).mouseout(function() {
        console.log('off');
    });

    //a href stop to link
    $(document).on("click", "a.next-button-locked", function(event) {
        event.preventDefault();
        var dataUrl = $(this).attr("href");
        if (dataUrl != "") {
            loadPage(dataUrl);
        }
    });


});
