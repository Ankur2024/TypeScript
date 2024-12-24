interface user {
    email: string,
    userId: number,
    readonly dbId: number,
    googleId?: string,
    startTrail: () => string
}


// Reopening of the interface
interface user {
    githubToken? : String
}


//inheritance 
interface Admin extends user{
    role: "admin" | "user" | "learner"
}


const Ankur: user = {email: "a@a.com", userId: 1232, dbId: 343, startTrail: () => {
    return "trail started"
}}

export {};