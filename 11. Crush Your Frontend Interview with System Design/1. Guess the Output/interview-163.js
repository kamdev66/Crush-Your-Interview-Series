let setTimeoutResolveReject = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("YES");
	}, 3000);
	setTimeout(() => {
		reject("NO")
	}, 2000);
});

setTimeoutResolveReject
.then((msg) => {
	console.log(msg);
})
.catch((err) => {
	console.log(err);
})