const score: Array<number> = [] 
const names: Array<string> = [] 

function identityOne(val: boolean | number): boolean | number{
    return val
}
function identityTwo(val: any): any{
    return val
}
function identityThree<Type>(val: Type): Type{
    return val
}
function identityFour<T>(val: T): T{
    return val
}


function getSearchProducts<T>(products: T[]): T{
    //do some db operations
    const myIndex = 3
    return products[myIndex]
}


// Arrow Method with generics
const getMoreSearchProducts = <T>(products: T[]):T => {
    //do some db operations
    const myIndex = 4
    return products[myIndex]
}

interface Database{
    connection: string,
    userName: string,
    password: string 
}

function anotherFucntion<T, U extends number>(valOne: T, valTwo: U): object{
    return {
        valOne,
        valTwo
    }
}

anotherFucntion(3, 4.5)


interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(products: T){
        this.cart.push(products)
    }
}