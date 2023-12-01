const solution03 = require('../solutions/solution03');

test('CheckValidKey', () => {
	expect(solution03.isValidKey('2-4 f: fgff')).toBe(true);
});

test('CheckInvalidKey', () => {
	expect(solution03.isValidKey('4-6 z: zzzsg')).toBe(false);
});

test('CheckValidKey Array ', () => {
	expect(solution03.checkKeysArray(['1-6 h: hhhhhh']).validKeys.length).toBe(1);
});
