import setUpAttacks from "./setUpAttacks.js"

describe("TEST: setUpAttacks", () => {

	test("the user uses elixir", () => {
		const characters = [
			{name: 'маг', health: 100},
			{name: 'лучник', health: 80},
			{name: 'мечник', health: 10},
		];

		expect(setUpAttacks(characters, 9,0, 1)).toEqual([
			{name: 'маг', health: 97},
			{name: 'лучник', health: 77},
			{name: 'мечник', health: 7},
		])
	});

	test("the user has not used the elixir", () => {
		const characters = [
			{name: 'маг', health: 100},
			{name: 'лучник', health: 80},
			{name: 'мечник', health: 10},
		];

		expect(setUpAttacks(characters, 10, 0, false)).toEqual([
			{name: 'маг', health: 90},
			{name: 'лучник', health: 80},
			{name: 'мечник', health: 10},
		])
	});

	test("the user has more than you need damage", () => {
		const characters = [
			{name: 'маг', health: 100},
			{name: 'лучник', health: 80},
			{name: 'мечник', health: 10},
		];

		expect(setUpAttacks(characters, 30, 2, false)).toEqual([
			{name: 'маг', health: 100},
			{name: 'лучник', health: 80},
			{name: 'мечник', health: 0},
		])
	});

	test("death of an ally and transfer damage on the character", () => {
		const characters = [
			{name: 'маг', health: 100},
			{name: 'лучник', health: 80},
			{name: 'мечник', health: 10},
		];

		expect(setUpAttacks(characters, 50, 0)).toEqual([
			{name: 'маг', health: 76},
			{name: 'лучник', health: 63},
			{name: 'мечник', health: 0},
		])
	});

	test("forgot to pass parameters", () => {
		const characters = [
			{name: 'маг', health: 100},
			{name: 'лучник', health: 80},
			{name: 'мечник', health: 10},
		];

		expect(setUpAttacks(characters)).toEqual(characters)
	});

});
