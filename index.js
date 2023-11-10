fs = require('fs');

const solution01 = require('./solutions/solution01');

function challenge01() {
	try {
		const MESSAGE = fs.readFileSync('./mocks/message01.txt', 'utf8');
		const pattern = solution01.patternMessage(MESSAGE);
		console.log(pattern);
	} catch (err) {
		console.log(err);
	}
}

challenge01();
