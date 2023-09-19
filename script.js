const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("taskList");
const addTaskBtn = document.getElementById("addTaskBtn");

function addTask() {
  const taskText = taskInput.value.trim()
  if (taskText !== '') {
    const li = document.createElement("li");
    li.innerHTML = `
        ${taskText}
        <span class="delete-task">Delete</span
        `;
        taskList.appendChild(li);
        taskInput.value = '';
  }
}

function deleteTask(event) {
  if (event.target.classList.contains('delete-task')) {
    event.target.parentElement.remove()
  }
}

addTaskBtn.addEventListener('click', addTask);
taskList.addEventListener('click', deleteTask);
taskInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
})
