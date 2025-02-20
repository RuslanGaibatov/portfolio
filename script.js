document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Danke für deine Nachricht! Ich werde mich bald bei dir melden.");
        // Hier könntest du die Formulardaten an einen Server senden
        document.getElementById("contact-form").reset();
    } else {
        alert("Bitte fülle alle Felder aus.");
    }
});
