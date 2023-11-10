function lowerCase(str) {
	return str.toLowerCase();
}

function patternMessage(message) {
	let pattern = '';
	const messageLowered = lowerCase(message);
	const messageArray = messageLowered.split(' ');
	const uniqueWords = new Set(messageArray);
	uniqueWords.forEach((word) => {
		const wordCount = messageArray.filter((w) => w === word).length;
		pattern += `${word}${wordCount}`;
	});
	return pattern;
}

module.exports = { patternMessage };
