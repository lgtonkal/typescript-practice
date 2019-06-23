class Home{
    //Default olarak public.

    //private: tanımlandığı class içinde erişilir.
    //protected: tandımlandığı class içinde ve miras alan sınıfar içerisinde erişilir. 
    //public: her yerden erişilebilir.

    _roomsCount:number;
    _windowsCount: number;
    _floorNumber:number;


    constructor (roomsCount:number, windowsCount:number, floorNumber:number){
        this._roomsCount = roomsCount;
        this._windowsCount = windowsCount;
        this._floorNumber = floorNumber;
    }

    eat(){
        console.log("Eat food :)");
    }

    getSpec() {
        console.log("Ev " + this._roomsCount + "odalı, " + this._windowsCount + " pencereli ve " + this._floorNumber + ". kattadır.");
    }
}

let home = new Home(2,3,4);
home.getSpec();
console.log(home._roomsCount);


//Inheritance

class Person {
    private _name:string;

    get name():string {
        return "Sn. " + this._name;
    }

    set name(name) {
        this._name = name;
    }
    save() {
        console.log("Person saved.");
    }
}

class Customer extends Person{
    sell() {
        console.log("Sales done.");
    }
}

class Employee extends Person{
    paySalary() {
        console.log("Salary paid.");
    }
}

let customer = new Customer;

customer.name = "Levent";
console.log(customer.name);

customer.save();
customer.sell();

let employee = new Employee;
employee.save();
employee.paySalary();

let person = new Person;
person.save();

