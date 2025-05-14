function saveTask() {
    const taskInput = document.getElementById("taskInput");
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    if (taskInput.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    tasks.push(taskInput.value.trim());
    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskInput.value = "";
    alert("Task added!");
}