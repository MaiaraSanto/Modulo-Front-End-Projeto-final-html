document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.contact__form');
    const nameInput = form.querySelector('input[name="name"]');
    const emailInput = form.querySelector('input[name="email"]');
    const messageInput = form.querySelector('textarea[name="message"]');
    const nameMessage = form.querySelector('.name-message');
    const emailMessage = form.querySelector('.email-message');
    const messageMessage = form.querySelector('.message-message');
    const formMessage = document.createElement('div');
    formMessage.classList.add('message');
    form.appendChild(formMessage);

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Limpar mensagens de erro anteriores
        clearMessages();

        $(document).ready(function(){
            $('#contact-form').submit(function(event){
              event.preventDefault(); // Impede o envio padrão do formulário
          
              // Validação dos campos
              var nome = $('#nome').val();
              var email = $('#email').val();
              var mensagem = $('#mensagem').val();
          
              if(nome === '' || email === '' || mensagem === '') {
                alert('Por favor, preencha todos os campos.');
                return;
              }
          
            });
          });

        // Verificar se os campos estão preenchidos corretamente
        let valid = true;
        if (nameInput.value.trim() === '') {
            showError(nameMessage, 'Por favor, preencha o campo Nome.');
            valid = false;
        }
        if (emailInput.value.trim() === '' || !validateEmail(emailInput.value.trim())) {
            showError(emailMessage, 'Por favor, insira um email válido.');
            valid = false;
        }
        if (messageInput.value.trim() === '') {
            showError(messageMessage, 'Por favor, preencha o campo Mensagem.');
            valid = false;
        }

        if (valid) {
            showSuccess(formMessage, 'FORMULÁRIO ENVIADO COM SUCESSO!');
            console.log('Nome:', nameInput.value);
            console.log('Email:', emailInput.value);
            console.log('Mensagem:', messageInput.value);

            
        } else {
            // Exibir mensagem de erro ao enviar o formulário
            showError(formMessage, 'Falha ao enviar o formulário.');
        }
    });

    // Função para validar o formato do email
    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    // Função para exibir mensagem de erro
    function showError(element, message) {
        element.textContent = message;
        element.classList.remove('success');
        element.classList.add('error');
    }

    // Função para exibir mensagem de sucesso
    function showSuccess(element, message) {
        element.textContent = message;
        element.classList.remove('error');
        element.classList.add('success');
    }

    // Função para limpar todas as mensagens
    function clearMessages() {
        nameMessage.textContent = '';
        emailMessage.textContent = '';
        messageMessage.textContent = '';
        formMessage.textContent = '';
    }
});
