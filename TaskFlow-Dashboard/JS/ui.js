function renderTasks() {
  const todoList = document.getElementById("todoList");
  const progressList = document.getElementById("progressList");
  const doneList = document.getElementById("doneList");

  todoList.innerHTML = "";
  progressList.innerHTML = "";
  doneList.innerHTML = "";

  tasks.forEach(task => {
    const card = createTaskCard(task);

    if (task.status === "todo") todoList.appendChild(card);
    if (task.status === "progress") progressList.appendChild(card);
    if (task.status === "done") doneList.appendChild(card);
  });
}

function createTaskCard(task) {
  const div = document.createElement("div");
  div.classList.add("task-card", task.priority);
  div.dataset.id = task.id;

  div.innerHTML = `
    <h3 contenteditable="true" class="title">${task.title}</h3>
    <small>Priority: ${task.priority}</small>
    <br/>
    <button class="delete">Delete</button>
    <button class="move">Move</button>
  `;

  return div;
}