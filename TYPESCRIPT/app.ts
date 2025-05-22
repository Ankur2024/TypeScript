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

// class Device{
//     name = "lg";
//     price = 20000;
//     category = "digital";
// }

// let d1 = new Device();
// let d2 = new Device();

// class Human{
//     // name: string;
//     // age: number;
//     constructor(name: string, age: number){
//         // this.name = name;
//         // this.age = age;
//     }
// }

// let h = new Human("Ankur", 23);

// class User{
//     constructor (public readonly name: string){}

// }

// let u1 = new User("Ankur")
// console.log(u1);

//GETTER SETTER
// class User {
//     constructor(public _name: string, public age: number) { }
//     get name() {
//         return this._name;
//     }
//     set name(name: string) {
//         this._name = name;
//     }

// }
// let u1 = new User("Ankur", 20)
// console.log(u1);



// ABSRTRACT CLASSES
// class Payment{
//     constructor(protected amount: number, protected accountNumber: number) { }
//     isPaymentAmount(amount: number){
//         return this.amount > 0
//     }
// }

// class Paytm extends Payment{
//     // implement according to your need
// }


// FUNCTION
// function abcs(): void {
// }

// function fun(name: string, cb: (value: string)=>void){

// }

// fun("", (value: string) => {
//     console.log("SFWEF")
// })


// FUNCTION OVERLOADING
// function abcd(a:number): void;
// function abcd(b: string): number;

// function abcd(a: any, b?: any){
//     if(typeof a === "string" && typeof b === undefined){
//         console.log("hey");
//     }if(typeof a === "string" && typeof b === "number"){
//         return 123;
//     } 
//     else {
//         throw new Error("Something went wrong");
//     }
// }


//GENERIC
function logger<T>(a: T){

}

logger<string>("sfwfew");
logger<number>(234);
logger(null);