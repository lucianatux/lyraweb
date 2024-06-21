document.addEventListener("DOMContentLoaded", function () {
// EFECTOS RUBROS

const firstElement = document.getElementById('first');
const secondElement = document.getElementById('second');
const firstIcon = firstElement.querySelector('.icon');
const firstText = firstElement.querySelector('.text');
const secondIcon = secondElement.querySelector('.icon');
const secondText = secondElement.querySelector('.text');

// Mostrar primer texto e icono
setTimeout(() => {
    firstElement.style.opacity = 1;
}, 0);

// Desaparecer primer texto y mover el primer icono
setTimeout(() => {
    firstText.classList.add('hidden-text');
    firstElement.style.opacity = 0;
    setTimeout(() => {
        firstElement.style.opacity = 1;
        firstElement.classList.add('moved');
    }, 1000);
}, 2000);

// Mostrar segundo texto e icono
setTimeout(() => {
    secondElement.style.opacity = 1;
}, 4000);

// Desaparecer segundo texto y mover el segundo icono
setTimeout(() => {
    secondText.classList.add('hidden-text');
    secondElement.style.opacity = 0;
    setTimeout(() => {
        secondElement.style.opacity = 1;
        secondElement.classList.add('moved');
    }, 1000);
}, 6000);



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










  
});


