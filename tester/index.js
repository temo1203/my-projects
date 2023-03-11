var input = document.getElementById("input1");
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    validate(e);
  }
});

function validate(e) {
  var text = e.target.value;
  alert(text);
}
