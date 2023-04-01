let activated = false;

const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', 'Enter'];
let keypresses = [];

document.getElementById('secret').style = 'visibility: visible;';

document.addEventListener('keydown', event => {
    if (!konamiSequence.includes(event.key)) return;

    keypresses.push(event.key);
    if (keypresses[keypresses.length - 1] != konamiSequence[keypresses.length - 1]) keypresses = [];
    
    if (keypresses.toString() == konamiSequence.toString()) return window.location = 'https:/\/www.youtube.com/watch?v=oHg5SJYRHA0';
    setTimeout(() => { keypresses = []; }, 3000);
});