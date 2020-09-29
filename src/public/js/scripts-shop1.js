const btnSwitch = document.querySelector("#dark-mode");

btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnSwitch.classList.toggle("active");
  footer.classList.toggle("bg-dark");
  mainNav.classList.toggle("bg-dark");
  //document.querySelectorAll('navlink').toggle("bg-dark");
  if (document.body.classList.contains("dark")) {
    mainNav.classList.remove("navbar-scrolled");
  } else {
    mainNav.classList.add("navbar-scrolled");
  }

  // Guardamos el local storage.
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark-mode", "true");
  } else {
    localStorage.setItem("dark-mode", "false");
  }
});

// Obtenemos el modo actual del local storage.
if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark");
  btnSwitch.classList.add("active");
  footer.classList.add("bg-dark");
  $("#mainNav").addClass("bg-dark");
  $("#mainNav").removeClass("navbar-scrolled");
  //$("#navlink").addClass("bg-dark");
} else {
  document.body.classList.remove("dark");
  btnSwitch.classList.remove("active");
  footer.classList.remove("bg.light");
  $("#mainNav").removeClass("bg-dark");
  $("#mainNav").addClass("navbar-scrolled");
  //$("#navlink").removeClass("bg-dark");
}
//
const grid = new Muuri('.grid', {
    layout: {
      rounding: false
    }
});

window.addEventListener('load', () => {
  //Animacion inicial y delay inicial.
  grid.refreshItems().layout();
  document.getElementById('grid').classList.add('imagenes-cargadas');

// Listeners de los enlaces de filtrados de categoria.
  const enlaces = document.querySelectorAll('#categorias a');
  enlaces.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
      evento.preventDefault();
      enlaces.forEach((enlace) => enlace.classList.remove('activo-c'));
      evento.target.classList.add('activo-c');

      const categoria = evento.target.innerHTML.toLowerCase();
      categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);
    });
  });
  // Barra de busqueda
  document.querySelector('#barra-busqueda').addEventListener('input', () => {
    const busqueda = event.target.value;
    grid.filter( (card) => card.getElement().dataset.etiquetas.includes(busqueda) );
  });
});

// Contacto emergente.
const overlay = document.querySelector("#overlay");
// Mostrar overlay.
overlay.addEventListener("click", () => {
  overlay1.classList.add("activo");
  document.body.classList.add("overflow");
});
// Ocultar overlay.
document.querySelector('#btn-cerrar-popup').addEventListener('click', () => {
  overlay1.classList.remove("activo");
  document.body.classList.remove("overflow");
});

(function ($) {
  "use strict"; // Indicador de uso estricto

  // Desplazamiento suave del scroll usando jquery
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 72,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#mainNav",
    offset: 75,
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if (document.body.classList.contains("dark")) {
      $("mainNav").removeClass("navbar-scrolled");
    }else {
      $("#mainNav").addClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Magnific popup calls
})(jQuery); // Fin del indicador de uso estricto
