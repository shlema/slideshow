let slideIndex = 0;
showSlides();

<div class="slideshow-container">

<div class="mySlides fade">
  <div class="numbertext"></div>
  <img src="image01.png" style="width:100%">
  <div class="text"></div>
</div>

<div class="mySlides fade">
  <div class="numbertext"></div>
  <img src="image02.png" style="width:100%">
  <div class="text"></div>
</div>

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 1000); // Change image every 1 second
}
