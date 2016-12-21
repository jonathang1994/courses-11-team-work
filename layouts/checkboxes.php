<?php include '../shared/header.html' ?>
<div class="container-fluid h100">
    <div class="row header-row">
        <div class="col-md-12 col-xs-8 col-xs-offset-2 col-md-offset-0 pop-in">
            <div class="new-main-content popin1">
                <!-- Change the title here! -->
                <h2>Checkboxes</h2>
            </div>
        </div>
    </div>
    <div class="row content-row">
        <div class="col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3  col-sm-12">
            <div class="squiggle-container pop-in">
                <div class="top-squiggle"><img src="https://joybusinessacademy.github.io/img/squiggle/white-top.svg" alt=""></div>
                <div class="squiggle-content white-squiggle">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="squiggle-container flex-center">
                                <!-- put all of your content into the squiggle content div -->
                                <div class="row">
                                    <div class="col-md-12 col-pad0">
                                        <p>Now, think back to your own business idea again:</p>
                                        <p class="text-center"><strong>Business Name</strong></p>
                                        <p>Have you developed any of the below?</p>
                                        <form class="jba-checkbox one-line one-line-bot" action="#">
                                            <p>
                                                <input type="checkbox" id="test1" />
                                                <label for="test1">New product</label>
                                            </p>
                                            <p>
                                                <input type="checkbox" id="test2" />
                                                <label for="test2">New process</label>
                                            </p>
                                            <p>
                                                <input type="checkbox" id="test3" />
                                                <label for="test3">Engineered new materials</label>
                                            </p>
                                            <p>
                                                <input type="checkbox" id="test4" />
                                                <label for="test4">A new way of making something</label>
                                            </p>
                                        </form>
                                        <p class="one-line two-line">Do you think it’s a good idea to get a patent?</p>
                                        <div class="row two-line text-center">
                                            <form>
                                                <div id="jba-radio">
                                                    <input type="radio" value="1" id="radio1" name="radio" />
                                                    <label class="jba-btn jba-btn-set-width jba-btn-lg jba-btn-tab" for="radio1">Yes</label>
                                                    <input type="radio" value="2" id="radio2" name="radio" />
                                                    <label class="jba-btn jba-btn-set-width jba-btn-lg jba-btn-tab" for="radio2">No</label>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
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
                    <img class="percentageArrow hidden" src="../img/progressBar/hand_arrow.png" alt="" />
                </div>
                <div class="container progressContainer">
                    <div class="row">
                        <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-flex-center">
                            <a href="../pages/0.php" class="course-button prev-button"></a>
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
                            <a href="../pages/0.php" class="jba-btn jba-btn-submit">Submit</a>
                        </div>
                        <!-- rightArrow -->
                    </div>
                </div>
            </div>
            <!-- E:Progress Bar -->
        </div>
    </div>
</div>
<?php include '../shared/footer.html' ?>

