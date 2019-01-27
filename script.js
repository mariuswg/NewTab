const digitsHours   = document.querySelector('.hours');
const digitsMinutes = document.querySelector('.minutes');
const digitsSeconds = document.querySelector('.seconds');
const digitalClock  = document.querySelector('.clock');
const dateElement   = document.querySelector('.date');
const dayElement    = document.querySelector('.day');
const header        = document.querySelector('.header');
const days          = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function setTime() {
    const now     = new Date();
    const date    = now.toLocaleDateString();
    const day     = days[now.getDay()];
    const hours   = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    dateElement.innerHTML = date;
    dayElement.innerHTML  = day;
    populateDigitalClock(hours, minutes, seconds);
    digitalClock.classList.remove('hidden');
}

function populateDigitalClock(h, m, s) {
    digitsHours.innerHTML   = formatDigits(h);
    digitsMinutes.innerHTML = formatDigits(m);
    digitsSeconds.innerHTML = formatDigits(s);
}

function formatDigits(n) {
    return n > 9 ? n : "0" + n;
}

function toggleSeconds() {
    digitsSeconds.classList.toggle('hidden');
}

function toggleDarkMode() {
    header.classList.toggle('dark-mode');
}

setInterval(setTime, 1000); // 1 second
digitalClock.addEventListener('click', toggleSeconds);
header.addEventListener('dblclick', toggleDarkMode);