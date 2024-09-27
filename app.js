const inform = document.getElementById("inform");

inform.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const formData = {
    to: email,
    subject: `Nuevo mensaje de ${name}`,
    text: message,
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
