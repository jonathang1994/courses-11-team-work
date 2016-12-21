/*********************************************
  :: Transitions
********************************************/
var popinTimer = 0;
var popoutTimer = 0;
var globalPopinNumber = 80;

$(document).ready(function() {
    transitionIn();
});

var transitionIn = function() {

    popinGo(globalPopinNumber);

    $(".next-button, .prev-button, #64-start, .jba-btn-submit").on("click", function(e) {
        if ($(this).hasClass("jba-btn-locked")){
            return
        } else {
            e.preventDefault();
            var goTo = this.getAttribute("href");
            popoutGo(globalPopinNumber);
            console.log(popoutTimer);
            var newOut = popoutTimer + globalPopinNumber + 500;
            setTimeout(function() {
                window.location = goTo;
            }, newOut);
        }
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
