export class ListView {
  constructor(selector){
    this.el = null;
    this.list = null;
    this.init(selector);
    this.sendStateTodo = null;
  } 
  init(selector){
    this.el = document.querySelector(selector)
    this.bindEvents()
  }
  getList(todos){
    this.list = todos;
    this.updateListView(this.list);
  }
  updateListView(list){
    this.el.innerHTML = this.makeTemplate(list)
  }
  makeTemplate(list){
    let template = ``;
    list.forEach((todo)=> {
      template+= `<li id=todo-${todo.id}><button class="complete-btn"></button><p class="todo-text">${todo.text}</p><button class="delete-btn">X</button></li>`
    });
    return template;
  }
  bindEvents(){
    this.el.addEventListener('click', e=>this.handleClicked(e))
    this.el.addEventListener('dbclick',e=>this.handleDbClick(e))
  }
  handleClicked(e){
      if(e.target.className==="complete-btn" || e.target.className==="delete-btn"){
        const btn = e.target
        const todoId = +btn.parentElement.id.match(/\d/)[0]
        const state  = e.target.className==="complete-btn" ? 'complete' : 'delete'
        return this.sendStateTodo(todoId, state)
      }
  }
  handleCompleteState(completed, completedBtn, todoTextEL){
    if(completed){
      completedBtn.innerText = "V"
      todoTextEL.classList.add('completed')
    } 
    else{
      completedBtn.innerText =""
      todoTextEL.classList.remove('completed')
    }
  }
  getUpdatedTodo(todos){
    debugger;
    [...todos].forEach(([idx, todo])=>{
      const updatedTodo = this.el.querySelector(`#todo-${todo.id}`)
      const completedBtn = updatedTodo.firstElementChild
      const todoTextEL = completedBtn.nextElementSibling 
      this.handleCompleteState(todo.completed, completedBtn, todoTextEL)
    })
  }
  deleteEl(todoId){
    const willRemovedTodo = this.el.querySelector(`#todo-${todoId}`)
    willRemovedTodo.remove()
  }
}