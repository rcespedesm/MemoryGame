 /**
 * Created by Administrator on 2/5/2016.
 */


var Utils = function(){
    this.ids = [];
};

Utils.prototype.generateId = function(){
    do{
        var randomId = Math.floor(Math.random() * 99) + 200;
        var verify = this.verifyIds(randomId);
    }while(verify === 1);
    this.ids.push(randomId);
    return randomId;
};

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
