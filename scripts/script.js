'use strict';

// guest name

const path = window.location.pathname;

const id = path.replaceAll('/', '');

fetch("/guests.json")
.then(r => r.json())
.then(data => {
    const guest = data[id];
    if(!guest) {
        return;
    }
    document.querySelector('.guest-name').textContent = guest.name;
})

// counter

const numbers = {
        days: document.getElementById('days'),
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds')
};

const weddingDate = new Date('2026-04-24T15:00:00');

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

    numbers.days.textContent = days;
    numbers.hours.textContent = hours;
    numbers.minutes.textContent = minutes;
    numbers.seconds.textContent = seconds;
}

countdown();
const timeInterval = window.setInterval(countdown, 1000);


