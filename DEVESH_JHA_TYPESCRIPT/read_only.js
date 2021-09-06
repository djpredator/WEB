var area_rectangle = /** @class */ (function () {
    function area_rectangle(len, wid) {
        this.length = len;
        this.width = wid;
    }
    return area_rectangle;
}());
var area = new area_rectangle(25, 25);
area.length = 25;
area.width = 25;
console.log(area);
