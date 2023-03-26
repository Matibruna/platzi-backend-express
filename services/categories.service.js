const { faker }  = require('@faker-js/faker');

class CategoriesService{

    constructor(){
        this.categories = [];
        
        for (let index = 0; index < 100; index++) {
            this.categories.push({
                id: faker.datatype.uuid(),
                name: faker.commerce.productName(),
                price: faker.commerce.price
            });
        }
    }

    findAll(){
        return this.categories;
    }

    findOne(id){
        return this.categories.find(el => el.id === id);
    }

    update(id, updatedCategory){
        let index = this.categories.findIndex(el => el.id === id);

        if(index === -1) throw new Error("not found");

        this.categories[index] = {
            ...this.categories[index],
            ...updatedCategory
        };

        return this.categories[index];
    }

    create(category){
        this.categories.push({
            id: faker.datatype.uuid(),
            ...category
        });
    }

    delete(id){
        let index = this.categories.findIndex(el => el.id === id);
        this.categories.splice(index, 1);
    }
}

module.exports = CategoriesService;
