document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('show');
});

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
