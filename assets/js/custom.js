/* ==============================================================
    Slider Revolution
============================================================== */
/* Mobile L + */
enquire.register("screen and (max-width: 425px)", {
    match : function() {
        /* ------------------------------------------
            1st Slide
        ------------------------------------------ */
        $("#revolution-layer-0")
            .attr("data-hoffset", "0")
            .attr("data-voffset", "0")
            .attr("data-x", "center")
            .attr("data-y", "-65")
        ; // $("revolution-layer-1")

        // Title
        $("#revolution-layer-1")
            .attr("data-hoffset", "20")
            .attr("data-voffset", "0")
            .attr("data-x", "center")
            .attr("data-y", "top")
        ; // $("revolution-layer-1")

        // Date
        $("#revolution-layer-2")
            .attr("data-hoffset", "20")
            .attr("data-voffset", "-225")
        ; // $("revolution-layer-1")

        // Verbiage
        $("#revolution-layer-3")
            .attr("data-hoffset", "20")
            .attr("data-voffset", "175")
        ; // $("revolution-layer-3")
    }
});

// 426px +
enquire.register("screen and (min-width: 426px)", {
    match : function() {
        /* ------------------------------------------
            1st Slide
        ------------------------------------------ */
        $("#revolution-layer-0")
            .attr("data-hoffset", "0")
            .attr("data-voffset", "0")
            .attr("data-x", "center")
            .attr("data-y", "140")
        ; // $("revolution-layer-1")

        // Title
        $("#revolution-layer-1")
            .attr("data-hoffset", "0")
            .attr("data-voffset", "0")
            .attr("data-x", "center")
            .attr("data-y", "200")
        ; // $("revolution-layer-1")

        // Verbiage
        $("#revolution-layer-3")
            .attr("data-hoffset", "20")
            .attr("data-voffset", "-150")
        ; // $("revolution-layer-3")

        /* ------------------------------------------
            2nd Slide
        ------------------------------------------ */
        // Logo
        $("#revolution-layer-0-2")
            .attr("data-hoffset", "0")
            .attr("data-voffset", "0")
            .attr("data-x", "center")
            .attr("data-y", "140")
        ; // $("revolution-layer-1")

        // Verbiage
        $("#revolution-layer-1-2")
            .attr("data-hoffset", "0")
            .attr("data-voffset", "100")
            .attr("data-x", "center")
            .attr("data-y", "400")
        ; // $("revolution-layer-3")
    }
});

/* ==============================================================
    Navigation Menu (navbar)
============================================================== */
jQuery('#topMain').onePageNav({
    currentClass: 'active',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: ':not(.external)',
    easing: 'easeInOutExpo'
});
