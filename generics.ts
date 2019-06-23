//Generic

function reset(x:number):number {
    return x;
}

let sayi = reset(10);

console.log(sayi);

function reset2(x:string):string {
    return x;
}

let sehir = reset2("Ankara");

console.log(sehir);

//generic fonksiyon

function reset3<T>(x:T):T {
    return x;
}

let firstName = reset3<String>("Levent");

console.log(firstName);

let age = reset3<Number>(24);

console.log(age);


//Generic classes

class GenericClass<T> {
    degisken : T;

    fonksiyon(param:T):T {
        return param;
    }
}

let sinif = new GenericClass<string>();

sinif.fonksiyon('Ankara');

let sinifSayisi = new GenericClass<number>();

sinifSayisi.fonksiyon(550);
