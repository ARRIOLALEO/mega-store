const MongoLib = require("../../lib/mongo");
class ProductsService {
  constructor() {
    this.collection = "products";
    this.mongoDB = new MongoLib();
  }

  async getProducts(category) {
    const products = await this.mongoDB.getAll(category);
    return products || [];
  }

  async getProduct(category, id) {
    const product = await this.mongoDB.getOne(category, id);
    return product || "not found";
  }
}

module.exports = ProductsService;
