document.addEventListener("DOMContentLoaded", () => {
    
    /* FORMULARIO DE CONTACTO */
    const formulario = document.getElementById("formulario-contacto");

    if (formulario) {
        formulario.addEventListener("submit", function(evento) {
            
            evento.preventDefault();

            const valorNombre = document.getElementById("nombre").value.trim();
            const valorEmail = document.getElementById("email").value.trim();
            const valorMensaje = document.getElementById("mensaje").value.trim();

            /* Validación requerida) */

            if (valorNombre === "" || valorEmail === "" || valorMensaje === "") {
                alert("Por favor, rellena todos los campos antes de enviar.");
            } else {
                alert(`¡Mensaje enviado con éxito!\n\nGracias, ${valorNombre}. Te responderemos pronto a tu correo: ${valorEmail}.`);

                formulario.reset();
            }
        });
    }

    /* BOTÓN AÑADIR AL CARRITO */
    
    const btnComprar = document.getElementById("btn-comprar");

    if (btnComprar) {
        btnComprar.addEventListener("click", () => {
            alert("¡Excelente elección! \n\nEl DENON SC-6000 ha sido añadido a tu carrito correctamente.");
        });
    }

});