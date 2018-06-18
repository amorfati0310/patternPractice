import { FormView } from './FormView.js';
import { ListView } from './ListView.js';
import { FolidingView } from './FoldingView.js';
import { TodoModel } from './TodoModel.js';
import { TodoController } from './TodoController.js';
import { CountsView } from './CountsView.js';

const listItemTemplate = `
  <li><button class="complete-btn"></button><p class="todo-text"></p><button class="delete-btn">X</button></li>
`


const todoModel = new TodoModel();
const formView = new FormView('.todo-app .user-form');
const listView = new ListView('.todo-app .todo-list');
const folidingView = new FolidingView('.folding');
const countsView = new CountsView('.counts-box');

const todoView = {
  formView,
  listView,
  folidingView, 
  countsView,
}

const todoController = new TodoController({
  todoModel, 
  todoView,
})

console.dir(todoController);



document.addEventListener('DOMContentLoaded', e=>{
  todoController.init();
})
