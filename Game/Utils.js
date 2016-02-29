 /**
 * Created by Administrator on 2/5/2016.
 */

 /**
  * This class is to generate random ids for the players
  * @constructor
  */
var Utils = function(){
    this.ids = [];
};
 /**
  * This function generate a random number and stored in the array
  * @returns {int} randomId
  */
Utils.prototype.generateId = function(){
    do{
        var randomId = Math.floor(Math.random() * 99) + 200;
        var verify = this.verifyIds(randomId);
    }while(verify === 1);
    this.ids.push(randomId);
    return randomId;
};
 /**
  * This function is to verify that number is not exist in the array
  *
  * @param number is the value to verify
  * @returns {number} if the number exist in the array return 0 else return true
  */
Utils.prototype.verifyIds = function(number){
    if(this.ids.length === 0)
        return 0;
    else{
        for(var i = 0 ; i < this.ids.length ; i++){
            if(this.ids[i] === number)
            {
                return 1;
            }
        }
        return 0;
    }


};
