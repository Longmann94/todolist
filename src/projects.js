class Project{
  constructor(projectArr){
    this.projectArr = projectArr;
  }

  addTodo(todo){
    projectArr.push(todo);
  }

  removeTodo(todo){
    console.log("remove todo");
  }

  displayTodo(){
    
  }
}

export default Project;
