
export default function plotTodo(todo) {
  let startDate = todo.startDate;

  let todoContainer = document.createElement('div');
  todoContainer.textContent = todo.title;
  const timeSlot = document.querySelector(startDate);

  timeSlot.appendChild(todoContainer);
}
