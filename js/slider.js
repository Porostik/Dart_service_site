$('.slider-reviews').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    centerMode: false,
    centerPadding: '500px',
})

$('.slider-team').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
    centerMode: true,
    variableWidth: true,
    speed: 300,
    swipe: false,
    asNavFor: '.slider-team-info',
})

$('.slider-team-info').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipe: false,
    fade: true,
    asNavFor: '.slider-team'
})