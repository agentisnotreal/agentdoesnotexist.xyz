// time is hidden by default so that a broken clock isn't visible for people with js disabled
let time = document.getElementById('time');
time.style = 'visibility: visible;';

const format = (o, t) => new Intl.DateTimeFormat('en-AU', o).format(t)

let currentDate = new Date();

// this is not entirely accurate, as daylight saving starts on the first sunday of october/april, not the first day
let sydOffset = (currentDate.getMonth() >= 9) && (currentDate.getMonth() <= 3) ? 11 : 10
let sydOffsetStr = sydOffset == 10 ? 'AEST, UTC + 10' : 'AEDT, UTC +11';

// for UTC+10, getTimezoneOffset() returns -600 (mins)
let userOffset = currentDate.getTimezoneOffset() / -60

let utcTime = new Date(currentDate.getTime() - (userOffset * 3600000))
let sydTime = new Date(utcTime.getTime() + (sydOffset * 3600000))

time.textContent = `it's ${format({ timeStyle: 'short', hour12: false}, sydTime)} on ${format({ weekday: 'long', month: 'long', day: 'numeric'}, sydTime).toLocaleLowerCase()} for me (${sydOffsetStr})`