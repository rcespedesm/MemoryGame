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
    this.cardPosition = [];
    this.cardPosition2 = [];
};

Game.prototype.createPlayers = function(name){
    var id = this.util.generateId();
    this.player.push(new Player(name, id));
};

Game.prototype.getBoard = function(){
    return this.board.matrixBoard;
};

Game.prototype.chooseCard = function(x, y){
        if(this.card === 0){
            this.card = this.board.choose(x, y);
            this.board.setTrueFieldStatus(x, y);
            this.cardPosition[0] = x;
            this.cardPosition[1] = y;
        }else{
            var secondCard = this.board.choose(x, y);
            this.board.setTrueFieldStatus(x, y);
            this.cardPosition2[0] = x;
            this.cardPosition2[1] = y;
        }
};

Game.prototype.compareCards = function(){
    var makeTurn = function(turn){
        return turn === 0 ? 1 : 0;
    };
    var attemptType = "wrong";
    if(this.board.matrixBoard[this.cardPosition2[0]][this.cardPosition2[1]].getID() === this.card){
        this.board.setAsSelected(this.card);
        attemptType = "good";
    }else{
        this.board.setFalseFieldStatus(this.cardPosition[0], this.cardPosition[1]);
        this.board.setFalseFieldStatus(this.cardPosition2[0], this.cardPosition2[1]);
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

Game.prototype.setWinner = function(){
    var score = 0;
    for(var i = 0; i < 2; i++)
    {
        if(score < this.player[i].calculateFinalScore())
        {
            score = this.player[i].calculateFinalScore();
            this.winner = this.player[i].name;
        }
    }
};