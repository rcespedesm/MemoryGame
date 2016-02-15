/**
 * Created on 2/4/2016.
 */

/*
 *   This is the Board class
 */

var Board = function(num){
    this.board = [];
    this.num = num;
    this.initialIDs = [];
    this.stat = false;
    this.fillInitialIDs(this.num);
    this.fillBoard(this.num);
};

Board.prototype.fillInitialIDs = function(n){
    var nSize = n * n;
    for(var i = 10; i < nSize + 10 ; i++) {
        if (i % 2 === 0)
        {
            this.initialIDs[i]=i+1;
        }else{
            this.initialIDs[i]=i;
        }
    }
    if(n%2!==0){
        this.initialIDs[nSize-1] = -1;
    }
    this.initialIDs = this.initialIDs.sort(function() {return Math.random() - 0.5});
};

Board.prototype.fillBoard = function(n){
    var index = 0;
    for	(var i = 0; i < n; i++) {
        this.board[i] = [];
        for	(var j = 0; j < n; j++) {
            this.board[i][j] = new Field(i,j,this.initialIDs[index]);
            index++;
        }
    }
};


Board.prototype.choose = function(x,y){
    return this.board[x][y].getID();
};

Board.prototype.setAsSelected = function(id){
    for	(var i = 0; i < this.num; i++) {
        for	(var j = 0; j < this.num; j++) {
            if(this.board[i][j].getID() === id)
                this.board[i][j].setStatus();
        }
    }
};

Board.prototype.print = function(){
    var msj = '';
    for	(var i = 0; i < this.num; i++) {
        for	(var j = 0; j < this.num; j++) {
            msj = msj + this.board[i][j].getID().toString() + ' | ';
        }
        msj = msj +'\n-------------------------\n';
    }
    console.log(msj);
};

Board.prototype.print2 = function(){
    var msj = '';
    for	(var i = 0; i < this.num; i++) {
        for	(var j = 0; j < this.num; j++) {
            if(this.board[i][j].getStatus()=== false){
                msj = msj +  '** | ';
            }else{
                msj = msj + this.board[i][j].getID().toString() + ' | ';
            }
        }
        msj = msj +'\n---------------------------\n';
    }
    console.log(msj);
};