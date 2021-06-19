// Retrieve last commit from GitHub
async function getLastCommit() {
    var data = {
        sha: "",
        url: "",
        message: "",
        date: ""
    }

    return new Promise((resolve, reject) => {
        fetch("https://api.github.com/repos/agentisnotreal/agentdoesnotexist.xyz/commits/main")
            .then(function(res) {
                return res.json();
            }).then(function(body) {
                if (!body) {
                    return reject(new Error("Failed to receive commit data from GitHub! Error: No body"));
                } else {
                    var date = new Date(body.commit.committer.date);
                    data.date = parseDate(date);

                    data.sha = body.sha;
                    data.url = body.html_url;
                    data.message = body.commit.message;
                    return resolve(data);
                }
            }).catch(function(e) {
                reject(new Error("Failed to receive commit data from GitHub! Error: " + e.message));
            })
    })
}

// Display Commit ID
async function setDisplayedCommit(element) {
    var a = document.getElementById(element);
    try {
        var cData = await getLastCommit();
        a.innerHTML = "git-" + cData.sha.substr(0, 7);
        a.href = cData.url;
        a.title = "git-" + cData.sha.substr(0, 7) + " | " + cData.message + " [" + cData.date + "]";
        return;
    } catch (e) {
        console.error(e);
        a.innerHTML = "git-UNKNOWN";
    }
}

// Date parsing
function parseDate(date) {
    function addDigit(n) {
        if (n.toString().length == 1) {
            return "0" + n;
        } else return n;
    };
    return addDigit(date.getDate()) + "/" + addDigit((date.getMonth() + 1)) + "/" + addDigit(date.getFullYear()) + " | " + addDigit(date.getHours()) + ":" + addDigit(date.getMinutes())
}