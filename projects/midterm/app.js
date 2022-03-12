$('#mobile-menu-button').click(function() {
    $('#mobile-menu').slideDown("slow")
    $('#mobile-menu').css('display', 'flex')
    $('#mobile-menu-button').css('display', 'none')
    $('#close-mobile-menu-button').css('display', 'flex')
})

$('#close-mobile-menu-button').click(function() {
    $('#mobile-menu').slideUp("slow")
    $('#mobile-menu-button').css('display', 'flex')
    $('#close-mobile-menu-button').css('display', 'none')
})

// if (window.width() > '60rem'){
//     $('#mobile-menu-button').css('display', 'none')
//         $('#close-mobile-menu-button').css('display', 'none')
//         $('#mobile-menu').css('display', 'none')
// }

// $(window).resize(function() {
//     var sWidth = $(window).width("em")
//     if (sWidth > 60) {
//         $('#mobile-menu-button').css('display', 'none')
//         $('#close-mobile-menu-button').css('display', 'none')
//         $('#mobile-menu').css('display', 'none')
//     }
// })