async function getLastCommit() {
    var data = {
        sha: "",
        url: ""
    }

    return new Promise((resolve, reject) => {
        fetch("https://api.github.com/repos/agentisnotreal/agentdoesnotexist.xyz/commits/main")
            .then(function(res) {
                return res.json();
            }).then(function(body) {
                if (!body) {
                    return reject(new Error("Failed to receive commit data from GitHub! Error: No body"));
                } else {
                    data.sha = body.parents[0].sha;
                    data.url = body.parents[0].html_url;
                    return resolve(data);
                }
            }).catch(function(e) {
                reject(new Error("Failed to receive commit data from GitHub! Error: " + e.message));
            })
    })
}

async function setDisplayedCommit(element) {
    var a = document.getElementById(element);
    try {
        var cData = await getLastCommit();
        a.innerHTML = "git-" + cData.sha.substr(0, 7);
        a.href = cData.url;
        return;
    } catch (e) {
        console.error(e);
        a.innerHTML = "git-UNKNOWN";
    }
}