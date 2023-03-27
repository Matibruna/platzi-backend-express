const boom = require("@hapi/boom");
const { faker }  = require('@faker-js/faker');

class ProductosService{

    constructor(){
        this.productos = [];
        
        for (let index = 0; index < 100; index++) {
            this.productos.push({
                id: faker.datatype.uuid(),
                name: faker.commerce.productName(),
                price: faker.commerce.price
            });
        }
    }

    findAll(){
        return this.productos;
    }

    async findOne(id){
        let product = this.productos.find(el => el.id === id);

        if(product){
            return product;
        }

        throw boom.notFound("Product not found.");
    }

    async update(id, updatedProduct){
        let index = this.productos.findIndex(el => el.id === id);

        if(index === -1) throw boom.notFound("Product not found.");

        this.productos[index] = {
            ...this.productos[index],
            ...updatedProduct
        };
        
        return this.productos[index];
    }

    create(product){
        this.productos.push({
            id: faker.datatype.uuid(),
            ...product
        });
    }

    delete(id){
        let prodId;
        this.productos.filter((el, index) => {
            if(el.id === id){
                prodId = index;
                return true;
        }});
        this.productos.splice(prodId, 1);
    }
}

module.exports = ProductosService;
