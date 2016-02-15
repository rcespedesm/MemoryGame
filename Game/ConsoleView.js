/**
 * Created by Administrator on 2/5/2016.
 */

var ConsoleView = function(){
    this.size = prompt("######################### \n" +
                       "###    MEMORY GAME    ### \n" +
                       "###                   ### \n" +
                       "###    Which size     ### \n" +
                       "###   the game is?    ### \n" +
                       "######################### \n");

    this.mc = new MainController(this.size);
    this.boardDisplayed = this.mc.repBoard;
    this.print2();
};

ConsoleView.prototype.print = function(){
    var msj = '';
    for	(var i = 0; i < this.size; i++) {
        for	(var j = 0; j < this.size; j++) {
            msj = msj + this.boardDisplayed[i][j].getID().toString() + ' | ';
        }
        msj = msj +'\n-------------------------\n';
    }
    console.log(msj);
};

ConsoleView.prototype.print2 = function(){
    var msj = '';
    for	(var i = 0; i < this.size; i++) {
        for	(var j = 0; j < this.size; j++) {
            if(this.boardDisplayed[i][j].getStatus()=== false){
                msj = msj +  '* | ';
            }else{
                msj = msj + this.boardDisplayed[i][j].getID().toString() + ' | ';
            }
        }
        msj = msj +'\n---------------------------\n';
    }
    console.log(msj);
};

ConsoleView.prototype.playGame = function(){
    for	(var i = 0; i < this.size; i++) {
        var turn = prompt("######################### \n" +
            "###    MEMORY GAME    ### \n" +
            "###                   ### \n" +
            "###    Select a       ### \n" +
            "###  field (E.G 1-2)  ### \n" +
            "######################### \n");

        turn = turn.split('-');

        this.boardDisplayed = this.mc.move(turn[0],turn[1]);
        this.print2();
    }
};

/*var playerMessage = "######################### \n" +
           "###    MEMORY GAME    \n" +
           "###                   \n" +
           "### 1. Single Player  \n" +
           "### 2. Multi Player    \n" +
           "######################### \n" ;

var sizeMessage =  "######################### \n" +
            "###    MEMORY GAME    \n" +
            "###                   \n" +
            "### Which size        \n" +
            "###      is the game? \n" +
            "######################### \n" ;
 var size = prompt(sizeMessage);

var player = prompt(playerMessage);



*/