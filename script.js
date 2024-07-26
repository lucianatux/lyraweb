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

if (window.innerWidth <= 868) {
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
      newSlides.classList.add('slides');

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

//AGREGAR AL PEDIDO

document.querySelectorAll('.want-btn').forEach(button => {
  button.addEventListener('click', function() {
    const productText = this.parentElement.textContent.replace('Agregar al pedido', '').trim();

    // Crear un nuevo input oculto para enviar el nombre del producto
    const hiddenInput = document.createElement('input');
    hiddenInput.type = 'hidden';
    hiddenInput.name = 'products[]'; // Array de productos
    hiddenInput.value = productText;

    // Agregar el input al formulario
    document.getElementById('order-form').appendChild(hiddenInput);

    // Agregar una visualización del producto seleccionado
    const productContainer = document.createElement('div');
    productContainer.textContent = productText;
    document.getElementById('all-products-i-want').appendChild(productContainer);
  });
});


//VER PEDIDO
const orderButton = document.getElementById("order"); 
const productList = document.getElementById("my-order");

if (!orderButton || !productList) { 
  console.error("Error: Could not find elements with IDs 'order' and 'all-products-i-want'");
  return; 
}

orderButton.addEventListener('click', function() {
  productList.style.display = productList.style.display === 'block' ? 'none' : 'block'; 
});



























  
});


