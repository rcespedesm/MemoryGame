/**
 * Created by Administrator on 2/5/2016.
 */

/**
 *
 This class has functions for create board, players. also has functions
 to choose cards and set true or false if these cards are the same.
 * @param {int} size
 * @constructor
 */
var Game = function(size){
    this.player = [];
    this.board = new Board(size);
    this.util = new Utils();
    this.turn = 0;
    this.card = 0;
    this.cardPosition = [];
    this.cardPosition2 = [];
};

/**
 * This function use a function of player class to create a new player with an
 * Id distinct to other player.
 * @param {string} name
 */
Game.prototype.createPlayers = function(name){
    var id = this.util.generateId();
    this.player.push(new Player(name, id));
};

Game.prototype.getBoard = function(){
    return this.board.matrixBoard;
};

/**
 * This function is to choose a card and set its status with true, this function
 * is used 2 times for the same player.
 * @param {int} x   position of field
 * @param {int} y   position of field
 */
Game.prototype.chooseCard = function(x, y){
        if(this.card === 0){
            this.card = this.board.chooseField(x, y);
            this.board.setTrueFieldStatus(x, y);
            this.cardPosition[0] = x;
            this.cardPosition[1] = y;
        }else{
            var secondCard = this.board.chooseField(x, y);
            this.board.setTrueFieldStatus(x, y);
            this.cardPosition2[0] = x;
            this.cardPosition2[1] = y;
        }
};

/**
 * This function compares the cards selected, if the cards are the same, set
 * good attempt for this player, if the cards are distinct status of fields are
 * set false and wrong attempt for this player.
 * This function has a private function to change turn of player.
 */
Game.prototype.compareCards = function(){
    var makeTurn = function(turn){
        return turn === 0 ? 1 : 0;
    };
    var attemptType = "wrong";
    if(this.board.getIdField(this.cardPosition[0], this.cardPosition[1])
        === this.card){
            attemptType = "good";
        }else{
            this.board.setFalseFieldStatus(this.cardPosition[0],
                this.cardPosition[1]);
            this.board.setFalseFieldStatus(this.cardPosition2[0],
                this.cardPosition2[1]);
        }
    this.card = 0;
    this.player[this.turn].addAttempts(attemptType);
    this.turn = makeTurn(this.turn);
};

Game.prototype.getPlayerName = function(){
    return this.player[this.turn].name;
};

Game.prototype.getStatusBoard = function(){
    return this.board.getStatusBoard();
};

/**
 * This function compares final score of each player and return the name or draw
 * game.
 * @returns {string} name of winner or draw game.
 */
Game.prototype.setWinner = function(){
    var scorePlayer1 = this.player[0].calculateFinalScore();
    var scorePlayer2 = this.player[1].calculateFinalScore();
    if(scorePlayer1 === scorePlayer2){
        return "No Winner, Draw Game";
    }else if(scorePlayer1 > scorePlayer2){
        return this.player[0].name;
    }
    return this.player[1].name;
};

/**
 * this function return players objects of this game.
 * @returns {Array}
 */
Game.prototype.getArrayPlayers = function() {
    var playersArray = [];
    playersArray.push(this.player[0]);
    playersArray.push(this.player[1]);
    return playersArray;
}