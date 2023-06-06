$(document).ready(function () {
  $("#myInput").on("input", function () {
    var value = $(this).val().toLowerCase();
    console.log(value);
    $("#myUl li").each(function () {
      var rowText = $(this).text().toLowerCase();
      $(this).toggle(rowText.includes(value));
    });
  });
});
