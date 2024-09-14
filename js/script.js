// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Marcar o link da página atual como ativo
    const links = document.querySelectorAll(".nav-link");
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});
