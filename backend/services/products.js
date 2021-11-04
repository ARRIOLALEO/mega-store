const MongoLib = require("../lib/mongo");
class ProductsService {
  constructor() {
    this.collection = "products";
    this.mongoDB = new MongoLib();
  }

  async getProducts() {
    const products = await this.mongoDB.getAll(this.collection);
    return products || [];
  }

  async getProduct(id) {
    const product = await this.mongoDB.getOne(this.collection, id);
    return product || "not found";
  }

  async createProduct(data) {
    const createProduct = await this.mongoDB.create(this.collection, data);
    return createProduct || "not added";
  }
  async updateProduct(id, data) {
    const updateProductId = await this.mongoDB.update(this.collection, id, data);
    return updateProductId || "not updated";
  }
  async deleteProduct(id) {
    const deletedProductId = await this.mongoDB.delete(this.collection, id);
    return deletedProductId || `the product ${id} was not found`;
  }
}

module.exports = ProductsService;
