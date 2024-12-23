let score: number | string = 33
score = "34"

type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let ankur: User | Admin = {name: "Ankur", id: 44}

ankur = {username: "Akki", id: 34}