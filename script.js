// Select elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Add event listener to the Add button
addTaskBtn.addEventListener('click', addTask);

// Function to add a task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }

  // Create task list item
  const li = document.createElement('li');

  // Create span to hold the task text
  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;

  // Add click event to toggle completion
  taskSpan.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Create delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');

  // Add click event to delete the task
  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  // Append task text and delete button to the list item
  li.appendChild(taskSpan);
  li.appendChild(deleteBtn);

  // Add the list item to the task list
  taskList.appendChild(li);

  // Clear the input field
  taskInput.value = '';
}
