// Selection of the switch button
const switchBtn = document.querySelector(".switch-btn");
const inputText = document.getElementById("inputText");
const addTopic = document.querySelector(".fa-plus");
const routeBtn = document.querySelector(".btn");
const switchBtnTable = document.querySelector(".table-btn");
// const table = document.querySelector(table);

let arr = [];
let myStorage = window.localStorage;

// console.log(lists);

// Let's do so sample code
// const arrOfNames = ["Blessing", "James", "Abdulrasheed", "Mazi", "Falilah", "Sam"];
// const ranName = arr[Math.floor(Math.random() * arr.length)];
// console.log(ranName);

// Function that changes the background color
const changeColorTheme = () => {
  const todoList = document.querySelector(".todoList");
  // changes nav theme;
  const nav = document.querySelector("nav");
  nav.classList.toggle("theme");
  // Gets the section body and change the theme
  const section = document.querySelector("section");
  section.classList.toggle("theme");
  switchBtn.classList.toggle("theme");
  inputText.classList.toggle("theme");
  const plusIcon = document.querySelector(".input-container .fa-plus");
  plusIcon.classList.toggle("theme");

  if (todoList.firstElementChild.classList.contains("list-item")) {
    Array.from(todoList.children).forEach((list) => {
      list.classList.toggle("theme");
    });
  }

  switchBtn.addEventListener("click", changeColorTheme);
};
switchBtn.addEventListener("click", changeColorTheme);

const changeColorThemeTable = () => {
  const todoList = document.querySelector(".todoList");
  // changes nav theme;
  const nav = document.querySelector(".tableNav");
  nav.classList.toggle("theme");
  section.classList.toggle("theme");
  switchBtnTable.addEventListener("click", changeColorTheme);
};

switchBtnTable.addEventListener("click", changeColorTheme);

// Add Todo on Submit;
function addTodoList() {
  arr.push(inputText.value);
  let pval = "";
  for (let i = 0; i < arr.length; i++) {
    pval = arr[i];
    // pval.push(arr[i]);
    // console.log(pval);

    document.querySelector(".btn-section").style.display = "block";
  }

  if (inputText.value === "") {
    return;
  }

  //   console.log(JSON.stringify(arr));
  myStorage.setItem("tasks", JSON.stringify(arr));
  const data = myStorage.getItem("tasks");
  //   console.log(data);

  const todoList = document.querySelector(".todoList");
  let html = `<li class="list-item">${pval} <i class="fas fa-trash-alt"></i></li>`;
  document.querySelector(".btn").style.display = "block";
  todoList.insertAdjacentHTML("beforeend", html);

  todoList.addEventListener("click", (e) => {
    if (e.target.tagName == "I") {
      e.target.parentElement.remove();

      if (!todoList.hasChildNodes()) {
        console.log("true");
        document.querySelector(".btn").style.display = "none";
      }
    }
  });
}

inputText.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    const value = e.target.value;
    addTodoList(value);
    e.target.value = "";
  }
});

addTopic.addEventListener("click", () => {
  addTodoList();
  inputText.value = "";
});

// onClick ===> route to table of genearted
function route() {
  // Get items from localStorage
  if (window.location.href === "table.html") {
    console.log(2 - 2);
    const tasks = myStorage.getItem("tasks");
    //   return tasks;
    console.log(tasks);
  }
  console.log("Hello");
}

routeBtn.addEventListener("click", () => {
  route();
});
