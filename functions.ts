function topla(x:number,y:number):number {
    return x+y;
}

let topla2 = function(x:number,y:number):number {
    return x+y;
}

console.log(topla(20,3));
console.log(topla2(20,3));


//Rest parametreler

function invite(firstGuest:string, ... others:string[]) : string {
    return firstGuest + " " + others.join(" ");
}

console.log(invite("Ayşe","Levent"));

function invite2(... others:string[]) : string {
    return others.join(' ');
    
}

console.log(invite2());