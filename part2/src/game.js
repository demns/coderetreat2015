var Game = function () {
	var q = [
		[0,0,0,0,0],
		[0,0,0,0,0],
		[0,0,0,0,0],
		[0,0,0,1,0],
		[0,0,0,0,0]
	];

	function getValue(q, i, j) {
		return q[i][j];
	}

	function isAlive (array, i, j) {
		var count = countNeigbourd(array, i, j)
		return count == 2 || count == 3;
	}

	function countNeigbourd (array, i, j) {
		var count = 0;
		if (array[i-1] && array[i-1][j])
			count++;
		if(array[i] && array[i][j-1])
			count++;
		if(array[i-1] && array[i-1][j-1])
			count++;
		if(array[i+1] && array[i+1][j])
			count++;
		if(array[i] && array[i][j+1])
			count++;
		if(array[i+1] && array[i+1][j+1])
			count++;
		if(array[i+1] && array[i+1][j-1])
			count++;
		if(array[i-1] && array[i-1][j+1])
			count++;
		return count;
	}

	function killIfMoreThanThreeAlive(arr) {
		for (var i = 0; i < arr.length; i++) {
			for (var j = 0; j < arr[0].length; j++) {
				if (!isAlive(arr, i, j)) {
					arr[i][j] = 0;
				}
			};
		};
		return arr;
	}

	function reanimateIfNearThree(arr, i, j) {
		if(arr[i] && !(arr[i][j] instanceof 'undefined') && arr[i][j] === 0) {
			if(countNeigbourd(arr, i, j) === 3) {
				arr[i][j] = 1;
			}
		}
	}

	function game_cycle(array) {
		for(var i = 0; i < array.length; i++) {
			for(var j = 0; j < array[i].length; j++) {
				console.log(array[i][j]);
			}
		}
	}


	return {
		getValue: getValue,
		isAlive: isAlive,
		killIfMoreThanThreeAlive: killIfMoreThanThreeAlive,
		reanimateIfNearThree: reanimateIfNearThree,
		countNeigbourd: countNeigbourd,
		game_cycle: game_cycle
	}
}

myGame = new Game();
myGame.game_cycle();


module.exports = Game;