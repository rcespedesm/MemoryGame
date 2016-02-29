/**
 * Created by Administrator on 2/4/2016.
 */

/**
 * This class contains the attributes of each player
 * @param {string}name
 * @param {int} id
 * @param {int} wrongAttempts
 * @param {int} goodAttempts
 * @param {int} final score
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
 * This function calculate and return
 * the final score of one player
 * @returns {int} number
 */
    Player.prototype.calculateFinalScore = function(){
        this.finalScore = (this.goodAttempts * 4 ) - (this.wrongAttempts * 2);
        return this.finalScore;
    };

/**
 * This function add the attempt type of the player (good or wrong)
 * @param {string} attemptType
 */
    Player.prototype.addAttempts = function(attemptType){
    (attemptType === "wrong") ? this.wrongAttempts++ : this.goodAttempts++;
    };

