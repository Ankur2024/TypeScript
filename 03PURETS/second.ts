// class TakePhoto {
//     constructor (
//         public cameraMode: string,
//         public storage: string,
//         public filter: string
//     ){}
// }

// const ak = new TakePhoto("test","ts","Sf")


abstract class TakePhoto {
    constructor (
        public cameraMode: string,
        public storage: string,
        public filter: string
    ){}

    abstract getSepia(): void
}


class Instagram extends TakePhoto{
    constructor(cameraMode: string, storage: string, filter: string){
        super(cameraMode, storage, filter)
    }

    getSepia(): void {
        console.log("Sepia filter applied")
    }
}