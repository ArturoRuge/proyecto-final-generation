document.addEventListener('DOMContentLoaded', () => {
    const usuarioLogeado = localStorage.getItem('usuarioLogeado');
    if (usuarioLogeado == "admin") {
        const adminLink = document.createElement('a');
        adminLink.href = 'ingresarProducto.html';
        adminLink.innerText = 'Ingresar Producto';
        adminLink.classList.add("nav-link");
        document.getElementById('adminOpt').appendChild(adminLink);

        document.getElementById('messageUser').innerText = `¡Hola, ${usuarioLogeado}!`;



    //   const messageElement = document.createElement('p');
    //   messageElement.innerText = `¡Hola, ${usuarioLogeado}!`;
    //   document.getElementById('messageIncluded').appendChild(messageElement);
    } else{
        document.getElementById('messageUser').innerText = `¡Hola, ${usuarioLogeado}!`;

    }
  });