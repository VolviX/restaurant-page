export function about() {
    const main = document.createElement('div');
    const title = document.createElement('h1');
    const desc = document.createElement('p');

    title.textContent = 'Our amazing establishment';
    desc.textContent = 'A cozy haven dedicated to the art of Turkish tea. Savor the rich, aromatic flavors of our authentic, freshly brewed teas, served with warm hospitality.';

    main.appendChild(title);
    main.appendChild(desc);

    return main;
};