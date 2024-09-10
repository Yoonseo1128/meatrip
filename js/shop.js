"use strict";

$(function () {
  $(".slide_con").slick({
    centerMode: true,
    centerPadding: "80px",
    slidesToShow: 5,
    arrows: true,
    prevArrow: $("#arrow_left"),
    nextArrow: $("#arrow_right"),
    responsive: [
      {
        breakpoint: 1601,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "80px",
          slidesToShow: 4,
          prevArrow: $("#arrow_left"),
          nextArrow: $("#arrow_right"),
        },
      },
      {
        breakpoint: 1562,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "80px",
          slidesToShow: 4.2,
          prevArrow: $("#arrow_left"),
          nextArrow: $("#arrow_right"),
        },
      },
      {
        breakpoint: 1440,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "80px",
          slidesToShow: 3.7,
          autoplay: true,
          autoplaySpeed: 1500,

          prevArrow: $("#arrow_left"),
          nextArrow: $("#arrow_right"),
        },
      },
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "80px",
          slidesToShow: 3.2,
          autoplay: true,
          autoplaySpeed: 1500,

          prevArrow: $("#arrow_left"),
          nextArrow: $("#arrow_right"),
        },
      },
      {
        breakpoint: 1115,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "80px",
          slidesToShow: 2.9,
          autoplay: true,
          autoplaySpeed: 1500,

          prevArrow: $("#arrow_left"),
          nextArrow: $("#arrow_right"),
        },
      },
      {
        breakpoint: 1025,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "80px",
          slidesToShow: 2.8,
          autoplay: true,
          autoplaySpeed: 1500,
          prevArrow: $("#arrow_left"),
          nextArrow: $("#arrow_right"),
        },
      },
      {
        breakpoint: 925,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "80px",
          slidesToShow: 2.6,
          autoplay: true,
          autoplaySpeed: 1500,
          prevArrow: $("#arrow_left"),
          nextArrow: $("#arrow_right"),
        },
      },
      {
        breakpoint: 821,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "80px",
          slidesToShow: 2.4,
          autoplay: true,
          autoplaySpeed: 1500,
          prevArrow: $("#arrow_left"),
          nextArrow: $("#arrow_right"),
        },
      },
      {
        breakpoint: 769,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "80px",
          slidesToShow: 2.8,
          autoplay: true,
          autoplaySpeed: 1500,
          prevArrow: $("#arrow_left"),
          nextArrow: $("#arrow_right"),
        },
      },
      {
        breakpoint: 667,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "80px",
          slidesToShow: 2.5,
          autoplay: true,
          autoplaySpeed: 1500,
          prevArrow: $("#arrow_left"),
          nextArrow: $("#arrow_right"),
        },
      },
      {
        breakpoint: 596,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "80px",
          slidesToShow: 2,
          autoplay: true,
          autoplaySpeed: 1500,
          prevArrow: $("#arrow_left"),
          nextArrow: $("#arrow_right"),
        },
      },
      {
        breakpoint: 524,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "80px",
          slidesToShow: 1.7,
          autoplay: true,
          autoplaySpeed: 1500,
          prevArrow: $("#arrow_left"),
          nextArrow: $("#arrow_right"),
        },
      },
      {
        breakpoint: 479,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "80px",
          slidesToShow: 1.3,
          autoplay: true,
          autoplaySpeed: 1500,
          prevArrow: $("#arrow_left"),
          nextArrow: $("#arrow_right"),
        },
      },
      {
        breakpoint: 438,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "80px",
          slidesToShow: 1.2,
          autoplay: true,
          autoplaySpeed: 1500,
          prevArrow: $("#arrow_left"),
          nextArrow: $("#arrow_right"),
        },
      },
      {
        breakpoint: 418,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "80px",
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 1500,
          prevArrow: $("#arrow_left"),
          nextArrow: $("#arrow_right"),
        },
      },
    ],
  });
});
window.resize = function () {
  document.location.load();
};
