export function menu() {
    const main = document.createElement('div');
    const title = document.createElement('h1');
    const desc = document.createElement('p');

    title.textContent = 'Our beloved menu';
    desc.textContent = 'Turkish Tea only';

    main.appendChild(title);
    main.appendChild(desc);
    
    return main;
}