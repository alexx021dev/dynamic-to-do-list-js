,
// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function () {

    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get and trim the value from the input field
        const taskText = taskInput.value.trim();

        // If input is empty, alert the user
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create a new list item (li)
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create the remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';

        // ✅ Use classList.add instead of className
        removeBtn.classList.add('remove-btn');

        // Add event listener to remove the task
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append the remove button to the list item
        li.appendChild(removeBtn);

        // Append the list item to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }

    // Add click event to the "Add Task" button
    addButton.addEventListener('click', addTask);

    // ✅ Use 'keydown' instead of deprecated 'keypress'
    taskInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});

