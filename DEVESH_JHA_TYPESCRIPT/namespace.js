var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// <referance path="./utils.ts"/>
var UserUtils;
(function (UserUtils) {
    var user = /** @class */ (function (_super) {
        __extends(user, _super);
        function user() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        user.prototype.getName = function () {
            return this.name;
        };
        return user;
    }(parent));
    UserUtils.user = user;
})(UserUtils || (UserUtils = {}));
var u1 = new UserUtils.user();
u1.setName("Devesh");
console.warn(u1.getName());
