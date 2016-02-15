/**
 * Created by Administrator on 2/5/2016.
 */

/**
 * This funtion is to manage all game
 * @param [int]size
 * @constructor
 */
var Game = function(size){
    this.player = [];
    this.board = new Board(size);
    this.winner = "";
    this.util = new Utils();
    this.turn = 0;
    this.card = 0;
};

Game.prototype.createPlayers = function(name){
    var id = this.util.generateId();
    this.player.push(new Player(name, id));
}

Game.prototype.turnPlayer = function(card){
    if(this.card === 0){
        this.card = this.board.choose(card['x'], card['y']);
    }else{
        var secondCard = this.board.choose(card['x'], card['y']);
        if(secondCard === this.card)
        {

        }
    }


}