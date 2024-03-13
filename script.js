var taskInput = document.getElementById("taskInput");
var taskList = document.getElementById("taskList");

// function to add new task to the list
function addTask() 
{
    if (taskInput.value.trim() !== "") 
    {
        var li = document.createElement("li");
        var timestamp = new Date().toLocaleString();

        li.innerHTML = `<div class="liText"> <span>${taskInput.value} &nbsp;</span> </div>
                        <div class="liDiv">
                        <span class="timestamp"> ${timestamp} &nbsp;</span>
                        <button class="delete-button" onclick="removeTask(this)">Delete</button>
                        </div>`;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

// function to remove a task from the list
function removeTask(button) {
    var li = button.parentNode.parentNode;
    li.remove();
}


// var taskInput = document.getElementById("taskInput");
taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});