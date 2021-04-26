class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    sellStock(symbol, numberOfShares) {
        console.log(`Selling ${numberOfShares} of ${symbol}`);
    }
}
class Employee extends Person {
    constructor(firstName, lastName, age, department) {
        super(firstName, lastName, age);
        this.department = department;
    }
    sellStock(symbol, shares) {
        super.sellStock(symbol, shares);
        this.reportToCompliance(symbol, shares);
    }
    reportToCompliance(symbol, shares) {
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
function* fibgenerator() {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
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
function* createNumbers() {
    let n = 0;
    while (1) {
        yield n++;
    }
}
let numbers = createNumbers();
console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());
