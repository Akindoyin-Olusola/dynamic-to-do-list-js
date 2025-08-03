document.addEventListener("DOMContentLoaded", function () {
    // Select DOM elements
    const addButton = document.getElementById("add-button");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Define the addTask function
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create new list item
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // Add remove functionality
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append button to list item, and list item to list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    }

    // Add button click event
    addButton.addEventListener("click", addTask);

    // Add Enter key event
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
