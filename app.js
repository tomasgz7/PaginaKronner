


// Seleccionar el formulario
const inform = document.getElementById('inform');

// Agregar el evento para capturar los datos cuando el usuario envíe el formulario
inform.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe de manera predeterminada

    // Obtener los valores de usuario y contraseña
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    
    // Aquí puedes hacer lo que necesites con los datos, como validaciones o enviarlos a un servidor
    console.log('name:', name);
    console.log('email:', email);

    // Ejemplo de validación simple
    if (username === 'admin' && password === '1234') {
        alert('Inicio de sesión exitoso');
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});

