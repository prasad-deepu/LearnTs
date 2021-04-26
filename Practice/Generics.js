//Generic Type Filter here we start with <T> <>, are how you declare generic type parameter and T is the parameter
let filter = (array, f) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        if (f(item)) {
            result.push(item);
        }
    }
    return result;
};
let names = [
    { firstName: 'beth' },
    { firstName: 'caitlyn' },
    { firstName: 'xin' }
];
filter(names, _ => _.firstName.startsWith('b'));
filter([1, 2, 3], _ => _ > 2);
//genrics defined here as A named function call signature
function map(array, f) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result[i] = f(array[i]);
    }
    return result;
}
console.log(map([1, 2, 3], _ => _ < 2));
