let activated = false;
let colourSchemeChanged = false;

const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', 'Enter'];
let keypresses = [];

document.getElementById('secret').style = 'visibility: visible;';

document.addEventListener('keydown', event => {
    if (!konamiSequence.includes(event.key)) return;

    if (event.key == 'ArrowUp' && !activated) {
        activated = true;

        setTimeout(() => {
            if (keypresses.toString() == konamiSequence.toString()) {
                if (!colourSchemeChanged) changeColourScheme(false);
                else changeColourScheme(true)
            }

            activated = false;
            keypresses = [];
        }, 3000);
    };

    keypresses.push(event.key);
});

function changeColourScheme(toNormal) {
    let title = document.getElementById('page-title');
    let icons = document.getElementsByClassName('icon');
    let aTags = document.getElementsByTagName('a');
    if (!toNormal) {
        colourSchemeChanged = true;

        document.body.style = 'background: linear-gradient(-45deg, #ffc6ff, #bdb2ff, #a0c4ff, #9bf6ff, #caffbf, #fdffb6, #ffd6a5, #ffadad); background-size: 400%; color: black;'
        title.style = 'border-right: 5px solid black; animation: blink-animation 1s steps(5, start) infinite;'

        for (let icon of icons) icon.style = 'filter: invert(100%);';
        for (let a of aTags) a.style = 'color: slategrey;';
    } else {
        colourSchemeChanged = false;

        document.body.style = '';
        title.style = '';

        for (let icon of icons) icon.style = '';
        for (let a of aTags) a.style = '';
    }
}