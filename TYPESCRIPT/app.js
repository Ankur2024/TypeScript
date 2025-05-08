"use strict";
// var a = 12;
// console.log(a)
// //tuple
// let arr: [string, number] = ["Ankur", 1]
// let arr1: [number, boolean] = [4, true]
// //enum
// enum UserRoles {
//     ADMIN = "admin",
//     USER = "user"
// }
// enum StatusCode {
//     OK = 200,
//     Created = 201,
//     BadRequest = 400,
//     Unauthorized = 401,
//     Forbidden = 403,
//     NotFound = 404,
//     InternalServerError = 500
// }
// interface
// interface User {
//     name: string,
//     age: number,
//     isActive: boolean
// }
// function getData(user: User) {
//     console.log(user)
// }
// let user: User = {
//     name: "Ankur",
//     age: 23,
//     isActive: true
// }
// getData(user)
// interface Admin extends User {
//     role?: string
// }
// let admin: Admin = {
//     name: "Ankur",
//     age: 23,
//     isActive: true,
//     role: "Admin"
// }
// getData(admin)
// Intersection Types
// type arg = String | number | null
// function obj(val: arg) {
// }
// type intersectionUser = {
//     name: string,
//     email: string,
// }
// type Admin_1 = intersectionUser & {
//     getDetail(user: string): void
// }
// function abcs(a: Admin_1){
//     console.log(a)
// }
//Class & Object
class Device {
    constructor() {
        this.name = "lg";
        this.price = 20000;
        this.category = "digital";
    }
}
let d1 = new Device();
let d2 = new Device();
class Human {
    // name: string;
    // age: number;
    constructor(name, age) {
        // this.name = name;
        // this.age = age;
    }
}
let h = new Human("Ankur", 23);
