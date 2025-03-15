import "./style.css";
import { home } from './home.js';

// first load
const defaultDiv = document.getElementById('content');
const firstLoad = home();
defaultDiv.appendChild(firstLoad);

// listening the navigation buttons
const nav = document.getElementById('nav');

nav.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const buttonId = event.target.id;

        switch (buttonId) {
            case 'home':
              console.log('Home button was clicked!');
              defaultDiv.textContent = '';
              defaultDiv.appendChild(home());
              break;
            case 'menu':
              console.log('Menu button was clicked!');
              defaultDiv.textContent = '';
              //defaultDiv.appendChild(menu());
              break;
            case 'about':
              console.log('About button was clicked!');
              defaultDiv.textContent = '';
              //defaultDiv.appendChild(about());
              break;
        }
    }
});