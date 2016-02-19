/**
 * Created by Administrator on 2/5/2016.
 */

var ConsoleView = function(){
    this.size = "";
    this.mc = undefined;
    this.matt = [];
};

ConsoleView.prototype.startGame = function() {
    this.size = prompt("######################### \n" +
        "###    MEMORY GAME    ### \n" +
        "###                   ### \n" +
        "###    Which size     ### \n" +
        "###   the game is?    ### \n" +
        "######################### \n");
    this.mc = new MainController(parseInt(this.size));
    this.matt = this.mc.game.getBoard();
    this.print();
};




ConsoleView.prototype.cheat = function(){
    var msj = '';
    for	(var i = 0; i < this.size; i++) {
        for	(var j = 0; j < this.size; j++) {
            msj = msj + this.matt[i][j].getID().toString() + ' | ';
        }
        msj = msj +'\n-------------------------\n';
    }
    console.log(msj);
};

ConsoleView.prototype.print = function(){
    var msj = '';
    for	(var i = 0; i < this.size; i++) {
        for	(var j = 0; j < this.size; j++) {
            if(this.matt[i][j].getStatus()=== false){
                msj = msj +  '* | ';
            }else{
                msj = msj + this.matt[i][j].getID().toString() + ' | ';
            }
        }
        msj = msj +'\n---------------------------\n';
    }
    console.log(msj);
};

ConsoleView.prototype.playTurn = function(){
    var turn = prompt("######################### \n" +
            "###    MEMORY GAME    ### \n" +
            "###                   ### \n" +
            "###    Select a       ### \n" +
            "###  field (E.G 1-2)  ### \n" +
            "######################### \n");

    turn = turn.split('-');

    this.matt = this.mc.move(turn[0],turn[1]);
    this.print();
};

ConsoleView.prototype.iniNumPlayers = function(){
    var numOfPlayer = prompt("######################### \n" +
        "###    MEMORY GAME    \n" +
        "###                   \n" +
        "### 1. Single Player  \n" +
        "### 2. Multi Player    \n" +
        "######################### \n");
    this.iniPlayer();
    if(numOfPlayer === '2'){
        this.iniPlayer();
    }
};

ConsoleView.prototype.iniPlayer = function(){
    var name = prompt("######################### \n" +
        "###    MEMORY GAME    \n" +
        "###                   \n" +
        "### Insert the name   \n" +
        "###  of the player    \n" +
        "######################### \n");
    if(this.mc.addPlayer(name)){
        console.log("Player Created");
    }else{
        console.log("Player do not Created");
    }
};
