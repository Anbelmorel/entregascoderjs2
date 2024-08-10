const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

// Menú
let links = [
  { nombre: "Servicios", linkTexto: "servicios.html" },
  { nombre: "Inicio", linkTexto: "../index.html" }
];
let menu= crearMenu(links);
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


// main
/*titulo*/ 
let titulo = document.createElement("h1");
titulo.textContent = "selecciona tu servicio"
main.appendChild(titulo);
/*tarjetas  */
let serviunas = `[
  { "nombre": "semipermanente", "precio": "5000", "img": "../imag/semipermanente.png", "descripcion": "Esmalte que dura más que el tradicional, proporcionando un acabado brillante y resistente por hasta dos semanas sin descascararse" },
  { "nombre": "capping", "precio": "7000", "img": "../imag/capping.png", "descripcion": "Técnica que consiste en reforzar las uñas naturales con una capa de gel o acrílico, sin añadir longitud, ideal para fortalecer y proteger las uñas" },
  { "nombre": "esculpidas", "precio": "14000", "img": "../imag/esculpida.png", "descripcion": "Extensión de uñas que se moldea y construye directamente sobre la uña natural utilizando gel o acrílico, permitiendo personalizar la forma y longitud según la preferencia del cliente" },
  { "nombre": "sof gel", "precio": "14000", "img": "../imag/sof.png", "descripcion": "Uñas artificiales flexibles y ligeras que se aplican sobre las uñas naturales, proporcionando un look natural con la opción de personalización en color y diseño." }
]`;

let serviciopest = `[
  { "nombre": "lifting", "precio": 5000, "img": "../imag/lifting.png", "descripcion": "Este tratamiento realza y curva tus pestañas naturales, creando un efecto de mayor longitud y volumen sin necesidad de extensiones" },
  { "nombre": "clasicas", "precio": 10000, "img": "../imag/clasicas.png", "descripcion": "Aplicación de una extensión por cada pestaña natural, ideal para un look natural y elegante" },
  { "nombre": "volumen medio", "precio": 12000, "img": "../imag/volumedio.png", "descripcion": "Extensiones de pestañas más densas, donde se aplican varias extensiones por pestaña natural, creando un look más lleno y dramático" },
  { "nombre": "volumen ruso", "precio": 14000, "img": "../imag/volumenruso.jpg", "descripcion": "Técnica avanzada donde se aplican abanicos de 2-6 extensiones finas por pestaña natural, resultando en un look voluminoso pero suave" },
  { "nombre": "efecto cat eyes", "precio": 14000, "img": "../imag/efectcatayes.png", "descripcion": "Extensiones de pestañas que se alargan gradualmente hacia las esquinas exteriores, creando un efecto de ojo rasgado y felino." }
]`;

let servifacial = `[
  { "nombre": "limpieza de cutis", "precio": 6600 },
  { "nombre": "peeling mecanico con punta diamante", "precio": 10200 },
  { "nombre": "peeling quimico", "precio": 7800 },
  { "nombre": "luminoterapia + limpieza facial", "precio": 7000 },
  { "nombre": "limpieza profunda con cauterizacion", "precio": 12300 }
]`;

let servidepi = `[
  { "nombre": "axila pierna entera", "precio": 5000, "categoria": "promos" },
  { "nombre": "bozo + axila", "precio": 5000, "categoria": "promos" },
  { "nombre": "cuerpo entero", "precio": 10000 },
  { "nombre": "pierna entera + cavado", "precio": 7000, "categoria": "promo" },
  { "nombre": "rostro", "precio": 3500 }
]`;

let datosunas = JSON.parse(serviunas);
let datospest = JSON.parse(serviciopest);
let datosdepi = JSON.parse(servidepi);
let datosfacial = JSON.parse(servifacial);

let contenedorTarjetas = document.createElement("div");
contenedorTarjetas.classList.add("contenedor-tarjetas")

function crearTarjeta(servicio) {
  let tarjeta = document.createElement("div");
  tarjeta.classList.add("tarjeta1");

  let imagen = document.createElement("img");
  imagen.src = servicio.img;
  imagen.alt = servicio.nombre;
  tarjeta.appendChild(imagen);

  let titulos = document.createElement("h3");
  titulos.textContent = servicio.nombre;
  tarjeta.appendChild(titulos);

  let precio = document.createElement("p");
  precio.textContent = `$${servicio.precio}`;
  tarjeta.appendChild(precio);

  let descripcion = document.createElement("p");
  descripcion.textContent = servicio.descripcion;
  tarjeta.appendChild(descripcion);

  let boton = document.createElement("button");
  boton.textContent = "Reservar";
  boton.addEventListener("click", (e) => {
    e.preventDefault();
    guardarReserva(servicio);
  });
  tarjeta.appendChild(boton);

  contenedorTarjetas.appendChild(tarjeta);
}

datosunas.forEach((servicio) => {
  crearTarjeta(servicio);
});
datospest.forEach((servicio) => {
  crearTarjeta(servicio);
});

main.appendChild(contenedorTarjetas);
//otras tarjetas 
let contenedorTarjetas2 = document.createElement("div");
contenedorTarjetas2.classList.add("contarjetas")

function crearTarjetas2(servicio2) {
  let tarjeta2 = document.createElement("div");
  tarjeta2.classList.add("tarjeta2");

  let titulos = document.createElement("h3");
  titulos.textContent = servicio2.nombre;
  tarjeta2.appendChild(titulos);

  let precio = document.createElement("p");
  precio.textContent = `$${servicio2.precio}`;
  tarjeta2.appendChild(precio);

  let descripcion = document.createElement("p");
  descripcion.textContent = servicio2.promos;
  tarjeta2.appendChild(descripcion);

  let boton = document.createElement("button");
  boton.textContent = "Reservar";
  boton.addEventListener("click", (e) => {
    e.preventDefault();
    guardarReserva(servicio2);
  });
  tarjeta2.appendChild(boton);

  contenedorTarjetas2.appendChild(tarjeta2);
}
main.appendChild(contenedorTarjetas2);

datosdepi.forEach((servicio2) => {
  crearTarjetas2(servicio2);
});
datosfacial.forEach((servicio2) => {
  crearTarjetas2(servicio2);
});

function guardarReserva(servicio) {
  let serviciosSeleccionados = JSON.parse(localStorage.getItem("servicios-seleccionados")) || [];
  serviciosSeleccionados.push(servicio);
  localStorage.setItem("servicios-seleccionados", JSON.stringify(serviciosSeleccionados));
}

/* turno */
let subtitulo = document.createElement("h2");
subtitulo.textContent= "selecciona tu turno"
main.appendChild(subtitulo);

function  crearFormulario (){
  let formulario = document.createElement('form');
  formulario.setAttribute('id', 'formulario-turno');
  formulario.addEventListener('submit', (e) => {
    e.preventDefault(); 
    
      let  fecha = document.getElementById('fecha').value;
      let  hora = document.getElementById('hora').value;
      let reserva = {fecha,hora};
    
      let reservas = JSON.parse(localStorage.getItem('reservas-turnos')) || [];
      reservas.push(reserva);
      localStorage.setItem('reservas-turnos', JSON.stringify(reservas));
    
      console.log('Reserva guardada:', reserva);
  });

  let labelFecha = document.createElement('label');
  labelFecha.setAttribute('for', 'fecha');
  labelFecha.textContent = 'Selecciona la fecha:';

  let inputFecha = document.createElement('input');
  inputFecha.setAttribute('type', 'date');
  inputFecha.setAttribute('id', 'fecha');
  inputFecha.setAttribute('name', 'fecha');

  let labelHora = document.createElement('label');
  labelHora.setAttribute('for', 'hora');
  labelHora.textContent = 'Selecciona la hora:';

  let inputHora = document.createElement('input');
  inputHora.setAttribute('type', 'time');
  inputHora.setAttribute('id', 'hora');
  inputHora.setAttribute('name', 'hora');
  inputHora.setAttribute('step', '1800'); 


  let boton = document.createElement('button');
  boton.setAttribute('type', 'submit');
  boton.textContent = 'Reservar Turno';

  formulario.appendChild(labelFecha);
  formulario.appendChild(inputFecha);
  formulario.appendChild(labelHora);
  formulario.appendChild(inputHora);
  formulario.appendChild(boton);

  
  main.appendChild(formulario);
}
crearFormulario();
/* pago */
let subtitu = document.createElement("h2");
subtitu.textContent ="seleccione el metodo de pago"
main.appendChild(subtitu);

function tarjetasPago() {
  // Crear el contenedor principal para las tarjetas de pago
  let contenedor = document.createElement('div');
  contenedor.setAttribute('id', 'contenedor-tarjetas');
  main.appendChild(contenedor);

  // Función para crear una tarjeta de pago
  function crearTarjetaPago(metodo, texto) {
      let tarjeta = document.createElement('div');
      tarjeta.classList.add('tarjeta-pago');

      let radio = document.createElement('input');
      radio.setAttribute('type', 'radio');
      radio.setAttribute('id', metodo);
      radio.setAttribute('name', 'metodo-pago');
      radio.setAttribute('value', metodo);

      let label = document.createElement('label');
      label.setAttribute('for', metodo);
      label.textContent = texto;

      tarjeta.appendChild(radio);
      tarjeta.appendChild(label);

      contenedor.appendChild(tarjeta);

      // Evento para guardar la opción seleccionada en localStorage al hacer clic
      radio.addEventListener('click', function() {
          localStorage.setItem('metodo-pago', metodo);
          console.log('Método de pago guardado en localStorage:', metodo);
      });
  }

  // Crear las tarjetas de pago
  crearTarjetaPago('efectivo', 'Pago en Efectivo');
  crearTarjetaPago('tarjeta', 'Pago con Tarjeta de Crédito');
  crearTarjetaPago('transferencia', 'Transferencia Bancaria');

  // Crear el botón "Finalizar"
  let botonFinalizar = document.createElement('button');
  botonFinalizar.classList.add('finalizar-btn');
  botonFinalizar.setAttribute('id', 'finalizar');
  botonFinalizar.textContent = 'Finalizar';
  botonFinalizar.addEventListener("click", mostrarFactura);
  
  contenedor.appendChild(botonFinalizar);

}

tarjetasPago();

//finalizar

let contenedorFactura = document.createElement("div");
contenedorFactura.classList.add("contenedor-factura");
main.appendChild(contenedorFactura);

function mostrarFactura() {
  let serviciosSeleccionados = JSON.parse(localStorage.getItem("servicios-seleccionados"));
  let metodoPago = localStorage.getItem("metodo-pago");

  contenedorFactura.innerHTML = "";

  let titulo = document.createElement("h2");
  titulo.textContent = "Factura";
  contenedorFactura.appendChild(titulo);

  let listaServicios = document.createElement("ul");
  serviciosSeleccionados.forEach((servicio) => {
    let item = document.createElement("li");
    item.textContent = `${servicio.nombre} - $${servicio.precio}`;
    listaServicios.appendChild(item);
  });
  contenedorFactura.appendChild(listaServicios);

  let metodoPagoTexto = document.createElement("p");
  metodoPagoTexto.textContent = `Método de pago: ${metodoPago}`;
  contenedorFactura.appendChild(metodoPagoTexto);

  let total = document.createElement("p");
  total.textContent = `Total: $${serviciosSeleccionados.reduce((acum, servicio) => acum + parseInt(servicio.precio), 0)}`;
  contenedorFactura.appendChild(total);
}
//footer 

let redes = [
  { nombre: "Instagram", imagenF: "../imag/instagram.png" },
  { nombre: "Facebook", imagenF: "../imag/facebook.png" },
  { nombre: "WhatsApp", imagenF: "../imag/whatsapp.png" }
];

function iconos(redes) {
  let conteFooter = document.createElement("div");
  conteFooter.classList.add("contFooter");

  redes.forEach((icono) => {
    let img = document.createElement("img");
    img.src = icono.imagenF;
    img.alt = icono.nombre;
    img.classList.add("imgfooter");
    conteFooter.appendChild(img);
  });

  return conteFooter;
}

let footerIcons = iconos(redes);
footer.appendChild(footerIcons);

let derechos = document.createElement("p");
derechos.textContent = "© 2024 Estética. Todos los derechos reservados.";
footer.appendChild(derechos);


