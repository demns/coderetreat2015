describe("a point", function() {
    it("check the field to have 1", function() {
        var game = new Game(0);
         
        expect(game.arr).toEqual([]);
    });

    it("check the field to have 1", function() {
        var game = new Game(1);
         
        expect(game.arr).toEqual([[0]]);
    });

		it("check the field to have 2", function() {
        var game = new Game(2);
         
        expect(game.arr).toEqual([[0,0],[0,0]]);
    });

    it("check neighbours", function() {
        var game = new Game(3);
        game.arr = [
	        [0, 1, 0], 
	        [1, 1, 0], 
	        [0, 0, 0]
	      ];
         
        expect(game.neighboursSum(0, 0)).toEqual(3);
        expect(game.neighboursSum(0, 1)).toEqual(2);
        expect(game.neighboursSum(1, 1)).toEqual(2);
        expect(game.neighboursSum(2, 2)).toEqual(1);
    });
});