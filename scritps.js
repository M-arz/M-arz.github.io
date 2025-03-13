document.addEventListener("DOMContentLoaded", function() {
    alert("Bienvenido al proyecto de Sara");
    document.getElementById("mensajeEspecial").addEventListener("click", function() {
        alert("Sara, eres la farmacéutica más linda y especial ❤️");
    });
    
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();
        document.getElementById("mensajeExito").classList.remove("oculto");
        setTimeout(() => {
            document.getElementById("mensajeExito").classList.add("oculto");
        }, 3000);
        this.reset();
    });
});
