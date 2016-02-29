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

MainController.prototype.move = function(position){
    position = position.split("-");
    this.game.chooseCard(position[0],position[1]);
    return this.game.getBoard();
};

MainController.prototype.compareCards = function(){
    this.game.compareCards();
    return this.game.getBoard();
};

MainController.prototype.getBoard = function(){
    return this.game.getBoard();
};

MainController.prototype.setPlayer = function(name){
    this.game.createPlayers(name);
};

MainController.prototype.getStatusBoard = function(){
    return this.game.getStatusBoard();
};

MainController.prototype.getNamePlayerTurn = function(){
    return this.game.getPlayerName();
};

MainController.prototype.getWinner = function(){
    this.game.setWinner();
    return this.game.winner;
};

MainController.prototype.getPlayers = function(){
    var playerArray = [];
    for(var i = 0; i < 2; i++)
    {
        playerArray.push(this.game.player[i]);
    }
    return playerArray;
};

