class myname {
  constructor() {
    this.fullname = {
      name: "",
      username: "",
    };
  }
  name(event) {
    this.fullname.name = event.target.value;
  }
  password(event) {
    this.fullname.password = event.target.value;
  }
  button() {
    var button_1 = document.getElementById("but-1");
    var i_1 = document.getElementById("label_1");
    var l_2 = document.getElementById("input_2");
    var i_2 = document.getElementById("label_2");
    var first = this.fullname.name;
    var second = this.fullname.password;
    if (first == "") {
      console.log("false");
    } else {
      l_2.style.display = "flex";
      i_2.style.display = "flex";
      button_1.innerHTML = "Sign in";
    }
    console.log(this.fullname.name);
    if ((l_2.style.display = "flex" && second)) {
      localStorage.setItem("name", first);
      localStorage.setItem("password", second);
      location.href = "../home/home.html";
    }
  }
}
const something = new myname();
function tog() {
  var choose_1 = document.getElementById("select_div_id_1");
  choose_1.classList.toggle("toggle_1");
}
var button_1 = document.getElementById("but-1");
var inp = (document.getElementById("input_2").onkeypress = function (event) {
  if (event.keyCode == 13 || event.which == 13) {
    something.button();
  }
});
var l_2 = (document.getElementById("input_2").onkeypress = function (event) {
  if (event.keyCode == 13 || event.which == 13) {
    something.button();
  }
});
