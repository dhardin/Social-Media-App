$(document).bind("mobileinit", function () {
    $.mobile.ajaxEnabled = false;
    $.mobile.linkBindingEnabled = false;
    $.mobile.hashListeningEnabled = false;
    $.mobile.pushStateEnabled = false;

    $.extend($.mobile, {
        slideText: "slide",
        slideUpText: "slideup",
        defaultPageTransition: "slideup",
        defaultDialogTransition: "slideup"
    });

    $('div[data-role="page"]')
        .on('pagehide', function (event, ui) {
            $(event.currentTarget).remove();
        });
});