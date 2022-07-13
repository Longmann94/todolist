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
    this.projectArr.forEach(todo => console.log(todo));
  }
}

export default Project;
