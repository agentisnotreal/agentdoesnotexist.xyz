async function getData(discordid) {
    return new Promise(async function(resolve, reject) {
        let info = {
            bloxlink: {},
            rover: {}
        };

        let roverFetch = await fetch('https://cors.agentdoesnotexist.xyz/rover', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'discordid': discordid
            },
        });

        info.rover = await roverFetch.json();

        let bloxlinkFetch = await fetch('https://api.blox.link/v1/user/' + discordid);
        info.bloxlink = await bloxlinkFetch.json();
        return resolve(info);
    })
}

function cleanWorkspace(avatar, bloxlink, rover, button) {
    avatar.src = 'http://www.roblox.com/Thumbs/Avatar.ashx?x=250&y=250&Format=Png&userid=1';

    // Clear RoVer data
    rover.username.textContent = 'Unknown';
    rover.id.textContent = 'Unknown';
    rover.id.href = '';

    // Clear Bloxlink data
    bloxlink.id.textContent = 'Unknown';
    bloxlink.id.href = '';

    // Button update
    button.value = 'Lookup';
    button.style.backgroundColor = '#4abea1'
}

function setData(discordid) {
    var avatar = document.getElementById('avatar');
    var button = document.getElementById('submit');
    var bloxlink = {
        id: document.getElementById('bloxlinkId')
    };
    var rover = {
        username: document.getElementById('roverUsername'),
        id: document.getElementById('roverId')
    };

    cleanWorkspace(avatar, bloxlink, rover, button);

    if (document.getElementById(discordid).value == '') {
        button.value = 'Enter a Discord ID!';
        button.style.backgroundColor = '#bf4a67';
        return;
    } else if (isNaN(Number(document.getElementById(discordid).value))) {
        button.value = 'Enter a Discord ID!';
        button.style.backgroundColor = '#bf4a67';
        return;
    }

    button.value = 'Please wait...';
    button.style.backgroundColor = '#bfa24a';
    button.disabled = true;

    getData(document.getElementById(discordid).value).then(function(data) {
        if (data.rover.status == 'ok') {
            rover.username.textContent = data.rover.robloxUsername;
            rover.id.textContent = data.rover.robloxId;
            rover.id.href = 'https://www.roblox.com/users/' + data.rover.robloxId + '/profile';
            avatar.src = 'http://www.roblox.com/Thumbs/Avatar.ashx?x=250&y=250&Format=Png&userid=' + data.rover.robloxId;
        } else {
            rover.username.textContent = 'N/A';
            rover.username.textContent = 'N/A';
        }

        if (data.bloxlink.status == 'ok') {
            bloxlink.id.textContent = data.bloxlink.primaryAccount;
            bloxlink.id.href = 'https://www.roblox.com/users/' + data.bloxlink.primaryAccount + '/profile';
        } else {
            bloxlink.id.textContent = 'N/A';
        }

        button.value = 'Lookup';
        button.style.backgroundColor = '#4abea1';
        button.disabled = false;
        return;
    })
}