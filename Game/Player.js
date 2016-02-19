/**
 * Created by Administrator on 2/4/2016.
 */

/**
 * Player class
 * @param name
 * @param id
 * @constructor
 */
var Player = function(name, id){
    this.id = id;
    this.name = name;
    this.wrongAttempts = 0;
    this.goodAttempts = 0;
    this.finalScore = 0;
};
/**
 * function for calculate the final score of the player
 */
    Player.prototype.calculateFinalScore = function(){
        this.finalScore = (this.goodAttempts * 4 ) - (this.wrongAttempts * 2);
        return this.finalScore;
    };

    Player.prototype.addAttempts = function(attemptType){
    (attemptType === "wrong") ? this.wrongAttempts++ : this.goodAttempts++;
    };

