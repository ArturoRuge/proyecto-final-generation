document.getElementById('infoForm').addEventListener('submit', function (e) {
    e.preventDefault(); // previenen el formulario se envíe
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    let errors = [];
  
    errorMessage.innerHTML = '';
  
    // Correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.push('El correo electrónico no es válido.');
    }
  
    // Contraseñas coincidn
    if (password === '') {
      errors.push('La contraseña es requerida.');
    }
  
    // Mostrar errores
    if (errors.length > 0) {
      errorMessage.innerHTML = errors.join('<br>');
    } else {
      // cuando no hay errores crear el objeto JSON del usuario
        console.log("Todo bien!!");
// Obtener el array de usuarios desde el localStorage
const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

// Verificar si existe algún usuario con el mismo email y contraseña
const usuarioEncontrado = usuarios.find(usuario => usuario.email === email && password === atob(usuario.password)); // Comparar con la contraseña decodificada

  if (usuarioEncontrado) {
    //Almacena al usuario logueado
    localStorage.setItem('usuarioLogeado', email.split('@')[0]);

      // Si el usuario es administrador
      if (email === 'admin@chasisfactory.com') {
        alert('Bienvenido, Administrador');
        
        // Redirigir a la página del administrador
        window.location.href = 'ingresarProducto.html';

      } else {
        // Si es un usuario común
        alert(`Bienvenido, ${email.split('@')[0]}`);
        
        // Redirigir a la página de inicio
        window.location.href = 'carrito-compra.html';
      }

  } else {
    // Si el usuario no está almacenado en localStorage
    errorMessage.innerText = 'Nombre de usuario y contraseña no válidos';
  }






      };

      //Resetea el formulario
      document.getElementById('infoForm').reset();
  });
