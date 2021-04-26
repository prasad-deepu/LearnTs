// declaring types with not just property names but also method signatures
enum Feature { Waterproof, Insulated }
type Product = {
    name: string,
    price?: number,
    hasFeature?(Feature): boolean
};
let hat = { name: "Hat", price: 100 };
let gloves = { name: "Gloves", price: 75,  hasFeature: (feature) => feature === Feature.Insulated };
let umbrella = { name: "Umbrella", price: 30, hasFeature: (feature) => feature === Feature.Waterproof };
let products: Product[] = [hat, gloves, umbrella];
products.forEach(prod => console.log(`${prod.name}: ${prod.price} `
    + `${ prod.hasFeature ? prod.hasFeature(Feature.Insulated) : "false" }`));

//Type Guarding by Checking Properties
type Product = {
    id: number,
    name: string,
    price?: number
};
type Person = {
    id: string,
    name: string,
    city: string
};
let hat = { id: 1, name: "Hat", price: 100 };
let gloves = { id: 2, name: "Gloves", price: 75 };
let umbrella = { id: 3, name: "Umbrella", price: 35};
let bob = { id: "bsmith", name: "Bob", city: "London" };
let dataItems: (Product | Person)[] = [hat, gloves, umbrella, bob];
dataItems.forEach(item => {
    if ("city" in item) {
        console.log(`Person: ${item.name}: ${item.city}`);
    } else  {
        console.log(`Product: ${item.name}: ${item.price}`);
    }
});