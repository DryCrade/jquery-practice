$(document).ready(function(){
    $('.accordion-content').hide();
    $('#accordion-button-1').on('click', () => {
        $('#accordion-content-1').toggle();
        $('#accordion-content-2').hide();
        $('#accordion-content-3').hide();
        $('#accordion-content-4').hide();
        $('#accordion-content-5').hide();
        $('#down1').toggleClass('rotate');
        $('#down2').removeClass('rotate');
        $('#down3').removeClass('rotate');
        $('#down4').removeClass('rotate');
        $('#down5').removeClass('rotate');
    })
    $('#accordion-button-2').on('click', () => {
        $('#accordion-content-1').hide();
        $('#accordion-content-2').toggle();
        $('#accordion-content-3').hide();
        $('#accordion-content-4').hide();
        $('#accordion-content-5').hide();
        $('#down1').removeClass('rotate');
        $('#down2').toggleClass('rotate');
        $('#down3').removeClass('rotate');
        $('#down4').removeClass('rotate');
        $('#down5').removeClass('rotate');
    })
    $('#accordion-button-3').on('click', () => {
        $('#accordion-content-1').hide();
        $('#accordion-content-2').hide();
        $('#accordion-content-3').toggle();
        $('#accordion-content-4').hide();
        $('#accordion-content-5').hide();
        $('#down1').removeClass('rotate');
        $('#down2').removeClass('rotate');
        $('#down3').toggleClass('rotate');
        $('#down4').removeClass('rotate');
        $('#down5').removeClass('rotate');
    })
    $('#accordion-button-4').on('click', () => {
        $('#accordion-content-1').hide();
        $('#accordion-content-2').hide();
        $('#accordion-content-3').hide();
        $('#accordion-content-4').toggle();
        $('#accordion-content-5').hide();
        $('#down1').removeClass('rotate');
        $('#down2').removeClass('rotate');
        $('#down3').removeClass('rotate');
        $('#down4').toggleClass('rotate');
        $('#down5').removeClass('rotate');
    })
    $('#accordion-button-5').on('click', () => {
        $('#accordion-content-1').hide();
        $('#accordion-content-2').hide();
        $('#accordion-content-3').hide();
        $('#accordion-content-4').hide();
        $('#accordion-content-5').toggle();
        $('#down1').removeClass('rotate');
        $('#down2').removeClass('rotate');
        $('#down3').removeClass('rotate');
        $('#down4').removeClass('rotate');
        $('#down5').toggleClass('rotate');
    })
    $('.pop-up-item').hide();
    $('#pork-rice-menu').hover(function () {
        $('#pork-rice-popup').show();
        $('#oreo-milkshake-popup').hide();
        $('#iced-latte-popup').hide();
    });
    
    $('#oreo-milkshake-menu').hover(function () {
        $('#pork-rice-popup').hide();
        $('#oreo-milkshake-popup').show();
        $('#iced-latte-popup').hide();
    });
    
    $('#iced-latte-menu').hover(function () {
        $('#pork-rice-popup').hide();
        $('#oreo-milkshake-popup').hide();
        $('#iced-latte-popup').show();
    });

    $('.menu-item').mouseleave(function () {
        $('.pop-up-item').hide(); // Hide all popups when leaving any popup area
    });

    // Initially show all images
    $(".gallery img").show();

    // Button click event handler
    $("#nature").click(function () {
        // Get the button id (category)
        var category = $(this).attr("id");

        // Hide all images
        $(".gallery img").hide();

        // Show images with the selected category
        $("." + category + "-pic img").show();
    });

    $(".gallery img").show();
    $("#travel").click(function () {
        var category = $(this).attr("id");
        $(".gallery img").hide();
        $("." + category + "-pic img").show();
    });

    $(".gallery img").show();
    $("#animal").click(function () {
        var category = $(this).attr("id");
        $(".gallery img").hide();
        $("." + category + "-pic img").show();
    });
    
    $("#all").click(function () {
        $(".gallery img").show();
    });
})
