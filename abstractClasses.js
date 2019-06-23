//Abstract Class
//Ortak ve ortak olmayan operasyonları belirlemek için kullanırız.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CreditBase = /** @class */ (function () {
    function CreditBase() {
    }
    CreditBase.prototype.save = function () {
        console.log("Saved!");
    };
    return CreditBase;
}());
var HomeCredit = /** @class */ (function (_super) {
    __extends(HomeCredit, _super);
    function HomeCredit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HomeCredit.prototype.calculate = function () {
        console.log("This is home credit calculate");
    };
    return HomeCredit;
}(CreditBase));
var VehicleCredit = /** @class */ (function (_super) {
    __extends(VehicleCredit, _super);
    function VehicleCredit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VehicleCredit.prototype.calculate = function () {
        console.log("This is vehicle credit calculate");
    };
    return VehicleCredit;
}(CreditBase));
var homeCredit = new HomeCredit;
homeCredit.calculate();
homeCredit.save();
var vehicleCredit = new VehicleCredit;
vehicleCredit.calculate();
vehicleCredit.save();
