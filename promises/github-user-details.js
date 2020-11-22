const request = require("request");

function makeAsyncRequest(url) {
    // Setting URL and headers for request
    const options = {
        url: url,
        headers: {
            'User-Agent': 'request'
        }
    };

    // Return new promise
    return new Promise(function (resolve, reject) {
        // Do async job
        console.log('--- Make actual request');
        request.get(options, function (err, resp, body) {
            if (err) {
                reject(err);
            } else {
                resolve(body);
            }
        })
    })
}

const errHandler = function (err) {
    console.log(`--- Error: ${err}`);
};

function main() {
    const userDetailsUrl = 'https://api.github.com/users/mihaitmf';

    console.log('--- Make async request that returns a promise');
    const userDetailsPromise = makeAsyncRequest(userDetailsUrl);

    // Get user details, after that get count of public repos and make another request to list repos from URL
    userDetailsPromise
        .then(function (result) {
            const userDetails = JSON.parse(result);

            // Use user details from here
            console.log('--- Async request finished. Fetched user details:\n', userDetails);

            return userDetails;

        }, errHandler)
        .then(function (userDetails) {
            const countRepos = userDetails.public_gists + userDetails.public_repos;
            console.log(`--- Count public repos and gists: ${countRepos}`);

            return userDetails;

        }, errHandler)
        .then(function (userDetails) {
            console.log('--- Make async request that returns a promise');
            const reposDetailsPromise = makeAsyncRequest(userDetails.repos_url).then(JSON.parse);
            return reposDetailsPromise

        }, errHandler)
        .then(function (reposDetails) {
            const truncatedReposDetails = JSON.stringify(reposDetails).substring(0, 256);
            console.log('--- Async request finished. Fetched repos details:\n', truncatedReposDetails);
        }, errHandler);

    for (let i = 0; i < 9; i++) {
        setTimeout(() => {
            console.log(`+++ Sync call after ${i / 4} sec`);
        }, i * 250);
    }
}

main();
