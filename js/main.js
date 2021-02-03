$(document).ready(function () {
  $('.video__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 710,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          
        }
      },]

  });

  $(".menuToggle").click(function() {
    $(this).toggleClass("active");
    $('.menu').slideToggle(300, function(){
      if($(this).css('display') === "none"){
        $(this).removeAttr('style');
      }
    });
  });
  
})

window.onload = function(){
  setTimeout(function(){
    document.getElementById('first-video').src = 'https://www.youtube.com/embed/OYFOWAL1NlA';
  },5000);

  setTimeout(function(){
    document.getElementById('second-video').src = 'https://www.youtube.com/embed/SOYBsly_yN8';
  },5000);

 };