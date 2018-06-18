export class TodoController {
  constructor({todoModel, todoView}){
    this.todoModel = todoModel
    const {formView, listView, foldingView, countsView} = todoView;
    Object.assign(this, { formView, listView, foldingView, countsView, 
      todoModelNotifyMethods: {},
    });
    // this.countsView = countsView
    // this.formView = formView;
    // this.listView = listView;
    // this.foldingView = folidingView;
    // this.modelNotifyMethods = {}
  }
  init(){
   this.formView.sendTodoText = this.sendTodoText.bind(this)
   this.listView.sendStateTodo = this.sendStateTodo.bind(this);
   this.subscribe();
   this.setModelNotifyMethods();
  }
  sendStateTodo(todoId, state){
    state === "delete" ? this.todoModel.deleteTodo(todoId)
    : this.todoModel.updateCompleted(todoId)
  }
  subscribe(){
    debugger;
    this.todoModel.subscribe(this.notifyUpdateListView.bind(this))
    this.todoModel.subscribe(this.notifyUpdateCountsView.bind(this))
  }
  setModelNotifyMethods(){
    this.todoModelNotifyMethods = {
      'add': (todos)=>  this.listView.getList(todos),
      // 'add': (todos)=>this.listView.getList(todos),
      'delete': (id)=>this.listView.deleteEl(id),    
      'update': (updateData)=>this.listView.getUpdatedTodo(updateData)
    }
  }
  notifyUpdateCountsView(todos){
    this.countsView.updateView(todos)
  }
  handleAddTodo(todos){
    this.listView.getList(todos)
  }
  handleDeleteTodo(id){

  }
  // subscribe
  sendTodoText(todoText){
   this.todoModel.addTodo(todoText);
  }
  notifyUpdateListView(todos, type){
    this.todoModelNotifyMethods[type](todos)
  }
  sendUpdateTodo(id){
    this.listView.getUpdatedTodo(id)
  }
  deleteTodo(todoId){
    this.todoModel.deleteTodo(todoId)
  } 
  deleteEl(todoId){
    this.listView.deleteEl(todoId)
  }
}