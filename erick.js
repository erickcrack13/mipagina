// Animación de aparición en elementos
document.addEventListener("DOMContentLoaded", function () {
    const elementos = document.querySelectorAll(".fade-in");
    elementos.forEach((el) => {
        el.style.opacity = "0";
        setTimeout(() => {
            el.style.transition = "opacity 1.5s ease-in-out";
            el.style.opacity = "1";
        }, 500);
    });
});

// Efectos hover en botones
document.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("mouseover", () => {
        btn.style.transform = "scale(1.1)";
        btn.style.transition = "0.3s";
    });
    btn.addEventListener("mouseout", () => {
        btn.style.transform = "scale(1)";
    });
});

// Modo oscuro / claro
document.getElementById("modo").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

// Validación de formulario de contacto
document.querySelector("form").addEventListener("submit", function (event) {
    const email = document.querySelector("input[type='email']").value;
    if (!email.includes("@")) {
        alert("Por favor, ingresa un correo válido.");
        event.preventDefault();
    }
});

// Carrusel de imágenes automático
let index = 0;
const imagenes = document.querySelectorAll(".slide img");

function cambiarImagen() {
    imagenes.forEach((img) => (img.style.display = "none"));
    index = (index + 1) % imagenes.length;
    imagenes[index].style.display = "block";
}

setInterval(cambiarImagen, 3000);
// Desplazamiento suave para los enlaces del menú
document.querySelectorAll('nav a[href^="#"]').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute('href'));
        if (destino) {
            destino.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Animación simple al mostrar secciones al hacer scroll
const secciones = document.querySelectorAll('.section');
const mostrarSeccion = () => {
    secciones.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            sec.classList.add('visible');
        }
    });
};
window.addEventListener('scroll', mostrarSeccion);
window.addEventListener('DOMContentLoaded', mostrarSeccion);

// Mensaje de confirmación al enviar el formulario de contacto
const formulario = document.querySelector('form');
if (formulario) {
    formulario.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('¡Gracias por tu mensaje! Pronto me pondré en contacto contigo.');
        formulario.reset();
    });
}