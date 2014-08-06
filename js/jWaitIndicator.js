/*
 *jWaitIndicator 1.0 - WaitIndicator for Lazy loading
 * 
 * http://hackme.co.vu
 *
 * Copyright (c) 2014 Rajeev Ranjan
 *
 * licensed under the MIT:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 */
(function ($, window, document, undefined) {
    // Initialize waitindicatorcounter
    var waitindicatorcounter = 0;
    $.fn.jWaitIndicatorStart = function (options) {

        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            display: "none",
            position: "absolute",
            zindex: "99999999",
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

        this.each(function (e) {
            var eID = $(this);
            //If ID is undefined generate new one
            if (eID.attr("id") == undefined)
                eID.attr("id", "_WaitIndicator" + waitindicatorcounter);
            //Dont create if already present
            if ($('._WaitIndicator[WaitIndicatorAssociatedWith="' + $(this).attr("id") + '"]').length == 0)
                $("body").append("<div class='_WaitIndicator' WaitIndicatorAssociatedWith='" + $(this).attr("id") + "' ></div>");
            SetWaitIndicatorPos(eID);
            //Resdesign WaitIndicator
            $(window).resize(function () {
                SetWaitIndicatorPos(eID);
            });
            waitindicatorcounter++;
        });

        function SetWaitIndicatorPos(eID) {
            $('._WaitIndicator[WaitIndicatorAssociatedWith="' + eID.attr("id") + '"]').css({
                display: settings.display,
                position: eID.is("body") ? "fixed" : settings.position,
                "z-index": settings.zindex,
                top: eID.is("body") ? 0 : eID.offset().top + 15,
                left: eID.is("body") ? 0 : eID.offset().left + 7,
                height: eID.is("body") ? "100%" : eID.height() - 10,
                width: eID.is("body") ? "100%" : eID.width() - 10,
                "background-image": settings.waitIndicatorImage,
                "background-color": settings.backgroundColor,
                "background-position-x": settings.backgroundPosX,
                "background-position-y": settings.backgroundPosY,
                "background-repeat": settings.backgroundRepeat
            }).show();
        }
    };
    //hide waitindicator
    $.fn.jWaitIndicatorEnd = function () {
        this.each(function (e) {
            $('._WaitIndicator[WaitIndicatorAssociatedWith="' + $(this).attr("id") + '"]').hide();
        });
    };
    //destroy waitindicator
    $.fn.jWaitIndicatorDestroy = function () {
        this.each(function (e) {
            $('._WaitIndicator[WaitIndicatorAssociatedWith="' + $(this).attr("id") + '"]').remove();
        });
    };
    //destroy all waitindicator
    $.fn.jWaitIndicatorDestroyAll = function () {
        $('._WaitIndicator').remove();
    };
}(jQuery, window, document));

