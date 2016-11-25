//parallax

(function($) {

    $.fn.parallax = function(options) {

        let el = this;

        let parallax = {};

        let defaults = {
            ratioY: 0.01
        }

        let settings = $.extend({}, defaults, options);

        let methods = {
            init: function() {
                parallax.obj = el;

                $(this).each(function() {

                    //preset parametrs
                    settings.y0 = parseInt(parallax.obj.css('top'));
                    settings.y = settings.y0;
                    settings.scrollTop = $(window).scrollTop();
                    settings.windowY = $(window).height();
                    settings.windowX = $(window).width();


                    //responsive
                    if (settings.responsive == true) {
                        methods.responsive();
                    }


                    //scroll watching
                    $(window).scroll(methods.scroll);
                });

            },
            scroll: function(e) {
                var scrollTop = $(window).scrollTop();

                if (settings.scrollTop > scrollTop) {
                    settings.scrollTop = scrollTop;
                } else {
                    settings.y = settings.y - (settings.windowY * settings.ratioY);

                    parallax.obj.css({
                        top: settings.y
                    });

                    settings.scrollTop = scrollTop;
                }
            },
            responsive: function() {
                $(window).resize(function() {
                    settings.windowY = $(window).height();
                    settings.windowX = $(window).width();

                    parallax.obj.css('left', settings.x0);
                    parallax.obj.css('top', settings.y0);
                });
            }
        };

        methods.init();

    };

})(jQuery);
