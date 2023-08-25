const validateUsernamePassword = (username, password) => {
	return new Promise((resolve, reject) => {
		if (username == "ABC" && password == "123") {
			resolve("SUCCESS!");
		} else {
			reject("FAILURE!");
		}
	});
};

validateUsernamePassword("ABC", "123")
	.then((msg) => {
		console.log(msg);
	})
	.catch((err) => {
		console.log(err);
	});