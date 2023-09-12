$(document).ready(function () {
  //---------------------------------
  // SP時横スクロール UI
  //---------------------------------

  new ScrollHint(".scroll", {
    i18n: {
      scrollable: "横スクロールできます",
    },
  });

  //---------------------------------
  // Smooth Scrolling
  //---------------------------------

  $('a[href^="#"]').click(function () {
    var the_id = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(the_id).offset().top - 200,
      },
      "slow"
    );
    window.location.hash = the_id;

    return false;
  });
});

//--------------------------------------
//　header　演出
//--------------------------------------

$(function () {
  var pos = 0;
  var header = $("header");

  $(window).on("scroll", function () {

    if ($(this).scrollTop() > 50) {
      hideDropdownMenu();
    }

    if ($(this).scrollTop() < pos || $(this).scrollTop() < 400) {
      header.removeClass("hide");
    } else {
      header.addClass("hide");
    }
    pos = $(this).scrollTop();
  });
});


//--------------------------------------
//　TOP　下部のボタン
//--------------------------------------

$(window).on("scroll", function() {
  var scrollPosition = $(this).scrollTop();
  var footerPosition = $('footer').offset().top; // フッターの位置を取得
  var fadeOutThreshold = footerPosition - 500; // フッター手前の位置を設定

  if (scrollPosition > 500 && scrollPosition < fadeOutThreshold) {
    $('.roundbtn').addClass('show');
    $('.roundbtn').removeClass('fade-out'); // フェードアウトクラスを削除
  } else if (scrollPosition >= fadeOutThreshold) {
    $('.roundbtn').removeClass('show');
    $('.roundbtn').addClass('fade-out'); // フェードアウトクラスを追加
  } else {
    $('.roundbtn').removeClass('show');
    $('.roundbtn').removeClass('fade-out'); // フェードアウトクラスを削除
  }
});

//--------------------------------------
//　アコーディオンメニュー
//--------------------------------------

(function ($) {
  $(function () {
    $("#nav-toggle").on("click", function () {
      $("header").toggleClass("open");
      $("#gloval-nav").slideToggle();
    });
  });
})(jQuery);

//--------------------------------------
//　アニメーション　ふわっと演出
//--------------------------------------
window.onload = function () {
  scroll_effect();

  $(window).scroll(function () {
    scroll_effect();
  });

  function scroll_effect() {
    $(".fadein").each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight) {
        $(this).addClass("scrollin");
      }
    });
  }
};

//--------------------------------------
//　loop-slick
//--------------------------------------

$(document).ready(function () {
  $("#loop-slick").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1,
    cssEase: "linear",
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

$(document).ready(function () {
  $("#wp-slick").slick({
    arrows: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});

//--------------------------------------
//　faq　プルダウン
//--------------------------------------

$(document).ready(function () {
  $(".question").on("click", function () {
    $(this).toggleClass("open");
    $(this).next().slideToggle(400);
  });
});

//______________________________________
// QA
//______________________________________
$(document).ready(function () {
  $(".question__content").each(function (index) {
    $(this).on("click", function () {
      $(this).find(".QA__content-icon").toggleClass("is__open");
      $(this)
        .closest(".QA__content")
        .find(".answer__content")
        .slideToggle()
        .css("display", "flex");
    });
  });
});

//______________________________________
// QA sole_proprietorship
//______________________________________
$(document).ready(function () {
  $(".qa-button").each(function (index) {
    $(this).on("click", function () {
      $(this).toggleClass("open");
      $(this)
        .closest(".qa")
        .find(".answer-tab")
        .slideToggle()
        .css("display", "flex");
    });
  });
});

//--------------------------------------
//　バナー　追従
//--------------------------------------

// $(function () {
//   var scrollStart = $(".show").offset().top;
//   var scrollEnd = $(".hide").offset().top;
//   var distance = 0;

//   $(document).scroll(function () {
//     distance = $(this).scrollTop();

//     if (scrollStart <= distance) {
//       $(".floating").addClass("fixed");
//     } else if (scrollStart >= distance) {
//       $(".floating").removeClass("fixed");
//     }

//     if (scrollEnd <= distance) {
//       $(".floating").fadeOut();
//     } else {
//       $(".floating").fadeIn();
//     }
//   });
// });

$(window).on("load", function () {
  //---------------------------------
  // AOS
  //---------------------------------
  AOS.init({
    offset: 120, //初期値
    delay: 0, //初期値
    anchor: "top-bottom", //初期値
    duration: 1000, //初期値　400
    easing: "ease", //初期値
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
    var $supportList = $(".nav__dropdown__list__support");

    var $listBack = $(".nav__dropdown__back");

    $searchDropdown.on("click", function () {
      $(".nav__dropdown__list__search").toggleClass("open");
      $supportDropdown.removeClass("open");
      $supportList.removeClass("open");
      $searchDropdown.toggleClass("open");
    });

    $supportDropdown.on("click", function () {
      console.log("here");

      $(".nav__dropdown__list__support").toggleClass("open");
      $searchDropdown.removeClass("open");
      $searchList.removeClass("open");
      $supportDropdown.toggleClass("open");
    });

    $listBack.on("click", function () {
      $supportList.removeClass("open");
      $searchList.removeClass("open");
    });

    $("main").on("click", function() {
      hideDropdownMenu();
    });
    $("footer").on("click", function() {
      hideDropdownMenu();
    });
  });
})(jQuery);

function hideDropdownMenu() {
  var $searchDropdown = $(".nav__item__dropdown__search");
  var $supportDropdown = $(".nav__item__dropdown__support");
  var $searchList = $(".nav__dropdown__list__search");
  var $supportList = $(".nav__dropdown__list__support");

  $searchDropdown.removeClass("open");
  $searchList.removeClass("open");
  $supportDropdown.removeClass("open");
  $supportList.removeClass("open");
}

//--------------------------------------
// Toggle menu Sp
//--------------------------------------

(function ($) {
  $(function () {
    var $menuList = $(".nav__dropdown__sp");
    var $toggleMenu = $("#nav-toggle");

    var $searchList = $(".nav__dropdown__list__search");
    var $supportList = $(".nav__dropdown__list__support");

    $toggleMenu.on("click", function () {
      $menuList.toggleClass("open");
      $supportList.removeClass("open");
      $searchList.removeClass("open");
    });
  });
})(jQuery);

// ----------------------------------
// Homepage Header Slider
// ----------------------------------

$(document).ready(function () {
  $(".section-welcome__banner").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: false,
    fade: true,
  });
});

// ----------------------------------
// Recommend Slider
// ----------------------------------

$(window).on("load", function () {
  setTimeout(function () {
    $(".carousel").slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: true,
      useTransform: false,
      autoplay: true,
      autoplaySpeed: 3000,
      prevArrow:
        '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="15.095" height="15.095" viewBox="0 0 15.095 15.095"><path id="Path_44704" data-name="Path 44704" d="M9.674,9.674V0H0" transform="translate(8.255 14.388) rotate(-135)" fill="none" stroke="#fff" stroke-width="2"/></svg></button>',
      nextArrow:
        '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="15.095" height="15.095" viewBox="0 0 15.095 15.095"><path id="Path_44704" data-name="Path 44704" d="M9.674,0V9.674H0" transform="translate(0 7.548) rotate(-45)" fill="none" stroke="#fff" stroke-width="2"/></svg></button>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    $(".carousel").show();
  }, 100);
});

// Sidebar
$(document).ready(function (e) {
  e.preventDefault;

  $(".rbt-item").each(function (index) {
    $(this).on("click", function () {
      if (window.location.hash == $(this).attr("href")) {
        $(".rbt-item.active").removeClass("active");

        $(this).toggleClass("active");
      }
    });
  });
});

// Handle active sidebar
$(document).ready(function () {
  var item = $(".rbt-item").filter(function () {
    return $(this).attr("href") == window.location.hash;
  });

  item.length
    ? item.addClass("active")
    : $(".rbt-item:first").addClass("active");
});

$(window).on("popstate", function () {
  var item = $(".rbt-item").attr("href") == window.location.hash;
  if (item) {
    $(".rbt-item.active").removeClass("active");
    item.addClass("active");
  }
});
