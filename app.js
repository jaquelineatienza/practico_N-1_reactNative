const form = document.getElementById("form");
const container = document.getElementById("container"); // corregido
const modalText = document.getElementById("modalText");
const modal = document.getElementById("modal");
const button = document.getElementById("button");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("texto").value;

  fetch("http://localhost:3000/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error interno al enviar el texto");
      }
      return response.json();
    })
    .then(() => {
      return fetch("http://localhost:3000/get", {
        method: "GET",
      });
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error interno al obtener el texto");
      }
      return response.json();
    })
    .then((data) => {
      modalText.innerText = "Bienvenido, " + data.result;
      modal.showModal();
    })
    .catch((error) => {
      console.error("Ocurrió un error:", error);
      modalText.innerText = "Ocurrió un error. Intenta nuevamente.";
      modal.showModal();
    });
});
