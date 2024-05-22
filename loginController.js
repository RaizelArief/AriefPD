document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.getElementById("username");
  const password = document.getElementById("password");

  const loginButton = document.querySelector("#login-button");

  const registerButton = document.querySelector("#register-button")
  loginButton.onclick = () => {
    console.log("logged in");

    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    let storedValid = false;
    if (storedPassword == "" || storedUsername == "") {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    } else {
        storedValid = true;
    }


    if (
      username.value === storedUsername &&
      password.value === storedPassword && storedValid
    ) {
      alert(`login Succes, welcome ${username.value}`);
      window.location.href = "index.html";
    } else {
      alert("kamu gagal, silahkan coba lagi");
    }
  };

  registerButton.onclick = () => {
        window.location = "register.html"
  }
});
