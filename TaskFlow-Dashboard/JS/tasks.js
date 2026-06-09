let tasks = loadTasks();

function addTask(title, priority) {
  const newTask = {
    id: Date.now(),
    title,
    priority,
    status: "todo"
  };

  tasks.push(newTask);
  saveTasks(tasks);
}

function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  saveTasks(tasks);
}

function moveTask(id) {
  const task = tasks.find(t => t.id === id);

  if (task.status === "todo") task.status = "progress";
  else if (task.status === "progress") task.status = "done";
  else task.status = "todo";

  saveTasks(tasks);
}