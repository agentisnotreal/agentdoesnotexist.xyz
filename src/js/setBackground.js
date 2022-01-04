var backgrounds = [{
        'name': 'seacliff',
        'location': 'Sea Cliff Bridge - Clifton NSW, AU'
    },
    {
        'name': 'shibuya',
        'location': 'Shibuya Crossing - Tokyo, JP'
    },
    {
        'name': 'sydney',
        'location': 'Sydney Harbour Bridge - The Rocks NSW, AU'
    },
    {
        'name': 'sydney-nye21',
        'location': 'Sydney New Years Eve (2021) - Mrs Macquaries Point NSW, AU'
    }
]

function getRandomBackground() {
    var index = Math.floor((Math.random() * backgrounds.length));
    return backgrounds[index];
}

function setBackground(greyscale) {
    if (!greyscale) {
        greyscale = false;
    }
    var background = getRandomBackground();

    var location = document.getElementById('location');

    if (greyscale) {
        background.name += '-greyscale';
    }

    document.body.style.backgroundImage = 'url(\'https://cdn.agentdoesnotexist.xyz/agentdoesnotexist-xyz/' + background.name + '.jpg\')';
}