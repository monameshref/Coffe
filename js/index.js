

// Navbar Change
window.addEventListener('scroll', function(){
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar.scrollHeight;

    if (window.scrollY >= navbarHeight ) {
        navbar.style.backgroundColor = '#000000db';
    }
    else {
        navbar.style.backgroundColor = 'transparent';
    }

    // Scroll Top
    const aboutSection = document.getElementById('about');
    const aboutSectionHeight = aboutSection.offsetHeight;
    const topBtn = document.querySelector('.to-top');
    if (window.scrollY >= aboutSectionHeight - 200) {
        topBtn.style.opacity = "1";
    }
    else {
        topBtn.style.opacity = "0";
    }
});

// Skitter Slider
$(document).ready(function() {
    $(".skitter-large").skitter({
        animation: "fade",
        auto_play: true,
        dots: false,
    });
});

// Owl Carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay:true,
    autoplayTimeout: 4000,
    smartSpeed: 1500,
    margin: 30,
    dots: true,
    dotsEach: true,
    responsive:{
        0:{
            items:1
        },
        790:{
            items:2
        },
        1000:{
            items:3
        }
    }
});