$(function () {
  let scr = $(window).scrollTop();
  console.log(scr);

  $(".down").click(function () {
    $("html, body").animate({ scrollTop: "1419px" }, 500);
  });
});
