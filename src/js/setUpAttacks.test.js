import setUpAttacks from './setUpAttacks.js';

describe('TEST: set up attacks', () => {

	test('the user uses elixir', () => {
		const characters = [
			{name: 'маг', health: 100},
			{name: 'лучник', health: 80},
			{name: 'мечник', health: 10},
		];
		const expected = [
			{name: 'маг', health: 97},
			{name: 'лучник', health: 77},
			{name: 'мечник', health: 7},
		];
		const received = setUpAttacks(characters);

		expect(received[2](9)).toEqual(expected)
	});

	test('the user has not used the elixir', () => {
		const characters = [
			{name: 'маг', health: 100},
			{name: 'лучник', health: 80},
			{name: 'мечник', health: 10},
		];
		const expected = [
			{name: 'маг', health: 100},
			{name: 'лучник', health: 80},
			{name: 'мечник', health: 8},
		];
		const received = setUpAttacks(characters, false);

		expect(received[2](2)).toEqual(expected)
	});

	test('the user has more than you need damage', () => {
		const characters = [
			{name: 'маг', health: 100},
			{name: 'лучник', health: 80},
			{name: 'мечник', health: 10},
		];
		const expected = [
			{name: 'маг', health: 100},
			{name: 'лучник', health: 0},
			{name: 'мечник', health: 10},
		];
		const received = setUpAttacks(characters, false);

		expect(received[1](100)).toEqual(expected)
	});

	test('death of an ally and transfer damage on the character', () => {
		const characters = [
			{name: 'маг', health: 100},
			{name: 'лучник', health: 80},
			{name: 'мечник', health: 10},
		];
		const expected = [
			{name: 'маг', health: 67},
			{name: 'лучник', health: 23},
			{name: 'мечник', health: 0},
		];
		const received = setUpAttacks(characters);

		expect(received[1](100)).toEqual(expected)
	});

	test('forgot to pass parameters', () => {
		const characters = [
			{name: 'маг', health: 100},
			{name: 'лучник', health: 80},
			{name: 'мечник', health: 10},
		];
		const received = setUpAttacks(characters);

		expect(received[2]()).toEqual(characters)
	});

	test('huge damage to the whole team', () => {
		const characters = [
			{name: 'маг', health: 100},
			{name: 'лучник', health: 80},
			{name: 'мечник', health: 10},
		];
		const expected = [
			{name: 'маг', health: 0},
			{name: 'лучник', health: 0},
			{name: 'мечник', health: 0},
		];
		const received = setUpAttacks(characters);

		expect(received[2](3000)).toEqual(expected)
	});

	test('damage greater than the health of one character', () => {
		const characters = [
			{name: 'маг', health: 100},
			{name: 'лучник', health: 80},
			{name: 'мечник', health: 10},
		];
		const expected = [
			{name: 'маг', health: 100},
			{name: 'лучник', health: 0},
			{name: 'мечник', health: 10},
		];
		const received = setUpAttacks(characters, false);

		expect(received[1](200)).toEqual(expected);
	});

	test('the character from the initial is dead', () => {
		const characters = [
			{name: 'маг', health: 100},
			{name: 'лучник', health: 80},
			{name: 'мечник', health: 0},
		];
		const expected = [
			{name: 'маг', health: 100},
			{name: 'лучник', health: 71},
			{name: 'мечник', health: 0},
		];
		const received = setUpAttacks(characters, false);

		expect(received[1](9)).toEqual(expected)
	});

});
