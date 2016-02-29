/**
 * Created by Administrator on 2/5/2016.
*/

/**
 * This class is to displays the game for the console
 * @param {Main Controler} mc
 * @param {array} matt
 * @constructor
 */
var ConsoleView = function(){
    this.mc = "";
    this.matt = [];
};

/**
 * This function creates the board and the players
 * get the board size and the player names
 */
ConsoleView.prototype.startGame = function() {
    this.mc = new MainController(this.getSizeBoard());
    this.matt = this.mc.getBoard();
    this.mc.setPlayer(this.getNamePlayer(1));
    this.mc.setPlayer(this.getNamePlayer(2));
};

/**
 * This function is the contains the cycle for the players
 * continue with the game until that there is not any value covered in the board
 */
ConsoleView.prototype.playGame = function(){
    this.print2();
    do{
        for(var i = 0; i < 2; i++){
            this.matt = this.mc.move(this.getPosition());
            console.clear();
            this.print2();
        }
        this.matt = this.mc.compareCards();
        if(this.mc.getStatusBoard() === false)
            alert("Change turn to: " + this.mc.getNamePlayerTurn());
        console.clear();
        this.print2();
    }while(this.mc.getStatusBoard() === false);
    this.displayWinner(this.mc.getWinner());
    this.displayFinalScore(this.mc.getPlayers());
};

/**
 * This function return the size for the board
 * @returns {int} size
 */
ConsoleView.prototype.getSizeBoard = function(){
    var size = parseInt(prompt(  "######################### \n" +
        "###    MEMORY GAME   \n" +
        "###                  \n" +
        "###    Which size    \n" +
        "###   the game is?   \n" +
        "######################### \n"));
    if (!/^([1]{1}[0]{1}|[2-9]{1})$/.test(size))
    {
        alert("please insert numbers in range of 2-10");
        return this.getSizeBoard();
    }else{
        return size;
    }
};

/**
 * This function return the player name entered for the console
 * @returns {string} playerName
 */
ConsoleView.prototype.getNamePlayer = function(index){
    var playerName = prompt( "######################### \n" +
        "###    MEMORY GAME   \n" +
        "###  Enter Name of   \n" +
        "###     Player  " + index +"     \n" +
        "######################### \n");
    if (!/^([a-zA-Z0-9]{1,15})$/.test(playerName))
    {
        alert("please insert a name without space and max 15 characters");
        return this.getNamePlayer(index);
    }else{
        return playerName;
    }
};

/**
 * This function is to get the position for show the value in the board
 * This function verify that the player use the sintaxis to enter the position
 * @param {string} position
 */
ConsoleView.prototype.getPosition = function(){
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

/**
 * This function displays the all score information of the player
 * @param {Player} players
 */
ConsoleView.prototype.displayFinalScore = function(players){
        console.log("##############################");
    for(var i = 0; i < 2; i++)
    {
        console.log("Player " + (i + 1) + ":" + players[i].name);
        console.log("Good Attempts :" + players[i].goodAttempts);
        console.log("Wrong Attempts :" + players[i].wrongAttempts);
        console.log("Final Score :" + players[i].finalScore);
        console.log("##############################");
    }
};

/**
 * This function displays the name of the winer
 * @param {string} winner
 */
ConsoleView.prototype.displayWinner = function(winner){
    console.log("##############################");
    console.log("#####    WINNER..!!      #####");
    console.log(winner);
    console.log("#####                    #####");
    console.log("##############################");
};

/**
 * This function displays the  board
 * Displays the covered and uncovered values
 */
ConsoleView.prototype.print2 = function(){
    var msj = '';
    for	(var i = 0; i < this.matt.length; i++) {
        for	(var j = 0; j < this.matt.length; j++) {
            if(this.matt[i][j].getStatus()=== false)
                msj = msj +  '* | ';
            else
                msj = msj + this.matt[i][j].getID().toString() + ' | ';
        }
        msj = msj +'\n---------------------------\n';
    }
    console.log(msj);
};