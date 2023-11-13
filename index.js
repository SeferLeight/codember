fs = require('fs');

const solution01 = require('./solutions/solution01');
const solution02 = require('./solutions/solution02');

function challenge01() {
	try {
		const message = fs.readFileSync('./mocks/message01.txt', 'utf8');
		const pattern = solution01.patternMessage(message);
		console.log('Solución 1: ', pattern);
	} catch (err) {
		console.log(err);
	}
}

function challenge02() {
	try {
		const input = fs.readFileSync('./mocks/message02.txt', 'utf8');
		const pattern = solution02.compiler(input);
		console.log('Solución 2: ', pattern);
	} catch (err) {
		console.log(err);
	}
}

challenge01();
challenge02();
