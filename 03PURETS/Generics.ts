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

function anotherFucntion<T, U extends number>(valOne: T, valTwo: U): object{
    return {
        valOne,
        valTwo
    }
}

anotherFucntion(3, 4.5)