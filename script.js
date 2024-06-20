document.addEventListener('DOMContentLoaded', function() {
    const briseida = document.getElementById('briseida');

    briseida.addEventListener('mouseover', function() {
        briseida.style.transform = 'translateX(300px)';
    });

    briseida.addEventListener('transitionend', function() {
        if (briseida.style.transform === 'translateX(300px)') {
            briseida.style.transition = 'none';
            briseida.style.transform = 'translateX(0)';
            briseida.style.opacity = '1';

            // Forzar un reflujo para que el cambio de estilo se aplique inmediatamente
            briseida.offsetHeight;

            briseida.style.transition = 'transform 1s linear, opacity 0.5s linear';
        }
    });
});
