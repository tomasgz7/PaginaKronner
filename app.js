// Seleccionar el formulario
const inform = document.getElementById("inform");

// Escuchar el evento de envío del formulario
inform.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

  // Capturar los valores de los campos del formulario
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  // Crear el objeto con los datos del formulario
  const formData = {
    name: name,
    email: email,
    phone: phone,
    message: message,
  };
  // Verifica que los datos estén correctos
  console.log("Datos a enviar:", formData);

  // Enviar los datos al backend utilizando fetch
  fetch("http://localhost:3000/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Éxito:", data);

      // Mostrar el mensaje de éxito
      const successMessage = document.getElementById("success-message");
      successMessage.classList.remove("hidden");
      successMessage.classList.add("opacity-100");

      // Limpiar el formulario
      inform.reset();

      // Desaparecer el mensaje después de 3 segundos
      setTimeout(function () {
        successMessage.classList.add("opacity-0");
        setTimeout(function () {
          successMessage.classList.add("hidden");
          successMessage.classList.remove("opacity-0", "opacity-100");
        }, 1000); // 1 segundo de espera antes de esconder el mensaje
      }, 3000); // El mensaje estará visible durante 3 segundos
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Hubo un error al enviar el correo");
    });
});
