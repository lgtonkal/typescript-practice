interface Product {
    id:number;
    name:string;
    unitPrice:number;

}

class Product2 {
    id:number;
    name:string;
    unitPrice:number;
}

function save(product:Product) {
    console.log(product.name +" saved");
}

function save2(product:Product2) {
    console.log(product.name +" saved");
}

save({id:1, name:"Asd",unitPrice:5});

let mouse = new Product2();

mouse.name = "Logitech";

save2(mouse);


interface PersonService {
    save();
}

class CustomerService implements PersonService {
    save() {
        console.log("Saved!");
    }
}

