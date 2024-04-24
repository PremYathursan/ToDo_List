function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var task = taskInput.value;

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    var li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);
    
    var button = document.createElement("button");
    button.textContent = "Remove";
    button.onclick = function() {
        taskList.removeChild(li);
    };
    li.appendChild(button);

    taskInput.value = "";
}
