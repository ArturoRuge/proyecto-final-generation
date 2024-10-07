document.getElementById('infoForm').addEventListener('submit', function (e) {
    e.preventDefault(); // previenen el formulario se envíe
  
    const nombre = document.getElementById('nameInput').value;
    const telefono = document.getElementById('numeroTel').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('password2').value;
    const errorMessage = document.getElementById('errorMessage');
    let errors = [];
  
    errorMessage.innerHTML = '';
  
    // Para el nombre 
    if (nombre.trim() === '') {
      errors.push('El nombre es requerido.');
    }
  
    // Validar que tenga 10 digitos
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(telefono)) {
      errors.push('El número de teléfono debe tener 10 dígitos.');
    }
  
    // Correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.push('El correo electrónico no es válido.');
    }
  
    // Contraseñas coincidn
    if (password === '') {
      errors.push('La contraseña es requerida.');
    } else if (password !== confirmPassword) {
      errors.push('Las contraseñas no coinciden.');
    }
  
    // Mostrar errores
    if (errors.length > 0) {
      errorMessage.innerHTML = errors.join('<br>');
    } else {
      // cuando no hay errores crear el objeto JSON del usuario
    const nuevoUsuario = {
        nombre: nombre,
        telefono: telefono,
        email: email,
        password: password
      };
  
      // Almacenar en localStorage
      localStorage.setItem('usuario', JSON.stringify(nuevoUsuario));

      alert('Usuario registrado exitosamente');
      //Resetea el formulario
      document.getElementById('infoForm').reset();
    }
  });
  