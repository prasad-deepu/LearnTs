// Shorthand call signature
type Log = (message: string, userId?: string) => void ;

let log: Log = (
message,
userId = 'Not signed in'
) => {
    let time = new Date().toISOString()
    console.log(time, message, userId)
} ;

log("Renuka")

//calling function parameter itself in main funtion times
function times(
    f: (index: number) => void,
    n: number
) {
    for (let i = 0; i < n; i++) {
        f(i)
    }
}

times(n => console.log(n), 4);


// function signature long form VVIMP
//OVERLOADED FUNCTION : A function with multiple call signatures. the below func sign is overloaded twice
// Reservation is the return type
type Reserve = {
    (from: Date, to: Date, destination: string): Reservation
    (from: Date, destination: string): Reservation
}

//function reserve implementation based on above function signature
let reserve: Reserve = (
    from: Date,
    toOrDestination: Date | string,
    destination?: string
) => {
    if (toOrDestination instanceof Date && destination !== undefined) {
        // Book a one-way trip
    } else if (typeof toOrDestination === 'string') {
        // Book a round trip
    }
}


