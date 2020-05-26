class Rectangle1 extends Shape1 {
    public width: number;
    public height: number;
    constructor(width: number, height: number){
        super(0,0);
        this.width=width;
        this.height=height;
    }
    public getWidth() {
        return this.width;
    }
    public getHeight() {
        return this.height;
    }
    public draw1(context:any){
        context.beginPath();
        context.rect(this.getCenter().getX(), this.getCenter().getY(), this.width, this.height);
        context.stroke();
    }
}