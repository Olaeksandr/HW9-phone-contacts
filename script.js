"use strict";
const addTask = document.getElementById('addTodo');
const listTasks = document.getElementById('list');
const liTemplate = document.getElementById('liTemplate').innerHTML;

document.getElementById('addTaskForm').addEventListener('submit', newTask);
document.getElementById('list').addEventListener('click', changeColorLi);

function newTask(event) {
    event.preventDefault();
    listTasks.innerHTML += generateLi(addTask.value);
    clear();
}

function generateLi(index) {
    return liTemplate.replace('{{index}}', index);
}

function changeColorLi(event) {
    if(!event.target.className){
        event.target.className = 'taskComplete';
    } else {
        event.target.className = '';
    }
}

function clear() {
    addTask.value = '';
}