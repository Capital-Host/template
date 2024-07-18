function verificarSenha() {

    const senhaCorreta = "Sup@rte@2024";
    const senhaDigitada = document.getElementById('senha').value;

    if (senhaDigitada === senhaCorreta) {
        // Redireciona para a página de login com sucesso
        window.location.href = "../main/index.html";
    } else {
        // Redireciona para a página de login com erro
        alert("Senha incorreta! Tente novamente.");
        document.getElementById('senha').value = ""; // Limpa o campo de senha
    }
}

function enviarComEnter(event) {
    if (event.key === 'Enter') {
        verificarSenha();
    }
}

function mostrarSenha() {
    const campoSenha = document.getElementById('senha');
    if (campoSenha.type === 'password') {
        campoSenha.type = 'text';
    } else {
        campoSenha.type = 'password';
    }
}
