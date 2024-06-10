document.addEventListener("DOMContentLoaded", function() {
    const confirmButton = document.getElementById("confirm-button");

    confirmButton.addEventListener("click", function() {
        const confirmation = document.querySelector('input[name="confirmation"]:checked').value;
        const name = document.getElementById("name").value;

        // Enviar la información de confirmación al servicio de EmailJS
        emailjs.send("service_l75ekwc", "template_qo97n1m", {
            "from_name": name,
            "message": confirmation
        }).then(function(response) {
            console.log("Correo electrónico enviado:", response);

            // Cambiar el texto del botón a "Hecho!" después de hacer clic en él
            confirmButton.textContent = "Hecho!";

            // Inicializa el reproductor de música
const musicPlayer = document.getElementById('musicPlayer');

// Función para reproducir la música automáticamente al cargar la página
window.addEventListener('load', function() {
    musicPlayer.play();
});

// Opcional: Funciones para controlar el reproductor
function playMusic() {
    musicPlayer.play();
}

function pauseMusic() {
    musicPlayer.pause();
}

function stopMusic() {
    musicPlayer.pause();
    musicPlayer.currentTime = 0;
}

// Event Listeners opcionales para controles personalizados
document.getElementById('playButton').addEventListener('click', playMusic);
document.getElementById('pauseButton').addEventListener('click', pauseMusic);
document.getElementById('stopButton').addEventListener('click', stopMusic);

            // Redirigir a la página principal después de 2 segundos
            setTimeout(function() {
                window.location.href = "pagina-principal.html";
            }, 2000); // Redirige después de 2 segundos (2000 milisegundos)
        }, function(error) {
            console.error("Error al enviar el correo electrónico:", error);
        });
    });
});









