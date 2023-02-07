"use strict";

// variables for Input field, list and button
const inputField = document.getElementById("todoInput");
const addButton = document.getElementById("submit");
const toDoList = document.getElementById("todoList");

console.log(addButton);

//adding eventlistener to add new Task

addButton.addEventListener("click", function (event) {
  event.preventDefault();
  const inputValue = inputField.value;
  if (inputValue === "") {
    return;
  }
  const newItem = document.createElement("li");
  newItem.classList.add("todoItem");

  //adding check box to new to do items
  newItem.innerHTML = `
    <input type="checkbox" class="checkbox">
    <p class="todoText">${inputValue}</p>
  `;

  //appending new to do item to toDolist
  toDoList.appendChild(newItem);

  //clearing input field for new items
  inputField.value = "";
});

//togging completed class

toDoList.addEventListener("click", function (event) {
  if (event.target.classList.contains("checkbox")) {
    event.target.parentElement.classList.toggle("completed");
  }
});

//clearing to-do List

const clearListBtn = document.querySelector("#clearListBtn");
clearListBtn.addEventListener("click", function () {
  const todoList = document.querySelector("#todoList");
  todoList.innerHTML = "";
});

//adding to local storage

// Saving to-do list data to local storage
function saveToDoDataToLocalStorage() {
  const toDoListData = toDoList.innerHTML;
  localStorage.setItem("toDoListData", toDoListData);
}

// Retrieving to-do list data from local storage
function retrieveToDoDataFromLocalStorage() {
  const toDoListData = localStorage.getItem("toDoListData");
  if (toDoListData) {
    toDoList.innerHTML = toDoListData;
  }
}

// Call the retrieveToDoDataFromLocalStorage function on page load
document.addEventListener("DOMContentLoaded", function () {
  retrieveToDoDataFromLocalStorage();
});

// Call the saveToDoDataToLocalStorage function when adding a new task, clearing the list, or checking/unchecking a task
addButton.addEventListener("click", function () {
  saveToDoDataToLocalStorage();
});

clearListBtn.addEventListener("click", function () {
  saveToDoDataToLocalStorage();
});

toDoList.addEventListener("click", function () {
  saveToDoDataToLocalStorage();
});
