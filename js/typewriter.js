let title = document.getElementById('page-title');
let text = 'agentisnotreal';

let typewriter = setInterval(() => {
    if (title.textContent.length < text.length) {
        title.textContent += text.charAt(title.textContent.length);
    } else clearInterval(typewriter);
}, 100);