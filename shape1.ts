abstract class Shape1 {
    public center: Point1;
    constructor(x: number, y: number){
        this.center = new Point1(x, y);
    }
    abstract draw1(context: any);
        setCenter(center: Point1):void{
            this.center = center;
        }
    
    public getCenter(){
        return this.center;
    }
}