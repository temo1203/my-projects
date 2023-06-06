$(document).ready(function () {
  $("#commerce").click(function () {
    toggleClass("checked_div_1");
  });
  $("#portfolio").click(function () {
    toggleClass("checked_div_2");
  });
  $("#agency").click(function () {
    toggleClass("checked_div_3");
  });
});

function toggleClass(className) {
  $(".checked_div_1, .checked_div_2, .checked_div_3").addClass("none");
  $("." + className).removeClass("none");
  console.log(className);
}
