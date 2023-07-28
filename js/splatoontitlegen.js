let adjective = await fetch('./js/splatoontitles/adjective.json').then(x => x.json());
let subject = await fetch('./js/splatoontitles/subject.json').then(x => x.json());

let titleEl = document.getElementById('splatoon-title')
let ptextEl = document.getElementById('programmer-text');

let title = (adjective[Math.round(Math.random() * (adjective.length))] + ' ' + subject[Math.round(Math.random() * (subject.length))]).toLowerCase();
let ptext = ' & sometimes a programmer';


let typewriter = setInterval(() => {
    if (titleEl.textContent.length < title.length) titleEl.textContent += title.charAt(titleEl.textContent.length);
    else {
        if (ptextEl.textContent.length < ptext.length) ptextEl.textContent += ptext.charAt(ptextEl.textContent.length);
        else {
            document.getElementById('asterisk').textContent = '*';
            document.getElementById('splatoon-title-disclaimer').style = 'display: block;'
            clearInterval(typewriter);
        }
    }
}, 30);