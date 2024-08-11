const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

// Menú
let links = [
    { nombre: "Servicios", linkTexto: "pages/servicios.html" },
    { nombre: "Inicio", linkTexto: "index.html" }
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
  //main
  let servi = [
    {nombre:"Manicuria", img:"imag/manucuria.png",descripcion: "Las extensiones de manicura permiten lucir uñas largas y elegantes sin necesidad de esperar a que crezcan naturalmente. Ofrecemos varios tipos de extensiones, como uñas de gel, acrílicas y esculpidas, adaptadas a tus necesidades y preferencias. El resultado es un acabado impecable y duradero, ideal para cualquier ocasión."},
    {nombre:"Extenciones de pestañas", img:"imag/pestanas.png",descripcion: "Las extensiones de pestañas son la solución perfecta para conseguir una mirada intensa y seductora sin la necesidad de usar máscara de pestañas. Ofrecemos diferentes estilos, desde extensiones clásicas hasta volumen ruso, para que puedas elegir el look que mejor se adapte a ti. Las extensiones son ligeras, cómodas y realzan la belleza natural de tus ojos"},
    {nombre:"depilacion lacer", img:"imag/depi.png",descripcion: "La depilación láser es un método avanzado y eficaz para eliminar el vello no deseado de forma permanente. Utilizando tecnología de última generación, nuestros tratamientos son rápidos, seguros y adecuados para todas las áreas del cuerpo. Disfruta de una piel suave y sin vello durante todo el año con nuestras sesiones personalizadas."},
    {nombre:"Cuidado de la piel", img:"imag/facial.png",descripcion: "El cuidado de la piel es esencial para mantenerla saludable, radiante y juvenil. Ofrecemos una amplia gama de tratamientos faciales, como limpiezas profundas, peelings químicos, luminoterapia y más. Cada tratamiento está diseñado para rejuvenecer tu piel, mejorar su textura y proporcionarte un cutis luminoso y equilibrado"}
  ]
  function tarjetaEstatica() {
    const titulo = document.createElement("h1");
    titulo.textContent = "Bienvenidos a Estética Integral";
    main.appendChild(titulo);
  
    const descripcion = document.createElement("p");
    descripcion.innerHTML = "Bienvenidos a Estética Integral, donde ofrecemos una amplia gama de servicios para cuidar tu belleza.";
    main.appendChild(descripcion);
    let  contenedorTarjetas = document.createElement("div");
    contenedorTarjetas.classList.add("contenedor-tarjetas3");
    main.appendChild(contenedorTarjetas);
  
    servi.forEach((servicio) => {
      const tarjeta = document.createElement("div");
      tarjeta.classList.add("tarjeta");
  
      const imagen = document.createElement("img");
      imagen.src = servicio.img;
      imagen.alt = servicio.nombre;
      tarjeta.appendChild(imagen);
  
      const nombre = document.createElement("h2");
      nombre.textContent = servicio.nombre;
      tarjeta.appendChild(nombre);
  
      const descripcionTarjeta = document.createElement("p");
      descripcionTarjeta.textContent = servicio.descripcion;
      tarjeta.appendChild(descripcionTarjeta);
  
      contenedorTarjetas.appendChild(tarjeta);
    });
  }
  
  tarjetaEstatica();
  
  //footer
  let redes = [
    { nombre: "Instagram", imagenF: "imag/instagram.png" },
    { nombre: "Facebook", imagenF: "imag/facebook.png" },
    { nombre: "WhatsApp", imagenF: "imag/whatsapp.png" }
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
  
  