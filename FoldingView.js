export class FolidingView {
  constructor(selector){
    this.folding = document.querySelector(selector);
    this.buttonText = "-"
    this.isfoldingStateOpen = true  
    this.foldingButton = null;
    this.children = null; 
    this.init();
  }
  init(){
    const titleBox = `
    <div class="title-box">
        <h4>해야할 일들</h4><button class="folding-button">${this.buttonText}</button> 
    </div>`
    this.children = this.folding.firstElementChild
    this.folding.insertAdjacentHTML('afterbegin', titleBox)
    this.foldingButton = this.folding.querySelector('.folding-button')
    this.bindEvents()
  }
  bindEvents(){
    this.foldingButton.addEventListener('click', e => this.handleClick(e))
  }
  handleClick(e){
    this.toggleState()
    this.updateBtnText(this.isfoldingStateOpen)
    this.updateView()
  }
  toggleState(){
    this.isfoldingStateOpen = !this.isfoldingStateOpen   
  }
  updateBtnText(state){
    this.buttonText = state ? "-" : "+"
  }
  updateView(){
    this.foldingButton.innerText = this.buttonText
    this.updateChildrenView()
  }
  updateChildrenView(){
    if(this.isfoldingStateOpen) this.children.classList.remove('hidden')
    else this.children.classList.add('hidden')
  }
}