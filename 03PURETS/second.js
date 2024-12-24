// class TakePhoto {
//     constructor (
//         public cameraMode: string,
//         public storage: string,
//         public filter: string
//     ){}
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// const ak = new TakePhoto("test","ts","Sf")
var TakePhoto = /** @class */ (function () {
    function TakePhoto(cameraMode, storage, filter) {
        this.cameraMode = cameraMode;
        this.storage = storage;
        this.filter = filter;
    }
    return TakePhoto;
}());
var Instagram = /** @class */ (function (_super) {
    __extends(Instagram, _super);
    function Instagram(cameraMode, storage, filter) {
        return _super.call(this, cameraMode, storage, filter) || this;
    }
    Instagram.prototype.getSepia = function () {
        console.log("Sepia filter applied");
    };
    return Instagram;
}(TakePhoto));
