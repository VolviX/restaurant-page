export function home() {
    const main = document.createElement('div');
    const title = document.createElement('h1');
    const desc = document.createElement('p');
    const hours = document.createElement('p');
    const address = document.createElement('p');

    title.textContent = 'Welcome to Kebabistan';
    desc.textContent = 'Where delicious flavors meet warm hospitality. Enjoy fresh, locally-sourced dishes in a cozy atmosphere!';
    hours.textContent = 'Hours: Mon-Sat: 11 AM - 10 PM, Sun: 10 AM - 8 PM';
    address.textContent = '123 Maple Street, Boulder, CO';

    main.appendChild(title);
    main.appendChild(desc);
    main.appendChild(hours);
    main.appendChild(address);

    return main;
};