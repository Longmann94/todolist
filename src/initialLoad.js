import {format, addDays, parseISO} from 'date-fns';

export default function initialLoad() {

  let timeNow = format(new Date(), 'dd/MM/yy EE');

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
  btnAddTodo.textContent = "Add Project!";
  btnAddTodo.id = 'addProjectBtn';


  const projectContainer = document.createElement('div');
  projectContainer.classList.add('project-container');

  const divContent = document.createElement('div');
  divContent.classList.add('content-container');

  //day/time columns
  const timeLabel = document.createElement('div');
  timeLabel.classList.add('time-label');
  timeLabel.textContent = "Time";

  for(let i = 0; i < 24; i++){
    const newLabel = document.createElement('div');
    newLabel.textContent = i+":00";
    timeLabel.appendChild(newLabel);
  }


  const day1Container = document.createElement('div');
  day1Container.classList.add('day1-container');
  day1Container.classList.add('day-container');
  day1Container.textContent = timeNow;
  day1Container.id = "t"+format(new Date(), 'ddMMyy');
  const day2Container = document.createElement('div');
  day2Container.classList.add('day2-container');
  day2Container.classList.add('day-container');
  day2Container.textContent = format(addDays(new Date(), 1), 'dd/MM/yy EE');
  day2Container.id = "t"+format(addDays(new Date(), 1), 'ddMMyy');
  const day3Container = document.createElement('div');
  day3Container.classList.add('day3-container');
  day3Container.classList.add('day-container');
  day3Container.textContent = format(addDays(new Date(), 2), 'dd/MM/yy EE');
  day3Container.id = "t"+format(addDays(new Date(), 2), 'ddMMyy');
  const day4Container = document.createElement('div');
  day4Container.classList.add('day4-container');
  day4Container.classList.add('day-container');
  day4Container.textContent = format(addDays(new Date(), 3), 'dd/MM/yy EE');
  day4Container.id = "t"+format(addDays(new Date(), 3), 'ddMMyy');
  const day5Container = document.createElement('div');
  day5Container.classList.add('day5-container');
  day5Container.classList.add('day-container');
  day5Container.textContent = format(addDays(new Date(), 4), 'dd/MM/yy EE');
  day5Container.id = "t"+format(addDays(new Date(), 4), 'ddMMyy');
  const day6Container = document.createElement('div');
  day6Container.classList.add('day6-container');
  day6Container.classList.add('day-container');
  day6Container.textContent = format(addDays(new Date(), 5), 'dd/MM/yy EE');
  day6Container.id = "t"+format(addDays(new Date(), 5), 'ddMMyy');
  const day7Container = document.createElement('div');
  day7Container.classList.add('day7-container');
  day7Container.classList.add('day-container');
  day7Container.textContent = format(addDays(new Date(), 6), 'dd/MM/yy EE');
  day7Container.id = "t"+format(addDays(new Date(), 6), 'ddMMyy');

  //todoform
  const todoFormTitle = document.createElement('div');
  todoFormTitle.classList.add('todo-form-title');
  todoFormTitle.textContent = "Lets add a to do!";

  const newForm = document.createElement('form');
  newForm.classList.add('add-todo-form');
  const labelName = document.createElement('label');
  labelName.textContent = "To do:";
  const inputName = document.createElement('input');
  inputName.id = 'todoName';
  labelName.appendChild(inputName);

  const labelDetails = document.createElement('label');
  labelDetails.textContent = "Details:";
  const inputDetails = document.createElement('textarea');
  inputDetails.rows = "13";
  inputDetails.cols = "50";
  inputDetails.id = 'details';
  labelDetails.appendChild(inputDetails);

  const labelDatestart = document.createElement('label');
  labelDatestart.textContent = "Date:";
  const inputDatestart = document.createElement('input');
  inputDatestart.type = "datetime-local";
  inputDatestart.id = 'timestart';
  labelDatestart.appendChild(inputDatestart);

  const labelPeriod = document.createElement('label');
  labelPeriod.textContent = "Period(in mins):";
  const inputPeriod = document.createElement('input');
  inputPeriod.id = 'period';
  labelPeriod.appendChild(inputPeriod);

  const labelPrio = document.createElement('label');
  labelPrio.textContent = "Priority:";
  const inputPrio = document.createElement('select');
  inputPrio.id = 'prio';
  const prioLow = document.createElement('option');
  prioLow.textContent = "Low";
  prioLow.value = "Low";
  const prioMed = document.createElement('option');
  prioMed.textContent = "Medium";
  prioMed.value = "Medium";
  const prioHigh = document.createElement('option');
  prioHigh.value = "High";
  prioHigh.textContent = "High";
  inputPrio.appendChild(prioLow);
  inputPrio.appendChild(prioMed);
  inputPrio.appendChild(prioHigh);
  labelPrio.appendChild(inputPrio);

  const submitbtn = document.createElement('div');
  submitbtn.classList.add('submit-todo-btn');
  submitbtn.classList.add('submitTodo');
  submitbtn.textContent = "ADD TO DO!";

  divContent.appendChild(newForm);
  newForm.appendChild(todoFormTitle);
  newForm.appendChild(labelName);
  newForm.appendChild(labelDetails);
  newForm.appendChild(labelDatestart);
  newForm.appendChild(labelPeriod);
  newForm.appendChild(labelPrio);
  newForm.appendChild(submitbtn);

  //project form
  const divAddProject = document.createElement('div');
  divAddProject.classList.add('add-project-div');

  const labelAddProject = document.createElement('label');
  labelAddProject.textContent = "New Project:";
  const inputAddProject = document.createElement('input');
  inputAddProject.id = 'addProject';
  labelAddProject.appendChild(inputAddProject);

  divAddProject.appendChild(labelAddProject);

  element.appendChild(mainContainer);
  mainContainer.appendChild(divTopbar);
  mainContainer.appendChild(divContent);
  btnContainer.appendChild(projectContainer);
  divContent.appendChild(divAddProject);
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
