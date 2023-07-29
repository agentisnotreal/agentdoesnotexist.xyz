let time = document.getElementById('time');

// this is not entirely accurate, as daylight saving starts on the first sunday of october/april, not the first day
const getSydOffset = date => {
    if ((date.getMonth() >= 9) && (date.getMonth() <= 3)) return 11;
    else return 10;
}

time.style = 'visibility: visible;';

let currentDate = new Date();

let offSet = getSydOffset(currentDate);
let offSetStr = 'AEST, UTC + 10';
if (offSet === 11) offSetStr = 'AEDT, UTC +11';

let currentTime = new Date(new Date(currentDate.getTime() + offSet * 3600 * 1000).toUTCString());

time.textContent = `it's ${new Intl.DateTimeFormat('en-AU', { timeStyle: 'short', hour12: false, timeZone: 'Etc/UTC' }).format(currentTime)} on ${new Intl.DateTimeFormat('en-AU', { month: 'long' }).format(currentTime).toLocaleLowerCase()} ${currentTime.getUTCDate()} for me (${offSetStr})`