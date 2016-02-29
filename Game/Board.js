/**
 * Created on 2/4/2016.
 */

/**
 * This Class creates a board of determined size,
 * creates an array of Ids randomly sorted
 * Create fields objects in each position of board
 * @param {int}size is the board size
 * @constructor
 */
var Board = function(size){
    this.matrixBoard = [];
    this.size = size;
    this.initialIDs = [];
    this.fillInitialIDs();
    this.fillBoard();
};

Board.prototype.fillInitialIDs = function(){
    var totalSize = this.size * this.size;
    for(var i = 0; i < totalSize; i++) {
        i % 2 === 0 ? this.initialIDs[i] = i + 1 : this.initialIDs[i] = i;
    }
    if(this.size % 2 !== 0){
        this.initialIDs[totalSize-1] = -1;
    }
    this.initialIDs = this.initialIDs.sort(
        function() {return Math.random() - 0.5});
};



Board.prototype.fillBoard = function(){
    var index = 0;
    for	(var i = 0; i < this.size; i++) {
        this.matrixBoard[i] = [];
        for	(var j = 0; j < this.size; j++) {
            var status = this.initialIDs[index] === -1;
            this.matrixBoard[i][j] =
                new Field(i,j,this.initialIDs[index], status);
            index++;
        }
    }
};

Board.prototype.chooseField = function(x, y){
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


