"use strict";

$(document).ready(function () {
  //미트립 랭킹
  $(".con2_sec").slick({
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });

  //미트립 서비스
  $(".con1_wrapper").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: false,
    variableWidth: true,
    dots: false,
    prevArrow: $("#arrow_left"),
    nextArrow: $("#arrow_right"),
  });

  const slider = $(".con2_sec");
  let slickOptions = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: false,
    variableWidth: true,
    dots: false,
    prevArrow: $("#arrow_left"),
    nextArrow: $("#arrow_right"),
  };

  $(window).on("load resize", function () {
    if ($(window).width() < 769) {
      slider.slick("unslick");
    } else {
      slider.not(".con1_wrapper").slick(slickOptions);
    }
  });

  //미트립 리뷰
  $(".con5_sec").slick({
    rows: 1,
    mobileFirst: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: true,
    dots: false,
    prevArrow: $("#arrow_left2"),
    nextArrow: $("#arrow_right2"),
    responsive: [
      {
        breakpoint: 769,
        settings: "unslick",
      },
    ],
  });
  $(window).on("resize", function () {
    $(".con5_sec").slick("resize");
  });
});
