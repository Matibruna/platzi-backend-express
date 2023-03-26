const productsRouter = require("./products.router");
const categoriesRouter = require("./categories.router");

function routerAPI(app){
    const PRODUCTS = "/products";
    const CATEGORIES = "/categories";

    app.use(PRODUCTS, productsRouter)
    app.use(CATEGORIES, categoriesRouter)
}

module.exports = routerAPI;
