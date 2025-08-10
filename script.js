// Wait for the HTML document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        storedTasks.forEach(taskText => addTask(taskText, false)); // false = don't save again
    }

    // Save tasks array to Local Storage
    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll("li").forEach(li => {
            tasks.push(li.firstChild.textContent); // firstChild = task text (before Remove button)
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Function to add a new task
    function addTask(taskText = taskInput.value.trim(), save = true) {
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new list item
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn");

        // Remove task on click
        removeButton.onclick = function () {
            li.remove();
            saveTasks();
        };

        li.appendChild(removeButton);
        taskList.appendChild(li);

        if (save) {
            saveTasks();
        }

        // Clear input
        taskInput.value = "";
    }

    // Add button click event
    addButton.addEventListener("click", () => addTask());

    // Enter key event
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // Initial load
    loadTasks();
});
