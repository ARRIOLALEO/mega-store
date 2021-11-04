const MongoLib = require("../lib/mongo");

class OrdersService {
  constructor() {
    this.collection = "orders";
    this.mongoDB = new MongoLib();
  }

  async getOrders({ clientId }) {
    const query = clientId && { clientId: clientId };
    const orders = await this.mongoDB.getAll(this.collection, query);
    return orders || [];
  }

  async getOrder(id) {
    const order = await this.mongoDB.getOne(this.collection, id);
    return order || "nothing found";
  }

  async createOrder(data) {
    const createOrder = await this.mongoDB.create(this.collection, data);
    return createOrder || "nothing was create";
  }

  async updateOrder(id, data) {
    const updateOrderId = await this.mongoDB.update(this.collection, id, data);
    return updateOrderId || "nothing was updated";
  }

  async deleteOrder(id) {
    const deleteOrderId = await this.mongoDB.delete(this.collection, id);
    return deleteOrderId || "nothing was deleted";
  }
}

module.exports = OrdersService;
