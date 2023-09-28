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
    if ($(".header_menu_bg._active").length > 0) return;

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

$(document).ready(function () {
  var sideBarTimeToClose = null;
  var menuSidebar = $(".rbt-sidearea");
  var scrollPosition = null;

  if (menuSidebar) {
    var rbtLoaded = "rbt-loaded";
    var scrollPosition = $(this).scrollTop();
    var visualHeight = $("#top").height() + $("header").height() - 200;

    setInterval(function () {
      if (
        sideBarTimeToClose &&
        Math.floor($.now() / 1000) > sideBarTimeToClose
      ) {
        menuSidebar.removeClass(rbtLoaded);
        sideBarTimeToClose = null;
      }
    }, 200);
  }

  $(window).on("scroll", function () {
    scrollPosition = $(this).scrollTop();
    var footerPosition = $("footer").offset().top; // フッターの位置を取得
    var fadeOutThreshold = footerPosition - 500; // フッター手前の位置を設定

    if (scrollPosition > 500 && scrollPosition < fadeOutThreshold) {
      $(".roundbtn").addClass("show");
      $(".roundbtn").removeClass("fade-out"); // フェードアウトクラスを削除
    } else if (scrollPosition >= fadeOutThreshold) {
      $(".roundbtn").removeClass("show");
      $(".roundbtn").addClass("fade-out"); // フェードアウトクラスを追加
    } else {
      $(".roundbtn").removeClass("show");
      $(".roundbtn").removeClass("fade-out"); // フェードアウトクラスを削除
    }

    clearTimeout(scrollTimer);
    var scrollTimer = setTimeout(function () {
      // main view check
      if (scrollPosition > visualHeight) {
        if (sideBarTimeToClose == null) {
          sideBarTimeToClose = Math.floor($.now() / 1000) + 2;
        }

        if (!menuSidebar.hasClass(rbtLoaded)) {
          // current closed, need to open
          menuSidebar.addClass(rbtLoaded);
        }
      } else {
        menuSidebar.removeClass(rbtLoaded);
        sideBarTimeToClose = null;
      }
    }, 300);

    sideBarTimeToClose = null;
  });
});

//--------------------------------------
//　アコーディオンメニュー
//--------------------------------------

// (function ($) {
//   $(function () {
//     $("#nav-toggle").on("click", function () {
//       $("header").toggleClass("open");
//       $("#gloval-nav").slideToggle();
//     });
//   });
// })(jQuery);

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

// _____________________________________
// SHOW FAQ
// _____________________________________

function sectionQA(initialQAs, qaSelector, showBtnSelector) {
  var totalQAs = $(qaSelector).length;
  var showBtn = $(showBtnSelector);

  $(qaSelector + ":gt(" + (initialQAs - 1) + ")").addClass("hidden-qa");

  if (totalQAs <= initialQAs) {
    showBtn.hide();
  } else {
    showBtn.click(function (e) {
      e.preventDefault();

      $(qaSelector + ".hidden-qa:lt(5)").removeClass("hidden-qa");

      if ($(qaSelector + ".hidden-qa").length === 0) {
        showBtn.hide();
      }
    });
  }
}

$(document).ready(function () {
  sectionQA(5, ".qa", ".show-more-button");
  sectionQA(5, ".QA__content", ".show-faq-list");
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
  $(".question-tab").each(function (index) {
    $(this).on("click", function () {
      $(this).find(".qa-button").toggleClass("open");
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
//Toggle menu pc
//--------------------------------------

(function ($) {
  $(function () {
    var $headerBg = $(".header_menu_bg");

    var menuOpenBtn = ".header_menu_trigger._pc";
    var openClass = "open";
    var activeClass = "_active";
    var subMenuClass = ".sub-menu";

    $(menuOpenBtn).on("click", function () {
      if ($(this).hasClass(openClass)) {
        $(this).removeClass(openClass);
        $headerBg.removeClass(activeClass);
      } else {
        $(menuOpenBtn).removeClass(openClass);
        $(this).addClass(openClass);
        $headerBg.addClass(activeClass);
      }
    });

    $headerBg.on("click", function () {
      $(menuOpenBtn).removeClass(openClass);
      $(subMenuClass).removeClass(openClass);
      $headerBg.removeClass(activeClass);
    });
  });
})(jQuery);

//--------------------------------------
// Toggle menu Sp
//--------------------------------------

(function ($) {
  $(function () {
    var $menuList = $(".nav__dropdown__sp");
    var $toggleMenu = $("#nav-toggle");

    var menuOpenBtn = ".header_menu_trigger._sp";
    var openClass = "open";

    $toggleMenu.on("click", function () {
      $menuList.toggleClass("open");
    });

    $(".nav__dropdown__back").each(function () {
      $(this).on("click", function () {
        $(this)
          .closest(".nav__dropdown__sp")
          .find(".header_menu_trigger._sp.open")
          .removeClass(openClass);
      });
    });

    $(menuOpenBtn).on("click", function (e) {
      if ($(e.target).hasClass("header_menu_trigger")) {
        if ($(this).hasClass(openClass)) {
          $(this).removeClass(openClass);
        } else {
          $(this).toggleClass(openClass);
        }
      }
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
    : $(".rbt-item:last").addClass("active");
});

$(window).on("popstate", function () {
  var item = $(".rbt-item").attr("href") == window.location.hash;
  if (item) {
    $(".rbt-item.active").removeClass("active");
    item.addClass("active");
  }
});

// ----------------------------------
// Open Image modal
// ----------------------------------
$(document).ready(function () {
  $(".btn-open-image").modaal({
    type: "image",
    custom_class: "bg-white sp-only",
  });
});

// ----- サービス一覧絞り込み --------
$(document).ready(function () {
  if ($(".service-page").length) {
    var currentFilters1 = [];
    var currentFilters2 = [];
    var sectionTags = [];

    var resultSections = $("#result .card-section");

    resultSections.each(function () {
      var thisSectionTags = [];

      $(this)
        .find(".list-button")
        .children()
        .each(function () {
          thisSectionTags.push($(this).text());
        });

      sectionTags.push(thisSectionTags);
    });

    $("#dataFilter .card-section").each(function () {
      $(this)
        .find(".right-content")
        .children()
        .each(function () {
          $(this).on("click", function (e) {
            e.preventDefault();

            $(this).toggleClass("click-hover");
            var text = $(this).text();

            if ($(this).hasClass("bondi_blue_outline_btn")) {
              updateFilters(currentFilters1, text);
            } else if ($(this).hasClass("bondi_green_outline_btn")) {
              updateFilters(currentFilters2, text);
            }

            applyFilter();
          });
        });
    });

    function updateFilters(filters, text) {
      if (filters.includes(text)) {
        var index = filters.indexOf(text);
        filters.splice(index, 1);
      } else {
        filters.push(text);
      }
    }

    function applyFilter() {
      for (var i = 0; i < sectionTags.length; i++) {
        checkAndApplySection(i);
      }
    }

    function checkAndApplySection(index) {
      var checkingElement = $(resultSections[index]);

      if (
        arrayContainAnyItemOfAnotherArray(
          sectionTags[index],
          currentFilters1
        ) &&
        arrayContainAnyItemOfAnotherArray(sectionTags[index], currentFilters2)
      ) {
        if (checkingElement.is(":hidden")) {
          checkingElement.fadeIn(1000);
        }
      } else {
        if (checkingElement.is(":visible")) {
          checkingElement.fadeOut(1000);
        }
      }
    }

    function arrayContainAnyItemOfAnotherArray(arr1, arr2) {
      var containsAny = false;

      if (arr2.length == 0) {
        containsAny = true;
      }

      for (var i = 0; i < arr2.length; i++) {
        if (arr1.includes(arr2[i])) {
          containsAny = true;
          break;
        }
      }

      return containsAny;
    }
  }
});

// Slick slider
$(document).ready(function (e) {
  if ($(".carousel-single").length) {
    $(window).on("load", function () {
      setTimeout(function () {
        $(".carousel-single")
          .not(".slick-initialized")
          .slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            useTransform: false,
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

        $(".carousel-single").show();
      }, 100);
    });
  }
});

// ----------------------------------
// Card Comparison
// ----------------------------------
$(function () {
  // modal_open
  if ($(".campaign-modal").length) {
    // $(".campaign-modal").each(function () {
    //   $(this).modaal({
    //     content_source: "#js-comparison-modal",
    //   });
    // });

    $(document).on("keydown", function (event) {
      if (event.key == "Escape" && $(".modaal-wrapper.show").length ) {
        $("#modaal-close").click();
      }
    });

    $(".comparison_item_close").on("click", function () {
      var selectCard = $(this).parent("th").attr("id");
      $("." + selectCard).toggleClass("show");

      $(".check[data-select_card='" + selectCard + "']").removeClass("show");
      if ($(".comparison_item.show").length == 0) {
        document.getElementById("modaal-close").click();
        $("#checkOpen").removeClass("show");
        return false;
      }
    });

    $(".check").on("click", function () {
      $(this).toggleClass("show");

      var onSelectCard = $("." + $(this).data("select_card"));
      $.when($(onSelectCard).toggleClass("show")).done(function () {
        if ($(".check").hasClass("show")) {
          $("#checkOpen").addClass("show");
        } else {
          $("#checkOpen").removeClass("show");
        }
      });

      if ($(".check.show").length > 3) {
        alert("譛螟ｧ3縺､縺ｾ縺ｧ驕ｸ謚槫庄閭ｽ縺ｧ縺�");
        $(this).removeClass("show");
        onSelectCard.removeClass("show");
        return false;
      }
    });

    $("#checkOpen").on("click", function (e) {
      e.preventDefault();

      $(".modaal-overlay").addClass("show");
      $(".modaal-wrapper").addClass("show");

      var count = 0;
      $(".comparison_table tbody tr").each(function () {
        var $col = $(this);
        $col.children().each(function (index) {
          $(this).addClass("row-" + index);
          if (count <= index) {
            count = index;
          }
        });
      });
      for (var i = 0; i <= count; i++) {
        var h = 0;
        $(".row-" + i).each(function (index) {
          var cellH = $(this).outerHeight();
          if (h <= cellH) {
            h = cellH;
          }
        });
        $(".row-" + i).height(h);
      }
      var thH = $(".comparison_table thead .comparison_item th").outerHeight();
      $(".free_box").css("height", thH + "px");
    });

    $(".modaal-inner-wrapper").on("click", function (e) {
      if ($(e.target).hasClass("modaal-inner-wrapper")) {
        $("#modaal-close").click();
      }
    });

    $("#modaal-close").on("click", function () {
      $(".modaal-overlay").addClass("hide");
      $(".modaal-wrapper").addClass("hide");

      setTimeout(function () {
        $(".modaal-overlay").removeClass("show").removeClass("hide");
        $(".modaal-wrapper").removeClass("show").removeClass("hide");
      }, 300);
    });
  }
});
