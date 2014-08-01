/*
 *JWaitIndicator 1.0 - WaitIndicator for Lazy loading
 * 
 * http://hackme.co.vu
 *
 * Copyright (c) 2014 Rajeev Ranjan
 *
 * licensed under the MIT:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 */

(function ($) {
  $.fn.WaitIndicatorStart = function (options) {

        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            display: "none",
            position: "absolute",
            zindex: "1000",
            top: "0",
            left: "0",
            height: "100%",
            width: "100%",
            backgroundColor: "rgba( 255, 255, 255, .8 )",
            waitIndicatorImage: "url('../Images/pg.gif')",
            backgroundRepeat: "no-repeat",
            backgroundPosX: "50%",
            backgroundPosY: "50%"
        }, options);

        // Initialize and start WaitIndicator
        if ($(this).attr("id") == undefined)
            $(this).attr("id", "_WaitIndicator");
        $("body").append("<div class='_WaitIndicator' WaitIndicatorAssociatedWith='" + $(this).attr("id") + "' ></div>")
        $('._WaitIndicator[WaitIndicatorAssociatedWith="' + $(this).attr("id") + '"]').css({
            display: settings.display,
            position: $(this).is("body")?"fixed":settings.position,
            "z-index": settings.zindex,
            top: $(this).is("body") ? 0 : $(this).offset().top + 15,
            left: $(this).is("body") ? 0 : $(this).offset().left + 7,
            height: $(this).is("body") ? $(this).height() : $(this).height() - 10,
            width: $(this).is("body") ? $(this).width() : $(this).width() - 10,
            "background-image": settings.waitIndicatorImage,
            "background-color": settings.backgroundColor,
            "background-position-x": settings.backgroundPosX,
            "background-position-y": settings.backgroundPosY,
            "background-repeat": settings.backgroundRepeat
        }).show();



    };
    //hide waitindicator
    $.fn.WaitIndicatorEnd = function () {
        $('._WaitIndicator[WaitIndicatorAssociatedWith="' + $(this).attr("id") + '"]').hide();
    };
    //destroy waitindicator
    $.fn.WaitIndicatorDestroy = function () {
        $('._WaitIndicator[WaitIndicatorAssociatedWith="' + $(this).attr("id") + '"]').remove();
    };
    //destroy all waitindicator
    $.fn.WaitIndicatorDestroyAll = function () {
        $('._WaitIndicator').remove();
    };
}(jQuery));

