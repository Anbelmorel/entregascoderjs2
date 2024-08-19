let header = document.querySelector("header");
let main = document.querySelector("main");
let footer = document.querySelector("footer");

// Menú
let links = [
  { nombre: "Inicio", linkTexto: "../index.html" },
  { nombre: "Servicios", linkTexto: "servicios.html" }
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


// main

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

let contmani = document.getElementById("cont-manic");
let contpest = document.getElementById("cont-pest");
let contdepi = document.getElementById("cont-depi");
let contfacial = document.getElementById("cont-facial");



function crearTarjetas(servicios, contenedor, turnosDisponibles) {
  servicios.forEach((servicio) => {
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta2");
    if (servicio.img) {
      let imagen = document.createElement("img");
      imagen.src = servicio.img;
      imagen.alt = servicio.nombre;
      tarjeta.appendChild(imagen);
    }
    let subtitulo = document.createElement("h3");
    subtitulo.textContent = servicio.nombre;
    tarjeta.appendChild(subtitulo);
    let precio = document.createElement("p");
    precio.textContent = `$${servicio.precio}`;
    tarjeta.appendChild(precio);
    if (servicio.descripcion) {
      let descripcion = document.createElement("p");
      descripcion.textContent = servicio.descripcion;
      tarjeta.appendChild(descripcion);
    }
    let boton = document.createElement("button");
    boton.textContent = "reservar";
    boton.addEventListener("click", ()=> {
      console.log("aca estoy")
      turnero.style.display = "block";
      mostrarTurnero(servicio , turnero , turnosDisponibles)
      
    });
    tarjeta.appendChild(boton);
    contenedor.appendChild(tarjeta);
    let turnero = document.createElement("div");
    turnero.classList.add("turnos");
    tarjeta.appendChild(turnero);
    
  });
}

/**/ 
let turnosmani = [
  {dia : "martes 20/08", hora: "9:00 hs"},
  {dia : "martes 27/08", hora: "9:00 hs"},
  {dia : "jueves 22/08", hora: "19:00 hs"},
  {dia : "jueves 29/08", hora: "16:00 hs"},
  {dia : "martes 27/08", hora: "12:00 hs"}
]
let turnopest = [
  {dia: "lunes 19/08", hora: "16:00 hs"},
  {dia: "lunes 19/08", hora: "19:00 hs"},
  {dia: "miercoles 21/08", hora: "15:00hs"},
  {dia: "miercoles 21/08", hora: "10:00 hs"},
  {dia: "lunes 26/08", hora: "10:00hs"},
  {dia: "miercoles 27/08", hora: "15:00hs"}
]
let turnodepi = [
  {dia: "lunes 19/08", hora: "13:00 hs"},
  {dia: "miercoles 21/08", hora: "16:00 hs"},
  {dia: "jueves 22/08", hora: "19:00 hs"},
  {dia: "viernes 23/08", hora: "15:00 hs"},
  {dia: "sabado 24/08", hora: "8:00 hs"},
  {dia: "martes 27/08", hora: "18:00 hs"}
]
let turnofacial = [
  {dia: "viernes 23/08", hora: "16:00 hs"},
  {dia: "martes 27/08", hora: "15:00 hs"},
  {dia: "jueves 29/08", hora: "12:00 hs"},
  {dia: "martes 27/08", hora: "10:00 hs"},
  {dia: "viernes 30/08", hora: "19:00 hs"},
  {dia: "viernes 23/08", hora: "16:00 hs"}
]


function mostrarTurnero(servicio, turnero, turnosDisponibles) {
  if (turnosDisponibles && Array.isArray(turnosDisponibles)) {
    let texto = document.createElement("p");
    texto.textContent = "Turnos disponibles para " + servicio.nombre;
    turnero.appendChild(texto);

    let select = document.createElement("select");
    turnero.appendChild(select);

    turnosDisponibles.forEach((turno) => {
      let opcion = document.createElement("option");
      opcion.textContent = `${turno.dia} ${turno.hora}`;
      select.appendChild(opcion);
    });

    let botonConfirmar = document.createElement("button");
    botonConfirmar.textContent = "Confirmar";

    let contenedorTurnoSeleccionado = document.createElement("div");
    contenedorTurnoSeleccionado.classList.add("contenedor-turno-seleccionado");
    turnero.appendChild(contenedorTurnoSeleccionado);

    botonConfirmar.addEventListener("click", function() {
      let turnoSeleccionado = select.value;

      let servicioSeleccionado = {
        nombre: servicio.nombre, 
        precio: servicio.precio,
        turno: turnoSeleccionado
      };

      let serviciosSeleccionados = JSON.parse(sessionStorage.getItem('serviciosSeleccionados')) || [];
      serviciosSeleccionados.push(servicioSeleccionado);
      sessionStorage.setItem('serviciosSeleccionados', JSON.stringify(serviciosSeleccionados));

      contenedorTurnoSeleccionado.textContent = `Servicio: ${servicio.nombre} | Turno: ${turnoSeleccionado}`;

      mostrarCarrito();
    });

    turnero.appendChild(botonConfirmar);
    contenedor.appendChild(turnero); 
  } else {
    console.log("turnosDisponibles es undefined o no es un array");
  }
  return turnero;
}

function mostrarCarrito() {
  let carritoContenedor = document.querySelector('.contenedor-carrito');
  

  let carrito = document.createElement("div");
  carrito.classList.add("carrito");

  let titulo = document.createElement("h2");
  titulo.textContent = "Carrito de Compras";
  carrito.appendChild(titulo);

  
  let serviciosSeleccionados = JSON.parse(sessionStorage.getItem('serviciosSeleccionados')) || [];

  let total = 0;

  serviciosSeleccionados.forEach(servicio => {
    let item = document.createElement("p");
    item.textContent = `Servicio: ${servicio.nombre} | Turno: ${servicio.turno} | Precio: $${servicio.precio}`;
    carrito.appendChild(item);
    total += parseInt(servicio.precio); 
  });


  let totalElement = document.createElement("p");
  totalElement.textContent = `Total: $${total}`;
  carrito.appendChild(totalElement);

 
  let metodoPago = sessionStorage.getItem('metodoPago') || "No seleccionado";
  let pago = document.createElement("p");
  pago.textContent = `Método de Pago: ${metodoPago}`;
  carrito.appendChild(pago);

  
  let metodoPagoContenedor = document.createElement("div");
  metodoPagoContenedor.classList.add("metodo-pago");

  let opcionesPago = ["Efectivo", "Tarjeta", "Transferencia"];
  opcionesPago.forEach(opcion => {
    let label = document.createElement("label");
    label.textContent = opcion;

    let radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "metodoPago";
    radio.value = opcion;
    if (metodoPago === opcion) {
      radio.checked = true;
    }

    label.appendChild(radio);
    metodoPagoContenedor.appendChild(label);
  });

  carrito.appendChild(metodoPagoContenedor);

  
  let botonConfirmar = document.createElement("button");
  botonConfirmar.textContent = "Confirmar Compra";
  botonConfirmar.classList.add("boton-confirmar")
  botonConfirmar.addEventListener("click", function() {
    
    let metodoPagoSeleccionado = document.querySelector('input[name="metodoPago"]:checked');
    if (metodoPagoSeleccionado) {
      sessionStorage.setItem('metodoPago', metodoPagoSeleccionado.value);
    } else {
      sessionStorage.setItem('metodoPago', "No seleccionado");
    }

    confirmarCompra();
  });
  carrito.appendChild(botonConfirmar);

  carritoContenedor.appendChild(carrito);
}

function confirmarCompra() {
  alert("Compra confirmada. Gracias por su compra.");

  
  sessionStorage.removeItem('serviciosSeleccionados');
  sessionStorage.removeItem('metodoPago');

  
  let carritoContenedor = document.querySelector('.contenedor-carrito');
  carritoContenedor.innerHTML = "";
}


crearTarjetas(datosunas, contmani, turnosmani);
crearTarjetas(datospest, contpest, turnopest);
crearTarjetas(datosdepi, contdepi, turnodepi);
crearTarjetas(datosfacial, contfacial, turnofacial);



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


