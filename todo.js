var listHolder = document.getElementById('list-holder');
var completeHolder = document.getElementById('complete-holder');
var taskInput = document.getElementById('task-input');

function addTask () {
    var taskList = document.createElement('div');
    taskList.classList.add('list-row');
    // taskList.classList.add('list');
    var taskTitle = document.createElement('h2');
    taskTitle.innerHTML = taskInput.value;

    var checkBox = document.createElement('input');
    checkBox.classList.add('tick-box');
    checkBox.type = 'checkbox';
    checkBox.onclick = completeTask;

    var taskBtn = document.createElement('button');
    taskBtn.classList.add('delete-btn');
    taskBtn.innerHTML = '\u00D7';
    taskBtn.onclick = deleteTask;

    taskList.append(checkBox);
    taskList.append(taskTitle);
    taskList.append(taskBtn);

    listHolder.append(taskList);

    taskInput.value = '';
}

function deleteTask () {
    // console.log(this.parentNode);
    var listNode = this.parentNode;
    listNode.remove();
}

function completeTask() {
    // var completeNode = this.parentNode;
    // console.log(this.parentNode.idName);
    var completeList = document.createElement('div');
    completeList.classList.add('list-row');

    var copiedText = this.parentNode.querySelector('h2');

    var checkBox = this.parentNode.querySelector('input');
    checkBox.classList.add('tick-box');
    checkBox.onclick = undoTask;
    // var undoBtn = document.createElement('button');
    // undoBtn.innerHTML = 'Undo';
    // undoBtn.onclick = undoTask;

    var deleteBtn = this.parentNode.querySelector('button');
    deleteBtn.classList.add('delete-btn');

    completeList.append(checkBox);
    completeList.append(copiedText);
    completeList.append(deleteBtn);

    completeHolder.append(completeList);
}

function undoTask() {
    var taskList = document.createElement('div')
    taskList.classList.add('list-row');
    
    var copiedText = this.parentNode.querySelector('h2');

    var checkBox = this.parentNode.querySelector('input');
    checkBox.onclick = completeTask;

    var deleteBtn = this.parentNode.querySelector('button');

    taskList.append(checkBox);
    taskList.append(copiedText);
    taskList.append(deleteBtn);

    listHolder.append (taskList);
}