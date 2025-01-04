document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('whatsappButton').addEventListener('click', function() {
        const base_url = "https://api.whatsapp.com/send";
        const phone = "34603122403";  // Número de teléfono del negocio
        const pageUrl = window.location.href;  // URL de la página actual
        const message = `Hola, me gustaría agendar una cita. Por favor, indíquenme la disponibilidad y los pasos a seguir. ¡Gracias! Más información: ${pageUrl}`;

        // Generar la URL codificada
        const url = `${base_url}?phone=${phone}&text=${encodeURIComponent(message)}`;
        
        // Abrir WhatsApp en una nueva pestaña
        window.open(url, '_blank');
    });
});
