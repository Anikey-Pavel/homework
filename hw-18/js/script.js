let num = [20, 5, 8, 24, 35, 81, 30, 14, 36, 47, 52, 19, 23, 33, 17, 64, 39, 73, 48, 30,];

function min() {
	for (let i = 0; i < num.length; i++) {
		if (num[0] > num[i]) {
			num[0] = num[i]
		}
	}
	return console.log(num[0])
}

min()


// ---------------------------------------------------------------------------------------------------------------------------------


let num2 = [20, 5, 8, 24, 35, 81, 30, 14, 36, 47, 52, 19, 23, 33, 17, 64, 39, 73, 48, 30,];

function max() {
	for (let i = 0; i < num.length; i++) {
		if (num[0] < num[i]) {
			num[0] = num[i]
		}
	}
	return console.log(num[0])
}

max()