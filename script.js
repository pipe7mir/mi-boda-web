document.addEventListener('DOMContentLoaded', () => {
    console.log("✅ El script principal ha cargado correctamente.");

    // --- 1. CONFIGURACIÓN DEL MENÚ ---
    const hamburger = document.getElementById('menu-hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            console.log("📱 Click detectado en el botón hamburguesa");
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('is-active');
        });

        // Cerrar menú al hacer clic en un enlace
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('is-active');
            });
        });
    } else {
        console.error("❌ Error: No se encontró el ID 'menu-hamburger' o 'nav-links' en el HTML.");
    }

    // --- 2. CUENTA REGRESIVA ---
    const fechaBoda = new Date("March 6, 2026 15:30:00").getTime();
    
    // Referencias a los IDs exactos del HTML
    const elDias = document.getElementById("dias");
    const elHoras = document.getElementById("horas");
    const elMinutos = document.getElementById("minutos");
    const elSegundos = document.getElementById("segundos");

    if (elDias && elHoras && elMinutos && elSegundos) {
        const actualizarContador = setInterval(() => {
            const ahora = new Date().getTime();
            const distancia = fechaBoda - ahora;

            if (distancia < 0) {
                clearInterval(actualizarContador);
                const container = document.getElementById("cuenta-regresiva");
                if (container) container.innerHTML = "<h3>¡ES HOY EL GRAN DÍA!</h3>";
                return;
            }

            const d = Math.floor(distancia / (1000 * 60 * 60 * 24));
            const h = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const m = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((distancia % (1000 * 60)) / 1000);

            elDias.innerText = String(d).padStart(2, '0');
            elHoras.innerText = String(h).padStart(2, '0');
            elMinutos.innerText = String(m).padStart(2, '0');
            elSegundos.innerText = String(s).padStart(2, '0');
        }, 1000);
    } else {
        console.warn("⚠️ Advertencia: No se encontraron los IDs del contador (dias, horas, minutos o segundos).");
    }
});