import "./style.css";
import { home } from './home.js';

const defaultDiv = document.getElementById('content');
const firstLoad = home();
defaultDiv.appendChild(firstLoad);