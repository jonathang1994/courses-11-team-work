/*********************************************
  :: Website Template File
********************************************/


function AlumniApi() {
    this.message = 'There are some issues in setting user as an alumni';
    this.status = 'error';
    

    this.setAlumni = function(successCallback, failCallback) {

        $.ajax({
            url: '/api/set-as-alumni',
            type: 'get',
            dataType: 'json',
        })
        .always(function(data) {

        	this.message = data.message;
        	this.status = data.status;
        	
            if (typeof data.status != 'undefined' && data.status >= 300) failCallback(data);
            else successCallback(data);
        });
    };
}

function AssessmentApi() {

    this.total = null;

    this.save = function(data, successCallback, failCallback) {

        $.ajax({
            url: '/api/assessment',
            type: 'POST',
            dataType: 'json',
            data: data,
        })
        .always(function(data) {
            if (typeof data.status != 'undefined' && data.status >= 300) failCallback(data);
            else successCallback(data);
        });
    };





}




function AuthApi() {

    // login
    this.login = function(form, successCallback, failCallback) {
        var data = form.serializeArray();
        $.ajax({
            url: '/api/auth/login',
            type: 'POST',
            dataType: 'json',
            data: data,
        })
        .always(function(data) {
            if (typeof data.status != 'undefined' && data.status >= 300) failCallback(data);
            else successCallback(data);
        });
    };

    // send the reset password link
    this.password = function(form, successCallback, failCallback) {
        var data = form.serializeArray();
        // url for AJAX     password controller: '/api/auth/password',
        // url for standard password controller: '/password/email',
        $.ajax({
            url: '/password/email',
            type: 'POST',
            dataType: 'json',
            data: data,
        })
        .always(function(data) {
            cl(data);
            cl(data.status);
            if (typeof data.status != 'undefined' && data.status >= 300) failCallback(data);
            else successCallback(data);
        });
    };

    // reset the password form
    this.reset = function(form, successCallback, failCallback) {
        var data = form.serializeArray();
        cl(data);
        $.ajax({
            url: '/password/reset',
            type: 'POST',
            dataType: 'json',
            data: data,
        })
        .always(function(data) {
            if (typeof data.status != 'undefined' && data.status >= 300) failCallback(data);
            else successCallback(data);
        });
    };



}


function BaseApi(){

}

$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});



function ChatApi() {

    this.id = null;


    this.getMessages = function(chatId, courseId, perPage, firstId, successCallback, failCallback) {

        $.ajax({
            url: '/chat/messages/' + chatId + '/' + courseId + '/' + perPage + '/' + firstId,
            type: 'GET',
            dataType: 'json',
        })
        .always(function(data) {
            if (typeof data.status != 'undefined' && data.status >= 300) failCallback(data);
            else successCallback(data);
        });
    };

    this.getMessage = function(id, successCallback, failCallback) {

        $.ajax({
            url: '/chat/messages/' + id,
            type: 'GET',
            dataType: 'json',
        })
        .always(function(data) {
            if (typeof data.status != 'undefined' && data.status >= 300) failCallback(data);
            else successCallback(data);
        });
    };

    this.createMessage = function(data, successCallback, failCallback) {

        $.ajax({
            url: '/chat/messages',
            type: 'POST',
            dataType: 'json',
            data: data,
        })
        .always(function(data) {
            if (typeof data.status != 'undefined' && data.status >= 300) failCallback(data);
            else successCallback(data);
        });
    };

    this.createNotification = function(data, successCallback, failCallback) {

        $.ajax({
            url: '/chat/messages/notify',
            type: 'POST',
            dataType: 'json',
            data: data,
        })
        .always(function(data) {
            if (typeof data.status != 'undefined' && data.status >= 300) failCallback(data);
            else successCallback(data);
        });
    };

    this.fetch = function(chatId, courseId, successCallback, failCallback) {

        $.ajax({
            url: '/chat/messages/fetch/' + chatId + '/' + courseId,
            type: 'GET',
            dataType: 'json',
        })
        .always(function(data) {
            if (typeof data.status != 'undefined' && data.status >= 300) failCallback(data);
            else successCallback(data);
        });
    };

}



function CommunityApi() {

    this.content = '';
    this.currPage = 0;
    this.lookup = function(data, successCallback, failCallback) {
        cl('CommunityApi lookup...');
        $.ajax({
            url: '/api/community/items',
            type: 'GET',
            dataType: 'json',
            data: data,
        })
        .always(function(data) {

            this.content = data.content;
            this.currPage = data.currPage;

            if (typeof data.status != 'undefined' && data.status >= 300) failCallback(data);
            else successCallback(data);
        });
    };

}



function ConnectionApi() {
    this.message = '';
    this.response = '';
    this.status = 0;
    this.conStatus = -1;
    this.pending = 0;

    this.create = function(data, successCallback, failCallback) {

        $.ajax({
            url: '/api/connection/' + data.recipient_id + '/' + data.status,
            type: 'GET',
            dataType: 'json',
        })
        .always(function(data) {

            if (parseInt(data.status) == 1) {
                this.conStatus = parseInt(data.conStatus);
            }
            this.pending = parseInt(data.pending);
            this.status = parseInt(data.status);
            this.message = data.message;

            if (typeof data.status != 'undefined' && data.status >= 300) failCallback(data);
            else successCallback(data);
        });
    };

    this.search = function(data, successCallback, failCallback) {

        $.ajax({
            url: '/api/connection/search',
            type: 'GET',
            dataType: 'json',
            data: data,
        })
        .always(function(data) {

            this.status = data.status;
            if (data.status == 1) {
                this.response = data.response;
            } else {
                this.message = data.message;
            }

            if (typeof data.status != 'undefined' && data.status >= 300) failCallback(data);
            else successCallback(data);
        });
    };

}



function CountryApi() {

    this.getRegions = function(data, successCallback, failCallback) {

        var dataRegionSelector = data.dataRegionSelector;

        $.ajax({
            url: '/api/country/regions',
            type: 'GET',
            dataType: 'json',
            data: data
        })
        .always(function(data) {
            data.dataRegionSelector = dataRegionSelector;
            if (typeof data.status != 'undefined' && data.status >= 300) failCallback(data);
            else successCallback(data);
        });
    };


}


function CourseApi() {
    this.message = '';
    this.status = '';

    this.add = function(data, successCallback, failCallback) {
        $.ajax({
            url: '/api/' + data.type + '/add/' + data.id,
            type: 'GET',
            dataType: 'json',
        })
        .always(function(data) {

            this.status = data.status;
            this.message = data.message;

            if (typeof data.status != 'undefined' && data.status >= 300) failCallback(data);
            else successCallback(data);
        });
    };
}



function DashboardApi() {
    this.content = '';
    this.currPage = 0;
    this.lookup = function(data, successCallback, failCallback) {
        cl(data);
        $.ajax({
            url: '/api/dashboard/items',
            type: 'GET',
            dataType: 'json',
            data: data,
        })
        .always(function(data) {

            this.content = data.content;
            this.currPage = data.currPage;

            if (typeof data.status != 'undefined' && data.status >= 300) failCallback(data);
            else successCallback(data);
        });
    };

}




function ExerciseApi() {

    this.id = null;

    this.postOutputFormat = function(data, successCallback, failCallback) {
        var url = '/courses/exercises/' + data.exercise_id + '/output-format';
        // cl(url); return;
        $.ajax({
            url: url,
            type: 'POST',
            dataType: 'json',
            data: data,
        })
        .always(function(data) {
            if (typeof data.status != 'undefined' && data.status >= 300) failCallback(data);
            else successCallback(data);
        });
    };
}


function OpportunityApi() {

    this.destroy = function(data, successCallback, failCallback) {
        $.ajax({
            url: data.url,
            type: 'DELETE',
            dataType: 'json',
        })
        .always(function(data) {
            if (typeof data.status != 'undefined' && data.status >= 300) failCallback(data);
            else successCallback(data);
        });
    };

    this.filterCompanies = function(data, successCallback, failCallback) {

        $.ajax({
            url: '/api/opportunities/get-companies',
            type: 'GET',
            dataType: 'json',
            data: data,
        })
        .always(function(data) {
            if (typeof data.status != 'undefined' && data.status >= 300) failCallback(data);
            else successCallback(data);
        });
    };

    this.filterOpportunities = function(data, successCallback, failCallback) {

        $.ajax({
            url: '/api/opportunities/get-company-opportunities',
            type: 'GET',
            dataType: 'json',
            data: data,
        })
        .always(function(data) {
            if (typeof data.status != 'undefined' && data.status >= 300) failCallback(data);
            else successCallback(data);
        });
    };



    this.filterCourses = function(data, successCallback, failCallback) {

        $.ajax({
            url: '/api/opportunities/get-courses',
            type: 'GET',
            dataType: 'json',
            data: data,
        })
        .always(function(data) {
            if (typeof data.status != 'undefined' && data.status >= 300) failCallback(data);
            else successCallback(data);
        });
    };

    this.addCourse = function(data, successCallback, failCallback) {

        $.ajax({
            url: '/api/opportunities/add-course',
            type: 'GET',
            dataType: 'json',
            data: data,
        })
        .always(function(data) {
            if (typeof data.status != 'undefined' && data.status >= 300) failCallback(data);
            else successCallback(data);
        });
    };


}


function PitchApi() {

    this.id = null;



    this.destroy = function(id, successCallback, failCallback) {

        $.ajax({
            url: '/selling-yourself/pitch/' + id,
            type: 'DELETE',
            dataType: 'json',
        })
        .always(function(data) {
            if (typeof data.status != 'undefined' && data.status >= 300) failCallback(data);
            else successCallback(data);
        });
    };


    this.feedback = function(data, successCallback, failCallback) {
        var url = '/pitches/' + data.pitch_id + '/feedback';
        $.ajax({
            url: url,
            type: 'POST',
            dataType: 'json',
            data: data,
        })
        .always(function(data) {
            if (typeof data.status != 'undefined' && data.status >= 300) failCallback(data);
            else successCallback(data);
        });
    };


    this.checkFreemiumExercisesComplete = function(successCallback, failCallback) {

        $.ajax({
            url: '/selling-yourself/checkSyExercisesCompleted',
            type: 'GET'
        })
        .always(function(data) {
            if (typeof data.status != 'undefined' && data.status >= 300) failCallback(data);
            else successCallback(data);
        });
    };




}



function ProfileApi() {

    this.id = null;



    this.update = function(data, successCallback, failCallback) {

        $.ajax({
            url: '/api/profile',
            type: 'PUT',
            dataType: 'json',
            data: data
        })
        .always(function(data) {
            if (typeof data.status != 'undefined' && data.status >= 300) failCallback(data);
            else successCallback(data);
        });
    };


    this.deleteProperty = function(data, successCallback, failCallback) {

        $.ajax({
            url: '/api/profile/property',
            type: 'DELETE',
            dataType: 'json',
            data: data
        })
        .always(function(data) {
            if (typeof data.status != 'undefined' && data.status >= 300) failCallback(data);
            else successCallback(data);
        });
    };




}




function UserApi() {

    this.id = null;



    this.update = function(data, successCallback, failCallback) {

        cl('user.update');

        $.ajax({
            url: '/api/user/' + this.id,
            type: 'PUT',
            dataType: 'json',
            data: data,
        })
        .always(function(data) {
            if (typeof data.status != 'undefined' && data.status >= 300) failCallback(data);
            else successCallback(data);
        });
    };




    this.create = function(form, successCallback, failCallback) {
        var data = form.serializeArray();

        $.ajax({
            url: '/api/user',
            type: 'POST',
            dataType: 'json',
            data: data,
        })
        .always(function(data) {
            if (typeof data.status != 'undefined' && data.status >= 300) failCallback(data);
            else successCallback(data);
        });
    };


    this.delete = function(id, successCallback, failCallback) {
        $.ajax({
            url: '/api/user/' + id,
            type: 'DELETE',
        })
        .always(function(data) {
            if (typeof data.status != 'undefined' && data.status >= 300) failCallback(data);
            else successCallback(data);
        });
    };




}


$(function() {
    var spinner;

    var showSpinner = function(text) {
        spinner = $('.js-spinner');
        spinner.find('.title').text(text);
        spinner.show();
    };

    var assessment = new AssessmentApi();
    // switch
    $('.js-assessment-switch').click(function(event) {
        event.preventDefault();

        if ($(this).hasClass('js-assessment1-switch')) {
            $('.js-form-assessment1').show();
            $('.js-form-assessment2').hide();
        } else {
            $('.js-form-assessment1').hide();
            $('.js-form-assessment2').show();
        }
        $('.js-assessment-switch').removeClass('active');
        $(this).addClass('active');

        cl($(this).hasClass('js-assessment1-switch'));
    });

    var saveSuccessCallback = function(data) {
        var form = $('.js-form-assessment'),
            optimism = data.message.optimism;

        form.find('.js-form-assessment-total').val(optimism.score);
        form.find('.js-form-assessment-optimism-level').html(optimism.level);

        spinner.hide();
    };

    var saveFailCallback = function(data) {
        cl('saveFailCallback');
    };

    var formInputs = $('.js-form-assessment .js-input')
        .filter(':not(input[type=text][readonly])');

    function completeAssessment(index) {
        // post the result
        var questions = {};
        var completed = false;

        formInputs.each(function(index, element) {
            var el = $(element);

            if (el.parents('.score').length) {
                return;
            }

            var item = {},
                answer = el.val();

            item.question = el.parents('.circle-block').find('h4').text();
            item.answer = answer ? answer : 0;

            questions[index + 1] = item;
            completed = el.hasClass('valid') || el.val() > 0;
        });

        if (completed) {
            showSpinner('Computing');

            data = {assessment: index, questions: questions};
            assessment.save(data, saveSuccessCallback, saveFailCallback);
        }
    }

    $('.js-form-assessment-total').bind('mousedown', function(event) {
        event.preventDefault();
    });

    // ONLY ALLOW NUMBERS
    formInputs.keydown(function(e) {


        // Allow: backspace, delete, tab, escape, enter
        if (!e.shiftKey &&
            ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110]) !== -1 ||
                (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
                (e.keyCode >= 35 && e.keyCode <= 40))) {
            return;
        }

        // Allow: only numbers 0 - 4 and numpad 0 - 4
        if (!e.shiftKey &&
            (e.keyCode >= 48 && e.keyCode <= 52) ||
            (e.keyCode >= 96 && e.keyCode <= 100)
        ) {
            return;
        }

        e.preventDefault();
    });

    // SUBMIT THE ASSESSMENT FORM
    formInputs.keyup(function(e) {
        var val = $(this).val();

        // only allow 1 character
        if (val.length > 1) {
            $(this).val(val.charAt(0));
            return;
        }
        if (val >= 0 && val < 5) {
            var index = $(this).parents('.js-form-assessment').data('id');

            var invalidInputs = false;
            $('.js-input').each(function(index, el) {
                if ($(el).val() == '') invalidInputs = true;
            });

            $('.btn.js-form-assessment').addClass('disabled');
            if (!invalidInputs) {
                $('.btn.js-form-assessment').removeClass('disabled');
                completeAssessment(index);
            }
        }
    });

    $('.btn.js-form-assessment').click(function(event) {
        if ($(this).hasClass('disabled')) return false;
    });
});

$(function() {



    // AUTH LOGIN //

    var loginSuccessCallback = function(data) {
        $( '.bbtn.js-login' ).button( 'reset' );
        if (data.message == 'company' || data.message == 'community') {
            location.href = '/admin';
            return;
        }
        location.href = '/home';
    };

    var loginFailCallback = function(data) {
        $( '.bbtn.js-login' ).button( 'reset' );
        var error = 'Invalid email address and/or password.';
        try {
            error = JSON.parse(data.responseText).message;
        } catch (e) {}
        $('.js-auth-error').text(error).closest('.error-container').show();
    };

    $('form.js-login').validate({
        submitHandler: function(form) {
            $('.js-auth-error').text('').closest('.error-container').hide();
            var authApi = new AuthApi();
            authApi.login($(form), loginSuccessCallback, loginFailCallback);
        }
    });

    $('.btn.js-login, .bbtn.js-login').click(function(event) {
        $( this ).button( 'loading' );
        event.preventDefault();
        $('form.js-login').submit();
    });




    // PASSWORD (send reset email) //

    var passwordSuccessCallback = function(data) {
        $( '.bbtn.js-password2' ).button( 'reset' );
        $('.js-auth-error').text('').closest('.error-container').hide();
        $('form.js-password').slideUp('fast', function() {
            $('.js-password-success').slideDown();
        });
    };

    var passwordFailCallback = function(data) {
        $( '.bbtn.js-password2' ).button( 'reset' );
        var error = 'Unable to find user with that email address';
        try {
            error = JSON.parse(data.responseText).message;
            cl(JSON.parse(data.responseText).email);
            if (error.length === 0) error = JSON.parse(data.responseText).email[0];
        } catch (e) {}
        $('.js-auth-error').text(error).closest('.error-container').show();
    };

    $('form.js-password').validate({
        submitHandler: function(form) {
            var authApi = new AuthApi();
            authApi.password($(form), passwordSuccessCallback, passwordFailCallback);
        }
    });

    $('.bbtn.js-password2').click(function(event) {
        $( this ).button( 'loading' );
        event.preventDefault();
        $('form.js-password').submit();
    });





    // PASSWORD (reset) //

    var resetSuccessCallback = function(data) {
        $('form.js-reset').fadeOut('fast', function() {
            $('.js-reset-success').fadeIn();
        });
    };

    var resetFailCallback = function(data) {
        cl('resetFailCallback');
        try {
            cl(data);
            if (typeof JSON.parse(data.responseText).password !== 'undefined')
                error = JSON.parse(data.responseText).password[0];
            else error = JSON.parse(data.responseText).message;
            $('.js-auth-error').text(error).show();
        } catch (e) {
            $('.js-auth-error').text('There was an error processing your request.').show();
        }
    };

    $('form.js-reset').validate({
        submitHandler: function(form) {
            $('.js-auth-error').text('').hide();
            var authApi = new AuthApi();
            authApi.reset($(form), resetSuccessCallback, resetFailCallback);
        }
    });

    $('.btn.js-reset, .bbtn.js-reset').click(function(event) {
        event.preventDefault();
        $('form.js-reset').submit();
    });






});

$(function() {

    // checkout form
    $('form.js-billing-details').validate({
        errorPlacement: function(error, element) {
            if (element.attr('name') == 'region') {
                error.insertAfter('#regionError');
            } else {
                error.insertAfter(element);
            }
        }
    });


});

$(function() {

    // handle placing the category filters between the 2 filter buttons (accordian layout) for mobile
    // and just undernead both buttons on desktop

    if ($('.category-filters-desktop-container').length == 0) {
        return;
    }

    function renderSelect(selector) {
        var options = {
            minimumResultsForSearch: 4,
            containerCssClass: 'select2-large-grey',
            dropdownCssClass: 'select2-large-grey-dropdown'
        };

        $(selector).select2(options);
    }

    function getOpenFilters() {
        var reShowItem;
        $('.js-courses-filter-show').each(function(index, el) {
            var groupClass = $(el).data('filter-show');
            if ($(groupClass).is(':visible')) {
                reShowItem = groupClass;
            }
        });
        return reShowItem;
    }



    var categoryFilters, reShowItem;
    enquire.register('screen and (max-width: 1024px)', {
        setup: function() {
            categoryFilters = $('.category-filters-desktop-container').html();
        },
        match: function() {
            cl('move category filters into mobile position');

            reShowItem = getOpenFilters();

            $('.category-filters-desktop-container').html('');
            $('.category-filters-mobile-container').html(categoryFilters);
            renderSelect('.category-filters-mobile-container .select2');

            cl('reShowItem: ' + reShowItem);
            $(reShowItem).show();
        },
        unmatch: function() {
            cl('move category filters into desktop position');

            reShowItem = getOpenFilters();

            $('.category-filters-mobile-container').html('');
            $('.category-filters-desktop-container').html(categoryFilters);
            renderSelect('.category-filters-desktop-container .select2');

            $(reShowItem).show();

        }
    });


});


$(function() {

    //Search Courses
    var spinner;
    var showSpinner = function(text) {
        spinner = $('.js-spinner');
        spinner.find('.title').text(text);
        spinner.show();
    };

    var searchInProgress = false,
        searchButton = $('.js-course-search-btn'),
        topCategoryLevel =  $('.js-course-search-top-level-category'),
        topFocusLevel =  $('.js-course-search-top-level-focus');

    //category
    topCategoryLevel.on( 'change', function(ev) {
        searchButton.trigger('click');
        clearFilters('focus');
    });

    //focus
    topFocusLevel.on( 'change', function(ev) {
        searchButton.trigger('click');
        clearFilters('category');
    });

    //posting course search
    searchButton.click(function(ev, customArgs) {
        var sBtn = $(this);
        if (searchInProgress) {
            return false;
        }

        searchInProgress = true;
        var coursesContainer = $('.js-courses-container');
        var topcategory =  $('.js-course-search-top-level-category').val(),
            topfocus =  $('.js-course-search-top-level-focus').val(),
            keyword = $('.js-course-search-keyword').val(),
            clear = $('.js-course-search-clear').val() == '1';

        var sendData = function() {
            var data = {
                'keyword': keyword,
                'top-category': topcategory,
                'top-focus': topfocus,
                'clear': clear
            };

            if (customArgs && customArgs.payload) {
                $.extend(data, customArgs.payload);
            }

            $.ajaxSetup({
                headers: {'X-CSRF-Token': $('meta[name=_token]').attr('content')}
            });
            $.ajax({
                url: sBtn.data('url'),
                type: 'POST',
                dataType: 'json',
                data: data,
                statusCode: {
                    200: function(data) {
                        if (data) {
                            var courseListing = $('.js-course-listing');

                            var view = data.view,
                                lookupResults = data['lookup-data'];

                            courseListing.replaceWith(view);

                            if (lookupResults && customArgs.cb) {
                                customArgs.cb(lookupResults);
                            }

                            var coursesContainer = $('.js-courses-container');
                            spinner.hide();

                            coursesContainer.fadeTo('medium', 1);
                        }
                        searchInProgress = false;
                        $('.js-course-search-clear').val(0);
                    },
                    500: function(data) {
                        searchInProgress = false;
                        $('.js-course-search-clear').val(0);
                    }
                }
            });
        };

        coursesContainer.fadeTo('medium' , 0, function() {
            showSpinner('Searching');

            sendData();
        });

        return false;
    });

    $('.js-course-search-keyword').keypress(function(ev) {
        if (ev.which === 13) {
            ev.preventDefault();
            searchButton.trigger('click');
        }
    });

    //Current Course Community
    var communitySearch = function(form, pagenum, context_cb) {
        if (searchInProgress) {
            return false;
        }

        searchInProgress = true;
        showSpinner('Searching');

        var courseId = $('.js-leader-board-course_id').val();
        var url = '/courses/' + courseId + '/leaderboard';

        if (pagenum) {
            url += '?page=' +  pagenum;
        }

        var leaderboard = $('.js-course-leader-board-users');

        //        leaderboard.fadeToggle("medium", function () {
        var callback = function(data) {
                spinner.hide();

                searchInProgress = false;
                leaderboard.replaceWith(data.responseText);

                var newLeaderboard = $('.js-course-leader-board-users');
                newLeaderboard.fadeTo('medium', 1);

                if (context_cb) {
                    context_cb();
                }
            };

        courseCommunitySearch.post(form.serializeArray(), url, callback);
    };

    $('.js-course-leader-board').bind('click', function(ev) {
        var target = $(ev.target);

        if (target.hasClass('js-btn-previous') || target.hasClass('js-btn-next')) {
            var pageNum,
                paginate = $('.js-leader-board-page-num'),
                current = paginate.data('page-current'),
                last = paginate.data('page-last'),
                paginationNotifier = $('.js-course-leader-board-pagination-notifier'),
                form = $('.js-form-leaderboard-filter');

            if (target.hasClass('js-btn-next')) {
                pageNum = current + 1 > last ? last : current + 1;
            }

            if (target.hasClass('js-btn-previous')) {
                pageNum = current - 1 <= 0 ? 1 : current - 1;
            }

            if (current !== pageNum) {
                var callback = function() {
                    paginationNotifier = $('.js-course-leader-board-pagination-notifier');
                    paginationNotifier.html(pageNum + ' of ' + last);

                    paginate = $('.js-leader-board-page-num');
                    paginate.data('page-current', pageNum);
                };

                communitySearch(form, pageNum, callback);
            }

            return false;
        }
    });




    $('.js-form-leaderboard-filter').bind('submit', function(ev) {
        communitySearch($(this));
        return false;
    });

    var courseCommunitySearch = {
        post: function(formData, url, successCallback) {
            var obj = $('.js-course-leader-board-sort-by').find('option:selected'),
                data = obj.data('name');

            if (data) {
                formData.push({name: 'sort_via', 'value': data});
            }

            $.ajax({
                url: url,
                type: 'POST',
                dataType: 'json',
                data: formData,
                statusCode: {
                    200: function(data) {
                        if (data.responseText && successCallback) {
                            successCallback(data);
                        }
                    }
                }
            });
        }

    };

    $('.js-courses-filter-show').click(function(ev) {
        ev.preventDefault();

        var toggleElement = function(el) {
            var ele = $(el);

            ele.parent().toggleClass('active');

            var active = ele.parent().hasClass('active'),
                filter = ele.data('filter-show');

            $(filter).slideToggle(active);
        };

        $(this).parent().siblings().each(function(index, sibling) {
            var sib = $(sibling);

            if (sib.is('.active')) {
                toggleElement(sib.find('.js-courses-filter-show'));
            }
        });

        toggleElement(this);

        return false;
    });






    $(document).on('click', '.js-course-search-clear' , function() {
        $('.js-course-search-clear').val('1');

        var options = {
                minimumResultsForSearch: 4,
                containerCssClass: 'select2-large-grey',
                dropdownCssClass: 'select2-large-grey-dropdown'
            };

        $( '.js-course-search-keyword' ).val( '' );

        $('.js-course-search-top-level-focus').val('0')
        $('.js-course-search-top-level-category').val('0')

        $('.course-filter').val('0').trigger('change');

        searchButton.trigger('click');

    });



    // clear the other filters out (category v focus)
    // - this makes it so when a category filter is applied, the focus filters are cleared & vice versa
    function clearFilters(type) {

        var options = {
                minimumResultsForSearch: 7,
                containerCssClass: 'select2-large-grey',
                dropdownCssClass: 'select2-large-grey-dropdown'
            };

        if (type == 'focus') {
            $('.js-focus-filter .course-filter').val('0');
        }

        if (type == 'category') {
            $('.js-category-filter .course-filter').val('0');
        }
    }

    $(document).on('click', '.js-posted-material-lnk' , function() {
    	var id = $(this).data('id');
    	$('.js-posted-material-content-' + id).slideToggle();
    });

});





function isURL(value) {
    return /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(value);
}
$(function() {

    $('form.js-share-output').submit(function(event) {
        $('form.js-share-output .error').text('').hide();
        if ($('input:checkbox:checked').length === 0) {
            $('form.js-share-output .error').text('Nothing selected.').show();
            return false;
        }
    });


    // exercise complete tweak
    // handle the radio buttons on the exercise completed page - they use CSS to highlight the button.. need to sync it
    // without this fix you can have both selected if you click the green tick.

    $('.js-exercise-completed-output-checkbox input[type="checkbox"]').change(function(event) {
        var id = $(this).attr('id');
        $('.js-exercise-completed-output-checkbox input[type="checkbox"]').each(function(index, el) {
            if ($(el).attr('id') == id) {
                $(el).attr('checked', 'checked');
                $(el).next('label').css('background-image', 'url(/resources/images/check.png)');
            } else {
                $(el).removeAttr('checked');
                $(el).next('label').css('background-image', 'url(/resources/images/uncheck.png)');
            }
        });
    });




    $('.js-exercise-completed-output-checkbox h4').bind('mouseup touchend', function(event) {
        $('.js-exercise-completed-output-checkbox').find('input[type="checkbox"]').prop('checked', false);
    });
    $('.js-exercise-completed-output-checkbox input[type="checkbox"]').change(function(event) {
        if ($(this).parents('.js-exercise-completed-output-checkbox').hasClass('shown')) return;
        $('.js-exercise-completed-output-checkbox').removeClass('shown');
        $(this).parents('.js-exercise-completed-output-checkbox').addClass('shown');

        $('.js-exercise-completed-output-checkbox').find('.js-exercise-completed-option').slideUp();
        $(this).parents('.js-exercise-completed-output-checkbox').find('.js-exercise-completed-option').slideDown();
    });
    $('.js-exercise-completed-complete').click(function(event) {
        event.preventDefault();
        $('.js-exercise-completed-buttons .error, .js-exercise-completed-buttons .url-error').hide();
        var vars = formJson('form.js-exercise-completed-form');
        vars.output_format = 'pdf';
        if (typeof vars.output_format == 'undefined') {
            $('.js-exercise-completed-buttons .format-error').show();
            return;
        }
        if (vars.output_format == 'url') {
            if (!isURL(vars.output_url)) {
                $('.js-exercise-completed-output-checkbox .url-error').show();
                return;
            }
        }
        // cl('submit!');
        $('form.js-exercise-completed-form').submit();
    });
    $('.js-exercise-completed-share').click(function(event) {
        event.preventDefault();
        $('.js-exercise-completed-buttons .error, .js-exercise-completed-buttons .url-error').hide();
        var vars = formJson('form.js-exercise-completed-form');
        if (typeof vars.output_format == 'undefined') {
            $('.js-exercise-completed-buttons .format-error').show();
            return;
        }
        if (vars.output_format == 'url') {
            if (!isURL(vars.output_url)) {
                $('.js-exercise-completed-output-checkbox .url-error').show();
                return;
            }
        } else {
            // if pdf then blank out the url
            vars.output_url = '';
        }
        var ea = new ExerciseApi();
        var $this = $(this);
        ea.postOutputFormat(vars, function(data) {
            // cl(data); return;
            window.location.href = $this.attr('href');
        },function() {console.log('fail');});


    });

















});


// index
$(function() {

    var op = new OpportunityApi();

    var opportunityDeleteSuccessCallback = function(data) {
        window.location.reload();
        // $('.js-opportunity-item[data-id="' + data.id + '"]').slideUp();
    };

    var opportunityDeleteFailCallback = function(data) {
        alert('There was an error processing that request.');
    };

    $('.js-opportunities-delete').click(function(event) {
        event.preventDefault();
        if (!confirm('Are you sure you want to delete this opportunity?')) {
            return;
        }
        data = {};
        data.url = $(this).attr('href');
        op.destroy(data, opportunityDeleteSuccessCallback, opportunityDeleteFailCallback);
    });
});

// edit
$(function() {

    var op = new OpportunityApi();

    $(window).load(function() {
        // force datepicker to load correct dates
        $('.datepicker_from').val($('.datepicker_from').data('date'));
        $('.datepicker_to').val($('.datepicker_to').data('date'));
    });

});


// create/edit
$(function() {

    if ($('.js-opportunities select[name="country_id"]').length > 0) {

        // country select
        var ca = new CountryApi();

        function renderRegionSelect(selector) {
            $(selector).trigger('chosen:updated');
        }

        function fillRegionSelect(selector, values) {
            var html = '';
            var selected;
            $.each(values, function(key, value) {
                selected = '';
                if (typeof regions !== 'undefined' && ($.inArray(value, regions) != -1)) {
                    selected = ' selected="selected"';
                }
                html += '<option' + selected + '>' + value + '</option>';
            });
            $(selector).html(html);

            $(selector).closest('.input-block').toggle($(values).length != 0);
        }

        var getRegionSuccessCallback = function(data) {
            fillRegionSelect('select[name="regions[]"]', data.regions);
            renderRegionSelect('select[name="regions[]"]');
        };

        var getRegionFailCallback = function(data) {
            cl('getRegionsFailCallback');
        };

        function populateRegion() {
            var country_id = $('select[name="country_id"]').val();
            var data = {country_id: country_id};
            ca.getRegions(data, getRegionSuccessCallback, getRegionFailCallback);
        }

        function populateRegionSelect() {
            var country_id = $('select[name="country_id"]').val();
            var data = {country_id: country_id};
            ca.getRegions(data, getRegionSuccessCallback, getRegionFailCallback);
        }

        populateRegionSelect();

        $('.js-opportunities select[name="country_id"]').change(function(event) {
            populateRegionSelect();
        });
        // end country select



        $('.js-pitches-switch, .js-sy-company-pitches-cancel').click(function(event) {
            event.preventDefault();
            $('.js-sy-company-pitches').slideToggle();
            $('.js-pitches-switch').toggleClass('active');
        });



        $('.js-opportunities-description').redactor({
            buttons: ['bold', 'italic', 'lists', 'link'],
        });



        // // course selection
        $('.js-opportunities-post').click(function(event) {
            event.preventDefault();
            $('form.js-opportunities').submit();
        });


        var op = new OpportunityApi();



        function showCourseForm(course_id) {
            cl('showCourseForm');
            $('.js-opportunities-course-select-section').slideUp(function() {
                // reset the course selector / save btn
                $('.js-opportunities-course-save').addClass('disabled');
                $('.js-opportunities-course').html('');
                $('.js-opportunities-category').val($('.js-opportunities-category option:first').val());
                renderSelect('.js-opportunities-category');
                renderSelect('.js-opportunities-course');
                $('.js-opportunities-course-show-section').slideUp();
                $('.js-opportunities-course-select-section').slideDown();

                var data = {};
                if (typeof course_id !== 'undefined') {
                    data.course_id = course_id;
                }
                op.filterCourses(data, filterCoursesSuccessCallback, filterCoursesFailCallback);

                // scroll the view down to the form
                $('html, body, .main-content').animate({scrollTop: 5000});
            });
        }

        function hideCourseForm() {
            // reset the course selector / save btn
            $('.js-opportunities-course').html('');
            renderSelect('.js-opportunities-category');
            renderSelect('.js-opportunities-course');
            $('.js-opportunities-course-show-section').slideDown();
            $('.js-opportunities-course-select-section').slideUp();
        }

        $('.js-opportunities-course-add-btn').click(function(event) {
            event.preventDefault();
            $('.js-opportunities-course-select-section').data('course-id', '');
            showCourseForm();
        });

        function renderSelect(selector) {
            // var options = {
            //     minimumResultsForSearch: 7,
            //     containerCssClass: 'select2-large-grey',
            //     dropdownCssClass: 'select2-large-grey-dropdown'
            // };
            //
            // $(selector).select2(options);
        }

        var filterCoursesSuccessCallback = function(data) {

            var html = '';
            html += '<option value="">Please select</option>';
            $.each(data.courses, function(key, value) {
                var selected = '';
                if (key == data.course_id) {
                    selected = ' selected="selected"';
                }
                html += '<option value="' + key + '"' + selected + '>' + value + '</option>';
            });
            $('.js-opportunities-course').html(html);
            renderSelect('.js-opportunities-course');
        };

        var filterCoursesFailCallback = function(data) {
            cl('filterCoursesFailCallback');
        };

        $('.js-opportunities-category').change(function(event) {
            data = {};
            data.category_id = $(this).val();
            $('.js-opportunities-course').html('');
            op.filterCourses(data, filterCoursesSuccessCallback, filterCoursesFailCallback);
        });

        $('.js-opportunities-course').change(function(event) {
            $('.js-opportunities-course-save').toggleClass('disabled', $(this).val().length == 0);
        });

        $('.js-opportunities-course-cancel').click(function(event) {
            event.preventDefault();
            hideCourseForm();
        });

        var addCourseSuccessCallback = function(data) {
            // render the course into the view
            if (data.old_course_id) {
                // edited
                var course_item = $('.js-opportunities-course-item[data-course-id="' + data.old_course_id + '"]');
                course_item.replaceWith(data.view);
            } else {
                // added
                var course_item = $('.js-opportunities-course-item[data-course-id="' + data.course_id + '"]');
                if (course_item.length == 0) {
                    // don't add twice
                    $('.js-opportunities-course-items').append(data.view);
                }
            }
            hideCourseForm();
        };

        var addCourseFailCallback = function(data) {
            cl('addCourseFailCallback');
        };

        $('.js-opportunities-course-save').click(function(event) {
            event.preventDefault();
            if ($(this).hasClass('disabled')) {
                return;
            }
            data = {};
            data.course_id = $('.js-opportunities-course').val();
            data.old_course_id = $('.js-opportunities-course-select-section').data('course-id');
            op.addCourse(data, addCourseSuccessCallback, addCourseFailCallback);
        });







        function getCourseIdFromButton(el) {
            return el.parents('.js-opportunities-course-item').data('course-id');
        }


        $(document).on('click', '.js-opportunities-course-delete', function(event) {
            event.preventDefault();
            $(this).parents('.js-opportunities-course-item').slideUp(function() {
                $(this).remove();
            });
        });



        $(document).on('click', '.js-opportunities-course-edit', function(event) {
            event.preventDefault();

            var course_id = getCourseIdFromButton($(this));
            $('.js-opportunities-course-select-section').data('course-id', course_id);

            showCourseForm(course_id);

        });

    }
});

$(function() {

    var pitch = new PitchApi();

    // FEEDBACK
    function extractFeedback(form) {

        var sections = {};

        $( form ).find( '.js-feedback-question' ).each( function( index, el ) {

            section = {};
            section.title = $( el ).find( '.feedback-question' ).text();
            section.questions = [];

            var e = $( el ).find( 'input[type="radio"]:checked' );
            section.questions.push({
                type: 'radio',
                title: section.title,
                value: $( e ).val()
            });

            var e = $( el ).find( 'textarea' );
            section.questions.push({
                type: 'text',
                title: $( el ).find( '.feedback-follow-up' ).text(),
                value: $( e ).val()
            });

            sections[index] = section;

        });

        console.log( sections );

        data = {};
        data.feedback = {sections: sections};
        data.pitch_id = $(form).find('input[name="pitch_id"]').val();
        data.type = $(form).find('input[name="type"]').val();
        data._token  = $(form).find('input[name="_token"]').val();
        data.public = $(form).find('input[name="public"]').val();
        data.status = $(form).find('input[name="status"]').val();

        console.log( data );

        return data;
    }

    var feedbackSuccessCallback = function(data) {
        cl('resetSuccessCallback'); cl(data);
        location.href = '/pitches';
    };

    var feedbackFailCallback = function(data) {
        cl('resetFailCallback'); cl(data);
        $('#form_errors').text('There was an error!');
    };

    $( 'input.text-area-required' ).click( function() {
        $( this ).closest( '.js-feedback-question' ).find( 'textarea' ).addClass( 'required' );
    });
    $( 'input.text-area-not-required' ).click( function() {
        var container = $( this ).closest( '.js-feedback-question' ).find( 'textarea' );
        if ( container.data( 'required' ) != 1 )
            container.removeClass( 'required' );
    });

    $('form.js-pitch-feedback-staff').validate({
        errorPlacement: function(error, element) {
            $( element ).closest( '.form-group' ).addClass( 'has-error' );
        },
        submitHandler: function(form) {
            data = extractFeedback(form);
            pitch.feedback(data,feedbackSuccessCallback,feedbackFailCallback);
        }
    });

});

$(function() {

    $( '.modal' ).on( 'hidden.bs.modal', function(){
        $( this ).find( 'form' )[0].reset();
    });

    $('.js-create-profile-agree').change(function(event) {
        $('.btn.js-create-profile, .bbtn.js-create-profile').toggleClass('disabled', $(this).attr('checked'));
    });

    $('.js-learner-agreement-close').click(function(event) {
        event.preventDefault();
        window.close();
    });

    $('.btn-upload').click(function(event) {
        event.preventDefault();
        $('.btn-upload').addClass('disabled').text('Choose file...');
        $('.js-create-profile-image-input').click();
    });

    var fileInput = $('.js-create-profile-image-input');
    if (fileInput.length > 0) {
        $('.js-create-profile-image-input').fileupload({
            fileInput: fileInput,
            url: '/api/upload/profile-image',
            autoUpload: true,
            add: function(e, data) {
                // disable the button
                $('.btn-upload').addClass('disabled').text('Loading...');

                // clear any errors
                $('.js-create-profile-image-error').text('');
                data.submit();
            },
            success: function(data) {
                // clear any errors
                $('.js-create-profile-image-error').text('');

                // add the hidden input data
                $('.js-create-profile-image-hidden').val(data.fileName);
                $('.js-create-profile-large-image-hidden').val(data.largeFileName);

                // add the thumbnail
                $('.js-create-profile-image').prop('src', data.filePath);
            },
            error: function(data) {
                try { error = JSON.parse(data.responseText).message; } catch (e) { error = 'Upload failed'; }
                $('.js-create-profile-image-error').text(error);
            },
            complete: function(data) {
                // enable the button
                $('.btn-upload').removeClass('disabled').text('Upload New');
            }
        });
    }



    var user = new UserApi();

    var profile = new ProfileApi();


    // generic fail callback
    var failCallback = function(data) {
        cl('failCallback'); cl(data);
    };

    // FREEMIUM CREATE PROFILE MAIN FORM (top section) //

    var createProfileSuccessCallback = function(data) {
        cl('success'); cl(data);
        // if (location.href.indexOf('edit') === -1) {
        //     location.href = '/freemium/create-profile-complete';
        // } else {
        window.location.href = '/profile/edit';
        // }
    };

    var createProfileFailCallback = function(data) {
        cl('createProfileFailCallback'); cl(data);
        try { error = JSON.parse(data.responseText).message; } catch (e) {}
    };







    if ($('[name="introduction"]').length > 0) {

        cl('no jquery validate');

        function validateEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }

        // redactor therefore, no jquery validate
        $('.btn.js-create-profile, .bbtn.js-create-profile').click(function(event) {
            event.preventDefault();
            var form = $('form.js-create-profile');
            var data = formJson(form);

            delete data.password;
            delete data.password_confirmation;

            var errors = false;
            form.find('.required').each(function(index, el) {
                $('[data-name="' + $(el).attr('name') + '"]').text('');
                if ($(el).attr('name').indexOf('password') === -1 && $(el).val() == '') {
                    $('[data-name="' + $(el).attr('name') + '"]').text('This field is required.');
                    errors = true;
                }
                if ($(el).attr('name').indexOf('email') !== -1 && !validateEmail($(el).val())) {
                    $('[data-name="' + $(el).attr('name') + '"]').text('Please enter a valid email address.');
                    errors = true;
                }
            });

            cl('errors: ');
            cl(errors);

            if (errors) {
                return;
            }

            var introduction = $('[name="introduction"]').redactor('code.get');

            user.id = $(this).data('id');
            data.form_name = $(form).attr('name');

            profile.update(data, createProfileSuccessCallback, createProfileFailCallback);

        });
    }


    if ($('[name="introduction"]').length == 0) {

        $('.btn.js-create-profile, .bbtn.js-create-profile').click(function(event) {
            if ($(this).hasClass('disabled')) {
                return;
            }
            $('form.js-create-profile').submit();
        });

        // no redactor so we can use jquery validate
        $('form.js-create-profile').validate({

            submitHandler: function(form) {

                // data = formJson(form);
                data = $( form ).serializeObject();

                // // have to remove the password fields as these should not be in the actual form
                delete data.password;
                delete data.password_confirmation;

                user.id = $(this).data('id');
                data.form_name = $(form).attr('name');

                profile.update(data, createProfileSuccessCallback, createProfileFailCallback);

            }

        });
    }




    // SORT THE PROPERTIES

    function sortPropertyPreviews() {

        var propertyTypes = [
            $('.js-create-profile-employment'),
            $('.js-create-profile-qualification'),
            $('.js-create-profile-education'),
        ];

        $(propertyTypes).each(function(index, propertyGroup) {

            properties = propertyGroup.children('.preview');

            properties.sort(function(a, b) {
                var an = a.getAttribute('data-date'),
                    bn = b.getAttribute('data-date');

                if (an > bn) {
                    return -1;
                }
                if (an < bn) {
                    return 1;
                }
                return 0;
            });

            properties.detach().prependTo(propertyGroup);

        });
    }

    // sort properties onload
    sortPropertyPreviews();











    // FREEMIUM CREATE/UPDATE PROFILE -- GENERIC PROPERTY (property = assessment, education, employment)

    var createPropertySuccessCallback = function(data) {

        var propertyType = data.property.type;
        var propertyId   = data.property.id;

        $( '#modal-edit-' + propertyType ).modal( 'hide' );

        // update the preview
        $.get('/api/freemium/create-profile-preview', data.property)
        .success(function(html) {

            // look for the preview (update)
            var str = '.preview.js-create-profile-property[data-id="' + propertyId + '"][data-property-type="' + propertyType + '"]';
            var preview = $(str);

            // debugger;

            if (preview.length) {
                preview.replaceWith(html);
            } else {
                preview = $('.input-edit-area.js-create-profile-' + propertyType);//+' .additional');
                preview.append($(html));
            }

            sortPropertyPreviews();
            filterDatePickers();

        })
        .fail(function() {
            cl('createPropertySuccessCallback update fail');
        });


    };

    // EDIT BUTTON
    // GENERIC FUNCTION FOR FILLING A FORM WITH FETCHED JSON
    // this element is created on the fly so need to bind to something higher in DOM to retain binding
    $( document.body ).on('click', '.js-edit-profile-property', function(event) {
        event.preventDefault();

        var propertyType = $( this ).data( 'property-type' );
        var propertyId = $( this ).data( 'id' );

        var form = $( '.js-profile-property-form[data-property-type="' + propertyType + '"]' );
        var data = {type: propertyType, id: propertyId};

        $( '#modal-edit-' + propertyType ).modal( 'show' );

        $.getJSON('/api/profile/property', data, function(json, textStatus) {
            if (textStatus == 'success') {

                for (var property in json) {
                    if (json.hasOwnProperty(property)) {
                        form.find('input[name="' + property + '"]').val(json[property]);
                    }
                }

                // also add the id
                form.find('input[name="id"]').val( propertyId );

            }

        }).fail(function() {
            cl('Internal error! 2');
        });
    });




    // DELETE BUTTON
    // GENERIC FUNCTION FOR DELETING A PROPERTY
    // this element is created on the fly so need to bind to something higher in DOM to retain binding
    $( document.body ).on('click', '.js-delete-profile-property', function(event) {

        if ( !confirm( 'Are you sure you want to delete this?' ) ) return false;

        event.preventDefault();

        var parent = $( this ).closest( '.preview' );
        var propertyType = $( this ).data( 'propertyType' );
        var propertyId = $( this ).data( 'id' );
        var data = { type: propertyType, id: propertyId };

        var deletePropertySuccessCallback = function(data) {
            parent.slideUp();
        };

        var deletePropertyFailCallback = function(data) {
            alert('Error deleting item');
        };

        profile.deleteProperty(data, deletePropertySuccessCallback, deletePropertyFailCallback);
    });



    // ADD/CANCEL BUTTON - show/hide the form

    $('.btn-add.js-create-profile-property, .btn-transparent.js-create-profile-property').click(function(event) {
        event.preventDefault();

        // look for parent to set the propertyType
        var propertyType = $(this).data('property-type');

        if ($(this).hasClass('btn-add')) {
            if ($('.single-link').length > 0) {
                var offset = $(this).offset().top - $('.single-link').offset().top;
                // scroll mobile view
                $('html, body').animate({scrollTop: offset - 20}, 550);
                // scroll desktop view
                $('.main-content').animate({scrollTop: offset + 20}, 550);
            }
        }

        // clear the form inputs
        $('.edit.js-create-profile-property[data-property-type="' + propertyType + '"] form input[name!="type"]').val('');
        $('.btn-add.js-create-profile-property[data-property-type="' + propertyType + '"]').toggle();
        $('.edit.js-create-profile-property[data-property-type="' + propertyType + '"]').slideToggle();

    });



    // SAVE BUTTON - submit the form

    $('.js-save-profile-property').click(function(event) {
        event.preventDefault();
        var form = $( this ).closest( 'form.js-profile-property-form[data-property-type="' + $( this ).data( 'propertyType' ) + '"]' );
        // somehow the settimeout prevents an extremely fast double click from posting the form
        setTimeout(function() {
            form.submit();
        }, 50);


    });

    $('form.js-profile-property-form').each( function() {
        $( this ).validate({
            submitHandler: function(form) {
                profile.update(formJson(form), createPropertySuccessCallback, failCallback);
            }
        })
    });




































    // FREEMIUM CREATE PROFILE -- BILLING

    var updateProfileBillingSuccessCallback = function(data) {
        $( '.bbtn.js-create-profile-billing' ).button( 'reset' );

        // update the preview
        $.get('/api/freemium/create-profile-preview', {type: 'billing_address'})
        .success(function(html) {

            // Adrian wrote this, new update style. Left old functionality, not sure where it's used yet.
            if ( $( '.panel-body .js-billing_address' ).length ) {
                $( '.panel-body .js-billing_address' ).closest( '.panel-body' ).html( html );
            }

            // look for the preview (update)
            var preview = $('.js-billing_address');

            preview.replaceWith(html);

            $('section.js-create-profile').toggle();
            $('section.js-create-profile-billing').toggle();

            $('.profile-billing-area').show();


        })
        .fail(function() {
            //$('#notification').notify('Internal error 2!', null, null, 'danger');
        });

    };

    var updateProfileBillingFailCallback = function(data) {
        //$('#notification').notify('Internal error', null, null, 'danger');
    };




    var ca = new CountryApi();

    function populateRegions(country, dataRegionSelector) {
        // var country = $('select[name="country"]').val();
        var data = {country: country, dataRegionSelector: dataRegionSelector};
        ca.getRegions(data, getRegionsSuccessCallback, getRegionsFailCallback);
    }

    $(document).on('click', '.btn-add.js-create-profile-billing, .bbtn.js-create-profile-billing, .edit-swticher.js-create-profile-billing', function(event) {
        event.preventDefault();
        $('section.js-create-profile').hide();
        $('section.js-create-profile-billing').show();
        $('.js-create-profile-billing .edit').show();
        $('.profile-billing-area').hide();
        $('.btn.js-create-profile-billing, .bbtn.js-create-profile-billing').removeClass('disabled');

        countrySelect = $('.js-create-profile-billing select[name="country"]');
        var dataRegionSelector = countrySelect.data('region-selector');
        var country = countrySelect.val();

        populateRegions(country, dataRegionSelector);
    });

    function fillSelect(selector, values, selected) {
        var html = '<option value="">Select Region</option>';
        var selectedValue;
        $.each(values, function(key, value) {
            selectedValue = '';
            if (selected == value) {
                selectedValue = ' selected="selected"';
            }
            html += '<option' + selectedValue + '>' + value + '</option>';
        });

        $(selector).html(html);

        // hide region selector if there are no regions
        $(selector).closest('.input-block').toggle($(values).length != 0);
    }

    var getRegionsSuccessCallback = function(data) {
        fillSelect(data.dataRegionSelector, data.regions, data.region);
        // renderSelect(data.dataRegionSelector);
    };

    var getRegionsFailCallback = function(data) {
        cl('getRegionsFailCallback');
    };

    $(document).on('change', '.profile select[name="country"], .js-create-profile-billing select[name="country"], .js-create-profile select[name="country"]', function(event) {
        var dataRegionSelector = $(this).data('region-selector');
        var country = $(this).val();
        populateRegions(country, dataRegionSelector);
    });

    // autopopulate the regions for edit profile page view
    if ($('.js-create-profile select[name="country"]').length != 0) {
        var dataRegionSelector = $('.js-create-profile select[name="country"]').data('region-selector');

        var country = $('.js-create-profile select[name="country"]').val();
        populateRegions(country, dataRegionSelector);
    }

    if ($('.js-create-profile-billing.js-cart-billing select[name="country"]').length != 0) {
        var dataRegionSelector = $('.js-create-profile-billing.js-cart-billing select[name="country"]').data('region-selector');
        populateRegions(dataRegionSelector);
    }


    $('.js-create-profile-billing-switch').click(function(event) {
        event.preventDefault();
        // cl('js-create-profile-billing-switch');
        $('section.js-create-profile').toggle();
        $('section.js-create-profile-billing').toggle();
    });

    $(document).on('click', '.btn.js-create-profile-billing, .bbtn.js-create-profile-billing', function(event) {
        $( this ).button( 'loading' );
        event.preventDefault();
        $('form.js-create-profile-billing').submit();
    });


    $(document).on('click', '.js-create-profile-billing-create-cancel', function(event) {
        event.preventDefault();
        $('section.js-create-profile-billing').hide();
        $('section.js-create-profile').show();
        $('.profile-billing-area').show();
    });


    $(document).on('click', '.js-create-profile-billing-edit-cancel', function(event) {
        event.preventDefault();
        $('.profile-billing-area').show();
        $('section.js-create-profile-billing').hide();
    });



    $('form.js-create-profile-billing').validate({
        errorPlacement: function(error, element) {
            if (element.attr('id') == 'billing_region') {
                error.insertAfter('#billing_regionError');
            } else if (element.attr('name') == 'region') {
                error.insertAfter('#regionError');
            } else {
                error.insertAfter(element);
            }
        },
        submitHandler: function(form) {
            var billing_address = formJson(form);
            var data = {billing_address: billing_address};
            data['form_name'] = $(form).attr('name');
            profile.update(data, updateProfileBillingSuccessCallback, updateProfileBillingFailCallback);
        }
    });










    // FREEMIUM CREATE PROFILE PASSWORD FORM //

    var updatePasswordSuccessCallback = function(data) {
        cl('success'); cl(data);
        $('.js-create-profile-password-preview').toggle();
        // $('.js-create-profile-password-fields').toggle();
    };

    var updatePasswordFailCallback = function(data) {
        cl('fail'); cl(data);
    };

    $('.js-create-profile-password-switch').click(function(event) {
        event.preventDefault();
        $('.js-create-profile-password-preview').toggle();
        // $('.js-create-profile-password-fields').toggle();
        $('input[type="password"]').toggleClass('required'); // only set required if shown
        $('input[type="password"]').val('');
    });

    $('.js-create-profile-password').click(function(event) {
        event.preventDefault();

        var password = $('input[name="password"]').val();
        var password_confirmation = $('input[name="password_confirmation"]').val();
        var password_error = $('.js-password-error');

        if (password.length < 6) {
            password_error.text('Passwords must contain 6 or more characters.');
            return;
        }

        if (password != password_confirmation) {
            password_error.text('Passwords must match.');
            return;
        }

        var data = {password: password};
        user.id = $(this).data('id');
        user.update(data, updatePasswordSuccessCallback, updatePasswordFailCallback);
    });





















    // SEND ME RESULTS VIA EMAIL checkbox - used on the assessment pages only

    var updateProfileSuccessCallback = function(data) {
        cl('success'); cl(data);
    };
    var updateProfileFailCallback = function(data) {
        cl('fail'); cl(data);
    };

    $('.js-email-results').click(function(event) {
        var email_results = $(this).prop('checked') | 0;
        var data = {email_results: email_results};
        profile.id = $(this).data('id');
        cl(data);
        profile.update(data,updateProfileSuccessCallback,updateProfileFailCallback);
    });




    // SET COMPLETE = TRUE

    var completeSuccessCallback = function(data) {
        window.location.href = '/';
    };
    var completeFailCallback = function(data) {
        alert('There was an error processing your request. Please try again.'); cl(data);
    };

    var modifyUserCourse = function() {
        $.ajaxSetup({
            headers: {'X-CSRF-Token': $('meta[name=_token]').attr('content')}
        });
        $.ajax({
            url: '/api/user/course/modify-to-skip-freemium',
            type: 'POST',
            dataType: 'json',
            data: {},
            statusCode: {
                200: function(data) {
                    window.location.href = "/";
                },
                500: function(data) {
                    searchInProgress = false;
                    $('.js-course-search-clear').val(0);
                }
            }
        });

    }

    $('.js-freemium-complete').click(function(event) {
        var eleData = $( this ).data();
        event.preventDefault();
        var data = {freemium_complete: 1}
        if ( eleData.onsuccess ) {
            profile.update(
                data,
                function(data) {
                    modifyUserCourse()
                },
                completeFailCallback
            );
        } else {
            profile.update(data,completeSuccessCallback,completeFailCallback);
        }
    });








    // clause for the checkout billing form....
    if ($('.js-checkout-billing-form').length > 0) {
        countrySelect = $('.js-create-profile-billing select[name="country"]');
        var dataRegionSelector = countrySelect.data('region-selector');
        var country = countrySelect.val();
        populateRegions(country, dataRegionSelector);
    }







































    // function scrollDatepickerIntoView() {

    //     setTimeout(function() {

    //         function doScroll(element) {

    //             cl('doScroll');

    //             var pickerTop = $('.picker--opened').offset().top;
    //             var offset = $('.picker--opened').offset().top;// - $('.single-link').offset().top;
    //             var pickerHeight = $('.picker__wrap').height();

    //             // scroll desktop view
    //             var winHeight = element.height();
    //             var scrollTop = element.scrollTop();
    //             offset -= winHeight - pickerHeight;
    //             if (scrollTop > offset) {
    //                 return;
    //             }

    //             cl('doScroll');
    //             element.animate({scrollTop: offset + 40}, 200);
    //         }


    //         //screen and (max-width: 1024px)
    //         enquire.register('screen and (min-width: 768px)', {
    //             setup: function() {

    //             },
    //             match: function() {
    //                 cl('desktop');
    //                 doScroll($('.main-content'));
    //             },
    //             unmatch: function() {
    //                 cl('mobile');
    //                 doScroll($('html, body'));
    //             }
    //         });


    //     }, 100);
    // }


    function filterDatePickers() {

        var datepickerOptions = {
            selectYears: true,
            labelYearSelect: 'Pick a year from the dropdown',
            yearSelector: 20,
            formatSubmit: 'dd/mm/yyyy',
            lowestYear: (new Date).getFullYear() - 50,
            highestYear: (new Date).getFullYear(),
            onOpen: function() {
                if (phoneOrTablet()) {
                    $('body').addClass('iOS-position-fixed-hack');
                }



                if (this._hidden.defaultValue.length == 0) {
                    var date = new Date();
                    this.set('select', [date.getFullYear(), date.getMonth(), date.getDate()]);
                    return;
                }

                // set the date on open
                var selectedDate = this._hidden.defaultValue.split('/').reverse();

                // somehow it likes to add a month. Remove it.
                selectedDate[1] = selectedDate[1] - 1;
                this.set('select', selectedDate);



            },
            onClose: function() {
                if (phoneOrTablet()) {
                    $('body').removeClass('iOS-position-fixed-hack');
                }
            }

        };

        function getOptions($selector) {
            var options = datepickerOptions;
            if ($selector.data('options'))
                options = $.extend({}, datepickerOptions, $selector.data('options'));
            if (options.min && options.min == 'now')
                options.min = new Date();

            return options;
        }

        if ( $( '.datepicker_from' ).length ) {
            $('.datepicker_from').each(function(index, el) {
                var $pickerTo = $(this).parents('form').find('.datepicker_to');
                var pickerFrom = $(this).pickadate(getOptions($(this))).pickadate('picker');
                var pickerTo   = $pickerTo.pickadate(getOptions($pickerTo)).pickadate('picker');

                pickerFrom.on('set', function(event) {
                    if (event.select)
                        pickerTo.set('min', pickerFrom.get('select'));
                    else if ('clear' in event)
                        pickerTo.set('min', false);
                });

                pickerTo.on('set', function(event) {
                    if (event.select)
                        pickerFrom.set('max', pickerTo.get('select'));
                    else if ('clear' in event)
                        pickerFrom.set('max', false);
                });



                // reset the min/max (important for dynamically added pickadate objects)
                pickerFrom.clear();
                pickerTo.clear();
            });
        }
    }

    $(document).on('change', '.picker__select--year', function(event) {
        // filterDatePickers();
    });


    filterDatePickers();





    $(document).on('click', '.picker__day', function(event) {
        // cl('clicked picker__day');
    });


    $(document).on('click', '.picker__input', function() {
        // scrollDatepickerIntoView();
    });





    if ($('.redactor').length > 0) {
        $('.redactor').redactor();
    }


});



$(function() {

    if ($('.js-company-index select[name="country"]').length > 0) {

        // country select
        var ca = new CountryApi();
        var op = new OpportunityApi();


        function renderRegionSelect(selector) {
            var options = {
                minimumResultsForSearch: 7,
                containerCssClass: 'select2-small',
                dropdownCssClass: 'select2-small-dropdown'
            };

            $(selector).select2(options);
        }

        function fillRegionSelect(selector, values) {
            var html = '<option value="">Any region</option>';
            $.each(values, function(key, value) {
                html += '<option value="' + key + '">' + value + '</option>';
            });
            $(selector).html(html);
        }

        var getRegionSuccessCallback = function(data) {
            cl('getRegionSuccessCallback');
            // cl(data);
            fillRegionSelect('select[name="region"]', data.regions);
            renderRegionSelect('select[name="region"]');
        };

        var getRegionFailCallback = function(data) {
            cl('getRegionsFailCallback');
        };

        function populateRegionSelect() {
            var country_id = $('select[name="country"]').val();
            if (!country_id) {
                return;
            }
            var data = {country_id: country_id};
            ca.getRegions(data, getRegionSuccessCallback, getRegionFailCallback);
        }

        populateRegionSelect();







        var clearCompanies = function() {
            $('.js-company-items').html('');
            $('.js-company-items').data('nomore', '0');
            $('.js-company-items').data('page', '1');
            $('.js-company-items-loader').show();
        };

        var filterCompaniesSuccessCallback = function(data) {
            cl('filterCompaniesSuccessCallback');
            $('.js-company-items').append(data.view);

            $('.js-company-items').data('page', data.next_page);


            if (data.nomore) {
                $('.js-company-items').data('nomore', '1');
                $('.js-company-items-loader').hide();
            } else {
                // check if loader is still on screen
                check();
                // re-attach event handler
                $('.main-content').on('scroll', debounced);
                $(document).on('scroll', debounced);
            }
        };

        var filterCompaniesFailCallback = function(data) {
            cl('filterCompaniesFailCallback');
        };


        function filterCompanies(countryChanged) {
            cl('filterCompanies');
            var focus = $('select[name="focus"]').val();
            var country_id = $('select[name="country"]').val();
            var region_id = $('select[name="region"]').val();
            var url_prefix = $('select[name="region"]').parents('[data-url-prefix]').data('url-prefix');

            var page = $('.js-company-items').data('page');
            var per_page = $('.js-company-items').data('per-page');
            var nomore = $('.js-company-items').data('nomore');

            if (nomore == '1') {
                cl('nomore!!!!!!!!!!!!!');
                $('.js-company-items-loader').hide();
                $('.main-content').on('scroll', debounced);
                $(document).on('scroll', debounced);
                return;
            }

            var data = {
                focus: focus,
                country_id: country_id,
                region_id: region_id,
                url_prefix: url_prefix,
                page: page,
                per_page: per_page
            };
            if (typeof countryChanged !== 'undefined') {
                fillRegionSelect('select[name="region"]', []);
                populateRegionSelect();
            }
            op.filterCompanies(data, filterCompaniesSuccessCallback, filterCompaniesFailCallback);
        }



        // INITIAL PAGE LOAD
        filterCompanies();


        var debounced = $.noop;
        var element = $('.js-company-items-loader');
        var check = function() {
            var visible = element.isOnScreen();
            if (visible) {
                filterCompanies();
            } else {
                // hack for chrome to have scrolling capability after changing to a small then large resultset
                $('.main-content .small-inner-main-conent').css('height', 'initial');
                $('.main-content .small-inner-main-conent').css('height', $('.main-content .small-inner-main-conent').css('height'));
            }


        };
        // wrap it in the functor so that it's only called every 50 ms
        debounced = check.debounce(50);












































        $('.js-company-index select[name="country"]').change(function(event) {
            cl('sy-pitch-company country changed');
            clearCompanies();
            filterCompanies(true);
        });


        $('.js-company-index select[name="focus"], .js-company-index select[name="region"]').change(function(event) {
            cl('changed');
            clearCompanies();
            filterCompanies();
        });
        // end country select



    }


    $('.js-pitches-switch, .js-sy-company-pitches-cancel').click(function(event) {
        event.preventDefault();
        $('.js-sy-company-pitches').slideToggle();
        $('.js-pitches-switch').toggleClass('active');
    });



});


$(function() {
    // learner select opportunity
    $(document).on('click', '.js-disabled-opportunity', function(event) {
        event.preventDefault();
        // alert for mobile
        if (touchDevice()) {
            alert($(this).attr('title'));
        }
    });
});




$(function() {


    var pitch = new PitchApi();


    // PREPARE PITCH PAGE

    $('.app-select.js-sy-focus select').change(function(event) {
        var focus_id = $(this).val();

        // pitch filter
        $('.js-sy-pitch-focus').each(function(index, el) {
            if ($(el).data('focus') != focus_id && focus_id != 'Show all') $(el).slideUp();
            else $(el).slideDown();
        });
        // company filter
        $('.js-sy-company').each(function(index, el) {
            if ($(el).data('focus-id') != focus_id && focus_id != 'Any focus') {
                $(el).addClass('hidden-focus');
            } else {
                $(el).removeClass('hidden-focus');
            }
            // fade everything back in
            $(el).hide();
            if (!$(el).hasClass('hidden-focus') && !$(el).hasClass('hidden-country')) $(el).fadeIn();
        });
    });

    $('.app-select.js-sy-country select').change(function(event) {
        var country_id = $(this).val();
        console.log('country_id: ', country_id, $(this));
        $('.js-sy-company').each(function(index, el) {
            if ($(el).data('country-id') != country_id && country_id != 'Any country') {
                $(el).addClass('hidden-country');
            } else {
                $(el).removeClass('hidden-country');
            }
            $(el).hide();
            if (!$(el).hasClass('hidden-focus') && !$(el).hasClass('hidden-country')) $(el).fadeIn();
        });

    });






    $('.js-sy-pitch-exercises-redo').click(function(event) {
        event.preventDefault();
        $(this).toggleClass('active');
        $('.js-sy-pitch-exercises').slideToggle($(this).hasClass('active'));
    });

    var deletePitchSuccessCallback = function(data) {
        cl('deletePitchSuccessCallback'); cl(data);
        $('.js-sy-pitch').each(function(index, el) {
            if ($(el).data('id') == data.id) $(el).slideUp();
        });

    };

    var deletePitchFailCallback = function(data) {
        cl('deletePitchFailCallback'); cl(data);
    };

    $('.js-sy-pitch-delete').click(function(event) {
        event.preventDefault();
        if (!confirm('Delete the selected pitch?')) return;
        pitch.destroy($(this).data('id'), deletePitchSuccessCallback, deletePitchFailCallback);
    });






    // CREATE PITCH FORM

    $('.js-sy-pitch-download').click(function(event) {
       event.preventDefault();
       cl('download');
       var template = $('select[name="focus"]').val();
       cl(template);
       location.href = '/selling-yourself/pitch/download?template=' + template;
   });

    $('.js-sy-pitch-upload').click(function(event) {
       event.preventDefault();
       $('.js-sy-pitch-upload-file').click();
   });

    $('.js-sy-pitch-save').click(function(event) {
       event.preventDefault();
       $('form.js-sy-pitch').submit();
   });


    $('.js-sy-pitch-upload-file').change(function(event) {

        $('.js-sy-pitch-file').removeClass('errors');
        $('#js-document_file-error').text('');
        $('#document_file-error').remove();

        var reg = /\.(doc|docx|rtf|txt|pdf|ppt|pptx)$/;
        if (!reg.test($(this).val())) {
            $(this).val('');
            var msg = 'Accepted file extensions:\n.doc(/x)\n.ppt(/x)\n.rtf\n.txt\n.pdf';
            var errors = {document_file: msg};
            $('form.js-sy-pitch').validate().showErrors(errors);
            $('.js-sy-pitch-file').addClass('errors');
            return false;
        }
        var filename = $(this).val().substring($(this).val().lastIndexOf('\\') + 1);
        $('.js-sy-pitch-upload-name').text(filename).addClass('visible');

    });




    $.validator.addMethod('require_from_group', function(value, element, options) {
        var numberRequired = options[0];
        var selector = options[1];
        var fields = $(selector, element.form);
        var filled_fields = fields.filter(function() {
            return $(this).val() !== '' || $('.fake-input').text() !== '';
        });
        var empty_fields = fields.not(filled_fields);
        if (filled_fields.length < numberRequired && empty_fields[0] == element) return false;
        return true;
    });

    $.validator.addMethod('isurl',function(value, element) {
        var expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;

        return this.optional(element) || value.match( new RegExp(expression) )
    }, 'Please enter a valid URL beginning with http' );



    $.extend(jQuery.validator.messages, {
        require_from_group: 'Please either upload your document or specify a link to your uploaded material'
    });

    $('form.js-sy-pitch').validate({
        rules: {
            document_url: {
                require_from_group: [1, '.upload-group'],
                isurl: true
            },
            document_file: {
                require_from_group: [1, '.upload-group']
            }
        },

        errorPlacement: function(error, element) {

            if (element.is('input[name="document_file"]')) {
                $(error).appendTo(element.parents('.js-sy-pitch-file'));
            } else {
                error.insertAfter(element);
            }
        }
    });



    function exercisesCompleteSuccessCallback() {
        cl('exercisesCompleteSuccessCallback');
        $('.js-sy-create-pitch-btn').removeClass('disabled');
    }

    function exercisesCompleteFailCallback() {

    }

    if ($('.js-sy-create-pitch-btn').length > 0) {
        // workaround for browser/app caching issue - forces CREATE PITCH button to be enabled
        pitch.checkFreemiumExercisesComplete(exercisesCompleteSuccessCallback, exercisesCompleteFailCallback);
    }














    // js-opportunities-country
    if ($('.js-sy-opportunities select[name="country"]').length > 0) {

        // country select
        var ca = new CountryApi();
        var op = new OpportunityApi();


        function renderRegionSelect(selector) {
            var options = {
                minimumResultsForSearch: 7,
                containerCssClass: 'select2-small',
                dropdownCssClass: 'select2-small-dropdown'
            };

            $(selector).select2(options);
        }

        function fillRegionSelect(selector, values) {
            var html = '<option value="">Any region</option>';
            $.each(values, function(key, value) {
                html += '<option value="' + key + '">' + value + '</option>';
            });
            $(selector).html(html);
        }

        var getRegionSuccessCallback = function(data) {
            cl(data);
            fillRegionSelect('select[name="region"]', data.regions);
            renderRegionSelect('select[name="region"]');
        };

        var getRegionFailCallback = function(data) {
            cl('getRegionsFailCallback');
        };

        function populateRegionSelect() {
            var country_id = $('select[name="country"]').val();
            if (!country_id) {
                return;
            }
            var data = {country_id: country_id};
            ca.getRegions(data, getRegionSuccessCallback, getRegionFailCallback);
        }

        populateRegionSelect();




        var filterOpportunitiesPreprocess = function() {
            var spinner = '<div class="loading-spinner bottom-margin-30"><p>Loading</p><div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div><div class="bounce4"></div><div class="bounce5"></div></div></div>';
            $('.js-company-opportunity-items').html(spinner);
        };

        var filterOpportunitiesSuccessCallback = function(data) {
            $('.js-company-opportunity-items').html(data.view);
        };

        var filterOpportunitiesFailCallback = function(data) {
            cl('filterOpportunitiesFailCallback');
        };


        function filterOpportunities(countryChanged) {
            var company_id = $('[data-company-id]').data('company-id');
            // var focus = $('[name="focus"]').val();
            var country_id = $('select[name="country"]').val();
            var region_id = $('select[name="region"]').val();
            var url_prefix = $('select[name="region"]').parents('[data-url-prefix]').data('url-prefix');
            var pitch_id = $('.js-company-opportunity-items').data('pitch-id');
            var show_post_button = $('.js-company-opportunity-items').data('show-post-button');
            var data = {company_id: company_id, country_id: country_id, region_id: region_id, pitch_id: pitch_id, show_post_button: show_post_button};
            if (typeof countryChanged !== 'undefined') {
                fillRegionSelect('select[name="region"]', []);
                populateRegionSelect();
            }
            filterOpportunitiesPreprocess();
            op.filterOpportunities(data, filterOpportunitiesSuccessCallback, filterOpportunitiesFailCallback);
        }

        filterOpportunities();

        $('.js-sy-opportunities select[name="country"]').change(function(event) {
            filterOpportunities(true);
        });


        $('.js-sy-opportunities select[name="region"]').change(function(event) {
            filterOpportunities();
        });
        // end country select





        $(document).on('click', '.accordian__item__title.opportunities', function() {
            cl('!!!!!!!!!!');
            if ($(this).hasClass('disabled')) return; // disabled in some cases
            var item = $(this).parent();
            var content = item.find('.accordian__item__content');
            var slide = !item.hasClass('active');
            $('.accordian__item__content').addClass('active').slideUp().parent().removeClass('active');
            if (slide) content.css('max-height', 'initial').slideDown().parent().addClass('active');
            return false;
        });




    }












});

$(function() {

    var user = new UserApi();



    // FREEMIUM CREATE USER -- initial creation

    var createUserSuccessCallback = function(data) {
        location.href = '/freemium';
    };

    var createUserFailCallback = function(data) {
        try {
            error = JSON.parse(data.responseText).message;
            if (error) {
                errors = {};
                $(error).each(function(index, el) {
                    if (el.indexOf('email') >= 0) {
                        errors.email = 'Your email address must be in the format of name@domain.com';
                    }
                    if (el.indexOf('password') >= 0) {
                        errors.password = 'Passwords must contain 6 or more characters';
                    }
                });
                $('form.js-create-user').validate().showErrors(errors);
                return;
            }
        } catch (e) {}
    };

    $('form.js-create-user').validate({
        errorElement: 'span',
        errorPlacement: function ( error, element ) {
            var parent = element.closest( '.form-group' );
            parent.addClass( 'has-error' );
            if ( element[0].type == 'checkbox' ) return;
            error.addClass( 'help-block' ).insertAfter( element );
        },
        rules: {
            email: {
                required: true,
                email: true,
                remote: '/api/user/check-email',
            },
        },
        messages: {
            email: {
                required: 'We need your email address to contact you',
                email: 'Your email address must be in the format of name@domain.com',
                remote: 'That email address is taken'
            }

        },
        submitHandler: function(form) {
            user.create($(form), createUserSuccessCallback, createUserFailCallback);
        }
    });

    $('.btn.js-create-user, .bbtn.js-create-user').click(function(event) {
        event.preventDefault();
        $('form.js-create-user').submit();
    });






});



var deleteUserSuccessCallback = function(data) {
    $('.js-account-closing').fadeOut(400, function() {
        $('.js-account-closed').fadeIn();
    });

    window.setTimeout(function() {
        location.href = '/auth/logout';
    }, 20000);
};

var deleteUserFailCallback = function(data) {
    alert('Error deleting user');
};


function deleteUser(id) {
    var user = new UserApi();
    user.delete(id, deleteUserSuccessCallback, deleteUserFailCallback);
}

$(function() {


    // Disable Go button when no country has been selected
    $('.js-welcome-btn-country').click(function(event) {
        if ($('.js-welcome-select-country').val() == 'Select Country') return false;
    });



    // /what-is-jba/suitability
    // selecting a dropdown option will toggle the content area
    $('.suitability-selector').change(function(ev) {
        var optionValue = $(this).val();
        cl(optionValue);
        $('.suitability-box').removeClass('active');
        $('#' + optionValue).addClass('active');

    });

    // On select a country, show the videos -- this should also filter the videos
    var previousId;
    $('.js-welcome-select-country').change(function(ev) {
        cl('change');
        var country_id = $(this).val();

        $('.btn.js-welcome-btn-country').addClass('disabled');
        if (country_id == 'Select Country') return false;
        else $('.btn.js-welcome-btn-country').removeClass('disabled');

        if (previousId !== country_id) {
            previousId = country_id;

            $.ajax({
                url: location.href,
                type: 'POST',
                dataType: 'json',
                data: {'country_id': country_id},
                statusCode: {
                    200: function(data) {
                        if (data.responseText) {
                            $('.js-welcome-country-videos').replaceWith(data.responseText);
                            $('.inlarge').inLarge({speed: 500, autoplay: true});
                        }
                    }
                }
            });
        }

    });



    // on page load show videos for the default country:
    if ($('.welcome-select').length) {

        var previousId;
        var country_id = $('.js-welcome-select-country').val();

        if (previousId !== country_id) {
            previousId = country_id;

            $.ajax({
                url: location.href,
                type: 'POST',
                dataType: 'json',
                data: {'country_id': country_id},
                statusCode: {
                    200: function(data) {
                        if (data.responseText) {
                            $('.js-welcome-country-videos').replaceWith(data.responseText);
                            $('.inlarge').inLarge({speed: 500, autoplay: true});
                        }
                    }
                }
            });
        }

    }


});


$(function() {

    function addMobileClassToCommunityItem(item) {
        if (item.width() >= 550 && item.hasClass('mobile')) {
            item.removeClass('mobile');
        }
        if (item.width() < 550 && !item.hasClass('mobile')) {
            item.addClass('mobile');
        }
    }

    // javascript layout stuff
    function addMobileClassToCommunityElements() {
        // use enquire.js to add class of .mobile to all elements with class .community_card when they reach a certain size
        $('.js-community-list .community__card').each(function(index, el) {
            addMobileClassToCommunityItem($(el));
        });
        $('.dashlist .community__card').each(function(index, el) {
            addMobileClassToCommunityItem($(el));
        });
    }
    $(window).resize(addMobileClassToCommunityElements);

    addMobileClassToCommunityElements();







    /*************************************************************************
     *  DASHBOARD STUFF
     *************************************************************************/
    var Com = new CommunityApi();
    var spinner = '<div class="loading-spinner bottom-margin-30"><p>Loading</p><div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div><div class="bounce4"></div><div class="bounce5"></div></div></div>';
    var community = $('.js-community-content');
    var dashContainer = $('.js-community-list');

    /*************************************************************************
     *  SCROLLING EVENTS STUFF
     *************************************************************************/

    var desktopLoadMore = function() {
        var community = $('.js-community-content');

        var height = $(this).prop('scrollHeight') - $(this).innerHeight();
        var currPage = parseInt($(this).data('currpage'));
        var pages = parseInt($(this).data('pages'));
        var filter = $(this).data('filter');

        if (!$('.loading-spinner').length) {
            if ($(this).scrollTop() == height) {
                if (currPage < pages) {
                    var data = {
                        page: currPage + 1,
                        filter: filter
                    };

                    $('.js-community-content .row-1000').append(spinner);
                    Com.lookup(data, function(data) {
                        community.data('currpage', data.currPage);
                        community.data('filter', filter);
                        dashContainer.append(data.content);
                        $('.loading-spinner').remove();
                        addMobileClassToCommunityElements();
                    },
                    function(data) {
                        //fail goes here
                    });

                }
            }
        }
    };


    var ready = true;

    var mobileLoadMore = function() {
        var community = $('.js-community-content');

        var height = $(window).height();
        var currPage = parseInt(community.data('currpage'));
        var pages = parseInt(community.data('pages'));
        var filter = community.data('filter');

        if (ready && !$('.loading-spinner').length) {
            if ($(window).scrollTop() >= height) {
                if (currPage < pages) {
                    ready = false;
                    var data = {
                        page: currPage + 1,
                        filter: filter
                    };

                    $('.mobi-block-only .row-1000').append(spinner);

                    Com.lookup(data, function(data) {
                        community.data('currpage', data.currPage);
                        community.data('filter', filter);
                        dashContainer.append(data.content);
                        $('.loading-spinner').remove();
                        ready = true;
                        addMobileClassToCommunityElements();
                    },
                    function(data) {
                        ready = true;
                    });

                }
            }
        }
    };


    community.scroll(desktopLoadMore);
    $(window).scroll(mobileLoadMore);






});



$(function() {
    /*************************************************************************
     *  USER CONNECTION RELATED STUFF
     *************************************************************************/
    var Connection = new ConnectionApi();

    $('body').on('click','.connection-request', function( event ) {

        var ele = $( this );
        var recipientId = $(this).data('recipient');
        var id = $(this).data('id');
        var status = $(this).data('status');
        var spinner = '<div class="loading-spinner top-margin-30 bottom-margin-30">' +
                     '<div class="spinner"><div class="bounce1"></div>' +
                     '<div class="bounce2"></div><div class="bounce3"></div>' +
                     '<div class="bounce4"></div><div class="bounce5"></div>' +
        '</div></div>';
        var dashItem = $('.dash-item-' + id);        
        var dash = $('.dash-' + id);
        if ( $( this ).data( 'collapseItem' ) ) {
            var collapseClass = $( this ).data( 'collapseItem' );
            var collapseParent = $( this ).closest( '.' + collapseClass );
        }

        var data = {
            'recipient_id': recipientId,
            'status': status,
        };

        dashItem.empty();
        dashItem.append(spinner);
        Connection.create(data, function(data) {

            if (data.status == 1) {
                dashItem.empty();
                if (Number( data.conStatus ) == 2) {
                    dashItem.text('Connection Request sent');
                    ele.button( 'loading' );
                    // ele.addClass( 'disabled', 'disabled' );
                } else if (data.conStatus == 1) {
                    if ( collapseParent )
                        collapseParent.slideUp();
                    dashItem.text('Connected');
                    ele.button( 'loading' );
                } else if (Number( data.conStatus ) == 4) {
                    if ( collapseParent )
                        collapseParent.slideUp();
                    ele.button( 'loading' );
                    dashItem.text('Rejected');
                } else {
                    dashItem.text(data.message);
                }

                if (data.pending == 0) {
                    $('.con-notif-bubble').hide();
                } else {
                    $('.con-notif-bubble').text(data.pending);
                }

            } else {
                //alert(data.message);
            }
            dash.slideUp(400, function() {
                $('.js-pending-connection-count').text($('.js-connections-connection:visible').length);
            });

        });
    });

    /**************************************************************************
     * THIS IS A HELPER LINK FOR ADDING A CONNECTION REQUEST TO THE USER
     * JUST ADD THE CLASS TO THE <a> TAG
     **************************************************************************/
    $('.connection-request-lnk').on('click', function(e) {
        e.preventDefault();
        var link = $(this);
        var recipientId = $(this).data('recipient');
        var status = $(this).data('status');
        var conItem = $('.js-con-item-' + recipientId);
        var data = {
            'recipient_id': recipientId,
            'status': status,
        };

        $(this).hide();
        conItem.remove();
        Connection.create(data, function(data) {
            if (data.status == 1) {
                if (data.conStatus == 2) {
                    // alert('Connection Request sent');
                    link.addClass( 'disabled' ).button( 'loading' );
                } else if (data.conStatus == 1) {
                    alert(data.message);
                } else if (data.conStatus == 4) {
                    alert('Declined');
                } else {
                    alert(data.message);
                }

                if (data.pending == 0) {
                    $('.con-notif-bubble').hide();
                } else {
                    $('.con-notif-bubble').text(data.pending);
                }
            } else {
                alert(data.message);
                link.remove();
            }
        });
    });

    //grouped connections disconnect link
    $('body').on('click','.js-disconnect-link', function(e) {
        e.preventDefault();
        var link = $(this);
        var recipientId = $(this).data('recipient');
        var status = $(this).data('status');

        var data = {
            'recipient_id': recipientId,
            'status': status,
        };

        if ( !confirm( 'Are you sure you wish to disconnect with this person?') ) return;

        Connection.create(data, function(data) {
            if (data.status == 1) {
                window.location = '/connections';

            } else {
                alert('Unable to disconnect, please contact system administrator.');
            }
        });
    });

    $('.js-find-connection-btn').click(function(e) {
        e.preventDefault;
        $('select.conselect').trigger('change');
    });

    $('select.conselect').change(function() {
        $('.find-connection-list').empty();
        $('.loading-spinner').show();
        Connection.search(
                {
                    'search': $('input.consearch').val(),
                    'role': $('select.conselect').val()
                },
                function(data) {
                    $('.loading-spinner').hide();
                    if (data.status == 1) {
                        $('.find-connection-list').append(data.response);
                    }else {
                        alert(data.message);
                    }
                },
                function(data) {
                    //fail callback
                    $('.loading-spinner').hide();
                    alert(data.message);
                });
    });

    $('input.consearch').keyup(function(key) {
        if (key.keyCode == 13) {
            $('select.conselect').trigger('change');
        }
    });

    // CONNECTIONS/NEW CHAT VIEW FILTERS

    $('.js-connections-filter-role .js-btn-filter').click(function(event) {
        event.preventDefault();

        var role = $(this).data('role');

        if ($('.js-connections-filter-role .js-btn-filter.is-active').length === 1 && $(this).hasClass( 'is-active' )) {
            console.log( 'off' );
            $( this ).removeClass( 'is-active' );
            $('.js-connections-filter-role .js-btn-filter').each( function() {
                $( this ).removeClass( 'is-active' ).addClass( $( this ).data( 'active' ) );
            });
            $('.js-connections-connection').each(function(index, el) {
                $(el).removeClass('hidden-role');
            });
        } else {
            console.log( 'on' );
            $('.js-connections-filter-role .js-btn-filter').each( function() {
                $( this ).removeClass( 'is-active ' + $( this ).data( 'active' ) );
            });
            $(this).addClass( 'is-active ' + $( this ).data( 'active' ) );
            $('.js-connections-connection').each(function(index, el) {
                $(el).toggleClass('hidden-role', $(el).data('role') != role);
            });
        }


        // hide any blocks where all pitches are hidden
        $('.js-connections-letterBlock').each(function(index, el) {
            var hideBlock = $(el).find('.js-connections-connection:not(.hidden-role)').length === 0;
            $(el).toggleClass('hidden-role', hideBlock);
        });
    });

    // SEE ALL CHATS / USERS

    $('.js-see-all').click(function(event) {
        event.preventDefault();
        $(this).hide();
        $('.js-see-all-hidden').slideDown();
    });




    // $('.js-course-elipses h4').each(function(index, el) {
    //     while ($(el).outerHeight() > 30) {
    //         $(el).text(function(index, text) {
    //             return text.replace(/\W*\s(\S)*$/, '...');
    //         });
    //     }
    // });
    // $('.js-course-elipses').css('height', '40px');
    $('.js-dot-ellipsis').dotdotdot({
        // configuration goes here
    });



});



function popupSubscribePackages(url) {
    if ($('.js-enquire-popup').isOnScreen()) {
        enquire.register('screen and (min-width: 768px)', {
            match: function() {
                url = url.replace('mobile','desktop');
            }
        });
    }
    $.magnificPopup.open({
        items: {
            src: url
        },
        type: 'ajax',
        alignTop: true
    });
}


$(function() {

    /*************************************************************************
     *  DASHBOARD STUFF
     *************************************************************************/
    var Dash = new DashboardApi();
    var spinner = '<div class="loading-spinner bottom-margin-30"><p>Loading</p><div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div><div class="bounce4"></div><div class="bounce5"></div></div></div>';
    var dashboard = $('.dashboard-scroll');
    var dashContainer = $('.dashboard-scroll .row-1000 .dash__container .dashlist');

    $('select.dash-select').change(function() {

        $('.main-content').css('overflow-y', 'scroll');

        var filter = $(this).val();
        var data = {
            page: dashboard.data('currpage'),
            filter: filter
        };

        $('.dashboard-scroll .row-1000').append(spinner);
        dashContainer.empty();


        Dash.lookup(data, function(data) {
            dashboard.data('currpage', data.currPage);
            dashboard.data('filter', filter);
            dashContainer.append(data.content);
            $('.loading-spinner').remove();
        },
        function(data) {
            //fail goes here
        });
    });

    /*************************************************************************
     *  SCROLLING EVENTS STUFF
     *************************************************************************/
    dashboard.scroll(function() {
        var height = $(this).prop('scrollHeight') - $(this).innerHeight();
        var currPage = parseInt($(this).data('currpage'));
        var pages = parseInt($(this).data('pages'));
        var filter = $(this).data('filter');

        var dashboard = $(this);

        if (!$('.loading-spinner').length) {
            if ($(this).scrollTop() == height) {
                if (currPage < pages) {
                    var data = {
                        page: currPage + 1,
                        filter: filter
                    };

                    $('.dashboard-scroll .row-1000').append(spinner);
                    Dash.lookup(data, function(data) {
                        dashboard.data('currpage', data.currPage);
                        dashboard.data('filter', filter);
                        dashContainer.append(data.content);
                        $('.loading-spinner').remove();
                    },
                    function(data) {
                        //fail goes here
                    });

                }
            }
        }
    });

    $('body').on('click', '.js-article-main', function(e) {
        var id = $(this).data('id');
        $('.js-article-comment-' + id).slideToggle();
    });


});





$(function() {

    $('#auto-complete-exercise').click(function() {
        var scoData = {status: 'completed'};
        var that = $(this);

        $.ajax({
            async: false,
            url: window.location.href,
            type: 'PUT',
            data: JSON.stringify(scoData),
            contentType: 'application/json',
            dataType: 'json',
            success: function() {
                that.html('Completed!');
            }
        });
    });


});

$(function() {
    $('body').on('click', '.js-popup-link', function(e) {
        e.preventDefault();
        var link = $(this).data('mfp-src');
        var viewOnly = $(this).data('view-only');
        $.magnificPopup.open({
            items: {
                src: link + ( viewOnly ? '&viewOnly' : '' )
            },
            type: 'ajax',
            alignTop: true,
            callbacks: {
                open: function() {
                    //place lightbox vertically centered in top half of screen
                    var lightboxHeight = $('.white-popup-block').css('height');
                    var windowHeight = $(window).height();
                },
                ajaxContentAdded: function() {
                    //Ajax content is loaded and appended to DOM
                }
            },
        });
    });

    $('body').on('click', '.js-close-popup', function(e) {
        e.preventDefault();
        $.magnificPopup.close();
    });

    $('body').on('click', '.js-toggle-slide', function(e) {
        e.preventDefault();

        var type = $(this).data('type');
        var priceItem = $('.package-' + type + ' .price-item-text');
        var plan = $('.js-package-' + type + '-plan');

        if ($(this).data('display') == 0) {
            priceItem.hide();
            $(this).data('display', 1);
        } else {
            priceItem.show();
            $(this).data('display', 0);
        }
        plan.slideToggle();
        $('.js-alumni-button').hide();
    });

    $('body').on('click', '.js-toggle-mobile-slide-package', function(e) {
        e.preventDefault();
        var type = $(this).data('type');
        var plan = $('.js-info-' + type);

        plan.slideToggle('400', function() {
            if ($(this).is(':hidden')) {
                $('.js-' + type + '-title').css('background-image', 'url(/resources/images/accordian-open-white.png)');
            } else {
                $('.js-' + type + '-title').css('background-image', 'url(/resources/images/accordian-close-white.png)');
            }
        });
    });

    $('body').on('click', '.js-plan-item-lnk', function(e) {
        $( '.js-plan-item-lnk' ).each( function() {
            $( this ).button( 'reset' );
        });
        $( this ).button( 'selected' );
        var cartButton = $('.js-add-cart-item');
        var plan = $(this);
        $('.js-plan-item-lnk').removeClass('selected');
        plan.addClass('selected');

        $('.js-do-it-later-btn').hide();
        $('.js-checkout-button').show();

        if (cartButton.length > 0) {
            cartButton.data('id', parseInt(plan.data('id')));
            cartButton.data('title', plan.data('title'));
            cartButton.data('type', plan.data('type'));
            cartButton.data('discount', parseFloat(plan.data('discount')));
            cartButton.data('months', parseInt(plan.data('months')));
            cartButton.data('istrial', parseInt(plan.data('istrial')));
            cartButton.data('qty', 1);
            cartButton.data('price', parseFloat(plan.data('price')));
            cartButton.data('redirect',1);
            cartButton.data('description', plan.data('description'));
            cartButton.data('credits', parseInt(plan.data('credits')));
        } else {
            alert('Unable to add item to cart');
        }
    });

    $('.js-hide-subscribe-info').click(function(e) {
        e.preventDefault();
        $('.js-help-link').fadeIn(300);
        $('.js-subscription-display').slideUp(400);
    });

    $('body').on('click', '.js-help-link', function(e) {
        e.preventDefault();
        // $('.js-help-link').fadeOut(300);
        $('.js-subscription-display').slideDown(400);
    });

    // hide the Our Pricing link if the plans are already on display
    if ($('.js-help-link:visible').length > 0 && $('.js-hide-subscribe-info:visible').length > 0) {
        $('.js-help-link').hide();
    }

    $('body').on('click', '.js-add-course', function(e) {
        e.preventDefault();

        var button = $(this);
        var type = button.data('type');
        var id = parseInt(button.data('id'));
        var url = button.data('url');
        var title = button.data('title');
        var course = new CourseApi();

        button.hide();
        course.add(
        {'type': type, 'id': id},
                function(data) {

                    var txtHeader = '';
                    var txtMessage = '';

                    if (data.status == 'success') {
                        var bundleButton = $('.js-bundle-button-relate .js-popup-link');

                        $.magnificPopup.close();

                        txtHeader = 'Success';
                        $('.js-course-item-' + id).slideUp();

                        if (type == 'bundle') {
                            $('.js-bundle-course').remove();
                            $('.js-bundle-course-item').remove();
                        } else {
                            $('.js-course-item-btn-' + id).parent().remove();
                        }

                        if ($('.js-bundle-course-item').length == 0) {
                            $('.js-bundle-course-item-' + id).remove();
                            $('.js-main-bundle').remove();
                        }
                    } else {
                        alert(data.message);
                    }
                },
                function(data) {
                    alert('An unexpected error occurred.');
                }
        );
    });

    $('body').on('click', '.js-alumni-select', function(e) {
        e.preventDefault();

        $('.js-package-basic-plan').slideUp();
        $('.js-package-all-you-can-eat-plan').slideUp();

        //      $.magnificPopup.close();
        $('.popup-btn-items').hide();
        $('.js-plan-item-lnk').removeClass('selected');

        $('.js-alumni-button').show();
    });

    $('body').on('click', '.js-alumni-checkout', function(e) {
        var alumni = new AlumniApi();

        alumni.setAlumni(
                function(data) {
                    $.magnificPopup.close();
                    alert(data.message);
                    location.href = '/';
                }
                , function(data) {
                    alert('An unexpected error occurred.');
                });
    });

});



$(function() {


    /*************************************************************************
     *  VIEWING OTHER USER PROFILE STUFF
     *************************************************************************/

    $('body').on('click','.posted-material', function() {
        var id = $(this).data('id');
        var materials = $('.material-item-' + id);

        if (materials.is(':visible')) {
            materials.slideUp();
            $(this).text('Posted Material');
        } else {
            materials.slideDown();
            $(this).text('Hide');
        }
    });

    $('a.type-trigger').click(function(e) {
        e.preventDefault();
        var type = $(this).data('type');

        $('.course-type-' + type).show();
        $(this).hide();
    });



});



$(function() {


    $('.app-select.js-wij-country select').change(function(event) {
        var country_id = $(this).val();
        $('.js-wij-company').each(function(index, el) {
            if ($(el).data('country-id') != country_id && country_id != 'Any country') {
                $(el).addClass('hidden-country');
            } else {
                $(el).removeClass('hidden-country');
            }
            $(el).hide();
            if (!$(el).hasClass('hidden-focus') && !$(el).hasClass('hidden-country')) $(el).fadeIn();
        });

    });

});

function cl(obj) {}

function formJson(form) {
    var formdata = $(form).serializeArray();
    var data = {};
    $(formdata).each(function(index, obj) {
        data[obj.name] = obj.value;
    });
    return data;
}

function phoneOrTablet() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function touchDevice() {
    return 'ontouchstart' in window        // works on most browsers
        || navigator.maxTouchPoints;       // works on IE10/11 and Surface
};





$(function() {

    // disabled button
    $('.btn').click(function(event) {
        if ($(this).hasClass('disabled')) return false;
    });

    // select2 plugin x 4
    $('select.select2.small').select2({
        minimumResultsForSearch: 7,
        containerCssClass: 'select2-small',
        dropdownCssClass: 'select2-small-dropdown'
    });

    $('select.select2.large.white').select2({
        minimumResultsForSearch: 7,
        containerCssClass: 'select2-large-white',
        dropdownCssClass: 'select2-large-white-dropdown'
    });

    $('select.select2.large.grey').select2({
        minimumResultsForSearch: 7,
        containerCssClass: 'select2-large-grey',
        dropdownCssClass: 'select2-large-grey-dropdown'
    });

    $('select.select2.large.grey-smalltext').select2({
        minimumResultsForSearch: 7,
        containerCssClass: 'select2-large-grey',
        dropdownCssClass: 'select2-large-grey-dropdown-smalltext'
    });



    //Modal for showing video
    $('.play').click(function(ev) {
        var img = $(this).siblings('.inlarge');
        $(img).trigger('click');
    });

    $('.inlarge').inLarge({
        speed: 500,
        autoplay: true
    });




    // global back button (temp solution, all back buttons should be set explicitly even if they're dynamic)
    // ** this should not be used but is handy for now.
    $('.js-btn-back').click(function(event) {
        // event.preventDefault();
        // window.history.back();
    });


    $('.js-profile-trigger').click(function(event) {
        event.preventDefault();
        // hide menu after a few seconds
        $(this).parent().find('ul').fadeToggle('fast', function() {
            setTimeout('$(\'.js-profile-trigger\').parent().find(\'ul\').fadeOut(\'fast\');', '4000');
        });
    });


    // BUG HERE!! - MAIN CONTENT NOT ANIMATING
    $('.js-slidemenu-trigger').click(function(event) {
        event.preventDefault();
        $('body').toggleClass('animate');
        $('.js-slidemenu').toggleClass('active');
    });

    $('.js-slidemenu-trigger').click(function(event) {
        $('.mobi-banner .fixed-content').toggleClass('active');
    });


    // Session flash message close button
    $('.button.close.session').click(function(event) {
        event.preventDefault();
        $(this).parent().remove();
    });


    //continue button in-accessible until exercises completed
    $('#self-awareness-continue').click(function() {
        var exercises = $(this).parent().siblings('.freemium');

        if (exercises.children('.incomplete').length) {
            return false;
        }
    });


    // Accordian
    $('.accordian__item__title').click(function() {
        if ($(this).hasClass('disabled')) return; // disabled in some cases
        var item = $(this).parent();
        var content = item.find('.accordian__item__content');
        var slide = !item.hasClass('active');
        $('.accordian__item__content').addClass('active').slideUp().parent().removeClass('active');
        if (slide) content.css('max-height', 'initial').slideDown().parent().addClass('active');
        return false;
    });


    // toggle content
    $('.toggle-content').click(function(event) {
        event.preventDefault();
        var clicked = $(this);
        $(this).parents('.toggle-content-block').find('.toggle-content-block-text div:not(.show-content)').slideToggle($(this).text() == 'Minimise', function() {
            clicked.parent('.toggle-content-triggers').find('.min-icon').addClass('active');
            clicked.removeClass('active');
        });
    });


    // General stuff... could be filed somewhere
    $('button.comment-link').click(function(e) {
        e.preventDefault();
        var pos = $('.js-your-input-comment').offset().top + 50;
        $('html, body').animate({scrollTop: $(document).height()}, 50);
        $('.js-your-input-comment').focus();
    });

    $('.close-message-bar').click(function() {
        $(this).parent().fadeOut(500);
    });

    $('button.btn-selection').click(function() {
        window.location = $(this).data('href');
    });

    // see all link on sidebar of chat dash & course chat pages
    $('.js-chat-unconnected-users-see-all').click(function(event) {
        event.preventDefault();
        $(this).hide();
        $('.js-chat-unconnected-users-see-all-hidden').slideDown( function() {
            $( this ).css( 'display', 'block' );
        });
    });


});

// cart API
// handles ajax calls

function Cart(){
    var _this = this;
    
    this.count = 0;
    this.subtotal = 0;
    this.discount = 0;
    this.total = 0;
    this.gst = 0;
    this.donation = 0;
    this.discount = 0;
    //this.status = 0;
        
    this.price = function(price) {
        return Number(price).toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    };
        
    this.updateQty = function (data, callback) {
    	$.ajax({
            type: 'POST',
            url: '/api/cart/add',
            data: data,
            success: function(data) {   
            	if ( data.success == 1 ) {                    
                    _this.count    = data.cart.count;
                    _this.subtotal 	= data.cart.subtotal;
                    _this.discount 	= data.cart.discount;
                    _this.gst    	= data.cart.gst;                    
                    _this.total    	= data.cart.total;
                    _this.donation 	= data.cart.donation;
                } else {
                    alert(data.message);
                }
                if (typeof(callback) != 'undefined') callback();
            }
        });
    };
    
    this.removeItem = function (data , callback) {    	
    	$.ajax({
    		type: 'GET',
    		url: '/api/cart/remove/' + data.key,
    		success: function(data) {    			
    			if (data.success==1) {
    				_this.count		= data.cart.count;
                    _this.subtotal 	= data.cart.subtotal;
                    _this.gst    	= data.cart.gst;    
                    _this.total    	= data.cart.total;
                    _this.donation  = data.cart.donation;
    			} else {
    				alert('Unable to remove item on the cart');
    			}
    			if (typeof(callback) != 'undefined') callback();
    		}
    	});
	};
	
	this.addDonation = function (data, callback) {
		$.ajax({
            type: 'POST',
            url: '/api/cart/add/donation',
            data: data,
            success: function(data) {   
            	if ( data.success == 1 ) {                    
                    _this.count    = data.cart.count;
                    _this.subtotal 	= data.cart.subtotal;                    
                    _this.gst    	= data.cart.gst;                    
                    _this.total    	= data.cart.total;
                    _this.donation 	= data.cart.donation;
                } else {
                    alert(data.message);
                }
                if (typeof(callback) != 'undefined') callback();
            }
        });
	};
    
};
    
$(function() {
    var cart = new Cart();
    /**
     * Add to Cart Event
     * this triggers the add to cart and stores it into session
     * @param title - (string) the title of the product
     * @param productId - (integer) the product id
     * @param variantStr - (string) the variant ids
     * @param price - (decimal) the price of the product
     * @param qty - (integer) the quantity of products purchased
     * @param token - (string) the CSRF token for security
     */
    $('body').on('click', '.add-cart-item, .js-add-cart-item', function(e) {
        var btn = $(this);
        e.preventDefault();
        cl(parseInt($(this).data('istrial')));
        var data = {
            '_token': $('input[name="_token"]').val(),
            'id': $(this).data('id'),
            'title': $(this).data('title'),
            'istrial': parseInt($(this).data('istrial')),
            'description': $(this).data('description'),
            'type': $(this).data('type'),
            'qty': parseInt($(this).data('qty')),
            'discount': parseFloat($(this).data('discount')),
            'months': parseInt($(this).data('months')),
            'credits': parseInt($(this).data('credits')),
            'price': parseFloat($(this).data('price'))
        };
        
        cart.updateQty(data, function() {
            btn.remove();            
            if (btn.data('redirect')) {
            	window.location = '/cart';
            }
        });
        
        return false;
    });


    $('.donate-select').on('change', function(e) {
        var value = $(this).val();
        var qty = 1;

        var data = {
            '_token': $('input[name="_token"]').val(),
            'id': 0,
            'title': $.trim($('.donate-select option[value="' + value + '"]').text()),
            'qty': qty,
            'type': 'donation',
            'price': value
        };

        $('.donate-value').text('$' + $(this).val());
        cart.addDonation(data, function() {
            $('.totalcost span').text('$' + cart.price(cart.total));
        });

    });

    /**
     * Cart Item Delete event
     * deletes the cart item
     */
    $('.cart-item-remove').on('click', function(e) {
        var key = $(this).data('key');
        var data = {'key': key};

        e.preventDefault();
        cart.removeItem(data, function() {
            $('.totalcost').empty().append('Total <span>$' + cart.price(cart.total) + '</span>');
            $('.header-cart-count').text(cart.count);
            $('.line-' + key).remove();

            if (parseInt(cart.count) == 0) {
            	$('.header-cart-count').hide();
            	window.location = '/course-selection';
            }
        });
    });

    function parsePrice(value) {
        return value;
    }
    
});

$(function () {

    if ( document.querySelector('meta[name="user-id"]') ) {
        var user_id = document.querySelector('meta[name="user-id"]').getAttribute('value')
    }

    // Initialize Bootstrap Tooltips
    $( '[data-toggle="tooltip"]' ).tooltip();

    // Toggles sidebar menu - only needed for mobile
    $( "#menu-toggle" ).click( function( e ) {
        e.preventDefault();
        $( "#wrapper" ).toggleClass( "toggled" );
    });

    // Set sidebar menu height to allow scroll
    $( ".menu-bar" ).height( $( window ).height() - 62 );

    $( '.dismissable-trigger' ).bind( 'click', function() {
        var parent = $( this ).closest( '.dismissable' ).slideUp();
        $.ajax( '/api/v2/users/' + user_id, {
            headers: {
                'X-CSRF-TOKEN': csrf_token,
                'Cookie': xrsf_token
            },
            method: 'PUT',
            data: {
                attributes: [{
                    'key': parent.data( 'dismissableKey' ),
                    'value': 1
                    }
                ]},
            done: function( response ) {
                console.log( response );
            }
        })
    });

    $( '.datepicker' ).each( function() {
        // Defaults
        var opts = {
            dateFormat: 'yy-mm-dd'
        }

        // The add options using various data attributes
        if ( $( this ).data( 'format' ) )
            opts.dateFormat = $( this ).data( 'format' );

        // Initialize
        $( this ).datepicker( opts );

        if ( $( this ).data( 'defaultDate' ) )
            $( this ).datepicker( 'setDate', new Date().getDay + $( this ).data( 'defaultDate' ) );

        if ( $( this ).data( 'setDate' ) )
            $( this ).datepicker( 'setDate', $( this ).data( 'setDate' ) );


    });
    
});
