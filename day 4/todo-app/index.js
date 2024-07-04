// let arrayOfNumbers = [2, 3, 4, 5, 6];
// console.log(arrayOfNumbers);

// const filteredNumber = arrayOfNumbers.filter((number) => number % 2 == 0);
// console.log(filteredNumber);

// let calculate = 4 + 5; // 9 with data type number
// let number = "9"; // 9 with data type string
// console.log(calculate == number); // true
// console.log(calculate === number); // false

// console.log(!true);
// console.log(!false);

const addButton = document.getElementById("addButton");
const newTask = document.getElementById("newTask");
const taskList = document.getElementById("taskList");

document.addEventListener("DOMContentLoaded", () => {
  let tasks = [];

  function addTask() {
    const taskText = newTask.value.trim();

    if (taskText !== "") {
      const task = {
        id: Date.now(),
        text: taskText,
      };
      tasks.push(task);
      newTask.value = "";
      renderTasks(tasks);
    }
  }

  function deleteTask(taskId) {
    tasks = tasks.filter((task) => task.id !== taskId);
    renderTasks(tasks);
  }

  function renderTasks(taskArray) {
    taskList.innerHTML = taskArray
      .map(
        (task) => `
          <li>
              <span class="task-text">${task.text}</span>
              <button class="delete-btn" data-id="${task.id}">Delete</button>
          </li>
      `
      )
      .join("");

    Array.from(document.getElementsByClassName("delete-btn")).forEach(
      (button) => {
        button.addEventListener("click", (event) => {
          const taskId = Number.parseInt(event.target.getAttribute("data-id"));
          deleteTask(taskId);
        });
      }
    );
  }

  addButton.addEventListener("click", addTask);

  newTask.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
