function showing() {
  let pakita = document.getElementById("pakita");
  pakita.classList.remove("hidden");
  pakita.classList.add("flex");
}

document.getElementById("cancel").addEventListener("click", function () {
  document.getElementById("pakita").classList.add("hidden");
});

function addTask() {
  let taskinput = document.getElementById("taskInput");
  let list = document.getElementById("list");
  if (taskinput.value === "") {
    alert("way sulod peste ka");
  }
  let li = document.createElement("li");
  li.textContent = taskinput.value;
  list.appendChild(li);
  taskinput.value = "";
  alert("Added Succesfully!");
}
function closer() {
  let parent = document.getElementById("tasks");
  parent.classList.add("hidden");
}
function showing2() {
  let show = document.getElementById("tasks");
  show.classList.remove("hidden");
}
function home() {
  alert("peste naka home naman ka");
}
