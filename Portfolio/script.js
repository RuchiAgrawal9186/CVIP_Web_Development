document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('nav a');
    const mobileMenuToggle = document.getElementById('mobile-menu');
    const nav = document.querySelector('nav');

    mobileMenuToggle.addEventListener('click', function () {
        nav.classList.toggle('show');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });

            if (nav.classList.contains('show')) {
                nav.classList.remove('show');
            }
        });
    });
});