"use strict mode";
const typedTask = document.querySelector(".typed-task");
const addingTask = document.querySelector(".add");
const taskOutput = document.getElementById("tasks");
const deleteTask = document.querySelector(".delete");
const taskNumber = document.querySelector(".number");
const whereTaskAppear = document.querySelector(".task-items");
const searchIcon = document.querySelector(".fa-magnifying-glass");
const searchedTask = document.querySelector(".search-box");

// Variable
let taskCounter = 0;
// let btnClicked = false;

// CLICKING ADD
const addTask = () => {
  // GUARD CLAUSE
  if (typedTask.value === "") return;

  const listItem = document.createElement("li");
  const trashIcon = document.createElement("i");
  const checkboxInput = document.createElement("input");
  const taskValue = document.createTextNode(typedTask.value);
  const span = document.createElement("span");
  const span2 = document.createElement("span");

  // SETTING ATTRIBUTE
  listItem.setAttribute("class", "task-input");
  checkboxInput.setAttribute("type", "checkbox");
  checkboxInput.setAttribute("class", "task-checkbox");
  trashIcon.setAttribute("class", "fa-solid fa-trash-can");
  span2.setAttribute("class", "task-text");
  span.setAttribute("class", "trash-can");

  // APPENDING CHILDREN
  whereTaskAppear.append(listItem);
  listItem.append(checkboxInput);
  listItem.append(span);
  span.append(trashIcon);
  listItem.append(span2);
  span2.append(taskValue);

  // MAKING INPUT BOX EMPTY
  typedTask.value = "";

  // COUNTING TASKS
  taskCounter++;

  // TASK OUTPUT
  const num = () => {
    if (taskCounter === 1) {
      taskNumber.textContent = `${taskCounter} Task`;
    } else if (taskCounter === 0) {
      taskNumber.textContent = "You Have no tasks.";
    } else {
      taskNumber.textContent = `${taskCounter} Tasks`;
    }
  };
  num();

  // CHECKBOX CLICKING
  checkboxInput.addEventListener("click", () => {
    listItem.classList.toggle("checked");
    checkboxInput.classList.toggle("task-checkedbox");
    span2.classList.toggle("checked");
    if (listItem.classList.contains("checked")) {
      taskCounter--;
    } else {
      taskCounter++;
    }
    num();
  });

  // DELETE FUNCTION
  const deleteT = () => {
    whereTaskAppear.removeChild(listItem);
    if (listItem.classList.contains("checked")) {
      taskCounter++;
    }
    taskCounter--;
    num();
  };
  // DELETE ALL BUTTON
  deleteTask.addEventListener("click", deleteT);

  // TRASH CAN
  span.addEventListener("click", deleteT);
};

const stateOfModal = function (state) {
  document.querySelector(".modal").style.display = state;
};
const stateOfModal2 = function (state) {
  document.querySelector(".modal2").style.display = state;
};
const stateOfOverlay = function (mode) {
  document.querySelector(".overlay").style.display = mode;
};

// SEARCH BUTTON
searchIcon.addEventListener("click", () => {
  if (searchedTask.value === "") return;
  else if (whereTaskAppear.textContent === "") {
    stateOfModal2("block");
    stateOfOverlay("block");
    searchedTask.value = "";
  } else {
    stateOfModal("block");
    stateOfOverlay("block");
  }
  searchedTask.value = "";
});

// CLOSING MODAL
const close = function (clicked) {
  document.querySelector(clicked).addEventListener("click", function () {
    stateOfModal("none");
    stateOfModal2("none");
    stateOfOverlay("none");
  });
};
close(".overlay");
close(".close-modal");
close(".close-modal2");

// ENTER KEY
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});

// ADD BUTTON
addingTask.addEventListener("click", addTask);
