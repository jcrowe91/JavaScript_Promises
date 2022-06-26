console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

let watching = new Promise((resolve, reject) => {
    let userWatchingLivestream = false;

    if (userWatchingLivestream) {
        resolve("Thumbs up and Subscribe!")
    } else {
        reject("User left.")
    }
});

watching
.then((result) => console.log(result))
.catch((error) => console.log(error));