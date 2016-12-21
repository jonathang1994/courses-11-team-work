<?php include '../shared/header.html' ?>
        <!-- start content -->
        <!-- =========================== -->
        <div class="container-fluid h100">
            <div class="row header-row">
                <div class="col-md-12 col-md-offset-0 col-sm-8 col-sm-offset-2 pop-in">
                    <div class="new-main-content">
                        <h2>Welcome</h2>
                        <!-- Change Header -->
                    </div>
                </div>
            </div>
            <div class="row content-row video-pop-in">
                <div class="col-md-6 col-md-offset-3 col-sm-12">
                    <div class="squiggle-container ">
                        <div class="top-squiggle"><img src="https://joybusinessacademy.github.io/img/squiggle/white-top.svg" alt=""></div>
                        <div class="squiggle-content white-squiggle">
                            <div class="row two-line two-line-bot">
                                <div class="col-md-12">
                                    <div class="squiggle-container flex-center">
                                        <!-- put all of your content into the squiggle content div -->
                                        <div class="aspect-ratio">
                                            <iframe src="https://player.vimeo.com/video/182628471?title=0&byline=0&portrait=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                                        </div>
                                        <!-- End Content -->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bot-squiggle"><img src="https://joybusinessacademy.github.io/img/squiggle/white-bottom.svg" alt=""></div>
                    </div>
                </div>
            </div>
            <!-- end  content -->
            <!-- =========================== -->
            <!-- footer start -->
            <div class="row progressWrap">
                <div class="col-sm-12 col-pad0">
                    <!-- S:Progress Bar -->
                    <div class="progress-row">
                        <div class="hand-arrow">
                            <div class="percentageTxt hidden">
                                <p>60%</p>
                            </div>
                            <img class="percentageArrow hidden" src="https://joybusinessacademy.github.io/img/progressBar/hand_arrow.png" alt="" />
                        </div>
                        <div class="container progressContainer">
                            <div class="row">
                                <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-flex-center">
                                </div>
                                <!-- leftArrow -->
                                <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8 align">
                                    <div class="course-progress-bar-wrap">
                                        <div class="courseProgressBar">
                                            <p class="fixed hidden">60%</p>
                                            <div class="percentageProgress"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-flex-center">
                                    <a href="../pages/0.php" class="course-button next-button"></a>
                                </div>
                                <!-- rightArrow -->
                            </div>
                        </div>
                    </div>
                    <!-- E:Progress Bar -->
                </div>
            </div>
        </div>
        <!-- Custom Js -->

 <!-- new vue logic goes here -->
<?php include '../shared/footer.html' ?>

<script>
$(document).ready(function() {
    setTimeout(function() {
        console.log("video pop");
        $(".content-row").css("opacity", 1);
        $(".content-row").css("transform", "translateX(0px)");
    }, 400);
    $(".next-button").on("click", function() {
        $(".content-row").css("opacity", 0);
    })

});
</script>