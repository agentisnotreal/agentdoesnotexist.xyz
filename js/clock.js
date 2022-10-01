let time = document.getElementById('time');

time.style = 'visibility: visible;';
time.textContent = new Date(new Date().getTime() + 10 * 3600 * 1000).toUTCString().replace(/GMT$/, 'AEDT (UTC +11)');
setInterval(() => {
    time.textContent = new Date(new Date().getTime() + 10 * 3600 * 1000).toUTCString().replace(/GMT$/, 'AEDT (UTC +11)');
}, 1000)