const navbar = document.getElementById('navbar-js');
console.log(navbar);


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