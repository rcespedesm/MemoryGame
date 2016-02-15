/**
 * Created by Administrator on 2/5/2016.
 */


var Game = function(size){
    this.player = [];
    this.boardDisplayed = new Board(size);

    this.winner = "";
    this.util = new Utils();
    this.turn = 0;
    this.card = 0;
};

Game.prototype.createPlayers = function(name){
    var id = this.util.generateId();
    this.player.push(new Player(name, id));
};

Game.prototype.getBoard = function(){
    return this.boardDisplayed;
};

Game.prototype.turnPlayer = function(card){
    if(this.card === 0){
        this.card = this.boardDisplayed.choose(card['x'], card['y']);
    }else{
        var secondCard = this.boardDisplayed.choose(card['x'], card['y']);
        if(secondCard === this.card)
        {
            this.boardDisplayed.setAsSelected(this.card);
        }
        this.card = 0;

    }
};