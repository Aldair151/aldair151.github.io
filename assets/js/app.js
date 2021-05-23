$(document).on('scroll', function(e) {

})

$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                margin: 10
            },
            480: {
                margin: 20,
                items: 2
            },
            992: {
                margin: 20,
                items: 3
            },
            1200: {
                margin: 20,
                items: 4
            }
        }
    });
});

setTimeout(() => {
    $(".body").addClass("loaded");
}, 100);