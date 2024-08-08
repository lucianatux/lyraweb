document.addEventListener("DOMContentLoaded", function () {
  const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
  const orderButton = document.getElementById("order");
  const productList = document.getElementById("my-order");
  const allProducts = document.getElementById("all-products-i-want");
  const message = document.getElementById("message-order-list");

  //ACCESO DIRECTO SIN SCROLL A LAS SECCIONES DEL MENU
  document.querySelectorAll("#menu a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent the default anchor click behavior

      const targetId = this.getAttribute("href").substring(1); // Get the target section id
      const targetSection = document.getElementById(targetId); // Get the target section element

      targetSection.scrollIntoView({ behavior: "instant" }); // Instantly scroll to the target section
    });
  });

  //LISTA DE "MI PEDIDO"
  storedProducts.forEach((productText) => {
    // Crear un contenedor para el producto seleccionado con botón de eliminación
    const productContainer = document.createElement("div");
    productContainer.className = "product-container";
    productContainer.textContent = productText;

    // Crear un botón de eliminación
    const removeButton = document.createElement("button");
    removeButton.textContent = "🗑️";
    removeButton.className = "remove-btn";
    removeButton.title = "Eliminar";
    removeButton.addEventListener("click", function () {
      // Remover la visualización del producto
      productContainer.remove();
      // Actualizar el localStorage
      let updatedProducts = JSON.parse(localStorage.getItem("products")) || [];
      updatedProducts = updatedProducts.filter((item) => item !== productText);
      localStorage.setItem("products", JSON.stringify(updatedProducts));
    });

    // Añadir el botón de eliminación al contenedor del producto
    productContainer.appendChild(removeButton);

    // Agregar el contenedor del producto al contenedor de todos los productos
    document
      .getElementById("all-products-i-want")
      .appendChild(productContainer);
  });

  // CARRUSEL RESPONSIVE
  if (window.innerWidth <= 868) {
    // Selecciona todos los carruseles que tienen un id que empieza con "carouselFade"
    var carousels = document.querySelectorAll('[id^="carouselFade"]');

    carousels.forEach(function (carousel) {
      var carouselInner = carousel.querySelector(".carousel-inner");
      var slides = carousel.querySelectorAll(".carousel-item");

      slides.forEach(function (slide) {
        var secondImgAndText = slide.querySelector(".img-and-text.second");
        if (secondImgAndText) {
          // Crear una nueva slide
          var newSlide = document.createElement("div");
          newSlide.classList.add("carousel-item");

          // Crear un nuevo contenedor para la imagen y descripción
          var newSlides = document.createElement("div");
          newSlides.classList.add("slides");

          // Clonar el segundo conjunto de imagen y descripción
          var clonedSecondImgAndText = secondImgAndText.cloneNode(true);
          clonedSecondImgAndText.classList.remove("second");
          clonedSecondImgAndText.classList.add("first");

          // Agregar el conjunto clonado al nuevo contenedor
          newSlides.appendChild(clonedSecondImgAndText);

          // Agregar el nuevo contenedor a la nueva slide
          newSlide.appendChild(newSlides);

          // Agregar la nueva slide al carrusel
          carouselInner.appendChild(newSlide);
        }
      });
    });
  }

  // AGREGAR AL PEDIDO
  document.querySelectorAll(".want-btn").forEach((button) => {
    button.addEventListener("click", function () {
      // Limpiar mensaje
      message.textContent = "";

      const parentElement = this.parentElement; // Contenedor 'p' que contiene inputs y botón

      // Verificar si el contenedor tiene inputs
      const typeInput = parentElement.querySelector(".type-product");
      const quantityInput = parentElement.querySelector(".number-product");

      // Si existen inputs, verificar si están vacíos
      if (typeInput && quantityInput) {
        if (!typeInput.value.trim() || !quantityInput.value.trim()) {
          alert("Por favor, completa los campos antes de agregar el producto.");
          return; // Salir de la función si no están completos
        }
      }

      // Obtener el texto del contenedor actual
      let productText = parentElement.textContent
        .replace("Agregar al pedido", "")
        .trim();

      let color = typeInput ? typeInput.value.trim() : "";
      let quantity = quantityInput ? quantityInput.value.trim() : "";

      // Formatear el texto del producto
      const productDetails =
        color || quantity
          ? `${productText}${color ? ` ${color}` : ""}${
              quantity ? ` cantidad: ${quantity}` : ""
            }`
          : productText;

      console.log("Producto a agregar:", productDetails); // Verifica en la consola si se obtiene el texto correcto

      // Guardar el producto en localStorage
      let products = JSON.parse(localStorage.getItem("products")) || [];
      products.push(productDetails);
      localStorage.setItem("products", JSON.stringify(products));

      // Crear un nuevo input oculto para enviar el nombre del producto
      const hiddenInput = document.createElement("input");
      hiddenInput.type = "hidden";
      hiddenInput.name = "products[]"; // Array de productos
      hiddenInput.value = productDetails;
      document.getElementById("order-form").appendChild(hiddenInput);

      // Crear un contenedor para el producto seleccionado con botón de eliminación
      const productContainer = document.createElement("div");
      productContainer.className = "product-container";
      productContainer.textContent = productDetails;

      // Crear un botón de eliminación
      const removeButton = document.createElement("button");
      removeButton.textContent = "🗑️";
      removeButton.className = "remove-btn";
      removeButton.title = "Eliminar";
      removeButton.addEventListener("click", function () {
        // Remover el input oculto correspondiente
        hiddenInput.remove();
        // Remover la visualización del producto
        productContainer.remove();
        // Actualizar el localStorage
        let updatedProducts =
          JSON.parse(localStorage.getItem("products")) || [];
        updatedProducts = updatedProducts.filter(
          (item) => item !== productDetails
        );
        localStorage.setItem("products", JSON.stringify(updatedProducts));
      });

      // Añadir el botón de eliminación al contenedor del producto
      productContainer.appendChild(removeButton);

      // Agregar el contenedor del producto al contenedor de todos los productos
      const allProductsContainer = document.getElementById(
        "all-products-i-want"
      );
      if (!allProductsContainer) {
        console.error("Error: No se encontró el contenedor de productos.");
        return;
      }
      allProductsContainer.appendChild(productContainer);

      // Justo después de agregar el contenedor del producto al contenedor de todos los productos
      allProductsContainer.appendChild(productContainer);

      // Mostrar el mensaje "Producto añadido"
      const addedMessage = document.createElement("p");
      addedMessage.textContent = "Producto añadido";
      addedMessage.className = "added-message"; // Clase para aplicar estilo
      parentElement.appendChild(addedMessage);

      // Opcional: Ocultar el mensaje después de un tiempo
      setTimeout(() => {
        addedMessage.remove();
      }, 2000); // Eliminar el mensaje después de 2 segundos

      // Reiniciar los inputs si existen
      if (typeInput) typeInput.value = "";
      if (quantityInput) quantityInput.value = "";
    });
  });

  // VER PEDIDO
  if (!orderButton || !productList || !allProducts || !message) {
    console.error(
      "Error: Could not find one or more elements with specified IDs"
    );
    return;
  }

  orderButton.addEventListener("click", function () {
    // Toggle the display of the order list
    const isVisible = productList.style.display === "block";
    productList.style.display = isVisible ? "none" : "block";

    // Modificar el HTML del botón dependiendo del estado
    const orderButtonText = document.getElementById("order-btn-text");
    orderButtonText.innerHTML = isVisible
      ? '<span class="fs-4">📝</span> Mi pedido' // HTML cuando la lista está oculta
      : '<span class="fs-5">📝</span> Ocultar pedido'; // HTML cuando la lista está visible

    // Check if the all-products-i-want div is empty
    if (allProducts.children.length === 0) {
      message.textContent = "Aún no has seleccionado ningún artículo";
    } else {
      message.textContent = "";
    }
  });

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

  document
    .getElementById("formulario-contacto")
    .addEventListener("submit", function () {
      this.reset(); // Reinicia los campos del formulario
    });

  //CARRUSEL CARTERAS Y AFINES CON SELECT
  const select = document.getElementById("carteras-select");
  const galcarteras = document.getElementById("carouselFade5");
  const galbandoleras = document.getElementById("carouselFade6");
  const galmochilas = document.getElementById("carouselFade7");
  const galaccesorios = document.getElementById("carouselFade8");

  galcarteras.style.display = "block";
  galbandoleras.style.display = "none";
  galmochilas.style.display = "none";
  galaccesorios.style.display = "none";

  select.addEventListener("change", function () {
    // Ocultar todas las galerías
    galcarteras.style.display = "none";
    galbandoleras.style.display = "none";
    galmochilas.style.display = "none";
    galaccesorios.style.display = "none";

    // Mostrar la galería seleccionada
    var selectedGallery = document.getElementById(this.value);
    if (selectedGallery) {
      selectedGallery.style.display = "block";
    }
  });
});
