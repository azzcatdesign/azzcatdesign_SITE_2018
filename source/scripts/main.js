$(window).scroll(function() {
    if ($(this).scrollTop() >= 200) {    // If page is scrolled more than 50px
        $('#top').fadeIn("slow");       // Fade in the arrow
    } else {
        $('#top').fadeOut("slow");      // Else fade out the arrow
    }
});
$('#top').click(function() {            // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                   // Scroll to top of body
    }, 50);
});
