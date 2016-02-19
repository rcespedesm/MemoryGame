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
    var numberPlayer = 2;//this.getNumberPlayer();
    this.mc.setPlayer(this.getNamePlayer(1));
    if(numberPlayer === 2)
    {
        this.mc.setPlayer(this.getNamePlayer(2));
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
    var number = parseInt(prompt(  "######################### \n" +
        "###    MEMORY GAME   \n" +
        "###                  \n" +
        "###    Which size    \n" +
        "###   the game is?   \n" +
        "######################### \n"));
    if (!/^([1]{1}[0]{1}|[2-9]{1})$/.test(number))
    {
        alert("please insert numbers in range of 2-10");
        return this.getSizeBoard();
    }else{
        return number;
    }
};
/*
ConsoleView.prototype.getNumberPlayer = function(){
    return parseInt(prompt(  "######################### \n" +
        "###    MEMORY GAME   \n" +
        "###  Enter Number of \n" +
        "###      Players     \n" +
        "###  1. One Player   \n" +
        "###  2. Two Players  \n" +
        "######################### \n"));
};*/

ConsoleView.prototype.getNamePlayer = function(index){
    //^[a-zA-Z0-9]{1,15}$

    var namePlayer = prompt( "######################### \n" +
        "###    MEMORY GAME   \n" +
        "###  Enter Name of   \n" +
        "###     Player  " + index +"     \n" +
        "######################### \n");
    if (!/^([a-zA-Z0-9]{1,15})$/.test(namePlayer))
    {
        alert("please insert a name without space and max 15 characters");
        return this.getNamePlayer(index);
    }else{
        return namePlayer;
    }
};

ConsoleView.prototype.getPosition = function(){
    //^([0-this.sizeBoard]{1})-{1}([0-this.sizeBoard]{1})$
    var position = prompt("######################### \n" +
        "###    MEMORY GAME    ### \n" +
        "###                   ### \n" +
        "###    Select a       ### \n" +
        "###  field (E.G 1-2)  ### \n" +
        "######################### \n");
    var regularEx = new RegExp('^([0-' + (this.matt.length - 1) 
        + ']{1})-{1}([0-' + (this.matt.length - 1) + ']{1})$');
    if (!regularEx.test(position))
    {
        alert("please insert a name without space and max 15 characters");
        return this.getPosition();
    }else{
        return position;
    }
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