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

function compilerWithSwitch(input) {
	const inputArray = Array.from(input);
	let print = '';
	let value = 0;
	inputArray.forEach((character) => {
		switch(character){
			case '#':
					value += 1;
				break;
			case '@': 
					value -= 1;
				break;
			case '*':
					value *= value;
				break;
			case '&':
					print += String(value);
				break;
		}
	});
	return print;
}
module.exports = { compiler, compilerWithIf, compilerWithSwitch };
