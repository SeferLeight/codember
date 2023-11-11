function compiler(input) {
	const inputArray = input.split('');
	let print = '';
	let value = 0;

	const operations = {
		'#': (value) => value + 1,
		'@': (value) => value - 1,
		'*': (value) => value * value,
	};

	inputArray.forEach((character) => {
		if (character === '&') print += String(value);
		else value = operations[character](value);
	});
	return print;
}

function compilerWithIf(input) {
	const inputArray = input.split('');
	let print = '';
	let value = 0;
	inputArray.forEach((character) => {
		if (character === '#') value += 1;
		if (character === '@') value -= 1;
		if (character === '*') value *= value;
		if (character === '&') print += String(value);
	});
	return print;
}

module.exports = { compiler, compilerWithIf };
