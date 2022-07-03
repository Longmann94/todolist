class Project{
  constructor(projectArr){
    this.projectArr = projectArr;
  }

  addTodo(todo){
    this.projectArr.push(todo);
  }

  removeTodo(todo){
    console.log("remove todo");
  }

  displayTodo(){
    console.log('todo for this project being displayed.');
  }
}

export default Project;
