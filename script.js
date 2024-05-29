const h1 = document.getElementById("judul");
const p = document.getElementsByClassName("paraf")[0];
const nama = document.getElementsByName("nama")[0];

const submit = document.getElementById("input-button");
const end = document.querySelector(".End");
const input = document.getElementById("input");

const storedNama = localStorage.getItem("nama");
const storedInput = localStorage.getItem(".Input-button");

let tasksData = [];

let storedValid = false;
if (storedInput == "") {
  localStorage.removeItem("input");
}

if (
  nama.value === storedNama &&
  password.value === storedInput &&
  storedValid
) {
  alert(`regis succes`);
  window.location.href = "login.html";
}

const showtask = () => {
  if (tasksData.length == 0) {
    const tasksDataRaw = localStorage.getItem("data");
    if (tasksDataRaw) tasksData = JSON.parse(tasksDataRaw);
  }

  const tasks = document.getElementById("tasks");
  const element = document.createElement("p");

  if (tasksData.length > 0) {
    element.innerHTML = tasksData.map((x) => `<p>${x}</p>`).join("");
    tasks.appendChild(element);
  }
};
showtask();

submit.onclick = () => {
  if (nama.value == "") {
    alert("Nama tidak boleh kosong!");
    return;
  }

  tasksData.push(nama.value);
  localStorage.setItem("data", JSON.stringify(tasksData));
  window.location.reload();
};
