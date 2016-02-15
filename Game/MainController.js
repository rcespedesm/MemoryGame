/**
 * Created by Administrator on 2/5/2016.
 */

/**
 *
 * @constructor
 */
var MainController = function(size){
    this.game = new Game(size);
    this.repBoard = this.game.getBoard();
};

MainController.prototype.move = function(x,y){
    Game.chooseCard(x,y);
    this.repBoard = this.game.getBoard();
    return this.repBoard();
};