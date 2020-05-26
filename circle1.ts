class Circle1 extends Shape1 {
    public radius: number;
    constructor(radius: number){
        super(0,0);
        this.radius=radius;
    }
    public getRadius() {
        return this.radius;
    }
    public draw1(context: any) {
        context.beginPath();
        context.arc(this.getCenter().getX(), this.getCenter().getY(), this.radius, 0, 2 * Math.PI);
        context.stroke();
    }
}