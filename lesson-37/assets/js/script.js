$('.first-slide').owlCarousel({
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    dots: true,
    arrows: false,
    loop:true,
    margin:10,
    nav: false,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('.second-slide').owlCarousel({
    // autoplay: true,
    // autoplaySpeed: 3000,
    infinite: false,
    arrows: true,
    loop:true,
    margin:10,
    nav:true,
    navText: ["<img src='assets/icon/prev.svg'>","<img src='assets/icon/next.svg'>"],
    items:5,
    dots: false, 
    responsive:{
        0:{
            items:1
        },
        768:{
            items:3,
          
        },
        1400:{
            items:5, 
         
        },
        1500:{
            items:5, 
           
        }
    }
});



$('.third-slide').owlCarousel({
    // autoplay: true,
    // autoplaySpeed: 3000,
    infinite: true,
    dots: true,
    arrows: true,
    loop:true,
    margin:10,
    nav: true,
    navText: ["<img src='assets/icon/prev.svg'>","<img src='assets/icon/next.svg'>"],
    responsive:{
        0:{
            items:2
        },
        768:{
            items:6,
            nav: true,
            dots: false
        },
        1300:{
            items:8,
            nav: true,
            dots: false,
        }
    }
})







