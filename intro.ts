function hi(name:string) {
    return "Hello " + name;
}

let message = hi("Levent");

console.log(message);

let sayi:number
sayi = 10
sayi = 10.4

let sehir:string
sehir = "İstanbul"
sehir = "Samsun"

let dogruMu:boolean = true
dogruMu = true
dogruMu = false

let sayilar:number[] = [1,2,3]
let sayilar2 : Array<number> = [5,4,3]

//Tuple
let dizi:[number,string] = [2,"Ankara"]

//Enum
enum Renk {
    Kirmizi = 1,
    Siyah,
    Beyaz
}

let renk : Renk = Renk.Kirmizi;