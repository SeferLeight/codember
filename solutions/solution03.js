function isValidKey(key) {
	const keySplit = key.split(':');

	const keyConfitionSplit = keySplit[0].trim().split(' ');
	const keyValue = keySplit[1].trim();

	const keyRange = keyConfitionSplit[0].split('-');
	const keyCaracter = keyConfitionSplit[1];

	let countCaracter = 0;
	for (let i = 0; i < keyValue.length; i++) {
		if (keyValue[i] === keyCaracter) {
			countCaracter++;
		}
	}

	if (countCaracter >= keyRange[0] && countCaracter <= keyRange[1]) {
		return true;
	}
	return false;
}

function checkKeysArray(keys) {
	const validKeys = [];
	const invalidKeys = [];
	keys.forEach((key) => {
		const isValid = isValidKey(key);
		if (isValid) {
			validKeys.push(key);
		} else {
			invalidKeys.push(key);
		}
	});
	return { validKeys, invalidKeys };
}

module.exports = { checkKeysArray, isValidKey };
