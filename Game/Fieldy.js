/**
 * Created on 2/10/2016.
 */

/**
 * This Class is to handle board fields
 * @param {int}x is the row position
 * @param {int}y is the column position
 * @param {int}id is the value of the field
 * @param {bool}status indicates if the fields has been matched
 * @constructor set all class attributes.
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