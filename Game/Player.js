/**
 * Created by Administrator on 2/4/2016.
 */

var Player = function(name, id){
    this.id = id;
    this.name = name;
    this.wrongAttempts = 0;
    this.goodAttempts = 0;
    this.finalScore = 0;
};

//Player.prototype.calculateFinalScore = function(){
    //    this.finalScore = (this.goodAttemps *  ) - (this.goodAttemps);
    //};

    Player.prototype.addAttempts = function(attemptType){
    (attemptType === "wrong") ? this.wrongAttempts++ : this.goodAttempts++;
    };





