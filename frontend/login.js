const usernameInput = document.getElementById("username-input");
const passwordInput = document.getElementById("password-input");

const errorMessage = document.getElementById("error-message");

const form = document.getElementsByClassName("form")[0];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username-input").value;
  const password = document.getElementById("password-input").value;

  fetch("http://localhost:3000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        console.log("Authentication successful");

        errorMessage.textContent = "Login Successful";
      } else {
        errorMessage.textContent = "Login unsuccessful";

        console.error("Authentication failed:", data.message);
      }
    })
    .catch((error) => {
      console.error("Error during authentication:", error);
    });

  console.log("form submitted");
});
