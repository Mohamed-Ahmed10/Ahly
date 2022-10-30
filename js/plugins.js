$(document).ready(function () {
    $(".logo").fadeIn(500).fadeOut(500).fadeIn(1000);
    $("button").click(function () {
        $("button .lock").css("display", "none");
        $("button .unlock").css("display", "block");
        $(this).css("bottom", "-36px");
        $("button p").css("right", "-17px");
        $(".father")
            .css({
                transition: "all 3s cubic-bezier(0.86, 0.48, 0, 1.07)",
                transform: "scale3d(5,5,5)",
            })
            .fadeOut(1000);
        $(".outer").slideDown(4000);
    });
});
