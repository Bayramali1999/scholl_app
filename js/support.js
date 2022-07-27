$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
      {    
        items:1,
        loop:true,
        dots:false ,
        autoplay:true,
        smartSpeed:1200,
        autoplaySpeed:1000,
        autoplayHoverPause:true}
    );
  });

  
  let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function openImageList(){
  let modalView = document.getElementsByClassName("modal_view3");
  modalView[0].classList.add("active_3");}


  function closeModal3(){
    let close = document.getElementsByClassName("modal_view3");
    close[0].classList.remove("active_3");}

    function closeModal4(){
      let close = document.getElementsByClassName("modal_view4");
      close[0].classList.remove("active_4");}

function openModal4(){
  let modalView = document.getElementsByClassName("modal_view4")[0];
  modalView.classList.add("active_4");
}

  