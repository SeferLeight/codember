fs = require('fs');

const solution01 = require('./solutions/solution01');
const solution02 = require('./solutions/solution02');
const solution03 = require('./solutions/solution03');
const solution04 = require('./solutions/solution04');
const solution05 = require('./solutions/solution05');

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

function challenge03() {
	try {
		const input = fs.readFileSync('./mocks/encryption_policies.txt', 'utf8');
		const inputWithoutCarriageReturn = input.replace(/[\r]/gm, '');
		const keys = inputWithoutCarriageReturn.split('\n');
		const keysChecked = solution03.checkKeysArray(keys);
		console.log('Solución 3: ', keysChecked.invalidKeys[41]);
	} catch (err) {
		console.log(err);
	}
}

function challenge04() {
	try {
		const input = fs.readFileSync('./mocks/files_quarantine.txt', 'utf8');
		const inputWithoutCarriageReturn = input.replace(/[\r]/gm, '');
		const files = inputWithoutCarriageReturn.split('\n');
		const filesChecked = solution04.checkFilesArray(files);
		console.log('Solución 4: ', filesChecked.validFiles[32]);
	} catch (err) {
		console.log(err);
	}
}

function challenge05() {
	try {
		const input = fs.readFileSync('./mocks/database_attacked.txt', 'utf8');
		const inputWithoutCarriageReturn = input.replace(/[\r]/gm, '');
		const rawUsers = inputWithoutCarriageReturn.split('\n');
		const usersChecked = solution05.validateRawUsersArray(rawUsers);
		const message = solution05.getInvalidUsersMessage(
			usersChecked.invalidUsers
		);
		console.log('Solución 5: ', message);
	} catch (err) {
		console.log(err);
	}
}

challenge01();
challenge02();
challenge03();
challenge04();
challenge05();
