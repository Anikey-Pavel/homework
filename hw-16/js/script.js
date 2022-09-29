function showName() {
	console.log(arguments.callee.name);
}

showName();