const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const totalTasksElement = document.createElement("div"); 
totalTasksElement.id = "total-tasks";
let totalTasks=0;

function addTask() {
  if (inputBox.value === "") {
    alert("Please Add a task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    totalTasks++; 
    updateTotalTasks();
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      totalTasks--;
      updateTotalTasks(); 
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

function updateTotalTasks() {
  totalTasksElement.textContent = `${totalTasks} Tasks left`;
}
updateTotalTasks();
listContainer.parentNode.appendChild(totalTasksElement);
showTask();