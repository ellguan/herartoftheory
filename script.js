/* Set the width of the sidebar to 250px (show it) */
function openNav(element) {
  document.getElementById(element).style.width = "1100px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav(element) {
  document.getElementById(element).style.width = "0";
}

/* When clicked, scrolls window to element */
function scrollWindow(element) {
  const scroll = document.getElementById(element);
  scroll.scrollIntoView({ behavior: "smooth", block: "center" });
}

function fadein() {
  var reveals = document.querySelectorAll(".fade");
  //console.log(reveals[0].classList)

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 50;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }


}

window.addEventListener("scroll", fadein);
