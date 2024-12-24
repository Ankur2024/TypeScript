var User = /** @class */ (function () {
    function User(name, age, email, phoneNumber) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this._courseCount = 1;
        this.city = "Jaipur";
    }
    Object.defineProperty(User.prototype, "getAppleEmail", {
        get: function () {
            return "apple".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "courseCount", {
        get: function () {
            return this._courseCount;
        },
        set: function (courseNum) {
            if (courseNum <= 1) {
                throw new Error("Course count cannot be negative");
            }
            this._courseCount = courseNum;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.deleteToken = function () {
        console.log("Token Deleted");
    };
    return User;
}());
