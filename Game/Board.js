/**
 * Created on 2/4/2016.
 */

/*
 *   This is the Board class
 */

var Board = function(num){
    this.matrixBoard = [];
    this.size = num;
    this.initialIDs = [];
    //this.stat = false;
    this.fillInitialIDs(this.size);
    this.fillBoard(this.size);
};

Board.prototype.fillInitialIDs = function(n){
    var nSize = n * n;
    for(var i = 0; i < nSize; i++) {
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

/**
 *
 * @param n
 */
Board.prototype.fillBoard = function(n){
    var index = 0;
    for	(var i = 0; i < n; i++) {
        this.matrixBoard[i] = [];
        for	(var j = 0; j < n; j++) {
            if(this.initialIDs[index] === -1){
                this.matrixBoard[i][j] = new Field(i,j,this.initialIDs[index], true);
                index++;
            }else{
                this.matrixBoard[i][j] = new Field(i,j,this.initialIDs[index], false);
                index++;
            }
        }
    }
};


Board.prototype.choose = function(x,y){
    return this.matrixBoard[x][y].getID();
};

Board.prototype.getStatusBoard = function(){
    var counter = 0;
    for	(var i = 0; i < this.size; i++) {
        for	(var j = 0; j < this.size; j++) {
            if(this.matrixBoard[i][j].status === true)
                counter++;
        }
    }
    return (this.size * this.size) - counter === 0 ? true : false;
};


Board.prototype.setTrueFieldStatus = function(x, y){
    this.matrixBoard[x][y].setStatus(true);
};

Board.prototype.setFalseFieldStatus = function(x, y){
    this.matrixBoard[x][y].setStatus(false);
};
