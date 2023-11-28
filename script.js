const navbar = document.getElementById('navbar-js');
console.log(navbar); // This should work without waiting for DOMContentLoaded


window.addEventListener("scroll", function() {
  const scrollPosition = window.scrollY;
  const scrollThreshold = 50;

  if (scrollPosition > scrollThreshold) {
    navbar.style.backgroundColor = "#ffffff42";
    navbar.style.backdropFilter = "blur(10px)";
  } else {
    navbar.style.backgroundColor = null;
    navbar.style.backdropFilter = null
  }
});




/*
const fadeElement = document.querySelector("nav");





function scrollOpacity () {
  let scrollPosition = document.scrollY;
  let maxScroll = 10;
  if (maxScroll > scrollPosition) {
    navbar.style
  }
}

document.addEventListener("scroll", "scrollOpacity");
*/