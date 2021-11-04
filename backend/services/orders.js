const MongoLib = require("../lib/mongo");

class OrdersService {
  constructor() {
    this.collection = "orders";
    this.mongoDB = new MongoLib();
  }

  async getOrders() {
    const orders = await this.mongoDB.getAll(this.collection);
    return orders || [];
  }
}

module.exports = OrdersService;
