// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
  const container  = document.createElement('div');
  const date = document.createElement('span');
  const h1 = document.createElement('h1');
  const temp = document.createElement('span');

  container.appendChild(date);
  container.appendChild(h1);
  container.appendChild(temp);

  date.textContent = 'March 28, 2019';
  h1.textContent = 'Lambda Times';
  temp.textContent = '98°';

  container.classList.add('header');
  date.classList.add('date');
  temp.classList.add('temp');

  return container;
}

const headerParent = document.querySelector('.header-container');

headerParent.appendChild(Header());
