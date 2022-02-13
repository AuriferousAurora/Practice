class Circle {
    constructor(radius) {
        this.radius = radius;
        Circle.circlesMade++;
    };

    static draw(circle, canvas) {
        // Canvas drawing code
        return null;
    };

    static get circlesMade() {
        return !this._count ? 0 : this._count;
    };
    static set circlesMade(val) {
        this._count = val;
    };

    area() {
        return Math.pow(this.radius, 2) * Math.PI;
    };

    get radius() {
        return this._radius;
    };
    set radius(radius) {
        if (!Number.isInteger(radius))
            throw new Error("Circle radius must be an integer.");
        this._radius = radius;
    };
}

class ScalableCircle extends Circle {
    get radius() {
        // Using super allows bypassing current class definition and begin searching
        // for the property starting with the prototype.

        
        return this.scalingFactor * super.radius;
    }
    set radius() {
        throw new Error("ScalableCircle radius is constant." +
                        "Set scaling factor instead.");
    }

    // Code to handle scalingFactor
}