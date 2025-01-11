// Scroll to top
const scrolltop = document.querySelector("#scrolltop");
scrolltop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
window.addEventListener("scroll", function () {
  if (window.scrollY >= 700) {
    scrolltop.style.opacity = 1;
  } else {
    scrolltop.style.opacity = 0;
  }
});
