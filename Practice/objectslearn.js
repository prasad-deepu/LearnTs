// enum Feature { Waterproof, Insulated }
// type Product = {
//     name: string,
//     price?: number,
//     hasFeature?(Feature): boolean
// };
// let hat = { name: "Hat", price: 100 };
// let gloves = { name: "Gloves", price: 75,  hasFeature: (feature) => feature === Feature.Insulated };
// let umbrella = { name: "Umbrella", price: 30, hasFeature: (feature) => feature === Feature.Waterproof };
// let products: Product[] = [hat, gloves, umbrella];
// products.forEach(prod => console.log(`${prod.name}: ${prod.price} `
//     + `${ prod.hasFeature ? prod.hasFeature(Feature.Insulated) : "false" }`));
var hat = { id: 1, name: "Hat", price: 100 };
var gloves = { id: 2, name: "Gloves", price: 75 };
var umbrella = { id: 3, name: "Umbrella" };
var bob = { id: "bsmith", name: "Bob", city: "London" };
var dataItems = [hat, gloves, umbrella, bob];
dataItems.forEach(function (item) {
    if ("city" in item) {
        console.log("Person: " + item.name + ": " + item.city);
    }
    else {
        console.log("Product: " + item.name + ": " + item.price);
    }
});
