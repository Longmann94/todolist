import {format, addDays, parseISO} from 'date-fns';

export default function initialLoad() {

  let timeNow = format(new Date(), 'dd/MM/yy');

  const element = document.querySelector('#content');

  const mainContainer = document.createElement('div');
  mainContainer.classList.add('main-container');

  const divTopbar = document.createElement('div');
  divTopbar.classList.add('topbar-container');

  const divtitle = document.createElement('div');
  divtitle.classList.add('title-container');
  divtitle.textContent = "ToDo List";

  const btnContainer = document.createElement('div');
  btnContainer.classList.add('btn-container');

  const btnAddTodo = document.createElement('button');
  btnAddTodo.textContent = "Add To Do!";
  btnAddTodo.id = 'addTodoBtn';

  const divContent = document.createElement('div');
  divContent.classList.add('content-container');

  //day/time columns
  const timeLabel = document.createElement('div');
  timeLabel.classList.add('time-label');
  timeLabel.textContent = "Time";
  const day1Container = document.createElement('div');
  day1Container.classList.add('day1-container');
  day1Container.textContent = timeNow;
  day1Container.id = timeNow;
  const day2Container = document.createElement('div');
  day2Container.classList.add('day2-container');
  day2Container.textContent = format(addDays(new Date(), 1), 'dd/MM/yy EE');
  day2Container.id = format(addDays(new Date(), 1), 'dd/MM/yy EE');
  const day3Container = document.createElement('div');
  day3Container.classList.add('day3-container');
  day3Container.textContent = format(addDays(new Date(), 2), 'dd/MM/yy EE');
  day3Container.id = format(addDays(new Date(), 2), 'dd/MM/yy EE');
  const day4Container = document.createElement('div');
  day4Container.classList.add('day4-container');
  day4Container.textContent = format(addDays(new Date(), 3), 'dd/MM/yy EE');
  day4Container.id = format(addDays(new Date(), 3), 'dd/MM/yy EE');
  const day5Container = document.createElement('div');
  day5Container.classList.add('day5-container');
  day5Container.textContent = format(addDays(new Date(), 4), 'dd/MM/yy EE');
  day5Container.id = format(addDays(new Date(), 4), 'dd/MM/yy EE');
  const day6Container = document.createElement('div');
  day6Container.classList.add('day6-container');
  day6Container.textContent = format(addDays(new Date(), 5), 'dd/MM/yy EE');
  day6Container.id = format(addDays(new Date(), 5), 'dd/MM/yy EE');
  const day7Container = document.createElement('div');
  day7Container.classList.add('day7-container');
  day7Container.textContent = format(addDays(new Date(), 6), 'dd/MM/yy EE');
  day7Container.id = format(addDays(new Date(), 6), 'dd/MM/yy EE');


  const newForm = document.createElement('form');
  newForm.classList.add('add-todo-form');
  const labelName = document.createElement('label');
  labelName.textContent = "To do:";
  const inputName = document.createElement('input');
  inputName.id = 'todoName';
  labelName.appendChild(inputName);

  const labelDetails = document.createElement('label');
  labelDetails.textContent = "Details:";
  const inputDetails = document.createElement('input');
  inputDetails.id = 'details';
  labelDetails.appendChild(inputDetails);

  const labelTimestart = document.createElement('label');
  labelTimestart.textContent = "Time start:";
  const inputTimestart = document.createElement('input');
  inputTimestart.id = 'timestart';
  labelTimestart.appendChild(inputTimestart);

  const labelTimeend = document.createElement('label');
  labelTimeend.textContent = "Time end:";
  const inputTimeend = document.createElement('input');
  inputTimeend.id = 'timeend';
  labelTimeend.appendChild(inputTimeend);

  const labelType = document.createElement('label');
  labelType.textContent = "Type:";
  const inputType = document.createElement('input');
  inputType.id = 'type';
  labelType.appendChild(inputType);

  const labelPrio = document.createElement('label');
  labelPrio.textContent = "Priority:";
  const inputPrio = document.createElement('input');
  inputPrio.id = 'prio';
  labelPrio.appendChild(inputPrio);

  const labelStatus = document.createElement('label');
  labelStatus.textContent = "Status:";
  const inputStatus = document.createElement('input');
  inputStatus.id = 'status';
  labelStatus.appendChild(inputStatus);

  const submitbtn = document.createElement('div');
  submitbtn.classList.add('submit-todo-btn');
  submitbtn.textContent = "ADD TO DO!";
  submitbtn.id = 'submitTodo';

  divContent.appendChild(newForm);
  newForm.appendChild(labelName);
  newForm.appendChild(labelDetails);
  newForm.appendChild(labelTimestart);
  newForm.appendChild(labelTimeend);
  newForm.appendChild(labelType);
  newForm.appendChild(labelPrio);
  newForm.appendChild(labelStatus);
  newForm.appendChild(submitbtn);


  element.appendChild(mainContainer);
  mainContainer.appendChild(divTopbar);
  mainContainer.appendChild(divContent);
  divTopbar.appendChild(divtitle);
  divTopbar.appendChild(btnContainer);
  btnContainer.appendChild(btnAddTodo);
  divContent.appendChild(timeLabel);
  divContent.appendChild(day1Container);
  divContent.appendChild(day2Container);
  divContent.appendChild(day3Container);
  divContent.appendChild(day4Container);
  divContent.appendChild(day5Container);
  divContent.appendChild(day6Container);
  divContent.appendChild(day7Container);

}
