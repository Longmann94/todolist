import {format} from 'date-fns';
import './style.css';
import Project from './projects.js';
import Todo from './todos.js';
import initialLoad from './initialLoad.js';

let projectArr = [];
const project1 = new Project(projectArr);

const element = document.createElement('div');
element.id = 'content';
document.body.appendChild(element);

initialLoad();

const addBtn = document.createElement('button');
element.appendChild(addBtn);
addBtn.textContent = 'Remove todo';
addBtn.addEventListener('click', project1.removeTodo);

let timeNow = format(new Date(), 'dd/MM/yyyy HH:mm:ss');
let todo1 = new Todo("go outside", "play with pet outside", timeNow, "high", "feed pet as well", "Not Done");
