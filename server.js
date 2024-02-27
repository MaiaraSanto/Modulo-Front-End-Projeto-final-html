document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    var formData = new FormData(this);

    fetch('https://formspree.io/f/mjvnrozo', {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        },
        body: formData
    })
    .then(function(response) {
        if (response.ok) {
            document.getElementById('contact-form').style.display = 'none';
            document.getElementById('confirmation-message').style.display = 'block';
        } else {
            throw new Error('Erro ao enviar o formulário');
        }
    })
    .catch(function(error) {
        console.error('Erro ao enviar a mensagem:', error);
    });
});
