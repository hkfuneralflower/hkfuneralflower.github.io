$(document).ready(function(){
    $('.gallery').slick({
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        autoplay: true,
        autoplaySpeed: 1000,
        fade: true,
        cssEase: 'linear'
    });
    lightGallery(document.getElementById('gallery'), {
        thumbnail: true,
        selector: '.image',
        download: false,
        plugins: [lgZoom, lgThumbnail],
    });
  });

var $body = $("body"),
  $window = $(window);

$window.scroll(function() {    
  var scroll = $window.scrollTop();

  if (scroll >= 300) {
      $body.addClass("alter");
  } else {
      $body.removeClass("alter");
  }
});