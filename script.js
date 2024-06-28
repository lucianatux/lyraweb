document.addEventListener("DOMContentLoaded", function () {

  // BRISEIDA JS
  const briseida = document.getElementById("briseida");

  briseida.addEventListener("mouseover", function () {
    briseida.style.transform = "translateX(300px)";
  });

  briseida.addEventListener("transitionend", function () {
    if (briseida.style.transform === "translateX(300px)") {
      briseida.style.transition = "none";
      briseida.style.transform = "translateX(0)";
      briseida.style.opacity = "1";

      briseida.offsetHeight;

      briseida.style.transition = "transform 1s linear, opacity 0.5s linear";
    }
  });

  // SEARCH JS
  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");
  const contentItems = document.querySelectorAll(".content-item");

  searchButton.addEventListener("click", function () {
    const query = searchInput.value.toLowerCase();
    contentItems.forEach(function (item) {
      if (item.textContent.toLowerCase().includes(query)) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  });

  searchInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      searchButton.click();
    }
  });

//FORMULARIO - REINICIO DE CAMPOS

document.getElementById('formulario-contacto').addEventListener('submit', function() {
  this.reset(); // Reinicia los campos del formulario
});


// CARRUSEL RESPONSIVE

if (window.innerWidth <= 767.98) {
  var carouselInner = document.querySelector('#carouselFade1 .carousel-inner');
  var slides = document.querySelectorAll('#carouselFade1 .carousel-item');

  slides.forEach(function (slide) {
    var secondImgAndText = slide.querySelector('.img-and-text.second');
    if (secondImgAndText) {
      // Crear una nueva slide
      var newSlide = document.createElement('div');
      newSlide.classList.add('carousel-item');
      
      // Crear un nuevo contenedor para la imagen y descripción
      var newSlides = document.createElement('div');
      newSlides.classList.add('slides', 'd-flex', 'w-100');

      // Clonar el segundo conjunto de imagen y descripción
      var clonedSecondImgAndText = secondImgAndText.cloneNode(true);
      clonedSecondImgAndText.classList.remove('second');
      clonedSecondImgAndText.classList.add('first');

      // Agregar el conjunto clonado al nuevo contenedor
      newSlides.appendChild(clonedSecondImgAndText);

      // Agregar el nuevo contenedor a la nueva slide
      newSlide.appendChild(newSlides);

      // Agregar la nueva slide al carrusel
      carouselInner.appendChild(newSlide);
    }
  });
}




























  
});


