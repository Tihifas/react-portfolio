class Vector {
    public x: number;
    public y: number;

    public constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public norm() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    public static add(v1: Vector, v2: Vector) {
        return new Vector(v1.x + v2.x, v1.y + v2.y);
    }

    public static subtract(v1: Vector, v2: Vector) {
        return new Vector(v1.x - v2.x, v1.y - v2.y);
    }

    public scale(a: number) {
        return new Vector(this.x * a, this.y * a);
    }

    public equals(vOther: Vector) {
        if (this.x === vOther.x && this.y === vOther.y) {
            return true;
        } else {
            return false;
        }
    }
}
export default Vector; 