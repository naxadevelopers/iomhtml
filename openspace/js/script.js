(function ($) {
    "use strict";
    $(document).ready(function () {


        setTimeout(function () {
            $('.openSpace-popup').fadeIn(150);
        }, 250);
        $('.openSpace-popup .popup-close').on('click', function () {
            $(this).closest('.openSpace-popup').fadeOut(100);
        })
        var footerHeight = $('.site-footer').height();
        $('body').css('margin-bottom', footerHeight + 100);
        function toggle_button() {
            $('.headRight .toggle-button').on('click', function () {
                $(this).toggleClass('active');
                $('body').toggleClass('Is-toggle');

            });
        }
        toggle_button();


        var $winwidth = $(window).width();
        function mobile_menu() {
            if ($winwidth <= 1200) {
                $('.menu  li.menu-item-has-children').prepend('<span class="fa fa-angle-down"></span>');

                $('.menu li.menu-item-has-children span.fa-angle-down').on('click', function (e) {
                    e.preventDefault();
                    $(this).siblings('.menu li.menu-item-has-children ul').slideToggle(300);
                });
            }
        }
        mobile_menu();

        var WH = $(window).width();
        if (WH <= 768) {
            $('.doctor-profile .card').css({ 'min-height': "auto" });
            $(window).bind('resize', function () {
                $('.doctor-profile .card').css({ 'min-height': "auto" });
            });
        }
        /*====================================
        // hero carousel
        ======================================*/
        var winH = $(window).innerHeight();
        var HeaderHeight = $('.site_header').height();
        var pageHeight = winH - HeaderHeight;
        $('.hero_content, .hero_item figure,.video, .section').css({ 'min-height': pageHeight });
        $(window).bind('resize', function () {
            $('.hero_content, .hero_item figure,.video, .section').css({ 'min-height': pageHeight });
        });

        // DATA BACKGROUND IMAGE
        var pageSection = $(".bg-image");
        pageSection.each(function () {
            if ($(this).attr("data-background")) {
                $(this).css("background-image", "url(" + $(this).data("background") + ")");
            }
        });


        //tooltip
        $('[data-toggle="tooltip"]').tooltip();

        function productSlider() {
            var $status = $('.paging_count');
            var $slickElement = $('.hero_slider');

            $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
                //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
                var i = (currentSlide ? currentSlide : 0) + 1;
                $status.text(i + '/' + slick.slideCount);
            });

            $slickElement.slick({
                // slide: 'img',
                autoplay: true,
                dots: true,
                infinite: true,
                speed: 4000,
                fade: false,
                cssEase: 'linear',
            });
        }
        productSlider();

        $('.tab-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            padding: 30,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });


        AOS.init({
            disable: "mobile",
            // once: true,
            duration: 600
        });
        //nice select
        // $('.wide').niceSelect();
        $('.wide').selectpicker();

        $('.general-info a').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
        // $('a[data-toggle="tab"]').on('shown.bs.tab', function () {
        //     $('.tab-slider').css("width", "100%");
        // });

        $('a[data-toggle="tab"]').on("shown.bs.tab", function () {
            $(".slick-slider").slick("setPosition");
            $('.tab-slider').css("width", "100%");
        });

        //Click event to scroll to top
        $('.scroll-up').on('click', function () {
            $('html, body').animate({ scrollTop: 0 }, 900);
            return false;
        });

        // $(".datepicker").datepicker();


        $('.sidebar-header .collaps-icon').on('click', function () {
            $('.details-wrapper').addClass('hide');
        });
        $('.details-wrapper .expand-icon').on('click', function () {
            $('.details-wrapper').removeClass('hide');
        });
        $('.right_sidebar .sidebar_toggle ,.close-popup').on('click', function () {
            $(this).toggleClass('rotated');
            $(this).closest('.right_sidebar').find('.sidebar_wrapper').toggle(300);
        });



        $(".map_sidebar .openSpace_list ul").slimscroll({
            height: "100vh - 600px",
            color: "#8c909a",
            position: "right",
            size: "4px",
            alwaysVisible: !1,
            borderRadius: "3px",
            railBorderRadius: "0"
        });
        $(".right_sidebar .tab_wrapper .tab-content").slimscroll({
            height: "100vh - 60px",
            color: "#8c909a",
            position: "right",
            size: "4px",
            alwaysVisible: !1,
            borderRadius: "3px",
            railBorderRadius: "0"
        });
        // side panel toggle and tab report page
        $('.tabbed >span ').click(function () {
            $(this).closest('.right_sidebar').find('.sidebar_wrapper').css('display', 'block');

            var tab_id = $(this).attr('data-tab');

            $('.tabbed > span').removeClass('current');
            $('.tab-content').removeClass('current');

            $(this).addClass('current');
            $("#" + tab_id).addClass('current');
        })
        $(".openSpace_list ul li a >h5").click(function () {
            $('.right_sidebar .sidebar_wrapper').css('display', 'block');
            $('.top43').css('display', 'flex');
            $(".general-info").removeClass("current");
            $(".filter .general-info:nth-of-type(2)").addClass("current");

        })



        //dateform picker
        var bindDatePicker = function () {
            $(".date").datetimepicker({
                format: 'YYYY-MM-DD',
                icons: {
                    time: "fa fa-clock-o",
                    date: "fa fa-calendar",
                    up: "fa fa-arrow-up",
                    down: "fa fa-arrow-down"
                }
            }).find('input:first').on("blur", function () {
                // check if the date is correct. We can accept dd-mm-yyyy and yyyy-mm-dd.
                // update the format if it's yyyy-mm-dd
                var date = parseDate($(this).val());

                if (!isValidDate(date)) {
                    //create date based on momentjs (we have that)
                    date = moment().format('YYYY-MM-DD');
                }

                $(this).val(date);
            });
        }

        var isValidDate = function (value, format) {
            format = format || false;
            // lets parse the date to the best of our knowledge
            if (format) {
                value = parseDate(value);
            }

            var timestamp = Date.parse(value);

            return isNaN(timestamp) == false;
        }

        var parseDate = function (value) {
            var m = value.match(/^(\d{1,2})(\/|-)?(\d{1,2})(\/|-)?(\d{4})$/);
            if (m)
                value = m[5] + '-' + ("00" + m[3]).slice(-2) + '-' + ("00" + m[1]).slice(-2);

            return value;
        }

        bindDatePicker();






    });
})(jQuery);
