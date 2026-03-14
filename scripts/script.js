'use strict';

// guest name

const path = window.location.pathname;

const id = path.replaceAll('/', '');

fetch("/guests.json")
.then(r => r.json())
.then(data => {
    const guest = data[id];
    const [greeting, ...nameParts] = guest.name.split(' ');
    const fullName = nameParts.join(' ');
    if(!guest) {
        return;
    }
    document.querySelector('.guest-greeting').textContent = greeting;
    document.querySelector('.guest-name').textContent = fullName;
})

counter

const numbers = {
        days: document.getElementById('days'),
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds')
};

const weddingDate = new Date('2026-04-24T13:00:00');

function countdown() {
    const currentDate = new Date();
    const difference = weddingDate - currentDate;
    if(difference <= 0) {
        for(let key in numbers) {
            numbers[key].textContent = "0";
        }
        clearInterval(timeInterval);
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    numbers.days.textContent = String(days).padEnd(2, '0');
    numbers.hours.textContent = String(hours).padStart(2, '0');
    numbers.minutes.textContent = String(minutes).padStart(2, '0');
    numbers.seconds.textContent = String(seconds).padStart(2, '0');
}

countdown();
const timeInterval = window.setInterval(countdown, 1000);

// divider position

const numberWidth = document.querySelector('.item__number').offsetWidth;
const divider = document.querySelector('.divider');

divider.style.left = `${numberWidth + 27}px`;

