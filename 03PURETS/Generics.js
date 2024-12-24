var score = [];
var names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
function identityFour(val) {
    return val;
}
function getSearchProducts(products) {
    //do some db operations
    var myIndex = 3;
    return products[myIndex];
}
// Arrow Method with generics
var getMoreSearchProducts = function (products) {
    //do some db operations
    var myIndex = 4;
    return products[myIndex];
};
function anotherFucntion(valOne, valTwo) {
    return {
        valOne: valOne,
        valTwo: valTwo
    };
}
anotherFucntion(3, 4.5);
var Sellable = /** @class */ (function () {
    function Sellable() {
        this.cart = [];
    }
    Sellable.prototype.addToCart = function (products) {
        this.cart.push(products);
    };
    return Sellable;
}());
