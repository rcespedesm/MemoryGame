/**
 * Created by Administrator on 2/5/2016.
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
};

Game.prototype.getBoard = function(){
    return this.board.matrixBoard;
};

Game.prototype.chooseCard = function(x, y){
    var makeTurn = function(turn){
        return turn === 0 ? 1 : 0;
    }

    if(this.card === 0){
        this.card = this.board.choose(x, y);
    }else{
        var secondCard = this.board.choose(x, y);
        var attemptType = "wrong";
        if(secondCard === this.card)
        {
            this.board.setAsSelected(this.card);
            attemptType = "good";
        }
        this.card = 0;
        this.player[this.turn].addAttempts(attemptType);
        this.turn = makeTurn(this.turn);
    }
};

Game.prototype.getPlayerName = function(){
    return this.player[this.turn].name;
};