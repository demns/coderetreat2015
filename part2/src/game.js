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
		var count = 0;
		if (array[i-1] && array[i-1][j])
			count++;
		if(array[i] &&array[i][j-1])
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
		return count == 2 || count == 3;
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

	return {
		getValue: getValue,
		isAlive: isAlive,
		killIfMoreThanThreeAlive: killIfMoreThanThreeAlive
	}
}


module.exports = Game;