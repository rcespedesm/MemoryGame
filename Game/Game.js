/**
 * Created by Administrator on 2/5/2016.
 */


var Game = function(size){
    this.player = [];
    this.board = new Board(size);
    this.winner = "";
    this.util = new Utils();
    this.card = 0;
};

Game.prototype.createPlayers = function(name){
    var id = this.util.generateId();
    this.player.push(new Player(name, id));
}

