const solution02 = require('../solutions/solution02');

test('more examples 1', () => {
	expect(solution02.compiler('##*&')).toBe('4');
});

test('more examples 2', () => {
	expect(solution02.compiler('###@&')).toBe('2');
});

test('more examples 3', () => {
	expect(solution02.compiler('##@*@&')).toBe('0');
});
