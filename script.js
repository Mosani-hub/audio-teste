// Garantir que o DOM esteja completamente carregado antes de adicionar o evento
document.addEventListener("DOMContentLoaded", function() {
    // Selecionar o envelope corretamente
    const envelope = document.querySelector('.envelope');

    // Verifique se o envelope foi encontrado para evitar erros
    if (envelope) {
        // Adicionar evento de clique para abrir o envelope
        envelope.addEventListener('click', function() {
            this.classList.toggle('open');
        });
    } else {
        console.error("Elemento '.envelope' não encontrado.");
    }
});
