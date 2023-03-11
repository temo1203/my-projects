var img = document.getElementById("image_1");
var text_1 = document.getElementById("demo_1");
var text_2 = document.getElementById("demo_2");
var slides = [
  "../home/home photos/sunset_1663_Junji_Aoyama.jpg",
  "./home photos/Fantasy_Island_Daniel_Cheong.jpg",
  "./home photos/cool.jpg",
  "./home photos/boy and cat.jpg",
  "./home photos/mists.jpg",
];
var text = [
  "sunset 1663",
  "Fantasy Island",
  "Cool Power commended-LPOTY",
  "Happy birthday Adam",
  "Mists of Renfrew",
];
var text2 = [
  "by Junji Aoyama",
  "by Daniel Cheong",
  "by Steve Cole",
  "By Iwona Podlasnika",
  "by Adam Gibbs",
];
var start = 0;
var start_2 = 0;
var start_3 = 0;
function slider() {
  if (start && start_2 && start_3 == 5) {
    start -= 5;
    start_2 -= 5;
    start_3 -= 5;
  }
  if (
    (start < slides.length && start_2 < text.length, start_3 < text2.length)
  ) {
    start = start + 1;
    start_2 = start_2 + 1;
    start_3 = start_3 + 1;
  } else {
    start = start + 1;
    start_2 = start_2 + 1;
    start_3 = start_3 + 1;
  }
  img.src = slides[start - 1];
  text_1.innerHTML = text[start_2 - 1];
  text_2.innerHTML = text2[start_3 - 1];
  console.log(start);
}
setInterval(slider, 6000);
