class User {
    private _courseCount = 1;
    readonly city: string = "Jaipur"
    constructor(
        public name: string,
        public age: number,
        public email: string,
        public phoneNumber: number,
    ){}

    get getAppleEmail(): string{
        return `apple${this.email}`
    }

    get courseCount(): number{
        return this._courseCount;
    }

    set courseCount(courseNum){
        if(courseNum <= 1){
            throw new Error("Course count cannot be negative")
        }
        this._courseCount = courseNum
    }

    private deleteToken(){
        console.log("Token Deleted")
    }
}