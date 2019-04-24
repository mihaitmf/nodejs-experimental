const request = require("request");
let userDetails;

function initialize() {
    // Setting URL and headers for request
    const options = {
        url: 'https://api.github.com/users/mihaitmf',
        headers: {
            'User-Agent': 'request'
        }
    };
    // Return new promise
    return new Promise(function(resolve, reject) {
        // Do async job
        console.log("Make request");
        request.get(options, function(err, resp, body) {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(body));
            }
        })
    })
}

function main() {
    console.log("Create promise");
    const initializePromise = initialize();

    initializePromise.then(function(result) {
        userDetails = result;
        console.log("Initialized user details");

        // Use user details from here
        console.log(userDetails);

        return userDetails;

    }, function(err) {
        console.log(`Error: ${err}`);

    }).then(function(result) {
        const countRepos = result.public_gists + result.public_repos;
        console.log(`Count public repos and gists: ${countRepos}`);
    });
}

main();
