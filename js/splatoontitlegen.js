let adjective = await fetch('./js/splatoontitles/adjective.json').then(x => x.json());
let subject = await fetch('./js/splatoontitles/subject.json').then(x => x.json());

document.getElementById('splatoon-title').textContent = (adjective[Math.round(Math.random() * (adjective.length))] + ' ' + subject[Math.round(Math.random() * (subject.length))]).toLowerCase();