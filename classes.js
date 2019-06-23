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
var Home = /** @class */ (function () {
    function Home(roomsCount, windowsCount, floorNumber) {
        this._roomsCount = roomsCount;
        this._windowsCount = windowsCount;
        this._floorNumber = floorNumber;
    }
    Home.prototype.eat = function () {
        console.log("Eat food :)");
    };
    Home.prototype.getSpec = function () {
        console.log("Ev " + this._roomsCount + "odalı, " + this._windowsCount + " pencereli ve " + this._floorNumber + ". kattadır.");
    };
    return Home;
}());
var home = new Home(2, 3, 4);
home.getSpec();
console.log(home._roomsCount);
//Inheritance
var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return "Sn. " + this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Person.prototype.save = function () {
        console.log("Person saved.");
    };
    return Person;
}());
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Customer.prototype.sell = function () {
        console.log("Sales done.");
    };
    return Customer;
}(Person));
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.paySalary = function () {
        console.log("Salary paid.");
    };
    return Employee;
}(Person));
var customer = new Customer;
customer.name = "Levent";
console.log(customer.name);
customer.save();
customer.sell();
var employee = new Employee;
employee.save();
employee.paySalary();
var person = new Person;
person.save();
