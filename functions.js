function topla(x, y) {
    return x + y;
}
var topla2 = function (x, y) {
    return x + y;
};
console.log(topla(20, 3));
console.log(topla2(20, 3));
//Rest parametreler
function invite(firstGuest) {
    var others = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        others[_i - 1] = arguments[_i];
    }
    return firstGuest + " " + others.join(" ");
}
console.log(invite("Ayşe", "Levent"));
