class Project{
  constructor(name){
    this.name = name;
    this.projectArr = [];
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
