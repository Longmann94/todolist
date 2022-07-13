
export default function createProject(project){

  const addtodobtn = document.querySelector('.submitTodo');
  const todoForm = document.querySelector('.add-todo-form');
  const name = project.name;

  const projects = document.querySelector('.project-container');
  const projectContainer = document.createElement('div');
  const projectName = document.createElement('div');
  const projectAddTodoBtn = document.createElement('div');
  const projectDeleteBtn = document.createElement('div');
  projectDeleteBtn.classList.add('btn-delete-project');
  projectContainer.classList.add('project-div');
  projectName.classList.add('project-div-name');
  projectContainer.id = name;
  projectName.textContent = name;
  projectAddTodoBtn.textContent = 'Add';
  projectAddTodoBtn.id = name;
  projectDeleteBtn.textContent = 'Delete';
  projectDeleteBtn.id = name;


  function addSubmitId(){
    addtodobtn.id= name;
    todoForm.style.display = 'grid'
  }

  projectAddTodoBtn.addEventListener('click', () =>  addSubmitId());


  projects.appendChild(projectContainer);
  projectContainer.appendChild(projectName);
  projectContainer.appendChild(projectDeleteBtn);
  projectContainer.appendChild(projectAddTodoBtn);
}
