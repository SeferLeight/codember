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

test('example with if', () => {
	expect(solution02.compilerWithIf('##*&#&')).toBe('45');
})

test('example with switch', () => {
	expect(solution02.compilerWithSwitch('##*&#&')).toBe('45');
})
