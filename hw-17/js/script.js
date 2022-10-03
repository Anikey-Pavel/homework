let obj1 = {
	name: 'Dima',
	age: 20,
	hair: 'white',
	habitats: {
		isSmoking: false,
		isDrinking: true,
		isGay: true,
		isLearning: true,
	}
}

let obj2 = {
	name: 'Dima',
	age: 20,
	hair: 'white',
	habitats: {
		isSmoking: false,
		isDrinking: true,
		isGay: true,
		isLearning: true,
	}
}


function compare(obj1, obj2) {

	for (let key in obj1) {

		if (!obj2.hasOwnProperty(key)) {
			return false;
		}
		if (obj1[key].valueOf() !== obj2[key].valueOf()) {
			if (!compare(obj1[key], obj2[key])) {
				return false;
			}

		}
	}
	return true;
}

console.log(compare(obj1 == obj2))