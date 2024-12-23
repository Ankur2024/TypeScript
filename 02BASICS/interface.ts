interface user {
    email: string,
    userId: number,
    readonly dbId: number,
    googleId?: string,
    startTrail: () => string
}

const Ankur: user = {email: "a@a.com", userId: 1232, dbId: 343, startTrail: () => {
    return "trail started"
}}