let adjective = await fetch('./js/splatoontitles/adjective.json').then(x => x.json());
let subject = await fetch('./js/splatoontitles/subject.json').then(x => x.json());

let title = document.getElementById('splatoon-title')
let ptext = document.getElementById('programmer-text');

let text = (adjective[Math.round(Math.random() * (adjective.length))] + ' ' + subject[Math.round(Math.random() * (subject.length))]).toLowerCase();
let pt = ' & sometimes a programmer';


let typewriter = setInterval(() => {
    if (title.textContent.length < text.length) {
        title.textContent += text.charAt(title.textContent.length);
    } else {
        if (ptext.textContent.length < pt.length) {
            ptext.textContent += pt.charAt(ptext.textContent.length);
        } else {
            document.getElementById('asterisk').textContent = '*';
            clearInterval(typewriter);
        }
    }
}, 30);