'use strict';

const path = window.location.pathname;

const id = path.replace('/', '');
console.log(id);

fetch("/lytrvn.github.io/guests.json")
.then(r => r.json())
.then(data => {
    const guest = data[id];
    if(!guest) {
        document.querySelector('.guest-name').textContent = 'Дорогой гость!';
        return;
    }
    document.querySelector('.guest-name').textContent = guest.name;
})