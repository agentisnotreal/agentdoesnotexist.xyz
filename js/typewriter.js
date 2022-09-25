let title = document.getElementById('page-title');
let pro = document.getElementById('pro');
let text = 'agentisnotreal';

let typewriter = setInterval(() => {
    if (title.textContent.length < text.length) {
        title.textContent += text.charAt(title.textContent.length);
    } else {
        pro.style = 'display: inline-block';
        clearInterval(typewriter);
    }
}, 75);