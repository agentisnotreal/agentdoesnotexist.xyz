let time = document.getElementById('time');

time.textContent = new Date(new Date().getTime() + 10 * 3600 * 1000).toUTCString().replace(/GMT$/, 'AEST (UTC +10)');
setInterval(() => {
    time.textContent = new Date(new Date().getTime() + 10 * 3600 * 1000).toUTCString().replace(/GMT$/, 'AEST (UTC +10)');
}, 1000)