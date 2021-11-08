const MongoLib = require("../lib/mongo");
const bcript = require("bcrypt");
class UsersServices {
  constructor() {
    this.collection = "users";
    this.MongoDB = new MongoLib();
  }

  async getUsers() {
    const users = await this.MongoDB.getAll(this.collection);
    return users || [];
  }

  async getUser(id) {
    const user = await this.MongoDB.getOne(this.collection, id);
    return user || "";
  }
  async createUser(data) {
    data.password = await bcript.hash(data.password, 10);
    const createUser = await this.MongoDB.create(this.collection, data);
    return createUser || "nothing was create";
  }

  async updateUser(id, data) {
    const upateUserId = await this.MongoDB.update(this.collection, id, data);
    return upateUserId || "nothing was updated";
  }

  async deleteUser(id) {
    const deleteUser = await this.MongoDB.delete(this.collection, id);
    return deleteUser || "nothing was deleted";
  }
}

module.exports = UsersServices;
