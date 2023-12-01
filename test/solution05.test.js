const solution5 = require('../solutions/solution05');

test('Check Valid User 1', () => {
	expect(
		solution5.isValidUser(
			solution5.formatUser('1a421fa,alex,alex9@gmail.com,18,Barcelona')
		)
	).toBe(true);
});

test('Check Valid User 2', () => {
	expect(
		solution5.isValidUser(
			solution5.formatUser('9412p_m,maria,mb@hotmail.com,22,CDMX')
		)
	).toBe(false);
});

test('Check Valid User 3', () => {
	expect(
		solution5.isValidUser(
			solution5.formatUser('494ee0,madeval,mdv@twitch.tv,,')
		)
	).toBe(true);
});

test('Check Valid User 4', () => {
	expect(
		solution5.isValidUser(
			solution5.formatUser('494ee0,madeval,twitch.tv,22,Montevideo')
		)
	).toBe(false);
});

test('Check valid User 5', () => {
	expect(
		solution5.isValidUser(
			solution5.formatUser('VY5EHZHY,EfaHWA,efahwa@outlook.com,25,New York')
		)
	).toBe(true);
});

test('Check array of raw users', () => {
	const rawUsers = [
		'1a421fa,alex,alex9@gmail.com,18,Barcelona',
		'9412p_m,maria,mb@hotmail.com,22,CDMX',
		'494ee0,madeval,mdv@twitch.tv,,',
		'494ee0,madeval,twitch.tv,22,Montevideo',
	];
	expect(solution5.validateRawUsersArray(rawUsers).validUsers.length).toBe(2);
});
