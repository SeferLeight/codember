function patternMessage(message) {
	let pattern = '';
	const messageLowered = message.toLowerCase();
	const messageArray = messageLowered.split(' ');
	const uniqueWords = new Set(messageArray);
	uniqueWords.forEach((word) => {
		const wordCount = messageArray.filter((w) => w === word).length;
		pattern += `${word}${wordCount}`;
	});
	return pattern;
}

function patternMessageFor(message){
	let pattern = '';

	const messageLower = message.toLowerCase();
	const messageArray = messageLower.split(' ');
	const messageKeys = [];

	for(let i =0; i<messageArray.length; i++){
		if(!messageKeys.includes(messageArray[i])){
			messageKeys.push(messageArray[i])
		}
	}

	for(let i = 0; i<messageKeys.length;i++){
		let countObject = 0;
		for(let j = 0; j<messageArray.length; j++){
			if(messageArray[j] === messageKeys[i]){
				countObject++;
			}
		}
		pattern = pattern + messageKeys[i] + countObject.toString();
	}
	return pattern;
}

module.exports = { patternMessage, patternMessageFor };
