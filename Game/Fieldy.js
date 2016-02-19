/**
 * Created on 2/10/2016.
 */

var Field = function(x,y,id)
{
    this.x = x;
    this.y = y;
    this.id = id;
    this.status = false;
};

Field.prototype.getID = function(){
    return this.id;
};
Field.prototype.getStatus = function(){
    return this.status;
};
Field.prototype.setStatus = function(){
    this.status = true;
};

