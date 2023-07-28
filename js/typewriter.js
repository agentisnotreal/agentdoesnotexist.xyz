let title = document.getElementById('page-title');
let caret = document.getElementById('caret');
let text = 'agentisnotreal';

title.style = 'border-right: 5px solid black;';
let typewriter = setInterval(() => {
    if (title.textContent.length < text.length) title.textContent += text.charAt(title.textContent.length);
    else {
        title.style = 'border-right: 5px solid black; animation: blink-animation 1s steps(5, start) infinite;'
        clearInterval(typewriter);
    }
}, 100);