"use strict";
// funtion in Ts
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
addTwo(5);
// function getValue(myVal: number){
//     if(myVal > 5){
//         return true
//     }
//     return "200 OK"
// }
var getHello = function (s) {
    return "";
};
var heroes = ["thor", "spiderman", "ironman"];
heroes.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errMsg) {
    console.error(errMsg);
}
function HandleError(errMsg) {
    throw new Error(errMsg);
}
