const inform = document.getElementById("inform");

inform.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("mensaje").value;

  const formData = {
    name,
    email,
    message,
  };

  fetch("http://localhost:3000/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Éxito:", data);
      alert("Correo enviado con éxito");
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Hubo un error al enviar el correo");
    });
});
