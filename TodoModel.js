import {Observable} from './Observable.js';
export class TodoModel extends Observable{
  constructor() {
    super();
    this.todoId = 1;
    this.todos = new Map();
    this.updateTodo = null;
  }
  addCounter() {
    this.todoId++;
  }
  addTodo(text) {
    const todo = {text, completed: false, id: this.todoId}
    this.todos.set(this.todoId, todo);
    this.addCounter();
    this.notify(this.todos, 'add')
    // this.notifyUpdate(this.todos)
  }
  getTodo(id) {
    return this.todos.get(id);
  }
  updateCompleted(id){
    const todo = this.todos.get(id)
    todo.completed = !todo.completed;
    this.notify(this.todos, 'update')
  }
  deleteTodo(id){
    this.todos.delete(id)
    this.notify(id, 'delete')
  }
}