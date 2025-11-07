document.addEventListener('DOMContentLoaded', () => {
    const whatsappNumber = '67784837';
    const whatsappBaseURL = `https://wa.me/591${whatsappNumber}`;

    // 1. Manejo del menú móvil
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 2. Funcionalidad de WhatsApp para los botones de las Cards
    const cardButtons = document.querySelectorAll('.card-btn');
    cardButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const card = event.target.closest('.service-card');
            const serviceName = card.getAttribute('data-service');
            
            // Mensaje específico para la consulta
            const message = `¡Hola! Me gustaría hacer una consulta de precio sobre el servicio de ${serviceName} que vi en su página web.`;
            
            window.open(`${whatsappBaseURL}?text=${encodeURIComponent(message)}`, '_blank');
        });
    });

    // 3. Funcionalidad de WhatsApp para los botones principales (Hero y Contacto)
    const heroBtn = document.getElementById('whatsapp-hero-btn');
    const contactBtn = document.getElementById('whatsapp-contact-btn');
    
    // Mensaje genérico para el botón principal
    const genericMessage = "Hola, me gustaría agendar una cita o hacer una consulta general. Gracias.";

    if (heroBtn) {
        heroBtn.href = `${whatsappBaseURL}?text=${encodeURIComponent(genericMessage)}`;
    }
    if (contactBtn) {
        contactBtn.href = `${whatsappBaseURL}?text=${encodeURIComponent(genericMessage)}`;
    }
});