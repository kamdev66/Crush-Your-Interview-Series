let examplePromise = new Promise((resolve, reject) => {
	let timeout = 3000;
	let randomWaitTime = Math.floor(Math.random() * 5000) + 1;
	console.log(randomWaitTime);
	if (randomWaitTime <= timeout) {
		setTimeout(() => {
			resolve();
		}, randomWaitTime);
	} else {
		setTimeout(() => {
			reject();
		}, randomWaitTime);
	}
});

examplePromise
	.then(() => {
		console.log("RESOLVED!");
	})
	.catch(() => {
		console.log("REJECTED!");
	});