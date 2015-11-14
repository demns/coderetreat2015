var Game = function () {

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
		if(arr[i][j] === 0) {
			if(countNeigbourd(arr, i, j) === 3) {
				arr[i][j] = 1;
			}
		}
	}

	function game_cycle(array) {
		for(var i = 0; i < array.length; i++) {
			for(var j = 0; j < array[i].length; j++) {
				// console.log(array[i][j]);
				reanimateIfNearThree(array, i, j);
			}
		}
		array = killIfMoreThanThreeAlive(array);
	}

	function change_values(array) {
		$("#field tr").each(function(tr_index, tr_value) {
			$(this).find("td").each(function(td_index, td_value){
				var value = array[tr_index][td_index];
				$(this).text(value).removeAttr("class").addClass(value ? "alive" : "dead");
			});
		});
	}

	function loop(arr) {

		console.log('iterations');

		game_cycle(arr);
		change_values(arr);

		print_matrix(arr);

		var copy_arr = arr;

		setTimeout(function() {
			loop(copy_arr);		
		}, 500);
	}

	function print_matrix(arr) {
		var str = '';
		for(var i = 0; i < arr.length; i++) {
			for(var j = 0; j < arr[i].length; j++) {
				str += arr[i][j] + " ";
			}
			str += "\n";
		}
		console.log(str);
	}

	function generate(SIZE) {
		var arr = [];
		for(var i = 0; i < SIZE; i++) {
			arr[i] = [];
			for(var j = 0; j < SIZE; j++) {
				arr[i][j] = Math.floor(Math.random() + 0.5);
			}
		}
		return arr;
	}

	function init(SIZE) {
		for(var i = 0; i < SIZE; i++) {
			$("#field").append("<tr></tr>");
			for(var j = 0; j < SIZE; j++) {
				$("#field tr:last").append("<td></td>");
			}	
		}
	}


	return {
		getValue: getValue,
		isAlive: isAlive,
		killIfMoreThanThreeAlive: killIfMoreThanThreeAlive,
		reanimateIfNearThree: reanimateIfNearThree,
		countNeigbourd: countNeigbourd,
		game_cycle: game_cycle,
		change_values: change_values,
		loop: loop,
		print_matrix: print_matrix,
		init: init,
		generate: generate
	}
}


var SIZE = 25;

myGame = new Game();
myGame.init(SIZE);
var arr = myGame.generate(SIZE);
myGame.loop(arr);


//module.exports = Game;