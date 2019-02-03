export default function setUpAttacks(items, attack = 0, index = 0, shield = true) {
	const result = [];

	if(shield){
		items.forEach((item, i, arr) => {
			const damage = (attack / arr.length).toFixed(0);
			item.health -= damage;

			if(item.health < 0 ){
				items[index].health = item.health + items[index].health;
				item.health = 0
			}

			result.push(item);
		})
	} else {
		items.forEach((item, i) => {
			if (i === index){
				item.health -= attack
			}

			if (item.health < 0) {
				item.health = 0
			}

			result.push(item);
		})
	}

	return result;
};
