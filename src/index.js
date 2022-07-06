import {format, addDays} from 'date-fns';
import './style.css';
import Project from './projects.js';
import Todo from './todos.js';
import initialLoad from './initialLoad.js';
import plotTodo from './plotTodo.js';
import createProject from './createProject.js';

const element = document.createElement('div');
element.id = 'content';
document.body.appendChild(element);
initialLoad();

let projectsArr = [];
const generalProject = new Project("general to dos");
projectsArr.push(generalProject);

projectsArr.forEach(project => createProject(project));

const btnContainer = document.querySelector('.btn-container');
const addTodoBtn = document.querySelector('#addTodoBtn');
const todoForm = document.querySelector('.add-todo-form');
const submitTodo = document.querySelector('#submitTodo');

function addTodo(){

  const todoTitle = document.querySelector("#todoName").value;
  const todoDetails = document.querySelector("#details").value;
  const todoTimeStart = document.querySelector("#timestart").value;
  const todoPeriod = document.querySelector("#period").value;
  const todoType = document.querySelector("#type").value;
  const todoPrio = document.querySelector("#prio").value;

  const newTodo = new Todo(todoTitle, todoDetails, todoTimeStart, todoPeriod, todoType, todoPrio, false);
  const thisForm = document.querySelector(".add-todo-form");
  thisForm.style.display = "none";
}

addTodoBtn.addEventListener('click', () => todoForm.style.display = "grid");
submitTodo.addEventListener('click', addTodo);

//default project
let timeNow = format(addDays(new Date(), 0), 'dd/MM/yy');
let todo1 = new Todo("GO outside", "play with pet outside", timeNow, timeNow, "personal", "low", true);
generalProject.addTodo(todo1);
console.log(projectsArr[0].projectArr[0]);
plotTodo(todo1);
