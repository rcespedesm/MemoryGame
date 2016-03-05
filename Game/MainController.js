/**
 * Created by Administrator on 2/5/2016.
 */

/**
 * This class is to handle all functions of game.
 * this function is used by views
 * @param {int}size
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
    this.game.setScore();
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
    return this.game.setWinner();
};

MainController.prototype.getPlayers = function(){
    return this.game.getArrayPlayers();
};

