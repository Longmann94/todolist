
export default function createProject(project){
  const name = project.name;
  let nameId = name.replace(/[ ]/g, '');

  const projects = document.querySelector('.project-container');
  const projectContainer = document.createElement('div');
  const projectName = document.createElement('div');
  const projectAddTodoBtn = document.createElement('div');
  const projectDeleteBtn = document.createElement('div');
  projectContainer.classList.add('project-div');
  projectName.classList.add('project-div-name');
  projectContainer.id = 'p'+ nameId;
  projectName.textContent = name;
  projectAddTodoBtn.textContent = 'Add';
  projectAddTodoBtn.id = 'add'+ nameId;
  projectDeleteBtn.textContent = 'Delete';
  projectDeleteBtn.id = 'delete'+ nameId;

  projects.appendChild(projectContainer);
  projectContainer.appendChild(projectName);
  projectContainer.appendChild(projectDeleteBtn);
  projectContainer.appendChild(projectAddTodoBtn);
}
