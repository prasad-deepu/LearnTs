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
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    ;
    Person.prototype.changeAddress = function (newAddress) {
        console.log("Changing address to " + newAddress);
    };
    Person.prototype.giveDayOff = function () {
        console.log("Giving a day off to " + this.name);
    };
    Person.prototype.promote = function (percent) {
        this.giveDayOff();
        this.increasePay(percent);
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.increasePay = function (percent) {
        console.log("Increasing the salary of " + this.name + " by " + percent + "%");
    };
    return Employee;
}(Person));
var Contractor = /** @class */ (function (_super) {
    __extends(Contractor, _super);
    function Contractor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Contractor.prototype.increasePay = function (percent) {
        console.log("Increasing the hourly rate of " + this.name + " by  " + percent + "%");
    };
    return Contractor;
}(Person));
var workers = [];
workers[0] = new Employee('John');
workers[1] = new Contractor('Mary');
workers.forEach(function (worker) { return worker.promote(5); });
