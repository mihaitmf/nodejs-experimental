/**
 setTimeout is used to simulate a blocking async operation.
 We are creating three promises and appending a string to the original variable called "message".
 We should use Promise.all when we don’t care about the order of execution but finally the "message" should
be filled with the expected content.
*/

let message = "";

promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        message += "my";
        console.log('In promise1: ', message);
        resolve(message);
    }, 2000)
});

promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        message += " first";
        console.log('In promise2: ', message);
        resolve(message);
    }, 2000)
});

promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        message += " promise";
        console.log('In promise3: ', message);
        resolve(message);
    }, 2000)
});

const printResult = (results) => {
    console.log("Results = ", results, " --- message = ", message)
};

function main() {
    // See the order of promises. Final result will be according to it
    Promise.all([promise1, promise2, promise3]).then(printResult);
    Promise.all([promise2, promise1, promise3]).then(printResult);
    Promise.all([promise3, promise2, promise1]).then(printResult);
    console.log("This executes synchronous. Initial message: \"" + message + "\"");
}

main();
