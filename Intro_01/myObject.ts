const User = {
    name: "Ankur",
    email: "ankur123@gmail.com",
    isActive: true
}


let createUser = ({name: string, isPaid: boolean}) => {}

function createCourse(): {}{
    return {}
}


type User_1 = {
    readonly _id: String,
    name: string,
    email: string,
    isActive: boolean,
    creaditCardDetails? : number
}

let myUser: User_1 = {
    _id: "123",
    name: "Ankur",
    email: "ankur123@gmail.com",
    isActive: true
}

myUser.email = "a123@gmail.com"

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

let myCardDetails: cardDetails = {
    cardnumber: "1234567890123456",
    cardDate: "01/23",
    cvv: 123
}

export {}