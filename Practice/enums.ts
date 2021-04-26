//enums : By default, enums are zero-based which helps define a limited set of constants.
//the below function we declare Direction enum tht restricts the allowed values to either FtoC or CtoF and nothing else.
enum Direction {
FtoC,
CtoF
}

function convertTemperature(temp: number, fromTo: Direction): number {  

    return (Direction.FtoC === fromTo) ?
        (temp - 32 ) * 5.0/9.0:
        temp * 9.0 / 5.0 + 32;
}

console.log(`70F is ${convertTemperature(70, Direction.FtoC)}C`);
console.log(`21C is ${convertTemperature(21, Direction.CtoF)}F`);