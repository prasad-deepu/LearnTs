var ProductService = /** @class */ (function () {
    function ProductService() {
    }
    ProductService.prototype.getProducts = function (product) {
        if (typeof product === "number") {
            console.log("Getting the product info for id " + product);
            return { id: product, description: 'great product' };
        }
        else if (typeof product === "string") {
            console.log("Getting product with description " + product);
            return [{ id: 1, description: 'blue jeans' },
                { id: 789, description: 'blue jeans' }];
        }
        else {
            return { id: -1,
                description: 'Error: getProducts() accept only number or string as args' };
        }
    };
    return ProductService;
}());
var prodService = new ProductService();
console.log(prodService.getProducts(1));
console.log(prodService.getProducts(1, a));
console.log(prodService.getProducts('blue jeans'));
