/**
 * Created on 2/10/2016.
 */

var Field = function(x,y,id, status)
{
    this.x = x;
    this.y = y;
    this.id = id;
    this.status = status;
};

Field.prototype.getID = function(){
    return this.id;
};
Field.prototype.getStatus = function(){
    return this.status;
};
Field.prototype.setStatus = function(status){
    this.status = status;
};