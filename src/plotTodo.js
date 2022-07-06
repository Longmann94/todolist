
export default function plotTodo(todo) {
  let startDate = todo.startDate;
  let divID = startDate.match(/[\d]/g, '');

  let todoContainer = document.createElement('div');
  todoContainer.id = todo.title
  todoContainer.textContent = todo.title;
  const timeSlot = document.querySelector("#t"+divID.join(''));

  timeSlot.appendChild(todoContainer);
}
