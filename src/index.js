import {format, addDays, parseISO, isAfter, toDate} from 'date-fns';
import './style.css';
import Project from './projects.js';
import Todo from './todos.js';
import initialLoad from './initialLoad.js';
import plotTodo from './plotTodo.js';
import createProject from './createProject.js';


let projectsArr = [];
const element = document.createElement('div');
element.id = 'content';
document.body.appendChild(element);
initialLoad();


const btnContainer = document.querySelector('.btn-container');
const addProjectBtn = document.querySelector('#addProjectBtn');
const todoForm = document.querySelector('.add-todo-form');
const submitTodo = document.querySelector('.submitTodo');

//create default project
const generaltodos = new Project("general to dos");
projectsArr.push(generaltodos);
projectsArr.forEach(project => createProject(project));
projectsArr.forEach(project => project.projectArr.forEach(todo => plotTodo(todo)));

function deletetodo(todoname){
  document.querySelector("#"+todoname).remove();
}

function updateProject() {
  const projectContainer = document.querySelector('.project-container');
  const daysContainer = document.querySelectorAll('.day-container');
  while(projectContainer.firstChild) projectContainer.removeChild(projectContainer.firstChild);
  projectsArr.forEach(project => createProject(project));
  updateEventListeners();
}

function updateEventListeners(){
  let allprojectDeletebtn = document.querySelectorAll('.btn-delete-project');
  allprojectDeletebtn.forEach(btn => btn.addEventListener("click", (e) => deleteProject(e)));
}

function deleteProject(e) {

    const projectName = e.target.id;
    let foundIndex = projectsArr.findIndex((project) => project.name == projectName);
    projectsArr.splice(foundIndex, 1);
    updateProject();
}

function addProject(){
    const addproject = document.querySelector('#addProject').value;

    if(addproject != '') projectsArr.push(new Project(addproject));
    updateProject();
}

function addTodo(e){

  const projectName = String(e.target.id);
  const todoTitle = document.querySelector("#todoName").value;
  const todoDetails = document.querySelector("#details").value;
  const todoDateStart = document.querySelector("#timestart").value;
  const todoPeriod = document.querySelector("#period").value;
  const todoPrio = document.querySelector("#prio").value;
  let parsedDate = parseISO(todoDateStart);

  if(todoDateStart != '' && isAfter(parsedDate, new Date())){

  const newTodo = new Todo(todoTitle, todoDetails, toDate(parsedDate), todoPeriod, todoPrio, false);

  let selectedProject = projectsArr[projectsArr.findIndex((project) => project.name == projectName)];

  console.log(selectedProject);
  selectedProject.addTodo(newTodo);
  const thisForm = document.querySelector(".add-todo-form");
  selectedProject.displayTodo();

  submitTodo.id = "";
  thisForm.style.display = "none";
  plotTodo(newTodo);
}else{
  window.alert("please check the date, you have to set a date in the future");
}
}

submitTodo.addEventListener("click", (e) => addTodo(e));
addProjectBtn.addEventListener("click", (e) => addProject(e));
updateEventListeners();
