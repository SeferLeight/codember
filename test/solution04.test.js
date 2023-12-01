const solution4 = require('../solutions/solution04');

test('CheckValidFile 1', () => {
	expect(solution4.isValidFile('xyzz33-xy')).toBe(true);
});

test('CheckChecksum 1', () => {
	expect(solution4.obtainChecksum('xyzz33')).toBe('xy');
});

test('CheckValidFile 2', () => {
	expect(solution4.isValidFile('abcca1-ab1')).toBe(false);
});

test('CheckChecksum 2', () => {
	expect(solution4.obtainChecksum('abcca1')).toBe('b1');
});

test('CheckValidFile 3', () => {
	expect(solution4.isValidFile('abbc11-ca')).toBe(false);
});

test('CheckChecksum 3', () => {
	expect(solution4.obtainChecksum('abbc11')).toBe('ac');
});

test('CheckValidFile Array', () => {
	expect(
		solution4.checkFilesArray(['xyzz33-xy', 'abcca1-ab1', 'abbc11-ca'])
			.validFiles.length
	).toBe(1);
});
