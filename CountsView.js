export class CountsView {
  constructor(selector){
    this.counts = document.querySelector(selector);
    this.totalCountEl = this.counts.querySelector('.total-count');
    this.completeCountEl = this.counts.querySelector('.complete-count')
    this.totalCounts = 0;
    this.completeCounts = 0;
    this.updateView();
  }
  updateView(todos){
    if(todos) this.updateCounts(todos)
    this.totalCountEl.innerText = this.totalCounts;
    this.completeCountEl.innerText = this.completeCounts;
  }
  updateCounts(todos){
    this.totalCounts = todos.size;
    this.completeCounts = [...todos].filter(([idx,todo])=> todo.completed).length
  }
  
}