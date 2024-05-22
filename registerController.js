document.getElementById("registerForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.getElementById("username");
  const password = document.getElementById("password");

  const registerButton = document.querySelector("#register-button");

  registerButton.onclick = () => {
    localStorage.setItem("username", username.value)
    localStorage.setItem("password", password.value);

    
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
      alert(`regis succes`);
      window.location.href = "login.html";
    } else {
      alert("kamu gagal, silahkan coba lagi");
    }
    console.log("user registered")
    console.log(eacUsers)
  }
});
