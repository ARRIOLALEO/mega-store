const MongoLib = require("../../lib/mongo");
class ProductsService {
  constructor() {
    this.collection = "products";
    this.mongoDB = new MongoLib();
  }

  async getProducts(coll) {
    console.log(this.collection);
    const products = await this.mongoDB.getAll(this.collection);
    return products || [];
  }
}

module.exports = ProductsService;
