let team = [
	{
	  name: 'Лучник',
	  type: 'Bowman',
	  health: 50,
	  level: 1,
	  attack: 40,
	  defence: 10
	},
	{
	  name: 'Маг',
	  type: 'Magician',
	  health: 50,
	  level: 1,
	  attack: 40,
	  defence: 10
	},
	{
	  name: 'Воин',
	  type: 'Warrior',
	  health: 50,
	  level: 1,
	  attack: 40,
	  defence: 10
	},
];


team[Symbol.iterator] = function() { 
	let length = team.length;
	return { 
		next() {
			if (length >= 0) {
				return {
					done: false,
					value: length--
				};
			}
			return {
				done: true
			};
		}
	}
};

for (let char of team) {
	console.log(char);
}