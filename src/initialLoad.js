export default function initialLoad() {

  const element = document.querySelector('#content');
  
  const mainContainer = document.createElement('div');
  mainContainer.classList.add('main-container');
  element.appendChild(mainContainer);
  mainContainer.textContent = 'this is the main container';
}
