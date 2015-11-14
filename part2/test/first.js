var assert = require('assert');
var Game = require('./../src/game.js');


describe('q', function() {
  var game;

	beforeEach(function() { 
    game = new Game();
	});

  describe('#isAnyOnes()', function () {
    it('is any ones -- return none', function () {
    	var a = [[0, 1]];
  		assert.equal(0, game.getValue(a, 0, 0));
  		assert.equal(1, game.getValue(a, 0, 1));
    });
  });

  describe('#isAlive()', function () {
    it('switch Element', function () {
      var a = [
        [0, 1, 0], 
        [1, 1, 0], 
        [0, 0, 0]
      ];
      assert.equal(true, game.isAlive(a, 0, 0));
    });
    it('ololo', function() {
      var a = [
        [0, 1, 0], 
        [1, 1, 0], 
        [0, 0, 0]
      ];
      assert.equal(false, game.isAlive(a, 2,2));
    })
  });


describe('#killIfMoreThanThreeAlive()', function () {
    it('kill If More Than Three Alive', function () {
      var a = [
        [0, 1, 0], 
        [1, 1, 1], 
        [0, 1, 0]
      ];

      var a_re = [
        [0, 1, 0], 
        [1, 0, 1], 
        [0, 1, 0]
      ];
      assert.equal(a_re[1][1], game.killIfMoreThanThreeAlive(a)[1][1]);
    });
  });
});