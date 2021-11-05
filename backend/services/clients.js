const MongoLib = require("../lib/mongo");

class ClientsService {
  constructor() {
    this.collection = "clients";
    this.MongoDB = new MongoLib();
  }

  async getClients() {
    const clients = await this.MongoDB.getAll(this.collection);
    return clients || [];
  }

  async getClient(id) {
    const client = await this.MongoDB.getOne(this.collection, id);
    return client || "";
  }
  async createClient(data) {
    const createClient = await this.MongoDB.create(this.collection, data);
    return createClient || "nothing was create";
  }

  async updateClient(id, data) {
    const upateClientId = await this.MongoDB.update(this.collection, id, data);
    return upateClientId || "nothing was updated";
  }

  async deleteClient(id) {
    const deleteCleintId = await this.MongoDB.delete(this.collection, id);
  }
}

module.exports = ClientsService;
