const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId)
    const nav = document.getElementById(navId)
    
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
            toggle.classList.toggle('bx-x')
        })
    }
}
showMenu('header-toggle', 'nav-menu')

/*==== HOME SLIDESHOW MANUAL =====*/
// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
    //   showSlides((slideIndex += n));
// }

// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("my__slides");
//   var dots = document.getElementsByClassName("indicator");
//   if (n > slides.length) {
    //     slideIndex = 1;
//   }
//   if (n < 1) {
    //     slideIndex = slides.length;
    //   }
    //   for (i = 0; i < slides.length; i++) {
        //     slides[i].style.display = "none";
        //   }
        //   for (i = 0; i < dots.length; i++) {
            //     dots[i].className = dots[i].className.replace(" current", "");
            //   }
            //   slides[slideIndex - 1].style.display = "block";
            //   dots[slideIndex - 1].className += " current";
            // }
/*==== HOME SLIDESHOW AUTO =====*/
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("my__slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 10000); // Change SLIDE every 10 seconds
}
