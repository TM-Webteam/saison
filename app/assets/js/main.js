$(document).ready(function() {
  //---------------------------------
  // SP時横スクロール UI
  //---------------------------------

  new ScrollHint('.scroll', {
    i18n: {
      scrollable: '横スクロールできます'
    }
  });

  
  //---------------------------------
  // Smooth Scrolling
  //---------------------------------

  $('a[href^="#"]').click(function(){

    var the_id = $(this).attr("href");

    $('html, body').animate({
      scrollTop:$(the_id).offset().top-50
    }, 'slow');

    return false;
  });

});


//--------------------------------------
//　header　演出
//--------------------------------------

$(function(){
  var pos = 0;
  var header = $('header');
  
  $(window).on('scroll', function(){
    if($(this).scrollTop() < pos || $(this).scrollTop() < 400){
      header.removeClass('hide');
    }else{
      header.addClass('hide');
    }
    pos = $(this).scrollTop();
  });
});


//--------------------------------------
//　アコーディオンメニュー
//--------------------------------------

(function ($) {
  $(function () {
    $('#nav-toggle').on('click', function () {
      $('header').toggleClass('open');
      $('#gloval-nav').slideToggle();
    });
  });
})(jQuery);


//--------------------------------------
//　アニメーション　ふわっと演出
//--------------------------------------
window.onload = function() {
  scroll_effect();

  $(window).scroll(function(){
   scroll_effect();
  });

  function scroll_effect(){
   $('.fadein').each(function(){
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight){
     $(this).addClass('scrollin');
    }
   });
  }
};


//--------------------------------------
//　loop-slick
//--------------------------------------

$(document).ready(function() {
  $('#loop-slick').slick({
      arrows: false,
      autoplay: true,
      autoplaySpeed: 1,
      cssEase: 'linear',
      speed: 5000,
      slidesToShow: 7,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 769, // 768px以下のサイズに適用
          settings: {
          slidesToShow: 4,
          },
        },
        {
          breakpoint: 400, // 399px以下のサイズに適用
          settings: {
          slidesToShow: 2,
          },
        },
      ],
  });
});


//--------------------------------------
//　wp-slick
//--------------------------------------

$(document).ready(function() {
  $('#wp-slick').slick({
    arrows: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});



//--------------------------------------
//　faq　プルダウン
//--------------------------------------

$(document).ready(function(){
  $(".question").on("click", function() {
    $(this).toggleClass('open');
    $(this).next().slideToggle(400);
  });
});


//--------------------------------------
//　バナー　追従
//--------------------------------------

$(function(){
  var scrollStart = $('.show').offset().top;
  var scrollEnd = $('.hide').offset().top;
  var distance = 0;

  $(document).scroll(function(){
    distance = $(this).scrollTop();

    if (scrollStart <= distance) {
      $('.floating').addClass('fixed');
    } else if (scrollStart >= distance) {
      $('.floating').removeClass('fixed');
    }

    if (scrollEnd <= distance) {
      $('.floating').fadeOut();
    } else{
      $('.floating').fadeIn();
    }
  });      
});


$(window).on('load', function(){
  //---------------------------------
  // AOS
  //---------------------------------
  AOS.init({
    offset: 120, //初期値
    delay: 0, //初期値
    anchor: 'top-bottom', //初期値
    duration: 1000, //初期値　400
    easing: 'ease', //初期値
    once: true, //初期値　false
  });
});

//--------------------------------------
//　dropdown header
//--------------------------------------

(function ($) {
  $(function () {
    var $searchDropdown = $(".nav__item__dropdown__search");
    var $supportDropdown = $(".nav__item__dropdown__support");
    var $searchList = $(".nav__dropdown__list__search");
    var $supportList = $(".nav__dropdown__list__support")

    $searchDropdown.on("click", function () {
      $(".nav__dropdown__list__search").toggleClass("open");
      $supportDropdown.removeClass("open");
      $supportList.removeClass("open");
      $searchDropdown.toggleClass("open");
    });

    $supportDropdown.on("click", function () {
      $(".nav__dropdown__list__support").toggleClass("open");
      $searchDropdown.removeClass("open");
      $searchList.removeClass("open");
      $supportDropdown.toggleClass("open");
    });
  });
})(jQuery);