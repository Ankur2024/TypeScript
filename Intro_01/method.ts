// funtion in Ts

function addTwo(num: number){
    return num + 2
}

addTwo(5)

// function getValue(myVal: number){
//     if(myVal > 5){
//         return true
//     }
//     return "200 OK"
// }


const getHello = (s: string): string=> {
    return ""
}

const heroes = ["thor", "spiderman", "ironman"]
heroes.map((hero) => {
    return `hero is ${hero}`
})


function consoleError(errMsg: string): void{
    console.error(errMsg)
}
function HandleError(errMsg: string): never{
    throw new Error(errMsg)
}


export {}