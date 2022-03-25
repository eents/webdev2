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

let rootFontSize = +$('html').css('font-size').slice(0, 2);
console.log(rootFontSize)

let pRatio = 16/rootFontSize;

$(window).resize(function() {
    var sWidth = $(window).width()
    console.log(sWidth)
    if (sWidth > 800 * pRatio) {
        $('#mobile-menu-button').css('display', 'none')
        $('#close-mobile-menu-button').css('display', 'none')
        $('#mobile-menu').css('display', 'none')
    }
})