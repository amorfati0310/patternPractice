export class FormView {
  constructor(selector){
    this.form = null;
    this.inputEl = null;
    this.init(selector);
    this.sendTodoText = null;
  }
  init(selector){
    this.form = document.querySelector(selector)
    this.inputEl = document.querySelector('input', this.form)
    this.inputEl.focus();
    this.handleOnSubmit();
  }
  handleOnSubmit(){
    this.form.addEventListener('submit', (e) => {
      const target = e.target;
      const todoText = this.inputEl.value.trim();
      // e.preventDefault 자체적인 event발생을 막는다.
      e.preventDefault();
      if(todoText){
        this.clearInput();
        this.sendTodoText(todoText);
      } 
    });
  }
  clearInput(){
    this.inputEl.value='';
  }
}