const range = len => {
	const arr = [];
	for (let i = 0; i < len; i++) {
		arr.push(i);
	}
	return arr;
};

const aftermathGen = () => {
	let chance = Math.random() * 100;
	if (chance > 50) {
		return 'Авария';
	} else {
		return 'Без последствий';
	}
};

const newPerson = () => {
	const statusChance = Math.random();
	return {
		penalty: Math.floor(Math.random() * 100),
		number: Math.floor(Math.random() * 10000),
		fullName: "testName",
		city: "testCity",
		score: Math.floor(Math.random() * 150)
	};
};

function makeData(...lens) {
	const makeDataLevel = (depth = 0) => {
		const len = lens[depth];
		return range(len).map(d => {
			return {
				...newPerson(),
				subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
			};
		});
	};

	return makeDataLevel();
}

export default makeData;