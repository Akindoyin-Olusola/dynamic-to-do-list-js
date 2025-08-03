// Wait for the HTML document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Function to add a new task
    function addTask() {
        // Get and trim the input value
        const taskText = taskInput.value.trim();

        // Check if input is empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new list item (li)
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn"); // Use classList.add as required

        // Set onclick event to remove task
        removeButton.onclick = function () {
            taskList.removeChild(li);
        };

        // Append remove button to li and li to the task list
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    }

    // Add event listener to Add Task button
    addButton.addEventListener("click", addTask);

    // Add event listener to handle Enter key
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // Call addTask once on DOMContentLoaded to follow instruction
    addTask(); // Optional: will add an empty task initially unless skipped with condition inside addTask
});
