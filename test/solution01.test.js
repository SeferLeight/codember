const solution01 = require('../solutions/solution01');

test('more examples 1', () => {
	expect(solution01.patternMessage('llaveS casa CASA casa llaves')).toBe(
		'llaves2casa3'
	);
});

test('more examples 2', () => {
	expect(solution01.patternMessage('taza ta za taza')).toBe('taza2ta1za1');
});

test('more examples 3', () => {
	expect(solution01.patternMessage('casas casa casasas')).toBe(
		'casas1casa1casasas1'
	);
});
