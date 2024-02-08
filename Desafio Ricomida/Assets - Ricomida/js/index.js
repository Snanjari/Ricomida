$(document).ready(function(){
    // Evento click para el botón "Enviar por correo"
    $("#enviarCorreo").click(function(){
        alert("El correo fue enviado correctamente...");
    });

    // Evento doble click para los títulos "INGREDIENTES" y "PREPARACIÓN"
    $(".titulo-ingred-preparacion").dblclick(function(){
        $(this).css("color", "#dc3545");
    });

    // Evento click para mostrar/ocultar contenido en las tarjetas "card"
    $(".card-title").click(function(){
        $(this).siblings(".card-text").toggle();
    });
    
    const tooltipTriggerList = document.querySelectorAll(
        '[data-bs-toggle="tooltip"]'
      );
      const tooltipList = [...tooltipTriggerList].map(
        (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
      );
      
});