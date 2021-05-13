import { formatNumber } from './formatNumber.js';
import { calcDeadline } from './calcDeadline.js';
import { updateClock } from './updateClock.js';

function renderClock(selector, targetDate) {
    // validation

    // logic
    const DOM = document.querySelector(selector);

    const time = calcDeadline(targetDate);
    const titles = ['days', 'hours', 'minutes', 'seconds'];
    let HTML = '';

    for (let i = 0; i < titles.length; i++) {
        const formatedNumber = formatNumber(time[i]);
        HTML += `<div class="time">
                    <div class="value">${formatedNumber}</div>
                    <div class="title">${titles[i]}</div>
                </div>`;
    }

    // result return
    DOM.innerHTML = HTML;

    setInterval();          // daugkartine
}

export { renderClock }