/*********************************************
  :: JBA master js course library
********************************************/

//only expose globals to return object
var courseFeatureJBA = (function() {

    /*********************************************
     :: data popups
     ********************************************/

    var activateDataPopups = function() {
        //----- OPEN
        $('[data-popup-open]').on('click', function(e) {
            var targeted_popup_class = jQuery(this).attr('data-popup-open');
            $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350).css("display", "flex");
            $('.popup-inner').css('display', 'block');
            e.preventDefault();
        });

        //----- CLOSE
        $('[data-popup-close]').on('click', function(e) {
            var targeted_popup_class = jQuery(this).attr('data-popup-close');
            $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
            e.preventDefault();
        });
    };

    /*********************************************
      :: buttons
    ********************************************/
    var buttonVisited = function() {
        $(".rectangle-button").on("click", function() {
            if (!$(this).hasClass("rectangle-visited")) {
                console.log("dont have");
                $(this).addClass("rectangle-visited");
            } else {
                $(this).removeClass("rectangle-visited");
            }
        });

        $(".question-button").on("click", function() {
            $(this).addClass("question-visited");
        });
    };

    var tabActive = function() {
        $(".rectangle-tab").on("click", function() {
            $(".rectangle-tab").removeClass("rectangle-tab-active");
            $(this).addClass("rectangle-tab-active");
        });
    };

    var courseCloseSpin = function() {
        $(".close-button").hover(function() {
            $(".close-button-cross").toggleClass("close-cross-spin");
        });
    };

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
    };
    /*********************************************
      :: content show
    ********************************************/
    //When you click something with the class content-show-button, all of the items wil the content-show-content class will be revealed
    var contentShow = function() {
        $(".content-show-button").on("click", function() {
            $(".content-show-content").addClass("content-show-content-reveal");
        });
        $(".content-show-button1").on("click", function() {
            $(".content-show-content2").fadeOut(200, function() {
                $(".content-show-content1").fadeIn();
            });

            // $(".content-show-content2").removeClass("content-show-content-reveal");
            // $(".content-show-content1").addClass("content-show-content-reveal");
            // $(".content-show-button2").removeClass("content-show-button2");
        });
        $(".content-show-button2").on("click", function() {
            // $(".content-show-content1").removeClass("content-show-content-reveal");
            // $(".content-show-content2").addClass("content-show-content-reveal");
            // $(".content-show-button1").removeClass("content-show-button1");

            $(".content-show-content1").fadeOut(200, function() {
                $(".content-show-content2").fadeIn();
            });
        });
    };

    var showInputFieldCourse = function() {
        var id = $('#revealCourseTextbox');
        $(id).fadeOut(600, function() {
            $("#courseTextBoxField").fadeIn();
        });
    };

    /*********************************************
      :: textboxes
    ********************************************/

    var activateTextBoxUi = function() {
        //focus inside textbox
        $('#courseFormWrapperDiv1').focusin(function() {
            $(".textbox-colour-select-1").removeClass("light-beige-textbox").addClass("dark-beige-textbox");
            $(".form-control-1").addClass("dark-beige-textbox");
            $(".top-squiggle-change-1 img").attr("src", "../img/forms/darkTop.svg");
            $(".bot-squiggle-change-1 img").attr("src", "../img/forms/darkBott.svg");

        });
        //focus outside textbox
        $('#courseFormWrapperDiv1').focusout(function() {
            $(".textbox-colour-select-1").removeClass("dark-beige-textbox").addClass("light-beige-textbox");
            $(".form-control-1").removeClass("dark-beige-textbox").addClass("light-beige-textbox");
            $(".top-squiggle-change-1 img").attr("src", "../img/forms/lightTop.svg");
            $(".bot-squiggle-change-1 img").attr("src", "../img/forms/lightBott.svg");
        });

        $('#courseFormWrapperDiv2').focusin(function() {
            $(".textbox-colour-select-2").removeClass("light-beige-textbox").addClass("dark-beige-textbox");
            $(".form-control-2").addClass("dark-beige-textbox");
            $(".top-squiggle-change-2 img").attr("src", "../img/forms/darkTop.svg");
            $(".bot-squiggle-change-2 img").attr("src", "../img/forms/darkBott.svg");

        });

        $('#courseFormWrapperDiv2').focusout(function() {
            $(".textbox-colour-select-2").removeClass("dark-beige-textbox").addClass("light-beige-textbox");
            $(".form-control-2").removeClass("dark-beige-textbox").addClass("light-beige-textbox");
            $(".top-squiggle-change-2 img").attr("src", "../img/forms/lightTop.svg");
            $(".bot-squiggle-change-2 img").attr("src", "../img/forms/lightBott.svg");
        });

        $('#courseFormWrapperDiv3').focusin(function() {
            $(".textbox-colour-select-3").removeClass("light-beige-textbox").addClass("dark-beige-textbox");
            $(".form-control-3").addClass("dark-beige-textbox");
            $(".top-squiggle-change-3 img").attr("src", "../img/forms/darkTop.svg");
            $(".bot-squiggle-change-3 img").attr("src", "../img/forms/darkBott.svg");

        });

        $('#courseFormWrapperDiv3').focusout(function() {
            $(".textbox-colour-select-3").removeClass("dark-beige-textbox").addClass("light-beige-textbox");
            $(".form-control-3").removeClass("dark-beige-textbox").addClass("light-beige-textbox");
            $(".top-squiggle-change-3 img").attr("src", "../img/forms/lightTop.svg");
            $(".bot-squiggle-change-3 img").attr("src", "../img/forms/lightBott.svg");
        });

        $('#courseFormWrapperDiv4').focusin(function() {
            $(".textbox-colour-select-4").removeClass("light-beige-textbox").addClass("dark-beige-textbox");
            $(".form-control-4").addClass("dark-beige-textbox");
            $(".top-squiggle-change-4 img").attr("src", "../img/forms/darkTop.svg");
            $(".bot-squiggle-change-4 img").attr("src", "../img/forms/darkBott.svg");

        });

        $('#courseFormWrapperDiv4').focusout(function() {
            $(".textbox-colour-select-4").removeClass("dark-beige-textbox").addClass("light-beige-textbox");
            $(".form-control-4").removeClass("dark-beige-textbox").addClass("light-beige-textbox");
            $(".top-squiggle-change-4 img").attr("src", "../img/forms/lightTop.svg");
            $(".bot-squiggle-change-4 img").attr("src", "../img/forms/lightBott.svg");
        });
    };

    /*********************************************
      :: floating elements
    ********************************************/

    var stopFloat = function() {
        $('.floating').removeClass('floating');
    };

    /*********************************************
      :: transitions
    ********************************************/
    var popinTimer = 0;
    var popoutTimer = 0;
    var globalPopinNumber = 80;

    var transitionIn = function() {

        popinGo(globalPopinNumber);

        $(".next-button, .prev-button, #64-start, .jba-btn-submit").on("click", function(e) {
            e.preventDefault();
            var goTo = this.getAttribute("href");
            popoutGo(globalPopinNumber);
            console.log(popoutTimer);
            var newOut = popoutTimer + globalPopinNumber + 500;
            setTimeout(function() {
                window.location = goTo;
            }, newOut);
        });
    }

    var popinGo = function(poppinNumber) {

        var poppedElement = $(".pop-in");

        $(poppedElement).each(function() {
            popinTimer = popinTimer + poppinNumber;
            var thisPop = this;
            setInterval(function() {
                $(thisPop).addClass("popIn");
            }, popinTimer);
        });
    }


    var popoutGo = function(poppinNumber) {

        var poppedElement = $(".pop-in");

        $(poppedElement).each(function() {
            popoutTimer = popoutTimer + poppinNumber;
            var thisPop = this;
            setInterval(function() {
                $(thisPop).addClass("popOut");
            }, popoutTimer);
        });
    }

    /*********************************************
      :: Multi Select images
    ********************************************/

    var activateMultiSelectImages = function() {
        //console.log("working");
        $('.but-1').on("click", function() {
            console.log("clicked!!!");
            if ($(".inp-1").prop("checked") !== true) {
                $(".but-1").addClass('active');
                $('.inp-1').prop('checked', true);
                $('.img-1').css('filter', 'brightness(80%)');

            } else {
                $(".but-1").removeClass('active');
                $('.inp-1').prop('checked', false);
                $('.img-1').css('filter', 'brightness(100%)');
                $(".but-1").removeClass('rectangle-visited');

            }

        });

        $('.but-2').on("click", function() {
            console.log("clicked!!!");
            if ($(".inp-2").prop("checked") !== true) {
                $(".but-2").addClass('active');
                $('.inp-2').prop('checked', true);
                $('.img-2').css('filter', 'brightness(80%)');

            } else {
                $(".but-2").removeClass('active');
                $('.inp-2').prop('checked', false);
                $('.img-2').css('filter', 'brightness(100%)');
                $(".but-2").removeClass('rectangle-visited');

            }

        });

        $('.but-3').on("click", function() {
            console.log("clicked!!!");
            if ($(".inp-3").prop("checked") !== true) {
                $(".but-3").addClass('active');
                $('.inp-3').prop('checked', true);
                $('.img-3').css('filter', 'brightness(80%)');

            } else {
                $(".but-3").removeClass('active');
                $('.inp-3').prop('checked', false);
                $('.img-3').css('filter', 'brightness(100%)');
                $(".but-3").removeClass('rectangle-visited');

            }

        });

        $('.but-4').on("click", function() {
            console.log("clicked!!!");
            if ($(".inp-4").prop("checked") !== true) {
                $(".but-4").addClass('active');
                $('.inp-4').prop('checked', true);
                $('.img-4').css('filter', 'brightness(80%)');

            } else {
                $(".but-4").removeClass('active');
                $('.inp-4').prop('checked', false);
                $('.img-4').css('filter', 'brightness(100%)');
                $(".but-4").removeClass('rectangle-visited');

            }

        });

        $('.but-5').on("click", function() {
            console.log("clicked!!!");
            if ($(".inp-5").prop("checked") !== true) {
                $(".but-5").addClass('active');
                $('.inp-5').prop('checked', true);
                $('.img-5').css('filter', 'brightness(80%)');

            } else {
                $(".but-5").removeClass('active');
                $('.inp-5').prop('checked', false);
                $('.img-5').css('filter', 'brightness(100%)');
                $(".but-5").removeClass('rectangle-visited');

            }

        });
        $('.but-6').on("click", function() {
            console.log("clicked!!!");
            if ($(".inp-6").prop("checked") !== true) {
                $(".but-6").addClass('active');
                $('.inp-6').prop('checked', true);
                $('.img-6').css('filter', 'brightness(80%)');

            } else {
                $(".but-6").removeClass('active');
                $('.inp-6').prop('checked', false);
                $('.img-6').css('filter', 'brightness(100%)');
                $(".but-6").removeClass('rectangle-visited');

            }

        });

    };

    /*********************************************
            Progress Bar
         ********************************************/

    var activateProgressBar = function() {
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
    };

    var activateProgressBarHover = function() {
        (".courseProgressBar").mouseover(function() {
            activateProgressBar();
        }).mouseout(function() {

        });
    };

    /*********************************************
            Flexy speck check
    ********************************************/
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


    //global functions
    return {
        activateDataPopups: activateDataPopups,
        buttonVisited: buttonVisited,
        tabActive: tabActive,
        courseCloseSpin: courseCloseSpin,
        lockedReject: lockedReject,
        contentShow: contentShow,
        showInputFieldCourse: showInputFieldCourse,
        activateTextBoxUi: activateTextBoxUi,
        stopFloat: stopFloat,
        activateMultiSelectImages: activateMultiSelectImages,
        activateProgressBar: activateProgressBar,
        activateProgressBarHover: activateProgressBarHover,
        transitionIn: transitionIn,
        flexySpeckCheck:flexySpeckCheck
    };

})();
