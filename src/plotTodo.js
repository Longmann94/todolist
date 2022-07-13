import {format, addDays, parseISO, isAfter, minutesToHours, add} from 'date-fns';

export default function plotTodo(todo) {

  let startDate = todo.startDate;
  let priority = todo.priority;


  let divID = format(startDate, "ddMMyy");
  let todoHour = format(startDate, "HH");
  console.log(todoHour);
  let timeSpan = minutesToHours(todo.period);
  let todoStartTime = format(startDate, "h:mm aaa");
  let todoDoneTime = format(add(startDate, {minutes: todo.period}), "h:mm aaa");

  let todoContainer = document.createElement('div');
  todoContainer.id = todo.title;
  todoContainer.classList.add('todo-container');
  todoContainer.classList.add(`${priority}-prio`);
  let todoTitle = document.createElement('div');
  let todoDetails = document.createElement('div');
  todoTitle.textContent = todoStartTime + " till " + todoDoneTime + " -  " + todo.title;
  todoDetails.textContent = todo.details;
  todoContainer.appendChild(todoTitle);
  todoContainer.appendChild(todoDetails);
  todoContainer.style.gridRow = `${todoHour} / span ${timeSpan}`;
  const dateSlot = document.querySelector("#t"+divID);



  dateSlot.appendChild(todoContainer);
}
