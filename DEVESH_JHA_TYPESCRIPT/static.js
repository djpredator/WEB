var sphere = /** @class */ (function () {
    function sphere() {
        this.pi = 3;
    }
    sphere.surfacearea = function (radius) {
        return this.pi * radius * radius * 4;
    };
    sphere.pi = 3;
    return sphere;
}());
console.log(sphere.surfacearea(3));
