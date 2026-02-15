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
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
var EmployeeWages = /** @class */ (function (_super) {
    __extends(EmployeeWages, _super);
    function EmployeeWages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmployeeWages.prototype.wages = function (hours, rate) {
        if (this.years_of_service > 10) {
            return (hours * rate) + 100;
        }
        else {
            return hours * rate;
        }
    };
    return EmployeeWages;
}(Employee));
var EmpWages = new EmployeeWages();
EmpWages.name = "John";
EmpWages.years_of_service = 11;
EmpWages.hours = 40;
EmpWages.rate = 20;
var wages = EmpWages.wages(EmpWages.hours, EmpWages.rate);
console.log("Name: ".concat(EmpWages.name));
console.log("Wages: \u00A3".concat(wages));
