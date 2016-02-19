/**
 * Created by Administrator on 2/5/2016.
 */

var ConsoleView = function(){
    this.mc = "";
    this.matt = [];
};

ConsoleView.prototype.startGame = function() {
    this.mc = new MainController(this.getSizeBoard());
    this.matt = this.mc.getBoard();
    var numberPlayer = this.getNumberPlayer();
    for(var i = 1; i <= numberPlayer ; i++)
    {
        this.mc.setPlayer(this.getNamePlayer(i));
    }
};

ConsoleView.prototype.playGame = function(){
    this.print2();
    do{
        for(var i = 0; i < 2; i++){
            this.matt = this.mc.move(this.getPosition());
            console.clear();
            this.print2();
        }
        this.matt = this.mc.compareCards();
        alert("Change turn to: " + this.mc.getNamePlayerTurn());
        console.clear();
        this.print2();
    }while(this.mc.getStatusBoard() === false);
    this.displayWinner(this.mc.getWinner());
    this.displayFinalScore(this.mc.getPlayers());
};



ConsoleView.prototype.getSizeBoard = function(){
    return parseInt(prompt(  "######################### \n" +
        "###    MEMORY GAME   \n" +
        "###                  \n" +
        "###    Which size    \n" +
        "###   the game is?   \n" +
        "######################### \n"));
};

ConsoleView.prototype.getNumberPlayer = function(){
    return parseInt(prompt(  "######################### \n" +
        "###    MEMORY GAME   \n" +
        "###  Enter Number of \n" +
        "###      Players     \n" +
        "###  1. One Player   \n" +
        "###  2. Two Players  \n" +
        "######################### \n"));
};

ConsoleView.prototype.getNamePlayer = function(index){
    return prompt( "######################### \n" +
        "###    MEMORY GAME   \n" +
        "###  Enter Name of   \n" +
        "###     Player  " + index +"     \n" +
        "######################### \n");
};

ConsoleView.prototype.getPosition = function(){
    return prompt("######################### \n" +
        "###    MEMORY GAME    ### \n" +
        "###                   ### \n" +
        "###    Select a       ### \n" +
        "###  field (E.G 1-2)  ### \n" +
        "######################### \n");
};

ConsoleView.prototype.displayFinalScore = function(players){
        console.log("##############################");
    for(var i = 0; i < 2; i++)
    {
        console.log("Player " + i + ":" + players[i].name);
        console.log("Good Attempts :" + players[i].goodAttempts);
        console.log("Wrong Attempts :" + players[i].wrongAttempts);
        console.log("Final Score :" + players[i].finalScore);
        console.log("##############################");
    }
};
ConsoleView.prototype.displayWinner = function(winner){
    console.log("##############################");
    console.log("#####    WINNER..!!      #####");
    console.log(winner);
    console.log("#####                    #####");
    console.log("##############################");
};

ConsoleView.prototype.print = function(){
    var msj = '';
    for	(var i = 0; i < this.matt.length; i++) {
        for	(var j = 0; j < this.matt.length; j++) {
            msj = msj + this.matt[i][j].getID().toString() + ' | ';
        }
        msj = msj +'\n-------------------------\n';
    }
    console.log(msj);
};

ConsoleView.prototype.print2 = function(){
    var msj = '';
    for	(var i = 0; i < this.matt.length; i++) {
        for	(var j = 0; j < this.matt.length; j++) {
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