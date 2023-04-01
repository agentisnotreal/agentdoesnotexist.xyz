let activated = false;

const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let keypresses = [];

document.getElementById('secret').style = 'visibility: visible;';

document.addEventListener('keydown', event => {
    if (!konamiSequence.includes(event.key)) return;

    if (activated === false) {
        setTimeout(() => {
            keypresses = [];
            activated = false;
        }, 3000);
        activated = true;
    }

    keypresses.push(event.key);
    if (keypresses[keypresses.length - 1] != konamiSequence[keypresses.length - 1]) {
        keypresses = [];
        activated = false;
    }

    if (keypresses.toString() == konamiSequence.toString()) {
        window.location = 'https:/\/www.youtube.com/watch?v=oHg5SJYRHA0';
        activated = false;
    }
});