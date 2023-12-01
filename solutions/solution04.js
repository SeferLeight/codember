function obtainChecksum(key) {
	let checksum = '';
	for (let i = 0; i < key.length; i++) {
		let count = 0;
		for (let j = 0; j < key.length; j++) {
			if (key[i] === key[j]) {
				count++;
			}
		}
		if (count === 1) checksum += String(key[i]);
	}
	return checksum;
}
function checkChecksum(key, checksum) {
	const checksumObtained = obtainChecksum(key);
	return checksumObtained === checksum;
}

function isValidFile(file) {
	const fileSplit = file.split('-');
	const key = fileSplit[0];
	const checksum = fileSplit[1];
	return checkChecksum(key, checksum);
}

function checkFilesArray(files) {
	const validFiles = [];
	const invalidFiles = [];
	files.forEach((file) => {
		const isValid = isValidFile(file);
		if (isValid) {
			validFiles.push(file);
		} else {
			invalidFiles.push(file);
		}
	});
	return { validFiles, invalidFiles };
}

module.exports = {
	obtainChecksum,
	checkChecksum,
	isValidFile,
	checkFilesArray,
};
