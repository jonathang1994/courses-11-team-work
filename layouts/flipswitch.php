<?php include '../shared/header.html' ?>
        <div class="container-fluid h100">
            <div class="row header-row pop-in">
                <div class="col-md-12 col-xs-8 col-xs-offset-2 col-md-offset-0">
                    <div class="new-main-content ">
                        <h2>Your value proposition!!</h2>
                        <!-- Change Header -->
                    </div>
                </div>
            </div>
            <div class="row content-row pop-in">
                <div class="col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3  col-sm-12">
                    <div class="squiggle-container">
                        <div class="top-squiggle"><img src="https://joybusinessacademy.github.io/img/squiggle/white-top.svg" alt=""></div>
                        <div class="squiggle-content white-squiggle">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="squiggle-container flex-center">
                                        <!-- put all of your content into the squiggle content div -->
                                        <div class="row">
                                            <div class="col-md-12">
                                                <p>Think about someone you know pretty well – how would you describe them? </p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <p>Are they:</p>
                                            </div>
                                        </div>
                                        <ul style="padding-left: 0; text-align: center">
                                            <li>
                                                <div class="switch-float">
                                                    <p v-bind:class="{ 'selected': !toggles.q1 }">Male</p>
                                                </div>
                                                <div class="switch-float">
                                                    <label class="switch">
                                                        <input v-model="toggles.q1" type="checkbox">
                                                        <div class="slider round"></div>
                                                    </label>
                                                </div>
                                                <div class="switch-float">
                                                    <p v-bind:class="{ 'selected': toggles.q1 }">Female</p>
                                                </div>
                                                <div class="clearfix"></div>
                                            </li>
                                            <li>
                                                <div class="switch-float">
                                                    <p v-bind:class="{ 'selected': !toggles.q2 }">Old</p>
                                                </div>
                                                <div class="switch-float">
                                                    <label class="switch">
                                                        <input v-model="toggles.q2" type="checkbox">
                                                        <div class="slider round"></div>
                                                    </label>
                                                </div>
                                                <div class="switch-float">
                                                    <p v-bind:class="{ 'selected': toggles.q2 }">Young</p>
                                                </div>
                                                <div class="clearfix"></div>
                                            </li>
                                            <li>
                                                <div class="switch-float">
                                                    <p v-bind:class="{ 'selected': !toggles.q3 }">Serious</p>
                                                </div>
                                                <div class="switch-float">
                                                    <label class="switch">
                                                        <input v-model="toggles.q3" type="checkbox">
                                                        <div class="slider round"></div>
                                                    </label>
                                                </div>
                                                <div class="switch-float">
                                                    <p v-bind:class="{ 'selected': toggles.q3 }">Fun</p>
                                                </div>
                                                <div class="clearfix"></div>
                                            </li>
                                            <li>
                                                <div class="switch-float">
                                                    <p v-bind:class="{ 'selected': !toggles.q4 }">Wise</p>
                                                </div>
                                                <div class="switch-float">
                                                    <label class="switch">
                                                        <input v-model="toggles.q4" type="checkbox">
                                                        <div class="slider round"></div>
                                                    </label>
                                                </div>
                                                <div class="switch-float">
                                                    <p v-bind:class="{ 'selected': toggles.q4 }">Immature</p>
                                                </div>
                                                <div class="clearfix"></div>
                                            </li>
                                            <li>
                                                <div class="switch-float">
                                                    <p v-bind:class="{ 'selected': !toggles.q5 }">Calm</p>
                                                </div>
                                                <div class="switch-float">
                                                    <label class="switch">
                                                        <input v-model="toggles.q5" type="checkbox">
                                                        <div class="slider round"></div>
                                                    </label>
                                                </div>
                                                <div class="switch-float">
                                                    <p v-bind:class="{ 'selected': toggles.q5 }">Explosive</p>
                                                </div>
                                                <div class="clearfix"></div>
                                            </li>
                                        </ul>
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
    </div>
    </div>
    </div>

<!-- new vue logic goes here -->
    <script>
    new Vue({
        el: '#app',
        data: {
            toggles: {
                q1: false,
                q2: false,
                q3: false,
                q4: false,
                q5: false
            }
        },
        methods: {

        },
        ready: function() {
            console.log('vue ready');


        }

    });
    </script>

<?php include '../shared/footer.html' ?>