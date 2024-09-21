onload = () => {
    document.body.classList.remove("container");
  };

document.body.addEventListener('click', function(e) {
    // Crear el elemento corazón
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = '❤️';

    // Posicionarlo donde se hace clic
    heart.style.left = `${e.clientX}px`;
    heart.style.top = `${e.clientY}px`;

    // Añadir el corazón al body
    document.body.appendChild(heart);

    // Remover el corazón después de 3 segundos
    setTimeout(() => {
        heart.remove();
    }, 3000);
});
