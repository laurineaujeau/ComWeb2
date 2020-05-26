function Point(x, y){
    this.x = x;
    this.y = y;
}
//Point.prototype = Object.create(Shape.prototype);
/*Point.prototype.setCoord = function(x,y){
    this.x = x;
    this.y = y;
}*/
Point.prototype.getX=function(){
    return this.x;
}
Point.prototype.getY=function(){
    return this.y;
}