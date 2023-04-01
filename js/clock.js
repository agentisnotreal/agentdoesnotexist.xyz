let time = document.getElementById('time');

const getSydOffset = (date) => {
    const stdTimezoneOffset = () => {
        let jan = new Date(0, 1)
        let jul = new Date(6, 1)
        return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset())
    }

    if (date.getTimezoneOffset() < stdTimezoneOffset()) return 11;
    else return 10;
}

time.style = 'visibility: visible;';

let offSet = 10;
let offSetStr = 'AEST (UTC + 10)';

if (getSydOffset(new Date(Date.now())) === 11) {
    offSet++;
    offSetStr = 'AEDT (UTC +11)';
}

time.textContent = new Date(new Date().getTime() + offSet * 3600 * 1000).toUTCString().replace(/GMT$/, offSetStr);
setInterval(() => {
    time.textContent = new Date(new Date().getTime() + offSet * 3600 * 1000).toUTCString().replace(/GMT$/, offSetStr);
}, 1000)