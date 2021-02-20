// Scroll 2 Top

$(window).scroll(function() {
    if ($(this).scrollTop() >= 350) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});

// Muted while I figure href=javascript: linking

// $('#return-to-top').click(function(clickMe) {      // When arrow is clicked
//     $('body,html').animate({
//         scrollTop : 0                       // Scroll to top of body
//     }, 500);
// });