let adjective = await fetch('./js/splatoontitles/adjective.json').then(x => x.json());
let subject = await fetch('./js/splatoontitles/subject.json').then(x => x.json());

let tagline = document.getElementById('tagline');

let title = (adjective[Math.round(Math.random() * (adjective.length))] + ' ' + subject[Math.round(Math.random() * (subject.length))]).toLowerCase();

tagline.textContent = `${title} & sometimes a programmer`;
setTimeout(() => {
    tagline.textContent = `${title}* & sometimes a programmer`;
    document.getElementById('splatoon-title-disclaimer').style = 'color: rgba(0,0,0,1);';
}, 1500);