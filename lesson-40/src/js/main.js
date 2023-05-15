  //слайдери
  $('.hero__slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: false,
    autoplay:true,
    autoplaySpeed: 5000,
    verticalSwiping: true,
});


$('.news-slider').slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<img src="src/img/news/news-arrow-left.svg" alt="slick-arrow" class="arrow-left">',
    nextArrow: '<img src="src/img/news/news-arrow-right.svg" alt="slick-arrow" class="arrow-right">',
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                autoplay: true,
                centerMode: false,
                arrows: true,
                dots: true,
                centerMode: false,
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                autoplay: true,
                centerMode: false,
                arrows: false,
                dots: true,
                centerMode: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        }
    ]
});
// scroll smoth 
$(document).ready(function() {
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();

        const link = $(this).attr('href');

        if (link !== '#') {
            $('html, body').animate({ 
            scrollTop: $($(this).attr('href')).offset().top
        }, 2000, 'linear');
        }
    });
});
// scroll up 
$(document).ready(function() {
    $('.top').click(function() {
        $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > $(window).height()) {
            $('.top').addClass("active");
        } else {
            $('.top').removeClass("active");
        };
    });
});

$('.gallery__list').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
        verticalFit: true,
    },
    gallery: {
        enabled: true
    },
    zoom: {
        enabled: true,
        duration: 300, 
    }
    
});

//google maps
 let CENTER = { lat: 40.66792059277497, lng: -73.87318649683662 };
 let ADRESS = { lat: 40.67875856475177, lng: -73.89727512510254 };
 
 const MARKER_IMG = {
     url: "src/img/contact/map-flag-icon.svg",
     size: new google.maps.Size(106, 106),
 };

 let MAP = new google.maps.Map(document.getElementById("map"), {
     center: CENTER,
     zoom: 14,
 });

 let marker = new google.maps.Marker({
     position: ADRESS,
     map: MAP,
     icon: MARKER_IMG,
     title: ADRESS,
     animation: google.maps.Animation.DROP
 });    

 const INFO = new google.maps.InfoWindow({
     content: '<h3 class="info-window-text">Monticello</h3>'
 })

 marker.addListener('click', function () {
     INFO.open(MAP, marker);
 })

/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
