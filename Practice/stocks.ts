class Person {

    constructor(public firstName: string,
                public lastName: string,
                private age: number) { }

    sellStock(symbol: string, numberOfShares: number) {
        console.log(`Selling ${numberOfShares} of ${symbol}`);
    }
}

class Employee extends Person {

    constructor (firstName: string, lastName: string,
                 age: number, public department: string)  {
        super(firstName, lastName, age);
    }

    sellStock(symbol: string, shares: number) {
        super.sellStock(symbol, shares);

        this.reportToCompliance(symbol, shares);
    }

    private reportToCompliance(symbol: string, shares: number) {
        console.log(`${this.lastName} from ${this.department} sold ${shares} shares of ${symbol}`);
    }
}

// const empl = new Employee('Joe', 'Smith', 29, 'Accounting');
// empl.sellStock('IBM', 100);
// console.log()

function fancyDate() {
    return `${this.getDate()}/${this.getMonth()}/${this.getFullYear()}`;
}

console.log(fancyDate.call(new Date));


function* fibgenerator(): IterableIterator<number> {
    let a = 0;
    let b = 1;

    while (true) {
        yield a;
        [a,b] = [b,a+b]

    }
}

let fbn = fibgenerator();
console.log(fbn.next());
console.log(fbn.next());
console.log(fbn.next());
console.log(fbn.next());
console.log(fbn.next());
console.log(fbn.next());
console.log(fbn.next());
console.log("/n");
function* createNumbers(): IterableIterator<number> {
    let n = 0
    while (1) {
        yield n++
    }
}

let numbers = createNumbers();

console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());