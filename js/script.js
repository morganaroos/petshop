document.addEventListener("DOMContentLoaded", function() {
    // Obtém o caminho da URL atual
    const currentLocation = window.location.pathname;

    // Seleciona todos os links de navegação
    const menuItems = document.querySelectorAll('.nav-link');

    // Itera sobre cada link de navegação
    menuItems.forEach(item => {
        // Verifica se o href do link corresponde ao caminho atual da página
        if (item.getAttribute('href') === currentLocation) {
            // Adiciona a classe "active" ao link correspondente
            item.classList.add('active');
        }
    });
});
