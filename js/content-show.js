//When you click something with the class content-show-button, all of the items wil the content-show-content class will be revealed

var contentShow = function() {
    $(".content-show-button").on("click", function() {
        $(".content-show-content").addClass("content-show-content-reveal");
    });
    $(".content-show-button-nospace").on("click", function() {
        $(".content-show-content-nospace").fadeIn(200);
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


$(document).ready(function() {

    contentShow();

    $('#revealCourseTextbox').click(function() {
        showInputFieldCourse();
    });
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
    //focus outside textbox
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
    //focus outside textbox
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
    //focus outside textbox
    $('#courseFormWrapperDiv4').focusout(function() {
        $(".textbox-colour-select-4").removeClass("dark-beige-textbox").addClass("light-beige-textbox");
        $(".form-control-4").removeClass("dark-beige-textbox").addClass("light-beige-textbox");
        $(".top-squiggle-change-4 img").attr("src", "../img/forms/lightTop.svg");
        $(".bot-squiggle-change-4 img").attr("src", "../img/forms/lightBott.svg");
    });


});

var page76 = function() {
    $(".rulerPoint").on("click", function() {
        console.log("hide tapme!");
        $(".tapme-76").css("opacity", "0");
    });
}

page76();
