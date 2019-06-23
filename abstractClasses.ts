//Abstract Class
//Ortak ve ortak olmayan operasyonları belirlemek için kullanırız.

abstract class CreditBase {
    constructor() {
        
    }

    save():void{
        console.log("Saved!");
    }

    //Her yerde ortak olmadığı için imza şeklinde
    abstract calculate():void;
}

class HomeCredit extends CreditBase {
    
    calculate(): void {
        console.log("This is home credit calculate");
    }

}

class VehicleCredit extends CreditBase {
    
    calculate(): void {
        console.log("This is vehicle credit calculate");
    }

}

let homeCredit = new HomeCredit;
homeCredit.calculate();
homeCredit.save();

let vehicleCredit = new VehicleCredit;
vehicleCredit.calculate();
vehicleCredit.save();

let credit : CreditBase;

//Bu şekilde ister ev kredisi olarak davranır ister araç kredisi olarak.
credit = new HomeCredit();

credit = new VehicleCredit();

