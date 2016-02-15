/**
 * Created by Administrator on 2/5/2016.
 */

/**
 *
 * @constructor
 */
var MainController = function(size){
    this.game = new Game(size);
};

MainController.prototype.move = function(x,y){
    this.game.chooseCard(x,y);
    return this.game.getBoard();
};