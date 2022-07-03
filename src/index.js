import {format} from 'date-fns';
import './style.css';
import Project from './projects.js';
import Todo from './todos.js';
import initialLoad from './initialLoad.js';
import plotTodo from './plotTodo.js';

const element = document.createElement('div');
element.id = 'content';
document.body.appendChild(element);

initialLoad();

const addTodoBtn = document.querySelector('#addTodoBtn');




//testing area
let projectArr = [];
const project1 = new Project(projectArr);
let timeNow = format(new Date(), 'dd/MM/yy');
let todo1 = new Todo("GO outside", "play with pet outside", timeNow, timeNow, "personal", "low", true);
project1.addTodo(todo1);
console.log(project1.projectArr[0]);
plotTodo(todo1);
