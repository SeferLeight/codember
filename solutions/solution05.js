function isValidId(id) {
	//check if id is a number with regex
	return /^[a-zA-Z0-9]+$/.test(id);
}
function isValidUsername(username) {
	//check if username is alphanumeric with regex
	return /^[a-zA-Z0-9]+$/.test(username);
}
function isValidEmail(email) {
	//check if email is valid with regex
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function isValidAge(age) {
	//check if age is a number with regex
	return !age || /^\d+$/.test(age);
}
function isValidLocation(location) {
	//check if location is alphabetic or spaces with regex
	return !location || /^[a-zA-Z\s]+$/.test(location);
}

function isValidUser(user) {
	return (
		isValidId(user.id) &&
		isValidUsername(user.username) &&
		isValidEmail(user.email) &&
		isValidAge(user.age) &&
		isValidLocation(user.location)
	);
}

function formatUser(user) {
	const userSplit = user.split(',');
	const userObject = {
		id: userSplit[0],
		username: userSplit[1],
		email: userSplit[2],
		age: userSplit[3],
		location: userSplit[4],
	};
	return userObject;
}

function validateRawUsersArray(rawUsers) {
	const validUsers = [];
	const invalidUsers = [];
	rawUsers.forEach((rawUser) => {
		const user = formatUser(rawUser);
		const isValid = isValidUser(user);
		if (isValid) {
			validUsers.push(user);
		} else {
			invalidUsers.push(user);
		}
	});
	return { validUsers, invalidUsers };
}

function getInvalidUsersMessage(invalidUsers) {
	let message = '';
	invalidUsers.forEach((user) => {
		message += user.username[0];
	});
	return message;
}

module.exports = {
	isValidUser,
	formatUser,
	validateRawUsersArray,
	getInvalidUsersMessage,
};
