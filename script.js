// function to add new task to the list
function addTask() 
{
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") 
    {
        var li = document.createElement("li");
        var timestamp = new Date().toLocaleString();

        li.innerHTML = `<span>${taskInput.value} &nbsp;</span>
                        <span class="timestamp"> ${timestamp} &nbsp;</span>
                        <button class="delete-button" onclick="removeTask(this)">Delete</button>`;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

// function to remove a task from the list
function removeTask(button) 
{
    var taskList = document.getElementById("taskList");
    var li = button.parentNode;
    taskList.removeChild(li);
}

