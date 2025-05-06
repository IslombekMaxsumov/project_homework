const form = document.getElementById('todoForm');
const input = document.getElementById('taskInput');
const list = document.getElementById('taskList');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const token = localStorage.getItem('access_token');
if (!token) {
    window.location.href = './login.html';
}

function showTasks() {
  list.innerHTML = '';
  tasks.forEach((task, i) => {
    const item = document.createElement('li');
    item.textContent = task.text;
    item.className = 'product';

    if (task.done) {
      item.style.textDecoration = 'line-through';
      item.style.opacity = '0.5';
    }

    item.addEventListener('click', function () {
      task.done = !task.done;
      saveTasks();
      showTasks();
    });

    list.appendChild(item);
  });
}

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const newTask = {
    text: input.value,
    done: false,
  };

  tasks.push(newTask);

  saveTasks();
  showTasks();

  input.value = '';
});

showTasks();