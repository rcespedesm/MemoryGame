/**
 * Created on 2/4/2016.
 */

/*
 *   This is the Board class
 */

var Board = function(num){
    this.boardDisplayed = [];
    this.size = num;
    this.initialIDs = [];
    this.stat = false;
    this.fillInitialIDs(this.size);
    this.fillBoard(this.size);
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
        this.boardDisplayed[i] = [];
        for	(var j = 0; j < n; j++) {
            this.boardDisplayed[i][j] = new Field(i,j,this.initialIDs[index]);
            index++;
        }
    }
};


Board.prototype.choose = function(x,y){
    return this.boardDisplayed[x][y].getID();
};

Board.prototype.setAsSelected = function(id){
    for	(var i = 0; i < this.size; i++) {
        for	(var j = 0; j < this.size; j++) {
            if(this.boardDisplayed[i][j].getID() === id)
                this.boardDisplayed[i][j].setStatus();
        }
    }
};

Board.prototype.print = function(){
    var msj = '';
    for	(var i = 0; i < this.size; i++) {
        for	(var j = 0; j < this.size; j++) {
            msj = msj + this.boardDisplayed[i][j].getID().toString() + ' | ';
        }
        msj = msj +'\n-------------------------\n';
    }
    console.log(msj);
};

Board.prototype.print2 = function(){
    var msj = '';
    for	(var i = 0; i < this.size; i++) {
        for	(var j = 0; j < this.size; j++) {
            if(this.boardDisplayed[i][j].getStatus()=== false){
                msj = msj +  '** | ';
            }else{
                msj = msj + this.boardDisplayed[i][j].getID().toString() + ' | ';
            }
        }
        msj = msj +'\n---------------------------\n';
    }
    console.log(msj);
};