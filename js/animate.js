$(document).ready(function () {
  // main 음료
  var tl = new TimelineLite();
  tl.to($(".drinks1"), 0.6, {
    css: {
      opacity: 1,
    },
  });
  tl.to($(".drinks2"), 0.65, {
    css: {
      opacity: 1,
    },
  });
  tl.to($(".drinks3"), 0.66, {
    css: {
      opacity: 1,
    },
  });
  tl.to($(".drinks4"), 0.67, {
    css: {
      opacity: 1,
    },
  });
  tl.to($(".drinks5"), 0.68, {
    css: {
      opacity: 1,
    },
  });
  // scroll ani
  var myWin = $(window).width();
  var controller = new ScrollMagic.Controller();
  if (myWin > 960) {
    var scene = new ScrollMagic.Scene({
      triggerElement: ".pick_fav",
      triggerHook: 0.9,
      offset: 200,
    })
      .setClassToggle(".fav_prod", "visible")
      .addTo(controller);
    var scene = new ScrollMagic.Scene({
      triggerElement: ".mapstore",
      triggerHook: 0.7,
      offset: 50,
    })
      .setClassToggle(".store_exp", "visible")
      .addTo(controller);

    var scene = new ScrollMagic.Scene({
      triggerElement: ".xmas_blend",
      triggerHook: 0.7,
      offset: 100,
    })
      .setClassToggle(".blend", "visible")
      .addTo(controller);
  } else {
    var scene = new ScrollMagic.Scene({
      triggerElement: ".xmas_blend",
      triggerHook: 0.7,
      offset: 100,
    })
      .setClassToggle(".blend", "visible", "mob_visible")
      .addTo(controller);

    var scene = new ScrollMagic.Scene({
      triggerElement: ".right_fav_imgbox",
      triggerHook: 0.9,
      offset: 200,
    })
      .setClassToggle(".fav_prod", "mob_visible")
      .addTo(controller);
    var scene = new ScrollMagic.Scene({
      triggerElement: ".mapstore",
      triggerHook: 0.7,
      offset: 50,
    })
      .setClassToggle(".store_exp", "visible")
      .addTo(controller);
    var scene = new ScrollMagic.Scene({
      triggerElement: ".reserve_merry",
      triggerHook: 0.7,
      offset: 100,
    })
      .setClassToggle(".reserve_merry_imgbox", "mob_visible")
      .addTo(controller);

    var scene = new ScrollMagic.Scene({
      triggerElement: ".left_magazine_imgbox",
      triggerHook: 0.7,
      offset: 100,
    })
      .setClassToggle(".right_magazine_textbox", "mob_visible")
      .addTo(controller);
  }
  /*gnb_*/
  $(".gnav_main_wrap >li").mouseenter(function () {
    $(this).find(".gnav_inner_w").stop().slideDown(300, "linear");
  });
  $(".gnav_main_wrap >li").mouseleave(function () {
    $(this).find(".gnav_inner_w").stop().slideUp(300, "linear");
  });

  /*bx슬라이더 - visu*/
  var myWin = $(window).width();
  if (myWin >= 480) {
    var mpSlider = $(".promtslide").bxSlider({
      onSlideAfter: function (
        currentSlideNumber,
        totalSlideQty,
        currentSlideHtmlObject
      ) {
        $(".active_slide").removeClass("active_slide");
        $(".promtslide > li")
          .eq(currentSlideHtmlObject + 1)
          .addClass("active_slide");
      },
      onSliderLoad: function () {
        $(".promtslide > li").eq(1).addClass("active_slide");
      },
      speed: 1500,
      infiniteLoop: true,
      randomStart: false,
      controls: true,
      auto: true,
      autoControls: true,
      autoControlsCombine: true,
      pause: 2000,
      autoHover: false,
      minWidth: 3,
      maxWidth: 3,
      useCSS: true,
      pagerSelector: ".main_slider_pagers",
      autoControlsSelector: ".main_slider_controls",
    });
  } else {
    var mpSlider = $(".promtslide").bxSlider({
      speed: 1500,
      infiniteLoop: true,
      randomStart: false,
      controls: true,
      auto: true,
      autoControls: true,
      autoControlsCombine: true,
      pause: 2000,
      autoHover: false,
      minWidth: 1,
      maxWidth: 1,
      useCSS: true,
      pagerSelector: ".main_slider_pagers",
      autoControlsSelector: ".main_slider_controls",
    });
  }
  /*bx슬라이더 slideToggle, btn, reload*/
  $(".lright_notice").click(function (e) {
    e.preventDefault();
    $(".promt_slider").stop().slideToggle();
    mpSlider.reloadSlider();
    $(".lright_notice").toggleClass("open");
    if ($(this).hasClass("open")) {
      $(this).find(".lright_tbtn img").attr("src", "img/btn_prom_up.png");
    } else {
      $(this).find(".lright_tbtn img").attr("src", "img/btn_prom_down.png");
    }
  });

  /*슬라이더 좌우버튼*/
  $(".main_prevBtn > a").on("click", function (e) {
    mpSlider.goToPrevSlide();
    e.preventDefault();
  });

  $(".main_nextBtn > a").on("click", function (e) {
    mpSlider.goToNextSlide();
    e.preventDefault();
  });

  /*반응형 슬라이더*/
  if (myWin > 640 && myWin <= 1134) {
    var faSlider = $(".footer_slider").bxSlider({
      minSlides: 3,
      maxSlides: 3,
      slideWidth: 200,
      slideMargin: 0,
      controls: false,
      auto: true,
      autoControls: true,
      autoControlsCombine: true,
      pause: 2000,
      pagerSelector: ".footer_slider_pagers",
      autoControlsSelector: ".footer_slider_controls",
    });
    faSlider.reloadSlider();
  } else if (myWin <= 640) {
    var faSlider = $(".footer_slider").bxSlider({
      minSlides: 1,
      maxSlides: 1,
      slideWidth: 200,
      slideMargin: 0,
      controls: false,
      auto: true,
      autoControls: true,
      autoControlsCombine: true,
      pause: 2000,
      pagerSelector: ".footer_slider_pagers",
      autoControlsSelector: ".footer_slider_controls",
    });
  }

  /*gnb-mob*/
  $(".mob_gnb_tit a").click(function () {
    $(this).siblings().stop().slideToggle();
    $(this).find("span").toggleClass("mob_btn_up");
  });
  $(".tablet_gnb03 a").click(function () {
    $(".mob_gnb_modal").show();
    $(".mob_gnb_sub").animate({
      right: "0",
    });
    $("#visual").animate({
      right: "50%",
    });
  });
  $(".btn_gnb_close a").click(function () {
    $(".mob_gnb_modal").hide();
    $(".mob_gnb_sub").animate({
      right: "-100%",
    });
    $("#visual").animate({
      right: "0",
    });
  });
});
