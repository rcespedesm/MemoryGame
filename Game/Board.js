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

/**
 *
 * @param id
 */
Board.prototype.setAsSelected = function(id){
    for	(var i = 0; i < this.size; i++) {
        for	(var j = 0; j < this.size; j++) {
            if(this.boardDisplayed[i][j].getID() === id)
                this.boardDisplayed[i][j].setStatus();
        }
    }
};
