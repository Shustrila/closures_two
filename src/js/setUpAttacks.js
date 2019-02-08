export default (items, shield = true) => {
	const result = [];

	items.forEach((item, i, arr) => {
		let fun = (damage = 0) => {
			let thisChar = i;

			if (shield) {
				let divisDamag = damage / arr.length;

				arr.map((item) => {
					item.health -= Math.floor(divisDamag);
					return item
				}).map((item, i, arr) => {
					if(item.health < 0) {
						arr[thisChar].health = item.health + arr[thisChar].health;
						item.health = 0;
					}

					if(arr[thisChar].health  < 0) {
						arr[thisChar].health = 0
					}
				});

			} else {
				if (item.health > damage) {
					item.health -= damage;
				}	else {
					item.health = 0;
				}
			}

			return arr;
		};

		result.push(fun)
	});

	return result;
};
