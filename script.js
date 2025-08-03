document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // ✅ 1. Load Tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // false = don't save again
    }

    // ✅ 2. Save Tasks to Local Storage
    function saveTasks() {
        const tasks = [];
        document.querySelectorAll("#task-list li").forEach(li => {
            tasks.push(li.firstChild.textContent);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // ✅ 3. Add Task & optionally save
    function addTask(taskText = null, save = true) {
        if (!taskText) {
            taskText = taskInput.value.trim();
            if (taskText === "") {
                alert("Please enter a task.");
                return;
            }
        }

        const li = document.createElement("li");
        li.textContent = taskText;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        removeBtn.onclick = function () {
            taskList.removeChild(li);
            saveTasks(); // ✅ Update Local Storage when removing
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);

        if (save) saveTasks(); // ✅ Save when adding new task

        taskInput.value = "";
    }

    // ✅ 4. Initialize
    loadTasks(); // ✅ Load on start
    addButton.addEventListener("click", () => addTask());
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
