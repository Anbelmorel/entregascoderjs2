// inicios 
let header = document.querySelector("header")
const main = document.querySelector("main");
const footer = document.querySelector("footer");

// Menú
let links = [
  { nombre: "Inicio", linkTexto: "index.html" },
  { nombre: "servicios", linkTexto: "pages/servicios.html" }
];
let menu = crearMenu(links);
function crearMenu(links) {
  let nav = document.createElement("nav");
  let ul = document.createElement("ul");

  links.forEach(link => {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.href = link.linkTexto;
    a.textContent = link.nombre;
    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(ul);
  return nav;
}
header.appendChild(menu);
//main


let servi = `[
  {"nombre":"Manicuria", "img":"imag/manucuria.png","descripcion": "Las extensiones de manicura permiten lucir uñas largas y elegantes sin necesidad de esperar a que crezcan naturalmente. Ofrecemos varios tipos de extensiones, como uñas de gel, acrílicas y esculpidas, adaptadas a tus necesidades y preferencias. El resultado es un acabado impecable y duradero, ideal para cualquier ocasión."},
  {"nombre":"Extenciones de pestañas", "img":"imag/pestanas.png","descripcion": "Las extensiones de pestañas son la solución perfecta para conseguir una mirada intensa y seductora sin la necesidad de usar máscara de pestañas. Ofrecemos diferentes estilos, desde extensiones clásicas hasta volumen ruso, para que puedas elegir el look que mejor se adapte a ti. Las extensiones son ligeras, cómodas y realzan la belleza natural de tus ojos."},
  {"nombre":"Depilacion laser", "img":"imag/depi.png","descripcion": "La depilación láser es un método avanzado y eficaz para eliminar el vello no deseado de forma permanente. Utilizando tecnología de última generación, nuestros tratamientos son rápidos, seguros y adecuados para todas las áreas del cuerpo. Disfruta de una piel suave y sin vello durante todo el año con nuestras sesiones personalizadas."},
  {"nombre":"Cuidado de la piel", "img":"imag/facial.png","descripcion": "El cuidado de la piel es esencial para mantenerla saludable, radiante y juvenil. Ofrecemos una amplia gama de tratamientos faciales, como limpiezas profundas, peelings químicos, luminoterapia y más. Cada tratamiento está diseñado para rejuvenecer tu piel, mejorar su textura y proporcionarte un cutis luminoso y equilibrado."}
]`;

let datoServi = JSON.parse(servi);

function tarjetaEstatica(servi) {
  let carrucel = document.getElementById("carrusel");
  main.appendChild(carrucel);

  let tarjeta = document.createElement("div");
  tarjeta.classList.add("tarjeta");

  let imagen = document.createElement("img");
  imagen.src = servi.img;
  imagen.alt = servi.nombre;
  tarjeta.appendChild(imagen);

  let nombre = document.createElement("h3");
  nombre.textContent = servi.nombre;
  tarjeta.appendChild(nombre);

  let descripcionTarjeta = document.createElement("p");
  descripcionTarjeta.textContent = servi.descripcion;
  tarjeta.appendChild(descripcionTarjeta);

  carrucel.appendChild(tarjeta);
}

datoServi.forEach((servi) => {
  tarjetaEstatica(servi);
});
//footer
let redes = `[
  { "nombre": "Instagram","imag": "imag/instagram.png" },
  { "nombre": "Facebook", "imag":"imag/facebook.png" },
  { "nombre": "WhatsApp", "imag":"imag/whatsapp.png" }
]`;

let datoRedes = JSON.parse(redes);

function iconos() {
  let conteFooter = document.createElement("div");
  conteFooter.classList.add("contFooter");

  datoRedes.forEach((icono) => {
    let imagen = document.createElement("img");
    imagen.src = icono.imag;
    imagen.alt = icono.nombre;
    imagen.classList.add("imgfooter");
    conteFooter.appendChild(imagen);
  });

  return conteFooter;
}


let footerIcons = iconos(datoRedes);
footer.appendChild(footerIcons);

let derechos = document.createElement("p");
derechos.textContent = "© 2024 Estética. Todos los derechos reservados.";
footer.appendChild(derechos);

